<script setup lang="ts"></script>

<template>
  <!-- Accessories Filter -->
  <div
    class="filter-bar rounded-md flex-between"
    style="background: #f6f7f8; padding: 20px"
  >
    <div>
      <span>13 Items</span>
      <span> Sorted By</span>
      <span>Show</span>
      <span></span>
    </div>
    <div class="view-options">
      <button>Grid</button>
      <button>List</button>
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
</style>
