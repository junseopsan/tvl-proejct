<template>
  <div class="flex items-center grow md:ml-[80px] text-base">
    <nav
      class="hidden md:flex md:gap-x-11 md:text-sm md:font-semibold md:leading-6 md:text-gray-700"
    >
      <a
        v-for="(item, itemIdx) in navigation"
        :key="itemIdx"
        :href="item.href"
        >{{ item.name }}</a
      >
    </nav>
  </div>
</template>

<script setup>
const navigation = [
  { name: "Home", href: "#" },
  { name: "Invoices", href: "#" },
  { name: "Clients", href: "#" },
  { name: "Expenses", href: "#" },
];
</script>
