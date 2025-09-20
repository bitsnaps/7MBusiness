<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

const { t } = useI18n()

// Mock data for demonstration
const userStats = {
  totalSessions: 24,
  completedGoals: 8,
  currentStreak: 12,
  averageProgress: 87
}

const recentSessions = [
  {
    id: 1,
    type: 'Individual Coaching',
    date: '2024-01-15',
    duration: '60 min',
    progress: 92,
    coach: 'Dr. Sarah Johnson',
    status: 'completed'
  },
  {
    id: 2,
    type: 'Team Coaching',
    date: '2024-01-12',
    duration: '90 min',
    progress: 88,
    coach: 'Michael Chen',
    status: 'completed'
  },
  {
    id: 3,
    type: 'Business Coaching',
    date: '2024-01-10',
    duration: '75 min',
    progress: 95,
    coach: 'Dr. Emily Rodriguez',
    status: 'completed'
  }
]

const goals = [
  {
    id: 1,
    title: 'Improve Leadership Skills',
    progress: 85,
    targetDate: '2024-03-01',
    status: 'on-track'
  },
  {
    id: 2,
    title: 'Complete Business Strategy Course',
    progress: 60,
    targetDate: '2024-02-15',
    status: 'needs-attention'
  },
  {
    id: 3,
    title: 'Team Building Workshop',
    progress: 100,
    targetDate: '2024-01-30',
    status: 'completed'
  }
]

const aiInsights = [
  {
    type: 'achievement',
    title: 'Excellent Progress This Month',
    message: 'You\'ve completed 8 coaching sessions this month, exceeding your goal by 33%.',
    icon: '🏆'
  },
  {
    type: 'recommendation',
    title: 'Suggested Next Steps',
    message: 'Based on your progress, we recommend scheduling a team coaching session to address communication challenges.',
    icon: '💡'
  },
  {
    type: 'milestone',
    title: 'Goal Achievement',
    message: 'Congratulations! You\'ve successfully completed your "Team Building Workshop" goal ahead of schedule.',
    icon: '🎯'
  }
]
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Header />

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <div>
            <h1 class="text-3xl md:text-5xl font-bold mb-4">
              {{ t('dashboard.title') }}
            </h1>
            <p class="text-xl text-purple-100 max-w-2xl">
              {{ t('dashboard.subtitle') }}
            </p>
          </div>
          <div class="mt-8 lg:mt-0">
            <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <div class="text-center">
                <div class="text-3xl font-bold">{{ userStats.averageProgress }}%</div>
                <div class="text-purple-100">{{ t('dashboard.overallProgress') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Overview -->
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-600">{{ userStats.totalSessions }}</div>
            <div class="text-gray-600">{{ t('dashboard.stats.totalSessions') }}</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-green-600">{{ userStats.completedGoals }}</div>
            <div class="text-gray-600">{{ t('dashboard.stats.goalsCompleted') }}</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-purple-600">{{ userStats.currentStreak }}</div>
            <div class="text-gray-600">{{ t('dashboard.stats.dayStreak') }}</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-orange-600">{{ userStats.averageProgress }}%</div>
            <div class="text-gray-600">{{ t('dashboard.stats.avgProgress') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Dashboard Content -->
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <!-- Recent Sessions -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-2xl p-6 shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-6">{{ t('dashboard.recentSessions') }}</h3>
              <div class="space-y-4">
                <div
                  v-for="session in recentSessions"
                  :key="session.id"
                  class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div class="flex justify-between items-start">
                    <div>
                      <h4 class="font-semibold text-gray-900">{{ session.type }}</h4>
                      <p class="text-sm text-gray-600">{{ session.coach }} • {{ session.date }}</p>
                    </div>
                    <div class="text-right">
                      <div class="text-sm font-medium text-gray-900">{{ session.progress }}%</div>
                      <div class="text-xs text-gray-500">{{ session.duration }}</div>
                    </div>
                  </div>
                  <div class="mt-3">
                    <div class="w-full bg-gray-200 rounded-full h-2">
                      <div
                        class="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                        :style="{ width: session.progress + '%' }"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- AI Insights -->
          <div>
            <div class="bg-white rounded-2xl p-6 shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-6">{{ t('dashboard.aiInsights') }}</h3>
              <div class="space-y-4">
                <div
                  v-for="insight in aiInsights"
                  :key="insight.title"
                  class="border border-gray-200 rounded-lg p-4"
                >
                  <div class="flex items-start space-x-3">
                    <div class="text-2xl">{{ insight.icon }}</div>
                    <div>
                      <h4 class="font-semibold text-gray-900 text-sm">{{ insight.title }}</h4>
                      <p class="text-xs text-gray-600 mt-1">{{ insight.message }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Goals Progress -->
        <div class="mt-8">
          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <h3 class="text-xl font-bold text-gray-900 mb-6">{{ t('dashboard.goalsProgress') }}</h3>
            <div class="space-y-6">
              <div
                v-for="goal in goals"
                :key="goal.id"
                class="border border-gray-200 rounded-lg p-4"
              >
                <div class="flex justify-between items-center mb-3">
                  <h4 class="font-semibold text-gray-900">{{ goal.title }}</h4>
                  <span
                    class="px-3 py-1 rounded-full text-xs font-medium"
                    :class="{
                      'bg-green-100 text-green-800': goal.status === 'completed',
                      'bg-yellow-100 text-yellow-800': goal.status === 'needs-attention',
                      'bg-blue-100 text-blue-800': goal.status === 'on-track'
                    }"
                  >
                    {{ t(`dashboard.status.${goal.status}`) }}
                  </span>
                </div>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-sm text-gray-600">{{ goal.progress }}% Complete</span>
                  <span class="text-sm text-gray-600">Due: {{ goal.targetDate }}</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3">
                  <div
                    class="h-3 rounded-full transition-all duration-300"
                    :class="{
                      'bg-green-500': goal.status === 'completed',
                      'bg-yellow-500': goal.status === 'needs-attention',
                      'bg-gradient-to-r from-blue-600 to-purple-600': goal.status === 'on-track'
                    }"
                    :style="{ width: goal.progress + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gray-900 text-white py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          {{ t('dashboard.ctaTitle') }}
        </h2>
        <p class="text-xl text-gray-300 mb-8">
          {{ t('dashboard.ctaSubtitle') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
            {{ t('dashboard.scheduleSession') }}
          </button>
          <router-link
            to="/"
            class="border-2 border-white/30 hover:border-white/50 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/10"
          >
            {{ t('dashboard.backToHome') }}
          </router-link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>