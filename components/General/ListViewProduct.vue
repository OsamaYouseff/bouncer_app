<script lang="ts" setup>
const props = defineProps({
  product: {
    type: Number,
    default: 1,
  },
});

const ratingValue = ref<number>(4.5);
</script>

<template>
  <!-- product box -->
  <div
    @click="navigateTo(`/product/${product}`)"
    class="product-box flex gap-4 cursor-pointer transition flex-wrap border-[#f6f7f8] border-b-2 min-w-full sm:min-w-full min-h-[330px] rounded py-5 text-center"
  >
    <div
      class="img-container relative flex-center h-[270px] w-[270px] lg:grow-0 grow border-[#f6f7f8] border-4"
    >
      <img class="mb-8" src="@/assets/images/laptop.png" alt="macbook-img" />
    </div>
    <div class="content grow px-6">
      <h2 class="title mb-6 md:text-xl font-medium text-start">
        Beat Solo2 Ear Headphones - black
      </h2>
      <div class="rating-wrapper flex gap-2 pb-2 border-b mb-2">
        <el-rate disabled allow-half v-model="ratingValue" size="small" />
        <span class="reviews text-[14px]">0 reviews</span>
        <button
          class="submit-review border-0 text-[14px]"
          style="color: var(--primary)"
        >
          Submit a review
        </button>
      </div>
      <div class="price flex gap-2">
        <p class="curr text-[#ea4251] text-[24px]">$499</p>
        <p class="prev text-[#c0c8ce] text-[24px] line-through">$599</p>
      </div>

      <p
        class="dic text-start md:max-w-[570px] max-w-[370px] text-[14px] leading-7 mb-4"
      >
        Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et
        mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend
        laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor
        ...
      </p>

      <div class="action-btns flex gap-4">
        <button
          class="add-to-cart border-0 text-[14px] max-h-[46px] flex gap-3 py-4 px-6 rounded-md transition bg-[#ebf6ff] hover:bg-blue-100"
          style="color: var(--primary)"
        >
          <img src="@/assets/icons/cart_2.svg" alt="cart-icon" />
          <span>Add to cart</span>
        </button>
        <button
          class="add-to-fav border-0 text-[14px] transition max-h-[46px] bg-[#ebf6ff] hover:bg-blue-100 p-4 rounded-md"
          style="color: var(--primary)"
        >
          <img src="@/assets/icons/heart.svg" alt="heart-icon" />
        </button>
      </div>
    </div>
  </div>
</template>
