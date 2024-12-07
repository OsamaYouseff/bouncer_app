<template>
    <!-- Cart Product  -->
    <div class="table-row-group cursor-pointer hover:bg-[#fff7f1] rounded-md ">
        <div class="table-row border-b-2">
            <!-- product name & img -->
            <div class="table-cell py-5 pl-1">
                <div class="flex">
                    <button class="remove-icon flex-center cursor-pointer"
                        style="background: #fff7f8; border-radius: 50%; width: 28px ; height: 28px;">
                        <img class="rounded-full w-[12px]" src="@/assets/icons/x.svg" alt="close-icon" />
                    </button>
                    <div class="flex" @click="navigateTo(`/product/${product.id}`)">
                        <div class="img-container max-w-[130px] max-h-[130px]">
                            <img class="max-w-[130px] max-h-[130px]" src="@/assets/images/product1.png"
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
                <el-input-number v-model="amount" :min="1" :max="10" @change="handleChange" style="
                max-width: 116px;
                background: #f6f7f8;
                border: 1px solid #ddd;
                border-radius: 6px;
            " />
            </div>
            <!-- unit price -->
            <div class="unit-price table-cell">${{ props.product.unitPrice }}</div>
        </div>
    </div>

</template>

<script lang="ts" setup>
import { ref, defineProps, watch } from "vue";

const props = defineProps({
    product: {
        type: Object,
        default: {},
    }
});

const amount = ref<number>(props.product.quantity || 1);
const handleChange = (value: number) => {
    amount.value = value;
};


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