<script setup lang="ts">
import Splitter from '../components/ui/Splitter.vue';

</script>

<template>
    <section class="about-me">
        <blockquote>
            <p>{{ $t('about.bio') }}</p>
            <cite>{{ $t('about.cite') }}</cite>
        </blockquote>
    </section>
    <Splitter />
</template>