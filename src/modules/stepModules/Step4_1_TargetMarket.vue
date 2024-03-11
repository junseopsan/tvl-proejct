<template>
  <!-- 4.1. 목표시장 선택 -->

  <div class="flex flex-col space-y-8 px-7 py-7 bg-blue-50 rounded">
    <div class="text-md font-semibold text-gray-900">4.1. 목표시장</div>
    <div class="text-sm font-semibold text-gray-500">
      평가대상특허의 목표시장 규모와 전망은 아래와 같습니다.
    </div>

    <fieldset class="mt-4">
      <legend class="sr-only">target Market Selection</legend>
      <div class="space-y-5">
        <div
          v-for="(targetMarketOption, index) in targetMarketSelect"
          :key="`${targetMarketOption.id}4_1`"
          class="flex"
        >
          <input
            :key="`${targetMarketOption.id}4_1`"
            name="targetMarket-selection"
            type="radio"
            :checked="index == selectedTargetMarketOption"
            class="mt-1 h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
            @click="selectTargetMarketRadio(index)"
          />
          <div
            class="flex-col w-full cursor-pointer"
            @click="selectTargetMarketRadio(index)"
          >
            <label
              @click="selectTargetMarketRadio(`${targetMarketOption.id}4_1`)"
              :for="`${targetMarketOption.id}4_1`"
              class="ml-3 block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
              >{{ targetMarketOption.name }}</label
            >

            <!-- '1번 항목' -->

            <div class="ml-3" v-if="targetMarketOption.id === '1'">
              <dd
                class="mt-2 flex py-2 items-baseline justify-between md:block lg:flex"
                @click="selectTargetMarketRadio(`${targetMarketOption.id}4_1`)"
              >
                <div class="flex space-x-2">
                  <div
                    class="flex items-baseline text-lg font-semibold text-blue-600"
                  >
                    {{ targetMarketSelect[0].startSize }}
                    {{ targetMarketSelect[0].currency }}
                    <span class="ml-2 text-sm font-medium text-gray-500"
                      >{{ targetMarketSelect[0].startYear }}년</span
                    >
                  </div>
                  <div class="text-sm font-medium text-gray-500">~</div>
                  <div
                    class="flex items-baseline text-lg font-semibold text-blue-600"
                  >
                    {{ targetMarketSelect[0].endSize }}
                    {{ targetMarketSelect[0].currency }}
                    <span class="ml-2 text-sm font-medium text-gray-500"
                      >{{ targetMarketSelect[0].endYear }}년</span
                    >
                  </div>
                </div>
                <div class="">
                  <div
                    :class="[
                      targetMarketSelect[0].changeType === 'increase'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800',
                      'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0',
                    ]"
                  >
                    <ArrowUpIcon
                      v-if="targetMarketSelect[0].changeType === 'increase'"
                      class="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                      aria-hidden="true"
                    />
                    <ArrowDownIcon
                      v-else
                      class="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                      aria-hidden="true"
                    />
                    <span class="sr-only">
                      {{
                        targetMarketSelect[0].changeType === "increase"
                          ? "Increased"
                          : "Decreased"
                      }}
                      by
                    </span>
                    CAGR {{ targetMarketSelect[0].CAGR }}
                  </div>
                </div>
              </dd>
            </div>

            <!-- '2번 항목' -->

            <div class="ml-3" v-if="targetMarketOption.id === '2'">
              <dd
                class="mt-2 flex py-2 items-baseline justify-between md:block lg:flex"
                @click="selectTargetMarketRadio(`${targetMarketOption.id}4_1`)"
              >
                <div class="flex space-x-2">
                  <div
                    class="flex items-baseline text-lg font-semibold text-blue-600"
                  >
                    {{ targetMarketSelect[1].startSize }}
                    {{ targetMarketSelect[1].currency }}
                    <span class="ml-2 text-sm font-medium text-gray-500"
                      >{{ targetMarketSelect[1].startYear }}년</span
                    >
                  </div>
                  <div class="text-sm font-medium text-gray-500">~</div>
                  <div
                    class="flex items-baseline text-lg font-semibold text-blue-600"
                  >
                    {{ targetMarketSelect[1].endSize }}
                    {{ targetMarketSelect[1].currency }}
                    <span class="ml-2 text-sm font-medium text-gray-500"
                      >{{ targetMarketSelect[1].endYear }}년</span
                    >
                  </div>
                </div>

                <div
                  :class="[
                    targetMarketSelect[1].changeType === 'increase'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800',
                    'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0',
                  ]"
                >
                  <ArrowUpIcon
                    v-if="targetMarketSelect[1].changeType === 'increase'"
                    class="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                    aria-hidden="true"
                  />
                  <ArrowDownIcon
                    v-else
                    class="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                    aria-hidden="true"
                  />
                  <span class="sr-only">
                    {{
                      targetMarketSelect[1].changeType === "increase"
                        ? "Increased"
                        : "Decreased"
                    }}
                    by
                  </span>
                  CAGR {{ targetMarketSelect[1].CAGR }}
                </div>
              </dd>
            </div>

            <!-- '직접입력' -->

            <div class="ml-3 space-y-4" v-if="targetMarketOption.id === '3'">
              <div>
                <label
                  for="evalYear"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  @click="
                    selectTargetMarketRadio(`${targetMarketOption.id}4_1`)
                  "
                  >시장규모 직접입력</label
                >
                <div class="space-y-1">
                  <div class="flex space-x-2">
                    <input
                      @click="
                        selectTargetMarketRadio(`${targetMarketOption.id}4_1`)
                      "
                      type="text"
                      name="evalMarketSize1"
                      id="evalMarketSize1"
                      class="mt-1 block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      placeholder="시작년도 시장규모"
                    />
                    <input
                      @click="
                        selectTargetMarketRadio(`${targetMarketOption.id}4_1`)
                      "
                      type="text"
                      name="evalMarketSize2"
                      id="evalMarketSize2"
                      class="mt-1 block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      placeholder="종료년도 시장규모"
                    />
                  </div>
                </div>
                <input
                  @click="
                    selectTargetMarketRadio(`${targetMarketOption.id}4_1`)
                  "
                  type="text"
                  name="CAGR"
                  id="CAGR"
                  class="mt-1 block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  placeholder="연평균 성장률"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
    <!-- <StepButton step="step4_1" @action1="action1" /> -->

    <div class="self-stretch justify-end items-end gap-2 inline-flex pt-4">
      <button
        type="button"
        class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        아니요
      </button>

      <button
        type="button"
        @click="btnAction(true)"
        class="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
      >
        예, 선택합니다
      </button>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import { market_size } from "@/utils/calculator";
import { updateTask } from "@/utils/fsdb";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/vue/20/solid";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const appStore = useAppStore();
const router = useRouter();
const domesticMarket = ref();
const globalMarket = ref();
const selectedTargetMarketOption = ref(0);

onMounted(() => {
  console.table(appStore.task.step4_1_1);
  console.table(appStore.task.step4_1_2);
  domesticMarket.value = market_size(
    appStore.task.step4_1_1,
    appStore.task.cashFlowPeriods.startYear,
    appStore.task.cashFlowPeriods.endYear
  );
  targetMarketSelect.value[0].endSize =
    domesticMarket.value[domesticMarket.value.length - 1];
  globalMarket.value = market_size(
    appStore.task.step4_1_2,
    appStore.task.cashFlowPeriods.startYear,
    appStore.task.cashFlowPeriods.endYear
  );
  targetMarketSelect.value[1].endSize =
    globalMarket.value[globalMarket.value.length - 1];
  console.log(
    "domesticMarket",
    domesticMarket.value[domesticMarket.value.length - 1]
  );
  console.log("globalMarket", globalMarket.value);
});

// 목표시장 선택
const targetMarketSelect = ref([
  {
    id: "1",
    name: "국내 시장",
    startYear: appStore.task.cashFlowPeriods.startYear || "----",
    endYear: appStore.task.cashFlowPeriods.endYear || "----",
    startSize: appStore.task.step4_1_1.조사한시장규모 || "----",
    endSize: "----",
    CAGR: appStore.task.step4_1_1.CAGR || "0",
    currency: appStore.task.step4_1_1.보고서단위 || "백만원",
    changeType:
      Number(appStore.task.step4_1_1.CAGR?.replace("%", "")) > 0
        ? "increase"
        : "decrease",
  },
  {
    id: "2",
    name: "해외 시장",
    startYear: appStore.task.cashFlowPeriods.startYear || "----",
    endYear: appStore.task.cashFlowPeriods.endYear || "----",
    startSize: appStore.task.step4_1_2.조사한시장규모 || "----",
    endSize: "----",
    CAGR: appStore.task.step4_1_2.CAGR || "0",
    currency: appStore.task.step4_1_2.보고서단위 || "백만원",
    changeType:
      Number(appStore.task.step4_1_2.CAGR?.replace("%", "")) > 0
        ? "increase"
        : "decrease",
  },

  {
    id: "3",
    name: "",
    startYear: "",
    endYear: "",
    startSize: "",
    endSize: "",
    CAGR: "",
    currency: "",
    changeType: "",
  },
]);

const selectTargetMarketRadio = (targetMarketOptionId) => {
  selectedTargetMarketOption.value = targetMarketOptionId;
};

const btnAction = (isTrue) => {
  if (!isTrue) {
    return;
  }
  const selectedMarket =
    targetMarketSelect.value[selectedTargetMarketOption.value];
  console.log("선택완료", selectedMarket);
  const isDomestic = selectedMarket.name;
  if (confirm(`목표시장을 ${isDomestic}으로 선택하시겠습니까?`) === true) {
    const data = {
      seletecTargetMarket: selectedMarket,
    };
    updateTask(appStore.task, data);
  } else {
    console.log("선택취소");
  }
};
</script>
@/components/Summary.vue
