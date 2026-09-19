<script setup lang="ts">
import { motion } from "motion-v";
</script>

<template>
  <div>
    <motion.div
      :initial="{ opacity: 0, y: 40 }"
      :whileInView="{ opacity: 1, y: 0 }"
      :inViewOptions="{ once: true }"
      :transition="{
        duration: 0.5,
        delay: 0.25,
        ease: 'easeOut',
      }"
      class="w-full"
    >
      <ContactForm />
    </motion.div>
  </div>
</template>