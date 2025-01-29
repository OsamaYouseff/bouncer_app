<template lang="pug">
  section(class="mb-[200px]") 
    
    NavigationPath    
      
      NuxtLink(to="/" class="active cursor-pointer text-[11px] lg:text-[14px] text-[#c0c8ce]") Home  
      span /
      NuxtLink(class="active cursor-pointer text-[11px] lg:text-[14px] text-[#c0c8ce]" to="/accessories") Accessories

    AccessoriesContent
  
</template>

<script setup lang="ts">
import NavigationPath from "@/components/General/NavigationPath.vue";

useHead({ title: "Bouncer | Accessories " });
</script>
