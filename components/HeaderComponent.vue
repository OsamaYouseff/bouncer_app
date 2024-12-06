<script lang="ts" setup>
import { ref } from "vue";

//// states
const langValue = ref<string>("EN");
const currValue = ref<string>("USD");
const searchValue = ref<string>("");
const activeLink = ref<string>("");

const links = [
  {
    name: "home",
    path: "/home",
  },
  {
    name: "store",
    path: "/store",
  },
  {
    name: "iphone",
    path: "/iphone",
  },
  {
    name: "ipad",
    path: "/ipad",
  },
  {
    name: "macbook",
    path: "/macbook",
  },
  {
    name: "accessories",
    path: "/accessories",
  },
];
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
    <!-- top header -->
    <div class="top-header mt-1">
      <div class="container mx-auto flex items-center justify-between lg:mb-10 mb-4 flex-wrap gap-3">
        <div class="lang-currency flex items-center justify-center">
          <div class="lang">
            <el-select v-model="langValue" placeholder="Select" size="default" style="width: 65px">
              <el-option style="box-shadow: none !important" v-for="item in langOptions" :key="item.value"
                :label="item.label" :value="item.value" />
            </el-select>
          </div>
          <div class="currency">
            <el-select v-model="currValue" placeholder="Select" size="default" style="width: 75px">
              <el-option style="box-shadow: none !important" v-for="item in currencyOptions" :key="item.value"
                :label="item.label" :value="item.value" />
            </el-select>
          </div>
        </div>

        <nav class="flex items-center gap-4 flex-wrap justify-center">
          <ul class="flex-center gap-8 fw-bold">
            <li class=" min-w-[100px]">
              <nuxt-link class="flex-center gap-2" to="/profile">
                <img src="@/assets/icons/profile.svg" alt="profile-icon" />
                <p class="text-sm">My Profile</p>
              </nuxt-link>
            </li>
            <li class="flex-between gap-4">
              <nuxt-link class="flex-center gap-2 min-w-[100px]" to="/cart">
                <img src="@/assets/icons/cart.svg" alt="cart-icon" />
                <p class="text-sm">{{ 0 }} Items</p>
              </nuxt-link>
              <p class="text-sm" style="color: var(--gray)">$0.00</p>
            </li>
          </ul>

          <ul>
            <el-autocomplete v-model="searchValue" clearable class="inline-input min-w-[300px] border rounded-md">
              <template #prefix>
                <img src="@/assets/icons/search.svg" />
              </template>
            </el-autocomplete>
          </ul>
        </nav>
      </div>

      <!-- bottom header -->
      <div class="bottom-header pb-8 relative">
        <NuxtLink to="/" class="img-container flex-center lg:mb-10 mb-4">
          <img src="@/assets/icons/logo2.svg" alt="logo-icon" />
        </NuxtLink>
        <div class="nav-links flex-center flex-wrap">
          <ul class="flex-center flex-wrap gap-4 uppercase font-[400]">
            <li v-for="link in links" :key="link.name" :class="{ active: $route.path == link.path }"
              @mouseenter="activeLink = link.name" @mouseleave="activeLink = ''">
              <NuxtLink :to="link.path">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <LinksList @mouseenter="activeLink = 'home'" @mouseleave="activeLink = ''" :activeLink="activeLink !== ''" />
      </div>
    </div>
  </header>
</template>

<style scoped>
* {
  box-shadow: none !important;
}

@media (max-width: 768px) {
  .top-header>div {
    justify-content: center !important;
  }
}

.el-menu--horizontal>.el-menu-item:nth-child(1) {
  margin-right: auto;
}

.nav-links li {
  cursor: pointer;
}

.nav-links li:hover.active {
  color: var(--primary);
}

.nav-links li:hover {
  color: var(--primary);
}
</style>
