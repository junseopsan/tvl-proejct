<template>
  <!-- Top-bar Menu -->
  <nav class="flex flex-1 items-center">
    <ul role="list" class="flex flex-1 gap-y-7">
      <li>
        <ul role="list" class="flex -mx-2">
          <li v-for="item in navigation" :key="item.name">
            <div
              v-if="!item.children"
              :href="item.href"
              class="cursor-pointer"
              :class="[
                'hover:text-blue-500',
                'block rounded-md py-2 pr-2 pl-10 leading-6 text-sm font-semibold text-gray-700',
              ]"
              @click="clickMenu(item)"
            >
              {{ item.title }}
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <div class="w-96">
      <div class="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          class="bg-green-500 h-2.5 rounded-full"
          :style="`width: ${progressCal}%`"
        ></div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { watch, ref } from "vue";
import { useRouter } from "vue-router";
import { getStepNum } from "@/utils/fsdb";
import { useAppStore } from "@/store/app";

const router = useRouter();
const appStore = useAppStore();

const clickMenu = (item) => {
  navigation.value.map((nav) => {
    nav.current = false;
  });
  item.current = true;
  router.push({ name: item.name });
};

const navigation = ref([
  { title: "기술가치평가", name: "main", current: true },
  // { title: "요약", name: "summary", current: false },
  // { title: "특허번역", name: "summary", current: false },
  // { title: "특허조사보고서", name: "summary", current: false },
]);

const progressCal = ref(0);

watch(
  () => appStore.task,
  async () => {
    // appStore.task의 stepNum 들의 status 값이 completed인 것들의 개수를 구한다.
    progressCal.value = await getStepNum(appStore.task.tid);
  }
);
</script>
