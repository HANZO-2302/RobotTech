<template>
  <div class="relative flex min-h-svh flex-col bg-[#303030]">
    <AppHeader />

    <main class="flex flex-1 flex-col">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
