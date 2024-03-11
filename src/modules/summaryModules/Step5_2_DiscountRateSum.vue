<template>

  <div
        class="flex flex-col space-y-5 px-7 py-7 bg-white rounded text-sm font-semibold font-sans leading-tight"
      >
        <div>5.2. 할인율</div>
  
        <div
        class="flex-col justify-start items-start flex space-y-2 ml-1 text-gray-500 text-sm font-normal font-sans leading-tight list-disc"
      >
        <li>
          <span class=""> 기술사업화 위험프리미엄 : </span>
          <span class="text-blue-500">11 %</span>
        </li>
        <li>
          <span class=""> CAPM+규모프리미엄 : </span>
          <span class="text-blue-500">11 %</span>
        </li>
        <li>
          <span class=""> 실효법인세율 : </span>
          <span class="text-blue-500">22%</span>
        </li>
        <li>
          <span class=""> 자기자본비용 : </span>
          <span class="text-blue-500">22%</span>
        </li>
        <li>
          <span class=""> 타인자본비용 : </span>
          <span class="text-blue-500">22%</span>
        </li>
        <li>
          <span class=""> 자기자본비율 : </span>
          <span class="text-blue-500">22%</span>
        </li>
        <li>
          <span class=""> 최종 할인율 : </span>
          <span class="text-blue-500">22%</span>
        </li>
     
      </div>


  </div>
      
      </template>
      
      <script setup>
      import { useAppStore } from "@/store/app";
      
      const appStore = useAppStore();
  
      </script>
      