<template>

<div
      class="flex flex-col space-y-5 px-7 py-7 bg-white rounded text-gray-900 text-sm font-semibold font-sans leading-tight"
    >
      <div>1.2.1. 대표 IPC(국제특허분류 코드)</div>
      <div
        class="flex-col justify-start items-start flex space-y-2 ml-1 text-gray-500 text-sm font-normal font-sans leading-tight list-disc"
      >
        <li>
          <span class=""> 메인 IPC : </span>
          <span class="text-blue-500">{{ appStore.task.cpcSelected?.IPC }}</span>
        </li>
        <div class="flex">
        <li></li>
        <div>
          <span class=""> 메인 IPC 내용 : </span>
          <span class="text-blue-500">{{ appStore.task.cpcSelected?.내용 }}</span>
        </div>
        </div>
      </div>
    </div>
    
</template>
    
<script setup>

import { useAppStore } from "@/store/app";
    
const appStore = useAppStore();

</script>