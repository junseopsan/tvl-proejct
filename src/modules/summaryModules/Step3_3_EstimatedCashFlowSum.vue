<template>

  <div
        class="flex flex-col space-y-5 px-7 py-7 bg-white rounded text-sm font-semibold font-sans leading-tight"
      >
        <div>3.3. 현금흐름 추정기간</div>
  
        <div
        class="flex-col justify-start items-start flex space-y-2 ml-1 text-gray-500 text-sm font-normal font-sans leading-tight list-disc"
      >
      <li>
          <span class=""> 평가년도 차수 : </span>
          <span class="text-blue-500"> 11 차년</span>
        </li>
        <li>
          <span class=""> 평가 시작년도 : </span>
          <span class="text-blue-500">2023.05.10</span>
          <span class="text-blue-500">~</span>
          <span class="text-blue-500">2024.05.10</span>
        </li>
        <li>
          <span>평가 종료년도 : </span>
          <span class="text-blue-500">2033.05.10</span>
          <span class="text-blue-500">~</span>
          <span class="text-blue-500">2034.05.10</span>
        </li>
      </div>

  </div>
      
</template>
      
<script setup>
import { useAppStore } from "@/store/app";
      
const appStore = useAppStore();
  
</script>