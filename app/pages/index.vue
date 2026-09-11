<script setup lang="ts">
import { motion } from "motion-v";
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Pagination,
  Parallax,
  Navigation,
  A11y,
  EffectCreative,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/parallax";
import "swiper/css/effect-creative";

const modules = [Pagination, Navigation, A11y, Parallax, EffectCreative];

const speakers = [
  {
    src: "/Marc Raibert.png",
    alt: "Marc Raibert",
    robot: "/Atlas.png",
    robotAlt: "Atlas",
  },
  {
    src: "/Elon Musk.png",
    alt: "Elon Musk",
    robot: "/Optimus.png",
    robotAlt: "Optimus",
  },
  {
    src: "/Brett Adcock.png",
    alt: "Brett Adcock",
    robot: "/F.02.png",
    robotAlt: "F.02",
  },
  {
    src: "/Wang Xingxing.png",
    alt: "Wang Xingxing",
    robot: "/Unitree G1.png",
    robotAlt: "Unitree G1",
  },
  {
    src: "/He Xiaopeng.png",
    alt: "He Xiaopeng",
    robot: "/XPeng Iron.png",
    robotAlt: "XPeng Iron",
  },
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
      class="relative max-w-7xl w-full mx-auto flex flex-1 flex-col items-center justify-center overflow-hidden px-4 borde"
    >
      <!-- Header -->
      <motion.div
        :initial="sectionVariants.hidden"
        :whileInView="sectionVariants.visible"
        :viewport="{ once: true, amount: 0.25 }"
        class="mx-auto mt-24 w-full text-center sm:text-start flex flex-col items-center justify-center"
      >
        <div class="relative w-full z-10 flex flex-col items-start">
          <h1
            class="font-bold text-[clamp(2.75rem,13vw,5.5rem)] leading-[0.95] tracking-wide text-white/90"
          >
            RobotTech Conference
            <!-- <br /> -->
          </h1>
        </div>
        <div
          class="relative w-full my-5 z-10 flex flex-col items-start text-center"
        >
          <h2
            class="font-roboto font-extralight text-[clamp(0.875rem,4vw,1.7rem)] text-white/90 leading-[1.2] tracking-wide"
          >
            Connect with engineers, founders, and AI leaders shaping the next
            generation of robotics.
            <!-- <br class="hidden sm:block" /> -->
          </h2>
        </div>
      </motion.div>

      <!-- Decktop -->
      <div class="relative my-10 max-w-7xl w-full hidden sm:flex px-10">
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
            class="relative h-auto w-1/6 gap-2"
          >
            <div
              class="relative flex flex-col items-center justify-center -skew-x-[19deg] max-w-[60vw] h-full w-full gap-1 mx-auto"
            >
              <!-- Вверхняя панель -->
              <div
                class="relative aspect-[4/3] flex justify-center h-full w-full gap-1 -left-4"
              >
                <div
                  class="relative w-[14%] rounded-sm bg-gradient-to-b from-[#60827d] to-[#246057]"
                >
                  <div
                    class="absolute bottom-2 left-0 right-0 text-[clamp(0.5rem,1vw,1rem)] font-roboto text-white/80 text-nowrap -rotate-90 -skew-x-[19deg]"
                  >
                    {{ speaker.alt }}
                  </div>
                </div>
                <div
                  class="relative w-full overflow-hidden rounded-sm bg-gradient-to-b from-[#60827d] to-[#246057]"
                >
                  <NuxtImg
                    :src="speaker.src"
                    :alt="speaker.alt"
                    class="absolute object-cover h-full w-full right-3 -bottom-0 skew-x-[19deg]"
                  />
                </div>
              </div>
              <!-- Нижняя панель -->
              <div
                class="relative aspect-[4/3] left-4 h-full w-full flex justify-center gap-1"
              >
                <div
                  data-swiper-parallax-y="300"
                  class="relative w-full overflow-hidden rounded-sm bg-gradient-to-t from-[#60827d] to-[#246057]"
                >
                  <NuxtImg
                    :src="speaker.robot"
                    :alt="speaker.robotAlt"
                    class="absolute object-cover h-[90%] w-full right-1 -bottom-0 skew-x-[19deg]"
                  />
                </div>
                <div
                  data-swiper-parallax-y="-1200"
                  class="relative w-[14%] h-full rounded-sm bg-gradient-to-t from-[#60827d] to-[#246057]"
                >
                  <div
                    class="absolute bottom-2 left-0 right-0 text-[clamp(0.5rem,1vw,1rem)] font-roboto text-white/80 text-nowrap -skew-x-[19deg] -rotate-90"
                  >
                    {{ speaker.robotAlt }}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <!-- Mobile -->
      <motion.div
        :initial="sectionVariants.hidden"
        :whileInView="sectionVariants.visible"
        :viewport="{ once: true, amount: 0.25 }"
        class="relative h-full w-full sm:hidden"
      >
        <Swiper
          :modules="modules"
          :speed="800"
          :effect="'creative'"
          :parallax="true"
          :slides-per-view="1"
          :space-between="10"
          :pagination="{ el: '.speakers-pagination', clickable: false }"
          :navigation="{
            nextEl: '.speakers-next',
            prevEl: '.speakers-prev',
          }"
          :creativeEffect="{
            prev: {
              shadow: false,
              translate: ['-100%', 0, 0],
              rotate: [0, 0, 0],
              opacity: 0,
            },
            next: {
              translate: ['100%', 0, 0],
              opacity: 1,
            },
          }"
          class="h-full w-full flex items-center justify-center"
        >
          <SwiperSlide
            v-for="(speaker, index) in speakers"
            :key="speaker.src"
            :custom="index"
          >
            <div
              class="relative flex flex-col items-center justify-center -skew-x-[19deg] max-w-[60vw] h-full w-full gap-1 mx-auto"
            >
              <!-- Вверхняя панель -->
              <div
                class="relative aspect-[4/3] flex justify-center h-full w-full gap-1 -left-4"
              >
                <div
                  data-swiper-parallax-y="1200"
                  class="relative w-[14%] rounded-sm bg-gradient-to-b from-[#60827d] to-[#246057]"
                >
                  <div
                    class="absolute bottom-4 left-0 right-0 text-[clamp(0.9rem,5vw,1.2rem)] font-roboto text-white/80 text-nowrap -skew-x-[19deg] -rotate-90"
                  >
                    {{ speaker.alt }}
                  </div>
                </div>
                <div
                  data-swiper-parallax-y="-300"
                  class="relative w-full overflow-hidden rounded-sm bg-gradient-to-b from-[#60827d] to-[#246057]"
                >
                  <NuxtImg
                    :src="speaker.src"
                    :alt="speaker.alt"
                    class="absolute object-cover h-full w-full right-3 -bottom-0 skew-x-[19deg]"
                  />
                </div>
              </div>
              <!-- Нижняя панель -->
              <div
                class="relative aspect-[4/3] left-4 h-full w-full flex justify-center gap-1"
              >
                <div
                  data-swiper-parallax-y="300"
                  class="relative w-full overflow-hidden rounded-sm bg-gradient-to-t from-[#60827d] to-[#246057]"
                >
                  <NuxtImg
                    :src="speaker.robot"
                    :alt="speaker.robotAlt"
                    class="absolute object-cover h-[90%] w-full right-1 -bottom-0 skew-x-[19deg]"
                  />
                </div>
                <div
                  data-swiper-parallax-y="-1200"
                  class="relative w-[14%] h-full rounded-sm bg-gradient-to-t from-[#60827d] to-[#246057]"
                >
                  <div
                    class="absolute bottom-4 right-0 left-0 -translate-x-0 -translate-y-0 text-[clamp(0.9rem,5vw,1.2rem)] font-roboto text-white/80 text-nowrap -skew-x-[19deg] -rotate-90"
                  >
                    {{ speaker.robotAlt }}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <!-- Arrows -->
        <button
          type="button"
          class="sm:hidden speakers-prev absolute -left-2 top-1/2 z-10 flex h-16 w-9 -translate-y-[3.5rem] items-center justify-center rounded-md bg-zinc-600 text-white/90 text-2xl"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          type="button"
          class="sm:hidden speakers-next absolute -right-2 top-1/2 z-10 flex h-16 w-9 -translate-y-[3.5rem] items-center justify-center rounded-md bg-zinc-600 text-white/90 text-2xl"
          aria-label="Next slide"
        >
          ›
        </button>
        <!-- Pagination -->
        <div class="relative speakers-pagination py-5 w-full mx-auto"></div>
      </motion.div>

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
          <span class="text-sm font-sans uppercase text-white/80 sm:text-base">
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
            <NuxtLink
              to="/speakers"
              class="relative font-display text-[clamp(1.5rem,2vw,1.5rem)] p-5 uppercase text-white drop-shadow-md text-center w-full"
            >
              View Speakers
            </NuxtLink>

            <span
              class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            ></span>
          </motion.button>
          <h3
            class="mt-1 text-sm font-sans uppercase text-white/80 sm:text-base"
          >
            International Conference · Berlin · May 2026 · 
          </h3>
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
.speakers-pagination {
  position: relative;
  bottom: auto;
  left: auto;
  right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  width: 100%;
  /* margin-top: 0px; */
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
