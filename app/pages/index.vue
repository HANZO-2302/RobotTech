<template>
  <div
    class="relative min-h-dvh flex flex-col items-center overflow-hidden bg-[#303030]"
  >
    <!-- Background -->
    <div
      class="pointer-events-none absolute right-0 bottom-16 z-0 w-full sm:w-auto"
    >
      <img
        src="/images/Dot_robottech_aligned.svg"
        alt=""
        class="block h-auto w-full object-contain object-bottom opacity-40 sm:h-screen"
      />
    </div>
    <div class="flex-1 px-4">
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
          class="mt-0 font-roboto text-center text-[clamp(0.8rem,3vw,1rem)] font-extralight text-[#F6F6F6]"
        >
          · Berlin · May 2026 ·
        </h3>
      </div>
    </div>
    <div class="relative mt-0 bottom-0 w-full">
      <AppFooter />
    </div>
  </div>
</template>
