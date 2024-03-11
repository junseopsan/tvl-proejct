<template>


      <!-- 4.5.2. 운전자본소요율 - 현금흐름 추정기간 내 운전자본소요율 설정 -->
      <div class="flex flex-col space-y-8 px-7 py-7 bg-blue-50 rounded">
        <div class="text-md font-semibold text-gray-900">
          4.5.2. 운전자본소요율 - 현금흐름 추정기간 내 운전자본소요율 설정
        </div>
        <div class="text-sm font-semibold text-gray-500">
          선택하신 방법을 적용한 현금흐름 추정기간 동안의 운전자본소요율은 아래와 같습니다.
        </div>

        <!--  -->
        <div class="pt-5">
          <div class="text-right text-sm text-gray-900">(단위 : 천원)</div>

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
                      class="w-[150px] py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
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
                    v-for="estimatedWorkingCapitalRequiredRate in estimatedWorkingCapitalRequiredRates"
                    :key="estimatedWorkingCapitalRequiredRate.id"
                    class="border-b border-gray-200"
                  >
                    <td class="py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div class="w-[150px] font-medium text-gray-900">
                        {{ estimatedWorkingCapitalRequiredRate.name }}
                      </div>
                      <div class="w-[150px] mt-1 truncate text-gray-500">
                        운전자본 소요율 : 66%
                      </div>
                  </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedWorkingCapitalRequiredRate.firstYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedWorkingCapitalRequiredRate.secondYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedWorkingCapitalRequiredRate.thirdYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedWorkingCapitalRequiredRate.fourthYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedWorkingCapitalRequiredRate.fifthYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedWorkingCapitalRequiredRate.sixthYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedWorkingCapitalRequiredRate.seventhYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedWorkingCapitalRequiredRate.eighthYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedWorkingCapitalRequiredRate.ninthYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedWorkingCapitalRequiredRate.tenthYear }}
                    </td>
                    <td
                      class="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell"
                    >
                      {{ estimatedWorkingCapitalRequiredRate.eleventhYear }}
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

// 운전자본소요율 산출 표
const estimatedWorkingCapitalRequiredRates = [
  {
    id: "1",
    name: "운전자본증감액",
    initialYear: "2023",
    lastYear: "2033",
    firstYear: "2,000,000",
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


//자본적지출 매출표 날짜 구하는 함수
const initialYear = parseInt(estimatedWorkingCapitalRequiredRates[0].initialYear);
const years = computed(() =>
  Array.from({ length: 11 }, (_, index) => initialYear + index)
);

</script>
@/components/Summary.vue
