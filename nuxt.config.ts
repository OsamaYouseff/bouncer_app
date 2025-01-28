// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-toastify"],
  // devtools: { enabled: true }

  toastify: {
    autoClose: 2000,
    position: "top-right",
    theme: "auto",
  },

  build: {
    loaders: {
      pug: {
        // Optional pug-specific options
      },
    },
  },
});
