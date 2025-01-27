<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";

//// states
const langValue = ref<string>("EN");
const currValue = ref<string>("USD");
const searchValue = ref<string>("");
const activeLink = ref<string>("");

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "blog",
    path: "/blog",
  },
  {
    name: "iphone",
    path: "/",
  },
  {
    name: "ipad",
    path: "/",
  },
  {
    name: "macbook",
    path: "/",
  },
  {
    name: "accessories",
    path: "/accessories",
  },
];
const langOptions = ["EN", "AR"];
const currencyOptions = ["USD", "EGP"];

// pinia store
import { storeToRefs } from "pinia";
import { useCartStore } from "@/composables/useCart";

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

const cartItemsNumber = ref<number>(cart.value.cartItemsNum || 0);

onMounted(() => {
  cartStore.getCart();
});

watch(
  () => cart.value,
  (newCart) => {
    cartItemsNumber.value = newCart.cartItemsNum;
  }
);
</script>

<template>
  <header>
    <!-- top header -->
    <div class="top-header mt-1">
      <div
        class="container mx-auto flex items-center justify-between lg:mb-10 mb-4 flex-wrap gap-3"
      >
        <div class="lang-currency flex items-center justify-center">
          <!-- Language -->
          <GeneralSelectMenu :options="langOptions" />

          <!-- Currency -->
          <GeneralSelectMenu :options="currencyOptions" />
        </div>

        <nav class="flex items-center gap-4 flex-wrap justify-center">
          <ul class="flex-center gap-8 fw-bold flex-wrap">
            <li class="min-w-[100px]">
              <nuxt-link class="flex-center gap-2" to="/">
                <img src="@/assets/icons/profile.svg" alt="profile-icon" />
                <p class="text-sm">My Profile</p>
              </nuxt-link>
            </li>
            <li class="flex-between gap-4">
              <nuxt-link class="flex-center gap-2 min-w-[100px]" to="/cart">
                <img src="@/assets/icons/cart.svg" alt="cart-icon" />
                <p class="text-sm">{{ cartItemsNumber }} Items</p>
              </nuxt-link>
              <p class="text-sm" style="color: var(--gray)">$0.00</p>
            </li>
            <li
              class="search-box flex relative min-w-[260px] md:grow-0 mx-8 md:mx-0 grow border rounded-md p-1 h-[30px]"
            >
              <img
                class="absolute left-2"
                src="@/assets/icons/search.svg"
                alt="search-icon"
              />
              <input
                class="absolute left-8 top-1/2 transform -translate-y-1/2 focus:outline-none"
                type="text"
                placeholder="Search"
              />
            </li>
          </ul>
        </nav>
      </div>

      <!-- bottom header -->
      <div class="bottom-header pb-8 relative">
        <NuxtLink
          to="/"
          class="img-container flex-center lg:mb-10 mb-4 max-w-[300px] mx-auto"
        >
          <img src="@/assets/icons/logo2.svg" alt="logo-icon" />
        </NuxtLink>
        <div class="nav-links flex-center flex-wrap">
          <ul class="flex-center flex-wrap gap-4 uppercase font-[400]">
            <li
              v-for="link in links"
              :key="link.name"
              :class="{ active: $route.path == link.path }"
              @mouseenter="activeLink = link.name"
              @mouseleave="activeLink = ''"
            >
              <NuxtLink :to="link.path">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <LinksList
          @mouseenter="activeLink = 'home'"
          @mouseleave="activeLink = ''"
          :activeLink="activeLink !== ''"
        />
      </div>
    </div>
  </header>
</template>

<style scoped>
* {
  box-shadow: none !important;
}

@media (max-width: 768px) {
  .top-header > div {
    justify-content: center !important;
  }
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
