<script setup></script>
<template>
  <section style="background: var(--primary)">
    <div class="container w-[1170px] mx-auto h-[600px] flex-between">
      <div class="text">
        <h1
          class="mb-6 text-[66px] text-white"
          style="font-weight: 300 !important"
        >
          iPhone 6 Plus
        </h1>
        <p class="w-[391px] text-[24px] mb-20 text-white">
          Performance and design. Taken right to the edge.
        </p>
        <NuxtLink class="pb-[2px] font-medium border-b-4 text-white" to="/">
          SHOP NOW
        </NuxtLink>
      </div>
      <div class="img-container"></div>
    </div>
  </section>
</template>
<style scoped>
.img-container {
  background: url("@/assets/images/banner-img.png") no-repeat 50%;
  background-size: contain;
  width: 50%;
  height: 600px;
}
</style>
