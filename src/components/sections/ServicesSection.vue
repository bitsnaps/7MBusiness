<script setup lang="ts">
// Services section - showcase all coaching services
const services = [
  {
    title: 'Individual Coaching',
    description: 'Personalized one-on-one coaching sessions tailored to your unique goals and development needs.',
    icon: '👤',
    features: ['Personalized development plans', 'Individual progress tracking', 'Flexible scheduling']
  },
  {
    title: 'Team Coaching',
    description: 'Optimize team dynamics and leadership skills with comprehensive group coaching programs.',
    icon: '👥',
    features: ['Team dynamics optimization', 'Leadership development', 'Group coaching sessions']
  },
  {
    title: 'Business Coaching',
    description: 'Strategic business guidance to optimize performance and drive organizational growth.',
    icon: '🏢',
    features: ['Business strategy development', 'Performance optimization', 'Process improvement']
  },
  {
    title: 'Economic Coaching',
    description: 'Navigate economic trends and make informed financial decisions with expert guidance.',
    icon: '📈',
    features: ['Financial strategy guidance', 'Economic trend analysis', 'Investment coaching']
  },
  {
    title: 'Children\'s Coaching',
    description: 'Support young minds with age-appropriate coaching for personal growth and development.',
    icon: '🌟',
    features: ['Youth development programs', 'Educational coaching', 'Personal growth']
  }
]
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Comprehensive Coaching Services
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our full range of AI-powered coaching services designed to support
          individuals, teams, businesses, and organizations across all domains.
        </p>
      </div>

      <!-- Services grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <!-- Service icon -->
          <div class="text-4xl mb-4">{{ service.icon }}</div>

          <!-- Service title -->
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            {{ service.title }}
          </h3>

          <!-- Service description -->
          <p class="text-gray-600 mb-6">
            {{ service.description }}
          </p>

          <!-- Service features -->
          <ul class="space-y-2">
            <li
              v-for="feature in service.features"
              :key="feature"
              class="flex items-center text-sm text-gray-600"
            >
              <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              {{ feature }}
            </li>
          </ul>

          <!-- CTA button -->
          <button class="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-12">
        <p class="text-gray-600 mb-4">
          Not sure which service is right for you?
        </p>
        <button class="bg-gray-900 text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors duration-300">
          Get Personalized Recommendation
        </button>
      </div>
    </div>
  </section>
</template>