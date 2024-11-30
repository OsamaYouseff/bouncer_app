<script setup lang="ts"></script>
<template>
  <section class="slider h-[650px] mb-[165px]">
    <div class="container relative mx-auto flex-center">
      <img
        class="absolute left-0 translate-x-[100px] z-10"
        src="@/assets/icons/arrow-left.svg"
        alt="left-arrow-icon"
      />
      <img
        class="absolute right-0 translate-x-[-180px] z-10"
        src="@/assets/icons/arrow-right.svg"
        alt="right-arrow-icon"
      />
      <div class="slider-item flex-between">
        <div class="text text-white">
          <h1 class="mb-3 text-[36px]" style="text-shadow: 2px 2px 5px #000">
            iPhone X
          </h1>
          <p class="w-[330px] text-[14px] mb-6">
            Lorem is a dummy or text used in and to fill empty spaces
            placeholder in a layout that do not yet have content graphic.
          </p>
          <NuxtLink class="pb-[2px] font-medium border-b-4" to="/"
            >MORE</NuxtLink
          >
        </div>

        <div class="img-container"></div>
      </div>
    </div>

    <!-- section boxes -->
    <div
      class="sections absolute flex"
      style="z-index: 9; left: 50%; transform: translate(-50%, -15px)"
    >
      <!-- section box -->
      <div
        class="section-box relative flex-between w-[390px] h-[280px] text-white"
      >
        <div class="bg-layer w-100 h-100 bg-[#fe6975] absolute">
          <div class="text z-10 pt-12 pl-8">
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
      <div class="section-box w-[390px] h-[280px]">
        <div class="bg-layer relative flex-center bg-[#f6f7f8]">
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
      <div class="section-box relative flex-between w-[390px] h-[280px]">
        <div class="bg-layer w-100 h-100 bg-[#c0c8ce] absolute">
          <div class="text z-10 pt-12 pl-8">
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

.img-container {
  background: url("@/assets/images/iphonex.png") no-repeat center;
  background-size: contain;
  width: 600px;
  height: 550px;
}

.section-box:first-child {
  background: url("@/assets/images/iPhone6s.png") no-repeat 100% 100%;
}
.section-box:nth-child(2) {
  background: url("@/assets/images/vision.png") no-repeat center 105%;
}
.section-box:last-child {
  background: url("@/assets/images/cam.png") no-repeat right 90%;
}
.section-box .bg-layer {
  z-index: -1;
  width: 100%;
  height: 100%;
}
</style>
