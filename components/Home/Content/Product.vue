<template lang="pug">
  //-  product Box
  div(@click="navigateTo(`/product/${product?.id}`)"
    class="product-box relative py-5 lg:py-0 cursor-pointer transition border-gray-300 border max-w-[270px] lg:max-w-[270px] min-w-[100%] lg:min-w-[270px] lg:h-[379px] rounded flex-col-center px-5 text-center"
  )
    
    //-  hot
    div(class="hot absolute text-white px-2 py-0.5 rounded bg-[#ff4857] top-1 left-1"
      :class="{ hidden: product?.id % 3 != 0 }"
    ) HOT
    

    //-  Action Box
    div(@click.prevent="" class="action w-full h-3/4 absolute top-0 left-1/2 transform -translate-x-1/2 flex-center gap-2 bg-[#ffffff9e]")
      img(src="@/assets/icons/fav.svg" alt="sale-img")
      img(@click="addToCart($event, product)" src="@/assets/icons/cart2.svg" alt="new-img")
    
    img(class="mb-8 rounded-md" style="max-height: 50%" :src="props.product?.images[0]" alt="product-img")
    
    p(class="title mb-6 text-sm") {{ props.product?.title.slice(0, 25)}}{{ props.product?.title?.length > 25 ? "..." : "" }}
    
    div(class="rating mb-2")
      CustomRating(:rating="ratingValue")
    
    div(class="price flex-center gap-2")
      p(class="curr text-[#ea4251]") ${{ props.product?.price }}
      p(class="prev text-[#c0c8ce] line-through") ${{ props.product?.price + 100 }}
    
  
</template>

<script setup lang="ts">
import { ref } from "vue";

// pinia store
import { storeToRefs } from "pinia";
import { useCartStore } from "@/composables/useCart";
import CustomRating from "~/components/General/CustomRating.vue";

const props = defineProps({
  product: {
    type: Object,
  },
});

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);
const ratingValue = ref<number>(Math.trunc(props.product?.price % 5));

const addToCart = (event: Event, product: any) => {
  event.stopPropagation();
  cartStore.addToCart(product);
  openMessage();
};

const openMessage = () => {
  useToastify("Product added to cart successfully", {
    type: "success",
    autoClose: 1500,
    theme: "light",
    position: ToastifyOption.POSITION.TOP_RIGHT,
  });
};
</script>

<style>
.product-box .action {
  scale: 0;
}

.product-box:hover .action {
  scale: 1;
}

.product-box .action img {
  border: 2px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  max-height: 228px;
}

.product-box .action img:hover {
  border-color: var(--primary);
}
</style>
