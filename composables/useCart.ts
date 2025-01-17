import { defineStore } from "pinia";
import { ref } from "vue";
import type { Product } from "@/Interfaces/Product";
import type { Cart } from "@/Interfaces/Cart";

const saveToLocalStorage = (cart: Cart): void => {
  localStorage.setItem(
    "bouncer-cart",
    JSON.stringify({
      products: cart.products,
      cartTotalPrice: cart.cartTotalPrice,
      cartItemsNum: cart.cartItemsNum,
    })
  );
};

const fetchDataFromLocalStorage = (): Cart => {
  const cart: string | null = localStorage.getItem("bouncer-cart");

  if (cart) return JSON.parse(cart);
  else return { products: [], cartTotalPrice: 0, cartItemsNum: 0 };
};

export const useCartStore = defineStore("cart", () => {
  const cart = ref<Cart>({ products: [], cartTotalPrice: 0, cartItemsNum: 0 });
  const isLoading = ref<boolean>(true);

  const getCart = (): void => {
    isLoading.value = true;
    cart.value = fetchDataFromLocalStorage();
    isLoading.value = false;
  };

  const addToCart = (product: Product, quantity: number = 1): void => {
    cart.value = fetchDataFromLocalStorage();
    const currentProducts = cart.value.products;
    const addedProduct = {
      ...product,
      quantity: quantity,
      total: product.price * quantity,
    };

    if (cart.value.products.length === 0) {
      currentProducts.push(addedProduct);
      cart.value.cartItemsNum += quantity;
    } else {
      const productIndex = currentProducts.findIndex(
        (item) => item.id === product.id
      );

      if (productIndex === -1) {
        currentProducts.push(addedProduct);
        cart.value.cartItemsNum += quantity;
      } else {
        currentProducts[productIndex].quantity += quantity;
        currentProducts[productIndex].total += product.price * quantity;
      }
    }

    cart.value.cartTotalPrice += product.price * quantity;

    saveToLocalStorage({ ...cart.value, products: currentProducts });
  };

  const deleteFromCart = (targetId: number): void => {
    isLoading.value = true;
    cart.value = fetchDataFromLocalStorage();

    const targetProduct = cart.value.products.find(
      (item) => item.id === targetId
    );

    if (!targetProduct) return;

    cart.value.products = cart.value.products.filter(
      (item) => item.id !== targetId
    );
    cart.value.cartItemsNum -= 1;
    cart.value.cartTotalPrice -= targetProduct.total;

    if (cart.value.products.length === 0) {
      cart.value = { products: [], cartTotalPrice: 0, cartItemsNum: 0 };
    }

    saveToLocalStorage(cart.value);
    isLoading.value = false;
  };

  const increaseQuantity = (targetId: number): void => {
    cart.value = fetchDataFromLocalStorage();
    const productIndex = cart.value.products.findIndex(
      (item) => item.id === targetId
    );
    const product = cart.value.products[productIndex];
    product.quantity += 1;
    product.total += product.price;
    cart.value.cartTotalPrice += product.price;
    saveToLocalStorage(cart.value);
  };

  const decreaseQuantity = (targetId: number): void => {
    cart.value = fetchDataFromLocalStorage();
    const productIndex = cart.value.products.findIndex(
      (item) => item.id === targetId
    );

    if (cart.value.products[productIndex].quantity === 1) {
      deleteFromCart(targetId);
      cart.value.cartItemsNum -= 1;
    } else {
      const product = cart.value.products[productIndex];
      product.quantity -= 1;
      product.total -= product.price;
      cart.value.cartTotalPrice -= product.price;
      saveToLocalStorage(cart.value);
    }
  };

  return {
    isLoading,
    cart,
    getCart,
    addToCart,
    deleteFromCart,
    increaseQuantity,
    decreaseQuantity,
  };
});
