<script setup>
import SideBarMain from "@/modules/SideBarMain.vue";
import UserMenu from "@/modules/UserMenu.vue";
import { useAppStore } from "@/store/app";
import { getTaskList } from "@/utils/fsdb";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot
} from "@headlessui/vue";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon
} from "@heroicons/vue/24/outline";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const appStore = useAppStore();
const router = useRouter();
const sidebarOpen = ref(false);

onMounted(async () => {
  appStore.taskList = await getTaskList();
  // appStore.task = localStorage.getItem("task")
  //   ? JSON.parse(localStorage.getItem("task"))
  //   : appStore.taskList[0];
  // appStore.taskList.map((nav) => {
  //   if (nav.tid == appStore.task.tid) nav.current = true;
  //   else nav.current = false;
  // });
});

const clickMenu = (item) => {
  navigation.value.map((nav) => {
    nav.current = false;
  });
  item.current = true;
  router.push({ name: item.name });
};

const navigation = ref([
  { title: "기술가치평가", name: "main", current: true },
  { title: "요약", name: "summary", current: false },
  { title: "특허번역", name: "summary", current: false },
  { title: "특허조사보고서", name: "summary", current: false },
]);
</script>

<template>
  <div class="min-h-full">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-50 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div
                  class="absolute left-full top-0 flex w-16 justify-center pt-5"
                >
                  <button
                    type="button"
                    class="-m-2.5 p-2.5"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <SideBarMain />
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
    >
      <SideBarMain />
    </div>

    <div class="lg:pl-72">
      <div class="sticky top-0 z-40 lg:mx-auto lg:px-0">
        <div
          class="flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none"
        >
          <button
            type="button"
            class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            @click="sidebarOpen = true"
          >
            <span class="sr-only">Open sidebar</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>

          <!-- Separator -->
          <div class="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

          <div
            class="flex flex-1 justify-between gap-x-4 self-stretch lg:gap-x-6"
          >
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
            </nav>

            <div>
              <!-- <TopBar /> -->
            </div>
            <div class="flex items-center gap-x-4 lg:gap-x-6 lg:pr-8">
              <button
                type="button"
                class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
              >
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>

              <!-- Separator -->
              <div
                class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
                aria-hidden="true"
              />

              <UserMenu />
            </div>
          </div>
        </div>
      </div>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
