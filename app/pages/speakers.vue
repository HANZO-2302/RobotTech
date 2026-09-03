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
  { src: "images/Elon Musk4.svg", alt: "Elon Musk" },
  { src: "images/Brett Adcock2.svg", alt: "Brett Adcock" },
  { src: "images/Wang Xingxing.svg", alt: "Wang Xingxing" },
  { src: "images/He Xiaopeng.svg", alt: "He Xiaopeng" },
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
      duration: 0.5,
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
      transition: { duration: 0.5, delay: index * 0.08, ease: "easeOut" },
    };
  },
};
</script>

<template>
  <!-- <div class="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:45px_45px]"
 /> -->
  <div class="relative flex flex-1 flex-col items-center justify-center">
    <!-- Background -->
    <div
      class="pointer-events-none absolute right-0 bottom-0 z-0 w-full sm:w-auto"
    >
      <img
        src="/images/Dot_robottech_aligned.svg"
        alt=""
        class="block h-auto w-full object-contain object-bottom opacity-40 sm:h-screen"
      />
    </div>

    <div
      class="relative max-w-7xl w-full mx-auto flex flex-1 flex-col items-center justify-center overflow-hidden px-4"
    >
      <!-- Header -->
      <motion.div
        :initial="sectionVariants.hidden"
        :whileInView="sectionVariants.visible"
        :viewport="{ once: true, amount: 0.25 }"
        class="mx-auto w-full text-center sm:text-start mt-24 flex flex-col items-center justify-center"
      >
        <h2
          class="w-full font-bold text-[clamp(2.1rem,10vw,3.8rem)] leading-[0.95] tracking-wide text-white/90"
        >
          The Future of Robotics & AI
        </h2>
        <p
          class="w-full my-4 text-[clamp(1rem,5vw,1.8rem)] font-roboto leading-6 text-white/80"
        >
          Engineers, founders and AI researchers shaping the industry today
        </p>
      </motion.div>

      <!-- Decktop -->
      <div class="relative max-w-7xl w-full hidden sm:flex">
        <div
          class="relative flex w-full flex-wrap items-center justify-between"
        >
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
            <img
              :src="speaker.src"
              :alt="speaker.alt"
              class="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      <!-- Mobile -->
      <motion.div
        :initial="sectionVariants.hidden"
        :whileInView="sectionVariants.visible"
        :viewport="{ once: true, amount: 0.25 }"
        class="relative -mt-16 w-full sm:hidden"
      >
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="16"
          :pagination="{ clickable: true }"
          :navigation="{
            nextEl: '.speakers-next',
            prevEl: '.speakers-prev',
          }"
          class="aspect-[3/4] w-full"
        >
          <SwiperSlide v-for="speaker in speakers" :key="speaker.src">
            <div class="relative h-full w-full overflow-hidden">
              <img
                :src="speaker.src"
                :alt="speaker.alt"
                class="h-full w-full object-contain"
              />
            </div>
          </SwiperSlide>
          <!-- <div class="swiper-pagination border h-10 w-auto"></div> -->
        </Swiper>
        <!-- Arrows -->
        <button
          type="button"
          class="sm:hidden speakers-prev absolute -left-2 top-1/2 z-10 flex h-16 w-9 -translate-y-1/2 items-center justify-center rounded-md bg-zinc-600 text-white/90 text-2xl"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          type="button"
          class="sm:hidden speakers-next absolute -right-2 top-1/2 z-10 flex h-16 w-9 -translate-y-1/2 items-center justify-center rounded-md bg-zinc-600 text-white/90 text-2xl"
          aria-label="Next slide"
        >
          ›
        </button>
      </motion.div>
      <!-- Pagination -->

      <!-- Bottom CTA -->
      <div class="w-full">
        <motion.div
          :initial="{ opacity: 0, y: -30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{
            duration: 0.5,
            delay: 0.25,
            ease: 'easeOut',
          }"
          class="relative mb-10 flex flex-col items-center md:items-start text-center justify-center gap-2"
        >
          <span class="text-sm font-sans uppercase text-white sm:text-base">
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
            class="group flex justify-center w-full max-w-sm relative overflow-hidden rounded-[5px] bg-gradient-to-r from-[#429e90] to-[#286e64] text-left shadow-[0_8px_25px_rgba(0,0,0,0.2)]"
          >
            <span
              class="relative z-10 font-sans text-[clamp(1.2rem,2vw,1.5rem)] p-5 tracking-wide text-white"
            >
              View Speakers
            </span>

            <span
              class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
            <span
              class="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-white transition-transform duration-150 group-hover:scale-x-100"
            />
          </motion.button>
        </motion.div>
      </div>
    </div>
  </div>
</template>

<style>
p {
  font-family: Arial, sans-serif;
  font-weight: 100; /* Тонкий */
}
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
  margin-top: -40px;
  /* background-color: #1f8a71; */
}

.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  margin: 0;
  border-radius: 9999px;
  background: #b1b1b1;
  opacity: 0.5;
  cursor: pointer;

  transition:
    width 0.3s ease-out,
    opacity 0.3s ease-out,
    background-color 0.3s ease-out;

  /* Аппаратное ускорение для всех браузеров */
  -webkit-transform: translateZ(0); /* Safari, iOS, старые браузеры */
  transform: translateZ(0); /* Современные браузеры */

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  will-change: width, opacity;
}

.swiper-pagination-bullet-active {
  width: 24px;
  opacity: 1;
  background: #1f8a71;
}
</style>
