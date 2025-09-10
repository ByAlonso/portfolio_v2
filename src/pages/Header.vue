<script setup lang="ts">
import Splitter from '../components/ui/Splitter.vue';
import profilePic from "../assets/images/profile_pic.png"
import TechIcon from '@/components/ui/TechIcon.vue';


interface SocialBadgeContent {
  url: string;
  label: string;
  icon: string;
  color: string
}
const socials: SocialBadgeContent[] = [
  {
    url: "https://www.linkedin.com/in/alonsorapadoguillen/",
    label: "LinkedIn",
    icon: "devicon-linkedin-plain colored",
    color: "var(--color-linkedin)"
  },
  {
    url: "https://github.com/byAlonso",
    label: "GitHub",
    icon: "devicon-github-original",
    color: "var(--color-github-actions)"
  },
  {
    url: "mailto:alonso.rapado@hotmail.com",
    label: "Email",
    icon: "fa-solid fa-envelope",
    color: "var(--color-mail)"
  }
];
</script>

<template>
  <section
    class="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-start gap-16 p-12 sm:p-20 min-h-[400px]">
    <!-- Avatar Section -->
    <div class="relative group flex-shrink-0">
      <div
        class="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500">
      </div>
      <img
        class="relative w-56 h-56 p-2 rounded-full ring-4 ring-[var(--color-accent)] shadow-2xl hover:ring-[var(--color-secondary)] transition-all duration-500 hover:scale-105"
        :src="profilePic" alt="Profile Picture">
    </div>

    <!-- Content Section -->
    <div class="flex flex-col items-left text-center gap-12 max-w-xl">
      <div class="flex flex-col items-left text-center gap-4 max-w-xl">
        <h1 class="text-5xl sm:text-7xl text-center font-black text-gradient-lime pb-2">
          Alonso Rapado
        </h1>
        <p class="text-[var(--color-text-secondary)] text-2xl max-w-xl">
          Passionate software engineer and full-stack developer.
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
  <Splitter />
</template>
