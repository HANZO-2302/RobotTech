/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Audiowide", "sans-serif"], // font-sans
        display: ["Inter", "sans-serif"], // font-display (опционально)
      },
    },
  },
};
