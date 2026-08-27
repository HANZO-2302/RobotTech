<script setup lang="ts">
import { motion } from "motion-v";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const modules = [Pagination, Navigation, A11y];

const speakers = [
  { src: "images/Marc Raibert.svg", alt: "Marc Raibert" },
  { src: "images/Marc Raibert2.svg", alt: "Marc Raibert" },
  { src: "images/Marc Raibert3.svg", alt: "Marc Raibert" },
  { src: "images/Marc Raibert4.svg", alt: "Marc Raibert" },
  { src: "images/Marc Raibert5.svg", alt: "Marc Raibert" },
];

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: (custom: unknown) => {
    const index = custom as number;
    return {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.65, delay: index * 0.08, ease: "easeOut" },
    };
  },
};
</script>

<template>
  <div
    class="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-4"
  >
    <!-- Header -->
    <motion.div
      :initial="sectionVariants.hidden"
      :whileInView="sectionVariants.visible"
      :viewport="{ once: true, amount: 0.25 }"
      class="mx-auto mt-28"
    >
      <h2
        class="font-sans text-[clamp(2rem,10vw,4.5rem)] text-white/80 font-medium uppercase leading-[0.95] tracking-[-0.04em]"
      >
        The Future of Robotics & AI
      </h2>

      <p
        class="mt-3 text-[clamp(0.2rem,5vw,1.8rem)] font-roboto leading-relaxed text-white/80"
      >
        Engineers, founders and AI researchers shaping the industry today
      </p>
    </motion.div>

    <!-- Speakers -->
    <div class="relative max-w-7xl w-full hidden sm:flex">
      <div class="relative flex w-full flex-wrap items-center justify-between">
        <motion.div
          v-for="(speaker, index) in speakers"
          :key="speaker.src"
          :custom="index"
          :variants="cardVariants"
          initial="hidden"
          whileInView="visible"
          :viewport="{ once: true, amount: 0.25 }"
          class="relative h-auto w-1/5 overflow-hidden"
        >
          <NuxtImg
            :src="speaker.src"
            :alt="speaker.alt"
            class="h-auto w-full object-cover"
          />
        </motion.div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="relative w-full -translate-y-12   sm:hidden">
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="16"
        :pagination="{ clickable: true }"
        :navigation="{
          nextEl: '.speakers-next',
          prevEl: '.speakers-prev',
        }"
      >
        <SwiperSlide v-for="speaker in speakers" :key="speaker.src">
          <div class="relative h-auto w-full overflow-hidden">
            <NuxtImg
              :src="speaker.src"
              :alt="speaker.alt"
              class="h-auto w-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <!-- Arrows -->
    <button
      type="button"
      class="sm:hidden speakers-prev absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white"
      aria-label="Previous slide"
    >
      ‹
    </button>
    <button
      type="button"
      class=" sm:hidden speakers-next absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white"
      aria-label="Next slide"
    >
      ›
    </button>
    <div className="swiper-pagination mt-5" />

    <!-- Bottom CTA -->
    <motion.div
      :initial="{ opacity: 0, y: 30 }"
      :whileInView="{ opacity: 1, y: 0 }"
      :viewport="{ once: true, amount: 0.3 }"
      :transition="{
        duration: 0.7,
        delay: 0.25,
        ease: 'easeOut',
      }"
      class="mb-8 -mt-8 flex flex-col items-start gap-4 sm:mt-16 lg:ml-0 lg:mt-4"
    >
      <span
        class="text-sm font-sans uppercase tracking-[0.04em] text-white sm:text-base"
      >
        5+ Industry Leaders
      </span>

      <motion.button
        :whileHover="{
          scale: 1.02,
          y: -2,
        }"
        :whilePress="{
          scale: 0.97,
        }"
        :transition="{
          duration: 0.2,
        }"
        type="button"
        class="group relative h-[64px] w-full max-w-[386px] overflow-hidden rounded-[5px] border border-[#63b9ac]/30 bg-gradient-to-r from-[#429e90] to-[#286e64] px-8 text-left shadow-[0_8px_25px_rgba(0,0,0,0.2)] sm:h-[78px]"
      >
        <span
          class="relative z-10 font-sans text-[clamp(1.2rem,2vw,1.5rem)] tracking-wide text-white"
        >
          View Speakers
        </span>

        <span
          class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />
      </motion.button>
    </motion.div>
  </div>
</template>
<style>
/* ==========================================
   ОБЩИЕ СТИЛИ SWIPER
   ========================================== */
   .swiper-pagination {
  position: relative;
  bottom: auto;
  left: auto;
  right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  width: 100%;
}

.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  margin: 0;
  border-radius: 50px;
  background: #b1b1b1;
  opacity: 0.5;
  cursor: pointer;

  /* анимируем transform/opacity вместо width — не триггерит layout */
  transform: scaleX(1);
  transform-origin: center;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out, background-color 0.3s ease-out;

  /* подсказка браузеру заранее подготовить слой — критично для iOS Safari */
  will-change: transform, opacity;
  -webkit-transform: translateZ(0); /* форсируем GPU-слой на старых iOS */
  backface-visibility: hidden;
}

.swiper-pagination-bullet-active {
  width: 10px; /* базовая ширина не меняется */
  transform: scaleX(2.4); /* 10px * 2.4 = 24px, как у тебя было */
  opacity: 1;
  background: #1f8a71;
}

</style>
