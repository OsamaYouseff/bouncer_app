<template lang="pug">
  div(class="nav-path text-black flex-center gap-3") <slot />
</template>

<style>
.nav-path {
  background: #fafbfb;
  padding: 10px;
}

a {
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: black;
}

.nav-path span {
  font-size: 9px;
}

a.active {
  color: var(--primary);
}

a:hover {
  color: var(--primary);
}
</style>
