<script setup lang="ts">
import { ref } from "vue";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion-v";

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

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

<template>
  <!--Header может узжать вверх если заменить '-0%' на '-180%'     :animate="{ y: isHidden ? '-0%' : '0%' }"  
    :transition="{ duration: 0.1, ease: 'linear' }" -->
  <motion.header
    :initial="sectionVariants.hidden"
    :whileInView="sectionVariants.visible"
    ::inViewOptions="{ once: true, amount: 0.25 }"
    class="fixed left-0 right-0 z-50 mx-auto pt-4 w-full max-w-7xl px-4 bg-[#303030]"
  >
    <div
      class="relative flex items-center justify-between sm:justify-center rounded-xl bg-gradient-to-l from-[#4a9d90] via-[#3d8a7e] via-50% to-[#246057] px-5 py-3 text-white shadow-lg shadow-black/30"
    >
      <!-- Логотип (виден только на мобиле, где нав скрыт) -->
      <NuxtLink to="/" class="text-sm font-semibold tracking-wide">
        <NuxtImg
          src="/images/logo.png"
          alt="Footer by Hanzo"
          class="absolute left-5 -translate-x-0 -translate-y-1/2 h-auto w-8 drop-shadow-[0_2px_1px_rgba(0,0,0,0.4)]"
        />
      </NuxtLink>

      <!-- Десктоп-навигация -->
      <nav class="hidden sm:block">
        <ul
          class="li-hheader flex items-center space-x-10 md:space-x-12 lg:space-x-28 text-sm font-medium"
        >
          <li>
            <NuxtLink
              to="/"
              class="group relative inline-block p-1 px-4 drop-shadow-[0_2px_1px_rgba(0,0,0,0.3)]"
              >EVENTS
              <span
                class="absolute bottom-0 left-0 h-[2px] rounded-sm w-full origin-left scale-x-0 border-b-2 border-white transition-transform duration-300 drop-shadow-[0_2px_1px_rgba(0,0,0,0.1)] group-[.router-link-exact-active]:drop-shadow-[0_2px_1px_rgba(0,0,0,0.1)] group-hover:scale-x-100 group-[.router-link-exact-active]:scale-x-100"
              ></span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/speakers"
              class="group relative inline-block p-1 px-4 drop-shadow-[0_2px_1px_rgba(0,0,0,0.3)]"
              >SPEAKERS
              <span
                class="absolute bottom-0 left-0 h-[2px] rounded-sm w-full origin-left scale-x-0 border-b-2 border-white transition-transform duration-300 drop-shadow-[0_2px_1px_rgba(0,0,0,0.1)] group-[.router-link-exact-active]:drop-shadow-[0_2px_1px_rgba(0,0,0,0.1)] group-hover:scale-x-100 group-[.router-link-exact-active]:scale-x-100"
              ></span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/contacts"
              class="group relative inline-block p-1 px-4 drop-shadow-[0_2px_1px_rgba(0,0,0,0.3)]"
              >CONTACT
              <span
                class="absolute bottom-0 left-0 h-[2px] rounded-sm w-full origin-left scale-x-0 border-b-2 border-white transition-transform duration-300 drop-shadow-[0_2px_1px_rgba(0,0,0,0.1)] group-[.router-link-exact-active]:drop-shadow-[0_2px_1px_rgba(0,0,0,0.1)] group-hover:scale-x-100 group-[.router-link-exact-active]:scale-x-100"
              ></span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/error"
              class="group relative inline-block p-1 px-4 drop-shadow-[0_2px_1px_rgba(0,0,0,0.3)]"
              >SIGN IN
              <span
                class="absolute bottom-0 left-0 h-[2px] rounded-sm w-full origin-left scale-x-0 border-b-2 border-white transition-transform duration-300 drop-shadow-[0_2px_1px_rgba(0,0,0,0.1)] group-[.router-link-exact-active]:drop-shadow-[0_2px_1px_rgba(0,0,0,0.1)] group-hover:scale-x-100 group-[.router-link-exact-active]:scale-x-100"
              ></span>
            </NuxtLink>
          </li>
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
        class="mt-2 z-50 overflow-hidden rounded-xl bg-gradient-to-l from-[#4a9d90] via-[#3d8a7e] via-50% to-[#246057] sm:hidden"
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
