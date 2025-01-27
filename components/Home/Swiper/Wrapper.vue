<script setup>
import { ref } from "vue";
import slideImg from "@/assets/images/slider.jpg";

const props = defineProps({
  slides: {
    type: Number,
    default: 3,
  },
});

const slides = [
  { image: slideImg, alt: "Slide 1" },
  { image: slideImg, alt: "Slide 2" },
  { image: slideImg, alt: "Slide 3" },
];
const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % props.slides;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + props.slides) % props.slides;
};
</script>

<template>
  <div class="inner-slider translate-x-2">
    <div
      class="slides"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <!-- Slide Component -->
      <slot />
    </div>

    <!-- Forward Arrow -->
    <button
      class="absolute flex-center w-10 h-10 left-0 top-1/2 translate-x-0 z-30"
      @click="prevSlide"
    >
      <img src="@/assets/icons/arrow-left.svg" alt="left-arrow-icon" />
    </button>

    <!-- Backward Arrow -->
    <button
      class="absolute flex-center w-10 h-10 md:right-0 right-2 top-1/2 z-30"
      @click="nextSlide"
    >
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
</style>
