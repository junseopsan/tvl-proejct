<template>
  <div
    class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4"
  >
    <CompanyLogo />
    <nav class="flex-none px-4 sm:px-6 lg:px-0">
      <ul
        role="list"
        class="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col"
      >
        <li v-for="item in secondaryNavigation" :key="item.name">
          <a
            :href="item.href"
            :class="[
              item.current
                ? 'bg-gray-50 text-indigo-600'
                : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
              'group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold',
            ]"
          >
            <component
              :is="item.icon"
              :class="[
                item.current
                  ? 'text-indigo-600'
                  : 'text-gray-400 group-hover:text-indigo-600',
                'h-6 w-6 shrink-0',
              ]"
              aria-hidden="true"
            />
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  BellIcon,
  CreditCardIcon,
  CubeIcon,
  FingerPrintIcon,
  UserCircleIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import CompanyLogo from "@/modules/CompanyLogo.vue";

const secondaryNavigation = [
  { name: "General", href: "#", icon: UserCircleIcon, current: true },
  { name: "Security", href: "#", icon: FingerPrintIcon, current: false },
  { name: "Notifications", href: "#", icon: BellIcon, current: false },
  { name: "Plan", href: "#", icon: CubeIcon, current: false },
  { name: "Billing", href: "#", icon: CreditCardIcon, current: false },
  { name: "Team members", href: "#", icon: UsersIcon, current: false },
];
</script>
