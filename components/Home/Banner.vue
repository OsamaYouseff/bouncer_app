<script setup>
const props = defineProps({
  maxHeight: {
    type: String,
  },
});
</script>
<template>
  <section class="banner max-w-full flex-center px-6" style="background: var(--primary)">
    <div :class="`max-h-[${props.maxHeight}]`"
      class="container sm:justify-center lg:w-[1170px] mx-auto h-[400px] lg:h-[600px] flex lg:justify-between">
      <div class="text">
        <h1 class="mb-6 md:mt-2 sm:max-w-[375px] lg:text-[66px] text-[30px] text-white"
          style="font-weight: 300 !important">
          iPhone 6 Plus
        </h1>
        <p class="lg:w-[391px] lg:text-[24px] mb-14 lg:mb-20 text-white">
          Performance and design. Taken right to the edge.
        </p>
        <NuxtLink class="pb-[2px] font-medium border-b-4 text-white" to="/">
          SHOP NOW
        </NuxtLink>
      </div>
      <div class="img-container lg:w-1/2 h-full" :class="`
        h-[${props.maxHeight}]`"></div>
    </div>
  </section>
</template>
<style scoped>
.img-container {
  background: url("@/assets/images/banner-img.png") no-repeat 50%;
  background-size: contain;
}
</style>
