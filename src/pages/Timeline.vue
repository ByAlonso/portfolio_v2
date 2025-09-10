<script setup lang="ts">
import Splitter from '../components/ui/Splitter.vue';

const jobs = ["job1", "job2", "job3", "job4", "job5"]
</script>

<template>
  <div class="py-16">
    <h2 class="text-4xl md:text-5xl font-black text-gradient-lime mb-16 flex items-center justify-center gap-4 pb-4">
      {{ $t('timeline.title') }}
    </h2>

    <div class="relative max-w-4xl mx-auto">

      <ol class="relative space-y-12">
        <!-- Current position - simplified -->
        <li class="relative sm:pl-16 group">
          <!-- Simple pulsing current indicator -->
          <div class="absolute left-4 top-2 w-6 h-6 -translate-x-1/2 hidden sm:block">
            <div class="absolute inset-0 bg-[var(--color-secondary)] rounded-full animate-ping opacity-75"></div>
            <div class="w-6 h-6 bg-[var(--color-secondary)] rounded-full border-4 border-white shadow-xl"></div>
          </div>

          <div class="card-hover rounded-2xl p-8 border border-[var(--color-secondary)] bg-[var(--color-bg-alt)]">
            <div class="flex items-center gap-3 mb-6">
              <div class="px-4 py-2 bg-[var(--color-secondary)] text-white rounded-lg text-sm font-semibold">
                {{ $t('timeline.current.time') }}
              </div>
            </div>

            <div class="flex flex-col lg:flex-row justify-between items-start gap-6">
              <div class="flex-1">
                <h3
                  class="text-2xl font-bold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-300 pb-2">
                  {{ $t('timeline.current.title') }}
                </h3>
                <p class="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  {{ $t('timeline.current.description') }}
                </p>
              </div>

              <div class="flex flex-col items-end gap-2">
                <button
                  class="flex btn-secondary gap-3 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-semibold">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                    <path
                      d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                  </svg>
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </div>
        </li>

        <!-- Past positions -->
        <li v-for="job in jobs" :key="job" class="relative sm:pl-16 group">
          <!-- Timeline dot -->
          <div
            class="absolute left-4 top-8 w-4 h-4 bg-[var(--color-text-tertiary)] rounded-full border-4 border-[var(--color-bg)] shadow-lg transition-all duration-300 
                      group-hover:bg-[var(--color-secondary-hover)] group-hover:scale-125 group-hover:shadow-xl hidden sm:block">
          </div>

          <div
            class="card-hover rounded-2xl p-8 group-hover:border-[var(--color-secondary-hover)] transition-all duration-300">
            <div class="flex flex-wrap lg:flex-nowrap justify-between items-start gap-4 mb-6">
              <div class="flex-1 min-w-[250px]">
                <h3
                  class="text-xl font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-secondary-hover)] transition-colors duration-300 pb-2">
                  {{ $t(`timeline.${job}.title`) }}
                </h3>
                <p class="text-[var(--color-accent)] font-semibold text-lg">
                  {{ $t(`timeline.${job}.company`) }}
                </p>
              </div>

              <!-- Location badge - not clickable but with hover -->
              <div
                class="text-[var(--color-text-tertiary)] flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-bg-alt)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-light)] hover:text-[var(--color-accent-dark)] transition-all duration-300 cursor-default">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd" />
                </svg>
                {{ $t(`timeline.${job}.location`) }}
              </div>
            </div>

            <p class="text-[var(--color-text-secondary)] leading-relaxed text-lg">
              {{ $t(`timeline.${job}.description`) }}
            </p>
          </div>
        </li>
      </ol>
    </div>
  </div>
  <Splitter />
</template>

<style scoped>
.animation-delay-75 {
  animation-delay: 75ms;
}

.group:hover .text-gradient {
  background: linear-gradient(135deg, var(--color-accent), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
