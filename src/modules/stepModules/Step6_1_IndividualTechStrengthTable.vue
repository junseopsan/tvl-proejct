<template>
  <!-- 개발기술강도 평가표 -->
  <div class="flex flex-col space-y-8 px-7 py-7 bg-blue-50 rounded">
    <div
      class="flex text-gray-900 text-md font-semibold font-sans leading-tight"
    >
      6.1. 개별기술강도 평가
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
          개별기술강도 평가 점수 : {{ totalEvalValues }} 점
        </h1>
        <p class="mt-2 text-sm text-gray-700">
          * 산출식 : 평가표 합계 점수 x 0.5(가중치)
        </p>
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
    name: "기술성",
    EvalValue: [
      {
        id: "1",
        name: "혁신성",
        score: appStore.task["step6_1_1"]?.평가점수 || 0,
        step: "step6_1_1",
        edit: false,
      },
      {
        id: "2",
        name: "차별성",
        score: appStore.task["step5_1_1"]?.평가점수 || 0,
        step: "step5_1_1",
        edit: false,
      },
      {
        id: "3",
        name: "대체가능성",
        score: appStore.task["step3_1_3"]?.평가점수 || 0,
        step: "step3_1_3",
        edit: false,
      },
      {
        id: "4",
        name: "활용성",
        score: appStore.task["step6_1_2"]?.평가점수 || 0,
        step: "step6_1_2",
        edit: false,
      },
      {
        id: "5",
        name: "파급성",
        score: appStore.task["step6_1_3"]?.평가점수 || 0,
        step: "step6_1_3",
        edit: false,
      },
      {
        id: "6",
        name: "진부화가능성",
        score: appStore.task["step6_1_22"]?.평가점수 || 0,
        step: "step6_1_22",
        edit: false,
      },
      {
        id: "7",
        name: "모방난이도",
        score: appStore.task["step3_1_4"]?.평가점수 || 0,
        step: "step3_1_4",
        edit: false,
      },
    ],
  },
  {
    name: "권리성",
    EvalValue: [
      {
        id: "1",
        name: "권리보호강도",
        score: appStore.task["step3_1_5"]?.평가점수 || 0,
        step: "step3_1_5",
        edit: false,
      },
      {
        id: "2",
        name: "권리안정성",
        score: appStore.task["step5_1_3"]?.평가점수 || 0,
        step: "step5_1_3",
        edit: false,
      },
      {
        id: "3",
        name: "침해발견 및 입증용이성",
        score: appStore.task["step6_1_4"]?.평가점수 || 0,
        step: "step6_1_4",
        edit: false,
      },
    ],
  },
  {
    name: "시장성",
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
        name: "수요민감도",
        score: appStore.task["step6_1_5"]?.평가점수 || 0,
        step: "step6_1_5",
        edit: false,
      },
      {
        id: "3",
        name: "예상 시장점유율",
        score: appStore.task["step3_1_10"]?.평가점수 || 0,
        step: "step3_1_10",
        edit: false,
      },
    ],
  },
  {
    name: "사업성",
    EvalValue: [
      {
        id: "1",
        name: "사업화준비기간",
        score: appStore.task["step6_1_14"]?.평가점수 || 0,
        step: "step6_1_14",
        edit: false,
      },
      {
        id: "2",
        name: "사업화소요자본",
        score: appStore.task[""]?.평가점수 || 0,
        step: "",
        edit: false,
      },
      {
        id: "3",
        name: "생산용이성",
        score: appStore.task[""]?.평가점수 || 0,
        step: "",
        edit: false,
      },
      {
        id: "4",
        name: "경제적수명",
        score: appStore.task["step6_1_17"]?.평가점수 || 0,
        step: "step6_1_17",
        edit: false,
      },
      {
        id: "5",
        name: "매출성장추세",
        score: appStore.task["step6_1_18"]?.평가점수 || 0,
        step: "step6_1_18",
        edit: false,
      },
      {
        id: "6",
        name: "수익성",
        score: appStore.task[""]?.평가점수 || 0,
        step: "",
        edit: false,
      },
      {
        id: "7",
        name: "파생적 매출",
        score: appStore.task["step6_1_6"]?.평가점수 || 0,
        step: "step6_1_6",
        edit: false,
      },
    ],
  },
]);

const totalEvalValues = computed(() => {
  let sum = 0;

  locations.value.forEach((location) => {
    location.EvalValue.forEach((evalValue) => {
      sum += evalValue.weight * evalValue.score;
    });
  });

  const result = (sum / 205) * 100;
  updateTask(appStore.task, {
    개별기술강도: result.toFixed(1),
  });
  return result.toFixed(1);
});
</script>
