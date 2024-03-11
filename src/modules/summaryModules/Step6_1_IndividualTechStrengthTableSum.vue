<template>

  <div
        class="flex flex-col space-y-7 p-7 py-7 bg-white rounded text-sm font-semibold font-sans leading-tight"
      >
      
        <div>6.2. 개별기술강도 평가</div>
  
        <div class="flex space-x-28">
        <div
        class="flex-col justify-start items-start flex space-y-2 ml-1 text-gray-500 text-sm font-normal font-sans leading-tight list-disc"
      >
      <div class="mb-1 font-semibold">기술 요인</div>
      <li>
          <span class=""> 혁신성 : </span>
          <span v-if="appStore.task.step6_1_1?.평가점수 > 0" class="text-blue-500"> {{ appStore.task.step6_1_1?.평가점수 }} 점</span>
          <span v-else class="text-red-500">선택 필요</span>
        </li>
      <li>
          <span class=""> 차별성 : </span>
          <span v-if="appStore.task.step6_1_2?.평가점수 > 0" class="text-blue-500"> {{ appStore.task.step6_1_2?.평가점수 }} 점</span>
          <span v-else class="text-red-500">선택 필요</span>
        </li>
        <li>
          <span class=""> 대체가능성 : </span>
          <span v-if="appStore.task.step6_1_3?.평가점수 > 0" class="text-blue-500"> {{ appStore.task.step6_1_3?.평가점수 }} 점</span>
          <span v-else class="text-red-500">선택 필요</span>
        </li>
        <li>
          <span class=""> 활용성	 : </span>
          <span v-if="appStore.task.step6_1_4?.평가점수 > 0" class="text-blue-500"> {{ appStore.task.step6_1_4?.평가점수 }} 점</span>
          <span v-else class="text-red-500">선택 필요</span>
        </li>
        <li>
          <span class=""> 파급성 : </span>
          <span v-if="appStore.task.step6_1_5?.평가점수 > 0" class="text-blue-500"> {{ appStore.task.step6_1_5?.평가점수 }} 점</span>
          <span v-else class="text-red-500">선택 필요</span>
        </li>
        <li>
          <span class=""> 진부화가능성 : </span>
          <span v-if="appStore.task.step6_1_6?.평가점수 > 0" class="text-blue-500"> {{ appStore.task.step6_1_6?.평가점수 }} 점</span>
          <span v-else class="text-red-500">선택 필요</span>
        </li>
        <li>
          <span class=""> 모방난이도 : </span>
          <span v-if="appStore.task.step6_1_7?.평가점수 > 0" class="text-blue-500"> {{ appStore.task.step6_1_7?.평가점수 }} 점</span>
          <span v-else class="text-red-500">선택 필요</span>
        </li>
      </div>
      <div
        class="flex-col justify-start items-start flex space-y-2 ml-1 text-gray-500 text-sm font-normal font-sans leading-tight list-disc"
      >
      <div class="mb-1 font-semibold">사업 요인</div>
        <li>
          <span class=""> 사업화준비기간 : </span>
          <span v-if="appStore.task.step6_1_14?.평가점수 > 0" class="text-blue-500"> {{ appStore.task.step6_1_14?.평가점수 }} 점</span>
          <span v-else class="text-red-500">선택 필요</span>
        </li>
        <li>
          <span class=""> 사업화소요자본 : </span>
          <span v-if="appStore.task.step6_1_15?.평가점수 > 0" class="text-blue-500"> {{ appStore.task.step6_1_15?.평가점수 }} 점</span>
          <span v-else class="text-red-500">선택 필요</span>
        </li>
        <li>
          <span class=""> 생산용이성 : </span>
          <span v-if="appStore.task.step6_1_16?.평가점수 > 0" class="text-blue-500"> {{ appStore.task.step6_1_16?.평가점수 }} 점</span>
          <span v-else class="text-red-500">선택 필요</span>
        </li>
        <li>
          <span class=""> 경제적수명 : </span>
          <span v-if="appStore.task.step6_1_17?.평가점수 > 0" class="text-blue-500"> {{ appStore.task.step6_1_17?.평가점수 }} 점</span>
          <span v-else class="text-red-500">선택 필요</span>
        </li>
        <li>
          <span class=""> 매출성장추세 : </span>
          <span v-if="appStore.task.step6_1_18?.평가점수 > 0" class="text-blue-500"> {{ appStore.task.step6_1_18?.평가점수 }} 점</span>
          <span v-else class="text-red-500">선택 필요</span>
        </li>
        <li>
          <span class=""> 수익성 : </span>
          <span v-if="appStore.task.step6_1_19?.평가점수 > 0" class="text-blue-500"> {{ appStore.task.step6_1_19?.평가점수 }} 점</span>
          <span v-else class="text-red-500">선택 필요</span>
        </li>
        <li>
          <span class=""> 파생적 매출 : </span>
          <span v-if="appStore.task.step6_1_20?.평가점수 > 0" class="text-blue-500"> {{ appStore.task.step6_1_20?.평가점수 }} 점</span>
          <span v-else class="text-red-500">선택 필요</span>
        </li>
      </div>
          </div>

          <div class="flex space-x-14">
        <div
        class="flex-col justify-start items-start flex space-y-2 ml-1 text-gray-500 text-sm font-normal font-sans leading-tight list-disc"
      >
      <div class="mb-1 font-semibold">권리 요인</div>
        <li>
          <span class=""> 권리보호강도 : </span>
          <span v-if="appStore.task.step6_1_8?.평가점수 > 0" class="text-blue-500"> {{ appStore.task.step6_1_8?.평가점수 }} 점</span>
          <span v-else class="text-red-500">선택 필요</span>
        </li>
        <li>
          <span class=""> 권리안정성 : </span>
          <span v-if="appStore.task.step6_1_9?.평가점수 > 0" class="text-blue-500"> {{ appStore.task.step6_1_9?.평가점수 }} 점</span>
          <span v-else class="text-red-500">선택 필요</span>
        </li>
        <li>
          <span class=""> 침해발견 및 입증용이성 : </span>
          <span v-if="appStore.task.step6_1_10?.평가점수 > 0" class="text-blue-500"> {{ appStore.task.step6_1_10?.평가점수 }} 점</span>
          <span v-else class="text-red-500">선택 필요</span>
        </li>
      </div>
      <div
        class="flex-col justify-start items-start flex space-y-2 ml-1 text-gray-500 text-sm font-normal font-sans leading-tight list-disc"
      >
      <div class="mb-1 font-semibold">시장 요인</div>
        <li>
          <span class=""> 시장진입가능성 : </span>
          <span v-if="appStore.task.step6_1_11?.평가점수 > 0" class="text-blue-500"> {{ appStore.task.step6_1_11?.평가점수 }} 점</span>
          <span v-else class="text-red-500">선택 필요</span>
        </li>
        <li>
          <span class=""> 수요민감도 : </span>
          <span v-if="appStore.task.step6_1_12?.평가점수 > 0" class="text-blue-500"> {{ appStore.task.step6_1_12?.평가점수 }} 점</span>
          <span v-else class="text-red-500">선택 필요</span>
        </li>
        <li>
          <span class=""> 예상 시장점유율 : </span>
          <span v-if="appStore.task.step6_1_13?.평가점수 > 0" class="text-blue-500"> {{ appStore.task.step6_1_13?.평가점수 }} 점</span>
          <span v-else class="text-red-500">선택 필요</span>
        </li>
      </div>
          </div>
          <div class="text-sm font-semibold leading-6">
            <span class="text-gray-500"> 개별기술강도 평가 점수 : </span>
            <span class="text-blue-500"> 84 점</span>

            </div>
  </div>
      
      </template>
      
      <script setup>
      import { useAppStore } from "@/store/app";
      
      const appStore = useAppStore();
  
      </script>
      