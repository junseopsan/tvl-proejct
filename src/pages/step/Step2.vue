<template>
  <div class="flex w-full h-full">
    <div
      class="flex flex-col w-1/2 pb-20 space-y-8 p-8 overflow-y-auto max-h-screen view-h-calc"
    >
      <div class="flex items-center font-semibold leading-normal">
        <img src="@/assets/images/sharp.svg" alt="#" class="" />
        <div class="text-[#1d4ed8] text-lg">2</div>
        <div class="ml-3 text-gray-900 text-base">적용제품ㆍ업종분류</div>
      </div>

      <div
        class="flex text-gray-600 text-sm font-normal font-sans leading-normal"
      >
        적용제품(서비스)을 선택해주세요.
      </div>

      <!-- 적용제품 선택 -->
      <Step2_1_AppliedProduct />

      <!-- 업종분류 선택 -->
      <Step2_2_IndustryClass v-if="appStore.task.product" />
    </div>

    <Summary />
    
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAppStore } from "@/store/app";
import { useRouter } from "vue-router";

import Summary from "@/components/summary.vue";
import Step2_1_AppliedProduct from "@/modules/stepModules/Step2_1_AppliedProduct.vue";
import Step2_2_IndustryClass from "@/modules/stepModules/Step2_2_IndustryClass.vue";

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
</style>
