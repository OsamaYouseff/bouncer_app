<script setup lang="ts">
import Product from "../Home/Content/Product.vue";
</script>

<template>
  <sidebar class="min-w-[270px]">
    <!-- Best Seller -->
    <div class="min-h-[428px] mb-4">
      <p class="grow text-[18px] text-[#475669] uppercase text-start">
        Best Sellers
      </p>
      <el-carousel
        trigger="click"
        pause-on-hover
        class="carousel rounded-md"
        height="385px"
      >
        <el-carousel-item v-for="product in 4" :key="product + 100">
          <Product :product="product" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- section box -->
    <div
      class="section-box bg-[#c0c8ce] z-20 relative flex-between w-[270px] h-[408px]"
    >
      <div class="bg-layer w-full h-full absolute">
        <div class="text z-30 pt-6 pl-6">
          <h2 class="mb-4 text-2xl font-bold">GoPro Hero 6</h2>
          <p class="text-[10px] w-4/5 mb-2 leading-5">
            Lorem is a dummy or text used in to fill in a layout
          </p>
          <p class="text-xl font-thin text-gray-500">$299</p>
        </div>
      </div>
    </div>
  </sidebar>
</template>

<style scoped>
.el-carousel__item {
  min-height: 400px;
}

.el-carousel__indicators--horizontal {
  background: #000;
  width: 100%;
}
.el-carousel__button {
  width: 10px;
  background: #000;
}

.section-box:last-child .bg-layer {
  background: url("@/assets/images/cam.png") no-repeat right 90%;
}
.section-box .bg-layer {
  z-index: -1;
  width: 100%;
  height: 100%;
}
</style>
