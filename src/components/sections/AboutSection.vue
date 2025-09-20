<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const values = [
  {
    key: 'innovation',
    icon: '💡'
  },
  {
    key: 'excellence',
    icon: '⭐'
  },
  {
    key: 'accessibility',
    icon: '🌍'
  },
  {
    key: 'results',
    icon: '🎯'
  }
]

const team = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Chief AI Officer',
    description: 'Leading AI research and development with 15+ years in machine learning.',
    image: '👩‍💼'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Coaching',
    description: 'Certified executive coach with expertise in leadership development.',
    image: '👨‍💼'
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Research Director',
    description: 'PhD in Psychology, specializing in behavioral science and coaching methodologies.',
    image: '👩‍🔬'
  }
]
</script>

<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {{ t('about.title') }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ t('about.subtitle') }}
        </p>
      </div>

      <!-- Mission statement -->
      <div class="bg-white rounded-2xl p-8 md:p-12 mb-16 shadow-lg">
        <div class="max-w-4xl mx-auto text-center">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {{ t('about.mission') }}
          </h3>
          <p class="text-lg text-gray-600 leading-relaxed">
            {{ t('about.missionText') }}
          </p>
        </div>
      </div>

      <!-- Values grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div
          v-for="value in values"
          :key="value.key"
          class="text-center"
        >
          <div class="text-4xl mb-4">{{ value.icon }}</div>
          <h4 class="text-lg font-semibold text-gray-900 mb-2">
            {{ t(`about.values.${value.key}.title`) }}
          </h4>
          <p class="text-gray-600 text-sm">
            {{ t(`about.values.${value.key}.description`) }}
          </p>
        </div>
      </div>

      <!-- Team section -->
      <div class="text-center mb-12">
        <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {{ t('about.team.title') }}
        </h3>
        <p class="text-gray-600 max-w-2xl mx-auto">
          {{ t('about.team.subtitle') }}
        </p>
      </div>

      <!-- Team members -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="member in team"
          :key="member.name"
          class="bg-white rounded-xl p-6 shadow-lg text-center"
        >
          <div class="text-6xl mb-4">{{ member.image }}</div>
          <h4 class="text-lg font-semibold text-gray-900 mb-1">
            {{ member.name }}
          </h4>
          <p class="text-blue-600 font-medium mb-3">
            {{ member.role }}
          </p>
          <p class="text-gray-600 text-sm">
            {{ member.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>