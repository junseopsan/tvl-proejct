<template>

  <div
        class="flex flex-col space-y-5 px-7 py-7 bg-white rounded text-sm font-semibold font-sans leading-tight"
      >
        <div>4.4.1. 자본적 지출ㆍ감가상각비 - 입력 정보</div>
  
        <div
        class="flex-col justify-start items-start flex space-y-2 ml-1 text-gray-500 text-sm font-normal font-sans leading-tight list-disc"
      >
        <li>
          <span class=""> 유무형자산 비율 : </span>
          <span class="text-blue-500">10%</span>
        </li>
        <li>
          <span class=""> 감가상각비율 : </span>
          <span class="text-blue-500">15%</span>
        </li>
        <li>
          <span class=""> 자본적 투자 총액 : </span>
          <span class="text-blue-500">10,000 천원</span>
        </li>
      </div>

  </div>
      
      </template>
      
      <script setup>
      import { useAppStore } from "@/store/app";
      
      const appStore = useAppStore();
  
      </script>
      