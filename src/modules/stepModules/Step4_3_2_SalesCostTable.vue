<template>

      <!-- 4.3.2. 매출 원가ㆍ판관비 - 현금흐름 추정기간 내 매출원가, 판관비 설정 -->
      <div class="flex flex-col space-y-8 px-7 py-7 bg-blue-50 rounded">
        <div class="text-md font-semibold text-gray-900">
          4.3.2. 매출 원가ㆍ판관비 - 현금흐름 추정기간 내 매출원가, 판관비 설정
        </div>
        <div class="text-sm font-semibold text-gray-500">
          선택하신 방법을 적용한 현금흐름 추정기간 동안의 매출원가와 판관비는 아래와 같습니다.
        </div>

        <!--  -->
        <div class="pt-5">
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
                      class="w-[120px] py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
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
                    v-for="estimatedSalesCost in estimatedSalesCosts"
                    :key="estimatedSalesCost.id"
                    class="border-b border-gray-200"
                  >
                    <td class="py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div class="w-[120px] font-medium text-gray-900">
                        {{ estimatedSalesCost.name }}
                      </div>
                      <div
                        v-if="estimatedSalesCost.id === '1'"
                        class="w-[120px] mt-1 truncate text-gray-500"
                      >
                        매출원가율 : 66%
                      </div>
                      <div
                        v-if="estimatedSalesCost.id === '2'"
                        class="w-[120px] mt-1 truncate text-gray-500"
                      >
                        판관비율 : 15%
                      </div>
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedSalesCost.firstYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedSalesCost.secondYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedSalesCost.thirdYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedSalesCost.fourthYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedSalesCost.fifthYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedSalesCost.sixthYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedSalesCost.seventhYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedSalesCost.eighthYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedSalesCost.ninthYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedSalesCost.tenthYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedSalesCost.eleventhYear }}
                    </td>
                  </tr>
                </tbody>
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
      </div>

</template>

<script setup>
import { useAppStore } from "@/store/app";
import { computed } from "vue";
import { useRouter } from "vue-router";

const appStore = useAppStore();
const router = useRouter();

//매출원가 추정 표
const estimatedSalesCosts = [
  {
    id: "1",
    name: "매출원가",
    initialYear: "2023",
    lastYear: "2033",
    firstYear: "5,000,000",
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
    name: "판관비",
    initialYear: "2023",
    lastYear: "2033",
    firstYear: "1,000,000",
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

//매출표 날짜 구하는 함수
const initialYear = parseInt(estimatedSalesCosts[0].initialYear);
const years = computed(() =>
  Array.from({ length: 11 }, (_, index) => initialYear + index)
);

</script>
@/components/Summary.vue
