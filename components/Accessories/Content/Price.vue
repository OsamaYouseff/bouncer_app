<script setup lang="ts">
import Slider from "./Slider.vue";

const minPrice = ref<number>(10.99);
const maxPrice = ref<number>(1000.99);

const updateValue = (min: number, max: number) => {
  minPrice.value = min;
  maxPrice.value = max;
};
</script>

<template lang="pug">
  //-  Accessories Filter 

  div(class="accessories-filter min-h-full rounded-md min-w-[270px] max-w-[270px]"
      style="background: #f6f7f8; padding: 20px")
    
    h2(class="mb-6 text-[18px]") PRICES 
    
    div(class="flex-between mb-4")  
      span Ranger: 
      span ${{ minPrice }} - ${{ maxPrice }}
    
    div
      Slider(
        :minPrice="minPrice"
        :maxPrice="maxPrice"
        @update:minPrice="updateValue($event, maxPrice)"
        @update:maxPrice="updateValue(minPrice, $event)"
      )

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
