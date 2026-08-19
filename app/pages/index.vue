<template>
  <div class="relative flex min-h-dvh flex-col items-center bg-[#303030]">
    <!-- Layout grid -->
    <div
      class="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:45px_45px]"
    ></div>

    <div class="relative z-10 flex w-full max-w-[1440px] flex-col items-center">
      <AppHeader />
      <h1
        relative
        class="relative top-[10rem] font-bold text-8xl text-center text-[#F6F6F6]"
      >
        RobotTech <br />
        Conference
      </h1>
      <h2
        relative
        class="relative top-[15rem] font-medium text-3xl text-center text-[#F6F6F6] uppercase"
      >
        Connect with engineers, founders, and AI leaders <br />
        shaping the next generation of robotics.
      </h2>
      <h3
        class="relative font-roboto top-[20rem] font-extralight text-2xl text-center text-[#F6F6F6]"
      >
        International Conference · Berlin · May 2026
      </h3>
      <button
        class="relative group top-[20rem] max-w-sm w-full h-20 bg-gradient-to-r from-[#3ac2a9] via-[#2c9380] via-30% to-[#198773] to-150% rounded-lg flex justify-center items-center gap-4"
      >
        <NuxtLink to="/speakers" class="relative text-xl text-white group">
          Join Event
          <span
            class="absolute left-0 -bottom-1 h-[2px] w-full bg-white scale-x-0 origin-left transition-transform duration-150 group-hover:scale-x-100"
          ></span>
        </NuxtLink>
      </button>
    </div>
  </div>
</template>
