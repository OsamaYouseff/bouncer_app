<template>
  <div class="pagination-wrapper mx-auto w-full flex-center">
    <!-- Pagination -->
    <button
      class="page-button"
      v-for="(page, index) in 5"
      @click="
        () => {
          emit('update:activePage', page);
          activePage = page;
        }
      "
      :class="activePage == page ? 'active' : ''"
      :key="index"
    >
      {{ page }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps({
  activePage: {
    type: Number,
  },
});

const activePage = ref<number>(props.activePage || 1);

const emit = defineEmits(["update:activePage"]);
</script>

<style scoped>
.page-button {
  width: 56px;
  height: 56px;
  border: none;
  cursor: pointer;
  color: #22262a;
}

.page-button.active {
  color: white;

  background: #22262a;
}

@media (max-width: 768px) {
  .filter-drawer {
    display: block !important;
  }

  .filter-wrapper {
    display: none !important;
  }
}
</style>
