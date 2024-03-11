<template>
  <div class="flex w-full h-full fixed-container">
    <div
      class="flex flex-col w-1/2 pb-20 space-y-8 p-8 overflow-y-auto max-h-screen view-h-calc"
    >
      <div class="flex items-center font-semibold leading-normal">
        <img src="@/assets/images/sharp.svg" alt="#" class="" />
        <div class="text-[#1d4ed8] text-lg">7</div>
        <div class="ml-3 text-gray-900 text-base">기술가치평가 결과</div>
      </div>

      <div
        class="flex text-gray-600 text-sm font-normal font-sans leading-normal"
      >
        기술가치평가 결과를 확인하세요.
      </div>

      <!-- 7.1. 인공지능 기술가치평가 수행 프로세스 -->
      <Step7_1_EvalProcess />

      <!-- 7.2. 주요 핵심변수 -->
      <Step7_2_MainParameter />
      
    </div>
    <Summary />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAppStore } from "@/store/app";
import { useRouter } from "vue-router";

//좌측페이지
import Step7_1_EvalProcess from "@/modules/stepModules/Step7_1_EvalProcess.vue";
import Step7_2_MainParameter from "@/modules/stepModules/Step7_2_MainParameter.vue";

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
