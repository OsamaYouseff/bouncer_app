<script setup lang="ts"></script>
<template>
  <section class="slider md:h-[650px] mb-[165px]">
    <div class="container lg:max-w-[1170px] relative mx-auto flex-center">
      <img
        class="absolute left-0 translate-x-2 z-30"
        src="@/assets/icons/arrow-left.svg"
        alt="left-arrow-icon"
      />
      <img
        class="absolute right-0 -translate-x-2 z-30"
        src="@/assets/icons/arrow-right.svg"
        alt="right-arrow-icon"
      />
      <div class="slider-item flex-between">
        <div class="text text-white">
          <h1 class="mb-3 text-[36px]" style="text-shadow: 2px 2px 5px #000">
            iPhone X
          </h1>
          <p class="w-[300px] text-[14px] mb-6">
            Lorem is a dummy or text used in and to fill empty spaces
            placeholder in a layout that do not yet have content graphic.
          </p>
          <NuxtLink class="pb-[2px] font-medium border-b-4" to="/"
            >MORE</NuxtLink
          >
        </div>

        <div class="img-container lg:min-w-[600px] sm:max-w-[300px]"></div>
      </div>
    </div>

    <!-- section boxes -->
    <div
      class="sections flex-center sm:hidden flex-wrap mb-10"
      style="transform: translateY(-15px); min-width: 100vw"
    >
      <!-- section box -->
      <div
        class="section-box bg-[#fe6975] z-20 relative flex-between w-[375px] h-[280px] text-white"
      >
        <div class="bg-layer absolute">
          <div class="text z-30 pt-12 pl-8">
            <p class="mb-4">iPhone 6</p>
            <p class="text-[10px] w-[230px] mb-4 leading-5">
              Lorem is a dummy or text used in and to fill empty spaces
              placeholder in a layout
            </p>
            <p class="text-3xl">$399</p>
          </div>
        </div>
      </div>
      <!-- section box -->
      <div class="section-box bg-[#f6f7f8] z-20 w-[375px] h-[280px]">
        <div class="bg-layer relative flex-center">
          <div
            class="absolute w-full flex-between py-4 px-6 z-20 gap-20"
            style="bottom: 0"
          >
            <p class="text-[24px] font-bold">Oculus Rift</p>
            <p class="text-[24px]">$349</p>
          </div>
        </div>
      </div>
      <!-- section box -->
      <div
        class="section-box bg-[#c0c8ce] z-20 relative flex-between w-[375px] h-[280px]"
      >
        <div class="bg-layer w-100 h-100 absolute">
          <div class="text z-30 pt-12 pl-8">
            <p class="mb-4">GoPro Hero 6</p>
            <p class="text-[10px] w-[140px] mb-2 leading-5">
              Lorem is a dummy or text used in to fill in a layout
            </p>
            <p class="text-3xl">$299</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.slider {
  background: linear-gradient(90deg, #8f65ff, #ff4858);
}

.slider > div > img {
  cursor: pointer;
}

@media (max-width: 768px) {
  .slider > div {
    max-height: 400px;
  }
}

.img-container {
  background: url("@/assets/images/iphonex.png") no-repeat center;
  background-size: contain;
  height: 550px;
}

.section-box:first-child .bg-layer {
  background: url("@/assets/images/iPhone6s.png") no-repeat 100% 100%;
}
.section-box:nth-child(2) .bg-layer {
  background: url("@/assets/images/vision.png") no-repeat center 105%;
}
.section-box:last-child .bg-layer {
  background: url("@/assets/images/cam.png") no-repeat right 90%;
}
.section-box .bg-layer {
  z-index: -1;
  width: 100%;
  height: 100%;
}
</style>
