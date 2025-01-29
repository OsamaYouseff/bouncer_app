<script lang="ts" setup></script>
<template lang="pug">
  footer(class="border-t py-10") 
    div(class="container mx-auto") 
      
      //-  top header 
      div(class="top-layer flex-between border-b px-4 pb-10 grow gap-10 flex-wrap sm:justify-center") 
        div(class="logo-container h-full") 
          img(class="mb-6" src="@/assets/icons/logo.svg" alt="logo-icon")
          p(class="md:max-w-[269px] text-[#22262A] text-[12px] text-sm leading-5") Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.

        div(class="follow-us h-full md:mb-0 sm:mb-10 md:grow-0 sm:grow") 
          h2(class="mb-6 text-[18px] font-medium") Follow US
          p(class="md:max-w-[269px] mb-7 text-[12px]") Since the 1500s, when an unknown printer took a galley of type and scrambled.
          
          div(class="social-media flex gap-7") 
            img(src="@/assets/icons/facebook.svg" alt="facebook-icon") 
            img(src="@/assets/icons/twitter.svg" alt="twitter-icon") 
          
        

        div(class="contact-us h-full text-[12px] md:max-w-[269px] grow") 
          h2(class="mb-6 text-[18px] font-medium") Contact US
          p My Company , 4578 Marmora Road, Glasgow
          p D04 89GR
          p Call us now: 0123-456-789
          p Email: support@whatever.com
        
      

      //-  bottom header 
      div(class="bottom-layer pl-4 py-10 sm:justify-center grow flex lg:justify-between gap-14 flex-wrap") 
        div(class="w-[148px] font-thin text-[14px] flex-col-center gap-2") 
          h3(class="mb-2 text-[18px] font-medium") Information
          NuxtLink About Us
          NuxtLink Information
          NuxtLink Privacy Policy
          NuxtLink Terms & Conditions
        
        div(class="w-[148px] font-thin text-[14px] flex-col-center gap-2") 
          h3(class="mb-2 text-[18px] font-medium") Service
          NuxtLink About Us
          NuxtLink Information
          NuxtLink Privacy Policy
          NuxtLink Terms & Conditions
        
        div(class="w-[148px] font-thin text-[14px] flex-col-center gap-2") 
          h3(class="mb-2 text-[18px] font-medium") Extras
          NuxtLink About Us
          NuxtLink Information
          NuxtLink Privacy Policy
          NuxtLink Terms & Conditions
        
        div(class="w-[148px] font-thin text-[14px] flex-col-center gap-2") 
          h3(class="mb-2 text-[18px] font-medium") My Account
          NuxtLink About Us
          NuxtLink Information
          NuxtLink Privacy Policy
          NuxtLink Terms & Conditions
        
        div(class="w-[148px] font-thin text-[14px] flex-col-center gap-2") 
          h3(class="mb-2 text-[18px] font-medium") Useful Links
          NuxtLink About Us
          NuxtLink Information
          NuxtLink Privacy Policy
          NuxtLink Terms & Conditions
        
        div(class="w-[148px] font-thin text-[14px] flex-col-center gap-2") 
          h3(class="mb-2 text-[18px] font-medium") Our Offers
          NuxtLink About Us
          NuxtLink Information
          NuxtLink Privacy Policy
          NuxtLink Terms & Conditions
        
      
    

    //-  bottom bar 
    div(class="bottom-bar pt-5 border-t") 
      div(class="container justify-center mx-auto") 
        div(class="flex lg:justify-between sm:justify-center grow flex-wrap gap-4") 
          p(class="text-[14px] text-[#C1C8CE]") © 2018 Ecommerce theme by www.bisenbaev.com
          
          div(class="flex gap-2") 
            img(src="@/assets/icons/Western-union.svg" alt="Western-union-icon")
            img(src="@/assets/icons/mastercard.svg" alt="mastercard-icon")
            img(src="@/assets/icons/Paypal.svg" alt="paypal-icon")
            img(src="@/assets/icons/visa.svg" alt="visa-icon")
          
        
      
</template>

<style scoped>
@media (max-width: 768px) {
  .top-layer,
  .bottom-layer,
  .bottom-bar > div > div {
    justify-content: center;
  }
}

a {
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

a:hover {
  color: var(--primary);
}
</style>
