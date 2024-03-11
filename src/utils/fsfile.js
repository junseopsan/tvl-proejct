import {
  deleteObject,
  getBlob,
  ref,
  uploadBytes
} from "@firebase/storage";

import { useAppStore } from "@/store/app";
import { storage } from "@/tvl_db";

const appStore = useAppStore();

export const storeFile = async (tid, file) => {
  const savefilepath = `${tid}/${file.name}`;
  const storageRef = ref(storage, savefilepath);
  const res = await uploadBytes(storageRef, file);
  return savefilepath;
  // appStore.task = await updateTaskFilepath(appStore.task, savefilepath);
};

export const downloadFile = async (filepath) => {
  const storageRef = ref(storage, filepath);
  const file = await getBlob(storageRef);
  console.log(file);
  return file;
};

export const deleteFileFromPath = async (filepath) => {
  if (filepath.includes("default/")) return;
  try {
    const storageRef = ref(storage, filepath);
    await deleteObject(storageRef);
    console.log("firestore delete success", filepath);
  } catch (e) {
    console.log("firestore delete error", e);
  }
};
