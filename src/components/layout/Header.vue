<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-2" @click="closeMenu">
            <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">C</span>
            </div>
            <span class="text-xl font-bold text-gray-900">Coach 360</span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <router-link
            to="/"
            class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            active-class="text-blue-600"
          >
            Home
          </router-link>
          <router-link
            to="/services"
            class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            active-class="text-blue-600"
          >
            Services
          </router-link>
          <router-link
            to="/dashboard"
            class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            active-class="text-blue-600"
          >
            Dashboard
          </router-link>
          <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </nav>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMenu"
            class="text-gray-700 hover:text-blue-600 p-2"
            :aria-expanded="isMenuOpen"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                v-if="!isMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-if="isMenuOpen"
        class="md:hidden border-t border-gray-100 py-4"
      >
        <nav class="flex flex-col space-y-4">
          <router-link
            to="/"
            class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            active-class="text-blue-600"
            @click="closeMenu"
          >
            Home
          </router-link>
          <router-link
            to="/services"
            class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            active-class="text-blue-600"
            @click="closeMenu"
          >
            Services
          </router-link>
          <router-link
            to="/dashboard"
            class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            active-class="text-blue-600"
            @click="closeMenu"
          >
            Dashboard
          </router-link>
          <button
            class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors w-fit"
            @click="closeMenu"
          >
            Get Started
          </button>
        </nav>
      </div>
    </div>
  </header>
</template>