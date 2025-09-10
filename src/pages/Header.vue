<script setup lang="ts">
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import SocialBadge from '../components/ui/SocialBadge.vue';
import Splitter from '../components/ui/Splitter.vue';
import { FwbAvatar } from 'flowbite-vue'
import profilePic from "../assets/images/profile_pic.png"


interface SocialBadgeContent {
    url: string;
    text: string;
    icon: IconProp;
}
const socials: SocialBadgeContent[] = [
    { url: "https://www.linkedin.com/in/alonsorapadoguillen/", text: "LinkedIn", icon: ['fab', 'linkedin'] },
    { url: "https://github.com/byAlonso", text: "Github", icon: ['fab', 'github'] },
    { url: "mailto:alonso.rapado@hotmail.com", text: "Email", icon: ['fas', 'envelope'] }
]

</script>

<template>
    <section class="flex flex-col sm:flex-row items-center gap-10 p-6">
        <!-- Avatar -->
        <fwb-avatar bordered size="xl" :img="profilePic" rounded status-position="top-right" />
        <!-- Text & Badges -->
        <div class="flex flex-col items-center sm:items-start text-center sm:text-left gap-4 max-w-xl">
            <!-- Headline -->
            <h1 class="text-3xl sm:text-5xl font-extrabold">
                Alonso Rapado
            </h1>

            <p class="text-lg leading-relaxed">
                Software Engineer
            </p>

            <!-- Social badges row -->
            <div class="flex flex-row gap-3">
                <SocialBadge v-for="social in socials" :key="social.text" :url="social.url" :text="social.text"
                    :icon="social.icon" />
            </div>
        </div>
    </section>
    <Splitter />
</template>