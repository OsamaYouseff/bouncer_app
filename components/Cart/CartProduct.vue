<template lang="pug">
  //-  Cart Product 
  div(class="table-row-group cursor-pointer hover:bg-[#fff7f1] rounded-md")
    div(class="table-row border-b-2")
      //-  product name & img
      div.table-cell.py-5.pl-1
        div.flex
          button(@click="handleDeleteItem" class="remove-icon mr-1 flex-center cursor-pointer"
                style=" background: #fff7f8; border-radius: 50%; width: 28px; height: 28px;")
            img(class="rounded-full w-[12px]" src="@/assets/icons/x.svg" alt="close-icon")
          
          div(class="img-container max-w-[130px] max-h-[130px]")      
            img(:src="props.product.images[0]" alt="product-img" class="max-w-[130px] max-h-[130px] rounded-md")

          div.name {{ props.product.name }}
      
      //-  price
      div(class="price table-cell") ${{ props.product.price * props.product.quantity }}
      
      //-  quantity
      div.quantity.table-cell 
        GeneralCounter( :quantity="amount" @update:quantity="handleChangeAmount")
      
      //-  unit price 
      div(class="unit-price table-cell") ${{ props.product.price }}

</template>

<script lang="ts" setup>
import { ref, defineProps, watch } from "vue";
import { storeToRefs } from "pinia";
import { useCartStore } from "@/composables/useCart";
import type { CartProduct } from "@/Interfaces/CartProduct";

const props = defineProps<{ product: CartProduct }>();

// pinia store
const productsStore = useCartStore();
const { isLoading } = storeToRefs(productsStore);

// states
const amount = ref<number>(props.product.quantity || 1);

// handlers
const openMessage = (message: string = "No Message") => {
  useToastify(message, {
    type: "success",
    autoClose: 1500,
    theme: "light",
    position: ToastifyOption.POSITION.TOP_RIGHT,
  });
};

const handleDeleteItem = () => {
  productsStore.deleteFromCart(props.product.id);
  openMessage("Product deleted successfully");
};

const handleChangeAmount = (currValue: number) => {
  console.log(currValue, amount.value);

  if (currValue > amount.value) {
    productsStore.increaseQuantity(props.product.id);
    openMessage("The Amount has been increased successfully");
  } else {
    productsStore.decreaseQuantity(props.product.id);
    openMessage("The Amount has been decreased successfully");
  }
};

watch(amount, () => {
  props.product.quantity = amount.value;
});
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
