<script setup lang="ts">
import { motion } from "motion-v";
</script>

<template>
  <div
    class="relative flex flex-1 flex-col items-center justify-center overflow-hidden"
  >
    <!-- <div class="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:45px_45px]"
 /> -->
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

    <div class="w-full px-4">
      <!-- Content -->
      <div class="relative z-10 flex flex-col items-center text-center">
        <h1
          class="font-bold text-[clamp(2.6rem,13vw,8rem)] leading-[0.95] tracking-wide text-[#F6F6F6]"
        >
          RobotTech
          <br />
          Conference
        </h1>

        <h2
          class="mt-14 font-medium text-[clamp(1rem,2vw,2rem)] uppercase text-[#F6F6F6]"
        >
          Connect with engineers, founders, and AI leaders
          <br class="hidden sm:block" />
          shaping the next generation of robotics.
        </h2>

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
          class="group mt-10 flex justify-center w-full max-w-sm relative overflow-hidden rounded-[5px] bg-gradient-to-r from-[#429e90] to-[#286e64] text-left shadow-[0_8px_25px_rgba(0,0,0,0.2)]"
        >
          <NuxtLink
            to="/speakers"
            class="relative text-[clamp(1.2rem,2vw,1.5rem)] p-5 text-white text-center w-full"
          >
            Join Event

            <!-- <span
              class="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-white transition-transform duration-150 group-hover:scale-x-100"
            /> -->
          </NuxtLink>

          <span
            class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          />
        </motion.button>

        <h3
          class="mt-5 font-roboto text-center text-[clamp(1.2rem,2vw,1.5rem)] font-extralight text-[#F6F6F6]"
        >
          International Conference
        </h3>

        <h3
          class="mb-0 font-roboto text-center text-[clamp(0.8rem,3vw,1rem)] font-extralight text-[#F6F6F6]"
        >
          · Berlin · May 2026 ·
        </h3>
      </div>
    </div>
  </div>
</template>
