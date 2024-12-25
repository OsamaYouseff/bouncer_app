<template>
  <div
    class="counter border-[#f6f7f8] border-2 rounded-md text-gray-500 max-w-[142px]"
  >
    <button
      :disabled="quantity <= 1"
      class="btn"
      @click="
        () => {
          if (quantity <= 1) return;
          quantity--;
          emit('update:quantity', quantity);
        }
      "
    >
      -
    </button>
    <input
      class="text-center"
      type="number"
      contenteditable="true"
      name="quantity"
      v-model="quantity"
      @change="
        () => {
          if (quantity >= 1 && quantity <= 10)
            emit('update:quantity', quantity);
          else quantity = 1;
        }
      "
    />
    <button
      class="btn"
      :disabled="quantity >= 10"
      @click="
        () => {
          if (quantity >= 10) return;
          quantity++;
          emit('update:quantity', quantity);
        }
      "
    >
      +
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
// Validate input for minimum value of 1

const props = defineProps({
  quantity: {
    type: Number,
    default: 1,
  },
});
const quantity = ref(props.quantity);

const emit = defineEmits(["update:quantity"]);
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
