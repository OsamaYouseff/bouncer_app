<template>
  <section class="container mx-auto">
    <h1 class="text-center mb-10 text-[30px] font-medium">CART</h1>
    <!-- Cart Table -->
    <div class="table w-full mb-10 ">
      <div class="table-header-group">
        <div class="table-row">
          <div class="img-container table-cell font-medium pb-5">FRODUCT</div>
          <div class="text table-cell min-w-[120px] font-medium pb-5">PRICE</div>
          <div class="price table-cell min-w-[120px] font-medium pb-5">QTY</div>
          <div class="unit-price table-cell min-w-[120px] font-medium pb-5">UNIT PRICE</div>
        </div>
      </div>

      <!-- Cart Product  -->
      <div class="table-row-group cursor-pointer hover:bg-[#fff7f1] rounded-md " v-for="item in 3" :key="item">
        <div class="table-row border-b-2 ">
          <!-- product name & img -->
          <div class="table-cell   py-5 pl-1">
            <div class="flex">
              <button class="remove-icon flex-center cursor-pointer"
                style="background: #fff7f8; border-radius: 50%; width: 28px ; height: 28px;">
                <img class="rounded-full w-[12px]" src="@/assets/icons/x.svg" alt="close-icon" />
              </button>

              <div class="img-container max-w-[130px] max-h-[130px]">
                <img class="max-w-[130px] max-h-[130px]" src="@/assets/images/product1.png" alt="product-img" />
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
            <el-input-number v-model="amount" :min="1" :max="10" @change="handleChange" style="
                max-width: 116px;
                background: #f6f7f8;
                border: 1px solid #ddd;
                border-radius: 6px;
            " />
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


<style scoped>
.table-cell {
  border-bottom: 2px solid #f0f3f4;
}

.remove-icon {
  transition: all 0.3s ease-in-out;
}

.remove-icon:hover {
  border: 1px solid red;
}
</style>
