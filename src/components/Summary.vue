<template>
  <div
    v-if="appStore.task"
    class="w-1/2 space-y-5 bg-blue-50 p-8 pb-15 overflow-y-auto max-h-screen view-h-calc"
  >
    <div class="flex items-center font-semibold leading-normal mb-9">
      <img src="@/assets/images/Assessment.svg" alt="" class="" />
      <div class="ml-3 text-gray-900 text-base">평가 결과</div>
    </div>

    <div class="space-y-5">
      <!-- 모듈별 요약 정보 추가 -->
      <!-- 1.1. 특허정보 /완료 -->
      <Step1_1_PatentsInfoSum v-if="appStore.task.confirmPatentinfo" />

      <!-- 1.2.1. IPC 정보 -->
      <Step1_2_IPCTCTSum1 v-if="appStore.task.cpcSelected?.IPC?.length > 0" />

      <!-- 1.2.2. TCT통계 정보 -->
      <Step1_2_IPCTCTSum2 v-if="appStore.task.cpcSelected?.IPC?.length > 0" />

      <!-- 2.1. 적용제품 /완료 -->
      <Step2_1_AppliedProductSum v-if="appStore.task.product?.length > 0" />

      <!-- 2.2. 업종분류코드 /완료 -->
      <Step2_2_IndustryClassSum v-if="appStore.task.product_code?.length > 0" />

      <!-- 3.1. 기술수명 영향요인 평가 -->
      <Step3_1_TechLifeTableSum />

      <!-- 3.2. 기술의 경제적 수명 -->
      <Step3_2_TechLifeCalcSum />

      <!-- 3.3. 현금흐름 추정기간 -->
      <Step3_3_EstimatedCashFlowSum />

      <!-- 4.1. 목표시장 -->
      <Step4_1_TargetMarketSum />

      <!-- 4.2.1. 매출계획 - 현금흐름 추정기간 내 매출 추정 -->
      <Step4_2_1_SalesPlanCalcSum />

      <!-- 4.2.2. 매출계획 - 현금흐름 추정기간 내 기술매출액 설정 -->
      <Step4_2_2_SalesPlanTableSum />

      <!-- 4.3.1. 매출원가ㆍ판관비 - 현금흐름 추정기간 내 매출원가, 판관비 추정 -->
      <Step4_3_1_SalesCostCalcSum />

      <!-- 4.3.2. 매출 원가ㆍ판관비 - 현금흐름 추정기간 내 매출원가, 판관비 설정 -->
      <Step4_3_2_SalesCostTableSum />

      <!-- 4.4.1. 자본적 지출ㆍ감가상각비 - 현금흐름 추정기간 내 자본적 지출, 감가상각비 추정 -->
      <Step4_4_1_CapitalExpenditureCalcSum />

      <!-- 4.4.2. 자본적 지출ㆍ감가상각비 - 현금흐름 추정기간 내 자본적지출, 감가상각비 설정 -->
      <Step4_4_2_CapitalExpenditureTableSum />

      <!-- 4.5.2. 운전자본소요율 - 현금흐름 추정기간 내 운전자본소요율 산출 -->
      <Step4_5_1_WorkingCapitalRequiredRateCalcSum />

      <!-- 4.5.2. 운전자본소요율 - 현금흐름 추정기간 내 운전자본소요율 설정 -->
      <Step4_5_2_WorkingCapitalRequiredTableSum />

      <!-- 5.1. 기술사업화 위험프리미엄 평가 -->
      <Step5_1_RiskPremiumEvalTableSum />

      <!-- 5.2. 할인율 -->
      <Step5_2_DiscountRateSum />

      <!-- 6.1. 개별기술강도 평가 -->
      <Step6_1_IndividualTechStrengthTableSum />

      <!-- 6.2. 기술기여도 -->
      <Step6_2_TechnologyContributionSum />
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/store/app";

import Step1_1_PatentsInfoSum from "@/modules/summaryModules/Step1_1_PatentsInfoSum.vue";
import Step1_2_IPCTCTSum1 from "@/modules/summaryModules/Step1_2_IPCTCTSum1.vue";
import Step1_2_IPCTCTSum2 from "@/modules/summaryModules/Step1_2_IPCTCTSum2.vue";
import Step2_1_AppliedProductSum from "@/modules/summaryModules/Step2_1_AppliedProductSum.vue";
import Step2_2_IndustryClassSum from "@/modules/summaryModules/Step2_2_IndustryClassSum.vue";
import Step3_1_TechLifeTableSum from "@/modules/summaryModules/Step3_1_TechLifeTableSum.vue";
import Step3_2_TechLifeCalcSum from "@/modules/summaryModules/Step3_2_TechLifeCalcSum.vue";
import Step3_3_EstimatedCashFlowSum from "@/modules/summaryModules/Step3_3_EstimatedCashFlowSum.vue";

import Step4_1_TargetMarketSum from "@/modules/summaryModules/Step4_1_TargetMarketSum.vue";
import Step4_2_1_SalesPlanCalcSum from "@/modules/summaryModules/Step4_2_1_SalesPlanCalcSum.vue";
import Step4_2_2_SalesPlanTableSum from "@/modules/summaryModules/Step4_2_2_SalesPlanTableSum.vue";
import Step4_3_1_SalesCostCalcSum from "@/modules/summaryModules/Step4_3_1_SalesCostCalcSum.vue";
import Step4_3_2_SalesCostTableSum from "@/modules/summaryModules/Step4_3_2_SalesCostTableSum.vue";
import Step4_4_1_CapitalExpenditureCalcSum from "@/modules/summaryModules/Step4_4_1_CapitalExpenditureCalcSum.vue";
import Step4_4_2_CapitalExpenditureTableSum from "@/modules/summaryModules/Step4_4_2_CapitalExpenditureTableSum.vue";
import Step4_5_1_WorkingCapitalRequiredRateCalcSum from "@/modules/summaryModules/Step4_5_1_WorkingCapitalRequiredRateCalcSum.vue";
import Step4_5_2_WorkingCapitalRequiredTableSum from "@/modules/summaryModules/Step4_5_2_WorkingCapitalRequiredTableSum.vue";

import Step5_1_RiskPremiumEvalTableSum from "@/modules/summaryModules/Step5_1_RiskPremiumEvalTableSum.vue";
import Step5_2_DiscountRateSum from "@/modules/summaryModules/Step5_2_DiscountRateSum.vue";

import Step6_1_IndividualTechStrengthTableSum from "@/modules/summaryModules/Step6_1_IndividualTechStrengthTableSum.vue";
import Step6_2_TechnologyContributionSum from "@/modules/summaryModules/Step6_2_TechnologyContributionSum.vue";

const appStore = useAppStore();
</script>

<style scoped>
.view-h-calc {
  block-size: calc(100vh - 72px);

  /* height: calc(100vh - 72px); */
}
</style>
