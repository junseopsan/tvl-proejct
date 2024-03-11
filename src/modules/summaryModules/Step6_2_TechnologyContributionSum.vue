<template>

  <div
        class="flex flex-col space-y-5 px-7 py-7 bg-white rounded text-sm font-semibold font-sans leading-tight"
      >
        <div>6.2. 기술기여도</div>
  
        <div
        class="flex-col justify-start items-start flex space-y-2 ml-1 text-gray-500 text-sm font-normal font-sans leading-tight list-disc"
      >
        <li>
          <span class=""> 개별기술강도 : </span>
          <span class="text-blue-500">10 %</span>
        </li>
        <li>
          <span class=""> 산업기술요소 : </span>
          <span class="text-blue-500">10 %</span>
        </li>
        <li>
          <span class=""> 기술의비중 : </span>
          <span class="text-blue-500">10 %</span>
        </li>
        <li>
          <span class=""> 최종 기술기여도 : </span>
          <span class="text-blue-500">22 %</span>
        </li>
     
      </div>


  </div>
      
      </template>
      
      <script setup>
      import { useAppStore } from "@/store/app";
      
      const appStore = useAppStore();
  
      </script>
      