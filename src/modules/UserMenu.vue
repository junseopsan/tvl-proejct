<template>
  <Menu as="div" class="relative">
    <MenuButton class="-m-1.5 flex items-center p-1.5">
      <span class="sr-only">Open user menu</span>
      <!-- <img
        class="h-8 w-8 rounded-full bg-gray-50"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      /> -->
      <span class="hidden lg:flex lg:items-center">
        <span
          class="ml-4 text-sm font-semibold leading-6 text-gray-900"
          aria-hidden="true"
          >{{ user.displayName || user.email }}</span
        >
        <ChevronDownIcon
          class="ml-2 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </span>
    </MenuButton>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
      >
        <MenuItem
          v-for="item in userNavigation"
          :key="item.name"
          v-slot="{ active }"
        >
          <a
            :href="item.href"
            :class="[
              active ? 'bg-gray-50' : '',
              'block px-3 py-1 text-sm leading-6 text-gray-900 hover:bg-slate-100',
            ]"
            >{{ item.name }}</a
          >
        </MenuItem>
        <button
          v-if="user.email === 'kclee@leeon.kr'"
          class="px-3 py-1 text-sm leading-6 text-gray-900 hover:bg-slate-100"
          @click="deleteTasks"
        >
          모든파일삭제
        </button>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { getAuth } from "firebase/auth";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import { deleteAllTasks } from "@/utils/fsdb";

const auth = getAuth();
const user = auth.currentUser;

const userNavigation = [
  { name: "Your profile", href: "/mypage/profile" },
  { name: "Sign out", href: "/signout" },
];

const deleteTasks = () => {
  if (confirm("모든 파일을 삭제하시겠습니까?")) {
    deleteAllTasks();
  } else {
    console.log("cancel");
  }
};
</script>
