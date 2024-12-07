<template>
    <section class="blog container mx-auto md:px-0 px-3 ">
        <h1 class="text-center mb-10 text-[30px] font-medium">LATEST ARTICLES</h1>
        <!-- Blog Content -->
        <div class="content-wrapper flex-center gap-6" style="align-items: flex-start;">
            <div class="articles mb-10 ">
                <!-- Article Box  -->
                <div v-for="(article, index) in articles" :key="index"
                    class="article cursor-pointer hover:shadow-lg max-w-[840px]"
                    @click="navigateTo(`/article/${article.id}`)">
                    <div class="img-container mb-10">
                        <img class=" max-h-[370px]" :src="article.img" alt="blog-img">
                    </div>

                    <div class="des py-10">
                        <div class="date-comments gap-5 flex mb-3">
                            <button class="comments border-none text-sm" style="color: var(--primary)">{{ 2 }}
                                Comments
                            </button>

                            <div class="date text-sm font-medium">
                                DEC 15 2018
                            </div>
                        </div>
                        <h2 class="text-3xl font-medium mb-3" style="color: var(--primary)">
                            Dolor sit amet, consectetur adipiscing elit, sed do
                        </h2>
                        <p class="text-sm leading-7 max-w-[760px]">
                            Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate,
                            tristique
                            ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et
                            ultrices
                            posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor
                            dignissim semper. Nulla luctus malesuada tincidunt.
                        </p>

                    </div>



                </div>
            </div>

            <Drawer :drawerBtnTitle="'Top Articles'">
                <SideBar />
            </Drawer>

            <SideBar class="side-bar" />
        </div>
        <PaginationBar class="mb-[70px]" />

    </section>

</template>
<script lang="ts" setup>

import { reactive } from "vue";
import PaginationBar from "@/components/General/PaginationBar.vue";

import articleImg1 from "@/assets/images/blog.png"
import articleImg2 from "@/assets/images/blog2.png"
import articleImg3 from "@/assets/images/blog3.png"
import articleImg4 from "@/assets/images/blog4.png"
import articleImg5 from "@/assets/images/blog5.png"
import Drawer from "@/components/General/Drawer.vue";
import SideBar from "@/components/Blog/SideBar.vue";


const articles = reactive<any>([
    {
        id: 1,
        title: "Dolor sit amet, consectetur adipiscing elit, sed do",
        comments: 2,
        date: "DEC 15 2018",
        img: articleImg1,
        des: "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt."
    },
    {
        id: 2,
        title: "Dolor sit amet, consectetur adipiscing elit, sed do",
        comments: 4,
        date: "DEC 15 2018",
        img: articleImg2,
        des: "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt."
    },
    {
        id: 3,
        title: "Dolor sit amet, consectetur adipiscing elit, sed do",
        comments: 6,
        date: "DEC 15 2018",
        img: articleImg3,
        des: "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt."
    },
    {
        id: 4,
        title: "Dolor sit amet, consectetur adipiscing elit, sed do",
        comments: 1,
        date: "DEC 15 2018",
        img: articleImg4,
        des: "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt."
    },
    {
        id: 5,
        title: "Dolor sit amet, consectetur adipiscing elit, sed do",
        comments: 4,
        date: "DEC 15 2018",
        img: articleImg5,
        des: "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt."
    },

])

</script>


<style scoped>
h1,
h2 {
    color: #c1c8ce;
}

.section-box:last-child .bg-layer {
    background: url("@/assets/images/cam.png") no-repeat right 90%;
}

.section-box .bg-layer {
    z-index: -1;
    width: 100%;
    height: 100%;
}


@media (max-width: 768px) {
    .side-bar {
        display: none !important;
    }
}
</style>