<script setup lang="ts">
import { Toaster } from "vue-sonner";
import "vue-sonner/style.css"; // важно — стили тостов
</script>




<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <Toaster richColors position="top-right" />
    </NuxtLayout>
  </div>
</template>

<!-- <script setup lang="ts">
function setViewportUnit() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
}

if (import.meta.client) {
  onMounted(() => {
    setViewportUnit()
    window.addEventListener('resize', setViewportUnit)
    window.addEventListener('orientationchange', setViewportUnit)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', setViewportUnit)
    window.removeEventListener('orientationchange', setViewportUnit)
  })
}
</script> -->
