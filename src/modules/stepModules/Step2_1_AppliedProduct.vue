<template>
  <!-- 평가대상 특허 선택 -->
  <div
    v-if="appStore.task.product_list?.length > 0"
    class="flex flex-col space-y-8 px-7 py-7 bg-blue-50 rounded"
  >
    <div class="space-y-3">
      <div class="text-md font-semibold text-gray-900">2.1. 적용 제품</div>
      <div class="text-sm font-semibold text-gray-500">
        평가대상특허의 적용제품(서비스)은 아래와 같습니다.
      </div>
    </div>

    <fieldset class="mt-4">
      <legend class="sr-only">Service Selection</legend>
      <div class="space-y-4">
        <div
          v-for="(product, index) in appStore.task.product_list"
          :key="'step1' + index"
          class="flex items-center"
        >
          <input
            :id="'step1' + index"
            name="service-selection"
            type="radio"
            v-model="selectedProduct"
            :value="product"
            :checked="selectedProduct === product"
            class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600 cursor-pointer"
          />
          <label
            :for="'step1' + index"
            class="ml-3 block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
            >{{ product }}</label
          >
        </div>
        <div>
          <input
            type="radio"
            name="service-selection"
            v-model="selectedProduct"
            :value="productDirectInput"
            :checked="isInArray === false"
            class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
          />
          <input
            type="text"
            class="-mt-1 ml-3 p-2 border text-sm rounded-md w-60 placeholder:text-sm"
            placeholder="적용제품 직접입력"
            v-model="productDirectInput"
            @click="selectedProduct = productDirectInput"
          />
        </div>
      </div>
    </fieldset>

    <!-- step2_2 -->
    <StepButton step="step2_1" @action1="action1" />{{ isInArray }}
  </div>

  <!-- Step2_2 비활성화 상태 -->
  <div v-else class="flex flex-col space-y-8 px-7 py-7 bg-gray-100 rounded">
    <div class="space-y-3">
      <div class="text-md font-semibold text-gray-900">2.1. 적용 제품</div>
      <div class="text-sm font-semibold text-gray-500">
        평가대상특허의 적용제품(서비스)은 아래와 같습니다.
      </div>
    </div>

    <fieldset class="mt-4">
      <legend class="sr-only">Service Selection</legend>
      <div class="space-y-4">
        <div key="step2_2_block" class="flex items-center">
          <input
            id="step2_2_block"
            name="service-selection"
            type="radio"
            :checked="selectedProduct === -1"
            class="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-600"
          />
          <label
            for="step2_2_block"
            class="ml-3 block text-sm font-medium leading-6 text-gray-900 text-opacity-60"
            >정보 생성 중</label
          >
          <!-- Input box for '직접입력' service option -->
        </div>
        <div>
          <input
            type="radio"
            name="service-selection"
            class="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
          />
          <input
            type="text"
            class="-mt-1 ml-3 p-2 border text-sm rounded-md w-60 placeholder:text-sm disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
            placeholder="적용제품 직접입력"
            disabled=""
          />
        </div>
      </div>
    </fieldset>

    <div class="self-stretch justify-end items-end gap-2 inline-flex pt-4">
      <button
        disabled=""
        type="button"
        class="rounded-md px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset disabled:cursor-not-allowed disabled:bg-white disabled:text-gray-900 disabled:ring-gray-300"
      >
        아니요
      </button>

      <button
        disabled=""
        type="button"
        class="rounded-md px-3 py-2 text-sm font-semibold shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-white disabled:ring-gray-200"
      >
        예, 선택합니다
      </button>
    </div>
  </div>
</template>

<script setup>
import { mainprocess_send_step } from "@/api";
import StepButton from "@/modules/StepButton.vue";
import { useAppStore } from "@/store/app";
import { checkStepObj, deleteStep, updateTask } from "@/utils/fsdb";
import { computed, onMounted, ref } from "vue";

const appStore = useAppStore();
const selectedProduct = ref("");
const productDirectInput = ref("");

const isInArray = computed(() => {
  return appStore.task.product_list?.some(
    (product) => selectedProduct.value === product
  );
});

onMounted(() => {
  if (appStore.task.hasOwnProperty("product")) {
    selectedProduct.value = appStore.task.product;
    if (isInArray.value === false) {
      productDirectInput.value = appStore.task.product;
    }
  } else {
    if (appStore.task.hasOwnProperty("product_list")) {
      selectedProduct.value = appStore.task.product_list[0];
    } else {
      selectedProduct.value = "";
    }
  }
});

const action1 = async (isTrue) => {
  if (isTrue) {
    let selectedTemp = "";
    if (isInArray.value === false) {
      selectedTemp = productDirectInput.value;
    } else {
      selectedTemp = selectedProduct.value;
    }
    if (appStore.task.product !== selectedTemp) {
      const stepsTodo = ["step4_1_1", "step4_1_2"];
      stepsTodo.forEach(async (step) => {
        const isStepObj = await checkStepObj(appStore.task.tid, step);
        console.log(step, isStepObj);
        if (isStepObj) await deleteStep(appStore.task.tid, step);
        await mainprocess_send_step({
          tid: appStore.task.tid,
          sid: step,
        });
      });
    }
    await updateTask(appStore.task, {
      product: selectedTemp,
    });
  }
  console.log(appStore.task.product);
};
</script>
@/fireApi
