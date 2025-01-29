<template>
  <HomeHeroSection />
  <ContentSection />
  <HomeBanner />
  <HomeFeatures />
  <HomeNewsSection />
  <HomeFeaturedProductsSection />
  <HomeSearchQuery />
  <HomeMessagePopup />
</template>

<script setup lang="ts">
import ContentSection from "~/components/Home/Content/ContentSection.vue";

useHead({ title: "Bouncer | Home " });
</script>
