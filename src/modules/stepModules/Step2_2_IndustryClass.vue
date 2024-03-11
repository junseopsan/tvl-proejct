<template>
  <!-- 업종 분류코드 선택 -->
  <div class="flex flex-col space-y-8 px-7 py-7 bg-blue-50 rounded">
    <div class="space-y-3">
      <div class="text-md font-semibold text-gray-900">2.2. 업종 분류</div>
      <div class="text-sm font-semibold text-gray-500">
        평가대상 특허의 업종분류코드(표준산업분류)는 아래와 같습니다.
      </div>
    </div>

    <fieldset class="mt-4">
      <legend class="sr-only">field Code Selection</legend>
      <div class="space-y-4">
        <div
          v-for="(fieldOption, index) in appStore.task['세부분류']"
          :key="index"
          class="flex items-center"
        >
          <input
            :id="fieldOption.code"
            name="field-selection"
            type="radio"
            v-model="selectedFieldOption"
            :value="fieldOption.code"
            :checked="selectedFieldOption === fieldOption.code"
            class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label
            :for="fieldOption.code"
            class="ml-3 block text-sm font-medium leading-6 text-gray-900"
            >{{ fieldOption.code }} : {{ fieldOption.text }}</label
          >
        </div>
        <div class="flex items-center">
          <input
            type="radio"
            name="field-selection"
            v-model="selectedFieldOption"
            :value="directInput"
            :checked="isInArray === false"
            class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
          />
          <div class="flex items-center space-x-3">
            <input
              type="text"
              class="-mt-1 ml-3 p-2 border text-sm rounded-md w-1/3 placeholder:text-sm"
              placeholder="업종코드"
              v-model="directInput"
              @click="selectedFieldOption = directInput"
            />
            <input
              type="text"
              class="-mt-1 ml-3 p-2 border text-sm rounded-md w-2/3 placeholder:text-sm"
              placeholder="업종설명"
              v-model="directInputText"
              @click="selectedFieldOption = directInputText"
            />
          </div>
        </div>
      </div>
    </fieldset>

    <StepButton step="step2_2" @action1="action1" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useAppStore } from "@/store/app";
import { useRouter } from "vue-router";
import StepButton from "@/modules/StepButton.vue";
import { updateTask } from "@/utils/fsdb";

const appStore = useAppStore();
const router = useRouter();
const directInput = ref("");
const directInputText = ref("");
const selectedFieldOption = ref("");

const isInArray = computed(() => {
  if (!appStore.task.hasOwnProperty("세부분류")) return false;

  return appStore.task["세부분류"].some(
    (field) => field.code === selectedFieldOption.value
  );
});

onMounted(() => {
  if (appStore.task.hasOwnProperty("product_code")) {
    selectedFieldOption.value = appStore.task.product_code;
    if (isInArray.value === false) {
      directInput.value = appStore.task.product_code;
      directInputText.value = appStore.task.product_code_text;
    }
  } else {
    if (appStore.task.hasOwnProperty("세부분류")) {
      selectedFieldOption.value = appStore.task["세부분류"][0];
    } else {
      selectedFieldOption.value = "";
    }
  }
});

const action1 = async (isTrue) => {
  if (isTrue) {
    if (isInArray.value === false) {
      await updateTask(appStore.task, {
        product_code: directInput.value,
        product_code_text: directInputText.value,
      });
    } else {
      await updateTask(appStore.task, {
        product_code: selectedFieldOption.value,
        product_code_text: appStore.task.세부분류.find(
          (field) => field.code === selectedFieldOption.value
        ).text,
      });
    }
    console.log(appStore.task.product_code, appStore.task.product_code_text);
    router.push({ name: "step3" });
  }
};
</script>
