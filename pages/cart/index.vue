<template>
  <section class="container mx-auto">
    <h1 class="text-center mb-10 text-[30px] font-medium">CART</h1>

    <div class="table w-full">
      <div class="table-header-group">
        <div class="table-row">
          <div class="img-container table-cell">FRODUCT</div>
          <div class="text table-cell">PRICE</div>
          <div class="price table-cell">QTY</div>
          <div class="unit-price table-cell">UNIT PRICE</div>
        </div>
      </div>
      <div class="table-row-group">
        <!-- Cart Product  -->
        <div class="table-row border-b-2 border-[#f6f7f8]">
          <!-- product name & img -->
          <div class="table-cell p-y pl-0 p-5">
            <div class="flex">
              <button
                style="background: #fff7f8; border-radius: 50%"
                class="remove-icon flex-center w-[32px] h-[32px] cursor-pointer"
              >
                <img
                  class="rounded-full"
                  src="@/assets/icons/x.svg"
                  alt="close-icon"
                />
              </button>

              <div class="img-container max-w-[130px] max-h-[130px]">
                <img
                  class="max-w-[130px] max-h-[130px]"
                  src="@/assets/images/product1.png"
                  alt="product-img"
                />
              </div>
              <div class="name">
                Philips Hue 7W BR30 Connected Downlight Lamp
              </div>
            </div>
          </div>
          <!-- price -->
          <div class="price table-cell">$998</div>

          <!-- quantity -->
          <div class="quantity table-cell">
            <el-input-number
              v-model="amount"
              :min="1"
              :max="10"
              @change="handleChange"
              style="
                max-width: 116px;
                background: #f6f7f8;
                border: 1px solid #ddd;
                border-radius: 6px;
              "
            />
          </div>
          <!-- unit price -->
          <div class="unit-price table-cell">$499</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const amount = ref(1);

const handleChange = (value: number) => {
  amount.value = value;
};
</script>
