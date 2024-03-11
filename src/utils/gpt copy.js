import { ref, onMounted } from "vue";
import OpenAI from "openai";
import {
  getGptSettings,
  updateMessage,
  updateMessageRun,
  deleteSubCollection,
  deleteTask,
  updateTask,
  updateTaskLog,
} from "./fsdb";
import { useAppStore } from "@/store/app";
import { deleteFileFromPath, downloadFile } from "@/utils/fsfile";
import { web_search } from "@/utils/websearch";
import { updateStepObj } from "@/utils/fsdb";
import { deleteDoc } from "firebase/firestore";

const appStore = useAppStore();
const openai = ref(null);
const gptSettings = ref(null);

(async () => {
  gptSettings.value = await getGptSettings();
  openai.value = new OpenAI({
    apiKey: gptSettings.value.api_key,
    dangerouslyAllowBrowser: true,
  });
})();

const logging = (sid, msg) => {
  const current_time = new Date().toLocaleString();
  const newmsg = `${sid}-${current_time}------${msg}`;
  updateTaskLog(uid, tid, newmsg);
  console.log(newmsg);
};
// message를 assistant에 보내고 답변을 받음
export const sendAndRunStep = async (stepObj, refresh = false) => {
  let myRun;
  if (!refresh) {
    await openai.value.beta.threads.messages.create(stepObj.thread_id, {
      role: "user",
      content: stepObj.message,
      file_ids: stepObj.fileids,
    });

    myRun = await openai.value.beta.threads.runs.create(stepObj.thread_id, {
      assistant_id: stepObj.assistant_id,
    });
    updateStepObj(stepObj, { run_id: myRun.id });
  } else {
    if (stepObj.run_id) {
      myRun = await openai.value.beta.threads.runs.retrieve(
        stepObj.thread_id,
        stepObj.run_id
      );
      console.log("refresh run: ", myRun.status);
      if (myRun.status === "requires_action") {
        const run = await openai.value.beta.threads.runs.cancel(
          stepObj.thread_id,
          myRun.id
        );
        console.log("refresh run --- cancel: ", run);
        await updateStepObj(stepObj, { status: "failed" });

        if (stepObj.newThread) {
          deleteFile(stepObj.fileids[0]);
          deleteAssistant(stepObj.assistant_id);
        }
      } else {
      }
    } else {
      return;
    }
  }

  let keepRetrievingRun;
  let allMessages;
  let runStatus = "";

  while (myRun.status === "queued" || myRun.status === "in_progress") {
    keepRetrievingRun = await openai.value.beta.threads.runs.retrieve(
      stepObj.thread_id,
      myRun.id
    );
    console.log(`Run status: ${keepRetrievingRun.status}`);
    if (runStatus !== keepRetrievingRun.status) {
      updateTask(appStore.task, {
        [stepObj.stepname]: { loading: true },
      });
      runStatus = keepRetrievingRun.status;
      updateStepObj(stepObj, { status: runStatus });
    }
    if (
      keepRetrievingRun.status == "queued" ||
      keepRetrievingRun.status == "in_progress"
    ) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } else if (keepRetrievingRun.status === "requires_action") {
      const toolCalls =
        keepRetrievingRun.required_action.submit_tool_outputs.tool_calls;
      const toolOutputs = [];

      for (const toolCall of toolCalls) {
        const functionName = toolCall.function.name;
        console.log(
          `This question requires us to call a function: ${functionName}`
        );
        const args = JSON.parse(toolCall.function.arguments);
        const output = await web_search(args.query);

        toolOutputs.push({
          tool_call_id: toolCall.id,
          output: output,
        });
      }
      await openai.value.beta.threads.runs.submitToolOutputs(
        stepObj.thread_id,
        myRun.id,
        {
          tool_outputs: toolOutputs,
        }
      );
      continue;
    } else {
      allMessages = await openai.value.beta.threads.messages.list(
        stepObj.thread_id
      );
      editMsg(stepObj, allMessages.data[0]);
      return true;
    }
  }
  if (appStore.task[stepObj.stepname].loading) {
    updateTask(appStore.task, {
      [stepObj.stepname]: {
        ...appStore.task[stepObj.stepname],
        loading: false,
      },
    });
  }
  return;
};

const editMsg = async (stepObj, msgData) => {
  if (!msgData) {
    console.log("msgData is null");
    if (stepObj.newThread) {
      deleteFile(stepObj.fileids[0]);
      deleteAssistant(stepObj.assistant_id);
    }
    return;
  }

  const msg = msgData.content[0].text.value;
  console.log("editMsg", msg);
  appStore.response = msg;

  if (!msg.includes("```json")) {
    console.log("json 형식이 아닙니다.", msg);
    const errorMsg = "error! json 형식이 아닙니다. console.log를 확인해주세요.";
    await updateStepObj(stepObj, { error: true, errorMsg: errorMsg });
    updateTask(appStore.task, {
      [stepObj.stepname]: { loading: false, error: true, errorMsg: errorMsg },
    });
    return;
  }
  let jsonStr = msg.split("```json")[1];
  jsonStr = jsonStr.split("```")[0];
  const jsonRes = JSON.parse(jsonStr);

  await updateStepObj(stepObj, {
    ...msgData,
    response: jsonRes,
  });

  if (jsonRes.hasOwnProperty(stepObj.stepname)) {
    jsonRes[stepObj.stepname]["loading"] = false;
  } else {
    jsonRes[stepObj.stepname] = { loading: false };
  }
  console.log("data", jsonRes);

  updateTask(appStore.task, jsonRes);

  if (stepObj.newThread) {
    deleteFile(stepObj.fileids[0]);
    deleteAssistant(stepObj.assistant_id);
  }

  return jsonRes;
};

// delete task, subcollections and files
export const deleteTaskDb = async (task) => {
  deleteAssistantThreadFiles(task);
  const collectionNames = [
    "Citations",
    "Claims",
    "Descriptions",
    "SimilarDocuments",
    "Codes",
    "Steps",
  ];
  for (const collectionName of collectionNames) {
    deleteSubCollection(task, "Tasks", collectionName);
  }
  await deleteTask(task);
};

const deleteAssistantThreadFiles = async (task) => {
  if (!task) return;
  if (task.hasOwnProperty("fileids") && task.fileids.length > 0) {
    task.fileids.forEach((fileid) => {
      deleteFile(fileid);
    });
    task.filepaths.forEach((filepath) => {
      deleteFileFromPath(filepath);
    });
  }
  try {
    if (task.assistant_id) {
      await deleteAssistant(task.assistant_id);
      console.log("delete assistant", task.assistant_id);
    } else {
      console.log("assistant_id does not exist in the task");
    }
  } catch (err) {
    console.log("assistant delete error", err);
  }
};

const deleteAssistant = async (assistantId) => {
  const response = await openai.value.beta.assistants.del(assistantId);
  console.log("delete assistant", response);
};
const deleteThread = async (threadId) => {
  const response = await openai.value.beta.threads.del(threadId);
  console.log("delete thread", response);
};
const deleteFile = async (fileId) => {
  try {
    const response = await openai.value.files.del(fileId);
    console.log("delete files", response);
  } catch (err) {
    console.log("delete files error", err);
  }
};
