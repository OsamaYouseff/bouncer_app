<script setup lang="ts">
const activeBrand = ref<string>("Apple");

const brands = ["Apple", "LG", "Samsung", "Xiaomi"];
</script>

<template>
  <!-- Brand Filter -->
  <div
    class="brand-filter min-h-full rounded-md min-w-[270px] max-w-[270px]"
    style="background: #f6f7f8; padding: 20px"
  >
    <h2 class="mb-6 text-[18px]">BRAND</h2>
    <div class="flex flex-col-start gap-6">
      <button
        v-for="brand in brands"
        :key="brand"
        :class="activeBrand == brand ? 'active' : ''"
        @click="activeBrand = brand"
        class="flex-between"
      >
        <span>{{ brand }} </span>
        <span>{{ brand.length * 14 }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
button {
  width: 100%;
  transition: all 0.3s ease-in-out;
}

button:hover,
button.active {
  color: var(--primary);
}
span {
  font-size: 14px;
}
</style>
