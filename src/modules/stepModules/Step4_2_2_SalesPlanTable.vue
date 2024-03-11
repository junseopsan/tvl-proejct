<template>

      <!-- 4.2.2. 매출계획 - 현금흐름 추정기간 내 기술매출액 설정 -->

      <div class="flex flex-col space-y-8 px-7 py-7 bg-blue-50 rounded">
        <div class="text-md font-semibold text-gray-900">
          4.2.2. 매출계획 - 현금흐름 추정기간 내 기술매출액 설정
        </div>
        <div class="text-sm font-semibold text-gray-500">
          선택하신 매출 추정 방법을 적용한 현금흐름 추정기간 동안의 매출계획은 아래와 같습니다.
        </div>

        <!-- 수정 영역 -->
        <div class="pt-4">
          <div class="text-right text-sm text-gray-900">(단위 : 원)</div>

          <div class="">
            <div class="-mx-4 flow-root sm:mx-0 overflow-x-auto">
              <table class="min-w-full">
                <colgroup>
                  <col class="w-full sm:w-1/2" />
                  <col class="sm:w-1/6" />
                  <col class="sm:w-1/6" />
                  <col class="sm:w-1/6" />
                </colgroup>
                <thead class="border-b border-gray-300 text-gray-900">
                  <tr>
                    <th
                      scope="col"
                      class="w-[100px] py-3 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      연도
                    </th>
                    <th
                      scope="col"
                      class="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                    >
                      {{ years[0] }}
                    </th>
                    <th
                      scope="col"
                      class="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                    >
                      {{ years[1] }}
                    </th>
                    <th
                      scope="col"
                      class="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                    >
                      {{ years[2] }}
                    </th>
                    <th
                      scope="col"
                      class="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                    >
                      {{ years[3] }}
                    </th>
                    <th
                      scope="col"
                      class="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                    >
                      {{ years[4] }}
                    </th>
                    <th
                      scope="col"
                      class="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                    >
                      {{ years[5] }}
                    </th>
                    <th
                      scope="col"
                      class="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                    >
                      {{ years[6] }}
                    </th>
                    <th
                      scope="col"
                      class="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                    >
                      {{ years[7] }}
                    </th>
                    <th
                      scope="col"
                      class="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                    >
                      {{ years[8] }}
                    </th>
                    <th
                      scope="col"
                      class="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                    >
                      {{ years[9] }}
                    </th>
                    <th
                      scope="col"
                      class="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                    >
                      {{ years[10] }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="estimatedSalesPlan in estimatedSalesPlans"
                    :key="estimatedSalesPlan.id"
                    class="border-b border-gray-200"
                  >
                    <td class="py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div class="w-[100px] font-medium text-gray-900">
                        {{ estimatedSalesPlan.name }}
                      </div>
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedSalesPlan.firstYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedSalesPlan.secondYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedSalesPlan.thirdYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedSalesPlan.fourthYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedSalesPlan.fifthYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedSalesPlan.sixthYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedSalesPlan.seventhYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedSalesPlan.eighthYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedSalesPlan.ninthYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedSalesPlan.tenthYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedSalesPlan.eleventhYear }}
                    </td>
                  </tr>
                </tbody>
                <thead class="text-blue-900">
                  <tr>
                    <th
                      scope="col"
                      class="w-[100px] py-5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-0"
                    >
                      적용 기술매출액
                    </th>
                    <th
                      scope="col"
                      class="hidden px-3 py-3.5 text-right text-sm font-semibold sm:table-cell"
                    >
                      {{ calculateWeightedSum("firstYear") }}
                    </th>
                    <th
                      scope="col"
                      class="hidden px-3 py-3.5 text-right text-sm font-semibold sm:table-cell"
                    >
                      {{ calculateWeightedSum("secondYear") }}
                    </th>
                    <th
                      scope="col"
                      class="hidden px-3 py-3.5 text-right text-sm font-semibold sm:table-cell"
                    >
                      {{ calculateWeightedSum("thirdYear") }}
                    </th>
                    <th
                      scope="col"
                      class="hidden px-3 py-3.5 text-right text-sm font-semibold sm:table-cell"
                    >
                      {{ calculateWeightedSum("fourthYear") }}
                    </th>
                    <th
                      scope="col"
                      class="hidden px-3 py-3.5 text-right text-sm font-semibold sm:table-cell"
                    >
                      {{ calculateWeightedSum("fifthYear") }}
                    </th>
                    <th
                      scope="col"
                      class="hidden px-3 py-3.5 text-right text-sm font-semibold sm:table-cell"
                    >
                      {{ calculateWeightedSum("sixthYear") }}
                    </th>
                    <th
                      scope="col"
                      class="hidden px-3 py-3.5 text-right text-sm font-semibold sm:table-cell"
                    >
                      {{ calculateWeightedSum("seventhYear") }}
                    </th>
                    <th
                      scope="col"
                      class="hidden px-3 py-3.5 text-right text-sm font-semibold sm:table-cell"
                    >
                      {{ calculateWeightedSum("eighthYear") }}
                    </th>
                    <th
                      scope="col"
                      class="hidden px-3 py-3.5 text-right text-sm font-semibold sm:table-cell"
                    >
                      {{ calculateWeightedSum("ninthYear") }}
                    </th>
                    <th
                      scope="col"
                      class="hidden px-3 py-3.5 text-right text-sm font-semibold sm:table-cell"
                    >
                      {{ calculateWeightedSum("tenthYear") }}
                    </th>
                    <th
                      scope="col"
                      class="hidden px-3 py-3.5 text-right text-sm font-semibold sm:table-cell"
                    >
                      {{ calculateWeightedSum("eleventhYear") }}
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>

        <div class="self-stretch justify-end items-end gap-2 inline-flex pt-4">
          <button
            type="button"
            class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            재설정
          </button>

          <button
            type="button"
            class="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            예, 선택합니다
          </button>
        </div>

        <!-- 수정 영역 -->
      </div>
      
</template>

<script setup>
import { useAppStore } from "@/store/app";
import { computed } from "vue";
import { useRouter } from "vue-router";

const appStore = useAppStore();
const router = useRouter();


//매출계획 추정 표
const estimatedSalesPlans = [
  {
    id: "1",
    name: "낙관적 매출추정",
    initialYear: "2023",
    lastYear: "2033",
    firstYear: "3,000,000",
    secondYear: "7,935,842",
    thirdYear: "7,935,843",
    fourthYear: "7,935,844",
    fifthYear: "7,935,845",
    sixthYear: "7,935,846",
    seventhYear: "7,935,847",
    eighthYear: "7,935,848",
    ninthYear: "7,935,849",
    tenthYear: "7,935,810",
    eleventhYear: "7,935,811",
  },
  {
    id: "2",
    name: "중간적 매출추정",
    initialYear: "2023",
    lastYear: "2033",
    firstYear: "4,000,000",
    secondYear: "7,935,842",
    thirdYear: "7,935,843",
    fourthYear: "7,935,844",
    fifthYear: "7,935,845",
    sixthYear: "7,935,846",
    seventhYear: "7,935,847",
    eighthYear: "7,935,848",
    ninthYear: "7,935,849",
    tenthYear: "7,935,810",
    eleventhYear: "7,935,811",
  },
  {
    id: "3",
    name: "보수적 매출추정",
    initialYear: "2023",
    lastYear: "2033",
    firstYear: "3,000,000",
    secondYear: "7,935,842",
    thirdYear: "7,935,843",
    fourthYear: "7,935,844",
    fifthYear: "7,935,845",
    sixthYear: "7,935,846",
    seventhYear: "7,935,847",
    eighthYear: "7,935,848",
    ninthYear: "7,935,849",
    tenthYear: "7,935,810",
    eleventhYear: "7,935,811",
  },
];


// 가중치 합을 계산하는 함수
function calculateWeightedSum(year) {
  const weights = [0.3, 0.4, 0.3];
  let sum = 0;

  // Loop through each estimated sales plan and calculate the weighted sum
  for (const plan of estimatedSalesPlans) {
    sum +=
      parseFloat(plan[year].replace(/,/g, "")) *
      weights[estimatedSalesPlans.indexOf(plan)];
  }

  return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // You can adjust the number of decimal places as needed
}

//매출표 날짜 구하는 함수
const initialYear = parseInt(estimatedSalesPlans[0].initialYear);
const years = computed(() =>
  Array.from({ length: 11 }, (_, index) => initialYear + index)
);


</script>
@/components/Summary.vue
