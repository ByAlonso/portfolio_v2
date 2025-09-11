<template>
    <button @click="handleToggle" class="p-2 rounded-4xl cursor-pointer transition-all duration-300
         hover:bg-[var(--color-accent)]/60" :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
        <transition name="icon-fade" mode="out-in">
            <!-- Sun icon for light mode -->
            <svg v-if="isDark" key="sun"
                class="w-6 h-6 text-[var(--color-text-primary)] transform transition-transform duration-500 rotate-0"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>

            <!-- Moon icon for dark mode -->
            <svg v-else key="moon"
                class="w-6 h-6 text-[var(--color-text-primary)] transform transition-transform duration-500 "
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
        </transition>
    </button>
</template>

<script setup lang="ts">
// Accept isDark as prop instead of managing local state
const props = defineProps<{
    isDark: boolean
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
.icon-fade-enter-active,
.icon-fade-leave-active {
    transition: all 0.4s ease;
}

.icon-fade-enter-from,
.icon-fade-leave-to {
    opacity: 0;
    transform: scale(0.6) rotate(180deg);
}
</style>
