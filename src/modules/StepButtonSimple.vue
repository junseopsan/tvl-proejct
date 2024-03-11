<template>
  <div class="text-right">
    <div class="self-stretch justify-end items-center gap-2 inline-flex pt-4">
      <button
        type="button"
        @click="btnAction(false)"
        class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        아니요
      </button>

      <button
        type="button"
        @click="btnAction(true)"
        class="w-16 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
      >
        <div>
          {{ btnMsg }}
        </div>
      </button>
    </div>
    <div v-if="errorMsg" class="text-xs text-red-500 mt-3 mr-2">
      {{ errorMsg }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const errorMsg = ref("");
const btnMsg = ref("");

const props = defineProps({
  small: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["action1", "action2"]);

onMounted(async () => {
  btnMsg.value = await getBtnMsg();
});

const getBtnMsg = async () => {
  return props.small ? "실행" : "예, 선택합니다.";
};

const btnAction = async (isTrue) => {
  emit("action1", isTrue);
  return;
};
</script>
