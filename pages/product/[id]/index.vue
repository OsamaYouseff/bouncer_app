<template>
  <section class="product-section container mx-auto py-10">
    <NavigationPath />
    <ProductDetails />
    <!-- Related Products -->
    <div class="related-product-wrapper mt-10">
      <h2 class="text-center text-3xl font-medium uppercase mb-5">
        Related Products
      </h2>
      <div
        class="related-products lg:ml-0 ml-2 flex-between md:justify-center md:flex-wrap lg:overflow-x-hidden overflow-x-scroll p-8 gap-3"
      >
        <Product v-for="product in 5" :key="product + 100" :product="product" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import NavigationPath from "@/components/General/NavigationPath.vue";
import Product from "~/components/Home/Content/Product.vue";
</script>
