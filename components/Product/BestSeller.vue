<script setup lang="ts">
import Product from "../Home/Content/Product.vue";

const props = defineProps({
  topProducts: {
    type: Array,
  },
});
</script>

<template lang="pug">
  sidebar(class="min-w-[270px] flex-center grow items-center flex-wrap gap-4 mx-3")
    
    //- Best Seller Wrapper 
    
    div(class="xl:max-w-[270px] min-w-[270px] md:mb-0 xl:mb-4 mr-4")
      p(class="grow text-[18px] text-[#475669] uppercase text-start pl-2") Best Sellers
      

      HomeSwiperWrapper(class="max-w-[270px]" :slides="topProducts?.length" :autoSwap="true")
        Product(v-for="product in topProducts" :key="product.id" :product="product")  

    //-  section box 
    div(class="section-box bg-[#c0c8ce] z-20 relative flex-between xl:w-[349px] lg:w-1/2 w-full lg:mx-0 mx-4 min-h-[408px]")
        
      div(class="bg-layer w-full h-full absolute") 
        div(class="text z-30 pt-6 pl-6") 
          h2(class="mb-4 text-2xl font-bold") GoPro Hero 6
          p(class="text-[10px] w-4/5 mb-2 leading-5") Lorem is a dummy or text used in to fill in a layout
          p(class="text-xl font-thin text-gray-500") $299
        
      
    
  
</template>

<style scoped>
.section-box .bg-layer {
  background: url("@/assets/images/cam.png") no-repeat right 90%;
}

.section-box .bg-layer {
  z-index: -1;
  width: 100%;
  height: 100%;
}
</style>
