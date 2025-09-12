<template>
  <button
    @click="handleToggle"
    class="p-2 rounded-4xl cursor-pointer transition-all duration-300 hover:bg-[var(--color-accent)]/60"
    :title="isSpanish ? 'Switch to English' : 'Cambiar a Español'"
  >
    <transition name="lang-fade" mode="out-in">
      <!-- English flag/icon -->
      <div v-if="!isSpanish" key="en" class="w-6 h-6 flex items-center justify-center">
        <span
          class="text-sm font-bold text-[var(--color-text-primary)] transform transition-transform duration-500"
        >
          EN
        </span>
      </div>

      <!-- Spanish flag/icon -->
      <div v-else key="es" class="w-6 h-6 flex items-center justify-center">
        <span
          class="text-sm font-bold text-[var(--color-text-primary)] transform transition-transform duration-500"
        >
          ES
        </span>
      </div>
    </transition>
  </button>
</template>

<script setup lang="ts">
// Accept isSpanish as prop instead of managing local state
const props = defineProps<{
  isSpanish: boolean
}>()

// Emit toggle event to parent
const emit = defineEmits<{
  toggle: []
}>()

const handleToggle = () => {
  emit('toggle')
}
</script>

<style scoped>
.lang-fade-enter-active,
.lang-fade-leave-active {
  transition: all 0.4s ease;
}

.lang-fade-enter-from,
.lang-fade-leave-to {
  opacity: 0;
  transform: scale(0.6) rotate(180deg);
}
</style>
