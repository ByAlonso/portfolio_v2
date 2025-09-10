<script setup lang="ts">
function clickMe() {
  console.log("Hola")
}
import Header from "./pages/Header.vue"
import AboutMe from "./pages/AboutMe.vue";
import Skills from "./pages/Skills.vue";
import Timeline from "./pages/Timeline.vue";
</script>

<template>
  <div class="mx-auto max-w-4xl px-5 mb-5 flex flex-col gap-10">
    <Header />
    <AboutMe />
    <Timeline />
    <Skills />
  </div>
</template>

<style scoped>
@reference "./assets/styles/main.css";
</style>