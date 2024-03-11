<template>
  <div
    class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4"
  >
    <CompanyLogo />
    <nav class="flex flex-1 flex-col">
      <ul role="list" class="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" class="-mx-2 space-y-1">
            <li v-for="(item, key) in menuItems" :key="key">
              <div
                class="w-[255px] px-4 py-3 rounded-md justify-center items-center gap-3 inline-flex text-sm text-gray-500 cursor-pointer hover:text-blue-600 hover:bg-gray-100"
                @click="moveToView(item)"
              >
                <div
                  class="relative w-5 pt-[2px] left-0 top-0 text-center font-semibold leading-tight bg-zinc-100 rounded-[5px]"
                >
                  {{ key + 1 }}
                </div>
                <div
                  class="grow shrink basis-0 font-normal leading-tight"
                  :class="[
                    appStore.currentPageName === item.name
                      ? 'text-blue-600'
                      : '',
                  ]"
                >
                  {{ item.title }}
                </div>
              </div>
            </li>
          </ul>
        </li>

        <li class="mt-auto">
          <a
            href="#"
            class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
          >
            <Cog6ToothIcon
              class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-blue-600"
              aria-hidden="true"
            />
            Settings
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Cog6ToothIcon } from "@heroicons/vue/24/outline";
import CompanyLogo from "@/modules/CompanyLogo.vue";
import { useRouter } from "vue-router";
import { useAppStore } from "@/store/app";

const router = useRouter();
const appStore = useAppStore();
const stepValue = ref();
const menuItems = ref([
  { title: "특허정보ㆍ대표IPC", step: 1, name: "step1" },
  { title: "적용제품ㆍ업종분류", step: 2, name: "step2" },
  { title: "기술수명", step: 3, name: "step3" },
  //기술수명 영향요인 평가 + 기술수명 + 현금흐름 추정
  { title: "기술가치 산정", step: 4, name: "step4" },
  // { title: "목표시장", step: 9, name: "9th" },
  // { title: "매출계획", step: 10, name: "10th" },
  // { title: "매출원가ㆍ판관비", step: 11, name: "11th" },
  // { title: "자본적 지출ㆍ감가상각비", step: 12, name: "12th" },
  // { title: "운전자본소요율", step: 13, name: "13th" },
  { title: "할인율", step: 5, name: "step5" },
  //기술위험프리미엄 평가 + 할인율
  { title: "기술기여도", step: 6, name: "step6" },
  { title: "기술가치평가 결과", step: 7, name: "step7" },
  // { title: "테스트 3장", step: 7, name: "test3" },
  // { title: "테스트 4장", step: 8, name: "test4" },
  // { title: "테스트 5장", step: 9, name: "test5" },
  // { title: "테스트 6장", step: 10, name: "test6" },
  //

  // { title: "기술성 - 기술경쟁강도", step: 4, name: "eval4" },
  // { title: "기술성 - 대체가능성", step: 5, name: "eval5" },
  // { title: "기술성 - 모방난이도", step: 6, name: "eval6" },
  // { title: "권리성 - 권리보호강도", step: 7, name: "eval7" },
  // { title: "시장성 - 시장진입가능성", step: 8, name: "eval8" },
  // { title: "시장성 - 시장경쟁강도", step: 9, name: "eval9" },
  // { title: "시장성 - 시장경쟁의 변화", step: 10, name: "eval10" },
  // { title: "시장성 - 신제품 출현 가능성", step: 11, name: "eval11" },
  // { title: "시장성 - 예상 시장점유율", step: 12, name: "eval12" },
  // { title: "기술수명 / 현금흐름 추정", step: 13, name: "eval13" },
  // { title: "목표시장", step: 14, name: "eval14" },
  // { title: "매출계획", step: 15, name: "eval15" },
  // { title: "매출원가, 판관비", step: 16, name: "eval16" },
  // { title: "자본적 지출, 감가상각비", step: 17, name: "eval17" },
  // { title: "운전자본소요율", step: 18, name: "eval18" },
  // { title: "기술성 - 혁신성", step: 19, name: "eval19" },
  // { title: "기술성 - 차별성", step: 20, name: "eval20" },
  // { title: "기술성 - 활용성", step: 19, name: "eval19" },
  // { title: "기술성 - 파급성", step: 20, name: "eval20" },
  // { title: "기술성 - 진부화 가능성", step: 19, name: "eval21" },
  // { title: "기술성 - 기술사업화환경", step: 20, name: "eval22" },
  // { title: "권리성 - 권리안정성", step: 19, name: "eval23" },
  // { title: "권리성 - 침해발견 및 입증 용이성", step: 20, name: "eval24" },
  // { title: "시장성 - 시장의 성장전망", step: 19, name: "eval25" },
  // { title: "시장성 - 수요민감도", step: 20, name: "eval26" },
  // { title: "기술성 - 혁신성", step: 19, name: "eval27" },
  // { title: "사업성 - 사업화 준비기간", step: 20, name: "eval28" },
  // { title: "사업성 - 사업화 소요자본", step: 19, name: "eval29" },
  // { title: "사업성 - 생산용이성", step: 20, name: "eval30" },
  // { title: "사업성 - 경제적수명", step: 19, name: "eval31" },
  // { title: "사업성 - 매출 성장추세", step: 20, name: "eval32" },
  // { title: "사업성 - 수익성", step: 19, name: "eval33" },
  // { title: "사업성 - 파생적 매출", step: 20, name: "eval34" },
  // { title: "할인율", step: 19, name: "eval35" },
  // { title: "기술의 비중", step: 20, name: "eval36" },
  // { title: "기술기여도", step: 19, name: "eval37" },
]);

const moveToView = (item) => {
  stepValue.value = item.name;
  router.push({ name: item.name });
};
</script>
