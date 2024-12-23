<template>
  <div class="slider-demo-block">
    <el-slider size="small" @change="emit('update:minPrice', value[0]), emit('update:maxPrice', value[1])"
      v-model="value" range :max="10000" />
  </div>
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
})
const value = ref([props.minPrice, props.maxPrice]);

const emit = defineEmits(['update:minPrice', 'update:maxPrice']);


</script>

<style scoped>
.slider-demo-block {
  max-width: 600px;
  display: flex;
  align-items: center;
}

.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}
</style>
