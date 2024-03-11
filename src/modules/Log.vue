<template>
  <button
    v-if="!open"
    class="fixed z-20 right-5 top-16 pr-2 pt-4"
    @click="open = true"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="black"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  </button>
  <TransitionRoot as="template" :show="open">
    <div as="div" class="relative" @close="open = false">
      <div class="fixed overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <div class="pointer-events-auto w-screen max-w-md">
                <div
                  v-if="appStore.task"
                  class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"
                >
                  <div
                    class="flex items-center justify-between mt-16 mb-7 px-4 sm:px-6"
                  >
                    <div class="flex space-x-7">
                      <button
                        class="text-base font-semibold leading-6 text-gray-900"
                        :class="tabName === 'Logs' ? 'bg-blue-100' : ''"
                        @click="selectTab('Logs')"
                      >
                        Logs
                      </button>
                      <button
                        class="text-base font-semibold leading-6 text-gray-900"
                        :class="tabName === 'Cost' ? 'bg-blue-100' : ''"
                        @click="selectTab('Cost')"
                      >
                        Cost
                      </button>
                      <button
                        class="text-base font-semibold leading-6 text-gray-900"
                        :class="tabName === 'Error' ? 'bg-blue-100' : ''"
                        @click="selectTab('Error')"
                      >
                        Error
                      </button>
                      <button
                        class="text-base font-semibold leading-6 text-gray-900"
                        :class="tabName === 'Result' ? 'bg-blue-100' : ''"
                        @click="selectTab('Result')"
                      >
                        Result
                      </button>
                    </div>

                    <button
                      type="button"
                      class="rounded-md bg-white text-gray-900 hover:text-gray-700"
                      @click="open = false"
                    >
                      <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div
                    ref="logContainer"
                    v-if="tabName === 'Logs'"
                    class="w-full space-y-5 bg-blue-50 mx-2 p-3 overflow-y-auto max-h-screen view-h-calc"
                  >
                    <div v-for="(log, index) in appStore.task.log" :key="index">
                      <div>{{ log }}</div>
                    </div>
                  </div>
                  <div
                    v-else-if="tabName === 'Cost'"
                    class="w-full space-y-5 bg-blue-50 mx-2 p-3 overflow-y-auto max-h-screen view-h-calc spae-y-12"
                  >
                    <table class="w-full">
                      <tr class="text-left">
                        <th>Step</th>
                        <th>입력,출력</th>
                        <th>Token</th>
                        <th>Cost($)</th>
                      </tr>

                      <tr
                        v-for="(step, index) in steps"
                        :key="index"
                        :class="[
                          step.newAssistant ? '' : 'font-bold',
                          step.error ? 'bg-yellow-300' : '',
                        ]"
                      >
                        <td>{{ step.stepname }}</td>
                        <td v-if="step.usage">
                          {{ step.usage.prompt_tokens }},
                          {{ step.usage.completion_tokens }}
                        </td>
                        <td v-if="step.usage">
                          {{ step.usage.total_tokens.toLocaleString("ko-KR") }}
                        </td>
                        <td v-if="step.usage">
                          {{ calTokenToCost(step).toLocaleString() }}
                        </td>
                      </tr>
                      <tr class="font-bold">
                        <td>Total</td>
                        <td>
                          {{ promptTotal() }},
                          {{ completionTotal() }}
                        </td>
                        <td>{{ totalToken() }}</td>
                        <td>{{ costTotal() }}</td>
                      </tr>
                    </table>
                  </div>
                  <div
                    v-else-if="tabName === 'Error'"
                    class="w-full space-y-5 bg-blue-50 mx-2 p-3 overflow-y-auto max-h-screen view-h-calc spae-y-12"
                  >
                    <div v-if="stepErrors.length > 0" class="w-full">
                      <div v-for="(step, index) in stepErrors" :key="index">
                        <div class="text-red-500">{{ step.stepname }}</div>
                        <div v-if="step.error">
                          <div
                            v-for="(log, index) in step.log"
                            :key="'log' + index"
                            class="p-2"
                          >
                            {{ log }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-else>발견된 에러 없음</div>
                  </div>
                  <div
                    v-else-if="tabName === 'Result'"
                    class="w-full space-y-5 bg-blue-50 mx-2 p-3 overflow-y-auto max-h-screen view-h-calc spae-y-12"
                  >
                    <div v-if="stepResults.length > 0" class="w-full">
                      <div v-for="(step, index) in stepResults" :key="index">
                        <div class="text-red-500">{{ step.stepname }}</div>
                        <div v-if="step.content">
                          <div class="p-2">
                            {{ step.content.text.value }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-else>결과 없음</div>
                  </div>
                </div>
              </div>
            </TransitionChild>
          </div>
        </div>
      </div>
    </div>
  </TransitionRoot>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from "vue";
import { TransitionChild, TransitionRoot } from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { PlusIcon } from "@heroicons/vue/20/solid";

import { useAppStore } from "@/store/app";
import { getStepObjs, getGptSettings } from "@/utils/fsdb";

const appStore = useAppStore();
const open = ref(false);
const enableOverlay = ref(false);
const tabName = ref("Logs");
const steps = ref([]);
const stepErrors = ref([]);
const stepResults = ref([]);
const logContainer = ref(null);

const total = ref(0);
const model1 = ref("");
const model2 = ref("");

onMounted(async () => {
  const gptSettings = await getGptSettings();
  model1.value = gptSettings.model;
  model2.value = gptSettings.model2;
});

watch(
  () => appStore.task?.log,
  () => {
    scrollToBottom();
  }
);

function scrollToBottom() {
  nextTick(() => {
    if (logContainer.value) {
      logContainer.value.scrollTop = logContainer.value.scrollHeight;
    }
  });
}

const selectTab = async (tabname) => {
  tabName.value = tabname;
  if (tabname === "Cost") {
    steps.value = await getStepObjs(appStore.task.tid);
    steps.value.sort((a, b) => {
      return a.stepname.localeCompare(b.stepname);
    });
    stepErrors.value = steps.value.filter((step) => {
      return step.error;
    });
  } else if (tabname === "Error") {
    if (steps.value.length == 0) {
      steps.value = await getStepObjs(appStore.task.tid);
      steps.value.sort((a, b) => {
        return a.stepname.localeCompare(b.stepname);
      });
    }
    stepErrors.value = steps.value.filter((step) => {
      return step.error;
    });
  } else if (tabname === "Result") {
    if (steps.value.length == 0) {
      steps.value = await getStepObjs(appStore.task.tid);
      steps.value.sort((a, b) => {
        return a.stepname.localeCompare(b.stepname);
      });
    }
    stepResults.value = steps.value.filter((step) => {
      if (step.content?.text?.value) return step.content?.text?.value;
    });
  }
};

const calTokenToCost = (step) => {
  if (step.model == model2.value) {
    const cost =
      (step.usage.prompt_tokens / 1000) * 0.0005 +
      (step.usage.completion_tokens / 1000) * 0.0015;
    step.usage.cost = cost;
    return cost;
  } else {
    const cost =
      (step.usage.prompt_tokens / 1000) * 0.01 +
      (step.usage.completion_tokens / 1000) * 0.03;
    step.usage.cost = cost;
    return cost;
  }
};

const costTotal = () => {
  let costTotal = 0;
  steps.value.forEach((step) => {
    if (step?.usage?.cost) costTotal += step.usage?.cost;
  });
  return costTotal.toLocaleString("ko-KR");
};

const totalToken = () => {
  let totalToken = 0;
  steps.value.forEach((step) => {
    if (
      step?.hasOwnProperty("usage") &&
      step.usage?.hasOwnProperty("total_tokens")
    )
      totalToken += step.usage?.total_tokens;
  });
  return totalToken.toLocaleString("ko-KR");
};

const promptTotal = () => {
  if (steps.value.length == 0) return;
  let promptTotal = 0;
  steps.value.forEach((step) => {
    if (step.usage) promptTotal += Number(step.usage.prompt_tokens);
  });
  return promptTotal.toLocaleString("ko-KR");
};

const completionTotal = () => {
  let completionTotal = 0;
  steps.value.forEach((step) => {
    if (
      step?.hasOwnProperty("usage") &&
      step.usage?.hasOwnProperty("completion_tokens")
    )
      completionTotal += step.usage?.completion_tokens;
  });
  return completionTotal.toLocaleString("ko-KR");
};
</script>
