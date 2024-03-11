<template>
  <div
    class="w-1/2 space-y-5 bg-blue-50 p-8 overflow-y-auto max-h-screen view-h-calc"
  >
    <div
      class="space-y-8 px-5 py-7 bg-white rounded text-gray-900 text-sm font-semibold font-sans leading-tight"
    >
      <div>평가대상특허의 정보</div>
      <div
        class="flex-col justify-start items-start flex space-y-2 ml-1 text-gray-500 text-sm font-normal font-sans leading-tight list-disc"
      >
        <li>
          <span class=""> 발명의 명칭 : </span>
          <span class="text-blue-500">{{ appStore.task.title }}</span>
        </li>
        <li>
          <span class=""> 특허권자 : </span>
          <span class="text-blue-500">{{ appStore.task.assignee }}</span>
        </li>
        <li>
          <span class=""> 출원번호 : </span>
          <span class="text-blue-500">{{
            appStore.task.applicationNumber
          }}</span>
          <span class=""> / 출원일자 : </span>
          <span class="text-blue-500">{{ appStore.task.applicationDate }}</span>
        </li>
        <li>
          <span class=""> 공개번호 : </span>
          <span class="text-blue-500">{{
            appStore.task.publicationNumber
          }}</span>
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
        <li>
          <span class=""> 요약 : </span>
          <span v-if="appStore.abstract" class="text-blue-500">{{
            appStore.abstract.text
          }}</span>
          <span v-else class="text-blue-500 animate-pulse">loading</span>
        </li>
      </div>
    </div>

    <div
      class="flex flex-col space-y-8 px-5 py-7 bg-white rounded text-gray-900 text-sm font-semibold font-sans leading-tight"
    >
      <div>대표 IPC(국제특허분류 코드)</div>
      <div
        class="flex-col justify-start items-start flex space-y-2 ml-1 text-gray-500 text-sm font-normal font-sans leading-tight list-disc"
      >
        <li>
          <span class=""> 메인 IPC : </span>
          <span class="text-blue-500">{{ appStore.cpcInfoSelected.IPC }}</span>
        </li>
        <li>
          <span class=""> 메인 IPC 내용 : </span>
          <span class="text-blue-500">{{ appStore.cpcInfoSelected.내용 }}</span>
        </li>
      </div>
    </div>

    <div
      class="flex flex-col space-y-8 px-5 py-7 bg-white rounded text-sm font-semibold font-sans leading-tight"
    >
      <div>TCT 통계</div>

      <div
        class="flex-col justify-start items-start flex space-y-2 ml-1 text-gray-500 text-sm font-normal font-sans leading-tight list-disc"
      >
        <li>
          <span class=""> 평균 : </span>
          <span class="text-blue-500">{{ appStore.cpcInfoSelected.평균 }}</span>
        </li>
        <li>
          <span class=""> Q1 : </span>
          <span class="text-blue-500">{{ appStore.cpcInfoSelected.Q1 }}</span>
        </li>
        <li>
          <span class=""> Q2(중앙값) : </span>
          <span class="text-blue-500">{{ appStore.cpcInfoSelected.Q2 }}</span>
        </li>
        <li>
          <span class=""> Q3 : </span>
          <span class="text-blue-500">{{ appStore.cpcInfoSelected.Q3 }}</span>
        </li>
      </div>
    </div>

    <button
      type="button"
      class="flex w-full items-center justify-center gap-x-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      v-if="appStore.abstract"
      @click="nextStep()"
    >
      <div
        v-if="loading"
        class="mx-auto h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"
      ></div>
      <div v-else class="flex space-x-2">
        <img src="@/assets/images/autoGen.svg" alt="autoGen" class="" />
        <span>다음 단계로 이동</span>
      </div>
    </button>
    <button
      type="button"
      class="flex w-full items-center justify-center gap-x-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      disabled
      v-else
    >
      요약 준비중입니다.
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAppStore } from "@/store/app";
import { useRouter } from "vue-router";

const appStore = useAppStore();
const router = useRouter();

const loading = ref(false);

const nextStep = () => {
  loading.value = true;
};
</script>
