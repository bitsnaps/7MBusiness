<script setup lang="ts">
// About section - company and platform information
const values = [
  {
    title: 'Innovation',
    description: 'We leverage cutting-edge AI technology to deliver personalized coaching experiences.',
    icon: '💡'
  },
  {
    title: 'Excellence',
    description: 'Our platform maintains the highest standards of coaching quality and user experience.',
    icon: '⭐'
  },
  {
    title: 'Accessibility',
    description: 'We make professional coaching accessible to everyone, regardless of location or schedule.',
    icon: '🌍'
  },
  {
    title: 'Results',
    description: 'Our data-driven approach ensures measurable progress and tangible outcomes.',
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
          About Coach 360
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          We're pioneering the future of coaching by combining human expertise with
          artificial intelligence to create transformative learning experiences.
        </p>
      </div>

      <!-- Mission statement -->
      <div class="bg-white rounded-2xl p-8 md:p-12 mb-16 shadow-lg">
        <div class="max-w-4xl mx-auto text-center">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Our Mission
          </h3>
          <p class="text-lg text-gray-600 leading-relaxed">
            To democratize access to high-quality coaching by leveraging AI technology to provide
            personalized, affordable, and accessible coaching solutions that help individuals,
            teams, and organizations achieve their full potential across all domains of life.
          </p>
        </div>
      </div>

      <!-- Values grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div
          v-for="value in values"
          :key="value.title"
          class="text-center"
        >
          <div class="text-4xl mb-4">{{ value.icon }}</div>
          <h4 class="text-lg font-semibold text-gray-900 mb-2">
            {{ value.title }}
          </h4>
          <p class="text-gray-600 text-sm">
            {{ value.description }}
          </p>
        </div>
      </div>

      <!-- Team section -->
      <div class="text-center mb-12">
        <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Meet Our Leadership Team
        </h3>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Our diverse team of AI experts, certified coaches, and researchers work together
          to create the most advanced coaching platform available.
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