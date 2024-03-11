<template>
  <!-- 기술기여도 - 메인 폼 -->

  <div class="flex flex-col space-y-8 px-7 py-7 bg-blue-50 rounded">
    <div
      class="flex text-gray-900 text-md font-semibold font-sans leading-tight"
    >
      6.2. 기술기여도
    </div>

    <div
      class="mx-3 flex flex-col text-gray-600 text-sm leading-normal space-y-2"
    >
      <div class="font-semibold">평가지표</div>
      <div class="font-normal">
        평가대상특허의 기술기여도는 2021년 기술평가
        실무가이드(산업통상자원부)에서 제공하는 표준산업분류별 산업기술요소,
        개별기술강도 평가항목의 평가점수, 기술의 비중을 이용하여 아래와 같이
        산출되었습니다.
      </div>
    </div>

    <div class="flow-root">
      <ul role="list" class="-mb-8">
        <li v-for="(event, eventIdx) in techContributionCalc" :key="event.id">
          <div class="relative pb-8">
            <span
              v-if="eventIdx !== techContributionCalc.length - 1"
              class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
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

                <!-- 기술기여도 - 개별기술강도 -->

                <div
                  v-if="event.id === '1'"
                  class="flex flex-col space-y-3 px-5 py-2 text-gray-600 text-sm"
                >
                  <div
                    class="my-2 flex-col justify-start items-start flex space-y-5 ml-1 text-gray-600 text-sm font-normal list-disc"
                  >
                    <li>
                      <span> 개별기술강도 평가 점수 : </span>
                      <span class="text-blue-500"
                        >{{ techCommercializationRiskPremiumScore }} 점</span
                      >
                    </li>
                    <li>
                      <span> 개별기술강도 : </span>
                      <span class="text-blue-500"
                        >{{ techCommercializationRiskPremium }} %</span
                      >
                    </li>
                  </div>
                </div>

                <!-- 기술기여도 - 산업기술요소 -->

                <div v-if="event.id === '2'">
                  <div
                    class="my-2 flex flex-col space-y-3 px-5 py-2 text-gray-600 text-sm"
                  >
                    <!-- 평가대상특허 사업화 표준산업분류 -->
                    <div>
                      <li class="text-gray-600 text-sm list-disc">
                        <span> 평가대상특허 사업화 표준산업분류 : </span>
                        <span class="text-blue-500">{{ totalEvalValues }}</span>
                      </li>
                    </div>

                    <!-- 산업기술요소 -->
                    <div>
                      <li class="text-gray-600 text-sm list-disc">
                        <span> 산업기술요소 : </span>
                        <span class="text-blue-500"
                          >{{ CAPMPlusScalePremium }} %</span
                        >
                      </li>
                    </div>
                  </div>
                </div>

                <!-- 기술기여도 - 기술의 비중 -->

                <div v-if="event.id === '3'">
                  <div
                    class="my-2 flex flex-col space-y-3 px-5 py-2 text-gray-600 text-sm"
                  >
                    <!-- 평가대상특허 사업화 표준산업분류 -->
                    <div>
                      <li class="text-gray-600 text-sm list-disc">
                        <span> 기술의 비중 : </span>
                        <span class="text-blue-500">{{ totalEvalValues }}</span>
                      </li>
                    </div>
                  </div>
                </div>

                <!-- 기술기여도 - 기술기여도 -->

                <div v-if="event.id === '4'">
                  <div
                    class="my-2 flex flex-col space-y-3 px-5 py-2 text-gray-600 text-sm"
                  >
                    <!-- 기술기여도 -->
                    <div>
                      <li class="font-semibold text-gray-600 text-sm list-disc">
                        <span> 최종 기술기여도 : </span>
                        <span class="text-blue-500"
                          >{{ totalEvalValues }} %</span
                        >
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div
      class="flex-col items-center justify-center bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700"
    >
      <div class="text-center text-3xl font-semibold text-white">10 %</div>
      <div class="mt-1 text-center text-sm font-medium leading-6 text-white">
        최종 기술기여도
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
        기술성 - 차별성 (0점), 기술경쟁강도 (0점), 대체가능성 (0점)
      </li>
      <li class="font-normal list-disc">
        시장성 - 시장진입가능성 (0점), 시장경쟁강도 (0점), 시장경쟁의 변화
        (0점), 신제품 출현가능성 (0점)
      </li>
      <li class="font-normal list-disc">
        전체 평균점수 : {{ totalEvalValues }}점
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
import { useAppStore } from "@/store/app";
import { ref } from "vue";
import { useRouter } from "vue-router";

const appStore = useAppStore();
const router = useRouter();
const techCommercializationRiskPremiumScore = ref(0);
const techCommercializationRiskPremium = ref(0);
const CAPMPlusScalePremium = ref(0);
const totalEvalValues = ref(0);

// 기타

import { CheckIcon } from "@heroicons/vue/20/solid";

// 기술기여도
const techContributionCalc = [
  {
    id: "1",
    content: "개별기술강도",
    target: "#6.1 개별기술강도",
    href: "#",
    date: "20개 항목",
    icon: CheckIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: "2",
    content: "산업기술요소",
    target: "#1 특허정보 / 대표IPC",
    href: "#",
    date: "1개 항목",
    icon: CheckIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: "3",
    content: "기술의 비중",
    target: "#4.2 매출계획 ~ #4.3 매출원가ㆍ판관비",
    href: "#",
    date: "4개 항목",
    icon: CheckIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: "4",
    content: "할인율(현가계수)",
    target: "#5.1 기술사업화 프리미엄",
    href: "#",
    date: "4개 항목",
    icon: CheckIcon,
    iconBackground: "bg-blue-500",
  },
];
</script>
@/components/Summary.vue
