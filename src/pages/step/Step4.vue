<template>
  <div class="flex w-full h-full fixed-container">
    <div
      class="flex flex-col w-1/2 pb-20 space-y-8 p-8 overflow-y-auto max-h-screen view-h-calc"
    >
      <div class="flex items-center font-semibold leading-normal">
        <img src="@/assets/images/sharp.svg" alt="#" class="" />
        <div class="text-[#1d4ed8] text-lg">4</div>
        <div class="ml-3 text-gray-900 text-base">기술가치 산정</div>
      </div>

      <div
        class="flex text-gray-600 text-sm font-normal font-sans leading-normal"
      >
      기술수명 영향요인 평가표에 따른 평가항목 점수를 선택해주세요.
      </div>

      <!-- 4.1. 목표시장 -->
      <Step4_1_TargetMarket />

      <!-- 4.2.1. 매출계획 - 현금흐름 추정기간 내 매출 추정 -->
      <Step4_2_1_SalesPlanCalc />

      <!-- 4.2.2. 매출계획 - 현금흐름 추정기간 내 기술매출액 설정 -->
      <Step4_2_2_SalesPlanTable />

      <!-- 4.3.1. 매출원가ㆍ판관비 - 현금흐름 추정기간 내 매출원가, 판관비 추정 -->
      <Step4_3_1_SalesCostCalc />

      <!-- 4.3.2. 매출 원가ㆍ판관비 - 현금흐름 추정기간 내 매출원가, 판관비 설정 -->
      <Step4_3_2_SalesCostTable />

      <!-- 4.4.1. 자본적 지출ㆍ감가상각비 - 현금흐름 추정기간 내 자본적 지출, 감가상각비 추정 -->
      <Step4_4_1_CapitalExpenditureCalc />

      <!-- 4.4.2. 자본적 지출ㆍ감가상각비 - 현금흐름 추정기간 내 자본적지출, 감가상각비 설정 -->
      <Step4_4_2_CapitalExpenditureTable />

      <!-- 4.5.2. 운전자본소요율 - 현금흐름 추정기간 내 운전자본소요율 산출 -->
      <Step4_5_1_WorkingCapitalRequiredRateCalc />

      <!-- 4.5.2. 운전자본소요율 - 현금흐름 추정기간 내 운전자본소요율 설정 -->
      <Step4_5_2_WorkingCapitalRequiredTable />

    </div>
    
    <Summary />

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAppStore } from "@/store/app";
import { useRouter } from "vue-router";

//좌측페이지
import Step4_1_TargetMarket from "@/modules/stepModules/Step4_1_TargetMarket.vue";
import Step4_2_1_SalesPlanCalc from "@/modules/stepModules/Step4_2_1_SalesPlanCalc.vue";
import Step4_2_2_SalesPlanTable from "@/modules/stepModules/Step4_2_2_SalesPlanTable.vue";
import Step4_3_1_SalesCostCalc from "@/modules/stepModules/Step4_3_1_SalesCostCalc.vue";
import Step4_3_2_SalesCostTable from "@/modules/stepModules/Step4_3_2_SalesCostTable.vue";
import Step4_4_1_CapitalExpenditureCalc from "@/modules/stepModules/Step4_4_1_CapitalExpenditureCalc.vue";
import Step4_4_2_CapitalExpenditureTable from "@/modules/stepModules/Step4_4_2_CapitalExpenditureTable.vue";
import Step4_5_1_WorkingCapitalRequiredRateCalc from "@/modules/stepModules/Step4_5_1_WorkingCapitalRequiredRateCalc.vue";
import Step4_5_2_WorkingCapitalRequiredTable from "@/modules/stepModules/Step4_5_2_WorkingCapitalRequiredTable.vue";

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
