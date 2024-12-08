<template>
    <!-- Cart Product  -->
    <div class="table-row-group cursor-pointer hover:bg-[#fff7f1] rounded-md ">
        <div class="table-row border-b-2">
            <!-- product name & img -->
            <div class="table-cell py-5 pl-1">
                <div class="flex">
                    <button @click="handleDeleteItem" class="remove-icon mr-1 flex-center cursor-pointer"
                        style="background: #fff7f8; border-radius: 50%; width: 28px ; height: 28px;">
                        <img class="rounded-full w-[12px]" src="@/assets/icons/x.svg" alt="close-icon" />
                    </button>
                    <div class="flex" @click="navigateTo(`/product/${product.id}`)">
                        <div class="img-container max-w-[130px] max-h-[130px]">
                            <img class="max-w-[130px] max-h-[130px] rounded-md" :src="props.product.images[0]"
                                alt="product-img" />
                        </div>
                        <div class="name">
                            {{ props.product.name }}
                        </div>
                    </div>
                </div>
            </div>
            <!-- price -->
            <div class="price table-cell">${{ props.product.price * props.product.quantity }}</div>

            <!-- quantity -->
            <div class="quantity table-cell">
                <el-input-number @change="handleChangeAmount" @blur="handleChangeAmount" v-model="amount" :min="1"
                    :max="10" style="
                max-width: 116px;
                background: #f6f7f8;
                border: 1px solid #ddd;
                border-radius: 6px;
            " />
            </div>
            <!-- unit price -->
            <div class="unit-price table-cell">${{ props.product.price }}</div>
        </div>
    </div>

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
const openMessage = (message: string) => {
    ElNotification({
        title: 'Success',
        message: message,
        type: 'success',
    })
}


const handleDeleteItem = () => {
    productsStore.deleteFromCart(props.product.id);
    openMessage('Product deleted successfully');
}
const handleChangeAmount = (currValue: number, oldValue: number | undefined) => {
    if (currValue > oldValue) {
        productsStore.increaseQuantity(props.product.id);
        openMessage('The Amount has been increased successfully');
    } else {
        productsStore.decreaseQuantity(props.product.id);
        openMessage('The Amount has been decreased successfully');

    }
}

watch(amount, () => {
    props.product.quantity = amount.value
})
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