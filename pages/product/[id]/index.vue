<template>
  <section class="product-section container mx-auto pb-10">
    <NavigationPath>
      <NuxtLink to="/home" class="active cursor-pointer  text-[11px] lg:text-[14px] text-[#c0c8ce]">Home</NuxtLink>
      <span>/</span>
      <NuxtLink to="/accessories" class="active cursor-pointer  text-[11px] lg:text-[14px] text-[#c0c8ce]">
        Accessories
      </NuxtLink>
      <span>/</span>
      <NuxtLink class="text-[11px] lg:text-[14px] text-[#c0c8ce]">Beat Solo2 Ear Headphones - black</NuxtLink>
    </NavigationPath>
    <ProductDetails />

    <!-- Related Products -->
    <div class="related-product-wrapper mt-10">
      <h2 class="text-center text-3xl font-medium uppercase mb-5">
        Related Products
      </h2>
      <div
        class="related-products lg:ml-0 ml-2 flex-between md:justify-center md:flex-wrap lg:overflow-x-hidden overflow-x-scroll p-8 gap-3">
        <Product v-for="product in 5" :key="product + 100" :product="product" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import NavigationPath from "@/components/General/NavigationPath.vue";
import Product from "~/components/Home/Content/Product.vue";
</script>
