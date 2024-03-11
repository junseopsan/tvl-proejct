<template>
  <div class="flex w-full h-full">
    <div
      class="flex flex-col w-1/2 pb-20 space-y-8 p-8 overflow-y-auto max-h-screen view-h-calc"
    >
      <div class="flex items-center font-semibold leading-normal">
        <img src="@/assets/images/sharp.svg" alt="#" class="" />
        <div class="text-[#1d4ed8] text-lg">1</div>
        <div class="ml-3 text-gray-900 text-base">특허정보 / 대표IPC</div>
      </div>

      <div
        class="space-y-2 font-normal font-sans leading-normal text-gray-600 text-sm"
      >
        <div class="ml-[1px]">특허 공개/등록번호</div>
        <div class="p-3 px-5 bg-gray-100 rounded">
          {{ appStore.task.publicationNumber }}
        </div>
      </div>

      <!-- 평가대상특허 정보 확인 -->
      <Step1_1_PatentsInfo v-if="appStore.task" />

      <!-- 평가대상특허의 IPC 및 TCT 통계값 확인 -->
      <Step1_2_IPCTCT v-if="appStore.task.confirmPatentinfo" />
    </div>
    <!-- 평가대상특허의 결과확인 -->
    <Summary />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAppStore } from "@/store/app";
import { useRouter } from "vue-router";
import Step1_1_PatentsInfo from "@/modules/stepModules/Step1_1_PatentsInfo.vue";
import Step1_2_IPCTCT from "@/modules/stepModules/Step1_2_IPCTCT.vue";
import Summary from "@/components/summary.vue";

const appStore = useAppStore();
const router = useRouter();

onMounted(async () => {
  appStore.currentPageName = router.currentRoute.value.name;
});
</script>

<style scoped>
.view-h-calc {
  height: calc(100vh - 72px);
}
</style>
