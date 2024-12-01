<template>
  <div class="slider-demo-block">
    <el-slider size="small" v-model="value" range :max="10000" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref([1000, 9000]);
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
