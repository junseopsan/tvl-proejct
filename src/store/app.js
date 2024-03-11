// Utilities
import { defineStore } from "pinia";
import { ref, onMounted } from "vue";

export const useAppStore = defineStore("app", () => {
  const patentNumber = ref("");
  const task = ref(null);
  const taskList = ref([]);
  const cpcInfo = ref(null);
  const similarPatentInfo = ref(null);

  const cpcInfoSelected = ref();
  const abstract = ref(null);
  const productClass = ref(null);

  const instructions = ref([]);
  const assistant_instruction = ref();
  const userInput = ref("");

  const conversations = ref([]);
  const patentGptSettings = ref(null);

  const currentPageName = ref("");

  const stepname = ref("");
  const stepmsg = ref("");
  const response = ref("");

  const stepScrollName = ref("");

  return {
    patentNumber,
    task,
    taskList,
    cpcInfo,
    similarPatentInfo,
    cpcInfoSelected,
    abstract,
    productClass,
    instructions,
    assistant_instruction,
    userInput,
    conversations,
    patentGptSettings,
    currentPageName,

    stepname,
    stepmsg,
    response,

    stepScrollName,
  };
});
