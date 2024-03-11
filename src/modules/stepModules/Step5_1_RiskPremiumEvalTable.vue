<template>
  <!-- 기술사업화 위험프리미엄 평가표 -->
  <div class="flex flex-col space-y-8 px-7 py-7 bg-blue-50 rounded">
    <div
      class="flex text-gray-900 text-md font-semibold font-sans leading-tight"
    >
      5.1. 기술사업화 위험프리미엄 평가
    </div>
    <div
      class="flex text-gray-600 text-sm font-normal font-sans leading-normal"
    >
      기술사업화 위험프리미엄 평가표에 따른 평가항목 점수를 선택해주세요.
    </div>

    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full">
            <thead class="bg-blue-50">
              <tr>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                >
                  영향 요인
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  점수(1~5점)
                </th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-blue-50">
              <template v-for="location in locations" :key="location.name">
                <tr class="border-t border-blue-200">
                  <th
                    colspan="1"
                    scope="colgroup"
                    class="bg-blue-100 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                  >
                    {{ location.name }}
                  </th>
                  <th
                    colspan="2"
                    scope="col"
                    class="bg-blue-100 px-10 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    11
                  </th>
                </tr>
                <tr
                  v-for="(evalValue, valueIndex) in location.EvalValue"
                  :key="evalValue.name"
                  :class="[
                    valueIndex === 0 ? 'border-blue-300' : 'border-blue-200',
                    'border-t',
                  ]"
                >
                  <td
                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3"
                  >
                    {{ evalValue.name }}
                  </td>
                  <td
                    class="whitespace-nowrap px-11 py-4 text-sm text-gray-500"
                  >
                    {{ evalValue.score }}
                  </td>
                  <td
                    class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3"
                  >
                    <!-- <a href="#" class="text-blue-600 hover:text-blue-900"
                      >수정<span class="sr-only"
                        >, {{ evalValue.name }}</span
                      ></a
                    > -->
                    <StepButtonSmall
                      :step="evalValue.step"
                      @action1="(isTrue) => action1(isTrue, evalValue)"
                    />
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="sm:flex sm:items-front pb-5">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-blue-900">
          기술사업화 위험프리미엄 종합평점 : {{ riskPremiumValues }} 점
        </h1>
        <h1 class="text-base font-semibold leading-6 text-blue-900">
          기술사업화 위험프리미엄 비중 : {{ riskPremiumValues }} %
        </h1>
        <p class="mt-2 text-sm text-gray-700">* 산출식 : ?????</p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none space-x-2">
        <button
          type="button"
          class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          아니요
        </button>

        <button
          type="button"
          class="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          예, 선택합니다
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useAppStore } from "@/store/app";
import { useRouter } from "vue-router";
import StepButtonSmall from "@/modules/StepButtonSmall.vue";
import { updateTask } from "@/utils/fsdb";

const appStore = useAppStore();
const router = useRouter();

const action1 = async (isTrue, evalValue) => {
  if (!isTrue) {
    appStore.stepScrollName = evalValue.step;
  }
};

onMounted(() => {
  appStore.currentPageName = router.currentRoute.value.name;
});

//기술
const locations = computed(() => [
  {
    name: "기술위험",
    EvalValue: [
      {
        id: "1",
        name: "차별성",
        score: appStore.task["step5_1_1"]?.평가점수 || 0,
        step: "step5_1_1",
        edit: false,
      },
      {
        id: "2",
        name: "기술경쟁강도",
        score: appStore.task["step3_1_2"]?.평가점수 || 0,
        step: "step3_1_2",
        edit: false,
      },
      {
        id: "3",
        name: "기술사업화환경",
        score: appStore.task["step5_1_2"]?.평가점수 || 0,
        step: "step5_1_2",
        edit: false,
      },
      {
        id: "4",
        name: "모방난이도",
        score: appStore.task["step3_1_4"]?.평가점수 || 0,
        step: "step3_1_4",
        edit: false,
      },
      {
        id: "5",
        name: "권리안정성",
        score: appStore.task["step5_1_3"]?.평가점수 || 0,
        step: "step5_1_3",
        edit: false,
      },
    ],
  },
  {
    name: "시장/사업위험",
    EvalValue: [
      {
        id: "1",
        name: "시장진입가능성",
        score: appStore.task["step3_1_6"]?.평가점수 || 0,
        step: "step3_1_6",
        edit: false,
      },
      {
        id: "2",
        name: "시장경쟁강도",
        score: appStore.task["step3_1_7"]?.평가점수 || 0,
        step: "step3_1_7",
        edit: false,
      },
      {
        id: "3",
        name: "시장의 성장전망",
        score: appStore.task["step5_1_4"]?.평가점수 || 0,
        step: "step5_1_4",
        edit: false,
      },
      {
        id: "4",
        name: "생산용이성",
        score: appStore.task["step5_1_5"]?.평가점수 || 0,
        step: "step5_1_5",
        edit: false,
      },
      {
        id: "5",
        name: "수익성",
        score: appStore.task[""]?.평가점수 || 0,
        step: "",
        edit: false,
      },
    ],
  },
  // More people...
]);

//기술사업화 위험프리미엄 종합평점 & 비중 산출식이 필요함
const riskPremiumValues = computed(() => {
  let sum = 0;

  locations.value.forEach((location) => {
    location.EvalValue.forEach((evalValue) => {
      sum += evalValue.weight * evalValue.score;
    });
  });

  const result = (sum / 205) * 100;
  updateTask(appStore.task, {
    riskPremiumValues: result.toFixed(1),
  });
  return result.toFixed(1);
});
</script>
