<template>

    <div class="filter-drawer">
        <el-button @click="drawer = true">
            filters
            <!-- <img src="@/assets/icons/list-a.svg" alt="list-icon"> -->
        </el-button>

        <el-drawer class="wrapper" size="320" direction="ltr" v-model="drawer" title="I am the title"
            :with-header="false">

            <div class="grow flex-col-center gap-4 items-center">
                <AccessoriesFilter />
                <Price />
                <Color />
                <Brand />
                <!-- More btn -->
                <button class="brand-filter min-h-full rounded-md min-w-[270px] max-w-[270px] cursor-pointer"
                    style="background: #f6f7f8; padding: 20px">
                    MORE
                </button>

            </div>

        </el-drawer>
    </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Price from "./Content/Price.vue";
import Color from "./Content/Color.vue";
import Brand from "./Content/Brand.vue";
import AccessoriesFilter from "./Content/AccessoriesFilter.vue";


const drawer = ref(false)
</script>



<style scoped>
.filter-drawer {
    position: fixed;
    display: none !important;
    top: 5px;
    left: 5px;
    z-index: 9999;
}

@media (max-width: 768px) {
    .filter-drawer {
        display: block !important;
    }

    .filter-wrapper {
        display: none !important;
    }
}
</style>