<template>
  <div class="container mx-auto">
    <div class="flex-center py-20">
      <input type="text" class="input" placeholder="Search query..." />
      <button>Search</button>
    </div>
  </div>
</template>

<style scoped>
input {
  min-width: 480px;
  height: 60px;
  width: 300px;
  padding: 0.6rem 1rem;
  border: 1px solid #f6f7f8;
  border-radius: 5px;
}

button {
  height: 60px;
  width: 120px;
  padding: 0.6rem 1rem;
  border: 1px solid #f6f7f8;
  border-radius: 5px;
  background: var(--primary);
  color: white;
  font-size: 14px;
}
</style>
