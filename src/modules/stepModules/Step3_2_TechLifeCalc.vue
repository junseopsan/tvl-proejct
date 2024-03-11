<template>
  <!-- 기술의 경제적 수명 - 메인 폼 -->

  <div class="flex flex-col space-y-8 px-7 py-7 bg-blue-50 rounded">
    <div
      class="flex text-gray-900 text-md font-semibold font-sans leading-tight"
    >
      3.2. 기술의 경제적 수명
    </div>

    <div
      class="mx-3 flex flex-col text-gray-600 text-sm leading-normal space-y-2"
    >
      <div class="font-semibold">평가지표</div>
      <div class="font-normal">
        평가대상특허의 경제적 수명은 특허인용수명 지수(TCT 지수)와
        기술수명영향요인 평가점수(적용모델)를 바탕으로 아래와 같이
        산출되었습니다.
      </div>
    </div>

    <div class="flow-root">
      <ul role="list" class="-mb-8">
        <li v-for="(event, eventIdx) in techLifeCalc" :key="event.id">
          <div class="relative pb-8">
            <span
              v-if="eventIdx !== techLifeCalc.length - 1"
              class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-blue-200"
              aria-hidden="true"
            />
            <div class="relative flex space-x-3">
              <div>
                <span
                  :class="[
                    event.iconBackground,
                    'h-8 w-8 rounded-full flex items-center justify-center',
                  ]"
                >
                  <component
                    :is="event.icon"
                    class="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>

              <div class="flex flex-col w-full space-y-2">
                <div
                  class="mb-1 flex min-w-0 flex-1 w-full justify-between space-x-4 pt-1.5"
                >
                  <div class="flex space-x-2">
                    <p class="flex text-sm font-medium text-gray-900">
                      {{ event.content }}
                    </p>
                    <div class="flex text-sm font-medium text-gray-900">-</div>
                    <a
                      :href="event.href"
                      class="text-sm font-medium text-blue-500"
                      >{{ event.target }}</a
                    >
                  </div>
                  <div
                    class="whitespace-nowrap text-right text-sm text-gray-500"
                  >
                    <time :datetime="event.datetime">{{ event.date }}</time>
                  </div>
                </div>

                <!-- 기술의 경제적 수명 - 대상 특허의 IPC 및 TCT 통계 -->

                <div v-if="appStore.task.cpcSelected && event.id === 1">
                  <!-- 대표 IPC(국제특허분류 코드) -->
                  <div
                    class="flex flex-col space-y-3 px-5 py-2 text-gray-600 text-sm"
                  >
                    <div class="-ml-4">대표 IPC(국제특허분류 코드)</div>
                    <div
                      class="my-2 flex-col justify-start items-start flex space-y-2 ml-1 text-gray-600 text-sm font-normal list-disc"
                    >
                      <li>
                        <span> 메인 IPC : </span>
                        <span class="text-blue-500">{{
                          appStore.task.cpcSelected?.IPC
                        }}</span>
                      </li>
                      <li>
                        <span> 메인 IPC 내용 : </span>
                        <span class="text-blue-500">{{
                          appStore.task.cpcSelected?.내용
                        }}</span>
                      </li>
                    </div>
                  </div>

                  <!-- TCT 통계 -->
                  <div
                    class="flex flex-col space-y-3 px-5 py-2 text-gray-600 text-sm"
                  >
                    <div class="-ml-4">TCT 통계</div>

                    <div
                      class="flex-col justify-start items-start flex space-y-2 ml-1 text-gray-600 text-sm font-normal list-disc"
                    >
                      <li>
                        <span> 평균 : </span>
                        <span class="text-blue-500"
                          >{{ appStore.task.cpcSelected?.평균 }} 년</span
                        >
                      </li>
                      <li>
                        <span> Q1 : </span>
                        <span class="text-blue-500"
                          >{{ appStore.task.cpcSelected?.Q1 }} 년</span
                        >
                      </li>
                      <li>
                        <span> Q2(중앙값) : </span>
                        <span class="text-blue-500"
                          >{{ appStore.task.cpcSelected?.Q2 }} 년</span
                        >
                      </li>
                      <li>
                        <span> Q3 : </span>
                        <span class="text-blue-500"
                          >{{ appStore.task.cpcSelected?.Q3 }} 년</span
                        >
                      </li>
                    </div>
                  </div>
                </div>
                <!-- <div v-else>
                      1번 스텝에서 예 선택합니다. 클릭이 필요합니다.
                    </div> -->

                <!-- 기술의 경제적 수명 - 기술수명 영향요인 획득값 -->

                <div
                  v-if="event.id === 2"
                  class="flex flex-col space-y-3 px-5 py-2 text-gray-600 text-sm"
                >
                  <div
                    class="my-2 flex-col justify-start items-start flex space-y-2 ml-1 text-gray-600 text-sm font-normal list-disc"
                  >
                    <li>
                      <span> 기술수명영향요인 획득값 : </span>
                      <span class="text-blue-500"
                        >{{ appStore.task.step3_totalEvalValue }} 점</span
                      >
                    </li>
                  </div>
                </div>
                <!-- <div v-else>
                      2번 스텝에서 예 선택합니다. 클릭이 필요합니다.
                    </div> -->

                <!-- 기술의 경제적 수명 - 기술의 경제적 수명 -->

                <div
                  v-if="event.id === 3"
                  class="flex flex-col space-y-3 px-5 py-2 text-gray-600 text-sm"
                >
                  <div
                    class="my-2 flex-col justify-start items-start flex space-y-2 ml-1 text-gray-600 text-sm font-normal list-disc"
                  >
                    <li>
                      <span> 기술의 경제적 수명 : </span>
                      <span class="text-blue-500">{{ economicLife }} 년</span>
                    </li>
                  </div>
                </div>
                <!-- <div v-else>
                      3번 스텝에서 예 선택합니다. 클릭이 필요합니다.
                    </div> -->
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div
      class="flex-col items-center justify-center bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700"
    >
      <div class="text-center text-3xl font-semibold text-white">
        {{ economicLife }} 년
      </div>
      <div class="mt-1 text-center text-sm font-medium leading-6 text-white">
        기술의 경제적 수명
      </div>
    </div>

    <!-- AI 추천 -->
    <div
      class="mx-1 flex flex-col text-gray-600 text-sm leading-normal space-y-2 bg-white p-4 rounded-md"
    >
      <div class="font-semibold">AI 추천 근거</div>
      <li class="font-normal list-disc">
        평가대상특허의 예상 시장점유율을 추정할 수 있는 평가항목 점수의
        평균점수로 평가진행
      </li>
      <li class="font-normal list-disc">
        기술성 - 우월성 ({{ appStore.task.step3_1_1?.평가점수 }}점),
        기술경쟁강도 ({{ appStore.task.step3_1_2?.평가점수 }}점), 대체가능성 ({{
          appStore.task.step3_1_3?.평가점수
        }}점)
      </li>
      <li class="font-normal list-disc">
        시장성 - 시장진입가능성 ({{ appStore.task.step3_1_6?.평가점수 }}점),
        시장경쟁강도 ({{ appStore.task.step3_1_7?.평가점수 }}점), 시장경쟁의
        변화 ({{ appStore.task.step3_1_8?.평가점수 }}점), 신제품 출현가능성 ({{
          appStore.task.step3_1_9?.평가점수
        }}점)
      </li>
      <li class="font-normal list-disc">
        전체 평균점수 : {{ appStore.task.step3_totalEvalValue }}점
      </li>
    </div>

    <div class="self-stretch justify-end items-end gap-2 inline-flex pt-4">
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
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useAppStore } from "@/store/app";
import { useRouter } from "vue-router";
import { CheckIcon } from "@heroicons/vue/20/solid";
import { updateTask } from "@/utils/fsdb";
import { step6_1_17 } from "@/utils/calculator";

const appStore = useAppStore();
const router = useRouter();

onMounted(() => {
  appStore.currentPageName = router.currentRoute.value.name;
});

const techLifeCalc = [
  {
    id: 1,
    content: "대상 특허의 IPC 및 TCT 통계",
    target: "#1 특허정보 / 대표IPC",
    href: "#",
    date: "1개 항목",
    icon: CheckIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 2,
    content: "기술수명영향요인 획득값",
    target: "#3 우월성 ~ #12 예상 시장점유율",
    href: "#",
    date: "10개 항목",
    icon: CheckIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 3,
    content: "기술의 경제적 수명",
    target: "#3 우월성 ~ #12 예상 시장점유율",
    href: "#",
    date: "10개 항목",
    icon: CheckIcon,
    iconBackground: "bg-blue-500",
  },
];

const economicLife = computed(() => {
  if (!appStore.task.cpcSelected) return null;
  const Q1 = appStore.task.cpcSelected.Q1;
  const Q2 = appStore.task.cpcSelected.Q2;
  const Q3 = appStore.task.cpcSelected.Q3;
  const totalEvalValue = appStore.task.step3_totalEvalValue;

  let result;
  if (totalEvalValue < 60) {
    result = Q1 + (Q2 - Q1) * ((totalEvalValue - 20) / (60 - 20));
  } else if (totalEvalValue >= 60 && totalEvalValue < 100) {
    result = Q2 + (Q3 - Q2) * ((totalEvalValue - 60) / (100 - 60));
  } else {
    console.error("획득값은 60에서 100 사이의 값이어야 합니다.");
    return null; // 또는 적절한 오류 처리
  }
  const res = result.toFixed(1);
  const eco_life_year = step6_1_17(Number(res));
  updateTask(appStore.task, {
    economicLife: res,
    step6_1_17: {
      loading: "f",
      평가근거: eco_life_year.reason,
      평가점수: eco_life_year.score,
    },
  });
  return res;
});
</script>
