<script setup lang="ts">
const activeAccessories = ref<string>("Apple Card");

const accessories = [
  "Apple Card",
  "Air pods & wireless",
  "Cables & Docks",
  "Cases & Films",
  "Charging Devices",
  "Connected home",
  "Headphones",
];
</script>

<template>
  <!-- Accessories Filter -->

  <div
    class="accessories-filter min-h-full rounded-md min-w-[270px] max-w-[270px]"
    style="background: #f6f7f8; padding: 20px"
  >
    <h2 class="mb-6 text-[18px]">Accessories</h2>
    <div class="flex flex-col-start gap-6">
      <button
        v-for="accessory in accessories"
        :key="accessory"
        class="flex-between"
        :class="activeAccessories == accessory ? 'active' : ''"
        @click="activeAccessories = accessory"
      >
        <span>{{ accessory }}</span>
        <span>{{ accessory.length }}</span>
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
