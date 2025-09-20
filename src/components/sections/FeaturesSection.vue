<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="py-20 bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ t('features.title') }}
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          {{ t('features.subtitle') }}
        </p>
      </div>

      <!-- Features grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <!-- AI Coach -->
        <div class="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-colors duration-300">
          <div class="text-4xl mb-4">🤖</div>
          <h3 class="text-xl font-semibold mb-3">
            {{ t('features.aiCoach.title') }}
          </h3>
          <p class="text-gray-300 mb-6">
            {{ t('features.aiCoach.description') }}
          </p>
          <ul class="space-y-2">
            <li class="flex items-center text-sm text-gray-300">
              <svg class="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              {{ t('features.aiCoach.benefit1') }}
            </li>
            <li class="flex items-center text-sm text-gray-300">
              <svg class="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              {{ t('features.aiCoach.benefit2') }}
            </li>
            <li class="flex items-center text-sm text-gray-300">
              <svg class="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              {{ t('features.aiCoach.benefit3') }}
            </li>
          </ul>
        </div>

        <!-- Interactive Dashboard -->
        <div class="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-colors duration-300">
          <div class="text-4xl mb-4">📊</div>
          <h3 class="text-xl font-semibold mb-3">
            {{ t('features.dashboard.title') }}
          </h3>
          <p class="text-gray-300 mb-6">
            {{ t('features.dashboard.description') }}
          </p>
          <ul class="space-y-2">
            <li class="flex items-center text-sm text-gray-300">
              <svg class="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              {{ t('features.dashboard.benefit1') }}
            </li>
            <li class="flex items-center text-sm text-gray-300">
              <svg class="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              {{ t('features.dashboard.benefit2') }}
            </li>
            <li class="flex items-center text-sm text-gray-300">
              <svg class="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              {{ t('features.dashboard.benefit3') }}
            </li>
          </ul>
        </div>

        <!-- Smart Reports -->
        <div class="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-colors duration-300">
          <div class="text-4xl mb-4">📋</div>
          <h3 class="text-xl font-semibold mb-3">
            {{ t('features.reports.title') }}
          </h3>
          <p class="text-gray-300 mb-6">
            {{ t('features.reports.description') }}
          </p>
          <ul class="space-y-2">
            <li class="flex items-center text-sm text-gray-300">
              <svg class="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              {{ t('features.reports.benefit1') }}
            </li>
            <li class="flex items-center text-sm text-gray-300">
              <svg class="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              {{ t('features.reports.benefit2') }}
            </li>
            <li class="flex items-center text-sm text-gray-300">
              <svg class="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              {{ t('features.reports.benefit3') }}
            </li>
          </ul>
        </div>

        <!-- Real-time Monitoring -->
        <div class="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-colors duration-300">
          <div class="text-4xl mb-4">⚡</div>
          <h3 class="text-xl font-semibold mb-3">
            {{ t('features.monitoring.title') }}
          </h3>
          <p class="text-gray-300 mb-6">
            {{ t('features.monitoring.description') }}
          </p>
          <ul class="space-y-2">
            <li class="flex items-center text-sm text-gray-300">
              <svg class="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              {{ t('features.monitoring.benefit1') }}
            </li>
            <li class="flex items-center text-sm text-gray-300">
              <svg class="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              {{ t('features.monitoring.benefit2') }}
            </li>
            <li class="flex items-center text-sm text-gray-300">
              <svg class="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              {{ t('features.monitoring.benefit3') }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Stats section -->
      <div class="border-t border-gray-700 pt-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
              {{ t('features.stats.activeUsers') }}
            </div>
            <div class="text-gray-300">{{ t('features.stats.activeUsers') }}</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
              {{ t('features.stats.successRate') }}
            </div>
            <div class="text-gray-300">{{ t('features.stats.successRate') }}</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
              {{ t('features.stats.aiSupport') }}
            </div>
            <div class="text-gray-300">{{ t('features.stats.aiSupport') }}</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
              {{ t('features.stats.coachingDomains') }}
            </div>
            <div class="text-gray-300">{{ t('features.stats.coachingDomains') }}</div>
          </div>
        </div>
      </div>

      <!-- CTA section -->
      <div class="text-center mt-12">
        <h3 class="text-2xl font-bold mb-4">
          {{ t('features.ctaTitle') }}
        </h3>
        <p class="text-gray-300 mb-6 max-w-2xl mx-auto">
          {{ t('features.ctaSubtitle') }}
        </p>
        <button class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
          {{ t('features.startFreeTrial') }}
        </button>
      </div>
    </div>
  </section>
</template>