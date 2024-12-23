<script setup lang="ts">
import { ref } from "vue";
import list from "@/assets/icons/list.svg";
import activeList from "@/assets/icons/list-a.svg";
import grid from "@/assets/icons/grid.svg";
import activeGrid from "@/assets/icons/grid-a.svg";

const props = defineProps({
  activeView: {
    type: String,
  },
});

const productsCount = ref<number>(8);
const emit = defineEmits(["update:viewOption", "update:itemsLimit"]);
</script>

<template>
  <!-- Accessories Filter -->
  <div
    class="filter-bar rounded-md flex-between grow gap-2 flex-wrap overflow-hidden lg:max-w-full"
    style="background: #f6f7f8; padding: 20px"
  >
    <div class="flex grow gap-6">
      <span class="min-w-[60px]">
        <span class="items-num">{{ productsCount }}</span> Items
      </span>
      <div class="flex-between gap-3">
        <span>Show</span>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          index="1"
          style="width: 116px"
        >
          <el-sub-menu class="grow">
            <template #title>{{ productsCount }}</template>
            <el-menu-item
              @click="emit('update:itemsLimit', (productsCount = n * 4))"
              v-for="n in 4"
              :index="1 - n"
              :key="n"
              >{{ n * 4 }}</el-menu-item
            >
          </el-sub-menu>
        </el-menu>
      </div>
    </div>

    <div class="flex-between gap-3">
      <span class="min-w-[68px]"> Sorted By</span>
      <!-- menu -->
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        style="width: 116px"
      >
        <el-sub-menu index="1">
          <template #title>Name</template>
          <el-menu-item index="1-1">MacBook Pro</el-menu-item>
          <el-menu-item index="1-2">MackBook Air</el-menu-item>
          <el-menu-item index="1-3">MackBook Max</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
    <slot />
    <!-- view options -->
    <div class="view-options flex-end gap-2">
      <button
        @click="emit('update:viewOption', 'grid')"
        class="hover:bg-white max-w-[38px] flex-center p-2 rounded"
      >
        <img
          :src="props.activeView == 'grid' ? activeGrid : grid"
          alt="grid-icon"
        />
      </button>
      <button
        @click="emit('update:viewOption', 'list')"
        class="hover:bg-white max-w-[38px] flex-center p-2 rounded"
      >
        <img
          :src="props.activeView == 'list' ? activeList : list"
          alt="list-icon"
        />
      </button>
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

.el-menu--horizontal {
  --el-menu-horizontal-height: 38px;
}
</style>
