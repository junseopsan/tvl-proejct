<template>

  <div
        class="flex flex-col space-y-5 px-7 py-7 bg-white rounded text-sm font-semibold font-sans leading-tight"
      >
        <div>4.2.2. 매출계획 - 결과</div>
  
        <div
        class="flex-col justify-start items-start flex space-y-2 ml-1 text-gray-500 text-sm font-normal font-sans leading-tight list-disc"
      >
        <li>
          <span class=""> 낙관적 매출추정 : </span>
          <span class="text-blue-500">3,000,000원</span>
          <span class=""> / </span>
          <span class="text-blue-500"> 2021 년</span>
          <span class=""> ~ </span>
          <span class="text-blue-500">3,000,000원</span>
          <span class=""> / </span>
          <span class="text-blue-500"> 2021 년</span>
        </li>
        <li>
          <span class=""> 중간적 매출추정 : </span>
          <span class="text-blue-500">3,000,000원</span>
          <span class=""> / </span>
          <span class="text-blue-500"> 2021 년</span>
          <span class=""> ~ </span>
          <span class="text-blue-500">3,000,000원</span>
          <span class=""> / </span>
          <span class="text-blue-500"> 2021 년</span>
        </li>
        <li>
          <span class=""> 보수적 매출추정 : </span>
          <span class="text-blue-500">3,000,000원</span>
          <span class=""> / </span>
          <span class="text-blue-500"> 2021 년</span>
          <span class=""> ~ </span>
          <span class="text-blue-500">3,000,000원</span>
          <span class=""> / </span>
          <span class="text-blue-500"> 2021 년</span>
        </li>
        <li>
          <span class=""> 적용 기술매출액 : </span>
          <span class="text-blue-500">3,000,000원</span>
          <span class=""> / </span>
          <span class="text-blue-500"> 2021 년</span>
          <span class=""> ~ </span>
          <span class="text-blue-500">3,000,000원</span>
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
      