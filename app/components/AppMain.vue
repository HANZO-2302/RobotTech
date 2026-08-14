<template>
  <div
    class="relative isolate flex min-h-dvh flex-col items-center bg-[#303030]"
  >
    <div
      class="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:45px_45px]"
    ></div>

    <div class="relative z-10 flex w-full max-w-[1440px] flex-col items-center">
      <AppHeader />
      <h1
        relative
        class="relative  top-[14rem] font-bold text-8xl text-center text-[#F6F6F6]"
      >
        RobotTech <br />
        Conference
      </h1>
      <h2
        relative
        class="relative top-[19rem] font-medium text-3xl text-center text-[#F6F6F6] uppercase"
      >
        Connect with engineers, founders, and AI leaders <br />
        shaping the next generation of robotics.
      </h2>
    </div>
  </div>
</template>
