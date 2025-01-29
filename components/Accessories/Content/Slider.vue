<template lang="pug">
  //- Slider
  div(class="slider-demo-block")
    
    div(class="py-2 w-full")
      
      input(v-model="value" max="5000" min="0" step="100" type="range"
        @change="(event) => { emit('update:maxPrice', event?.target?.value)}"
        class="h-2 w-full cursor-grab appearance-none rounded-full bg-gray-200 disabled:cursor-not-allowed")


</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps({
  minPrice: {
    type: Number,
  },
  maxPrice: {
    type: Number,
  },
});
const value = ref(props.maxPrice);

const emit = defineEmits(["update:minPrice", "update:maxPrice"]);
</script>

<style scoped>
.slider-demo-block {
  max-width: 600px;
  display: flex;
  align-items: center;
}
</style>
