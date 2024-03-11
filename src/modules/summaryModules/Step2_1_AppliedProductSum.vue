<template>

  <div
        class="flex flex-col space-y-5 p-7 py-7 bg-white rounded text-sm font-semibold font-sans leading-tight"
      >
        <div>2.1. 적용 제품</div>
  
        <div
        class="flex-col justify-start items-start flex space-y-2 ml-1 text-gray-500 text-sm font-normal font-sans leading-tight list-disc"
      >
        <li>
          <span class=""> 적용 제품 : </span>
          <span class="text-blue-500">{{ appStore.task.product }}</span>
        </li>
      </div>


  </div>
      
      </template>
      
      <script setup>
      import { useAppStore } from "@/store/app";
      
      const appStore = useAppStore();
  
      </script>
      