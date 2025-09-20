<script setup lang="ts">
// Contact section - contact information and final CTA
const contactInfo = [
  {
    title: 'Email',
    value: 'hello@coach360.ai',
    icon: '📧',
    description: 'Get in touch with our team'
  },
  {
    title: 'Phone',
    value: '+1 (555) 123-4567',
    icon: '📞',
    description: 'Speak with a coaching expert'
  },
  {
    title: 'Address',
    value: '123 Innovation Drive, Tech City, TC 12345',
    icon: '📍',
    description: 'Visit our headquarters'
  }
]

const socialLinks = [
  { name: 'Twitter', icon: '🐦', url: '#' },
  { name: 'LinkedIn', icon: '💼', url: '#' },
  { name: 'Facebook', icon: '📘', url: '#' },
  { name: 'Instagram', icon: '📷', url: '#' }
]
</script>

<template>
  <section class="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Life?
        </h2>
        <p class="text-xl text-blue-100 max-w-3xl mx-auto">
          Join thousands of individuals and organizations who have already started their
          journey to success with Coach 360. Get started today and unlock your potential.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Contact information -->
        <div>
          <h3 class="text-2xl font-bold mb-8">Get In Touch</h3>

          <div class="space-y-6">
            <div
              v-for="info in contactInfo"
              :key="info.title"
              class="flex items-center space-x-4"
            >
              <div class="flex items-center justify-center w-8 h-8 text-2xl flex-shrink-0">{{ info.icon }}</div>
              <div class="min-w-0">
                <h4 class="font-semibold text-lg mb-1">{{ info.title }}</h4>
                <p class="text-blue-100 mb-1">{{ info.value }}</p>
                <p class="text-blue-200 text-sm">{{ info.description }}</p>
              </div>
            </div>
          </div>

          <!-- Social links -->
          <div class="mt-8">
            <h4 class="font-semibold text-lg mb-4">Follow Us</h4>
            <div class="flex space-x-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
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
          <h3 class="text-2xl font-bold mb-6">Start Your Journey</h3>
          <form class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Enter your full name"
              >
            </div>

            <div>
              <label for="email" class="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Enter your email address"
              >
            </div>

            <div>
              <label for="interest" class="block text-sm font-medium mb-2">Area of Interest</label>
              <select
                id="interest"
                name="interest"
                class="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <option value="" class="bg-gray-900">Select your area of interest</option>
                <option value="individual" class="bg-gray-900">Individual Coaching</option>
                <option value="team" class="bg-gray-900">Team Coaching</option>
                <option value="business" class="bg-gray-900">Business Coaching</option>
                <option value="economic" class="bg-gray-900">Economic Coaching</option>
                <option value="children" class="bg-gray-900">Children's Coaching</option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                class="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Tell us about your goals..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-white text-blue-600 font-semibold py-4 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105"
            >
              Get Started Today
            </button>
          </form>
        </div>
      </div>

      <!-- Newsletter signup -->
      <div class="mt-16 text-center">
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 class="text-2xl font-bold mb-4">Stay Updated</h3>
          <p class="text-blue-100 mb-6">
            Subscribe to our newsletter for the latest coaching insights and platform updates.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              class="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
            <button class="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>