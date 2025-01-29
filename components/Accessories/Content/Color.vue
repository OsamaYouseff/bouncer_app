<script setup lang="ts">
const Colors = ["Blue", "Red", "Green", "Orange", "Purple", "Black"];
const activeColor = ref<string>("Blue");
</script>

<template lang="pug">
  //- Accessories Filter

  div(class="accessories-filter min-h-full rounded-md min-w-[270px] max-w-[270px]"
      style="background: #f6f7f8; padding: 20px")

    h2(class="mb-6 text-[18px]") COLOR
    
    div(class="flex-between mb-4 ")

      div(class="parent flex-center cursor-pointer" v-for="color in Colors" :key="color"
          :style="{ borderColor: activeColor == color ? color : 'transparent' }" @click="activeColor = color")
        
        span(class="child" :style="{ background: color }")
  
</template>

<style scoped>
button {
  width: 100%;
  transition: all 0.3s ease-in-out;
}

.parent {
  aspect-ratio: 1/1;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid transparent;
}

.child {
  display: block;
  width: 22px;
  height: 22px;
  background: red;
  border-radius: 50%;
  border: 1px solid transparent;
}
</style>
