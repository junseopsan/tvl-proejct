<template>
  <!-- 4.4.1. 자본적 지출ㆍ감가상각비 - 현금흐름 추정기간 내 자본적 지출, 감가상각비 추정 -->

  <div class="flex flex-col space-y-8 px-7 py-7 bg-blue-50 rounded">
    <div class="text-md font-semibold text-gray-900">
      4.4.1. 자본적 지출ㆍ감가상각비 - 현금흐름 추정기간 내 자본적 지출,
      감가상각비 추정
    </div>
    <div class="text-sm font-semibold text-gray-500">
      평가대상특허의 현금흐름 추정기간 동안의 자본적 지출 적용 방법은 아래와
      같습니다.
    </div>

    <fieldset class="pt-4">
      <legend class="sr-only">Capital Expenditure Selection</legend>
      <div class="space-y-6">
        <div
          v-for="capitalExpenditureOption in capitalExpenditureSelect"
          :key="`${capitalExpenditureOption.id}4_4_1`"
          class="flex"
        >
          <input
            :id="`${capitalExpenditureOption.id}4_4_1`"
            name="capitalExpenditure-selection"
            type="radio"
            :checked="
              selectedCapitalExpenditureOption === capitalExpenditureOption.id
            "
            class="mt-1 h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
            @click="selectCapitalExpenditureRadio(capitalExpenditureOption.id)"
          />
          <div class="flex-col w-full">
            <label
              :for="`${capitalExpenditureOption.id}4_4_1`"
              class="ml-3 block text-sm font-medium leading-6 text-gray-900"
              >{{ capitalExpenditureOption.name }}</label
            >

            <!-- 4.4.1. 자본적 지출ㆍ감가상각비 - 1번 항목 - 동업종 -->

            <div
              class="flex ml-2 pb-1 text-sm font-medium leading-6 text-gray-900 space-x-2"
              v-if="capitalExpenditureOption.id === '1'"
            >
              <div
                @click="
                  selectCapitalExpenditureRadio(capitalExpenditureOption.id)
                "
                class="w-full"
              >
                <dl class="mt-3">
                  <div
                    class="flex items-center justify-between rounded-lg bg-white px-4 py-3 space-x-10 shadow hover:bg-blue-100"
                  >
                    <dt class="truncate text-sm font-medium text-gray-500">
                      유ㆍ무형자산 비율
                    </dt>
                    <dd
                      class="text-xl font-semibold tracking-tight text-blue-500"
                    >
                      {{ capitalExpenditureSelect[0].assetsProportion }}
                    </dd>
                  </div>
                </dl>
              </div>

              <div
                @click="
                  selectCapitalExpenditureRadio(capitalExpenditureOption.id)
                "
                class="w-full"
              >
                <dl class="mt-3">
                  <div
                    class="flex items-center justify-between rounded-lg bg-white px-4 py-3 space-x-10 shadow hover:bg-blue-100"
                  >
                    <dt class="truncate text-sm font-medium text-gray-500">
                      감가상각비율
                    </dt>
                    <dd
                      class="text-xl font-semibold tracking-tight text-blue-500"
                    >
                      {{ capitalExpenditureSelect[0].depreciationRate }}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <!-- 4.4.1. 자본적 지출ㆍ감가상각비 - 2번 항목 - 경쟁기업 -->

            <div
              class="flex ml-3 -mt-1.5 pb-1 text-sm font-medium leading-6 text-gray-900 space-x-2"
              v-if="capitalExpenditureOption.id === '2'"
            >
              <div
                @click="
                  selectCapitalExpenditureRadio(capitalExpenditureOption.id)
                "
                class="w-full"
              >
                <dl class="mt-3">
                  <div
                    class="flex items-center justify-between rounded-lg bg-white px-4 py-3 space-x-10 shadow hover:bg-blue-100"
                  >
                    <dt class="truncate text-sm font-medium text-gray-500">
                      유ㆍ무형자산 비율
                    </dt>
                    <dd
                      class="text-xl font-semibold tracking-tight text-blue-500"
                    >
                      {{ capitalExpenditureSelect[1].assetsProportion }}
                    </dd>
                  </div>
                </dl>
              </div>

              <div
                @click="
                  selectCapitalExpenditureRadio(capitalExpenditureOption.id)
                "
                class="w-full"
              >
                <dl class="mt-3">
                  <div
                    class="flex items-center justify-between rounded-lg bg-white px-4 py-3 space-x-10 shadow hover:bg-blue-100"
                  >
                    <dt class="truncate text-sm font-medium text-gray-500">
                      감가상각비율
                    </dt>
                    <dd
                      class="text-xl font-semibold tracking-tight text-blue-500"
                    >
                      {{ capitalExpenditureSelect[1].depreciationRate }}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <!-- 4.4.1. 자본적 지출ㆍ감가상각비 - 3번 항목 - 사업화주체 -->

            <div
              class="flex ml-3 -mt-1.5 pb-1 text-sm font-medium leading-6 text-gray-900 space-x-2"
              v-if="capitalExpenditureOption.id === '3'"
            >
              <div
                @click="
                  selectCapitalExpenditureRadio(capitalExpenditureOption.id)
                "
                class="w-full"
              >
                <dl class="mt-3">
                  <div
                    class="flex items-center justify-between rounded-lg bg-white px-4 py-3 space-x-10 shadow hover:bg-blue-100"
                  >
                    <dt class="truncate text-sm font-medium text-gray-500">
                      유ㆍ무형자산 비율
                    </dt>
                    <dd
                      class="text-xl font-semibold tracking-tight text-blue-500"
                    >
                      {{ capitalExpenditureSelect[2].assetsProportion }}
                    </dd>
                  </div>
                </dl>
              </div>

              <div
                @click="
                  selectCapitalExpenditureRadio(capitalExpenditureOption.id)
                "
                class="w-full"
              >
                <dl class="mt-3">
                  <div
                    class="flex items-center justify-between rounded-lg bg-white px-4 py-3 space-x-10 shadow hover:bg-blue-100"
                  >
                    <dt class="truncate text-sm font-medium text-gray-500">
                      감가상각비율
                    </dt>
                    <dd
                      class="text-xl font-semibold tracking-tight text-blue-500"
                    >
                      {{ capitalExpenditureSelect[2].depreciationRate }}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <!-- 4.4.1. 자본적 지출ㆍ감가상각비 - 4번 항목 - 자본적 지출 직접입력 -->

            <div
              class="ml-3 pb-1 text-sm font-medium leading-6 text-gray-900 space-y-2"
              v-if="capitalExpenditureOption.id === '4'"
            >
              <div class="">
                <h3 class="text-sm font-medium leading-6 text-gray-900">
                  기존 재투자 금액
                </h3>
                <div class="mt-2 flex justify-between space-x-2">
                  <div
                    class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-blue-100"
                  >
                    <dt class="truncate text-sm font-medium text-gray-500">
                      토지
                    </dt>
                    <dd
                      class="text-xl font-semibold tracking-tight text-blue-500 text-right"
                    >
                      1,000 천원
                    </dd>
                  </div>
                  <div
                    class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-blue-100"
                  >
                    <dt class="truncate text-sm font-medium text-gray-500">
                      건물
                    </dt>
                    <dd
                      class="text-xl font-semibold tracking-tight text-blue-500 text-right"
                    >
                      1,500 천원
                    </dd>
                  </div>
                  <div
                    class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-blue-100"
                  >
                    <dt class="truncate text-sm font-medium text-gray-500">
                      기계장치
                    </dt>
                    <dd
                      class="text-xl font-semibold tracking-tight text-blue-500 text-right"
                    >
                      2,000 천원
                    </dd>
                  </div>
                  <div
                    class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-blue-100"
                  >
                    <dt class="truncate text-sm font-medium text-gray-500">
                      기타자산
                    </dt>
                    <dd
                      class="text-xl font-semibold tracking-tight text-blue-500 text-right"
                    >
                      2,500 천원
                    </dd>
                  </div>
                </div>

                <div class="mt-5">
                  <h3 class="text-sm font-medium leading-6 text-gray-900">
                    신규 투자 금액
                  </h3>
                  <div class="mt-2 flex justify-between space-x-2">
                    <div
                      class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-blue-100"
                    >
                      <dt class="truncate text-sm font-medium text-gray-500">
                        토지
                      </dt>
                      <dd
                        class="text-xl font-semibold tracking-tight text-blue-500 text-right"
                      >
                        {{ 토지투자신규투자total }} 원
                      </dd>
                    </div>
                    <div
                      class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-blue-100"
                    >
                      <dt class="truncate text-sm font-medium text-gray-500">
                        건물
                      </dt>
                      <dd
                        class="text-xl font-semibold tracking-tight text-blue-500 text-right"
                      >
                        {{ 건물투자신규투자total }} 원
                      </dd>
                    </div>
                    <div
                      class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-blue-100"
                    >
                      <dt class="truncate text-sm font-medium text-gray-500">
                        기계장치
                      </dt>
                      <dd
                        class="text-xl font-semibold tracking-tight text-blue-500 text-right"
                      >
                        {{ 기계투자신규투자total }} 원
                      </dd>
                    </div>
                    <div
                      class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-blue-100"
                    >
                      <dt class="truncate text-sm font-medium text-gray-500">
                        기타자산
                      </dt>
                      <dd
                        class="text-xl font-semibold tracking-tight text-blue-500 text-right"
                      >
                        {{ 기타투자신규투자total }} 원
                      </dd>
                    </div>
                  </div>
                </div>

                <div class="mt-0.5 space-y-0.5">
                  <div
                    v-for="i in appStore.task.cashFlowPeriod"
                    :key="i"
                    class="flex space-x-2"
                  >
                    <input
                      @click="
                        selectCapitalExpenditureRadio(
                          capitalExpenditureOption.id
                        )
                      "
                      type="number"
                      v-model="토지투자신규투자[`${i}차년`]"
                      class="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 hover:ring-2 hover:ring-blue-400"
                      :placeholder="`${i}차년도 토지투자`"
                    />
                    <input
                      @click="
                        selectCapitalExpenditureRadio(
                          capitalExpenditureOption.id
                        )
                      "
                      type="number"
                      v-model="건물투자신규투자[`${i}차년`]"
                      class="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 hover:ring-2 hover:ring-blue-400"
                      :placeholder="`${i}차년도 건물투자`"
                    />
                    <input
                      @click="
                        selectCapitalExpenditureRadio(
                          capitalExpenditureOption.id
                        )
                      "
                      type="number"
                      v-model="기계투자신규투자[`${i}차년`]"
                      class="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 hover:ring-2 hover:ring-blue-400"
                      :placeholder="`${i}차년도 기계투자`"
                    />
                    <input
                      @click="
                        selectCapitalExpenditureRadio(
                          capitalExpenditureOption.id
                        )
                      "
                      type="number"
                      v-model="기타투자신규투자[`${i}차년`]"
                      class="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 hover:ring-2 hover:ring-blue-400"
                      :placeholder="`${i}차년도 기타투자`"
                    />
                  </div>
                </div>

                <div class="mt-5">
                  <h3 class="text-sm font-medium leading-6 text-red-700">
                    자본적 지출 총액
                  </h3>
                  <div class="mt-2 flex justify-between space-x-2">
                    <div
                      class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-red-100"
                    >
                      <dt class="truncate text-sm font-medium text-gray-500">
                        토지
                      </dt>
                      <dd
                        class="text-xl font-semibold tracking-tight text-red-600 text-right"
                      >
                        1,000 천원
                      </dd>
                    </div>
                    <div
                      class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-red-100"
                    >
                      <dt class="truncate text-sm font-medium text-gray-500">
                        건물
                      </dt>
                      <dd
                        class="text-xl font-semibold tracking-tight text-red-600 text-right"
                      >
                        1,500 천원
                      </dd>
                    </div>
                    <div
                      class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-red-100"
                    >
                      <dt class="truncate text-sm font-medium text-gray-500">
                        기계장치
                      </dt>
                      <dd
                        class="text-xl font-semibold tracking-tight text-red-600 text-right"
                      >
                        2,000 천원
                      </dd>
                    </div>
                    <div
                      class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-red-100"
                    >
                      <dt class="truncate text-sm font-medium text-gray-500">
                        기타자산
                      </dt>
                      <dd
                        class="text-xl font-semibold tracking-tight text-red-600 text-right"
                      >
                        2,500 천원
                      </dd>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 4.4.1. 자본적 지출ㆍ감가상각비 - 5번 항목 - 자본적 지출 직접입력 -->

            <div
              class="ml-3 -mt-1.5 pb-1 text-sm font-medium leading-6 text-gray-900 space-y-2"
              v-if="capitalExpenditureOption.id === '5'"
            >
              <div class="mt-1.5 space-y-2">
                <!-- <div class="block text-sm font-medium leading-6 text-gray-900">자본적 지출 직접입력 (현금흐름 추정기간 내)</div>   -->

                <div class="">
                  <div class="">
                    <h3 class="text-sm font-medium leading-6 text-gray-900">
                      자본적 지출 직접입력 (현금흐름 추정기간 내)
                    </h3>
                    <div class="mt-2 flex justify-between space-x-2">
                      <div
                        class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-blue-100"
                      >
                        <dt class="truncate text-sm font-medium text-gray-500">
                          토지
                        </dt>
                        <dd
                          class="text-xl font-semibold tracking-tight text-blue-500 text-right"
                        >
                          {{ 토지투자직접입력total }} 원
                        </dd>
                      </div>
                      <div
                        class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-blue-100"
                      >
                        <dt class="truncate text-sm font-medium text-gray-500">
                          건물
                        </dt>
                        <dd
                          class="text-xl font-semibold tracking-tight text-blue-500 text-right"
                        >
                          {{ 건물투자직접입력total }} 원
                        </dd>
                      </div>
                      <div
                        class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-blue-100"
                      >
                        <dt class="truncate text-sm font-medium text-gray-500">
                          기계장치
                        </dt>
                        <dd
                          class="text-xl font-semibold tracking-tight text-blue-500 text-right"
                        >
                          {{ 기계투자직접입력total }} 원
                        </dd>
                      </div>
                      <div
                        class="w-full overflow-hidden rounded-lg bg-white px-4 py-3 shadow hover:bg-blue-100"
                      >
                        <dt class="truncate text-sm font-medium text-gray-500">
                          기타자산
                        </dt>
                        <dd
                          class="text-xl font-semibold tracking-tight text-blue-500 text-right"
                        >
                          {{ 기타투자직접입력total }} 원
                        </dd>
                      </div>
                    </div>
                  </div>

                  <div class="mt-0.5 space-y-0.5">
                    <div
                      v-for="i in appStore.task.cashFlowPeriod"
                      :key="i"
                      class="flex space-x-2"
                    >
                      <input
                        @click="
                          selectCapitalExpenditureRadio(
                            capitalExpenditureOption.id
                          )
                        "
                        type="number"
                        v-model="토지투자직접입력[`${i}차년`]"
                        class="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 hover:ring-2 hover:ring-blue-400"
                        :placeholder="`${i}차년도 토지투자`"
                      />
                      <input
                        @click="
                          selectCapitalExpenditureRadio(
                            capitalExpenditureOption.id
                          )
                        "
                        type="number"
                        v-model="건물투자직접입력[`${i}차년`]"
                        class="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 hover:ring-2 hover:ring-blue-400"
                        :placeholder="`${i}차년도 건물투자`"
                      />
                      <input
                        @click="
                          selectCapitalExpenditureRadio(
                            capitalExpenditureOption.id
                          )
                        "
                        type="number"
                        v-model="기계투자직접입력[`${i}차년`]"
                        class="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 hover:ring-2 hover:ring-blue-400"
                        :placeholder="`${i}차년도 기계투자`"
                      />
                      <input
                        @click="
                          selectCapitalExpenditureRadio(
                            capitalExpenditureOption.id
                          )
                        "
                        type="number"
                        v-model="기타투자직접입력[`${i}차년`]"
                        class="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 hover:ring-2 hover:ring-blue-400"
                        :placeholder="`${i}차년도 기타투자`"
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
        @click="selectValue"
        class="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
      >
        예, 선택합니다
      </button>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const appStore = useAppStore();
const router = useRouter();

const 토지투자신규투자 = ref({});
const 건물투자신규투자 = ref({});
const 기계투자신규투자 = ref({});
const 기타투자신규투자 = ref({});

const 토지투자신규투자total = computed(() => {
  const total = Object.values(토지투자신규투자.value).reduce(
    (a, b) => a + b,
    0
  );
  return total.toLocaleString("ko-KR");
});
const 건물투자신규투자total = computed(() => {
  const total = Object.values(건물투자신규투자.value).reduce(
    (a, b) => a + b,
    0
  );
  return total.toLocaleString("ko-KR");
});
const 기계투자신규투자total = computed(() => {
  const total = Object.values(기계투자신규투자.value).reduce(
    (a, b) => a + b,
    0
  );
  return total.toLocaleString("ko-KR");
});
const 기타투자신규투자total = computed(() => {
  const total = Object.values(기타투자신규투자.value).reduce(
    (a, b) => a + b,
    0
  );
  return total.toLocaleString("ko-KR");
});

const 토지투자직접입력 = ref({});
const 건물투자직접입력 = ref({});
const 기계투자직접입력 = ref({});
const 기타투자직접입력 = ref({});

const 토지투자직접입력total = computed(() => {
  const total = Object.values(토지투자직접입력.value).reduce(
    (a, b) => a + b,
    0
  );
  return total.toLocaleString("ko-KR");
});
const 건물투자직접입력total = computed(() => {
  const total = Object.values(건물투자직접입력.value).reduce(
    (a, b) => a + b,
    0
  );
  return total.toLocaleString("ko-KR");
});
const 기계투자직접입력total = computed(() => {
  const total = Object.values(기계투자직접입력.value).reduce(
    (a, b) => a + b,
    0
  );
  return total.toLocaleString("ko-KR");
});
const 기타투자직접입력total = computed(() => {
  const total = Object.values(기타투자직접입력.value).reduce(
    (a, b) => a + b,
    0
  );
  return total.toLocaleString("ko-KR");
});

// 자본적 지출
const capitalExpenditureSelect = [
  {
    id: "1",
    name: "동업종(C29210)의 최근 5년 유무형자산 비중, 감가상각비율",
    assetsProportion: "10%",
    depreciationRate: "15%",
  },
  {
    id: "2",
    name: "주요 경쟁기업 000사, OOO사의 최근 3년 평균 유무형자산 비중, 감가상각비율",
    assetsProportion: "20%",
    depreciationRate: "25%",
  },
  {
    id: "3",
    name: "사업화 주체인 OOO사의 최근 3년 평균 유무형자산 비중, 감가상각비율",
    assetsProportion: "30%",
    depreciationRate: "35%",
  },
  { id: "4", name: "", assetsProportion: "10%", depreciationRate: "10%" },
  { id: "5", name: "", assetsProportion: "10%", depreciationRate: "10%" },
];

const selectCapitalExpenditureRadio = (capitalExpenditureOptionId) => {
  // When the input box is clicked, select the corresponding radio button
  selectedCapitalExpenditureOption.value = capitalExpenditureOptionId;
};

const selectedCapitalExpenditureOption = ref(null);

const selectValue = () => {
  console.log(토지투자신규투자.value);
  console.log(건물투자신규투자.value);
  console.log(기계투자신규투자.value);
  console.log(기타투자신규투자.value);
  console.log(토지투자직접입력.value);
  console.log(건물투자직접입력.value);
  console.log(기계투자직접입력.value);
  console.log(기타투자직접입력.value);
  console.log(selectedCapitalExpenditureOption.value);
  if (selectedCapitalExpenditureOption.value == 5) {
    if (
      Object.keys(토지투자신규투자.value).length !==
        appStore.task.cashFlowPeriod ||
      Object.keys(건물투자신규투자.value).length !==
        appStore.task.cashFlowPeriod ||
      Object.keys(기계투자신규투자.value).length !==
        appStore.task.cashFlowPeriod ||
      Object.keys(기타투자신규투자.value).length !==
        appStore.task.cashFlowPeriod ||
      Object.keys(토지투자직접입력.value).length !==
        appStore.task.cashFlowPeriod ||
      Object.keys(건물투자직접입력.value).length !==
        appStore.task.cashFlowPeriod ||
      Object.keys(기계투자직접입력.value).length !==
        appStore.task.cashFlowPeriod ||
      Object.keys(기타투자직접입력.value).length !==
        appStore.task.cashFlowPeriod
    ) {
      alert("매출원가 및 판관비를 모두 입력해주세요");
      return;
    }
    // updateTask(appStore.task, {
    //   토지투자신규투자: 토지투자신규투자.value,
    //   건물투자신규투자: 건물투자신규투자.value,
    //   기계투자신규투자: 기계투자신규투자.value,
    //   기타투자신규투자: 기타투자신규투자.value,
    //   토지투자직접입력: 토지투자직접입력.value,
    //   건물투자직접입력: 건물투자직접입력.value,
    //   기계투자직접입력: 기계투자직접입력.value,
    //   기타투자직접입력: 기타투자직접입력.value,
    //   selectedCapitalExpenditureOption: selectedCapitalExpenditureOption.value,
    // }).then((res) => {
    //   console.log(res);
    // });
  }
};
</script>
@/components/Summary.vue
