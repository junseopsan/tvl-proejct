<template>
  <div class="flex flex-col justify-between overflow-hidden">
    <div
      class="flex-grow"
      :class="conversation.length == 0 ? 'h-96' : 'h-12'"
    ></div>

    <div class="flex flex-col items-center">
      <div class="flex flex-col items-center space-y-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="h-10 w-10 rounded-full border-2 border-solid border-gray-200 p-1.5 text-gray-700"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          ></path>
        </svg>
        <div class="text-lg font-bold font-sans">Assistant API Test</div>
        <div class="mt-4 pb-4 text-xs font-sans text-gray-500">
          assistant api test를 위한 페이지입니다. message를 입력하여
          테스트합니다. message는 instruction 입니다.
        </div>
      </div>

      <div class="w-7/12 gap-x-4 relative">
        <div class="mt-4 pb-4 text-sm font-sans text-gray-500">
          <div
            v-for="(message, index) in conversation"
            :key="index"
            class="mt-3"
          >
            <div
              v-if="message.type === 'user'"
              class="text-left mr-5 bg-blue-500 text-white p-2 rounded-lg"
            >
              {{ message.text }}
            </div>

            <div
              v-else
              class="text-left ml-5 mb-5 text-black bg-gray-300 p-2 rounded-lg"
            >
              {{ message.text }}
            </div>
          </div>
        </div>
        <div class="">
          <div
            v-if="loading"
            class="my-5 ml-3 h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin"
          ></div>
          <div class="flex space-x-1">
            <textarea
              rows="1"
              v-model="userInput"
              @keyup.enter="sendMessage"
              @input="autoResize"
              placeholder="요약할 텍스트를 입력하세요"
              class="bg-stone-100 w-1/2 flex-auto rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      <p
        v-if="errorCheck && errorMsg"
        class="mt-2 text-sm text-red-600"
        id="email-error"
      >
        {{ errorMsg }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { mainprocess_get_patent_info, mainprocess_make_message } from "@/api";
import { useAppStore } from "@/store/app";
import { ref } from "vue";
import { useRouter } from "vue-router";

const appStore = useAppStore();
const router = useRouter();

const conversation = ref([]);
const userInput = ref("");
const pastUserInput = ref("");

const textInput = ref("");
const resValue = ref();

const PatentNumber = ref("10-2019-0059428");
const errorCheck = ref(false);
const errorMsg = ref("");
const loading = ref(false);

const autoResize = (e) => {
  e.target.style.height = "auto";
  e.target.style.height = e.target.scrollHeight + "px";
};

const addMessage = async (text, type) => {
  conversation.value.push({ text, type });
};
const sendMessage = () => {
  if (userInput.value === pastUserInput.value) return;
  pastUserInput.value = userInput.value;

  loading.value = true;
  const userMessage = userInput.value;
  addMessage(userMessage, "user");
  userInput.value = "";

  mainprocess_make_message({ tid: "test", message: userMessage })
    .then((res) => {
      console.log(res.data);
      const assistantMessage = res.data.result;
      addMessage(assistantMessage, "assistant");
      console.log(conversation.value);
      loading.value = false;
    })
    .catch((err) => {
      console.log(err);
      addMessage("오류입니다. 잠시 후 다시 시도해주세요.", "assistant");
      loading.value = false;
    });
};

const checkInput = () => {
  if (PatentNumber.value === "") {
    errorCheck.value = true;
    errorMsg.value = "특허 공개번호 또는 등록번호를 입력해주세요.";
    return false;
  }
  const regex =
    /^[0-9]{2}-[0-9]{4}-[0-9]{7}$|^[0-9]{2}-[0-9]{7}$|^[0-9]{2}[0-9]{4}[0-9]{7}$|^[0-9]{2}[0-9]{7}$/;
  if (!regex.test(PatentNumber.value.trim())) {
    errorCheck.value = true;
    errorMsg.value = "특허 공개번호 또는 등록번호가 형식에 맞지 않습니다.";
    return false;
  }
  return true;
};

const submitInput = async () => {
  if (!checkInput()) return;
  loading.value = true;
  appStore.task = null;

  addMessage(`${PatentNumber.value.trim()}`, "user");
  const payload = {
    select_number: PatentNumber.value,
  };
  await mainprocess_get_patent_info(payload)
    .then(async (res) => {
      appStore.task = res.data.task;
      appStore.cpcInfo = res.data.cpc_info;
      appStore.similarPatentInfo = res.data.similar_documents;
      await addMessage(
        `특허 공개번호 또는 등록번호가 유효합니다.`,
        "assistant"
      );
      await addMessage(" 발명의 명칭 : " + appStore.task.title, "assistant");
    })
    .catch((err) => {
      console.log(err);
      loading.value = false;
      errorCheck.value = true;
      errorMsg.value = "특허 공개번호 또는 등록번호가 유효하지 않습니다.";
    });

  if (appStore.task) {
    const userMessage =
      "아래 텍스트를 500단어 이내로 요약해줘.\n" +
      appStore.task.descriptions[0].replace("\n", " ");

    console.log(userMessage);
    mainprocess_chat_openai({ question: userMessage })
      .then((res) => {
        console.log(res.data);
        const assistantMessage = res.data.answer;
        addMessage(assistantMessage, "assistant");
        console.log(conversation.value);

        addMessage(
          `요약을 완료했습니다. 요약에 소요된 금액은 ${priceCal(
            res.data
          )}원 입니다.`,
          "assistant"
        );
        loading.value = false;
      })
      .catch((err) => {
        console.log(err);
        addMessage("오류입니다. 잠시 후 다시 시도해주세요.", "assistant");
        loading.value = false;
      });
  }
};

const priceCal = (data) => {
  const promptTokens = Math.ceil(Number(data.res.prompt_tokens) / 1000);
  const completionTokens = Math.ceil(Number(data.res.completion_tokens) / 1000);
  const price = (promptTokens * 0.01 + completionTokens * 0.003).toFixed(2);
  console.log(promptTokens, completionTokens, price);
  return price;
};
</script>
@/fireApi
