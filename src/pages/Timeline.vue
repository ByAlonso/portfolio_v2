<script setup lang="ts">
import Splitter from '../components/ui/Splitter.vue';

const jobs = ["job1", "job2", "job3", "job4", "job5"]
</script>

<template>
    <div class="py-8">
        <h2 class="text-3xl font-medium text-[var(--color-accent)] mb-12 flex items-center gap-3">
            {{ $t('timeline.title') }}
            <span class="text-2xl">📅</span>
        </h2>

        <div class="relative">
            <ol class="relative space-y-8">
                <!-- Current position -->
                <li class="relative sm:pl-12 group">
                    <!-- Pulsing current indicator -->
                    <div class="absolute left-4 top-2 w-4 h-4 -translate-x-1/2">
                        <div class="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
                        <div class="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                    </div>

                    <div
                        class="bg-[var(--color-bg-alt)] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:scale-[1.02] transform">
                        <div class="flex items-center gap-2 mb-3">
                            <div
                                class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                                {{ $t('timeline.current.time') }}
                            </div>
                        </div>

                        <div class="flex flex-col md:flex-row justify-between items-start gap-4">
                            <div class="flex-1">
                                <h3
                                    class="text-xl font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                                    {{ $t('timeline.current.title') }}
                                </h3>
                                <p class="text-[var(--color-text-secondary)] leading-relaxed">
                                    {{ $t('timeline.current.description') }}
                                </p>
                            </div>

                            <div class="flex flex-col items-end md:items-start gap-1">
                                <button
                                    class="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
                                    <svg class="w-4 h-4 transition-transform group-hover:translate-y-0.5"
                                        fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                                        <path
                                            d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                                    </svg>
                                    <span class="text-sm font-medium">Download</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- Past positions -->
                <li v-for="job in jobs" :key="job" class="relative sm:pl-12 group">
                    <!-- Timeline dot -->
                    <div class="absolute left-4 top-6 w-3 h-3 bg-gray-400 dark:bg-gray-600 rounded-full border-2 border-[var(--color-bg)] shadow-sm transition-all duration-200 group-hover:bg-blue-400 group-hover:scale-125
           hidden sm:block">
                    </div>



                    <div class="bg-[var(--color-bg-alt)] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:scale-[1.02] transform
           md:pl-12 w-full">
                        <div class="flex flex-wrap md:flex-nowrap justify-between items-start gap-2 mb-4">
                            <div class="flex-1 min-w-[200px]">
                                <h3
                                    class="text-lg font-bold text-[var(--color-text-primary)] mb-1 group-hover:text-[var(--color-accent)] transition-colors">
                                    {{ $t(`timeline.${job}.title`) }}
                                </h3>
                                <p class="text-blue-600 dark:text-blue-400 font-medium">
                                    {{ $t(`timeline.${job}.company`) }}
                                </p>
                            </div>

                            <div class="text-[var(--color-text-tertiary)] flex items-center gap-1 text-sm">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        clip-rule="evenodd" />
                                </svg>
                                {{ $t(`timeline.${job}.location`) }}
                            </div>
                        </div>


                        <p class="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                            {{ $t(`timeline.${job}.description`) }}
                        </p>
                    </div>
                </li>
            </ol>
        </div>
    </div>
    <Splitter />
</template>
