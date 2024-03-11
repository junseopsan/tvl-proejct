<template>

  <div
        class="flex flex-col space-y-5 px-7 py-7 bg-white rounded text-sm font-semibold font-sans leading-tight"
      >
        <div>4.5.1. 운전자본소요율 - 입력 정보</div>
  
        <div
        class="flex-col justify-start items-start flex space-y-2 ml-1 text-gray-500 text-sm font-normal font-sans leading-tight list-disc"
      >
        <li>
          <span class=""> 재고자산회전율 : </span>
          <span class="text-blue-500">10%</span>
        </li>
        <li>
          <span class=""> 매출채권회전율 : </span>
          <span class="text-blue-500">15%</span>
        </li>
        <li>
          <span class=""> 매입채무회전율 : </span>
          <span class="text-blue-500">15%</span>
        </li>
        <li>
          <span class=""> 운전자본소요율 : </span>
          <span class="text-blue-500">15%</span>
        </li>
      </div>

  </div>
      
      </template>
      
      <script setup>
      import { useAppStore } from "@/store/app";
      
      const appStore = useAppStore();
  
      </script>
      