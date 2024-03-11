<template>

<div
      class="flex flex-col space-y-5 px-7 py-7 bg-white rounded text-sm font-semibold font-sans leading-tight"
    >
      <div>1.2.2. TCT 통계</div>

      <div
        class="flex-col justify-start items-start flex space-y-2 ml-1 text-gray-500 text-sm font-normal font-sans leading-tight list-disc"
      >
        <li>
          <span class=""> 평균 : </span>
          <span class="text-blue-500">{{ appStore.task.cpcSelected?.평균 }} 년</span>
        </li>
        <li>
          <span class=""> Q1 : </span>
          <span class="text-blue-500">{{ appStore.task.cpcSelected?.Q1 }} 년</span>
        </li>
        <li>
          <span class=""> Q2(중앙값) : </span>
          <span class="text-blue-500">{{ appStore.task.cpcSelected?.Q2 }} 년</span>
        </li>
        <li>
          <span class=""> Q3 : </span>
          <span class="text-blue-500">{{ appStore.task.cpcSelected?.Q3 }} 년</span>
        </li>
      </div>
</div>
    
</template>
    
<script setup>

import { useAppStore } from "@/store/app";
    
const appStore = useAppStore();

</script>
    