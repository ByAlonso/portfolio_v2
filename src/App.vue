<script setup lang="ts">
function clickMe() {
  console.log("Hola")
}
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <h1 class="text-4xl font-black">Hola</h1>
  <button @click="clickMe()">Click me</button>
</template>

<style scoped></style>
