<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

import Splitter from "../components/ui/Splitter.vue";
import profilePic from "../assets/images/profile_pic.png";
import TechIcon from "@/components/ui/TechIcon.vue";
import ThemeToggle from "@/components/ui/ThemeToggle.vue";
import LanguagePicker from "@/components/ui/LanguagePicker.vue";
import { useI18n } from 'vue-i18n'

interface SocialBadgeContent {
  url: string;
  label: string;
  icon: string;
  color: string;
}

const socials: SocialBadgeContent[] = [
  {
    url: "https://www.linkedin.com/in/alonsorapadoguillen/",
    label: "LinkedIn",
    icon: "devicon-linkedin-plain colored",
    color: "var(--color-linkedin)",
  },
  {
    url: "https://github.com/byAlonso",
    label: "GitHub",
    icon: "devicon-github-original",
    color: "var(--color-github-actions)",
  },
  {
    url: "mailto:alonso.rapado@hotmail.com",
    label: "Email",
    icon: "fa-solid fa-envelope",
    color: "var(--color-mail)",
  },
];

const { locale } = useI18n()

// Manage theme state in parent
const isDark = ref(false)

// Manage language state in parent
const isSpanish = ref(false)

// Theme methods
const toggleTheme = () => {
  isDark.value = !isDark.value

  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  isDark.value = savedTheme === 'dark' || (!savedTheme && prefersDark)

  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// Language methods
const toggleLanguage = () => {
  isSpanish.value = !isSpanish.value

  const newLanguage = isSpanish.value ? 'es' : 'en'

  // Update i18n locale
  locale.value = newLanguage

  // Update DOM and localStorage
  if (isSpanish.value) {
    document.documentElement.setAttribute('lang', 'es')
    localStorage.setItem('language', 'es')
  } else {
    document.documentElement.setAttribute('lang', 'en')
    localStorage.setItem('language', 'en')
  }
}

const initializeLanguage = () => {
  const savedLang = localStorage.getItem('language')
  const browserLang = navigator.language || navigator.languages[0]
  const preferSpanish = browserLang.startsWith('es')

  isSpanish.value = savedLang === 'es' || (!savedLang && preferSpanish)

  const language = isSpanish.value ? 'es' : 'en'
  locale.value = language

  if (isSpanish.value) {
    document.documentElement.setAttribute('lang', 'es')
  } else {
    document.documentElement.setAttribute('lang', 'en')
  }
}

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 350;
};

onMounted(() => {
  initializeTheme();
  initializeLanguage();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <!-- Sticky Header -->
  <header :class="[
    'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
    isScrolled
      ? 'bg-[var(--color-background)]/95 backdrop-blur-md border-b border-[var(--color-border)] py-4 shadow-lg'
      : 'bg-transparent py-0 pointer-events-none'
  ]">
    <div :class="[
      'container mx-auto px-6 transition-all duration-500 ease-in-out',
      isScrolled ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    ]">
      <div class="flex items-center justify-between ">
        <!-- Left side: Profile info -->
        <div class="flex items-center gap-4 w-full">
          <img class="w-12 h-12 rounded-full ring-2 ring-[var(--color-accent)] shadow-lg" :src="profilePic"
            alt="Profile Picture" />
          <div>
            <h2 class="text-xl font-bold text-gradient-lime">{{ $t('personal.name') }}</h2>
            <p class="text-sm text-[var(--color-text-secondary)]">
              {{ $t('personal.role') }}
            </p>
          </div>
        </div>

        <!-- Right side: Socials and theme toggle -->
        <div class="flex items-center justify-end w-full">
          <!-- Left side: Social icons -->
          <div class="hidden sm:flex items-center gap-2">
            <a v-for="social in socials.slice(0, 3)" :key="social.label" :href="social.url" target="_blank"
              rel="noopener noreferrer"
              class="p-2 rounded-lg hover:bg-[var(--color-hover)] transition-colors duration-300">
              <TechIcon variant="header" :icon="social.icon" :label="social.label" :color="social.color" size="sm" />
            </a>
          </div>

          <!-- Right side: Theme toggle and Language picker -->
          <div class="flex items-center gap-4 ml-12 ">
            <ThemeToggle :isDark="isDark" @toggle="toggleTheme" />
            <LanguagePicker :isSpanish="isSpanish" @toggle="toggleLanguage" />
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Hero Section -->
  <div class="relative">
    <!-- Theme Toggle Button - Top Right -->
    <div class="absolute top-0 right-4 sm:top- sm:right-10 z-10 flex items-center gap-4">
      <ThemeToggle :isDark="isDark" @toggle="toggleTheme" />
      <LanguagePicker :isSpanish="isSpanish" @toggle="toggleLanguage" />
    </div>
    <!-- Main Header Section -->
    <section
      class="flex flex-col items-center lg:items-center justify-center lg:justify-start gap-16 p-12 sm:p-20 min-h-[400px]">
      <!-- Avatar Section -->
      <div class="relative group flex-shrink-0">
        <div
          class="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500">
        </div>
        <img
          class="relative w-56 h-56 p-2 rounded-full ring-4 ring-[var(--color-accent)] shadow-2xl hover:ring-[var(--color-secondary)] transition-all duration-500 hover:scale-105"
          :src="profilePic" alt="Profile Picture" />
      </div>

      <!-- Content Section -->
      <div class="flex flex-col items-left text-center gap-12 max-w-xl">
        <div class="flex flex-col items-left text-center gap-4 max-w-xl">
          <h1 class="text-5xl sm:text-7xl text-center font-black text-gradient-lime pb-2">
            {{ $t('personal.name') }}
          </h1>
          <p class="text-[var(--color-text-secondary)] text-2xl max-w-xl">
            {{ $t('personal.short_description') }}
          </p>
        </div>

        <!-- Social Section -->
        <div class="flex flex-col sm:flex-row gap-6">
          <a v-for="social in socials" :key="social.label" :href="social.url" target="_blank" rel="noopener noreferrer">
            <TechIcon variant="social" :icon="social.icon" :label="social.label" :color="social.color" />
          </a>
        </div>
      </div>
    </section>
  </div>
  <Splitter />
</template>
