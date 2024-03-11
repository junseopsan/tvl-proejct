<template>
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
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAppStore } from "@/store/app";
import { updateTask } from "@/utils/fsdb";

const appStore = useAppStore();
const directInput = ref("");
const directInputText = ref("");
const selectedFieldOption = ref("");

const isInArray = computed(() => {
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
</script>
