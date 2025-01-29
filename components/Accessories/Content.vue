<template lang="pug">
  
  div(class="container relative mx-auto flex-between gap-12 mt-5" style="align-items: flex-start")
    
    div(class="filter-wrapper hidden lg:flex flex-col-center gap-6")
      AccessoriesFilter 
      Price 
      Color 
      Brand 
      //-  More btn 
      button(class="brand-filter min-h-full rounded-md min-w-[270px] max-w-[270px] cursor-pointer"
      style="background: #f6f7f8; padding: 20px") MORE


    div(class="flex-col-center gap-5 overflow-hidden")
      Banner(:maxHeight:="'340px'")
      //- Filter Bar 
      
      FilterBar(@update:viewOption="changeActiveView" :handleUpdateLimit="handleUpdateLimit" :activeView="activeView")
        //- Drawer 
        div.drawer
          button(class="bg-white text-[14px] z-auto h-[40px] px-3 border-[1px] border-[#f6f7f8] rounded-md"
                @click="handleOpenDrawer")
            More Filters
        
          GeneralDrawer(:showDrawer="showDrawer" @update:closeDrawer="showDrawer = false")
            div(class="grow flex-col-center gap-4 items-center")
              AccessoriesFilter 
              Price 
              Color 
              Brand
              //- More btn 
              button(class="brand-filter min-h-full rounded-md min-w-[270px] max-w-[270px] cursor-pointer"
                    style="background: #f6f7f8; padding: 20px") MORE


      LoaderComponent(v-if="isLoading") 

      //- Products
      div(v-else-if="!products.length" class="flex-center w-full min-h-[500px] grow")
        h2(class="text-xl") There is no products added yet !

      div(v-else class="mb-4")
       
        //- List View
        div(v-if="activeView == 'list'" class="lg:ml-3 ml-1 flex md:justify-center md:flex-wrap lg:overflow-x-hidden overflow-x-scroll p-8 gap-10") 
          
          listViewProduct( v-for="product in products" :key="product.id" :product="product")
      
        //- Grid View
        div(v-else class="product-container px-0.5 flex justify-center flex-wrap lg:p-8 p-0 gap-3")
          
          Product(v-for="product in products" :key="product.id" :product="product")

      //-  Pagination 
      PaginationBar(:activePage="activePage" @update:active-page="handleActivePage")
       
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
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

// pinia store
import { storeToRefs } from "pinia";
import { useProductsStore } from "@/composables/useProducts";

const productsStore = useProductsStore();
const { products, isLoading } = storeToRefs(productsStore);

// states

const productsLimit = ref<number>(8);
const activeView = ref<string>("grid");
const activePage = ref<number>(1);
const showDrawer = ref<boolean>(false);

// handlers
const changeActiveView = (newView: string) => {
  activeView.value = newView;
};
const handleUpdateLimit = (limit: number): void => {
  console.log(limit);
  productsStore.getProducts(limit, activePage.value * limit);
};

const handleActivePage = (page: number): void => {
  console.log("Test page value", page);

  activePage.value = page;
};

const handleOpenDrawer = (): void => {
  showDrawer.value = true;
};

watchEffect(() => {
  // console.log(activeView)
});

watch(
  () => activePage.value,
  () => {
    productsStore.getProducts(
      productsLimit.value,
      activePage.value * productsLimit.value
    );
  }
);

onMounted(() => {
  productsStore.getProducts(
    productsLimit.value,
    activePage.value * productsLimit.value
  );
});
</script>

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

.drawer {
  /* position: fixed; */
  display: none !important;
  top: 5px;
  left: 5px;
  z-index: 9999;
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
