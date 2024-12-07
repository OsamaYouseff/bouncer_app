<template>
  <section class="container mx-auto overflow-x-hidden ">
    <h1 class="text-center mb-10 text-[30px] font-medium">CART</h1>

    <div class="table-wrapper overflow-x-auto">
      <!-- Cart Table -->
      <div class="table w-full mb-10 min-w-[1024px]">
        <div class="table-header-group ">
          <div class="table-row">
            <div class="img-container table-cell font-medium text-xl pb-5 pl-[60px]">FRODUCT</div>
            <div class="text table-cell min-w-[120px] font-medium text-xl pb-5">PRICE</div>
            <div class="price table-cell min-w-[120px] font-medium text-xl pb-5">QTY</div>
            <div class="unit-price table-cell min-w-[120px] font-medium text-xl pb-5">UNIT PRICE</div>
          </div>
        </div>

        <CartProduct class="" v-for="product in cartProducts" :key="product.id" :product="product" />

      </div>
    </div>

    <!-- Cart Checkout -->
    <div class="checkout flex-between py-10 mb-20 gap-2 sm:gap-10">
      <div class="redeem-code flex-center px-2 sm:max-w-full max-w-[360px]">
        <input type="text"
          class="input sm:mx-1 md:min-w-[249px] sm:min-w-[280px] h-[60px] sm:w-[200px] w-[249px] py-3 px-4 border-[1px] border-[#f6f7f8] rounded-[5px]"
          placeholder="Voucher Code" />
        <button class="h-[60px] w-[120px] rounded-[5px] border-[1px] py-3 px-4 text-white border-[#f6f7f8] text-[14px]"
          style="background: var(--primary)">
          Redeem
        </button>
      </div>

      <!-- Price Table -->
      <div class="price-table lg:min-w-[370px] min-w-[340px] ">

        <div class="details mb-3 border-b border-[#f6f7f8] pb-3">
          <div class="subtotal flex-between mb-5">
            <h3>Subtotal</h3>
            <span>$1,999</span>
          </div>
          <div class="shipping flex-between mb-5">
            <h3>Shipping Fee</h3>
            <span>$20</span>
          </div>
          <div class="coupon flex-between mb-5">
            <h3>Coupon</h3>
            <span>No</span>
          </div>
        </div>

        <div class="total-price flex-between py-4 text-3xl mb-3 font-medium">
          <h3>TOTAL</h3>
          <span>$1,979</span>
        </div>

        <button class="w-full border-none text-md h-[60px] text-white" style="background-color: var(--primary);">
          Checkout
        </button>

      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

// TODO : make a type for the cart product and replace it with type any 

const cartProducts = reactive<any>([
  {
    id: 1,
    name: "Philips Hue 7W BR30 Connected Downlight Lamp",
    img: "product1.png",
    price: 998,
    quantity: 1,
    unitPrice: 998
  },
  {
    id: 2,
    name: "Philips Hue 7W BR30 Connected Downlight Lamp",
    img: "product1.png",
    price: 998,
    quantity: 1,
    unitPrice: 998
  },
  {
    id: 3,
    name: "Philips Hue 7W BR30 Connected Downlight Lamp",
    img: "product1.png",
    price: 998,
    quantity: 1,
    unitPrice: 998
  },
]);

</script>


<style scoped>
.table-cell {
  border-bottom: 2px solid #f0f3f4;
}

.checkout {
  align-items: flex-start;
}

@media (max-width: 767px) {
  .checkout {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
