<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isDropdownOpen = ref(false)

const languages = [
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    nativeName: 'English'
  },
  {
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷',
    nativeName: 'Français'
  },
  {
    code: 'ar',
    name: 'العربية',
    flag: '🇩🇿',
    nativeName: 'العربية'
  }
]

const currentLanguage = computed(() => {
  return languages.find(lang => lang.code === locale.value) || languages[0] || null
})

const changeLanguage = (langCode: string) => {
  locale.value = langCode
  localStorage.setItem('locale', langCode)
  isDropdownOpen.value = false
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

// Close dropdown when clicking outside
const closeDropdown = (event: Event) => {
  const target = event.target as HTMLElement
  if (!target.closest('.language-selector')) {
    isDropdownOpen.value = false
  }
}

// Add event listener for clicking outside
document.addEventListener('click', closeDropdown)
</script>

<template>
  <div class="language-selector relative">
    <!-- Language Selector Button -->
    <button
      @click="toggleDropdown"
      class="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 transition-colors duration-200"
      :class="{ 'bg-gray-50 border-gray-300': isDropdownOpen }"
    >
      <span class="text-lg">{{ currentLanguage?.flag || '🇺🇸' }}</span>
      <span class="text-sm font-medium text-gray-700 hidden sm:block">
        <!-- {{ currentLanguage?.nativeName || 'English' }} -->
      </span>
      <svg
        class="w-4 h-4 text-gray-500 transition-transform duration-200"
        :class="{ 'rotate-180': isDropdownOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <div
      v-if="isDropdownOpen"
      class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
    >
      <div
        v-for="language in languages"
        :key="language.code"
        @click="changeLanguage(language.code)"
        class="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
        :class="{ 'bg-blue-50': language.code === locale }"
      >
        <span class="text-lg">{{ language.flag }}</span>
        <div class="flex-1">
          <div class="text-sm font-medium text-gray-900">{{ language.nativeName }}</div>
          <!-- <div class="text-xs text-gray-500">{{ language.name }}</div> -->
        </div>
        <div
          v-if="language.code === locale"
          class="w-2 h-2 bg-blue-600 rounded-full"
        ></div>
      </div>
    </div>
  </div>
</template>