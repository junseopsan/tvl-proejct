<template>
  <div
    class="flex flex-col space-y-7 p-7 py-7 bg-white rounded text-sm font-semibold font-sans leading-tight"
  >
    <div>3.1. 기술수명 영향요인 평가</div>

    <div class="flex space-x-16">
      <div
        class="flex-col justify-start items-start flex space-y-2 ml-1 text-gray-500 text-sm font-normal font-sans leading-tight list-disc"
      >
        <div class="mb-1 font-semibold">기술/권리 요인</div>
        <li>
          <span class=""> 우월성 : </span>
          <span v-if="appStore.task.step3_1_1?.평가점수 > 0" class="text-blue-500">
            {{ appStore.task.step3_1_1?.평가점수 }} 점</span
          >
          <span v-else class="text-red-500">
            선택 필요</span
          >
        </li>
        <li>
          <span class=""> 기술경쟁강도 : </span>
          <span v-if="appStore.task.step3_1_2?.평가점수 > 0" class="text-blue-500">
            {{ appStore.task.step3_1_2?.평가점수 }} 점</span
          >
          <span v-else class="text-red-500">
            선택 필요</span
          >
        </li>
        <li>
          <span class=""> 대체가능성 : </span>
          <span v-if="appStore.task.step3_1_3?.평가점수 > 0" class="text-blue-500">
            {{ appStore.task.step3_1_3?.평가점수 }} 점</span
          >
          <span v-else class="text-red-500">
            선택 필요</span
          >
        </li>
        <li>
          <span class=""> 모방난이도 : </span>
          <span v-if="appStore.task.step3_1_4?.평가점수 > 0" class="text-blue-500">
            {{ appStore.task.step3_1_4?.평가점수 }} 점</span
          >
          <span v-else class="text-red-500">
            선택 필요</span
          >
        </li>
        <li>
          <span class=""> 권리보호강도 : </span>
          <span v-if="appStore.task.step3_1_5?.평가점수 > 0" class="text-blue-500">
            {{ appStore.task.step3_1_5?.평가점수 }} 점</span
          >
          <span v-else class="text-red-500">
            선택 필요</span
          >
        </li>
      </div>
      <div
        class="flex-col justify-start items-start flex space-y-2 ml-1 text-gray-500 text-sm font-normal font-sans leading-tight list-disc"
      >
        <div class="mb-1 font-semibold">시장/사업 요인</div>
        <li>
          <span class=""> 시장진입가능성 : </span>
          <span v-if="appStore.task.step3_1_6?.평가점수 > 0" class="text-blue-500">
            {{ appStore.task.step3_1_6?.평가점수 }} 점</span
          >
          <span v-else class="text-red-500">
            선택 필요</span
          >
        </li>
        <li>
          <span class=""> 시장경쟁강도 : </span>
          <span v-if="appStore.task.step3_1_7?.평가점수 > 0" class="text-blue-500">
            {{ appStore.task.step3_1_7?.평가점수 }} 점</span
          >
          <span v-else class="text-red-500">
            선택 필요</span
          >
        </li>
        <li>
          <span class=""> 시장경쟁의 변화 : </span>
          <span v-if="appStore.task.step3_1_8?.평가점수 > 0" class="text-blue-500">
            {{ appStore.task.step3_1_8?.평가점수 }} 점</span
          >
          <span v-else class="text-red-500">
            선택 필요</span
          >
        </li>
        <li>
          <span class=""> 신제품 출현가능성 : </span>
          <span v-if="appStore.task.step3_1_9?.평가점수 > 0" class="text-blue-500">
            {{ appStore.task.step3_1_9?.평가점수 }} 점</span
          >
          <span v-else class="text-red-500">
            선택 필요</span
          >
        </li>
        <li>
          <span class=""> 예상 시장점유율 : </span>
          <span v-if="appStore.task.step3_1_10?.평가점수 > 0" class="text-blue-500">
            {{ appStore.task.step3_1_10?.평가점수 }} 점</span
          >
          <span v-else class="text-red-500">
            선택 필요</span
          >
        </li>
      </div>
    </div>
    <div class="text-sm font-semibold leading-6">
      <div v-if="appStore?.step3_totalEvalValue > 0">
      <span class="text-gray-500"> 기술수명 영향요인 평가 점수 : </span>
      <span class="text-blue-500"> {{ appStore?.step3_totalEvalValue || 0 }} 점</span>
      </div>
      <div v-else>
      <span class="text-gray-500"> 기술수명 영향요인 평가 점수 : </span>
      <span class="text-red-500"> 선택 필요</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/store/app";

const appStore = useAppStore();

</script>
