<script setup lang="ts">
import slideImg from "@/assets/images/slider.jpg";

const slides = [
  { image: slideImg, alt: "Slide 1" },
  { image: slideImg, alt: "Slide 2" },
  { image: slideImg, alt: "Slide 3" },
];
</script>

<template lang="pug">
  section(class="slider md:h-[652px] mb-[165px]") 
    div(class="container mx-auto lg:max-w-[1125px] grow relative flex-center") 
      
      HomeSwiperWrapper
        div(class="slider-item flex-between min-w-full pl-10" v-for="(slide, index) in slides" :key="index")
         
          div(class="text text-white")
            h1(class="mb-3 text-[36px]" style="text-shadow: 2px 2px 5px #000") iPhone X
            
            p(class="w-[300px] text-[14px] mb-6") Lorem is a dummy or text used in and to fill empty spaces
              placeholder in a layout that do not yet have content graphic.
           
            NuxtLink(class="pb-[2px] font-medium border-b-4 text-white hover:border-blue-400"
              to="/") MORE
              
          div(class="img-container lg:min-w-[600px] sm:max-w-[300px]")
          
    //-  section boxes 
    div(class="sections flex-center sm:hidden flex-wrap mb-10" style="transform: translateY(-15px); min-width: 100vw")
     
      //-  section box 
      div(class="section-box bg-[#fe6975] z-20 relative flex-between w-[375px] h-[280px] text-white")
        
        div(class="bg-layer absolute") 
          div(class="text z-30 pt-12 pl-8") 
            p(class="mb-4") iPhone 6
            p(class="text-[10px] w-[230px] mb-4 leading-5") Lorem is a dummy or text used in and to fill empty spaces placeholder in a layout     
            p(class="text-3xl") $399
          
      //-  section box 
      div(class="section-box bg-[#f6f7f8] z-20 w-[375px] h-[280px]") 
        div(class="bg-layer relative flex-center") 
          div(class="absolute w-full flex-between py-4 px-6 z-20 gap-20" style="bottom: 0")
            p(class="text-[24px] font-bold") Oculus Rift
            p(class="text-[24px]") $349
          
            
      //-  section box 
      div(class="section-box bg-[#c0c8ce] z-20 relative flex-between w-[375px] h-[280px]")
        
        div(class="bg-layer w-full h-full absolute") 
          div(class="text z-30 pt-12 pl-8") 
            p(class="mb-4") GoPro Hero 6
            p(class="text-[10px] w-[140px] mb-2 leading-5") Lorem is a dummy or text used in to fill in a layout
            p(class="text-3xl") $299
          
        
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
