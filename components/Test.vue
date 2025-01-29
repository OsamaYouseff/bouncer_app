<template lang="pug">
  
  div.container.pt-10.text-red-500-mx-auto.text-center 
    h1 Welcome to Nuxt 3 with Pug (just a training)  
    p Pug templates make HTML simpler.
    
    br
    
    ul
      li(v-for="item in items" :key="item.id" class="text-blue-500 cursor-pointer") {{ item }}

    p(v-show="showMessage") this message will be shown on if the condition is true.

    img(class="mx-auto mt-10 w-10 h-10" src="assets/icons/twitter.svg" alt="twitter-icon")
    a(class="block text-[#03a9f4] cursor-pointer mb-5" href="https://twitter.com" target="_blank" ) Twitter
    button(@click="handleClick") Click Me
    
    mixin card(title, description)
      div.card
        h2 {{ title }}
        p {{ description }}


    +card('This is a title of a mixin', 'This is a description of a mixin')

</template>
<script setup>
const items = ["link1", "link2", "link3"];
const showMessage = true;

const handleClick = () => {
  alert("Hello there i am a button🫶");
};
</script>
