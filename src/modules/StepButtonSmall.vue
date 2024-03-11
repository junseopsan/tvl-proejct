<template>
  <div class="text-right">
    <div class="self-stretch justify-end items-center gap-2 inline-flex pt-4">
      <button
        type="button"
        @click="btnAction(false)"
        class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        수정
      </button>

      <button
        type="button"
        :disabled="loading == 'a' || loading == 'b'"
        @click="btnAction(true)"
        @dblclick="forceRestart"
        class="w-16 rounded-md bg-blue-500 px-auto py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        :class="
          btnMsg == 'done' && loading == 'f'
            ? 'bg-green-500 hover:bg-green-400 focus-visible:outline-green-500'
            : ''
        "
      >
        <div
          v-if="loading == 'a' || loading == 'b'"
          class="mx-auto h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"
        ></div>
        <!-- :class="loading == 'a' ? 'animate-pulse' : ''" -->
        <div v-else>
          {{ btnMsg }}
        </div>
      </button>
    </div>
    <div v-if="errorMsg" class="text-xs text-red-500 mt-3 mr-2">
      {{ errorMsg }}
    </div>
  </div>
</template>

<script setup>
import { mainprocess_send_step } from "@/api";
import { useAppStore } from "@/store/app";
import { cal_steps } from "@/utils/calculator";
import {
  checkStepObj,
  deleteStep,
  updateTask
} from "@/utils/fsdb";
import { computed, onMounted, ref } from "vue";

const appStore = useAppStore();
const isStepObj = ref(false);

const props = defineProps({
  step: {
    type: String,
    default: "",
  },
});

const errorMsg = computed(() => {
  if (appStore.task[props.step]?.error) {
    return "gpt error 발생, 다시 시도해주세요";
  } else {
    return "";
  }
});

const emit = defineEmits(["action1", "action2"]);

const loading = computed(() => {
  return appStore.task[props.step]?.loading;
});

onMounted(async () => {
  if (props.step) {
    if (cal_steps.includes(props.step) && props.step in appStore.task) {
      isStepObj.value = true;
    } else {
      isStepObj.value = await checkStepObj(appStore.task.tid, props.step);
    }
  } else {
    isStepObj.value = false;
  }
});

const btnMsg = computed(() => {
  if (isStepObj.value) {
    if (errorMsg.value) {
      return "retry";
    } else {
      return "done";
    }
  } else {
    return "run";
  }
});

const btnAction = async (isTrue) => {
  emit("action1", isTrue);

  if (!props.step) return;
  if (cal_steps.includes(props.step)) return;

  appStore.stepname = props.step;
  if (isTrue) {
    if (
      btnMsg.value == "done" &&
      !confirm("이미 진행한 작업입니다. 다시 진행하시겠습니까?")
    ) {
      return;
    }
    updateTask(appStore.task, {
      [props.step]: { loading: "a" },
    });
    if (isStepObj.value) {
      await deleteStep(appStore.task.tid, props.step);
    }
    mainprocess_send_step({
      tid: appStore.task.tid,
      sid: props.step,
    });
  }
};

const forceRestart = () => {
  if (confirm("강제 종료하시겠습니까?")) {
    appStore.task[props.step].loading = "f";
    appStore.task[props.step].error = true;
  }
};
</script>
@/fireApi
