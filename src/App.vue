<script setup lang="ts">
import Header from "./pages/Header.vue"
import AboutMe from "./pages/AboutMe.vue";
import Skills from "./pages/Skills.vue";
import Timeline from "./pages/Timeline.vue";

// // Example: in main.js or a Vue composable
// const html = document.documentElement

// // Enable dark mode
// html.classList.add('dark')
</script>

<template>
  <div class="mx-auto max-w-3xl px-5 mb-5 flex flex-col gap-10">
    <Header />
    <AboutMe />
    <Timeline />
    <Skills />
  </div>
</template>

<style scoped>
@reference "./assets/styles/main.css";
</style>