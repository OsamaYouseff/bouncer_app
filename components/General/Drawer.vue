<template>
  <div class="drawer">
    <el-button @click="drawer = true" style="font-size: 14px; height: 38px">
      {{ props.drawerBtnTitle }}
    </el-button>

    <el-drawer
      class="wrapper"
      size="320"
      direction="ltr"
      v-model="drawer"
      title="I am the title"
      :with-header="false"
    >
      <slot />
    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps({
  drawerBtnTitle: {
    type: String,
    default: "Sidebar",
  },
});

const drawer = ref(false);
</script>

<style scoped>
.drawer {
  /* position: fixed; */
  display: none !important;
  top: 5px;
  left: 5px;
  z-index: 9999;
}

@media (max-width: 768px) {
  .drawer {
    display: block !important;
  }

  .filter-wrapper {
    display: none !important;
  }
}
</style>
