<template>
  <section class="container mx-auto px-2">
    <div class="article-cover w-full mb-10 md:px-0 px-2">
      <img
        class="w-full rounded-md"
        src="@/assets/images/article-cover.png"
        alt="article-cover"
      />
    </div>

    <div
      class="content-wrapper flex-between gap-10"
      style="align-items: flex-start"
    >
      <div class="article-content mb-10">
        <div class="des py-10 px-3">
          <div class="date-comments gap-3 flex mb-3">
            <button
              class="comments border-none text-sm"
              style="color: var(--primary)"
            >
              {{ 2 }}
              Comments
            </button>

            <div class="date text-sm font-medium">DEC 15 2018</div>
          </div>
          <h2 class="text-3xl font-medium mb-10" style="color: var(--primary)">
            Dolor sit amet, consectetur adipiscing elit, sed do
          </h2>
          <p class="text-sm mb-10">
            Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et
            mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing
            nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt.
          </p>
          <p class="text-sm mb-20">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat.
          </p>

          <div class="article-img w-full mb-10">
            <img
              class="w-full"
              src="@/assets/images/article-img.png"
              alt="article-img"
            />
          </div>

          <p class="text-sm mb-20">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat.
          </p>

          <!-- share -->
          <div
            class="share-wrapper flex gap-3 mb-10 border-b pb-10 border-gray-50"
          >
            <h4 class="text-xl font-medium" style="color: ">Share</h4>
            <div class="flex gap-3">
              <button
                class="social flex-center bg-[#385c8e] aspect-square rounded-full"
              >
                <img src="@/assets/icons/facebook2.svg" alt="facebook-icon" />
              </button>
              <button
                class="social flex-center bg-[#06a8f4] aspect-square rounded-full"
              >
                <img src="@/assets/icons/twitter2.svg" alt="twitter-icon" />
              </button>
            </div>
          </div>

          <!-- Comments -->

          <div class="comments">
            <h3 class="mb-10">Comments</h3>

            <!-- comment box -->
            <div class="comment-box mb-5">
              <div class="user-info flex gap-4 mb-3">
                <img src="@/assets/images/comment-user.png" alt="user-imgs" />
                <div class="name text-sm">Lisa Doe</div>
                <div class="date text-sm text-gray-500">Dec 16 2018</div>
              </div>
              <div class="comment-info flex gap-4">
                <div
                  class="reaction flex-center gap-2"
                  style="
                    flex-direction: column;
                    min-width: 40px;
                    cursor: pointer;
                  "
                >
                  <img
                    style="min-width: 20px; border-radius: 50%"
                    src="@/assets/icons/up.svg"
                    alt="arrow-icon"
                  />
                  <span class="text-center">105</span>
                </div>
                <div class="comment-content leading-7" style="max-width: 920px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Drawer :drawerBtnTitle="'Top Articles'">
        <SideBar />
      </Drawer>

      <SideBar class="side-bar" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import Drawer from "@/components/General/Drawer.vue";
import SideBar from "~/components/Blog/SideBarComponent.vue";
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
