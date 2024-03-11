<template>
  <!-- 현금흐름 추정기간 -->
  <div class="flex flex-col space-y-8 rounded px-7 py-7 bg-blue-50">
    <div class="space-y-3">
      <div class="font-semibold text-gray-900 text-md">
        3.3. 현금흐름 기간 추정
      </div>
      <div class="text-sm font-semibold text-gray-500">
        평가 기준일 및 사업화 준비기간을 입력하여 현금흐름 추정기간을
        확인하세요.
      </div>
    </div>


    <div class="flex-col pb-4 space-y-8">
      <v-text-field
          prepend-inner-icon="mdi-calendar"
          variant="outlined"
          readonly
          label="2222"
          class="border-2 border-red-300 rounded-md"
          bg-color="white"
          color="black"
        ></v-text-field>
      <div>
    <div class="mb-6">Active picker: <code>{{ dateInfo || 'null' }}</code></div>
      <!-- <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="dateInfo"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="dateInfo"
                label="Picker in menu"
                prepend-icon="event"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="dateInfo" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn flat color="primary" @click="$refs.menu.save(dateInfo)">OK</v-btn>
            </v-date-picker>
      </v-menu> -->
    </div>


      <!-- 평가대상 기준일 입력 -->
      <div>
        <label
          for="evalDate"
          name="evalDate"
          class="block text-sm font-medium leading-6 text-gray-900"
          >평가 기준일</label
        >
        <div class="relative max-w-sm mt-2">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
              />
            </svg>
          </div>
          <div>
            <!-- <datepicker
              v-model="evalDate"
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"
              placeholder="평가 기준일을 선택하세요."
            /> -->
          </div>
        </div>
      </div>

      <div>
        <label
          for="commerPrepPeriod"
          name="commerPrepPeriod"
          class="block text-sm font-medium leading-6 text-gray-900"
          >사업화 준비기간</label
        >
        <div class="flex items-center mt-2">
          <input
            type="month"
            name="commerPrepPeriod"
            v-model="commercialPrepPeriodStart"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="사업화 준비기간을 입력하세요."
          />
          <span class="mx-4 text-gray-500">to</span>
          <input
            type="month"
            name="commerPrepPeriod"
            v-model="commercialPrepPeriodEnd"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="사업화 준비기간을 입력하세요."
          />
        </div>
      </div>


      <!-- 현금흐름 추정기간 산출 -->
      <div>
        <div class="text-sm font-medium leading-6 text-gray-900">
          현금흐름 추정기간 (사업화 준비기간 + 기술의 경제적 수명)
        </div>
        <div class="mt-4 ml-1 space-y-2">
          <div
            class="flex space-x-2 text-sm text-gray-500"
            v-for="(estimatedCashFlow, i) in estimatedCashFlowDate"
            :key="i"
          >
            <li>{{ 1 + i }}차년 :</li>
            <p>{{ estimatedCashFlow.startDate }}</p>
            <p>~</p>
            <p>{{ estimatedCashFlow.endDate }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="inline-flex items-end self-stretch justify-end gap-2 pt-4">
      <button
        type="button"
        class="px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        아니요
      </button>

      <button
        type="button"
        class="px-3 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
      >
        예, 선택합니다
      </button>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";

// import Datepicker from "vue3-datepicker";

const appStore = useAppStore();
const router = useRouter();

// 평가 기준일
const evalDate = ref(new Date());

// 사업화 준비기간
const commercialPrepPeriodStart = ref();
const commercialPrepPeriodEnd = ref();
const commercialPrepPeriod = ref();
const menu = ref(false);
const dateInfo = ref(new Date().toISOString().substr(0, 10),);

const calculateCommercialPrepPeriod = computed(() => {
  console.log(commercialPrepPeriodStart.value, commercialPrepPeriodEnd.value);
  const start = new Date(commercialPrepPeriodStart.value);
  const end = new Date(commercialPrepPeriodEnd.value);
  if (!isNaN(start) && !isNaN(end)) {
    const yearDifference = end.getFullYear() - start.getFullYear();
    const monthDifference = end.getMonth() - start.getMonth();
    const dayDifference = end.getDate() - start.getDate();

    const totalMonths =
      yearDifference * 12 + monthDifference + dayDifference / 30;

    commercialPrepPeriod.value = totalMonths / 12;
  } else {
    alert("올바른 날짜 형식을 입력하세요. (예: 2012-12-12)");
  }
});

watch(
  () => evalDate.value,
  (newVal, oldVal) => {
    console.log("1111", evalDate.value);
    // updateTask(appStore.task, {
    //   evalDate: evalDate.value,
    //   commercialPrepPeriodStart: commercialPrepPeriodStart.value,
    //   commercialPrepPeriodEnd: commercialPrepPeriodEnd.value,
    // });
  }
);
// const input = () => {
//   console.log("1111", evalDate.value);
//   updateTask(appStore.task, {
//     evalDate: evalDate.value,
//     commercialPrepPeriodStart: commercialPrepPeriodStart.value,
//     commercialPrepPeriodEnd: commercialPrepPeriodEnd.value,
//   });
// };

// 현금흐름 추정기간 계산 함수
// function calculateCashFlowPeriod(economicLife, commercialPrepPeriod) {
//         const result = economicLife + commercialPrepPeriod.value;
//           updateTask(appStore.task, {
//             cashFlowPeriod: result.toFixed(0),
//         });
//           return result.toFixed(0);
// }

// const cashFlowPeriod = calculateCashFlowPeriod(economicLife, commercialPrepPeriod);

// console.log(`경제적수명: ${economicLife}`);
// console.log(`현금흐름 추정기간: ${cashFlowPeriod}`);


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


const activePicker = ref(null)
const menuActive = ref(false)

watch(menuActive, val => {
  val && setTimeout(() => (activePicker.value = 'YEAR'))
})

function save (date) {
  menu.value.save(date)
}

</script>
@/components/Summary.vue
