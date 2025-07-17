<template lang="pug">

  LoaderComponent(v-if="isLoading")
  
  section( v-else class="container mx-auto overflow-x-hidden px-8 sm:px-0")
    h1(class="text-center mb-10 text-[30px] font-medium") CART
    div(class="table-wrapper overflow-x-auto")

      //- Cart Table 
      div(class="table shadow-md rounded-md w-full min-w-full xl:min-w-[1024px]") 
        div.table-header-group
          div.table-row
            div(class="img-container table-cell font-medium text-xl xl:pl-5 py-5" ) FRODUCT
            div(class="text table-cell min-w-[120px] font-medium text-xl py-5" ) PRICE
            div(class="price table-cell min-w-[120px] font-medium text-xl py-5" ) QTY
            div(class="unit-price table-cell min-w-[120px] font-medium text-xl py-5") UNIT PRICE
          
        
        CartProduct(v-for="product in cartInfo.value?.products" :key="product.id" :product="product")
      
      div(v-if="!cartInfo.value?.products.length")
        div(class="flex-center w-full min-h-[400px] grow shadow-xl rounded-md") 
          p(class="text-center text-[20px] font-medium text-[#475669]") Your cart is empty
        
      
    
    //- Cart Checkout 
    div(class="checkout flex-between py-10 mb-20 md:gap-2 gap-10") 
      div(class="redeem-code flex-center px-2 sm:max-w-full max-w-[360px]") 
        input(type="text" class="input sm:mx-1 md:min-w-[249px] sm:min-w-[280px] h-[60px] sm:w-[200px] w-[249px] py-3 px-4 border-[1px] border-[#f6f7f8] rounded-[5px]" placeholder="Voucher Code" ) 
        
        button(class="h-[60px] w-[120px] rounded-[5px] border-[1px] py-3 px-4 text-white border-[#f6f7f8] text-[14px]" style="background: var(--primary)") Redeem
          

      //- Price Table 
      div(class="price-table lg:min-w-[370px] min-w-[340px] ") 

        div(class="details mb-3 border-b border-[#f6f7f8] pb-3") 
          div.subtotal.flex-between.mb-5
            h3 Subtotal
            span ${{ priceInfo.subtotal }}
          
          div.shipping.flex-between.mb-5
            h3 Shipping Fee
            span ${{ priceInfo.deliveryFee }}
          
          div.coupon.flex-between.mb-5
            h3 Coupon
            span - ${{ priceInfo.discount.toFixed(2) }}
          
        

        div.total-price.flex-between.py-4.text-3xl.mb-3.font-medium
          h3 TOTAL
          span ${{ (priceInfo.subtotal + priceInfo.deliveryFee - priceInfo.discount).toFixed(2) }}
        

        button(class="w-full border-none text-md h-[60px] text-white rounded-md" style="background-color: var(--primary);") Checkout

  
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, watch } from "vue";

// Interfaces
import type { Product } from "@/Interfaces/Product";
import type { PriceInfo } from "@/Interfaces/PriceInfo";
import type { Cart } from "@/Interfaces/Cart";

import { storeToRefs } from "pinia";
import { useCartStore } from "@/composables/useCart";

// Accessing the store
const productsStore = useCartStore();
const { cart, isLoading } = storeToRefs(productsStore);

const cartInfo = ref<Cart | null>(
  cart.value ?? { products: [], cartTotalPrice: 0, cartItemsNum: 0 }
);
const priceInfo = ref<PriceInfo>({
  subtotal: 0,
  discount: 0,
  deliveryFee: 0,
});

const calcTotalPrice = () => {
  if (cart.value.cartTotalPrice > 0) {
    priceInfo.value = {
      subtotal: cart.value.cartTotalPrice || 0,
      discount: cart.value.cartTotalPrice * 0.2 || 0,
      deliveryFee: cart.value.cartTotalPrice > 0 ? 15 : 0,
    };
  } else {
    priceInfo.value = {
      subtotal: 0,
      discount: 0,
      deliveryFee: 0,
    };
  }
};

onMounted(async () => {
  await productsStore.getCart();
});

watch(
  () => cart.value,
  async () => {
    cartInfo.value = cart;
    await calcTotalPrice();
  }
);
</script>

<style scoped>
.table-cell {
  border-bottom: 2px solid #f0f3f4;
}

.checkout {
  align-items: flex-start;
}

.price-table span {
  font-size: 15px;
}

@media (max-width: 767px) {
  .checkout {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
