<script setup lang="ts">
const props = defineProps({
  activeLink: {
    type: Boolean,
  },
});

console.log(props.activeLink);

watchEffect(() => {
  if (props.activeLink) {
    console.log(props.activeLink);
  }
});
</script>

<template>
  <div
    :class="{ show: props.activeLink }"
    class="links flex-center absolute translate-y-10 rounded shadow-lg top-1/2 z-30 right-1/2 translate-x-1/2 w-[1029px] max-w-[90%] bg-[#fefefe]"
    style="border-top: 3px solid #f0f3f4"
  >
    <div
      class="sections flex-wrap relative flex-between justify-start gap-5 grow p-10"
    >
      <span class="triangle"></span>
      <div>
        <h1 class="text-[18px] text-[#c0c8ce] mb-3">Category</h1>
        <ul class="flex-col-start gap-5 flex-wrap h-[300px]">
          <li><NuxtLink> AirPods & wireless </NuxtLink></li>
          <li><NuxtLink> AirPods & wireless </NuxtLink></li>
          <li><NuxtLink> AirPods & wireless </NuxtLink></li>
          <li><NuxtLink> AirPods & wireless </NuxtLink></li>
          <li><NuxtLink> AirPods & wireless </NuxtLink></li>
          <li><NuxtLink> AirPods & wireless </NuxtLink></li>
          <li><NuxtLink> AirPods & wireless </NuxtLink></li>
          <li><NuxtLink> AirPods & wireless </NuxtLink></li>
        </ul>
      </div>
      <div>
        <h1 class="text-[18px] text-[#c0c8ce] mb-3">Category</h1>
        <ul class="flex-col-start gap-5 flex-wrap h-[300px]">
          <li><NuxtLink> AirPods & wireless </NuxtLink></li>
          <li><NuxtLink> AirPods & wireless </NuxtLink></li>
          <li><NuxtLink> AirPods & wireless </NuxtLink></li>
          <li><NuxtLink> AirPods & wireless </NuxtLink></li>
          <li><NuxtLink> AirPods & wireless </NuxtLink></li>
          <li><NuxtLink> AirPods & wireless </NuxtLink></li>
          <li><NuxtLink> AirPods & wireless </NuxtLink></li>
          <li><NuxtLink> AirPods & wireless </NuxtLink></li>
        </ul>
      </div>
      <div>
        <h1 class="text-[18px] text-[#c0c8ce] mb-3">Category</h1>
        <ul class="flex-col-start gap-5 flex-wrap h-[300px]">
          <li><NuxtLink> AirPods & wireless </NuxtLink></li>
          <li><NuxtLink> AirPods & wireless </NuxtLink></li>
          <li><NuxtLink> AirPods & wireless </NuxtLink></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.links {
  transition: all 0.3s ease-in-out;
  opacity: 0;
  z-index: -1;
}

.links.show {
  opacity: 1;
  z-index: 100;
}

.sections > div {
  flex-grow: 1;
  height: 100%;
  min-height: 300px;
  min-width: 250px;
}

ul {
  max-height: 300px;
}

ul li {
  font-size: 14px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
}

ul li:hover {
  color: var(--primary);
}

.triangle {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #f0f3f4;
  top: -10px;
  left: 25%;
  transform: translateX(-50%);
}
</style>
