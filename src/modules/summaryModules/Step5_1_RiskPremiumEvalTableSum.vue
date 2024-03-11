<template>
  <div
    class="flex flex-col space-y-7 p-7 py-7 bg-white rounded text-sm font-semibold font-sans leading-tight"
  >
    <div>5.1. 기술사업화 위험프리미엄 평가</div>

    <div class="flex space-x-24">
      <div
        class="flex-col justify-start items-start flex space-y-2 ml-1 text-gray-500 text-sm font-normal font-sans leading-tight list-disc"
      >
        <div class="mb-1 font-semibold">기술위험 요인</div>
        <li>
          <span class=""> 차별성 : </span>
          <span v-if="appStore.task.step5_1_1?.평가점수 > 0" class="text-blue-500">
            {{ appStore.task.step5_1_1?.평가점수 }} 점</span
          >
          <span v-else class="text-red-500">
            선택 필요</span
          >
        </li>
        <li>
          <span class=""> 기술경쟁강도 : </span>
          <span v-if="appStore.task.step5_1_2?.평가점수 > 0" class="text-blue-500">
            {{ appStore.task.step5_1_2?.평가점수 }} 점</span
          >
          <span v-else class="text-red-500">
            선택 필요</span
          >
        </li>
        <li>
          <span class=""> 기술사업화 환경 : </span>
          <span v-if="appStore.task.step5_1_3?.평가점수 > 0" class="text-blue-500">
            {{ appStore.task.step5_1_3?.평가점수 }} 점</span
          >
          <span v-else class="text-red-500">
            선택 필요</span
          >
        </li>
        <li>
          <span class=""> 모방난이도 : </span>
          <span v-if="appStore.task.step5_1_4?.평가점수 > 0" class="text-blue-500">
            {{ appStore.task.step5_1_4?.평가점수 }} 점</span
          >
          <span v-else class="text-red-500">
            선택 필요</span
          >
        </li>
        <li>
          <span class=""> 권리안정성 : </span>
          <span v-if="appStore.task.step5_1_5?.평가점수 > 0" class="text-blue-500">
            {{ appStore.task.step5_1_5?.평가점수 }} 점</span
          >
          <span v-else class="text-red-500">
            선택 필요</span
          >
        </li>
      </div>
      <div
        class="flex-col justify-start items-start flex space-y-2 ml-1 text-gray-500 text-sm font-normal font-sans leading-tight list-disc"
      >
        <div class="mb-1 font-semibold">시장/사업위험 요인</div>
        <li>
          <span class=""> 시장진입가능성 : </span>
          <span v-if="appStore.task.step5_1_6?.평가점수 > 0" class="text-blue-500"> {{ appStore.task.step5_1_6?.평가점수 }} 점</span>
          <span v-else class="text-red-500">
            선택 필요</span
          >
        </li>
        <li>
          <span class=""> 시장경쟁강도 : </span>
          <span v-if="appStore.task.step5_1_7?.평가점수 > 0" class="text-blue-500"> {{ appStore.task.step5_1_7?.평가점수 }} 점</span>
          <span v-else class="text-red-500">
            선택 필요</span
          >
        </li>
        <li>
          <span class=""> 시장의 성장전망 : </span>
          <span v-if="appStore.task.step5_1_8?.평가점수 > 0" class="text-blue-500"> {{ appStore.task.step5_1_8?.평가점수 }} 점</span>
          <span v-else class="text-red-500">
            선택 필요</span
          >
        </li>
        <li>
          <span class=""> 생산용이성 : </span>
          <span v-if="appStore.task.step5_1_9?.평가점수 > 0" class="text-blue-500"> {{ appStore.task.step5_1_9?.평가점수 }} 점</span>
          <span v-else class="text-red-500">
            선택 필요</span
          >
        </li>
        <li>
          <span class=""> 수익성 : </span>
          <span v-if="appStore.task.step5_1_10?.평가점수 > 0" class="text-blue-500"> {{ appStore.task.step5_1_10?.평가점수 }} 점</span>
          <span v-else class="text-red-500">
            선택 필요</span
          >
        </li>
      </div>
    </div>

    <div>
      <div class="text-sm font-semibold leading-6">
        <span class="text-gray-500"> 기술사업화 위험프리미엄 점수: </span>
        <span class="text-blue-500"> 84 점</span>
      </div>
      <div class="text-sm font-semibold leading-6">
        <span class="text-gray-500"> 기술사업화 위험프리미엄 : </span>
        <span class="text-blue-500"> 14 %</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
</script>
