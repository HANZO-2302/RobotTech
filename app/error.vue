<script setup lang="ts">
import type { NuxtError } from "#app";
import { motion } from "motion-v";

const props = defineProps<{ error: NuxtError }>();

const diagnostics = [
  { label: "MODEL", value: "T-800" },
  { label: "CPU", value: "ONLINE" },
  { label: "TARGET", value: "NOT FOUND" },
  { label: "THREAT", value: "UNKNOWN" },
];

const coordinates = {
  x: "34.281",
  y: "71.924",
  z: "12.447",
};
</script>

<template>
  <div class="relative min-h-svh overflow-hidden bg-[#05090A] text-red-500">
    <!-- ================================================= -->
    <!-- TERMINATOR IMAGE -->
    <!-- ================================================= -->

    <motion.div
      :initial="{  scale: 0.7, skewY: 25, opacity: 0 }"
      :animate="{  scale: 1, skewY: 0, opacity: 1 }"
      :transition="{
        duration: 3,
        ease: 'easeInOut',
      }"
      class="absolute inset-y-0 right-0 h-dvh w-auto"
    >
      <!-- Left cinematic fade -->
      <div
        class="absolute inset-y-0 left-0 z-10 w-[75%] bg-gradient-to-r from-[#05090A] via-[#05090A]/95 to-transparent"
      />

      <!-- Bottom fade -->
      <div
        class="absolute inset-x-0 bottom-0 z-10 h-[35%] bg-gradient-to-t from-[#05090A] to-transparent"
      />

      <!-- Top fade -->
      <div
        class="absolute inset-x-0 top-0 z-10 h-[20%] bg-gradient-to-b from-[#05090A]/50 to-transparent"
      />
      <NuxtImg
        src="/images/404.webp"
        alt="Robot Error"
        class="h-full w-full object-cover"
      />
    </motion.div>

    <!-- ================================================= -->
    <!-- HUD -->
    <!-- ================================================= -->

    <div
      class="relative z-20 flex min-h-svh -mt-8 items-center px-6 sm:px-10 lg:px-20"
    >
      <div class="w-full max-w-xl">
        <!-- TOP SYSTEM LABEL -->
        <motion.div
          :initial="{ opacity: 0, x: -60 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{
            duration: 0.7,
            ease: 'easeOut',
          }"
          class="mb-4 flex items-center gap-3 font-mono text-[9px] tracking-[0.35em] text-red-500/60 sm:text-xs"
        >
          <span class="h-px w-8 bg-red-500/60" />

          TARGET ACQUISITION SYSTEM

          <motion.span
            :animate="{ opacity: [1, 0.2, 1] }"
            :transition="{
              duration: 1,
              repeat: Infinity,
            }"
            class="h-1.5 w-1.5 rounded-full bg-red-500"
          />
        </motion.div>

        <!-- 404 -->
        <motion.h1
          :initial="{
            opacity: 0,
            scale: 0.7,
            x: -30,
          }"
          :animate="{
            opacity: 1,
            scale: 1,
            x: 0,
          }"
          :transition="{
            duration: 0.8,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }"
          class="text-[6rem] font-black leading-none sm:text-[8rem] lg:text-[10rem]"
        >
          {{ error.status }}
        </motion.h1>

        <!-- SYSTEM STATUS -->
        <div class="mt-5 space-y-2 font-mono text-[10px] sm:text-xs">
          <motion.div
            v-for="(item, index) in diagnostics"
            :key="item.label"
            :initial="{ opacity: 0, x: -30 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{
              duration: 0.4,
              delay: 0.8 + index * 0.12,
            }"
            class="flex items-center gap-3"
          >
            <span class="w-16 text-red-500/35">
              {{ item.label }}
            </span>

            <span class="text-red-500/70"> : </span>

            <span
              :class="
                item.value === 'NOT FOUND' ? 'text-red-500' : 'text-red-500/60'
              "
            >
              {{ item.value }}
            </span>
          </motion.div>
        </div>

        <!-- DIVIDER -->
        <motion.div
          :initial="{ scaleX: 0, opacity: 0 }"
          :animate="{ scaleX: 1, opacity: 1 }"
          :transition="{
            duration: 0.7,
            delay: 1.35,
          }"
          class="my-7 h-px max-w-md origin-left bg-red-500/30"
        />

        <!-- TARGET DATA -->
        <motion.div
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{
            duration: 0.5,
            delay: 1.5,
          }"
          class="font-mono text-[9px] leading-5 tracking-[0.15em] text-red-500/45 sm:text-[10px]"
        >
          <div>TARGET COORDINATES</div>

          <div class="flex gap-5">
            <span>X: {{ coordinates.x }}</span>
            <span>Y: {{ coordinates.y }}</span>
            <span>Z: {{ coordinates.z }}</span>
          </div>
        </motion.div>

        <!-- ERROR MESSAGE -->
        <motion.div
          :initial="{ opacity: 0, y: 15 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{
            duration: 0.6,
            delay: 1.7,
          }"
          class="mt-7"
        >
          <div
            class="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-red-500/90"
          >
            > SYSTEM FAILURE
          </div>

          <p
            class="max-w-md font-mono text-xs uppercase leading-6 tracking-[0.15em] text-red-500/50"
          >
            The requested target does not exist.
            <br />
            Searching for alternate route...
          </p>

          <!-- HOME BUTTON -->
          <NuxtLink
            to="/"
            class="group mt-3 inline-flex items-center gap-3 border border-red-500/30 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-red-500 transition-all duration-300 hover:border-red-500 hover:bg-red-500/5"
          >
            <span
              class="transition-transform duration-300 group-hover:translate-x-1"
            >
              >
            </span>

            Return to base

            <motion.span
              :animate="{ opacity: [1, 0, 1] }"
              :transition="{
                duration: 0.8,
                repeat: Infinity,
              }"
              class="h-3 w-px bg-red-500"
            />
          </NuxtLink>
        </motion.div>
      </div>
    </div>

    <!-- ================================================= -->
    <!-- SCANNING LINE -->
    <!-- ================================================= -->

    <motion.div
      :initial="{ top: '-10%' }"
      :animate="{ top: '110%' }"
      :transition="{
        duration: 2,
        repeat: Infinity,
        ease: 'linear',
      }"
      class="pointer-events-none absolute left-0 z-30 h-px w-full bg-red-500/30 shadow-[0_0_15px_rgba(255,0,0,0.9)]"
    />

    <!-- ================================================= -->
    <!-- SCREEN SCANLINES -->
    <!-- ================================================= -->

    <div
      class="pointer-events-none absolute inset-0 z-30 opacity-[0.025]"
      style="
        background-image: repeating-linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0.5) 0px,
          rgba(255, 255, 255, 0.5) 1px,
          transparent 1px,
          transparent 4px
        );
      "
    />

    <!-- ================================================= -->
    <!-- CORNER HUD -->
    <!-- ================================================= -->

    <motion.div
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :transition="{ delay: 2 }"
      class="pointer-events-none absolute bottom-6 left-6 z-30 font-mono text-[8px] tracking-[0.2em] text-red-500/70 sm:left-10"
    >
      SYSTEM // 800
      <br />
      CYBERDYNE SYSTEMS
      <br />
      VERSION 2.4.1
    </motion.div>

    <!-- STATUS -->
    <motion.div
      :animate="{ opacity: [0.3, 1, 0.3] }"
      :transition="{
        duration: 2,
        repeat: Infinity,
      }"
      class="pointer-events-none absolute bottom-6 right-6 z-30 font-mono text-[8px] tracking-[0.2em] text-red-500"
    >
      SCANNING...
    </motion.div>
  </div>
</template>

<!-- <script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center text-center bg-[#05090A] gap-4"
  >
    <div class="absolute right-0 h-dvh w-auto">
      <div
        class="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#05090A] to-transparent"
      ></div>

      <img
        src="/images/404.webp"
        alt="Robot Error"
        width="300"
        height="300"
        class="w-full h-full object-cover"
      />
    </div>
    <h1 class="text-8xl text-red-500 font-bold z-20">{{ error.status }}</h1>
    <NuxtLink to="/" class="text-red-500 text-xl hover:underline z-20"
      >Go back home</NuxtLink
    >
  </div>
</template> -->
