<template>
  <section class="mb-[200px]">
    <NavigationPath>
      <NuxtLink
        to="/"
        class="active cursor-pointer text-[11px] lg:text-[14px] text-[#c0c8ce]"
        >Home</NuxtLink
      >
      <span>/</span>
      <NuxtLink
        to="/accessories"
        class="active cursor-pointer text-[11px] lg:text-[14px] text-[#c0c8ce]"
        >Accessories
      </NuxtLink>
    </NavigationPath>
    <AccessoriesContent />
  </section>
</template>

<script setup lang="ts">
import NavigationPath from "@/components/General/NavigationPath.vue";

useHead({ title: "Bouncer | Accessories " });
</script>
