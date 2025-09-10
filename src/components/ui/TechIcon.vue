<template>
  <div class="tech-icon" :class="{ 'tech-icon--social': variant === 'social' }" :style="{ '--tech-color': color }"
    @mouseenter="hover = true" @mouseleave="hover = false">
    <!-- Icon -->
    <i :class="icon" class="icon"></i>

    <!-- Label inline if social -->
    <span v-if="variant === 'social'" class="ml-2 font-semibold">{{ label }}</span>

    <!-- Tooltip if tech -->
    <transition name="fade">
      <div v-if="variant === 'tech' && hover" class="tooltip">
        {{ label }}
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  label: String,
  color: {
    type: String,
    default: "#84cc16"
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
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: var(--color-bg-alt);
  border: 2px solid var(--tech-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 2.2rem;
  color: var(--tech-color);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* Enhanced glow + lift with lime accent */
.tech-icon:hover {
  box-shadow: 
    0 0 30px var(--tech-color), 
    0 10px 40px rgba(132, 204, 22, 0.2),
    inset 0 0 15px rgba(132, 204, 22, 0.1);
  transform: translateY(-8px) scale(1.05);
}

.icon {
  position: relative;
  transition: all 0.3s ease;
}


.tech-icon:hover .icon {
  filter: drop-shadow(0 0 8px var(--tech-color));
}

/* Enhanced tooltip */
.tooltip {
  position: absolute;
  top: -50px;
  background: var(--color-bg);
  border: 2px solid var(--tech-color);
  border-radius: 12px;
  padding: 8px 12px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text-primary);
  pointer-events: none;
  white-space: nowrap;
  z-index: 999;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
    z-index: 30;

  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid var(--tech-color);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.tech-icon--social {
  width: auto;
  height: 60px;
  padding: 0 20px;
  border-radius: 16px;
  font-size: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-width: 160px;
}
</style>