<template>
  <!-- 현금흐름 추정기간 -->
  <div class="flex flex-col space-y-8 px-7 py-7 bg-blue-50 rounded">
    <div class="space-y-3">
      <div class="text-md font-semibold text-gray-900">
        3.3. 현금흐름 기간 추정
      </div>
      <div class="text-sm font-semibold text-gray-500">
        평가 기준일 및 사업화 준비기간을 입력하여 현금흐름 추정기간을
        확인하세요.
      </div>
    </div>

    <div class="flex-col space-y-8 pb-4">
      <!-- 평가대상 기준일 입력 -->
      <div>
        <label
          for="evalDate"
          name="evalDate"
          class="block text-sm font-medium leading-6 text-gray-900"
          >평가 기준일</label
        >
        <div class="mt-2 relative max-w-sm">
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
        <div class="flex items-center justify-between">
          <label
            for="commerPrepPeriod"
            name="commerPrepPeriod"
            class="block text-sm font-medium leading-6 text-gray-900"
            >사업화 준비기간</label
          >
          <div class="flex items-center space-x-2">
            <input
              type="number"
              v-model="commercialPrePeriod.year"
              @change="changePeriod('Year')"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-12 ps-4 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"
            />
            <span>년</span>
            <input
              type="number"
              v-model="commercialPrePeriod.month"
              @change="changePeriod('Month')"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-12 ps-4 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"
            />
            <span>월</span>
          </div>
        </div>

        <div class="mt-2 flex items-center">
          <input
            type="month"
            name="commerPrepPeriod"
            v-model="commercialPrePeriodStart"
            @change="changePeriodDatepick"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"
            placeholder="사업화 준비기간을 입력하세요."
          />
          <span class="mx-4 text-gray-500">to</span>
          <input
            type="month"
            name="commerPrepPeriod"
            @change="changePeriodDatepick"
            v-model="commercialPrePeriodEnd"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"
            placeholder="사업화 준비기간을 입력하세요."
          />
        </div>
      </div>

      <!-- 현금흐름 추정기간 산출 -->
      <div>
        <div class="text-sm font-medium leading-6 text-gray-900">
          현금흐름 추정기간 (사업화 준비기간 + 기술의 경제적 수명)
        </div>
        <ul>
          <li v-for="(period, index) in estimatedCashFlowDate" :key="index">
            {{ period.yearIndex }}차년: {{ period.start }} ~ {{ period.end }}
          </li>
        </ul>
      </div>
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
        @click="btnAction(true)"
        class="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
      >
        예, 선택합니다
      </button>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import { step6_1_14 } from "@/utils/calculator";
import { updateTask } from "@/utils/fsdb";
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";
// import Datepicker from "vue3-datepicker";

const appStore = useAppStore();
const router = useRouter();

function getCurrentMonth(date) {
  const today = new Date(date);
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  return `${year}-${month}`;
}
const getCurrentDate = (date) => {
  const today = new Date(date);
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};
// 평가 기준일
const evalDate = ref(
  appStore.task.evalDate ? new Date(appStore.task.evalDate) : new Date()
);
// 사업화 준비기간
const commercialPrePeriod = ref(
  {
    year: appStore.task.commercialPrePeriod.year,
    month: appStore.task.commercialPrePeriod.month,
  } || { year: 0, month: 0 }
);
// 사업화 준비기간 개월수
const commercialPrePeriodMonth = ref(
  appStore.task.commercialPrePeriodMonths || 36
);

const directInputMonth = ref(false);

const commercialPrePeriodStart = ref(getCurrentMonth(evalDate.value));
const commercialPrePeriodEnd = ref(
  getCurrentMonth(
    new Date(
      evalDate.value.getFullYear() + commercialPrePeriod.value.year,
      evalDate.value.getMonth() + commercialPrePeriod.value.month
    )
  )
);
// 현금흐름 추정기간
const estimatedPeriods = ref(
  Number(commercialPrePeriod.value.year) +
    Number((commercialPrePeriod.value.month / 12).toFixed(1)) +
    Number(appStore.task.economicLife)
);

const changePeriod = (yearOrMonth) => {
  if (yearOrMonth === "Year") {
    commercialPrePeriodEnd.value = getCurrentMonth(
      new Date(
        evalDate.value.getFullYear() + commercialPrePeriod.value.year,
        evalDate.value.getMonth() + commercialPrePeriod.value.month
      )
    );
  } else {
    commercialPrePeriodEnd.value = getCurrentMonth(
      new Date(
        evalDate.value.getFullYear() +
          commercialPrePeriod.value.year +
          Math.floor(commercialPrePeriodMonth.value / 12),
        evalDate.value.getMonth() + (commercialPrePeriodMonth.value % 12)
      )
    );
  }
  estimatedPeriods.value =
    Number(commercialPrePeriod.value.year) +
    Number((commercialPrePeriod.value.month / 12).toFixed(1)) +
    Number(appStore.task.economicLife);
};

const changePeriodDatepick = () => {
  const startDate = new Date(commercialPrePeriodStart.value);
  const endDate = new Date(commercialPrePeriodEnd.value);
  const months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());
  directInputMonth.value = true;
  //현금흐름추정기간
  commercialPrePeriodMonth.value = months;
  commercialPrePeriod.value = {
    year: Math.floor(months / 12),
    month: months % 12,
  };
  estimatedPeriods.value =
    Number(commercialPrePeriod.value.year) +
    Number((commercialPrePeriod.value.month / 12).toFixed(1)) +
    Number(appStore.task.economicLife);
};

const btnAction = async (isTrue) => {
  if (isTrue) {
    const res = step6_1_14(commercialPrePeriodMonth.value);

    const data = {
      evalDate: getCurrentDate(evalDate.value),
      commercialPrePeriod: {
        start: commercialPrePeriodStart.value,
        end: commercialPrePeriodEnd.value,
        year: commercialPrePeriod.value.year,
        month: commercialPrePeriod.value.month,
        months: commercialPrePeriodMonth.value,
      },
      cashFlowPeriods: {
        years: estimatedPeriods.value,
        periods: estimatedCashFlowDate.value,
        startYear: estimatedCashFlowDate.value[0].year,
        endYear:
          estimatedCashFlowDate.value[estimatedCashFlowDate.value.length - 1]
            .year,
      },
      step6_1_14: res,
    };

    console.log(data);
    await updateTask(appStore.task, data);
  }
};

watch(
  () => evalDate.value,
  (newVal, oldVal) => {
    commercialPrePeriodStart.value = getCurrentMonth(evalDate.value);
  }
);

const estimatedCashFlowDate = computed(() => {
  const periods = [];
  const startBase = new Date(evalDate.value);
  const periodYear = Math.ceil(estimatedPeriods.value);

  for (let year = 0; year < periodYear; year++) {
    const start = new Date(startBase);
    start.setFullYear(startBase.getFullYear() + year);
    const end = new Date(start);
    end.setFullYear(start.getFullYear() + 1);
    end.setDate(end.getDate() - 1);

    const startStr = `${start.getFullYear()}-${String(
      start.getMonth() + 1
    ).padStart(2, "0")}-${String(start.getDate()).padStart(2, "0")}`;
    const endStr = `${end.getFullYear()}-${String(end.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(end.getDate()).padStart(2, "0")}`;

    periods.push({
      yearIndex: year + 1,
      year: start.getFullYear(),
      start: startStr,
      end: endStr,
    });
  }

  return periods;
});
</script>
@/components/Summary.vue
