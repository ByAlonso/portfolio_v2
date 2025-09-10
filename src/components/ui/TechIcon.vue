<template>
  <div class="tech-icon" :class="{ 'tech-icon--social': variant === 'social' }" :style="{ '--color': color }"
    @mouseenter="hover = true" @mouseleave="hover = false">
    <!-- Icon -->
    <i :class="icon" class="icon"></i>

    <!-- Label inline if social -->
    <span v-if="variant === 'social'" class="ml-2 font-medium">{{ label }}</span>

    <!-- Tooltip if tech -->
    <transition name="fade">
      <div v-if="variant === 'tech' && hover" class="tooltip">
        {{ label }}
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  label: String,
  color: {
    type: String,
    default: "#EF652A"
  },
  icon: {
    required: true
  },
  variant: {
    type: String,
    default: "tech", // "tech" | "social"
  }
});
const hover = ref(false);
</script>

<style scoped>
.tech-icon {
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid var(--color);
  /* 👈 always visible border */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease, background 0.3s ease;
  font-size: 2rem;
  color: var(--color);
}

/* Glow + lift */
.tech-icon:hover {
  box-shadow: 0 0 20px var(--color), inset 0 0 10px var(--color);
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

/* Icon */
.icon {
  position: relative;
  z-index: 1;
}

.tech-icon:hover .icon::after {
  opacity: 1;
  animation: shine 0.8s forwards;
}

@keyframes shine {
  100% {
    transform: translateX(100%) rotate(25deg);
  }
}

/* Tooltip */
.tooltip {
  position: absolute;
  top: -40px;
  /* background: rgba(0, 0, 0, 0.7); */
  border: 1px solid var(--color);
  border-radius: 8px;
  padding: 4px 10px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color);
  pointer-events: none;
  white-space: nowrap;
  z-index: 10;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.tech-icon--social {
  width: auto;
  height: auto;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 1.2rem;
  display: inline-flex;
  gap: 0.5rem;
}
</style>
