<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
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