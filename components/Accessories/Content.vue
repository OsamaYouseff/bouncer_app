<script setup lang="ts">
import Filter from "./Content/Filter.vue";
import Product from "@/components/Home/Content/Product.vue";
import Price from "./Content/Price.vue";
import Color from "./Content/Color.vue";
import Brand from "./Content/Brand.vue";
import FilterBar from "./Content/FilterBar.vue";
import Banner from "../Home/Banner.vue";

const activePage = ref<number>(1);
</script>

<template>
  <div
    class="container mx-auto flex-between gap-6"
    style="align-items: flex-start"
  >
    <div class="filter-wrapper flex-col-center gap-6">
      <Filter />
      <Price />
      <Color />
      <Brand />
      <!-- More btn -->
      <button
        class="brand-filter min-h-full rounded-md min-w-[270px] max-w-[270px] cursor-pointer"
        style="background: #f6f7f8; padding: 20px"
      >
        MORE
      </button>
    </div>
    <div class="flex-col-center gap-5">
      <Banner :maxHeight:="'340px'" />
      <FilterBar />

      <!-- Products -->
      <div class="flex-between flex-wrap gap-6 w-full mb-4">
        <Product v-for="product in 12" :key="product" :product="product" />
      </div>
      <!-- Pagination -->
      <button
        class="brand-filter min-h-full rounded-md mb-8 flex-center gap-4"
        style="background: #f6f7f8"
      >
        <button
          v-for="page in 5"
          @click="activePage = page"
          :class="activePage == page ? 'active' : ''"
          class="page-button"
        >
          {{ page }}
        </button>
      </button>
    </div>
  </div>
</template>

<style>
.banner {
  height: 400px;
}

.banner h1 {
  font-size: 55px;
}

.banner .img-container {
  height: 400px;
}

.page-button {
  width: 56px;
  height: 56px;
  border: none;
  cursor: pointer;
  color: #22262a;
}
.page-button.active {
  color: white;

  background: #22262a;
}
</style>
