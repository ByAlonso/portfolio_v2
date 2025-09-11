<script setup lang="ts">
import Splitter from '../components/ui/Splitter.vue';
import skillsList from "@/components/utils/skillList"
import CV from "@/assets/downloads/Alonso_Rapado_GL_pic.pdf"

const jobs = {
  "ntt_senior": ["Python", "TypeScript", "Angular", "React", "FastAPI", "Terraform", "Docker", "IBM", "MongoDB", "PostgreSQL"],
  "motorola": ["Elixir", "Java", "TypeScript", "Spring", "Angular", "Kubernetes", "Docker", "Kafka", "Azure"],
  "motorola_part": ["Python", "Java", "Jenkins", "Linux"],
  "INDRA": ["TypeScript", "Java", "Angular", "Spring", "Kubernetes", "Docker"],
  "TELEFONICA": ["Python", "TypeScript", "Angular", "Flask", ".NET", "Azure", "Docker"],
}

// TODO: Find a way to make this dynamic
const status = "unemployed"

const downloadCV = () => {
  console.log("clicked")
  const a = document.createElement("a");
  a.href = CV;
  a.download = "Alonso_Rapado_CV.pdf"
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
</script>

<template>
  <div class="py-16">
    <h2 class="text-4xl md:text-5xl font-black text-gradient-lime mb-16 flex items-center justify-center gap-4 pb-4">
      {{ $t('timeline.title') }}
    </h2>

    <div class="relative max-w-4xl mx-auto">

      <ol
        class="relative space-y-12 before:absolute before:left-4 before:top-8 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-[var(--color-secondary)] before:to-gray-300 before:-translate-x-1/2 before:hidden sm:before:block">
        <!-- Current position - simplified -->
        <li class="relative sm:pl-16 group">
          <!-- Simple pulsing current indicator -->
          <div class="absolute left-4 top-2 w-6 h-6 -translate-x-1/2 hidden sm:block z-10">
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
                  {{ $t(`timeline.current.title.${status}`) }}
                </h3>
                <p class="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  {{ $t(`timeline.current.description.${status}`) }}
                </p>
              </div>

              <div class="flex flex-col items-end gap-2">
                <button @click="downloadCV"
                  class="flex btn-secondary gap-3 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-semibold cursor-pointer">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                    <path
                      d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                  </svg>
                  <span>{{ $t('timeline.current.downloadCV') }}</span>
                </button>
              </div>
            </div>
          </div>
        </li>

        <!-- Past positions -->
        <li v-for="[job, skills] in Object.entries(jobs)" :key="job" class="relative sm:pl-16 group">
          <!-- Timeline dot -->
          <div
            class="absolute left-2 top-10 w-4 h-4 bg-[var(--color-text-tertiary)] rounded-full border-4 border-[var(--color-bg)] shadow-lg transition-all duration-300 
                      group-hover:bg-[var(--color-secondary-hover)] group-hover:scale-125 group-hover:shadow-xl hidden sm:block">
          </div>

          <div
            class="card-hover rounded-2xl p-8 group-hover:border-[var(--color-secondary-hover)] transition-all duration-300">
            <div class="flex items-center gap-3 mb-6">
              <div class="px-4 py-2 bg-[var(--color-secondary)] text-white rounded-lg text-sm font-semibold">
                {{ $t(`timeline.${job}.start_date`) }} - {{ $t(`timeline.${job}.end_date`) }}
              </div>
            </div>
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

            <p class="text-[var(--color-text-secondary)] leading-relaxed text-lg mb-6">
              {{ $t(`timeline.${job}.description`) }}
            </p>
            <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-[var(--color-border)]">
              <div v-for="skill in skills" :key="job + skill"
                class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--color-bg-alt)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-light)] transition-all duration-300">
                <!-- Skill Icon -->
                <i :class="skillsList.skillIcons[skill as keyof typeof skillsList.skillIcons]" :alt="skill"
                  class="w-4 h-4 object-contain text-[var(--color-text-primary)]" loading="lazy" />
                <!-- Skill Name -->
                <span class="text-sm font-medium text-[var(--color-text-secondary)] cursor-default">{{ skill }}</span>
              </div>
            </div>
          </div>
        </li>
      </ol>
    </div>
  </div>
  <Splitter />
</template>

<style scoped>
.group:hover .text-gradient {
  background: linear-gradient(135deg, var(--color-accent), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
