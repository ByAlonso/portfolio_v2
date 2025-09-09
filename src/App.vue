<script setup lang="ts">
function clickMe() {
  console.log("Hola")
}
import Header from "./components/Header.vue"
</script>

<template>
  <div class="mx-auto max-w-4xl px-5 mb-5 flex flex-col gap-10">
    <Header></Header>
  </div>
</template>
