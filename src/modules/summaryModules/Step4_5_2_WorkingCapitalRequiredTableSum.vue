<template>

  <div
        class="flex flex-col space-y-5 px-7 py-7 bg-white rounded text-sm font-semibold font-sans leading-tight"
      >
        <div>4.5.2. 운전자본소요율 - 결과</div>
  
        <div
        class="flex-col justify-start items-start flex space-y-2 ml-1 text-gray-500 text-sm font-normal font-sans leading-tight list-disc"
      >
        <li>
          <span class=""> 운전자본증감액 : </span>
          <span class="text-blue-500">3,000,000원</span>
          <span class=""> / </span>
          <span class="text-blue-500"> 2021 년</span>
          <span class=""> ~ </span>
          <span class="text-blue-500">3,000,000원</span>
          <span class=""> / </span>
          <span class="text-blue-500"> 2021 년</span>
        </li>
        <li>
          <span class=""> 운전자본소요율 : </span>
          <span class="text-blue-500">22%</span>
        </li>
     
      </div>

  </div>
      
      </template>
      
      <script setup>
      import { useAppStore } from "@/store/app";
      
      const appStore = useAppStore();
  
      </script>
      