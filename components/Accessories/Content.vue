<script setup lang="ts">
import { ref, watchEffect } from "vue";
import Product from "@/components/Home/Content/Product.vue";
import Price from "./Content/Price.vue";
import Color from "./Content/Color.vue";
import Brand from "./Content/Brand.vue";
import FilterBar from "./Content/FilterBar.vue";
import Banner from "../Home/Banner.vue";
import AccessoriesFilter from "./Content/AccessoriesFilter.vue";
import ListViewProduct from "../General/ListViewProduct.vue";
import Drawer from "../General/Drawer.vue";
import PaginationBar from "@/components/General/PaginationBar.vue";

const activeView = ref<string>("grid");


const changeActiveView = (newView: string) => {
  activeView.value = newView;
}


watchEffect(() => {
  // console.log(activeView)
})


</script>

<template>
  <div class="container relative mx-auto flex-between gap-12 " style="align-items: flex-start">

    <Drawer :drawerBtnTitle="'Filter'">
      <div class="grow flex-col-center gap-4 items-center">
        <AccessoriesFilter />
        <Price />
        <Color />
        <Brand />

        <!-- More btn -->
        <button class="brand-filter min-h-full rounded-md min-w-[270px] max-w-[270px] cursor-pointer"
          style="background: #f6f7f8; padding: 20px">
          MORE
        </button>
      </div>

    </Drawer>

    <div class=" filter-wrapper hidden lg:flex flex-col-center gap-6">
      <AccessoriesFilter />
      <Price />
      <Color />
      <Brand />
      <!-- More btn -->
      <button class="brand-filter min-h-full rounded-md min-w-[270px] max-w-[270px] cursor-pointer"
        style="background: #f6f7f8; padding: 20px">
        MORE
      </button>
    </div>


    <div class="flex-col-center gap-5 overflow-hidden">
      <Banner :maxHeight:="'340px'" />
      <FilterBar @update:viewOption="changeActiveView" :activeView="activeView" />

      <!-- Products -->
      <div v-if="activeView == 'list'"
        class=" lg:ml-3 ml-1 flex md:justify-center md:flex-wrap lg:overflow-x-hidden overflow-x-scroll p-8 gap-10">
        <listViewProduct v-for="product in 6" :key="product" :product="product" />
      </div>
      <div v-else
        class="product-container lg:ml-0 ml-5 flex md:justify-center md:flex-wrap lg:overflow-x-hidden overflow-x-scroll p-8 gap-3">
        <Product v-for="product in 12" :key="product + 100" :product="product" />
      </div>

      <!-- Pagination -->
      <PaginationBar />
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

@media (max-width: 768px) {
  .drawer {
    display: block !important;
  }

  .filter-wrapper {
    display: none !important;
  }
}
</style>
