import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/fonts", "motion-v/nuxt", "nuxt-swiper", "@nuxt/image"],
  vite: {
    plugins: [tailwindcss()],
  },
});
