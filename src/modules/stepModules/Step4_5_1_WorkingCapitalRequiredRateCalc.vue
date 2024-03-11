<template>

      <!-- 4.5.1. 운전자본소요율 - 현금흐름 추정기간 내 운전자본소요율 -->

      <div class="flex flex-col space-y-8 px-7 py-7 bg-blue-50 rounded">
        <div class="text-md font-semibold text-gray-900">
          4.5.1. 운전자본소요율 - 현금흐름 추정기간 내 운전자본소요율 산출
        </div>
        <div class="text-sm font-semibold text-gray-500">
          평가대상특허의 현금흐름 추정기간 동안의 운전자본소요율 적용 방법은 아래와 같습니다.
        </div>

        <fieldset class="pt-4">
          <legend class="sr-only">Working Capital Required Rate Selection</legend>
          <div class="space-y-6">
            <div
              v-for="workingCapitalRequiredRateOption in workingCapitalRequiredRateSelect"
              :key="`${workingCapitalRequiredRateOption.id}4_5_1`"
              class="flex"
            >
              <input
                :id="`${workingCapitalRequiredRateOption.id}4_5_1`"
                name="workingCapitalRequiredRate-selection"
                type="radio"
                :checked="
                  selectedWorkingCapitalRequiredRateOption ===
                  workingCapitalRequiredRateOption.id
                "
                class="mt-1 h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                @click="
                  selectWorkingCapitalRequiredRateRadio(workingCapitalRequiredRateOption.id)
                "
              />
              <div class="flex-col w-full">

                <!-- 4.5.1. 운전자본소요율 - 1번 항목 - 동업종 -->

                <div
                  class="flex ml-2 pb-1 text-sm font-medium leading-6 text-gray-900 space-x-2"
                  v-if="workingCapitalRequiredRateOption.id === '1'"
                  @click="selectWorkingCapitalRequiredRateRadio(workingCapitalRequiredRateOption.id)"
                >
                <div class="w-full">
                  <h3 class="text-sm font-medium leading-6 text-gray-900">최근 5년 동업종 운전자본소요율 추정</h3>
                  <div class="mt-2 flex justify-between space-x-2">
                  <div class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-blue-100">
                  <dt class="truncate text-sm font-medium text-gray-500">재고자산회전율</dt>
                  <dd class="text-xl font-semibold tracking-tight text-blue-500 text-right">{{ workingCapitalRequiredRateSelect[0].inventoryTurnover }} %</dd>
                </div>
                <div class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-blue-100">
                  <dt class="truncate text-sm font-medium text-gray-500">매출채권회전율</dt>
                  <dd class="text-xl font-semibold tracking-tight text-blue-500 text-right">{{ workingCapitalRequiredRateSelect[0].receivablesTurnover }}  %</dd>
                </div>
                <div class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-blue-100">
                  <dt class="truncate text-sm font-medium text-gray-500">매입채무회전율</dt>
                  <dd class="text-xl font-semibold tracking-tight text-blue-500 text-right">{{ workingCapitalRequiredRateSelect[0].payablesTurnover }} %</dd>
                </div>
                <div class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-blue-100">
                  <dt class="truncate text-sm font-medium text-gray-500">운전자본소요율</dt>
                  <dd class="text-xl font-semibold tracking-tight text-blue-500 text-right">{{ workingCapitalRequiredRateSelect[0].workingCapitalRequiredRate }} %</dd>
                </div>
              </div>
            </div>
                </div>

                <!-- 4.5.1. 운전자본소요율 - 2번 항목 - 경쟁기업 -->

                <div
                  class="flex ml-2 pb-1 text-sm font-medium leading-6 text-gray-900 space-x-2"
                  v-if="workingCapitalRequiredRateOption.id === '2'"
                  @click="selectWorkingCapitalRequiredRateRadio(workingCapitalRequiredRateOption.id)"
                >
                <div class="w-full">
                  <h3 class="text-sm font-medium leading-6 text-gray-900">최근 3년 평균 경쟁기업 운전자본소요율 추정</h3>
                  <div class="mt-2 flex justify-between space-x-2">
                  <div class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-blue-100">
                  <dt class="truncate text-sm font-medium text-gray-500">재고자산회전율</dt>
                  <dd class="text-xl font-semibold tracking-tight text-blue-500 text-right">{{ workingCapitalRequiredRateSelect[1].inventoryTurnover }} %</dd>
                </div>
                <div class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-blue-100">
                  <dt class="truncate text-sm font-medium text-gray-500">매출채권회전율</dt>
                  <dd class="text-xl font-semibold tracking-tight text-blue-500 text-right">{{ workingCapitalRequiredRateSelect[1].receivablesTurnover }} %</dd>
                </div>
                <div class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-blue-100">
                  <dt class="truncate text-sm font-medium text-gray-500">매입채무회전율</dt>
                  <dd class="text-xl font-semibold tracking-tight text-blue-500 text-right">{{ workingCapitalRequiredRateSelect[1].payablesTurnover }} %</dd>
                </div>
                <div class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-blue-100">
                  <dt class="truncate text-sm font-medium text-gray-500">운전자본소요율</dt>
                  <dd class="text-xl font-semibold tracking-tight text-blue-500 text-right">{{ workingCapitalRequiredRateSelect[1].workingCapitalRequiredRate }} %</dd>
                </div>
              </div>
            </div>
                </div>

                <!-- 4.5.1. 운전자본소요율 - 3번 항목 - 사업화주체 -->

                <div
                  class="flex ml-2 pb-1 text-sm font-medium leading-6 text-gray-900 space-x-2"
                  v-if="workingCapitalRequiredRateOption.id === '3'"
                  @click="selectWorkingCapitalRequiredRateRadio(workingCapitalRequiredRateOption.id)"
                >
                <div class="w-full">
                  <h3 class="text-sm font-medium leading-6 text-gray-900">사업화 주체 OOO사 운전자본소요율 추정</h3>
                  <div class="mt-2 flex justify-between space-x-2">
                  <div class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-blue-100">
                  <dt class="truncate text-sm font-medium text-gray-500">재고자산회전율</dt>
                  <dd class="text-xl font-semibold tracking-tight text-blue-500 text-right">{{ workingCapitalRequiredRateSelect[2].inventoryTurnover }} %</dd>
                </div>
                <div class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-blue-100">
                  <dt class="truncate text-sm font-medium text-gray-500">매출채권회전율</dt>
                  <dd class="text-xl font-semibold tracking-tight text-blue-500 text-right">{{ workingCapitalRequiredRateSelect[2].receivablesTurnover }} %</dd>
                </div>
                <div class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-blue-100">
                  <dt class="truncate text-sm font-medium text-gray-500">매입채무회전율</dt>
                  <dd class="text-xl font-semibold tracking-tight text-blue-500 text-right">{{ workingCapitalRequiredRateSelect[2].payablesTurnover }} %</dd>
                </div>
                <div class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-blue-100">
                  <dt class="truncate text-sm font-medium text-gray-500">운전자본소요율</dt>
                  <dd class="text-xl font-semibold tracking-tight text-blue-500 text-right">{{ workingCapitalRequiredRateSelect[2].workingCapitalRequiredRate }} %</dd>
                </div>
              </div>
            </div>
                </div>

                <!-- 4.5.1. 운전자본소요율 - 4번 항목 - 운전자본소요율 직접입력 -->

              <div class="ml-3 pb-1 text-sm font-medium leading-6 text-gray-900 space-y-2" v-if="workingCapitalRequiredRateOption.id === '4'">

                <div class="">
                  <h3 class="text-sm font-medium leading-6 text-gray-900">운전자본소요율 추정값 직접입력</h3>
                  <div class="flex space-x-2" @click="selectWorkingCapitalRequiredRateRadio(workingCapitalRequiredRateOption.id)" >
                <input @click="selectWorkingCapitalRequiredRateRadio(workingCapitalRequiredRateOption.id)" type="text" name="inputNewInvestment" id="inputNewInvestment" class="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 hover:ring-2 hover:ring-blue-400" placeholder="재고자산회전율"/>
                <input @click="selectWorkingCapitalRequiredRateRadio(workingCapitalRequiredRateOption.id)" type="text" name="inputNewInvestment" id="inputNewInvestment" class="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 hover:ring-2 hover:ring-blue-400" placeholder="매출채권회전율"/>
                <input @click="selectWorkingCapitalRequiredRateRadio(workingCapitalRequiredRateOption.id)" type="text" name="inputNewInvestment" id="inputNewInvestment" class="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 hover:ring-2 hover:ring-blue-400" placeholder="매입채무회전율"/>
                <input @click="selectWorkingCapitalRequiredRateRadio(workingCapitalRequiredRateOption.id)" type="text" name="inputNewInvestment" id="inputNewInvestment" class="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 hover:ring-2 hover:ring-blue-400" placeholder="운전자본소요율"/>
              </div>
               </div>
              </div>

              <!-- <> -->
          
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


// 운전자본소요율
const workingCapitalRequiredRateSelect = [
  {
    id: "1",
    name: "동업종의 최근 5년 운전자본소요율",
    inventoryTurnover: "10",
    receivablesTurnover: "15",
    payablesTurnover: "25",
    workingCapitalRequiredRate: "35",
  },
  {
    id: "2",
    name: "주요 경쟁기업 000사의 최근 3년 운전자본소요율",
    inventoryTurnover: "12",
    receivablesTurnover: "25",
    payablesTurnover: "35",
    workingCapitalRequiredRate: "45",
  },
  {
    id: "3",
    name: "사업화 주체인 OOO사의 최근 3년 평균 유무형자산 비중, 감가상각비율",
    inventoryTurnover: "13",
    receivablesTurnover: "35",
    payablesTurnover: "45",
    workingCapitalRequiredRate: "55",
  },
  { id: "4", 
    name: "직접입력", 
    inventoryTurnover: "13",
    receivablesTurnover: "35",
    payablesTurnover: "45",
    workingCapitalRequiredRate: "55",},
];

const selectWorkingCapitalRequiredRateRadio = (workingCapitalRequiredRateOptionId) => {
  // When the input box is clicked, select the corresponding radio button
  selectedWorkingCapitalRequiredRateOption.value = workingCapitalRequiredRateOptionId;
};

const selectedWorkingCapitalRequiredRateOption = ref(null);

</script>
@/components/Summary.vue
