<script setup lang="ts">
import Splitter from '../components/ui/Splitter.vue';

const jobs = ["job1", "job2", "job3", "job4", "job5"]
</script>

<template>
    <ol class="relative border-s border-gray-200 dark:border-gray-700">
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
