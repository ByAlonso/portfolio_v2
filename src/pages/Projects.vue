<script setup lang="ts">
import Splitter from '@/components/ui/Splitter.vue';

</script>

<template>
    <h2 class="text-4xl md:text-5xl font-black text-gradient-lime mb-8 flex items-center justify-center gap-4 pb-4">
        {{ $t('projects.title') }}
    </h2>
    <div class="flex justify-center mb-8">
        <img src="@/assets/gifs/wip.gif" alt="Work in Progress" class="h-60 w-60 rounded-lg">
    </div>
    <Splitter />
</template>