<script setup lang="ts">
import CustomRating from "~/components/General/CustomRating.vue";

const ratingValue = ref<number>(4);
</script>

<template lang="pug">
  section(class="py-20 px-4")
    h1(class="text-center mb-10 text-[30px] font-medium") FEATURED PRODUCTS

    div(class="products-container container mx-auto flex-wrap flex-center gap-6")
      
      //-  products box 
      div(class="products-box lg:justify-center grow flex gap-4 lg:max-w-[400px] cursor-pointer")
      
        div(class="img-container rounded w-[160px] h-[156px] flex-center" style="border: 2px solid #f6f7f8")
          
          img(class="lg:max-w-[200px] max-h-[146px] sm:min-h-[100px]" src="@/assets/images/product1.png" alt="products-img")
            
        div(class="dis lg:w-[200px]" style="display: flex; flex-direction: column; align-items: flex-start;" ) 
          p(class="title mb-2 text-[14px] text-[#262626] max-w-[132px]") Apple Macbook Pro
          
          div(class="rating mb-2") 
            CustomRating(:rating="ratingValue" class="w-fit") 
          
          div(class="price flex gap-2") 
            p(class="curr text-[#ea4251]") $499 
            p(class="prev text-[#c0c8ce] line-through") $599
          
        
      
      //-  products box 
      div(class="products-box lg:justify-center grow flex gap-4 lg:max-w-[400px] cursor-pointer")   
      
        div(class="img-container rounded w-[160px] h-[156px] flex-center"
          style="border: 2px solid #f6f7f8")
          
        
          img(class="lg:max-w-[200px] max-h-[146px] sm:min-h-[100px]"
            src="@/assets/images/product3.png"
            alt="products-img")

        div(class="dis lg:w-[200px]" style="display: flex; flex-direction: column; align-items: flex-start;") 
          p(class="title mb-2 text-[14px] text-[#262626] max-w-[132px]") H-Squared tvTray
          
          div(class="rating mb-2") 
            CustomRating(:rating="ratingValue" ) 
          
          div(class="price flex gap-2") 
            p(class="curr text-[#ea4251]") $499
            p(class="prev text-[#c0c8ce] line-through") $599
          
        
      
      //-  products box 
      div(class="products-box lg:justify-center grow flex gap-4 lg:max-w-[400px] cursor-pointer")
            
        div(class="img-container rounded w-[160px] h-[156px] flex-center"
          style="border: 2px solid #f6f7f8")
          
        
          img(class="lg:max-w-[200px] max-h-[146px] sm:min-h-[100px]"
            src="@/assets/images/product2.png"
            alt="products-img")
            
        div(class="dis lg:w-[200px]" style="display: flex; flex-direction: column; align-items: flex-start;") 
          p(class="title mb-2 text-[14px] text-[#262626] max-w-[132px]" ) Netatmo Rain Gauge
          div(class="rating mb-2") 
            CustomRating(:rating="ratingValue" ) 
          
          div(class="price flex gap-2") 
            p(class="curr text-[#ea4251]") $499
            p(class="prev text-[#c0c8ce] line-through") $599
          
        
      
    
  
</template>
