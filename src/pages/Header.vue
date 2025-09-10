<script setup lang="ts">
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import SocialBadge from '../components/ui/SocialBadge.vue';
import Splitter from '../components/ui/Splitter.vue';
import { FwbAvatar } from 'flowbite-vue'
import profilePic from "../assets/images/profile_pic.png"
import TechIcon from '@/components/ui/TechIcon.vue';


interface SocialBadgeContent {
    url: string;
    label: string;
    icon: string;
    color: string
}
const socials: SocialBadgeContent[] = [
    {
        url: "https://www.linkedin.com/in/alonsorapadoguillen/",
        label: "LinkedIn",
        icon: "devicon-linkedin-plain colored",
        color: "#0A66C2"
    },
    {
        url: "https://github.com/byAlonso",
        label: "GitHub",
        icon: "devicon-github-original colored",
        color: "#181717"
    },
    {
        url: "mailto:alonso.rapado@hotmail.com",
        label: "Email",
        icon: "fa-solid fa-envelope",
        color: "#EA4335"
    }
];


</script>
<template>
    <section class="flex flex-col sm:flex-row items-center sm:items-start gap-12 p-8 sm:p-12">
        <img class="w-50 h-50 p-1 rounded-full ring-4 ring-yellow-400 shadow-2xl " :src="profilePic"
            alt="Bordered avatar">

        <div class="flex flex-col items-left sm:items-start text-center sm:text-left gap-12 max-w-xl">
            <div class="flex flex-col items-left sm:items-start text-center sm:text-left gap-4 max-w-xl">
                <h1 class="text-4xl sm:text-6xl font-extrabold text-[var(--color-primary)] tracking-tight">
                    Alonso Rapado
                </h1>
                <p class="text-xl font-medium text-[var(--color-text-secondary)] mt-1">
                    Software Engineer
                </p>
            </div>


            <!-- Social badges row -->
            <div class="flex flex-col gap-3 items-center sm:flex-row">
                <a v-for="social in socials" :key="social.label" :href="social.url" target="_blank"
                    rel="noopener noreferrer">
                    <TechIcon variant="social" :icon="social.icon" :label="social.label" :color="social.color" />
                </a>
            </div>
        </div>
    </section>
    <Splitter />
</template>