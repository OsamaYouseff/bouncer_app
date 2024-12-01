<script setup lang="ts">
import Slider from "./Slider.vue";
</script>

<template>
  <!-- Accessories Filter -->

  <div
    class="accessories-filter min-h-full rounded-md min-w-[270px] max-w-[270px]"
    style="background: #f6f7f8; padding: 20px"
  >
    <h2 class="mb-6 text-[18px]">PRICES</h2>
    <div class="flex-between mb-4">
      <span>Ranger:</span>
      <span>$13.99 - $25.99</span>
    </div>
    <div>
      <Slider />
    </div>
  </div>
</template>

<style scoped>
button {
  width: 100%;
  transition: all 0.3s ease-in-out;
}

span {
  font-size: 14px;
}
</style>
