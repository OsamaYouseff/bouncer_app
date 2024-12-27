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
  handleUpdateLimit: {
    type: Function,
  },
});

const productsCount = ref<number>(8);
const emit = defineEmits(["update:viewOption", "update:itemsLimit"]);

const updateLimit = (limit: number) => {
  productsCount.value = limit;
  props.handleUpdateLimit?.(limit);
};
</script>

<template>
  <!-- Accessories Filter -->
  <div
    class="filter-bar rounded-md flex-between grow gap-4 flex-wrap lg:max-w-full"
    style="background: #f6f7f8; padding: 20px"
  >
    <!-- items limit -->
    <div class="flex grow gap-6">
      <span class="min-w-[60px]">
        <span class="items-num">{{ productsCount }}</span> Items
      </span>
      <div class="flex-between gap-3">
        <span>Show</span>
        <GeneralSelectMenu
          :options="['8', '12', '16', '20']"
          style="width: 80px; height: 38px"
          @update:itemsLimit="updateLimit"
        />
      </div>
    </div>
    <slot />
    <div class="flex-between gap-3">
      <span class="min-w-[68px]"> Sorted By</span>
      <!-- menu -->
      <GeneralSelectMenu
        :options="[
          'Newest',
          'Oldest',
          'Price: Low to High',
          'Price: High to Low',
        ]"
        style="width: 145px; height: 38px"
      />
    </div>

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
