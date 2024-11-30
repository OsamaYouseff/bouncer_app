<script setup lang="ts">
import type { toDisplayString } from "vue";
import Product from "./Product.vue";

const filterValue = ref<string>("All");

const filters = [
  {
    name: "All",
    value: "All",
  },
  {
    name: "Mac",
    value: "Mac",
  },
  {
    name: "iPhone",
    value: "iPhone",
  },
  {
    name: "iPad",
    value: "iPad",
  },
  {
    name: "iPod",
    value: "iPod",
  },
  {
    name: "Accessories",
    value: "Accessories",
  },
];
</script>

<template>
  <section class="min-h-screen flex-col-center py-20 mb-10">
    <div class="container mx-auto">
      <h1 class="text-center mb-6 text-[30px]">BEST SELLER</h1>
      <!-- filters -->
      <nav>
        <ul class="flex-center gap-14 font-[400]">
          <li
            v-for="filter in filters"
            :key="filter.name"
            :class="{ active: filter.value == filterValue }"
            @click="filterValue = filter.value"
            class="cursor-pointer border-b-4 border-transparent pb-1"
          >
            {{ filter.name }}
          </li>
        </ul>
      </nav>

      <!-- products -->
      <div class="product-container flex-center flex-wrap p-8 gap-10">
        <!-- product Box -->
        <Product v-for="product in 8" :key="product" :product="product" />
      </div>
    </div>
    <button
      class="more-btn text-center mt-10 border-b-2 px-0 mx-auto cursor-pointer"
      style="color: var(--primary); border-color: var(--primary)"
    >
      LOAD MORE
    </button>
  </section>
</template>

<style scoped>
li.active,
li:hover {
  color: var(--primary);
  border-bottom-color: var(--primary);
}
</style>
