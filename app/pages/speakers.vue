<script setup lang="ts">
import { motion } from 'motion-v'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

interface Speaker {
  name: string
  role: string
  robot: string
}

const speakers: Speaker[] = [
  {
    name: 'Marc Raibert',
    role: 'Founder of Boston Dynamics',
    robot: 'Atlas',
  },
  {
    name: 'Elon Musk',
    role: 'Founder & CEO',
    robot: 'Optimus',
  },
  {
    name: 'Brett Adcock',
    role: 'Founder of Figure AI',
    robot: 'Figure 02',
  },
  {
    name: 'Wang Xingxing',
    role: 'Founder & CEO',
    robot: 'Unitree G1',
  },
  {
    name: 'He Xiaopeng',
    role: 'Founder of XPeng',
    robot: 'Xpeng Iron',
  },
]

const modules = [Pagination, A11y]

const desktopBreakpoints = {
  640: {
    slidesPerView: 2.1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2.5,
    spaceBetween: 24,
  },
  1024: {
    slidesPerView: 3.5,
    spaceBetween: 26,
  },
  1280: {
    slidesPerView: 5,
    spaceBetween: 28,
  },
}

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
      ease: 'easeOut',
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      delay: index * 0.08,
      ease: 'easeOut',
    },
  }),
}
</script>

<template>
  <section
    id="speakers"
    class="relative bg-[#292929] py-20 text-white sm:py-24 lg:py-32"
  >

    <div class="relative mx-auto w-full max-w-7xl px-4">
      <!-- Header -->
      <motion.div
        :initial="sectionVariants.hidden"
        :whileInView="sectionVariants.visible"
        :viewport="{ once: true, amount: 0.25 }"
        class="mb-12 mx-auto sm:mb-16 lg:mb-24"
      >
        <h2
          class="font-sans text-[clamp(2rem,10vw,5rem)] font-medium uppercase leading-[0.95] tracking-[-0.04em] border"
        >
          The Future of Robotics & AI
        </h2>

        <p
          class="mt-3 text-base font-light leading-relaxed text-white/80 sm:text-lg lg:text-xl border"
        >
          Engineers, founders and AI researchers shaping the industry today
        </p>
      </motion.div>

      <!-- Speakers -->
      <div class="relative">
        <Swiper
          :modules="modules"
          :slides-per-view="1.15"
          :space-between="16"
          :breakpoints="desktopBreakpoints"
          :pagination="{
            clickable: true,
            dynamicBullets: true,
          }"
          :speed="700"
          :grab-cursor="true"
          :watch-slides-progress="true"
          class="speakers-swiper !overflow-visible"
        >
          <SwiperSlide
            v-for="(speaker, index) in speakers"
            :key="speaker.name"
            class="!h-auto"
          >
            <motion.article
              :custom="index"
              :initial="cardVariants.hidden"
              :whileInView="cardVariants.visible(index)"
              :viewport="{ once: true, amount: 0.15 }"
              :whileHover="{
                y: -8,
                scale: 1.015,
                transition: {
                  duration: 0.25,
                  ease: 'easeOut',
                },
              }"
              :whilePress="{
                scale: 0.985,
              }"
              class="group relative h-full min-h-[360px] cursor-pointer select-none sm:min-h-[400px] lg:min-h-[420px]"
            >
              <!-- PERSON -->
              <div
                class="speaker-card speaker-card-person relative h-[155px] overflow-hidden bg-gradient-to-br from-[#5d9f94] via-[#397f73] to-[#195c51] sm:h-[175px] lg:h-[185px]"
              />
                <!-- Future image goes here -->
                <div
                  class="absolute inset-0 flex items-center justify-center"
                >
                  <div
                    class="h-[78%] w-[55%] rounded-full border border-white/10 bg-white/[0.04]"
                  />
                </div>

                <!-- Name strip -->
                <div
                  class="absolute bottom-0 left-0 top-0 flex w-[42px] items-center justify-center bg-[#296d63]/90"
                >
                  <span
                    class="rotate-[-90deg] whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.03em] text-white/90 sm:text-xs"
                  >
                    {{ speaker.name }}
                  </span>
                </div>

                <!-- Decorative shine -->
                <!-- <div
                  class="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div> -->

              <!-- ROBOT -->
              <div
                class="speaker-card speaker-card-robot relative -mt-[1px] h-[155px] overflow-hidden bg-gradient-to-br from-[#327d70] via-[#166052] to-[#0d4037] sm:h-[175px] lg:h-[185px]"
              >
                <!-- Future robot image goes here -->
                <div
                  class="absolute inset-0 flex items-center justify-center"
                >
                  <div
                    class="relative h-[72%] w-[43%] rounded-[40%] border border-white/10 bg-white/[0.035]"
                  >
                    <div
                      class="absolute left-1/2 top-[25%] h-2 w-2 -translate-x-1/2 rounded-full bg-white/20"
                    />
                  </div>
                </div>

                <!-- Robot name strip -->
                <div
                  class="absolute bottom-0 right-0 top-0 flex w-[42px] items-center justify-center bg-[#21685d]/90"
                >
                  <span
                    class="rotate-[90deg] whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.03em] text-white/90 sm:text-xs"
                  >
                    {{ speaker.robot }}
                  </span>
                </div>
              </div>

              <!-- Card separator -->
              <div
                class="absolute left-[43px] right-[40px] top-1/2 z-20 h-px bg-white/20"
              />

              <!-- Hover border -->
              <div
                class="pointer-events-none absolute inset-0 border border-white/0 transition-colors duration-300 group-hover:border-[#69c7b8]/50"
              />
            </motion.article>
          </SwiperSlide>
        </Swiper>
      </div>

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
        class="mt-12 flex flex-col items-start gap-4 sm:mt-16 lg:ml-0 lg:mt-20"
      >
        <span
          class="text-sm font-medium uppercase tracking-[0.04em] text-white sm:text-base"
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
            class="relative z-10 font-display text-xl font-medium uppercase tracking-wide text-white sm:text-2xl"
          >
            View Speakers
          </span>

          <span
            class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          />
        </motion.button>
      </motion.div>
    </div>
  </section>
</template>

<style scoped>
.speaker-card {
  clip-path: polygon(14% 0, 100% 0, 86% 100%, 0 100%);
}

.speaker-card-person {
  clip-path: polygon(14% 0, 100% 0, 86% 100%, 0 100%);
}

.speaker-card-robot {
  clip-path: polygon(14% 0, 100% 0, 86% 100%, 0 100%);
}

/*
 * Mobile:
 * Make cards slightly larger so the swipe interaction
 * feels intentional rather than like a desktop layout squeezed down.
 */
@media (max-width: 639px) {
  .speaker-card-person,
  .speaker-card-robot {
    min-height: 165px;
  }
}

/*
 * Swiper pagination
 */
.speakers-swiper :deep(.swiper-pagination) {
  position: relative;
  margin-top: 28px;
  bottom: auto;
}

.speakers-swiper :deep(.swiper-pagination-bullet) {
  width: 6px;
  height: 6px;
  margin: 0 4px !important;
  opacity: 0.35;
  background: #ffffff;
  transition:
    width 0.3s ease,
    opacity 0.3s ease;
}

.speakers-swiper :deep(.swiper-pagination-bullet-active) {
  width: 22px;
  border-radius: 999px;
  opacity: 1;
  background: #4ba99b;
}

/*
 * On desktop there is no need for pagination because
 * all five speakers are visible.
 */
@media (min-width: 1280px) {
  .speakers-swiper :deep(.swiper-pagination) {
    display: none;
  }
}

/*
 * Keep Swiper from shrinking the cards unexpectedly.
 */
.speakers-swiper :deep(.swiper-slide) {
  height: auto;
}
</style>
