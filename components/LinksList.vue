<template lang="pug">
  div(:class="{ show: props.activeLink }" class="links flex-center absolute translate-y-10 rounded shadow-lg top-1/2 z-30 right-1/2 translate-x-1/2 w-[1029px] max-w-[90%] bg-[#fefefe]" 
  style="border-top: 3px solid #f0f3f4")
    
    div(class="sections flex-wrap relative flex-between justify-start gap-5 grow p-10") 
    
      span.triangle 
      
      div
        h1(class="text-[18px] text-[#c0c8ce] mb-3") Category
        ul(class="flex-col-start gap-5 flex-wrap h-[300px]")
          li
            NuxtLink AirPort & Wireless 
          
          li
            NuxtLink AppleCare 
          
          li
            NuxtLink Bags, Shells & Sleeves 
          
          li
            NuxtLink Business & Security 
          
          li
            NuxtLink Cables & Docks 
          
          li
            NuxtLink Cameras & Video 
          
          li
            NuxtLink Car & Travel 
          
          li
            NuxtLink Cases & Films 
          
      div
        h1(class="text-[18px] text-[#c0c8ce] mb-3") Category
        ul(class="flex-col-start gap-5 flex-wrap h-[300px]")
          li
            NuxtLink Charging Devices 
          
          li
            NuxtLink Connected Home 
          
          li
            NuxtLink Device Care 
          
          li
            NuxtLink Display & Graphic 
          
          li
            NuxtLink Fitness & Sport 
          
          li
            NuxtLink Headphones 
          
          li
            NuxtLink HealthKit 
          
        
      
      div
        h1(class="text-[18px] text-[#c0c8ce] mb-3") Category
        ul(class="flex-col-start gap-5 flex-wrap h-[300px]")
          li
            NuxtLink Mice & Keyboards 
          
          li
            NuxtLink Music Creation 
          
          li
            NuxtLink Networking & Server 
          
</template>

<script setup lang="ts">
const props = defineProps({
  activeLink: {
    type: Boolean,
  },
});

watchEffect(() => {
  if (props.activeLink) {
    // console.log(props.activeLink);
  }
});
</script>

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
  min-height: 200px;
  min-width: 250px;
}

ul {
  max-height: 200px;
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
