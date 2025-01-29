<template lang="pug">
    
  div(class="counter border-[#f6f7f8] border-2 rounded-md text-gray-500 max-w-[142px]")
    button(:disabled="quantity <= 1" class="btn" @click="handelIncrease") -
    
    input(class="text-center" type="number" contenteditable="true" name="quantity" v-model="quantity"
           @change="changeQuantity")

    button(:disabled="quantity >= 10" class="btn" @click="handelDecrease") +

  
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  quantity: {
    type: Number,
    default: 1,
  },
});
const quantity = ref(props.quantity);

const emit = defineEmits(["update:quantity"]);

const handelIncrease = () => {
  if (quantity.value <= 1) return;
  quantity.value--;
  emit("update:quantity", quantity.value);
};
const handelDecrease = () => {
  if (quantity.value >= 10) return;
  quantity.value++;
  emit("update:quantity", quantity.value);
};

const changeQuantity = () => {
  if (quantity.value >= 1 && quantity.value <= 10)
    emit("update:quantity", quantity.value);
  else quantity.value = 1;
};
</script>

<style scoped>
button {
  padding: 5px 15px;
  font-size: 18px;
  cursor: pointer;
}
button:first-child {
  border-right: 2px solid #f6f7f8;
}
button:last-child {
  border-left: 2px solid #f6f7f8;
}

button:hover {
  background-color: #f6f7f8;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

input {
  width: 50px;
  text-align: center;
  font-size: 18px;
  padding: 5px;
}

p {
  font-size: 18px;
  color: #333;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
