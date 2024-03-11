<template>
  <div class="flex flex-col space-y-8 px-7 py-7 bg-blue-50 rounded">
    <div
      class="flex text-gray-900 text-md font-semibold font-sans leading-tight"
    >
      3.1. 기술수명 영향요인 평가
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
                  가중치
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
                    colspan="5"
                    scope="colgroup"
                    class="bg-blue-100 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                  >
                    {{ location.name }}
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
                  <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {{ evalValue.weight }}
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
          기술수명 영향요인 평가 점수 : {{ totalEvalValues }}점
        </h1>
        <p class="mt-2 text-sm text-gray-700">
          * 산출식 : Σ(가중치x점수)/205x100
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

const locations = computed(() => [
  {
    name: "기술/권리 요인",
    EvalValue: [
      {
        name: "우월성",
        weight: "7",
        score: appStore.task["step3_1_1"]?.평가점수 || 0,
        step: "step3_1_1",
      },
      {
        name: "기술경쟁강도",
        weight: "4",
        score: appStore.task["step3_1_2"]?.평가점수 || 0,
        step: "step3_1_2",
      },
      {
        name: "대체가능성",
        weight: "5",
        score: appStore.task["step3_1_3"]?.평가점수 || 0,
        step: "step3_1_3",
      },
      {
        name: "모방난이도",
        weight: "3",
        score: appStore.task["step3_1_4"]?.평가점수 || 0,
        step: "step3_1_4",
      },
      {
        name: "권리보호강도",
        weight: "3",
        score: appStore.task["step3_1_5"]?.평가점수 || 0,
        step: "step3_1_5",
      },
    ],
  },
  {
    name: "시장/사업 요인",
    EvalValue: [
      {
        name: "시장진입가능성",
        weight: "4",
        score: appStore.task["step3_1_6"]?.평가점수 || 0,
        step: "step3_1_6",
      },
      {
        name: "시장경쟁강도",
        weight: "4",
        score: appStore.task["step3_1_7"]?.평가점수 || 0,
        step: "step3_1_7",
      },
      {
        name: "시장경쟁의 변화",
        weight: "4",
        score: appStore.task["step3_1_8"]?.평가점수 || 0,
        step: "step3_1_8",
      },
      {
        name: "신제품 출현가능성",
        weight: "3",
        score: appStore.task["step3_1_9"]?.평가점수 || 0,
        step: "step3_1_9",
      },
      {
        name: "예상 시장점유율",
        weight: "4",
        score: appStore.task["step3_1_10"]?.평가점수 || 0,
        step: "step3_1_10",
      },
    ],
  },
]);

//기술수명 영향요인 값 산출
const totalEvalValues = computed(() => {
  let sum = 0;

  locations.value.forEach((location) => {
    location.EvalValue.forEach((evalValue) => {
      sum += evalValue.weight * evalValue.score;
    });
  });

  const result = (sum / 205) * 100;
  updateTask(appStore.task, {
    step3_totalEvalValue: result.toFixed(1),
  });
  return result.toFixed(1);
});
</script>
