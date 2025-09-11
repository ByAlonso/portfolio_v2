<script setup lang="ts">
import Splitter from '../components/ui/Splitter.vue';
const countries = ["spain", "denmark"]
</script>

<template>
    <section class="about-me py-12">
        <h2
            class="text-4xl md:text-5xl font-black text-gradient-lime mb-12 flex items-center justify-center gap-4 pb-4">
            {{ $t('about.title') }}
        </h2>

        <!-- Countries container -->
        <div class="flex flex-wrap items-center justify-center gap-3 mb-12">
            <div v-for="country in countries" :key="country"
                class="text-[var(--color-text-tertiary)] flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-alt)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-light)] hover:text-[var(--color-accent-dark)] transition-all duration-300 cursor-default shadow-sm hover:shadow-md">
                <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd" />
                </svg>
                <span class="text-sm font-medium whitespace-nowrap">{{ $t(`location.${country}`) }}</span>
            </div>
        </div>

        <blockquote class="relative">
            <div class="absolute top-0 w-1 h-full bg-gradient-primary rounded-full"></div>
            <div class="pl-8">
                <p class="text-lg md:text-xl text-[var(--color-text-primary)] leading-relaxed mb-6 font-medium">
                    {{ $t('personal.about') }}
                </p>
                <cite class="text-[var(--color-text-secondary)] italic text-base flex items-center gap-2">
                    <span class="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                    {{ $t('personal.name') }}
                </cite>
            </div>
        </blockquote>
    </section>
    <Splitter />
</template>