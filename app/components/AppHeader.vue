<template>
  <motion.header
    :animate="{ y: isHidden ? '-180%' : '0%' }"
    :transition="{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }"
    class="fixed top-4 left-0 right-0 z-50 mx-auto px-4 w-full max-w-7xl"
  >
    <div
      class="relative flex items-center justify-between sm:justify-center rounded-xl bg-gradient-to-r from-[#3ac2a9] via-[#2c9380] via-30% to-[#198773] to-150% px-5 py-4 text-white shadow-lg shadow-black/10"
    >
      <!-- Логотип (виден только на мобиле, где нав скрыт) -->
      <NuxtLink to="/" class="text-sm font-semibold tracking-wide sm:hidden">
        LOGO
      </NuxtLink>

      <!-- Десктоп-навигация -->
      <nav class="hidden sm:block">
        <ul
          class="li-hheader flex items-center space-x-10 md:space-x-16 lg:space-x-36 text-sm font-medium"
        >
          <li><NuxtLink to="/">EVENTS</NuxtLink></li>
          <li><NuxtLink to="/speakers">SPEAKERS</NuxtLink></li>
          <li><NuxtLink to="/contacts">CONTACT</NuxtLink></li>
          <li><NuxtLink to="/error">SIGN IN</NuxtLink></li>
        </ul>
      </nav>

      <!-- Бургер-кнопка (мобайл) -->
      <button
        type="button"
        class="relative z-10 flex h-8 w-8 flex-col items-center justify-center gap-[6px] sm:hidden"
        :aria-expanded="isMenuOpen"
        aria-label="Открыть меню"
        @click="isMenuOpen = !isMenuOpen"
      >
        <motion.span
          class="block h-[2px] w-6 bg-white"
          :animate="{
            rotate: isMenuOpen ? 45 : 0,
            y: isMenuOpen ? 8 : 0,
          }"
          :transition="{ duration: 0.25 }"
        />
        <motion.span
          class="block h-[2px] w-6 bg-white"
          :animate="{ opacity: isMenuOpen ? 0 : 1 }"
          :transition="{ duration: 0.2 }"
        />
        <motion.span
          class="block h-[2px] w-6 bg-white"
          :animate="{
            rotate: isMenuOpen ? -45 : 0,
            y: isMenuOpen ? -8 : 0,
          }"
          :transition="{ duration: 0.25 }"
        />
      </button>
    </div>

    <!-- Мобильное меню -->
    <AnimatePresence>
      <motion.nav
        v-if="isMenuOpen"
        :initial="{ opacity: 0, height: 0 }"
        :animate="{ opacity: 1, height: 'auto' }"
        :exit="{ opacity: 0, height: 0 }"
        :transition="{ duration: 0.3, ease: 'easeInOut' }"
        class="mt-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#3ac2a9] via-[#2c9380] via-30% to-[#198773] to-150% sm:hidden"
      >
        <ul
          class="li-hheader flex flex-col items-center gap-6 py-6 text-sm font-medium text-white"
        >
          <li>
            <NuxtLink to="/" @click="isMenuOpen = false">EVENTS</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/speakers" @click="isMenuOpen = false"
              >SPEAKERS</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/contacts" @click="isMenuOpen = false"
              >CONTACT</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/error" @click="isMenuOpen = false">SIGN IN</NuxtLink>
          </li>
        </ul>
      </motion.nav>
    </AnimatePresence>
  </motion.header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion-v";

const isMenuOpen = ref(false);
const isHidden = ref(false);

const { scrollY } = useScroll();
let lastScrollY = 0;
const SCROLL_THRESHOLD = 80; // не прячем хедер пока не проскроллили ниже этой точки

useMotionValueEvent(scrollY, "change", (latest) => {
  // не скрываем хедер, пока открыто мобильное меню
  if (isMenuOpen.value) {
    lastScrollY = latest;
    return;
  }

  const diff = latest - lastScrollY;

  if (latest < SCROLL_THRESHOLD) {
    isHidden.value = false;
  } else if (diff > 4) {
    isHidden.value = true; // скролл вниз — прячем
  } else if (diff < -4) {
    isHidden.value = false; // скролл вверх — показываем
  }

  lastScrollY = latest;
});
</script>

<style scoped>
.li-hheader a {
  text-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
}
</style>

<!-- <template>
  <div>
    <header class="absolute top-[2.5rem] left-0 right-0 bg-gradient-to-r from-[#3ac2a9] via-[#2c9380] via-30% to-[#198773] to-150% mx-auto rounded-xl w-full max-w-7xl text-black py-4">
      <nav>
        <ul class="flex justify-center space-x-36 text-white font-medium text-sm li-hheader">
          <li><a href="/">EVENTS</a></li>
          <li><a href="/speakers">SPEAKERS</a></li>
          <li><a href="/contacts">CONTACT</a></li>
          <li><a href="/services">SIGN IN</a></li>
          
        </ul>
      </nav>
    </header>
  </div>
</template>

<style scoped>
.li-hheader {
  text-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
}   
</style> -->
