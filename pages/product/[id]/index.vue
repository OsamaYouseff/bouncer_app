<template lang="pug">
  section(class="product-section container mx-auto pb-10") 
    NavigationPath
      NuxtLink(to="/" class="active cursor-pointer text-[11px] lg:text-[14px] text-[#c0c8ce]") Home
      span /
      
      NuxtLink(to="/#best-seller" class="active cursor-pointer text-[11px] lg:text-[14px] text-[#c0c8ce]"
      ) Products
      span /
      
      NuxtLink(class="text-[11px] lg:text-[14px] text-[#c0c8ce]") {{ product?.title }}
    
    LoaderComponent( v-if="isLoading" )

    div(v-else)
      ProductDetails(:product="product" :topProducts="products.filter((p) => p.id != product?.id).slice(0, 4)")
      
      //- Related Products
      div.related-product-wrapper.mt-10
        h2.text-center.text-3xl.font-medium.uppercase.mb-5 Related Products

        div(class="related-products lg:ml-0 ml-2 flex-between md:justify-center md:flex-wrap lg:overflow-x-hidden overflow-x-scroll p-8 gap-3")
         
          Product(v-for="product in products.filter((p) => p.id != product?.id).slice(0, 5)" 
          :key="product.id" :product="product" )
          

</template>

<script lang="ts" setup>
import { onMounted } from "vue";

import NavigationPath from "@/components/General/NavigationPath.vue";
import Product from "~/components/Home/Content/Product.vue";
import ProductDetails from "@/components/Product/productDetails.vue";
import LoaderComponent from "@/components/LoaderComponent.vue";
// pinia store
import { storeToRefs } from "pinia";
import { useProductsStore } from "@/composables/useProducts";

const productsStore = useProductsStore();
const { product, products, isLoading } = storeToRefs(productsStore);
const slicedProduct = products.value.slice(0, 5);

// handlers

onMounted(async () => {
  await productsStore.getAProduct(Number(useRoute().params?.id));
  await productsStore.getProducts(6);
});
</script>
