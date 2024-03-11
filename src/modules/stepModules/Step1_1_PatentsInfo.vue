<template>
  <div class="flex flex-col space-y-8 px-7 py-7 bg-blue-50 rounded">
    <div class="space-y-3">
      <div class="text-md font-semibold text-gray-900">1.1. 특허 정보</div>
      <div class="text-sm font-semibold text-gray-500">
        조회된 평가대상특허의 정보는 아래와 같습니다.
      </div>
    </div>

    <table class="text-gray-500 text-sm font-normal leading-tight">
  <col class="w-[10px]">
  <col class="w-[150px]">
  <col>
  <tr>
    <td style="vertical-align: top;"><li></li></td>
    <td style="vertical-align: top;">발명의 명칭</td>
    <td class="pb-2" style="vertical-align: top;">{{ appStore.task.title }}</td>
  </tr>  
  <tr>
    <td style="vertical-align: top;"><li></li></td>
    <td style="vertical-align: top;">특허권자</td>
    <td class="pb-2" style="vertical-align: top;">{{ appStore.task.assignee }}</td>
  </tr>  
  <tr>
    <td style="vertical-align: top;"><li></li></td>
    <td style="vertical-align: top;">출원번호</td>
    <td class="pb-2" style="vertical-align: top;">{{ appStore.task.applicationNumber }}</td>
  </tr>  
  <tr>
    <td style="vertical-align: top;"><li></li></td>
    <td style="vertical-align: top;">출원일자</td>
    <td class="pb-2" style="vertical-align: top;">{{ appStore.task.applicationDate }}</td>
  </tr>  
  <tr>
    <td style="vertical-align: top;"><li></li></td>
    <td style="vertical-align: top;">공개번호</td>
    <td class="pb-2" style="vertical-align: top;">{{ appStore.task.publicationNumber }}</td>
  </tr>  
  <tr>
    <td style="vertical-align: top;"><li></li></td>
    <td style="vertical-align: top;">공개일자</td>
    <td class="pb-2" style="vertical-align: top;">{{ appStore.task.publicationDate }}</td>
  </tr>  
  <tr v-if="appStore.task.grantNumber?.length > 0">
    <td style="vertical-align: top;"><li></li></td>
    <td style="vertical-align: top;">등록번호</td>
    <td class="pb-2" style="vertical-align: top;">{{ appStore.task.grantNumber }}</td>
  </tr>  
  <tr v-if="appStore.task.grantDate?.length > 0">
    <td style="vertical-align: top;"><li></li></td>
    <td style="vertical-align: top;">등록일자</td>
    <td class="pb-2" style="vertical-align: top;">{{ appStore.task.grantDate }}</td>
  </tr>  
  <tr>
    <td style="vertical-align: top;"><li></li></td>
    <td style="vertical-align: top;">존속기간(예상)만료일</td>
    <td class="pb-2" style="vertical-align: top;">{{ appStore.task.expirationDate }}</td>
  </tr>  
</table>



    <div class="text-gray-500 text-sm font-normal font-sans leading-tight">
      이 특허를 평가대상 특허로 선택 하시겠습니까?
    </div>

    <div class="self-stretch justify-end items-end gap-2 inline-flex">
      <button
        type="button"
        @click="setValuationTarget(false)"
        class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        아니요
      </button>

      <button
        type="button"
        @click="setValuationTarget(true)"
        class="rounded-md w-36 bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
      >
        <div
          v-if="loading"
          class="mx-auto h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"
        ></div>
        <div v-else>예, 선택합니다</div>
      </button>
    </div>
    <div
      v-if="errorDialog"
      class="self-stretch justify-end items-end gap-2 inline-flex"
    >
      {{ errorMsg }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAppStore } from "@/store/app";
import { updateTask } from "@/utils/fsdb";
import { deleteTaskDb } from "@/utils/gpt";
import { mainprocess_send_steps } from "@/api";
import { useRouter } from "vue-router";

const router = useRouter();
const appStore = useAppStore();
const loading = ref(false);
const errorMsg = ref("");
const errorDialog = ref(false);

const setValuationTarget = async (isTrue) => {
  loading.value = true;
  updateTask(appStore.task, {
    confirmPatentinfo: true,
  });

  if (isTrue) {
    if (appStore.task.confirmPatentinfo) {
      loading.value = false;
      errorMsg.value = "이미 선택된 특허입니다.";
      errorDialog.value = true;
      setTimeout(() => {
        errorDialog.value = false;
      }, 3000);
      return;
    }
    loading.value = false;
  } else {
    deleteTaskDb(appStore.task);
    appStore.task = null;
    appStore.cpcInfo = null;
    router.push({ name: "main" });
  }
};
</script>
