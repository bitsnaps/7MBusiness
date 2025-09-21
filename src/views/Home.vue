<script setup lang="ts">
// Home page - main landing page for Coach 360
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import BackToTop from '@/components/ui/BackToTop.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import FeaturesSection from '@/components/sections/FeaturesSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Header />
    <main>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <AboutSection />
      <ContactSection />
    </main>
    <Footer />
    <BackToTop />
  </div>
</template>