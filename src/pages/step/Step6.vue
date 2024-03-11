<template>
  <div class="flex w-full h-full fixed-container">
    <div
      class="flex flex-col w-1/2 pb-20 space-y-8 p-8 overflow-y-auto max-h-screen view-h-calc"
    >
      <div class="flex items-center font-semibold leading-normal">
        <img src="@/assets/images/sharp.svg" alt="#" class="" />
        <div class="text-[#1d4ed8] text-lg">6</div>
        <div class="ml-3 text-gray-900 text-base">개별기술강도 평가</div>
      </div>

      <div
        class="flex text-gray-600 text-sm font-normal font-sans leading-normal"
      >
        개별기술강도 평가 후 기술의 비중 및 기여도를 산출해주세요.
      </div>

      <!-- 6.1. 개별기술강도 평가 -->
      <Step6_1_IndividualTechStrengthTable id="stepTable" />

      <!-- 6.2. 기술기여도 -->
      <Step6_2_TechnologyContribution />

      <!-- 6.1. 개별기술강도 평가 항목 -->
      <div v-for="(stepObj, index) in step6_Details" :key="index">
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
import Step6_1_IndividualTechStrengthTable from "@/modules/stepModules/Step6_1_IndividualTechStrengthTable.vue";
import Step6_2_TechnologyContribution from "@/modules/stepModules/Step6_2_TechnologyContribution.vue";

import StepDetailView from "@/modules/techEvalSheetModules/StepDetailView.vue";
//우측페이지
import Summary from "@/components/summary.vue";
import { step6_Details } from "@/modules/techEvalSheetModules/Step6_DetailInfo";

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
