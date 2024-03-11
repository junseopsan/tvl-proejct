<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="flex items-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
      >
        <span class="sr-only">Open options</span>
        <EllipsisVerticalIcon class="h-5 w-5" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <a
              href="#"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-xs',
              ]"
              >{{ currentTime }}</a
            >
          </MenuItem>
          <!-- <MenuItem v-slot="{ active }">
            <a
              href="#"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm',
              ]"
              >수정</a
            >
          </MenuItem> -->
          <MenuItem v-slot="{ active }">
            <button
              class="w-full text-left"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm',
              ]"
              @click="deleteTaskFromSidebar"
            >
              삭제
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { EllipsisVerticalIcon } from "@heroicons/vue/20/solid";
import { ref, computed } from "vue";
import { useAppStore } from "@/store/app";
import { deleteTaskDb } from "@/utils/gpt";
import { getTaskList, deleteSteps } from "@/utils/fsdb";

const appStore = useAppStore();
const deleteLoading = ref(false);

const props = defineProps({
  task: Object,
});

const currentTime = computed(() => {
  return new Date(props.task.created_at).toLocaleString();
});

const deleteTaskFromSidebar = async () => {
  deleteLoading.value = true;
  if (!confirm("정말 삭제하시겠습니까?")) {
    return;
  }
  console.log("삭제할 task의 assistant_id : ", props.task.assistant_id);
  await deleteTaskDb(props.task);

  appStore.taskList = await getTaskList();
  appStore.task = null;
  deleteLoading.value = false;
};
</script>
