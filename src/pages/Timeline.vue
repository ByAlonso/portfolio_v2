<script setup lang="ts">
import Splitter from '../components/ui/Splitter.vue';

const jobs = ["job1", "job2", "job3", "job4", "job5"]
</script>

<template>
    <h2 class="text-3xl font-medium text-[var(--color-accent)] mb-8 flex items-center gap-3">
        {{ $t('timeline.title') }}
    </h2>
    <ol class="relative border-s border-gray-200 dark:border-gray-700">

        <li class="mb-10 ms-4">
            <!-- Could be cool to activate or deactivate this based on my current status -->
            <div class="absolute w-3 h-3 bg-green-400  rounded-full mt-1.5 -start-1.5 border border-green-700">
            </div>
            <div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {{ $t('timeline.current.time') }}
                </time>

                <div class="flex justify-between items-center">
                    <div>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            {{ $t('timeline.current.title') }}
                        </h3>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                            {{ $t('timeline.current.description') }}
                        </p>
                    </div>
                    <a href="#"
                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg
                            class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                            <path
                                d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                        </svg> Download ZIP</a>
                </div>
            </div>
        </li>
        <li v-for="job in jobs" class="mb-10 ms-4">
            <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
            </div>

            <div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {{ $t(`timeline.${job}.start_date`) }} - {{ $t(`timeline.${job}.end_date`) }}
                </time>

                <div class="flex justify-between items-center">
                    <div>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            {{ $t(`timeline.${job}.title`) }}
                        </h3>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                            {{ $t(`timeline.${job}.company`) }}
                        </p>
                    </div>
                    <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                        {{ $t(`timeline.${job}.location`) }}
                    </div>
                </div>

                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    {{ $t(`timeline.${job}.description`) }}
                </p>
            </div>
        </li>
    </ol>
    <Splitter />
</template>
