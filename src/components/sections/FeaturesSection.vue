<script setup lang="ts">
// Features section - highlight AI capabilities and technical features
const features = [
  {
    title: 'AI Coach',
    description: 'Intelligent coaching recommendations powered by advanced AI algorithms that adapt to your learning style and goals.',
    icon: '🤖',
    benefits: ['Personalized recommendations', 'Adaptive learning paths', '24/7 availability']
  },
  {
    title: 'Interactive Dashboard',
    description: 'Real-time data visualization and progress tracking with comprehensive analytics and insights.',
    icon: '📊',
    benefits: ['Real-time tracking', 'Visual analytics', 'Progress insights']
  },
  {
    title: 'Smart Reports',
    description: 'Comprehensive reporting system with detailed analytics, trend identification, and predictive modeling.',
    icon: '📋',
    benefits: ['Detailed analytics', 'Trend identification', 'Predictive insights']
  },
  {
    title: 'Real-time Monitoring',
    description: 'Continuous assessment and feedback systems that track your progress and provide instant guidance.',
    icon: '⚡',
    benefits: ['Continuous assessment', 'Instant feedback', 'Goal monitoring']
  }
]

const stats = [
  { number: '10K+', label: 'Active Users' },
  { number: '95%', label: 'Success Rate' },
  { number: '24/7', label: 'AI Support' },
  { number: '50+', label: 'Coaching Domains' }
]
</script>

<template>
  <section class="py-20 bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Powered by Advanced AI Technology
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Experience the future of coaching with our cutting-edge AI platform that delivers
          personalized insights, real-time feedback, and comprehensive analytics.
        </p>
      </div>

      <!-- Features grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-colors duration-300"
        >
          <!-- Feature icon -->
          <div class="text-4xl mb-4">{{ feature.icon }}</div>

          <!-- Feature title -->
          <h3 class="text-xl font-semibold mb-3">
            {{ feature.title }}
          </h3>

          <!-- Feature description -->
          <p class="text-gray-300 mb-6">
            {{ feature.description }}
          </p>

          <!-- Feature benefits -->
          <ul class="space-y-2">
            <li
              v-for="benefit in feature.benefits"
              :key="benefit"
              class="flex items-center text-sm text-gray-300"
            >
              <svg class="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              {{ benefit }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Stats section -->
      <div class="border-t border-gray-700 pt-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="text-center"
          >
            <div class="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
              {{ stat.number }}
            </div>
            <div class="text-gray-300">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- CTA section -->
      <div class="text-center mt-12">
        <h3 class="text-2xl font-bold mb-4">
          Ready to Experience the Future of Coaching?
        </h3>
        <p class="text-gray-300 mb-6 max-w-2xl mx-auto">
          Join thousands of users who have transformed their personal and professional lives
          with our AI-powered coaching platform.
        </p>
        <button class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
          Start Free Trial
        </button>
      </div>
    </div>
  </section>
</template>