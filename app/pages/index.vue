<template>
  <div
    class="relative flex flex-1 flex-col items-center justify-center overflow-hidden"
  >
  <div class="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:45px_45px]"
 />
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
          class="font-bold mt-32 text-[clamp(2.6rem,13vw,8rem)] leading-[0.95] tracking-wide text-[#F6F6F6]"
        >
          RobotTech
          <br />
          Conference
        </h1>

        <h2
          class="mt-12 font-medium text-[clamp(1rem,2vw,2rem)] uppercase text-[#F6F6F6]"
        >
          Connect with engineers, founders, and AI leaders
          <br class="hidden sm:block" />
          shaping the next generation of robotics.
        </h2>

        <button
          class="group mt-12 flex h-20 w-full max-w-sm items-center justify-center gap-4 rounded-lg bg-gradient-to-r from-[#3ac2a9] via-[#2c9380] via-30% to-[#198773] to-150%"
        >
          <NuxtLink
            to="/speakers"
            class="relative text-[clamp(1.2rem,2vw,1.5rem)] text-white"
          >
            Join Event

            <span
              class="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-white transition-transform duration-150 group-hover:scale-x-100"
            />
          </NuxtLink>
        </button>

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
