<template>
  <div
    class="relative flex min-h-dvh flex-col items-center bg-[#303030] overflow-x-hidden px-4"
  >
    <!-- Layout grid -->
    <!-- <div
      class="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:45px_45px]"
    ></div> -->
    <div
      class="absolute -right-[6rem] bottom-0 z-0 w-full sm:w-auto pointer-events-none"
    >
      <img
        src="/images/Dot_robottech_aligned.svg"
        alt=""
        class="block object-contain object-bottom w-full h-auto sm:h-screen opacity-40"
      />
    </div>

    <h1
      class="relative font-bold top-[8rem] text-[calc(2rem+4vw)] leading-[0.95] tracking-wide text-center text-[#F6F6F6]"
    >
      RobotTech <br />
      Conference
    </h1>

    <h2
      relative
      class="relative top-[12rem] font-medium text-[calc(1rem+0.5vw)] text-center text-[#F6F6F6] uppercase"
    >
      Connect with engineers, founders, and AI leaders <br />
      shaping the next generation of robotics.
    </h2>

    <button
      class="relative group top-[15rem] max-w-sm w-full h-20 bg-gradient-to-r from-[#3ac2a9] via-[#2c9380] via-30% to-[#198773] to-150% rounded-lg flex justify-center items-center gap-4"
    >
      <NuxtLink to="/speakers" class="relative text-xl text-white group">
        Join Event
        <span
          class="absolute left-0 -bottom-1 h-[2px] w-full bg-white scale-x-0 origin-left transition-transform duration-150 group-hover:scale-x-100"
        ></span>
      </NuxtLink>
    </button>
    <h3
      class="relative font-roboto top-[16rem] font-extralight text-xl text-center text-[#F6F6F6]"
    >
      International Conference
    </h3>
    <h3
      class="relative top-[16.3rem] font-roboto font-extralight text-sm text-center text-[#F6F6F6]"
    >
      · Berlin · May 2026 ·
    </h3>
  </div>
</template>
