<template lang="pug">
  section(class="flex-col-center py-20" id="best-seller")
    div(class="container mx-auto")
      h1( class="text-center mb-6 text-[30px]") BEST SELLER

      //- filters 
      nav
        ul(class="flex-center gap-14 font-[400] flex-wrap mb-5") 
          li(v-for="filter in filters" :class="{active: filter.value == filterValue}" 
          @click="filterValue = filter.value" :key="filter.name" class="cursor-pointer border-b-4 border-transparent pb-1" ) {{ filter.name }}

      LoaderComponent(v-if="isLoading")

      //- no products 
      div(v-else-if="!products.length" class="flex-center w-full min-h-[500px] grow")
        
        h2(class="text-xl") There is no products added yet !

      //- products 
      
      div(v-else class="product-container flex justify-center flex-wrap lg:p-10 p-0 gap-4")
        
        //- product Box 
        Product(v-for="product in products" :key="product.id" :product="product")
            

    //- load more 
    button( @click="productsLimit += 5" class="mt-10 border-b-2 pb-3 px-0 mx-auto cursor-pointer h-10"
      style="color: var(--primary); border-color: var(--primary)") 
      LOAD MORE
    
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

import Product from "./Product.vue";

// pinia store
import { storeToRefs } from "pinia";
import { useProductsStore } from "@/composables/useProducts";

const productsStore = useProductsStore();
const { products, isLoading } = storeToRefs(productsStore);

const productsLimit = ref<number>(10);

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

onMounted(() => {
  productsStore.getProducts(productsLimit.value);
});

watch(productsLimit, () => {
  productsStore.getProducts(productsLimit.value);
});
</script>

<style scoped>
@media (max-width: 1200px) {
  section {
    margin-top: 400px;
  }
}

@media (max-width: 800px) {
  section {
    margin-top: 390px;
  }
}

li.active,
li:hover {
  color: var(--primary);
  border-bottom-color: var(--primary);
}
</style>
