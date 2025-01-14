<template>
  <section class="product-section container mx-auto pb-10">
    <NavigationPath>
      <NuxtLink
        to="/"
        class="active cursor-pointer text-[11px] lg:text-[14px] text-[#c0c8ce]"
        >Home</NuxtLink
      >
      <span>/</span>
      <NuxtLink
        to="/#best-seller"
        class="active cursor-pointer text-[11px] lg:text-[14px] text-[#c0c8ce]"
      >
        Products
      </NuxtLink>
      <span>/</span>
      <NuxtLink class="text-[11px] lg:text-[14px] text-[#c0c8ce]">{{
        product?.title
      }}</NuxtLink>
    </NavigationPath>

    <LoaderComponent v-if="isLoading" />

    <div v-else>
      <ProductDetails
        :product="product"
        :topProducts="products.filter((p) => p.id != product?.id).slice(0, 4)"
      />

      <!-- Related Products -->
      <div class="related-product-wrapper mt-10">
        <h2 class="text-center text-3xl font-medium uppercase mb-5">
          Related Products
        </h2>
        <div
          class="related-products lg:ml-0 ml-2 flex-between md:justify-center md:flex-wrap lg:overflow-x-hidden overflow-x-scroll p-8 gap-3"
        >
          <Product
            v-for="product in products
              .filter((p) => p.id != product?.id)
              .slice(0, 5)"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import NavigationPath from "@/components/General/NavigationPath.vue";
import Product from "~/components/Home/Content/Product.vue";
import { onMounted } from "vue";
// pinia store
import { storeToRefs } from "pinia";
import { useProductsStore } from "@/composables/useProducts";
import { useRouter } from "vue-router";

const productsStore = useProductsStore();
const { product, products, isLoading } = storeToRefs(productsStore);
const slicedProduct = products.value.slice(0, 5);

// handlers

onMounted(async () => {
  await productsStore.getAProduct(useRoute().params?.id);
  await productsStore.getProducts(6);
});
</script>
