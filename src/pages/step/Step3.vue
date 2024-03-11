<template>
  <div class="flex w-full h-full fixed-container">
    <div
      class="flex flex-col w-1/2 pb-20 space-y-8 p-8 overflow-y-auto max-h-screen view-h-calc"
    >
      <div class="flex items-center font-semibold leading-normal">
        <img src="@/assets/images/sharp.svg" alt="#" class="" />
        <div class="text-[#1d4ed8] text-lg">3</div>
        <div class="ml-3 text-gray-900 text-base">기술수명</div>
      </div>

      <div
        class="flex text-gray-600 text-sm font-normal font-sans leading-normal"
      >
        기술수명 영향요인 평가표에 따른 평가항목 점수를 선택해주세요.
      </div>

      <!-- 3.1. 기술수명 영향요인 평가 -->
      <Step3_1_TechLifeTable id="stepTable" />

      <!-- 3.2. 기술의 경제적 수명 -->
      <Step3_2_TechLifeCalc />

      <!-- 3.3. 현금흐름 추정기간 -->
      <Step3_3_EstimatedCashFlow />

      <!-- 3.3. 현금흐름 추정기간 -->
      <Step3_3_EstimatedCashFlow_copy />

      <!-- 3.1.1~10 기술수명 영향요인 평가 항목-->
      <div v-for="(stepObj, index) in step3_Details" :key="index">
        <StepDetailView :id="stepObj.stepname" :detailObj="stepObj" />
      </div>


    </div>

    <Summary />

  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useAppStore } from "@/store/app";
import { useRouter } from "vue-router";

//좌측페이지
import Step3_1_TechLifeTable from "@/modules/stepModules/Step3_1_TechLifeTable.vue";
import Step3_2_TechLifeCalc from "@/modules/stepModules/Step3_2_TechLifeCalc.vue";
import Step3_3_EstimatedCashFlow from "@/modules/stepModules/Step3_3_EstimatedCashFlow.vue";
import Step3_3_EstimatedCashFlow_copy from "@/modules/stepModules/Step3_3_EstimatedCashFlow_copy.vue";

import StepDetailView from "@/modules/techEvalSheetModules/StepDetailView.vue";

import { step3_Details } from "@/modules/techEvalSheetModules/Step3_DetailInfo";

//우측페이지
import Summary from "@/components/summary.vue";

const appStore = useAppStore();
const router = useRouter();

onMounted(() => {
  appStore.currentPageName = router.currentRoute.value.name;
});
</script>

<style scoped>
.view-h-calc {
  height: calc(100vh - 72px);
}

.fixed-container {
  position: fixed;
  top: 1;
  left: 1;
  width: calc(100% - 288px);
  height: 100%;
  overflow: hidden;
}
</style>
