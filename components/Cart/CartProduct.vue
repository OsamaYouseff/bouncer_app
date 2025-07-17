<template lang="pug">
  //-  Cart Product 
  div(class="table-row-group hover:bg-[#fff7f1] rounded-md")
    div(class="table-row border-b-2")
      //-  product name & img
      div.table-cell.py-3
        div.flex.gap-3
          span
          div(class="img-container max-w-[130px] max-h-[130px]")      
            img(:src="props.product.images[0]" alt="product-img" class="max-w-[130px] max-h-[130px] rounded-md")

          div.name {{ props.product.title }}
      
      //-  price
      div.price.table-cell ${{ props.product.price * props.product.quantity }}
      
      //-  quantity
      div.quantity.table-cell 
        GeneralCounter( :quantity="amount" @update:quantity="handleChangeAmount")
      
      //-  unit price 
      div.unit-price.table-cell ${{ props.product.price }}
      
      //-  delete icon 
      div.unit-price.table-cell
        img(class="remove-icon rounded-md" @click="handleDeleteItem" src="@/assets/icons/delete.svg" alt="delete-icon" class="remove-icon")


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
  cursor: pointer;
}
</style>
