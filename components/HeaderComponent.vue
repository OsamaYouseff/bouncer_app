<script lang="ts" setup>
import { ref } from "vue";

//// states
const langValue = ref<string>("EN");
const currValue = ref<string>("USD");
const searchValue = ref<string>("");

const langOptions = [
  {
    value: "en",
    label: "EN",
  },
  {
    value: "ar",
    label: "AR",
  },
];
const currencyOptions = [
  {
    value: "usd",
    label: "USD",
  },
  {
    value: "egp",
    label: "EGP",
  },
];
</script>

<template>
  <header>
    <div
      class="top-header container mx-auto flex items-center justify-between mb-10"
      style="border-bottom: 1px solid #fafafb"
    >
      <div class="lang-currency flex items-center justify-center">
        <div class="lang">
          <el-select
            v-model="langValue"
            placeholder="Select"
            size="default"
            style="width: 65px"
          >
            <el-option
              style="box-shadow: none !important"
              v-for="item in langOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="currency">
          <el-select
            v-model="currValue"
            placeholder="Select"
            size="default"
            style="width: 75px"
          >
            <el-option
              style="box-shadow: none !important"
              v-for="item in currencyOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>

      <nav class="flex items-center gap-8">
        <ul class="flex-center gap-8 fw-bold">
          <li class="flex-center gap-2">
            <img src="@/assets/icons/profile.svg" alt="profile-icon" />
            <p class="text-sm">My Profile</p>
          </li>
          <li class="flex-between gap-4">
            <div class="flex-center gap-2">
              <img src="@/assets/icons/cart.svg" alt="cart-icon" />
              <p class="text-sm">{{ 0 }} Items</p>
            </div>
            <p class="text-sm" style="color: var(--gray)">$0.00</p>
          </li>
        </ul>

        <ul>
          <el-autocomplete
            v-model="searchValue"
            clearable
            class="inline-input w-50"
          >
            <template #prefix>
              <img src="@/assets/icons/search.svg" />
            </template>
          </el-autocomplete>
        </ul>
      </nav>
    </div>

    <div class="bottom-header pb-4">
      <NuxtLink to="/" class="img-container flex-center mb-10">
        <img src="@/assets/icons/logo2.svg" alt="logo-icon" />
      </NuxtLink>
      <div class="nav-links">
        <ul class="flex-center gap-4 uppercase font-[400]">
          <li class="active">home</li>
          <li>store</li>
          <li>iphone</li>
          <li>ipad</li>
          <li>macbook</li>
          <li>accessories</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
* {
  box-shadow: none !important;
}

.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
.nav-links li {
  cursor: pointer;
}
.nav-links li.active {
  color: var(--primary);
}

.nav-links li:hover {
  color: var(--primary);
}
</style>
