<template>

      <!-- 4.2.1. 매출계획 선택 - 현금흐름 추정기간 내 매출 추정  -->

      <div class="flex flex-col space-y-8 px-7 py-7 bg-blue-50 rounded">
        <div class="text-md font-semibold text-gray-900">
          4.2.1. 매출계획 - 현금흐름 추정기간 내 매출 추정
        </div>
        <div class="text-sm font-semibold text-gray-500">
          평가대상특허의 현금흐름 추정기간 동안의 매출 추정을 위한 방법은 아래와 같습니다.
        </div>

        <fieldset class="pt-4">
          <legend class="sr-only">Sales Plan Selection</legend>
          <div class="space-y-6">
            <div
              v-for="salesPlanOption in salesPlanSelect"
              :key="`${salesPlanOption.id}_4_2_1`"
              class="flex"
            >
              <input
                :id="`${salesPlanOption.id}_4_2_1`"
                name="salesPlan-selection"
                type="radio"
                :checked="selectedSalesPlanOption === `${salesPlanOption.id}_4_2_1`"
                class="mt-1 h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                @click="selectSalesPlanRadio(`${salesPlanOption.id}_4_2_1`)"
              />
              <div class="flex-col w-full">
                <label
                @click="selectSalesPlanRadio(`${salesPlanOption.id}_4_2_1`)"
                  :id="`${salesPlanOption.id}_4_2_1`"
                  class="ml-3 block text-sm font-medium leading-6 text-gray-900"
                  >{{ salesPlanOption.name }}</label
                >

                <!-- 4.2.1. 매출계획 - 1번 항목 - 사업화 대상기업의 시장규모 및 선점 위치 -->

                <div
                  class="ml-1 pt-3 pb-5 text-sm font-medium leading-6 text-gray-900 space-y-2"
                  v-if="salesPlanOption.id === '1'"
                >
                  <div class="flex pt-3 space-x-3 items-center">
                    <div class="flex items-center justify-between">
                      <li class="text-sm font-medium leading-6 text-blue-900">
                        기업 규모
                      </li>
                    </div>

                    <RadioGroup v-model="businessScale">
                      <RadioGroupLabel class="sr-only"
                        >Choose a business scale option</RadioGroupLabel
                      >
                      <div class="grid grid-cols-3 gap-3 sm:grid-cols-5">
                        <RadioGroupOption
                          @click="selectSalesPlanRadio(`${salesPlanOption.id}_4_2_1`)"
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
                  </div>

                  <!-- 4.2.1. 매출계획 - 1번 항목 - 시장 내 위치 -->

                  <div class="flex space-x-3">
                    <div class="flex items-center justify-between">
                      <li class="text-sm font-medium leading-6 text-blue-900">
                        시장 위치
                      </li>
                    </div>

                    <RadioGroup v-model="businessPosition">
                      <RadioGroupLabel class="sr-only"
                        >Choose a business scale option</RadioGroupLabel
                      >
                      <div class="grid grid-cols-3 gap-3 sm:grid-cols-5">
                        <RadioGroupOption
                          @click="selectSalesPlanRadio(`${salesPlanOption.id}_4_2_1`)"
                          as="template"
                          v-for="businessPosition in businessPositionOptions"
                          :key="businessPosition.position"
                          :value="businessPosition"
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
                              businessPosition.position
                            }}</RadioGroupLabel>
                          </div>
                        </RadioGroupOption>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <!-- 4.2.1. 매출계획 - 2번 항목 - 시장 점유율 직접입력 -->

                <div
                  class="ml-3 -mt-1.5 pb-1 text-sm font-medium leading-6 text-gray-900 space-y-2"
                  v-if="salesPlanOption.id === '2'"
                >
                  <div class="flex items-center space-x-3">
                    <label
                      for="4_2_1_marketShare"
                      class="text-sm font-medium leading-6 text-gray-900"
                      >시장 점유율</label
                    >
                    <input
                      @click="selectSalesPlanRadio(`${salesPlanOption.id}_4_2_1`)"
                      type="text"
                      name="marketShare"
                      id="4_2_1_marketShare"
                      class="block w-1/2 rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      placeholder="예상 시장 점유율 입력, 예) 10%"
                    />
                  </div>
                </div>

                <!-- 4.2.1. 매출계획 - 3번 항목 - 예상 매출액 직접입력 -->

                <div
                  class="ml-3 -mt-1.5 pb-1 text-sm font-medium leading-6 text-gray-900 space-y-2"
                  v-if="salesPlanOption.id === '3'"
                >
                  <div class="flex items-center space-x-3">
                    <label
                      for="estimatedSales"
                      class="text-sm font-medium leading-6 text-gray-900"
                      >예상 매출액</label
                    >
                    <input
                      @click="selectSalesPlanRadio(`${salesPlanOption.id}_4_2_1`)"
                      type="text"
                      name="estimatedSales"
                      id="estimatedSales"
                      class="block w-1/2 rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      placeholder="예상 매출액 입력, 예) 10억원"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </fieldset>

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

// 매출계획
const salesPlanSelect = [
  {
    id: "1",
    name: "사업화 대상기업의 시장 규모 및 선점위치",
    companyScale: "대기업",
    marketPosition: "선두그룹",
    marketShare: "10%",
    estimatedSales: "70,000",
  },
  {
    id: "2",
    name: "",
    companyScale: "",
    marketPosition: "",
    marketShare: "",
    estimatedSales: "",
  },
  {
    id: "3",
    name: "",
    companyScale: "",
    marketPosition: "",
    marketShare: "",
    estimatedSales: "",
  },
];

const selectSalesPlanRadio = (salesPlanOptionId) => {
  // When the input box is clicked, select the corresponding radio button
  selectedSalesPlanOption.value = salesPlanOptionId;
};

const selectedSalesPlanOption = ref(null);

// 매출계획 스크립트

import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";

const businessScaleOptions = [
  { scale: "대기업" },
  { scale: "중기업" },
  { scale: "소기업" },
  { scale: "창업기업" },
];

const businessPositionOptions = [
  { position: "선두그룹" },
  { position: "중간그룹" },
  { position: "하위그룹" },
];

const businessScale = ref(businessScaleOptions[2]);
const businessPosition = ref(businessPositionOptions[2]);

</script>
@/components/Summary.vue
