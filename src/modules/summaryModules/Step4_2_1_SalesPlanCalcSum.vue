<template>

  <div
        class="flex flex-col space-y-5 px-7 py-7 bg-white rounded text-sm font-semibold font-sans leading-tight"
      >
        <div>4.2.1. 매출계획 - 입력 정보</div>
  
        <div
        class="flex-col justify-start items-start flex space-y-2 ml-1 text-gray-500 text-sm font-normal font-sans leading-tight list-disc"
      >
        <li>
          <span class=""> 기업 규모 : </span>
          <span class="text-blue-500">소기업</span>
        </li>
        <li>
          <span class=""> 시장 위치 : </span>
          <span class="text-blue-500">하위그룹</span>
        </li>
        <li>
          <span class=""> 시장 점유율 : </span>
          <span class="text-blue-500">10 %</span>
        </li>
        <li>
          <span class=""> 예상 매출액 : </span>
          <span class="text-blue-500"> 10,000 천원</span>
        </li>
      </div>

  </div>
      
      </template>
      
      <script setup>
      import { useAppStore } from "@/store/app";
      
      const appStore = useAppStore();
  
      </script>
      