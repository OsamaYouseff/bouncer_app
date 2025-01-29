<template>
  <section class="flex-between gap-8 xl:gap-4 flex-wrap xl:flex-nowrap">
    <!-- product details -->
    <div class="product-box lg:min-w-[870px] max-w-full grow">
      <!-- product -->
      <div
        class="product-box mb-10 flex-center gap-4 transition flex-wrap border-[#f6f7f8] border-b-2 min-w-full sm:min-w-full w-[370px] min-h-[630px] rounded py-5 text-center"
      >
        <div
          class="img-container relative lg:grow-0 grow flex-col-center items-center"
        >
          <img
            class="mb-4 h-[370px] w-[370px] rounded-md"
            :src="activeImage"
            alt="macbook-img"
          />
          <div class="sub-images flex-center cursor-pointer">
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
            {{ props.product?.title }}
          </h2>
          <!-- rating -->
          <div class="rating-wrapper flex gap-2 pb-2 border-b mb-4">
            <CustomRating :rating="ratingValue" />
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
              <span>{{ props.product?.category?.name }}</span>
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
            <div class="sizes flex-between max-w-[224px]">
              <h3>Size</h3>
              <GeneralSelectMenu
                class="min-w-[90px] min-h-4 border-2 border-gray-400 rounded-md p-1"
                :options="Sizes"
              />
            </div>
          </div>

          <!-- quantity & action btns -->
          <div
            class="quantity-action flex-between py-4 border-[#f6f7f8] border-b-2 gap-3"
          >
            <GeneralCounter
              :quantity="quantity"
              @update:quantity="handleChange"
            />

            <div class="action-btns flex gap-4">
              <button
                @click="addToCart"
                class="add-to-cart border-0 text-[12px] max-h-[46px] flex gap-3 py-4 px-4 lg:px-6 rounded-md transition bg-[#ebf6ff] hover:bg-blue-100"
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
              class="flex-center max-w-full bg-[#385c8e] gap-4 text-white py-4 px-6 rounded-md lg:w-[230px] h-[46px] text-sm lg:text-[16px]"
            >
              <img src="@/assets/icons/facebook2.svg" alt="facebook-icon" />
              <span>Share on Facebook </span>
            </button>
            <button
              class="flex-center max-w-full bg-[#06a8f4] gap-4 text-white py-4 px-6 rounded-md lg:w-[230px] h-[46px] text-sm lg:text-[16px]"
            >
              <img src="@/assets/icons/twitter2.svg" alt="twitter-icon" />
              <span>Share on Twitter </span>
            </button>
          </div>
        </div>
      </div>

      <!-- description -->
      <div class="description min-h-[350px] demo-tabs bg-[#fafafb] rounded p-3">
        <!-- tabs -->
        <div class="tabs-container block mb-3 pl-3">
          <ul
            class="flex border-b-[3px] border-gray-200 space-x-10 transition-all duration-300 -mb-px text-[14px]"
          >
            <li class="relative" v-for="tab in tabs" :key="tab.id">
              <a
                :class="{
                  active: tab.id === selectedTab,
                }"
                @click="selectedTab = tab.id"
                class="inline-block pb-2 pt-4 text-gray-700 font-medium border-b-2 border-transparent tablink whitespace-nowrap"
                role="tab"
              >
                {{ tab.title }}
              </a>

              <span
                v-show="tab.id === selectedTab"
                class="absolute -bottom-[3px] left-0 w-full h-[3px] bg-[#33a0ff]"
              ></span>
            </li>
          </ul>
        </div>
        <!-- description -->
        <div class="description-content">
          <div
            v-for="tab in tabs"
            v-show="tab.id === selectedTab"
            :key="tab.id"
            role="tabpanel"
            aria-labelledby="tabs-with-underline-item-1"
          >
            <p class="text-[14px] mb-4 leading-7 px-4 py-3">
              {{ tab.content.slice(0, 370) }}
            </p>
            <p class="text-[14px] leading-7 px-4">
              {{ tab.content.slice(370, 1000) }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <BestSeller class="xl:max-w-[269px]" :topProducts="topProducts" />
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import BestSeller from "./BestSeller.vue";
// pinia store
import { storeToRefs } from "pinia";
import { useCartStore } from "@/composables/useCart";
import type { Product } from "~/Interfaces/Product";

const props = defineProps<{
  product: Product;
  topProducts: Product[];
}>();

import mainImg from "@/assets/images/main-img.jpg";
import subImg1 from "@/assets/images/sub-img-1.jpg";
import subImg2 from "@/assets/images/sub-img-2.jpg";
import subImg4 from "@/assets/images/sub-img-4.jpg";
import CustomRating from "../General/CustomRating.vue";

const subImages = ref(
  props.product?.images ?? [mainImg, subImg1, subImg2, subImg4]
);
const activeImage = ref(props.product?.images[0] || mainImg);
const ratingValue = ref<number>(4);

const Colors = ["Blue", "Red", "Green", "Black"];
const activeColor = ref<string>("Black");
const Sizes = ["XS", "SM", "MD", "LG", "XL", "XXL"];
const tabs = ref([
  {
    id: 1,
    title: "Product Information",
    content: `
    Elevate your casual wardrobe with these classic olive chino shorts. Designed for comfort and versatility, they feature a smooth waistband, practical pockets, and a tailored fit that makes them perfect for both relaxed weekends and smart-casual occasions. The durable fabric ensures they hold up throughout your daily activities while maintaining a stylish look..
    
    Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
    `,
  },
  {
    id: 2,
    title: "Reviews 0",
    content: `
    No Reviews.
    `,
  },
  {
    id: 3,
    title: "Another Tab",
    content: `
    Another Tab to add more content.
    `,
  },
]);

const selectedTab = ref(1);

const quantity = ref(2);
const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

// handlers
const openMessage = () => {
  useToastify("Product added to cart successfully", {
    type: "success",
    autoClose: 1500,
    theme: "light",
    position: ToastifyOption.POSITION.TOP_RIGHT,
  });
};

const addToCart = () => {
  cartStore.addToCart(props.product, quantity.value);
  openMessage();
};
const handleChange = (value: number) => {
  quantity.value = value;
};

const activeName = ref("product-info");
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
  font-size: 15px;
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

.social-media span,
.action-btns span {
  font-size: 14px;
}
</style>
