<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  product: {
    type: Object,
  },
});

const ratingValue = ref<number>(props.product.price % 5.5);

</script>
<template>
  <!-- product Box -->
  <div @click="navigateTo(`/product/${product.id}`)"
    class="product-box relative cursor-pointer transition border-gray-300 border max-w-[270px] min-w-[270px] h-[379px] rounded flex-col-center px-5 text-center">

    <!-- hot -->
    <div class="hot absolute text-white px-2 py-0.5 rounded bg-[#ff4857] top-2 left-2"
      :class="{ hidden: product % 3 != 0 }">
      HOT
    </div>

    <!-- Action Box -->
    <div
      class="action w-full h-[270px] absolute top-0 left-1/2 transform -translate-x-1/2 flex-center gap-2 bg-[#ffffff9e]">
      <img src="@/assets/icons/fav.svg" alt="sale-img" />
      <img src="@/assets/icons/cart2.svg" alt="new-img" />
    </div>

    <img class="mb-8 mt-1 rounded-md" :src="props.product.images[0]" alt="macbook-img" />
    <p class="title mb-6 text-sm">{{ props.product.title.slice(0, 30) }}</p>
    <div class="rating">
      <el-rate disabled v-model="ratingValue" size="small" />
    </div>
    <div class="price flex-center gap-2">
      <p class="curr text-[#ea4251]">${{ props.product.price }}</p>
      <p class="prev text-[#c0c8ce] line-through">${{ props.product.price + 100 }}</p>
    </div>
  </div>
</template>
<style>
.product-box .action {
  scale: 0;
}

.product-box:hover .action {
  scale: 1;
}

.product-box .action img {
  border: 2px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  max-height: 228px;
}

.product-box .action img:hover {
  border-color: var(--primary);
}
</style>
