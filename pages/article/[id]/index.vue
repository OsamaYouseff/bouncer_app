<template lang="pug">
  section.container.mx-auto.px-2
    
    div.drawer.mb-4.text-center
      button(class="bg-white text-[14px] min-w-[340px] z-auto h-[40px] px-3 border-[1px] border-[#f6f7f8] rounded-md shadow-lg" @click="handleOpenDrawer") Top Articles
      
      GeneralDrawer(:showDrawer="showDrawer" @update:closeDrawer="showDrawer = false")
        SideBar 
    
    div(class="article-cover w-full mb-10 md:px-0 px-2") 
      img(class="w-full rounded-md"
        src="@/assets/images/article-cover.png"
        alt="article-cover")
    

    div(class="content-wrapper flex-between gap-10"
      style="align-items: flex-start")
    
      div.article-content.mb-10
        div.des.py-10.px-3
          div.date-comments.gap-3.flex.mb-3
            button(class="comments border-none text-sm"
              style="color: var(--primary)") {{ 2 }}  Comments

            div.date.text-sm.font-medium DEC 15 2018
          
          h2 (class="text-3xl font-medium mb-10" style="color: var(--primary)")
            Dolor sit amet, consectetur adipiscing elit, sed do
          
          p.text-sm.mb-10 Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt.
          
          p.text-sm.mb-20 At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
          

          div.article-img.w-full.mb-10
            img(class="w-full" src="@/assets/images/article-img.png" alt="article-img")
          

          p.text-sm.mb-20 At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
          

          //- share 
          div.share-wrapper.flex.gap-3.mb-10.border-b.pb-10.border-gray-50
            h4(class="text-xl font-medium" style="color: ") Share
            div.flex.gap-3
              button(class="social flex-center bg-[#385c8e] aspect-square rounded-full")
                img(src="@/assets/icons/facebook2.svg" alt="facebook-icon")
              
              button(class="social flex-center bg-[#06a8f4] aspect-square rounded-full")
                img(src="@/assets/icons/twitter2.svg" alt="twitter-icon")

          //- Comments 
          div.comments
            h3.mb-10 Comments

            //- comment box 
            div.comment-box.mb-5
              div.user-info.flex.gap-4.mb-3
                img(src="@/assets/images/comment-user.png" alt="user-imgs")
                div.name.text-sm Lisa Doe
                div.date.text-sm.text-gray-500 Dec 16 2018
              
              div.comment-info.flex.gap-4
                div(class="reaction flex-center gap-2" style=" flex-direction: column; min-width: 40px; cursor: pointer;")
                  img(style="min-width: 20px; border-radius: 50%" src="@/assets/icons/up.svg" alt="arrow-icon")
                  
                  span(class="text-center") 105
                
                div(class="comment-content leading-7" style="max-width: 920px") Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      
      SideBar(class="side-bar")
    
</template>

<script lang="ts" setup>
import SideBar from "~/components/Blog/SideBarComponent.vue";

const showDrawer = ref<boolean>(false);
const handleOpenDrawer = (): void => {
  showDrawer.value = true;
};
</script>

<style scoped>
@media (max-width: 768px) {
  .side-bar {
    display: none !important;
  }
}

h3 {
  font-size: 30px;
  font-weight: 600;
  color: #c1c8ce;
}

p {
  line-height: 30px;
}

.social {
  width: 31px;
  height: 31px;
}
</style>
