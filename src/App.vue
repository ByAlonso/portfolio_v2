<script setup lang="ts">
function clickMe() {
  console.log("Hola")
}
import Header from "./components/Header.vue"
import Timeline from "./components/ui/Timeline.vue";
</script>

<template>
  <div class="mx-auto max-w-4xl px-5 mb-5 flex flex-col gap-10">
    <Header/>
    <Timeline/>
  </div>
</template>

<style scoped>
@reference "./assets/styles/main.css";
</style>