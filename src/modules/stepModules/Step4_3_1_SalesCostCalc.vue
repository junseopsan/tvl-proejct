<template>
  <!-- 4.3.1. 매출 원가ㆍ판관비 - 현금흐름 추정기간 내 매출원가, 판관비 추정 -->

  <div class="flex flex-col space-y-8 px-7 py-7 bg-blue-50 rounded">
    <div class="text-md font-semibold text-gray-900">
      4.3.1. 매출원가ㆍ판관비 - 현금흐름 추정기간 내 매출원가, 판관비 추정
    </div>
    <div class="text-sm font-semibold text-gray-500">
      평가대상특허의 현금흐름 추정기간 동안의 매출원가와 판관비 적용 방법은
      아래와 같습니다.
    </div>

    <fieldset class="pt-4">
      <legend class="sr-only">Sales Cost & SG&A Expenses Selection</legend>
      <div class="space-y-6">
        <div
          v-for="salesCostOption in salesCostSelect"
          :key="`${salesCostOption.id}_4_3_1`"
          class="flex"
        >
          <input
            :key="`${salesCostOption.id}_4_3_1`"
            name="salesCost-selection"
            type="radio"
            :checked="selectedSalesCostOption === salesCostOption.id"
            class="mt-1 h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
            @click="selectSalesCostRadio(salesCostOption.id)"
          />
          <div class="flex-col w-full">
            <label
              :for="salesCostOption.id"
              class="ml-3 block text-sm font-medium leading-6 text-gray-900"
              >{{ salesCostOption.name }}</label
            >

            <!-- 4.3.1. 매출 원가ㆍ판관비 - 1번 항목 - 동업종 -->

            <div
              class="flex ml-2 pb-1 text-sm font-medium leading-6 text-gray-900 space-x-2"
              v-if="salesCostOption.id === '1'"
            >
              <div
                @click="selectSalesCostRadio(salesCostOption.id)"
                class="w-full"
              >
                <dl class="mt-3">
                  <div
                    class="flex items-center justify-between rounded-lg bg-white px-4 py-3 space-x-10 shadow hover:bg-blue-100"
                  >
                    <dt class="truncate text-sm font-medium text-gray-500">
                      매출원가율
                    </dt>
                    <dd
                      class="text-xl font-semibold tracking-tight text-blue-500"
                    >
                      {{ salesCostSelect[0].salesCostRatio }}
                    </dd>
                  </div>
                </dl>
              </div>

              <div
                @click="selectSalesCostRadio(salesCostOption.id)"
                class="w-full"
              >
                <dl class="mt-3">
                  <div
                    class="flex items-center justify-between rounded-lg bg-white px-4 py-3 space-x-10 shadow hover:bg-blue-100"
                  >
                    <dt class="truncate text-sm font-medium text-gray-500">
                      판관비율
                    </dt>
                    <dd
                      class="text-xl font-semibold tracking-tight text-blue-500"
                    >
                      {{ salesCostSelect[0].SGnARatio }}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <!-- 4.3.1. 매출 원가ㆍ판관비 - 2번 항목 - 경쟁기업 -->

            <div
              class="flex ml-3 -mt-1.5 pb-1 text-sm font-medium leading-6 text-gray-900 space-x-2"
              v-if="salesCostOption.id === '2'"
            >
              <div
                @click="selectSalesCostRadio(salesCostOption.id)"
                class="w-full"
              >
                <dl class="mt-3">
                  <div
                    class="flex items-center justify-between rounded-lg bg-white px-4 py-3 space-x-10 shadow hover:bg-blue-100"
                  >
                    <dt class="truncate text-sm font-medium text-gray-500">
                      매출원가율
                    </dt>
                    <dd
                      class="text-xl font-semibold tracking-tight text-blue-500"
                    >
                      {{ salesCostSelect[1].salesCostRatio }}
                    </dd>
                  </div>
                </dl>
              </div>

              <div
                @click="selectSalesCostRadio(salesCostOption.id)"
                class="w-full"
              >
                <dl class="mt-3">
                  <div
                    class="flex items-center justify-between rounded-lg bg-white px-4 py-3 space-x-10 shadow hover:bg-blue-100"
                  >
                    <dt class="truncate text-sm font-medium text-gray-500">
                      판관비율
                    </dt>
                    <dd
                      class="text-xl font-semibold tracking-tight text-blue-500"
                    >
                      {{ salesCostSelect[1].SGnARatio }}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <!-- 4.3.1. 매출 원가ㆍ판관비 - 3번 항목 - 사업화주체 -->

            <div
              class="flex ml-3 -mt-1.5 pb-1 text-sm font-medium leading-6 text-gray-900 space-x-2"
              v-if="salesCostOption.id === '3'"
            >
              <div
                @click="selectSalesCostRadio(salesCostOption.id)"
                class="w-full"
              >
                <dl class="mt-3">
                  <div
                    class="flex items-center justify-between rounded-lg bg-white px-4 py-3 space-x-10 shadow hover:bg-blue-100"
                  >
                    <dt class="truncate text-sm font-medium text-gray-500">
                      매출원가율
                    </dt>
                    <dd
                      class="text-xl font-semibold tracking-tight text-blue-500"
                    >
                      {{ salesCostSelect[2].salesCostRatio }}
                    </dd>
                  </div>
                </dl>
              </div>

              <div
                @click="selectSalesCostRadio(salesCostOption.id)"
                class="w-full"
              >
                <dl class="mt-3">
                  <div
                    class="flex items-center justify-between rounded-lg bg-white px-4 py-3 space-x-10 shadow hover:bg-blue-100"
                  >
                    <dt class="truncate text-sm font-medium text-gray-500">
                      판관비율
                    </dt>
                    <dd
                      class="text-xl font-semibold tracking-tight text-blue-500"
                    >
                      {{ salesCostSelect[2].SGnARatio }}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <!-- 4.3.1. 매출 원가ㆍ판관비 - 4번 항목 - 예상 매출액 직접입력 -->

            <div
              class="ml-3 pb-1 text-sm font-medium leading-6 text-gray-900 space-y-2"
              v-if="salesCostOption.id === '4'"
            >
              <div>
                <label
                  for="inputSalesCostRatio"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >매출원가율ㆍ판관비율 직접입력</label
                >
                <div class="flex space-x-2">
                  <input
                    @click="selectSalesCostRadio(salesCostOption.id)"
                    type="number"
                    v-model="salesCostRatio"
                    class="mt-1 block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    placeholder="매출원가율, 예) 10%"
                  />
                  <input
                    @click="selectSalesCostRadio(salesCostOption.id)"
                    type="number"
                    v-model="SGnARatio"
                    class="mt-1 block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    placeholder="판관비율, 예) 10%"
                  />
                </div>
              </div>
            </div>

            <!-- 4.3.1. 매출 원가ㆍ판관비 - 5번 항목 - 예상 매출액 직접입력 -->

            <div
              class="ml-3 -mt-1.5 pb-1 text-sm font-medium leading-6 text-gray-900 space-y-2"
              v-if="salesCostOption.id === '5'"
            >
              <div class="mt-1.5 space-y-2">
                <div class="block text-sm font-medium leading-6 text-gray-900">
                  매출원가ㆍ판관비 금액 직접입력 (단위: 천원)
                </div>
                <div class="space-y-0.5">
                  <div class="mt-2 flex justify-between space-x-2">
                    <div
                      class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-blue-100"
                    >
                      <dt class="truncate text-sm font-medium text-gray-500">
                        매출원가 총액
                      </dt>
                      <dd
                        class="text-xl font-semibold tracking-tight text-blue-500 text-right"
                      >
                        {{ salesCostTotal }} 원
                      </dd>
                    </div>
                    <div
                      class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-blue-100"
                    >
                      <dt class="truncate text-sm font-medium text-gray-500">
                        판관비 총액
                      </dt>
                      <dd
                        class="text-xl font-semibold tracking-tight text-blue-500 text-right"
                      >
                        {{ SGnATotal }} 원
                      </dd>
                    </div>
                  </div>
                  <div>
                    <div
                      class="flex space-x-2"
                      v-for="i in appStore.task.cashFlowPeriod"
                      :key="i"
                    >
                      <input
                        @click="selectSalesCostRadio(salesCostOption.id)"
                        type="number"
                        v-model="salesCost[`${i}차년`]"
                        class="mt-1 block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 hover:ring-2 hover:ring-blue-400"
                        :placeholder="`${i}차년도 매출원가`"
                      />
                      <input
                        @click="selectSalesCostRadio(salesCostOption.id)"
                        type="number"
                        v-model="SGnAvalue[`${i}차년`]"
                        class="mt-1 block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 hover:ring-2 hover:ring-blue-400"
                        :placeholder="`${i}차년도 판관비`"
                      />
                    </div>
                  </div>
                </div>
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
        @click="selectValue()"
        class="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
      >
        예, 선택합니다
      </button>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import { updateTask } from "@/utils/fsdb";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const appStore = useAppStore();
const router = useRouter();

const salesCostRatio = ref();
const SGnARatio = ref();
const salesCost = ref({});
const SGnAvalue = ref({});

onMounted(() => {
  if (appStore.task.hasOwnProperty("cashFlowPeriod") === false) {
    updateTask(appStore.task, { cashFlowPeriod: 11 });
  }
});

const salesCostTotal = computed(() => {
  let total = 0;
  for (const key in salesCost.value) {
    total += Number(salesCost.value[key]);
  }
  return total.toLocaleString("ko-KR");
});
const SGnATotal = computed(() => {
  let total = 0;
  for (const key in SGnAvalue.value) {
    total += Number(SGnAvalue.value[key]);
  }
  return total.toLocaleString("ko-KR");
});

// 매출원가 및 판관비
const salesCostSelect = [
  {
    id: "1",
    name: "동업종(C29210)의 최근 5년 매출원가율, 판관비율",
    salesCostRatio: "10%",
    SGnARatio: "15%",
  },
  {
    id: "2",
    name: "주요 경쟁기업 000사, OOO사의 최근 3년 평균 매출원가율, 판관비율",
    salesCostRatio: "20%",
    SGnARatio: "25%",
  },
  {
    id: "3",
    name: "사업화 주체인 OOO사의 최근 3년 평균 매출원가율, 판관비율",
    salesCostRatio: "30%",
    SGnARatio: "35%",
  },
  { id: "4", name: "", salesCostRatio: "10%", SGnARatio: "10%" },
  { id: "5", name: "", salesCostRatio: "10%", SGnARatio: "10%" },
];

const selectSalesCostRadio = (salesCostOptionId) => {
  // When the input box is clicked, select the corresponding radio button
  selectedSalesCostOption.value = salesCostOptionId;
};

const selectedSalesCostOption = ref(null);

const selectValue = () => {
  if (selectedSalesCostOption.value == 4) {
    if (salesCostRatio.value == "" || SGnARatio.value == "") {
      alert("매출원가율 및 판관비율을 모두 입력해주세요");
      return;
    }
    updateTask(appStore.task, {
      salesCostRatio: salesCostRatio.value,
      SGnARatio: SGnARatio.value,
      selectSalesCostRadio: selectedSalesCostOption.value,
    });
  } else if (selectedSalesCostOption.value == 5) {
    if (
      Object.keys(salesCost.value).length != appStore.task.cashFlowPeriod ||
      Object.keys(SGnAvalue.value).length != appStore.task.cashFlowPeriod
    ) {
      alert("매출원가 및 판관비를 모두 입력해주세요");
      return;
    }
    updateTask(appStore.task, {
      salesCost: salesCost.value,
      SGnAvalue: SGnAvalue.value,
      selectSalesCostRadio: selectedSalesCostOption.value,
    });
  }
};

// 매출원가율 선택 값
// const selectedSalesCostRatio = ref("15%");
// 판관비율 선택 값
// const selectedSGnARatio = ref("15%");
</script>
@/components/Summary.vue
