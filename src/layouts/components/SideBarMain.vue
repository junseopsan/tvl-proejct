<template>
  <aside
    class="flex flex-col overflow-y-auto bg-white px-6"
  >
    <!-- // 검색 및 분류 -->
    <div class="flex flex-col justify-start">
      <div class="flex justify-between pt-4 pb-2">
        <div class="flex items-center space-x-2">
          <div class="flex-none pb-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="20" rx="5" fill="white" />
              <path
                d="M15.8626 15.8676C15.7766 15.9522 15.6608 15.9998 15.5401 16C15.4178 15.9995 15.3003 15.9521 15.2119 15.8676L12.7242 13.3743C11.6765 14.2542 10.3294 14.6958 8.96408 14.6068C7.59872 14.5178 6.32041 13.9052 5.39578 12.8967C4.47114 11.8882 3.97157 10.5617 4.00125 9.19386C4.03093 7.82601 4.58757 6.52242 5.55508 5.55498C6.52259 4.58753 7.82626 4.03093 9.1942 4.00125C10.5621 3.97157 11.8887 4.47111 12.8973 5.39569C13.9058 6.32026 14.5185 7.59848 14.6075 8.96376C14.6965 10.329 14.2549 11.676 13.3749 12.7236L15.8626 15.2111C15.9061 15.254 15.9407 15.3051 15.9643 15.3614C15.9878 15.4178 16 15.4783 16 15.5393C16 15.6004 15.9878 15.6609 15.9643 15.7173C15.9407 15.7736 15.9061 15.8247 15.8626 15.8676ZM9.32088 13.6967C10.1865 13.6967 11.0326 13.4401 11.7523 12.9592C12.472 12.4784 13.033 11.7949 13.3642 10.9952C13.6955 10.1956 13.7821 9.31568 13.6133 8.46678C13.4444 7.61788 13.0276 6.83812 12.4155 6.2261C11.8035 5.61407 11.0236 5.19728 10.1747 5.02842C9.32573 4.85957 8.44577 4.94623 7.64607 5.27746C6.84637 5.60868 6.16286 6.16959 5.68197 6.88925C5.20107 7.60891 4.9444 8.45501 4.9444 9.32054C4.94592 10.4807 5.4075 11.5929 6.22792 12.4133C7.04834 13.2337 8.16063 13.6952 9.32088 13.6967Z"
                fill="#898C81"
              />
            </svg>
          </div>

          <nav class="flex grow text-center h-6 space-x-1 relative">
            <a
              class="hover:text-blue-500 text-gray-700 text-sm font-semibold leading-tight pb-1 px-2 border-b-2 border-blue-500 border-opacity-70"
              >전체 항목</a
            >
            <a
              class="hover:text-blue-500 text-gray-700 text-sm font-semibold leading-tight pb-1 px-2"
              >항목 분류</a
            >
          </nav>

          <!-- <div class="flex grow text-center h-5 space-x-2 relative">
                    <div class="text-gray-900 text-xs font-normal font-sans leading-tight pb-1 px-2 border-b-2 border-gray-500 border-opacity-70">전체 항목</div>
                    <div class="text-neutral-500 text-xs font-normal font-sans leading-tight pb-1 px-2">항목 분류</div>
                </div> -->
        </div>
        <div class="flex-none pb-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="20" rx="5" fill="white" />
            <path d="M10 5V15" stroke="black" />
            <path d="M5 10H10H13H15" stroke="black" />
          </svg>
        </div>
      </div>
    </div>
    <!-- // 네비게이션 -->
    <div class="flex flex-col">
      <ul role="list" class="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" class="-mx-2 space-y-1">
            <li>
              <div
                class="cursor-pointer block rounded-md py-2 pr-2 pl-10 text-sm leading-6 font-semibold text-gray-700"
                :class="[newTask ? 'bg-gray-200' : 'hover:bg-gray-300']"
                @click="clickNewTask()"
              >
                새 프로젝트
              </div>
            </li>
            <li v-for="task in appStore.taskList" :key="task.name">
              <div
                class="flex items-center justify-between space-x-2"
                @mouseover="task.current = true"
                @mouseleave="task.current = false"
              >
                <div
                  class="w-full cursor-pointer block rounded-md py-2 pr-2 pl-10 text-sm leading-6 font-semibold text-gray-700"
                  :class="[task.current ? 'bg-gray-200' : 'hover:bg-gray-300']"
                  @click="clickMenu(task)"
                >
                  {{ task.title }}
                </div>
                <dropdown-project v-if="task.current" :task="task" />
              </div>
            </li>
          </ul>
        </li>
        <li v-if="appStore.taskList?.length > 0">
          <button
            class="flex items-center justify-between w-full rounded-md py-2 pr-2 pl-10 text-sm leading-6 font-semibold bg-gray-300 text-gray-900 hover:bg-gray-200"
            :class="
              deleteLoading
                ? 'cursor-not-allowed animate-bounce'
                : 'cursor-pointer'
            "
            @click="deleteAllTask()"
          >
            <span>모두삭제</span>
          </button>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import DropdownProject from "@/modules/DropdownProject.vue";
import { useAppStore } from "@/store/app";
import { deleteTaskDb } from "@/utils/gpt";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const appStore = useAppStore();
const deleteLoading = ref(false);

const newTask = ref(false);
const clickNewTask = () => {
  appStore.task = null;
  newTask.value = true;
  appStore.taskList.map((nav) => {
    nav.current = false;
  });
  localStorage.removeItem("task");
  router.push({ name: "main" });
};

const clickMenu = (task) => {
  newTask.value = false;
  appStore.taskList.map((nav) => {
    nav.current = false;
  });
  task.current = true;
  appStore.task = task;
  localStorage.setItem("tid", task.tid);
  if (appStore.task.hasOwnProperty("current_step")) {
    router.push({ name: appStore.task.current_step });
  }
};

const deleteAllTask = async () => {
  deleteLoading.value = true;
  if (!confirm("정말 삭제하시겠습니까?")) {
    return;
  }

  appStore.taskList.map(async (task) => {
    await deleteTaskDb(task);
  });
  appStore.taskList = [];
  localStorage.removeItem("task");
  deleteLoading.value = false;
};
</script>
