<script setup lang="ts">
// Services page - comprehensive view of all coaching services
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

const services = [
  {
    title: 'Individual Coaching',
    description: 'Personalized one-on-one coaching sessions tailored to your unique goals and development needs.',
    icon: '👤',
    features: [
      'Personalized development plans',
      'Individual progress tracking',
      'Flexible scheduling',
      '24/7 AI support',
      'Goal-oriented sessions'
    ],
    benefits: [
      'Accelerated personal growth',
      'Improved self-awareness',
      'Enhanced decision-making skills',
      'Increased confidence and motivation'
    ],
    duration: '60 minutes per session',
    frequency: 'Weekly or bi-weekly'
  },
  {
    title: 'Team Coaching',
    description: 'Optimize team dynamics and leadership skills with comprehensive group coaching programs.',
    icon: '👥',
    features: [
      'Team dynamics optimization',
      'Leadership development',
      'Group coaching sessions',
      'Conflict resolution strategies',
      'Performance metrics tracking'
    ],
    benefits: [
      'Improved team collaboration',
      'Enhanced leadership capabilities',
      'Better communication skills',
      'Increased productivity and efficiency'
    ],
    duration: '90 minutes per session',
    frequency: 'Weekly team sessions'
  },
  {
    title: 'Business Coaching',
    description: 'Strategic business guidance to optimize performance and drive organizational growth.',
    icon: '🏢',
    features: [
      'Business strategy development',
      'Performance optimization',
      'Process improvement',
      'Change management',
      'Executive leadership coaching'
    ],
    benefits: [
      'Strategic business growth',
      'Improved operational efficiency',
      'Enhanced competitive advantage',
      'Sustainable organizational development'
    ],
    duration: '75 minutes per session',
    frequency: 'Bi-weekly or monthly'
  },
  {
    title: 'Economic Coaching',
    description: 'Navigate economic trends and make informed financial decisions with expert guidance.',
    icon: '📈',
    features: [
      'Financial strategy guidance',
      'Economic trend analysis',
      'Investment coaching',
      'Market intelligence',
      'Risk assessment and management'
    ],
    benefits: [
      'Improved financial decision-making',
      'Better investment strategies',
      'Enhanced economic understanding',
      'Long-term wealth building'
    ],
    duration: '60 minutes per session',
    frequency: 'As needed basis'
  },
  {
    title: 'Children\'s Coaching',
    description: 'Support young minds with age-appropriate coaching for personal growth and development.',
    icon: '🌟',
    features: [
      'Youth development programs',
      'Educational coaching',
      'Personal growth',
      'Social skills development',
      'Confidence building'
    ],
    benefits: [
      'Enhanced self-esteem',
      'Improved academic performance',
      'Better social interactions',
      'Stronger emotional intelligence'
    ],
    duration: '45 minutes per session',
    frequency: 'Weekly sessions'
  }
]
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Header />

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          Comprehensive Coaching Services
        </h1>
        <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
          Discover our full range of AI-powered coaching services designed to support
          individuals, teams, businesses, and organizations across all domains.
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            v-for="service in services"
            :key="service.title"
            class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <!-- Service Header -->
            <div class="flex items-center mb-6">
              <div class="text-4xl mr-4">{{ service.icon }}</div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">{{ service.title }}</h3>
                <p class="text-gray-600">{{ service.duration }} • {{ service.frequency }}</p>
              </div>
            </div>

            <!-- Service Description -->
            <p class="text-gray-700 mb-6 leading-relaxed">
              {{ service.description }}
            </p>

            <!-- Features -->
            <div class="mb-6">
              <h4 class="font-semibold text-gray-900 mb-3">Key Features:</h4>
              <ul class="space-y-2">
                <li
                  v-for="feature in service.features"
                  :key="feature"
                  class="flex items-center text-gray-600"
                >
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  {{ feature }}
                </li>
              </ul>
            </div>

            <!-- Benefits -->
            <div class="mb-6">
              <h4 class="font-semibold text-gray-900 mb-3">Benefits:</h4>
              <ul class="space-y-2">
                <li
                  v-for="benefit in service.benefits"
                  :key="benefit"
                  class="flex items-center text-gray-600"
                >
                  <svg class="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  {{ benefit }}
                </li>
              </ul>
            </div>

            <!-- CTA Button -->
            <button class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Learn More & Get Started
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gray-900 text-white py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Not Sure Which Service is Right for You?
        </h2>
        <p class="text-xl text-gray-300 mb-8">
          Our AI-powered recommendation system can help you find the perfect coaching solution
          based on your unique goals and needs.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
            Get Personalized Recommendation
          </button>
          <router-link
            to="/"
            class="border-2 border-white/30 hover:border-white/50 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/10"
          >
            Back to Home
          </router-link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>