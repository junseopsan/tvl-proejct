<template>
  <div
    class="space-y-5 px-7 py-7 bg-white rounded text-gray-900 text-sm font-semibold font-sans leading-tight"
  >
    <div>1.1. 평가대상특허의 정보</div>
    <div
      class="flex-col justify-start items-start flex space-y-2 ml-1 text-gray-500 text-sm font-normal font-sans leading-tight list-disc"
    >
    <div class="flex">
      <li></li>
      <div>
        <span class=""> 발명의 명칭 : </span>
        <span class="text-blue-500">{{ appStore.task.title }}</span>
      </div>
    </div>
    <div class="flex">
      <li></li>
      <div>
        <span class=""> 특허권자 : </span>
        <span class="text-blue-500">{{ appStore.task.assignee }}</span>
      </div>
    </div>
      <li>
        <span class=""> 출원번호 : </span>
        <span class="text-blue-500">{{ appStore.task.applicationNumber }}</span>
        <span class=""> / 출원일자 : </span>
        <span class="text-blue-500">{{ appStore.task.applicationDate }}</span>
      </li>
      <li>
        <span class=""> 공개번호 : </span>
        <span class="text-blue-500">{{ appStore.task.publicationNumber }}</span>
        <span class=""> / 공개일자 : </span>
        <span class="text-blue-500">{{ appStore.task.publicationDate }}</span>
      </li>
      <li>
        <span class=""> 등록번호 : </span>
        <span class="text-blue-500">{{ appStore.task.grantNumber }}</span>
        <span class=""> / 등록일자 : </span>
        <span class="text-blue-500">{{ appStore.task.grantDate }}</span>
      </li>
      <li>
        <span class=""> 존속기간(예상)만료일 : </span>
        <span class="text-blue-500">{{ appStore.task.expirationDate }}</span>
      </li>
      <div class="flex">
      <li></li>
        <div>
        <span class=""> 요약 : </span>
        <span v-if="appStore.task.abstract" class="text-blue-500">{{
          appStore.task.abstract
        }}</span>
        <span v-else class="text-blue-500 animate-pulse">loading</span>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
const taskInfo = ref({});

// onMounted(() => {
//     console.log(appStore.task);
//     taskInfo.value = appStore.task
//     console.log("mounted", appStore.task);
//     console.log("mounted", appStore.productClass);
//   });
</script>
