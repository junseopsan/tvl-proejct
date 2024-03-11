<template>
  <div class="flex w-full h-full fixed-container">
    <div
      class="flex flex-col w-1/2 pb-20 space-y-8 p-8 overflow-y-auto max-h-screen view-h-calc"
    >
      <div class="flex items-center font-semibold leading-normal">
        <img src="@/assets/images/sharp.svg" alt="#" class="" />
        <div class="text-[#1d4ed8] text-lg">5</div>
        <div class="ml-3 text-gray-900 text-base">할인율</div>
      </div>

      <div
        class="flex text-gray-600 text-sm font-normal font-sans leading-normal"
      >
        기술사업화 위험프리미엄 평가 후, 기술의 할인율을 산출하세요.
      </div>

      <!-- 5.1. 기술사업화 위험프리미엄 평가 -->
      <Step5_1_RiskPremiumEvalTable id="stepTable" />

      <!-- 5.2. 할인율 -->
      <Step5_2_DiscountRate />

      <!-- 5.1.1. 기술사업화 위험프리미엄 평가 항목 - 차별성 -->

      <!-- <div v-for="(stepObj, index) in step5_Details" :key="index">
        <StepDetailView :Step5_detailObj="stepObj" />
      </div> -->

      <div v-for="(stepObj, index) in step5_Details" :key="index">
        <StepDetailView :id="stepObj.stepname" :detailObj="stepObj" />
      </div>
    </div>

    <Summary />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAppStore } from "@/store/app";
import { useRouter } from "vue-router";

//좌측페이지

import StepDetailView from "@/modules/techEvalSheetModules/StepDetailView.vue";

import { step5_Details } from "@/modules/techEvalSheetModules/Step5_DetailInfo";

import Step5_1_RiskPremiumEvalTable from "@/modules/stepModules/Step5_1_RiskPremiumEvalTable.vue";
import Step5_2_DiscountRate from "@/modules/stepModules/Step5_2_DiscountRate.vue";

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
