<template>
  <section class="flex-between gap-4">
    <!-- product details -->
    <div class="product-box lg:min-w-[870px]">
      <div
        class="product-box mb-10 flex-center gap-4 cursor-pointer transition flex-wrap border-[#f6f7f8] border-b-2 min-w-full sm:min-w-full w-[370px] min-h-[630px] rounded py-5 text-center"
      >
        <div class="img-container relative lg:grow-0 grow">
          <img
            class="mb-4 h-[370px] w-[370px]"
            :src="activeImage"
            alt="macbook-img"
          />
          <div class="sub-images flex-center">
            <img
              @click="activeImage = item"
              v-for="item in subImages"
              :class="activeImage == item ? 'active' : ''"
              :src="`${item}`"
              alt="product-img"
            />
          </div>
        </div>
        <div class="content grow px-6">
          <h2 class="title mb-6 md:text-xl font-medium text-start">
            Beat Solo2 Ear Headphones - black
          </h2>
          <!-- rating -->
          <div class="rating-wrapper flex gap-2 pb-2 border-b mb-4">
            <el-rate disabled allow-half v-model="ratingValue" size="small" />
            <span class="reviews text-[14px]">0 reviews</span>
            <button
              class="submit-review border-0 text-[14px]"
              style="color: var(--primary)"
            >
              Submit a review
            </button>
          </div>

          <!-- price -->
          <div class="price flex gap-2 mb-4">
            <p class="curr text-[#ea4251] text-[24px]">$499</p>
            <p class="prev text-[#c0c8ce] text-[24px] line-through">$599</p>
          </div>

          <!-- status -->
          <div
            class="product-status mb-4 flex-col-center gap-3 border-[#f6f7f8] border-b-2 pb-4"
          >
            <div class="availability flex-between max-w-[250px]">
              <h3 class="font-medium">availability</h3>
              <span>In Stock</span>
            </div>
            <div class="category flex-between max-w-[250px]">
              <h3 class="font-medium">category</h3>
              <span>Accessories</span>
            </div>
            <div class="shipping flex-between max-w-[250px]">
              <h3 class="font-medium">shipping</h3>
              <span></span>
            </div>
          </div>

          <!-- color and size -->
          <div class="color-size border-[#f6f7f8] border-b-2 pb-4">
            <!-- color -->
            <div class="colors flex-between max-w-[273px] mb-4">
              <h3 class="font-medium">Select Color</h3>
              <div class="colors-wrapper flex-between gap-3">
                <div
                  class="parent flex-center cursor-pointer"
                  v-for="color in Colors"
                  :key="color"
                  :style="{
                    borderColor: activeColor == color ? color : 'transparent',
                  }"
                  @click="activeColor = color"
                >
                  <span class="child" :style="{ background: color }"></span>
                </div>
              </div>
            </div>

            <!-- size -->
            <div class="sizes flex-between max-w-[244px]">
              <h3>Size</h3>
              <el-menu
                class="el-menu-demo"
                mode="horizontal"
                :ellipsis="false"
                style="width: 116px"
              >
                <el-sub-menu index="1">
                  <template #title>Size</template>
                  <el-menu-item index="1-1">XS</el-menu-item>
                  <el-menu-item index="1-2">SM</el-menu-item>
                  <el-menu-item index="1-3">MD</el-menu-item>
                  <el-menu-item index="1-4">LG</el-menu-item>
                  <el-menu-item index="1-5">XL</el-menu-item>
                  <el-menu-item index="1-6">XXL</el-menu-item>
                </el-sub-menu>
              </el-menu>
            </div>
          </div>

          <!-- Amount & action btns -->
          <div
            class="amount-action flex-between py-4 border-[#f6f7f8] border-b-2"
          >
            <div class="amount">
              <el-input-number
                v-model="amount"
                :min="1"
                :max="10"
                @change="handleChange"
                style="max-width: 116px; background: #f6f7f8"
              />
            </div>
            <div class="action-btns flex gap-4">
              <button
                class="add-to-cart border-0 text-[14px] max-h-[46px] flex gap-3 py-4 px-6 rounded-md transition bg-[#ebf6ff] hover:bg-blue-100"
                style="color: var(--primary)"
              >
                <img src="@/assets/icons/cart_2.svg" alt="cart-icon" />
                <span>Add to cart</span>
              </button>
              <button
                class="add-to-fav border-0 text-[14px] transition max-h-[46px] bg-[#ebf6ff] hover:bg-blue-100 p-4 rounded-md"
                style="color: var(--primary)"
              >
                <img src="@/assets/icons/heart.svg" alt="heart-icon" />
              </button>
            </div>
          </div>

          <!-- Social media -->
          <div class="social-media py-4 flex gap-4">
            <button
              class="flex-center bg-[#385c8e] gap-4 text-white py-4 px-6 rounded-md w-[230px] h-[46px]"
            >
              <img src="@/assets/icons/facebook2.svg" alt="facebook-icon" />
              <span>Share on Facebook </span>
            </button>
            <button
              class="flex-center bg-[#06a8f4] gap-4 text-white py-4 px-6 rounded-md w-[230px] h-[46px]"
            >
              <img src="@/assets/icons/twitter2.svg" alt="twitter-icon" />
              <span>Share on Twitter </span>
            </button>
          </div>
        </div>
      </div>
      <div class="des">
        <el-tabs
          v-model="activeName"
          class="demo-tabs bg-[#fafafb] rounded p-3"
          @tab-click="handleClick"
        >
          <el-tab-pane
            class="p-5"
            label="Product Information"
            name="product-info"
          >
            <p class="text-[14px] mb-6 leading-7">
              Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida
              et mattis vulputate, tristique ut lectus. Sed et lorem nunc.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus
              adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada
              tincidunt. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Integer enim purus,
              posuere at ultricies eu, placerat a felis. Suspendisse aliquet
              urna pretium eros convallis interdum. Quisque in arcu id dui
              vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel
              tellus non nunc mattis lobortis.
            </p>
            <p class="text-[14px] mb-6 leading-7">
              Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida
              et mattis vulputate, tristique ut lectus. Sed et lorem nunc.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae.
            </p>
          </el-tab-pane>
          <el-tab-pane class="p-5" label="Reviews 0" name="reviews">
            <div class="flex-center">
              <p>NO Reviews.</p>
            </div>
          </el-tab-pane>
          <el-tab-pane class="p-5" label="Another Tab" name="another-tab">
            <div class="flex-center">
              <p>Another Tab to add more content.</p>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <BestSeller />
  </section>
</template>

<script lang="ts" setup>
import mainImg from "@/assets/images/main-img.jpg";
import subImg1 from "@/assets/images/sub-img-1.jpg";
import subImg2 from "@/assets/images/sub-img-2.jpg";
import subImg4 from "@/assets/images/sub-img-4.jpg";

const subImages = ref([subImg1, subImg2, mainImg, subImg4]);
const activeImage = ref(mainImg);
const ratingValue = ref<number>(4);

const Colors = ["Blue", "Red", "Green", "Black"];
const activeColor = ref<string>("Blue");

const amount = ref(1);
const handleChange = (value: number) => {
  amount.value = value;
};

import type { TabsPaneContext } from "element-plus";
import BestSeller from "./BestSeller.vue";

const activeName = ref("product-info");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};

watchEffect(() => {
  console.log(activeImage.value);
});
</script>

<style scoped>
.sub-images {
  width: 370px;
  overflow: auto;
  gap: 10px;
  padding: 10px;
}

.sub-images img {
  max-height: 100%;
  max-width: 76px;
  border: 2px solid #e3e3e3;
  padding: 3px;
  border-radius: 4px;
}
.sub-images img.active {
  border: 2px solid var(--primary);
}

.product-status h3 {
  min-width: 150px;
  text-align: start;
}
.product-status span {
  min-width: 100px;
  text-align: start;
}

.parent {
  aspect-ratio: 1/1;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid transparent;
}

.child {
  display: block;
  width: 18px;
  height: 18px;
  background: red;
  border-radius: 50%;
  border: 1px solid transparent;
}

.el-menu--horizontal {
  --el-menu-horizontal-height: 38px;
}

.el-menu-demo > li {
  border: 1px solid #eee;
  width: 116px;
  border-radius: 4px;
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs__nav > div {
  padding: 40px 20px;
  background: #000;
}
</style>
