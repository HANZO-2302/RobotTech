<script>
import { motion } from "motion-v";

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
</script>
<template>
  <div class="relative flex min-h-svh flex-col bg-[#303030]">
    <AppHeader />

    <main class="flex flex-1 flex-col">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
