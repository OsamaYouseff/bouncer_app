<template>
  <div class="nav-path mb-10 text-black flex-center gap-3">
    <NuxtLink to="/home" class="active text-[14px] text-[#c0c8ce]"
      >Home</NuxtLink
    >
    <span>/</span>
    <NuxtLink to="/accessories" class="active text-[14px] text-[#c0c8ce]"
      >Accessories</NuxtLink
    >
    <span>/</span>
    <NuxtLink class="text-[14px] text-[#c0c8ce]"
      >Beat Solo2 Ear Headphones - black</NuxtLink
    >
  </div>
</template>

<style scoped>
.nav-path {
  background: #fafbfb;
  padding: 10px;
}

a {
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: black;
}
span {
  font-size: 9px;
}

a.active {
  color: var(--primary);
}

a:hover {
  color: var(--primary);
}
</style>
