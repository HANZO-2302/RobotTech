<template>
  <div class="relative flex min-h-[calc(var(--vh,1vh)*100)] flex-col bg-[#303030]">
    <AppHeader />

    <main class="flex flex-1 flex-col">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
