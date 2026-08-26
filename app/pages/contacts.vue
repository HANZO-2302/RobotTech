<template>
  <div
    class="min-h-[calc(var(--vh,1vh)*100)] flex flex-col items-center justify-center text-center gap-4 bg-[#303030]"
  >
  <!-- Layout grid -->
    <div
      class="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:45px_45px]"
    ></div>

    <h1 class="text-9xl font-bold">Welcome to the Contact Page</h1>
    <NuxtLink to="/speakers" class="text-blue-600 text-xl hover:underline"
      >Go to Speakers Page</NuxtLink
    >
  </div>
</template>
