<template>
  <!-- 할인율 - 메인 폼 -->

  <div class="flex flex-col space-y-8 px-7 py-7 bg-blue-50 rounded">
    <div
      class="flex text-gray-900 text-md font-semibold font-sans leading-tight"
    >
      5.2. 할인율
    </div>

    <div
      class="mx-3 flex flex-col text-gray-600 text-sm leading-normal space-y-2"
    >
      <div class="font-semibold">평가지표</div>
      <div class="font-normal">
        평가대상특허의 할인율은 2021년 기술평가 실무가이드(산업통상자원부)에서
        제공하는 산업별 할인율 산출표에 따른 자기자본비용, 자기자본비율, 세전
        타인자본비용 값과 기술사업화 위험프리미엄 평가항목의 평가점수를 바탕으로
        산출한 사업화 위험프리미엄 값을 이용하여 아래와 같이 산출되었습니다.
      </div>
    </div>

    <div class="flow-root">
      <ul role="list" class="-mb-8">
        <li v-for="(event, eventIdx) in discoutRateCalc" :key="event.id">
          <div class="relative pb-8">
            <span
              v-if="eventIdx !== discoutRateCalc.length - 1"
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

                <!-- 할인율 - 기술사업화 위험프리미엄 -->

                <div
                  v-if="event.id === '1'"
                  class="flex flex-col space-y-3 px-5 py-2 text-gray-600 text-sm"
                >
                  <div
                    class="my-2 flex-col justify-start items-start flex space-y-5 ml-1 text-gray-600 text-sm font-normal list-disc"
                  >
                    <li>
                      <span> 기술사업화 위험프리미엄 평가점수 : </span>
                      <span class="text-blue-500"
                        >{{ techCommercializationRiskPremiumScore }} 점</span
                      >
                    </li>
                    <li>
                      <span> 기술사업화 위험프리미엄 : </span>
                      <span class="text-blue-500"
                        >{{ techCommercializationRiskPremium }} %</span
                      >
                    </li>
                  </div>
                </div>

                <!-- 할인율 - CAPM + 규모프리미엄, 자기자본비용, 타인자본비용, 자기자본비율 -->

                <div v-if="event.id === '2'">
                  <!-- 평가대상특허 사업화주체의 기업규모 -->
                  <div
                    class="my-2 flex flex-col space-y-3 px-5 py-2 text-gray-600 text-sm"
                  >
                    <div class="space-y-5">
                      <li class="list-disc">
                        평가대상특허 사업화주체의 기업규모
                      </li>

                      <RadioGroup v-model="businessScale">
                        <RadioGroupLabel class="sr-only"
                          >Choose a business scale option</RadioGroupLabel
                        >
                        <div
                          class="-mt-2 grid grid-cols-3 gap-3 sm:grid-cols-5"
                        >
                          <RadioGroupOption
                            as="template"
                            v-for="businessScale in businessScaleOptions"
                            :key="businessScale.scale"
                            :value="businessScale"
                            v-slot="{ active, checked }"
                          >
                            <div
                              :class="[
                                active
                                  ? 'ring-2 ring-blue-600 ring-offset-2'
                                  : '',
                                checked
                                  ? 'bg-blue-600 text-white hover:bg-blue-500'
                                  : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50',
                                'flex items-center justify-center rounded-md py-1 px-3 text-sm font-semibold uppercase sm:flex-1',
                              ]"
                            >
                              <RadioGroupLabel as="span">{{
                                businessScale.scale
                              }}</RadioGroupLabel>
                            </div>
                          </RadioGroupOption>
                        </div>
                      </RadioGroup>

                      <!-- 평가대상특허 사업화 표준산업분류 -->
                      <div>
                        <li class="text-gray-600 text-sm list-disc">
                          <span> 평가대상특허 사업화 표준산업분류 : </span>
                          <span class="text-blue-500">{{
                            totalEvalValues
                          }}</span>
                        </li>
                      </div>

                      <!-- CAPM+규모프리미엄 점수 -->
                      <div>
                        <li class="text-gray-600 text-sm list-disc">
                          <span> CAPM+규모프리미엄 : </span>
                          <span class="text-blue-500"
                            >{{ CAPMPlusScalePremium }} %</span
                          >
                        </li>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 할인율 - 실효법인세율 -->

                <div
                  v-if="event.id === '3'"
                  class="flex flex-col space-y-3 px-5 py-2 text-gray-600 text-sm"
                >
                  <div
                    class="my-2 flex-col justify-start items-start flex space-y-2 ml-1 text-gray-600 text-sm font-normal list-disc"
                  >
                    <li>
                      <span> 연도별 법인세율 : </span>
                      <span class="text-blue-500"
                        >{{ effectiveCorporateTaxRate }}%</span
                      >
                    </li>
                  </div>
                </div>

                <!-- 할인율 - 할인율 -->

                <div
                  v-if="event.id === '4'"
                  class="flex flex-col space-y-3 px-5 py-2 text-gray-600 text-sm"
                >
                  <!-- 자기자본비용 -->
                  <div>
                    <li class="text-gray-600 text-sm list-disc">
                      <span> 자기자본비용 : </span>
                      <span class="text-blue-500"
                        >{{ equityCapitalCost }} %</span
                      >
                    </li>
                  </div>

                  <!-- 타인자본비용 -->
                  <div>
                    <li class="text-gray-600 text-sm list-disc">
                      <span> 타인자본비용 : </span>
                      <span class="text-blue-500">{{ debtCapitalCost }} %</span>
                    </li>
                  </div>

                  <!-- 자기자본비율 -->
                  <div>
                    <li class="text-gray-600 text-sm list-disc">
                      <span> 자기자본비율 : </span>
                      <span class="text-blue-500"
                        >{{ debtCapitalRatio }} %</span
                      >
                    </li>
                  </div>

                  <!-- 할인율 -->
                  <div>
                    <li class="font-semibold text-gray-600 text-sm list-disc">
                      <span> 최종 할인율 : </span>
                      <span class="text-blue-600">{{ WACC }} %</span>
                    </li>
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
      <div class="text-center text-3xl font-semibold text-white">
        {{ WACC }} %
      </div>
      <div class="mt-1 text-center text-sm font-medium leading-6 text-white">
        최종 할인율
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

const totalEvalValues = ref(0);

// 할인율

import { CheckIcon } from "@heroicons/vue/20/solid";

const discoutRateCalc = [
  {
    id: "1",
    content: "기술사업화 위험프리미엄",
    target: "#5.1 기술사업화 위험프리미엄",
    href: "#",
    date: "10개 항목",
    icon: CheckIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: "2",
    content: "CAPM+규모프리미엄",
    target: "#1 특허정보 / 대표IPC",
    href: "#",
    date: "1개 항목",
    icon: CheckIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: "3",
    content: "실효법인세율",
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

// 할인율 - 평가대상특허 사업화주체의 기업규모
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";

const businessScaleOptions = [
  { scale: "대기업" },
  { scale: "중기업" },
  { scale: "소기업" },
  { scale: "창업기업" },
];

const businessScale = ref(businessScaleOptions[2]);

const estimatedCashFlowDate = [
  { startDate: "2023.08.30", endDate: "2024.08.29" },
  { startDate: "2024.08.30", endDate: "2025.08.29" },
  { startDate: "2025.08.30", endDate: "2026.08.29" },
  { startDate: "2026.08.30", endDate: "2027.08.29" },
  { startDate: "2027.08.30", endDate: "2028.08.29" },
  { startDate: "2028.08.30", endDate: "2029.08.29" },
  { startDate: "2029.08.30", endDate: "2030.08.29" },
  { startDate: "2030.08.30", endDate: "2031.08.29" },
  { startDate: "2031.08.30", endDate: "2032.08.29" },
  { startDate: "2032.08.30", endDate: "2033.08.29" },
  { startDate: "2033.08.30", endDate: "2034.08.29" },
];

//기술사업화 위험 평점과 위험프리미엄
const techCommercializationRiskPremiumTable = [
  { id: "1", score: "20", riskpremium: "10.01%" },
  { id: "2", score: "21", riskpremium: "9.33%" },
  { id: "3", score: "22", riskpremium: "8.72%" },
  { id: "4", score: "23", riskpremium: "8.15%" },
  { id: "5", score: "24", riskpremium: "7.62%" },
  { id: "6", score: "25", riskpremium: "7.14%" },
  { id: "7", score: "26", riskpremium: "6.68%" },
  { id: "8", score: "27", riskpremium: "6.25%" },
  { id: "9", score: "28", riskpremium: "5.84%" },
  { id: "10", score: "29", riskpremium: "5.46%" },
  { id: "11", score: "30", riskpremium: "5.10%" },
  { id: "12", score: "31", riskpremium: "4.75%" },
  { id: "13", score: "32", riskpremium: "4.42%" },
  { id: "14", score: "33", riskpremium: "4.10%" },
  { id: "15", score: "34", riskpremium: "3.80%" },
  { id: "16", score: "35", riskpremium: "3.51%" },
  { id: "17", score: "36", riskpremium: "3.24%" },
  { id: "18", score: "37", riskpremium: "2.97%" },
  { id: "19", score: "38", riskpremium: "2.71%" },
  { id: "20", score: "39", riskpremium: "2.46%" },
  { id: "21", score: "40", riskpremium: "2.22%" },
  { id: "22", score: "41", riskpremium: "1.99%" },
  { id: "23", score: "42", riskpremium: "1.76%" },
  { id: "24", score: "43", riskpremium: "1.55%" },
  { id: "25", score: "44", riskpremium: "1.33%" },
  { id: "26", score: "45", riskpremium: "1.13%" },
  { id: "27", score: "46", riskpremium: "0.93%" },
  { id: "28", score: "47", riskpremium: "0.73%" },
  { id: "29", score: "48", riskpremium: "0.54%" },
  { id: "30", score: "49", riskpremium: "0.36%" },
  { id: "31", score: "50", riskpremium: "0.18%" },
];

//기술사업화 위험프리미엄 점수
const techCommercializationRiskPremiumScore = ref();

//기술사업화 위험프리미엄
const techCommercializationRiskPremium = ref();

//CAPM+규모프리미엄 할인율 표 / CAPM(Capital Asset Pricing Model) : 자본자산가격결정모형
const CAPMPlusScalePremiumTable = [
  {
    id: "1",
    industy: "A01",
    large: "7.63",
    medium: "8.8",
    small: "10.39",
    startup: "11.75",
  },
  {
    id: "2",
    industy: "A02",
    large: "7.63",
    medium: "8.8",
    small: "10.39",
    startup: "11.75",
  },
  {
    id: "3",
    industy: "A03",
    large: "7.63",
    medium: "8.8",
    small: "10.39",
    startup: "11.75",
  },
  {
    id: "4",
    industy: "B05",
    large: "7.63",
    medium: "8.8",
    small: "10.39",
    startup: "11.75",
  },
  {
    id: "5",
    industy: "B06",
    large: "7.63",
    medium: "8.8",
    small: "10.39",
    startup: "11.75",
  },
  {
    id: "6",
    industy: "B07",
    large: "7.63",
    medium: "8.8",
    small: "10.39",
    startup: "11.75",
  },
  {
    id: "7",
    industy: "B08",
    large: "7.63",
    medium: "8.8",
    small: "10.39",
    startup: "11.75",
  },
  {
    id: "8",
    industy: "C10",
    large: "7.06",
    medium: "7.94",
    small: "9.14",
    startup: "10.16",
  },
  {
    id: "9",
    industy: "C11",
    large: "6.26",
    medium: "7.13",
    small: "8.32",
    startup: "9.33",
  },
];

//CAPM+규모프리미엄
const CAPMPlusScalePremium = ref();

//자기자본비용 = CAPM+규모프리미엄 + 기술사업화 위험프리미엄
const equityCapitalCost =
  CAPMPlusScalePremium + techCommercializationRiskPremium;

//자기자본비율(비상장) 표
const debtCapitalRatioTable = [
  { id: "1", industy: "A01", DCRatio: "57.27" },
  { id: "2", industy: "A02", DCRatio: "73.45" },
  { id: "3", industy: "A03", DCRatio: "63.82" },
  { id: "4", industy: "B05", DCRatio: "64.05" },
  { id: "5", industy: "B06", DCRatio: "64.05" },
  { id: "6", industy: "B07", DCRatio: "64.42" },
  { id: "7", industy: "B08", DCRatio: "64.05" },
];

//자기자본비율(비상장)
const debtCapitalRatio = ref();

//타인자본비용(세전) 표
const debtCapitalCostTable = [
  {
    id: "1",
    industy: "A01",
    large: "6.04",
    medium: "7.11",
    small: "8.35",
    startup: "9.78",
  },
  {
    id: "2",
    industy: "A02",
    large: "6.04",
    medium: "7.11",
    small: "8.35",
    startup: "9.78",
  },
  {
    id: "3",
    industy: "A03",
    large: "6.04",
    medium: "7.11",
    small: "8.35",
    startup: "9.78",
  },
  {
    id: "4",
    industy: "B05",
    large: "6.04",
    medium: "7.11",
    small: "8.35",
    startup: "9.78",
  },
  {
    id: "5",
    industy: "B06",
    large: "6.04",
    medium: "7.11",
    small: "8.35",
    startup: "9.78",
  },
  {
    id: "6",
    industy: "B07",
    large: "6.04",
    medium: "7.11",
    small: "8.35",
    startup: "9.78",
  },
  {
    id: "7",
    industy: "B08",
    large: "6.04",
    medium: "7.11",
    small: "8.35",
    startup: "9.78",
  },
];

//타인자본비용
const debtCapitalCost = ref();

//실효법인세율
const effectiveCorporateTaxRate = ref();

//할인율(WACC) = 자기자본비용 * 자기자본구성비 + 타인바본비용 * 타인자본구성비 * (1-법인세율)
const WACC =
  equityCapitalCost * debtCapitalRatio +
  debtCapitalCost * (1 - debtCapitalRatio) * (1 - effectiveCorporateTaxRate);
</script>
@/components/Summary.vue
