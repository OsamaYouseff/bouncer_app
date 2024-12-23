<script setup>
import { ref } from "vue";
import slideImg from "@/assets/images/slider.jpg";

const slides = [
  { image: slideImg, alt: "Slide 1" },
  { image: slideImg, alt: "Slide 2" },
  { image: slideImg, alt: "Slide 3" },
];
const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
};
</script>

<template>
  <div class="inner-slider md:h-[545px] translate-x-2">
    <div
      class="slides"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <!-- Slide Component -->
      <div
        class="slider-item flex-between min-w-full pl-10"
        v-for="(slide, index) in slides"
        :key="index"
      >
        <div class="text text-white">
          <h1 class="mb-3 text-[36px]" style="text-shadow: 2px 2px 5px #000">
            iPhone X
          </h1>
          <p class="w-[300px] text-[14px] mb-6">
            Lorem is a dummy or text used in and to fill empty spaces
            placeholder in a layout that do not yet have content graphic.
          </p>
          <NuxtLink
            class="pb-[2px] font-medium border-b-4 text-white hover:border-blue-400"
            to="/"
          >
            MORE
          </NuxtLink>
        </div>

        <div class="img-container lg:min-w-[600px] sm:max-w-[300px]"></div>
      </div>
    </div>

    <!-- Forward Arrow -->
    <button
      class="absolute left-0 top-1/2 translate-x-2 z-30"
      @click="prevSlide"
    >
      <img src="@/assets/icons/arrow-left.svg" alt="left-arrow-icon" />
    </button>

    <!-- Backward Arrow -->
    <button class="absolute md:right-0 right-5 top-1/2 z-30" @click="nextSlide">
      <img src="@/assets/icons/arrow-right.svg" alt="right-arrow-icon" />
    </button>
  </div>
</template>

<style scoped>
.inner-slider {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.slides {
  display: flex;
  transition: transform 0.4s ease-in-out;
}

.img-container {
  background: url("@/assets/images/iphonex.png") no-repeat center;
  background-size: contain;
  height: 550px;
}
</style>
