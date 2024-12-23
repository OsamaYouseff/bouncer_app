<script lang="ts" setup>
import { ref } from "vue";


const props = defineProps({
  product: {
    type: Object,
  },
});

const ratingValue = ref<number>(props.product.price % 5.5);
</script>

<template>
  <!-- product box -->
  <div @click="navigateTo(`/product/${product.id}`)"
    class="product-box flex gap-4 cursor-pointer transition flex-wrap border-[#f6f7f8] border-b-2 min-w-full sm:min-w-full min-h-[330px] rounded py-5 text-center">
    <!-- image Container -->
    <div
      class="mb-8 img-container relative flex-center rounded-md h-[270px] w-[270px] 2xl:grow-0 grow border-[#f6f7f8] border-4">
      <img class="rounded-md" :src="props.product.images[0]" alt="macbook-img" style="max-height: 270px;" />
    </div>

    <!-- Product Content -->
    <div class="content grow px-6">
      <h2 class="title mb-6 md:text-xl font-medium text-start">
        {{ props.product.title }}
      </h2>
      <div class="rating-wrapper flex gap-2 pb-2 border-b mb-2">
        <el-rate disabled allow-half v-model="ratingValue" size="small" />
        <span class="reviews text-[14px]">0 reviews</span>
        <button class="submit-review border-0 text-[14px]" style="color: var(--primary)">
          Submit a review
        </button>
      </div>
      <div class="price flex gap-2">
        <p class="curr text-[#ea4251] text-[24px]">${{ props.product.price }}</p>
        <p class="prev text-[#c0c8ce] text-[24px] line-through">${{ props.product.price + 100 }}</p>
      </div>

      <p class="dic text-start md:max-w-[570px] max-w-[370px] text-[14px] leading-7 mb-4">
        {{ props.product.description.slice(0, 229) }}
        ...
      </p>

      <div class="action-btns flex gap-4">
        <button
          class="add-to-cart border-0 text-[14px] max-h-[46px] flex gap-3 py-4 px-6 rounded-md transition bg-[#ebf6ff] hover:bg-blue-100"
          style="color: var(--primary)">
          <img src="@/assets/icons/cart_2.svg" alt="cart-icon" />
          <span>Add to cart</span>
        </button>
        <button
          class="add-to-fav border-0 text-[14px] transition max-h-[46px] bg-[#ebf6ff] hover:bg-blue-100 p-4 rounded-md"
          style="color: var(--primary)">
          <img src="@/assets/icons/heart.svg" alt="heart-icon" />
        </button>
      </div>
    </div>
  </div>
</template>
