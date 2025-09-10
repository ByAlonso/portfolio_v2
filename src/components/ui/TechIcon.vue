<template>
  <div 
    class="tech-icon" 
    :style="{ '--color': color }"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <!-- FontAwesome Icon -->
    <i :class="icon" class="icon"></i>

    <!-- Tooltip -->
    <transition name="fade">
      <div v-if="hover" class="tooltip">
        {{ label }}
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  label: String,
  color: {
    type: String,
    default: "#EF652A"
  },
  icon: {
    required: true
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
  border: 2px solid var(--color); /* 👈 always visible border */
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

/* Shine reflection only on icon */
/* .icon::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent 40%,
    rgba(255, 255, 255, 0.6) 50%,
    transparent 60%
  );
  transform: translateX(-100%) rotate(25deg);
  pointer-events: none;
  opacity: 0;
} */

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
  background: rgba(0, 0, 0, 0.7);
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
</style>
