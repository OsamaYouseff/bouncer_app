// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@element-plus/nuxt", "@pinia/nuxt"],
  // devtools: { enabled: true }

  // Add the following `build` configuration
  build: {
    loaders: {
      pug: {
        // Optional pug-specific options
      },
    },
  },
});
