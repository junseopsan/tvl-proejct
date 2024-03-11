import { db } from "@/tvl_db";
import { getAuth } from "firebase/auth";
import {
  arrayUnion,
  collection,
  collectionGroup,
  deleteDoc,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where
} from "firebase/firestore";

const auth = getAuth();

//* Get all documents from a collection
export const getGptSettings = async () => {
  const gptSettingsRef = doc(db, "Settings", "gpt");
  const gptSettingsSnap = await getDoc(gptSettingsRef);
  return gptSettingsSnap.data();
};
export const getConversation = async (task) => {
  const conversationRef = collection(
    db,
    "Users",
    task.uid,
    "Tasks",
    task.tid,
    "Messages"
  );
  const q = query(conversationRef, orderBy("created_at", "asc"));
  const convSnap = await getDocs(q);
  return convSnap.docs.map((doc) => doc.data());
};
export const getTask = async (task) => {
  const taskRef = doc(db, "Users", task.uid, "Tasks", task.tid);
  const taskSnap = await getDoc(taskRef);
  return taskSnap.data();
};
export const getTaskFromTid = async (tid) => {
  const taskRef = doc(db, "Users", auth.currentUser.uid, "Tasks", tid);
  const taskSnap = await getDoc(taskRef);
  return taskSnap.data();
};

export const getTaskList = async () => {
  const TasksRef = collection(db, "Users", auth.currentUser.uid, "Tasks");
  const q = query(TasksRef, orderBy("created_at", "desc"));
  const querySnapshot = await getDocs(q);
  let taskList = [];
  querySnapshot.forEach((doc) => {
    taskList.push(doc.data());
  });
  return taskList;
};

export const getUser = async (uid) => {
  const userRef = doc(db, "Users", uid);
  const userSnap = await getDoc(userRef);
  return userSnap.data();
};

export const getCpcInfo = async (uid, tid) => {
  const cpcinfoRef = collection(db, "Users", uid, "Tasks", tid, "Codes");
  const cpcinfoSnap = await getDocs(cpcinfoRef);
  return cpcinfoSnap.docs.map((doc) => doc.data());
};

export const getStepMessages = async (step) => {
  const stepsRef = doc(db, "Settings", "step_message");
  const stepsSnap = await getDoc(stepsRef);
  return stepsSnap.data()[step];
};
const getStepNumTotal = async () => {
  const stepsRef = doc(db, "Settings", "step_message");
  const stepsSnap = await getDoc(stepsRef);
  return Object.keys(stepsSnap.data()).length;
};

export const getStepNum = async (tid) => {
  const stepTotal = await getStepNumTotal();
  const stepsRef = collection(
    db,
    "Users",
    auth.currentUser.uid,
    "Tasks",
    tid,
    "Steps"
  );
  const q = query(
    stepsRef,
    where("status", "==", "completed"),
    where("error", "==", false)
  );
  const stepsSnap = await getCountFromServer(q);
  const calStep = ((stepsSnap.data().count / stepTotal) * 100).toFixed(0);
  return calStep;
};

export const getStepObjs = async (tid) => {
  const stepsRef = collection(
    db,
    "Users",
    auth.currentUser.uid,
    "Tasks",
    tid,
    "Steps"
  );
  const q = query(stepsRef, orderBy("created_at", "desc"));
  const stepsSnap = await getDocs(q);
  return stepsSnap.docs.map((doc) => doc.data());
};

export const getStepObj = async (tid, sid) => {
  const stepRef = doc(
    db,
    "Users",
    auth.currentUser.uid,
    "Tasks",
    tid,
    "Steps",
    sid
  );
  const stepSnap = await getDoc(stepRef);
  return stepSnap.data();
};

export const checkStepObj = async (tid, sid) => {
  const stepRef = doc(
    db,
    "Users",
    auth.currentUser.uid,
    "Tasks",
    tid,
    "Steps",
    sid
  );
  const stepSnap = await getDoc(stepRef);
  return stepSnap.exists();
};

//* Set a document in a collection
export const setTask = async (task) => {
  const taskRef = doc(collection(db, "Users", task.uid, "Tasks"));
  const newTask = { ...task, tid: taskRef.id };
  await setDoc(taskRef, newTask);
  return newTask;
};

export const setUser = async (uid, user) => {
  console.log("setuser", uid, user);
  const userRef = doc(db, "Users", uid);
  await setDoc(userRef, user);
  return;
};

//* add a document in a collection
export const addMessage = async (
  task,
  msgText,
  role,
  status = "ready",
  fileids = [],
  hidden_msg = ""
) => {
  const messageRef = doc(
    collection(db, "Users", task.uid, "Tasks", task.tid, "Messages")
  );
  const payload = {
    message: msgText,
    hidden_msg: hidden_msg,
    uid: task.uid,
    tid: task.tid,
    mid: messageRef.id,
    created_at: Math.floor(new Date().getTime() / 1000),
    role: role,
    assistant_id: task.assistant_id,
    thread_id: task.thread_id,
    fileids: fileids,
    status: status,
  };
  setDoc(messageRef, payload);
  return payload;
};

export const addSteps = async (task, step, newThread = true) => {
  const stepsRef = doc(db, "Users", task.uid, "Tasks", task.tid, "Steps", step);
  const stepMsg = await getStepMessages(step);
  console.log("stepMsg", stepMsg);

  const payload = {
    message: stepMsg,
    stepname: step,
    uid: task.uid,
    tid: task.tid,
    sid: stepsRef.id,
    created_at: Math.floor(new Date().getTime() / 1000),
    role: "user",
    assistant_id: task.assistant_id,
    thread_id: task.thread_id,
    status: "send",
    newAssistant: false,
    newThread: newThread,
  };
  setDoc(stepsRef, payload);
  return payload;
};

export const addStepsWithAssistant = async (
  task,
  step,
  savefilename,
  newThread = true
) => {
  const stepsRef = doc(db, "Users", task.uid, "Tasks", task.tid, "Steps", step);
  const stepMsg = await getStepMessages(step);
  console.log("stepMsg", stepMsg);

  const payload = {
    message: stepMsg,
    stepname: step,
    uid: task.uid,
    tid: task.tid,
    sid: stepsRef.id,
    created_at: Math.floor(new Date().getTime() / 1000),
    role: "user",
    assistant_id: task.assistant_id,
    thread_id: task.thread_id,
    status: "send",
    savefilename: savefilename,
    newAssistant: true,
    newThread: newThread,
  };
  setDoc(stepsRef, payload);
  return payload;
};

//* update a document in a collection

export const updateUser = async (uid, data) => {
  const userRef = doc(db, "Users", uid);
  await updateDoc(userRef, data);
  return data;
};

export const updateMessage = async (msgObj) => {
  const newMsgObj = {
    ...msgObj,
    created_at: Math.floor(new Date().getTime() / 1000),
  };
  const messageRef = doc(
    db,
    "Users",
    msgObj.uid,
    "Tasks",
    msgObj.tid,
    "Messages",
    msgObj.mid
  );
  await updateDoc(messageRef, newMsgObj);
  return msgObj;
};
export const updateMessageRun = async (msgObj, mid, data) => {
  const messageRef = doc(
    db,
    "Users",
    msgObj.uid,
    "Tasks",
    msgObj.tid,
    "Messages",
    mid
  );
  await updateDoc(messageRef, data);
  return;
};
export const updateTask = async (task, data) => {
  const taskRef = doc(db, "Users", task.uid, "Tasks", task.tid);
  await updateDoc(taskRef, data);
  return { ...task, ...data };
};

export const updateTaskFilepath = async (task, filepaths) => {
  const taskRef = doc(db, "Users", task.uid, "Tasks", task.tid);
  filepaths.forEach(async (filepath) => {
    await updateDoc(taskRef, { filepath: arrayUnion(filepath) });
  });
};

export const updateTaskLog = async (task, msg) => {
  const taskRef = doc(db, "Users", task.uid, "Tasks", task.tid);
  await updateDoc(taskRef, { log: arrayUnion(msg) });
};

export const updateStepObj = async (stepObj, data) => {
  const stepObjRef = doc(
    db,
    "Users",
    stepObj.uid,
    "Tasks",
    stepObj.tid,
    "Steps",
    stepObj.sid
  );
  await updateDoc(stepObjRef, data);
  return;
};

//* delete a document in a collection
export const deleteTask = async (task) => {
  const collectionRef = doc(db, "Users", task.uid, "Tasks", task.tid);
  await deleteDoc(collectionRef);
  console.log("delete Task", task.tid);
};

export const deleteSubCollection = async (
  task,
  collectionName,
  subCollectionName = ""
) => {
  if (subCollectionName) {
    try {
      const subCollectionRef = collection(
        db,
        "Users",
        task.uid,
        collectionName,
        task.tid,
        subCollectionName
      );
      const subCollectionSnap = await getDocs(subCollectionRef);
      subCollectionSnap.forEach((doc) => {
        deleteDoc(doc.ref);
      });
      console.log("delete subcollection", subCollectionName);
    } catch (e) {
      console.log("subcollection not found", subCollectionName, e);
    }
  }
};

export const deleteSteps = async () => {
  const uid = auth.currentUser.uid;
  console.log("deleteSteps", uid);
  const stepRefs = query(collectionGroup(db, "Steps"), where("uid", "==", uid));
  const stepDocs = await getDocs(stepRefs);
  stepDocs.forEach(async (stepDoc) => {
    await deleteDoc(stepDoc.ref);
    console.log("delete Step", stepDoc.id);
  });
};

export const deleteStep = async (tid, sid) => {
  const uid = auth.currentUser.uid;
  const stepRef = doc(db, "Users", uid, "Tasks", tid, "Steps", sid);
  await deleteDoc(stepRef);
};

export const deleteAllTasks = async () => {
  const collectionNames = [
    "Citations",
    "citations",
    "Claims",
    "Descriptions",
    "Classifier",
    "SimilarDocuments",
    "PatentInfo",
    "ProductClass",
    "Codes",
    "Steps",
    "Messages",
  ];
  for (const collectionName of collectionNames) {
    const taskRefs = query(collectionGroup(db, collectionName));
    const taskDocs = await getDocs(taskRefs);
    taskDocs.forEach(async (taskDoc) => {
      try {
        await deleteDoc(taskDoc.ref);
        console.log("------------------delete-- ", collectionName, taskDoc.id);
      } catch (e) {
        console.log("delete error", e);
      }
    });
  }

  const taskRefs = query(collectionGroup(db, "Tasks"));
  const taskDocs = await getDocs(taskRefs);
  taskDocs.forEach(async (taskDoc) => {
    await deleteDoc(taskDoc.ref);
    console.log("delete Task", taskDoc.id);
  });
};
