<template lang="pug">
  //- Brand Filter
  div(class="brand-filter min-h-full rounded-md min-w-[270px] max-w-[270px]"
  style="background: #f6f7f8; padding: 20px")

    h2(class="mb-6 text-[18px]") BRAND
    
    div(class="flex flex-col-start gap-6")
      
      button(class="flex-between" v-for="brand in brands" :key="brand" 
            :class="activeBrand == brand ? 'active' : ''" @click="activeBrand = brand")
        
        span {{ brand }} 
        span {{ brand.length * 14 }}

</template>

<script setup lang="ts">
const activeBrand = ref<string>("Apple");
const brands = ["Apple", "LG", "Samsung", "Xiaomi"];
</script>

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
