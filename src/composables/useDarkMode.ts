import { ref, watchEffect } from 'vue'

export function useDarkMode() {
  const isDark = ref(false)

  // Check for saved theme preference or default to light mode
  const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      // Check system preference
      isDark.value = window.matchMedia('(prefers-color-scheme: light)').matches
    }
  }

  // Toggle theme
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  // Apply theme to document
  const applyTheme = () => {
    const root = document.documentElement
    if (isDark.value) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  // Initialize theme on mount
  initializeTheme()

  // Watch for changes and apply theme
  watchEffect(() => {
    applyTheme()
  })

  // Listen for system theme changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', (e) => {
    // Only update if user hasn't manually set a preference
    if (!localStorage.getItem('theme')) {
      isDark.value = e.matches
    }
  })

  return {
    isDark,
    toggleTheme
  }
}