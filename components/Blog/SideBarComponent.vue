<template lang="pug">
  
  sidebar(style="width: 270px")
    div(class="top-articles mb-10")
        h2(class="text-[#c9cfd4] text-xl mb-4") TOP ARTICLES
        ArticleBox.box1
        ArticleBox.box2
        ArticleBox.box3
    
    div.tags.mb-10
      h2(class="text-[#c9cfd4] text-xl mb-4") TAGS
      div(class="tags flex gap-3 flex-wrap")
        span(v-for="(tag, index) in tags" :key="index" class="tag mb-3 border px-2 py-1 cursor-pointer"
          style=" border-radius: 14px; color: var(--primary); border-color: #cce7ff;") {{ tag }}


    //- section box 
    div(class="section-box bg-[#c0c8ce] z-20 relative flex-between min-h-[408px]")
      div(class="bg-layer w-full h-full absolute")
          div(class="text z-30 pt-6 pl-6")
            h2(class="mb-4 text-2xl font-bold") GoPro Hero 6
            p(class="text-[10px] w-4/5 mb-2 leading-5") Lorem is a dummy or text used in to fill in a layout
            p(class="text-xl font-thin text-gray-500") $299
            
</template>

<script setup lang="ts">
import ArticleBox from "./ArticleBox.vue";

const tags: string[] = [
  "Promo",
  "Holidays",
  "Gift",
  "Christmas",
  "Giveaway",
  "Tips",
  "New Year",
];
</script>

<style scoped>
h1,
h2 {
  color: #c1c8ce;
}

.top-articles .box1 {
  background: url("@/assets/images/box-img.png") no-repeat;
}

.top-articles .box2 {
  background: url("@/assets/images/box-img2.png") no-repeat;
}

.top-articles .box3 {
  background: url("@/assets/images/box-img3.png") no-repeat;
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
