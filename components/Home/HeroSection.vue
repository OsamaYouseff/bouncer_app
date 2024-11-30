<script setup lang="ts"></script>
<template>
  <div class="slider h-[650px]">
    <div class="container mx-auto flex-center">
      <div class="slider-item flex-between">
        <div class="text text-white">
          <h1 class="mb-3 text-[36px]" style="text-shadow: 2px 2px 5px #000">
            iPhone X
          </h1>
          <p class="w-[330px] text-[14px] mb-6">
            Lorem is a dummy or text used in and to fill empty spaces
            placeholder in a layout that do not yet have content graphic.
          </p>
          <NuxtLink class="pb-[2px] font-medium border-b-4" to="/"
            >MORE</NuxtLink
          >
        </div>

        <div class="img-container"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.slider {
  background: linear-gradient(90deg, #8f65ff, #ff4858);
}

.img-container {
  background: url("@/assets/images/iphonex.png") no-repeat center;
  background-size: contain;
  width: 600px;
  height: 550px;
}
</style>
