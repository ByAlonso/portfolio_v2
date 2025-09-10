<script setup lang="ts">
import Splitter from '../components/ui/Splitter.vue';
</script>

<template>
    <section class="about-me py-12">
        <h2
            class="text-4xl md:text-5xl font-black text-gradient-lime mb-16 flex items-center justify-center gap-4 pb-4">
            {{ $t('about.title') }}
        </h2>
        <blockquote class="relative">
            <div class="absolute  top-0 w-1 h-full bg-gradient-primary rounded-full"></div>
            <div class="pl-8">
                <p class="text-lg md:text-xl text-[var(--color-text-primary)] leading-relaxed mb-6 font-medium">
                    {{ $t('about.bio') }}
                </p>
                <cite class="text-[var(--color-text-secondary)] italic text-base flex items-center gap-2">
                    <span class="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                    {{ $t('about.cite') }}
                </cite>
            </div>
        </blockquote>
    </section>
    <Splitter />
</template>