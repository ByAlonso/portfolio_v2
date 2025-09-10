<script setup lang="ts">
import Splitter from '../components/ui/Splitter.vue';
</script>

<template>
    <section class="about-me">
        <h2 class="text-3xl font-medium text-[var(--color-accent)] mb-8 flex items-center gap-3">
            {{ $t('about.title') }} 
        </h2>
        
        <blockquote class="ml-4 border-l-4 border-[var(--color-accent)] pl-6">
            <p class="text-lg text-gray-700 leading-relaxed mb-4">
                {{ $t('about.bio') }}
            </p>
            <cite class="text-gray-500 italic">
                ~ {{ $t('about.cite') }}
            </cite>
        </blockquote>
    </section>
    <Splitter />
</template>