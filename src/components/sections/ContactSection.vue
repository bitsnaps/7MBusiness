<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const socialLinks = [
  { key: 'twitter', icon: '🐦', url: '#' },
  { key: 'linkedin', icon: '💼', url: '#' },
  { key: 'facebook', icon: '📘', url: '#' },
  { key: 'instagram', icon: '📷', url: '#' }
]
</script>

<template>
  <section id="contact" class="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ t('contact.title') }}
        </h2>
        <p class="text-xl text-blue-100 max-w-3xl mx-auto">
          {{ t('contact.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Contact information -->
        <div>
          <h3 class="text-2xl font-bold mb-8">{{ t('contact.getInTouch') }}</h3>

          <!-- Email -->
          <div class="space-y-6">
            <div class="flex items-center space-x-4">
              <div class="flex items-center justify-center w-8 h-8 text-2xl flex-shrink-0">📧</div>
              <div class="min-w-0">
                <h4 class="font-semibold text-lg mb-1">{{ t(`contact.contactInfo.phone.title`) }}</h4>
                <p class="text-blue-100 mb-1">contact@coach360.ai</p>
                <p class="text-blue-200 text-sm">{{ t(`contact.contactInfo.phone.description`) }}</p>
              </div>
            </div>
          </div>

          <!-- Phone -->
          <div class="space-y-6">
            <div class="flex items-center space-x-4">
              <div class="flex items-center justify-center w-8 h-8 text-2xl flex-shrink-0">📞</div>
              <div class="min-w-0">
                <h4 class="font-semibold text-lg mb-1">{{ t(`contact.contactInfo.phone.title`) }}</h4>
                <p class="text-blue-100 mb-1">+1 (555) 123-4567</p>
                <p class="text-blue-200 text-sm">{{ t(`contact.contactInfo.phone.description`) }}</p>
              </div>
            </div>
          </div>

          <!-- Address -->
          <div class="space-y-6">
            <div class="flex items-center space-x-4">
              <div class="flex items-center justify-center w-8 h-8 text-2xl flex-shrink-0">📍</div>
              <div class="min-w-0">
                <h4 class="font-semibold text-lg mb-1">{{ t(`contact.contactInfo.address.title`) }}</h4>
                <p class="text-blue-100 mb-1">123 Innovation Drive, Tech City, TC 12345</p>
                <p class="text-blue-200 text-sm">{{ t(`contact.contactInfo.address.description`) }}</p>
              </div>
            </div>
          </div>

          <!-- Social links -->
          <div class="mt-8">
            <h4 class="font-semibold text-lg mb-4">{{ t('contact.followUs') }}</h4>
            <div class="flex space-x-4">
              <a
                v-for="social in socialLinks"
                :key="social.key"
                :href="social.url"
                class="bg-white/20 hover:bg-white/30 rounded-lg p-3 transition-colors duration-300"
              >
                <span class="text-xl">{{ social.icon }}</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact form -->
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h3 class="text-2xl font-bold mb-6">{{ t('contact.form.title') }}</h3>
          <form class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium mb-2">{{ t('contact.form.fullName') }}</label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                :placeholder="t('contact.form.placeholder.name')"
              >
            </div>

            <div>
              <label for="email" class="block text-sm font-medium mb-2">{{ t('contact.form.email') }}</label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                :placeholder="t('contact.form.placeholder.email')"
              >
            </div>

            <div>
              <label for="interest" class="block text-sm font-medium mb-2">{{ t('contact.form.areaOfInterest') }}</label>
              <select
                id="interest"
                name="interest"
                class="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <option value="" class="bg-gray-900">{{ t('contact.form.placeholder.selectInterest') }}</option>
                <option value="individual" class="bg-gray-900">{{ t('contact.form.options.individual') }}</option>
                <option value="team" class="bg-gray-900">{{ t('contact.form.options.team') }}</option>
                <option value="business" class="bg-gray-900">{{ t('contact.form.options.business') }}</option>
                <option value="economic" class="bg-gray-900">{{ t('contact.form.options.economic') }}</option>
                <option value="students" class="bg-gray-900">{{ t('contact.form.options.students') }}</option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium mb-2">{{ t('contact.form.message') }}</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                class="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                :placeholder="t('contact.form.placeholder.message')"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-white text-blue-600 font-semibold py-4 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105"
            >
              {{ t('contact.form.getStarted') }}
            </button>
          </form>
        </div>
      </div>

      <!-- Newsletter signup -->
      <div class="mt-16 text-center">
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 class="text-2xl font-bold mb-4">{{ t('contact.newsletter.title') }}</h3>
          <p class="text-blue-100 mb-6">
            {{ t('contact.newsletter.subtitle') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              :placeholder="t('contact.newsletter.emailPlaceholder')"
              class="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
            <button class="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-300">
              {{ t('contact.newsletter.subscribe') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>