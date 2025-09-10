<script setup lang="ts">
import Splitter from '../components/ui/Splitter.vue';
</script>

<template>
    <section class="about-me">
        <h2 class="text-3xl font-medium text-[var(--color-accent)] mb-8 flex items-center gap-3">
            {{ $t('about.title') }} 
        </h2>
        
        <blockquote class="ml-4 border-l-4 border-[var(--color-accent)] pl-6">
            <p class="text-lg text-[var(--color-text-primary)] leading-relaxed mb-4">
                {{ $t('about.bio') }}
            </p>
            <cite class="text-[var(--color-text-secondary)] italic">
                ~ {{ $t('about.cite') }}
            </cite>
        </blockquote>
    </section>
    <Splitter />
</template>