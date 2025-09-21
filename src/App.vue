<script setup lang="ts">
import { watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'

// Main App component - will be updated with router-view
const { locale } = useI18n()

// Watch for locale changes and apply appropriate font
watchEffect(() => {
  const body = document.body
  if (locale.value === 'ar') {
    body.classList.remove('latin-font')
    body.classList.add('arabic-font')
  } else {
    body.classList.remove('arabic-font')
    body.classList.add('latin-font')
  }
})
</script>

<template>
  <div id="app">
    <!-- Router view will be added here -->
    <router-view />
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
