<template>

  <div
        class="flex flex-col space-y-5 px-7 py-7 bg-white rounded text-sm font-semibold font-sans leading-tight"
      >
        <div>4.1. 목표시장</div>
  
        <div
        class="flex-col justify-start items-start flex space-y-2 ml-1 text-gray-500 text-sm font-normal font-sans leading-tight list-disc"
      >
        <li>
          <span class=""> 목표시장 명 : </span>
          <span class="text-blue-500"> 국내 로터베이터 시장</span>
        </li>
        <li>
          <span class=""> 시작년도 시장규모 : </span>
          <span class="text-blue-500"> 110,946 백만원</span>
          <span class=""> / </span>
          <span class="text-blue-500"> 2021 년</span>
        </li>
        <li>
          <span class=""> 종료년도 시장규모 : </span>
          <span class="text-blue-500"> 70,999 백만원</span>
          <span class=""> / </span>
          <span class="text-blue-500"> 2021 년</span>
        </li>
      </div>

  </div>
      
</template>
      
<script setup>
import { useAppStore } from "@/store/app";
      
const appStore = useAppStore();
  
</script>