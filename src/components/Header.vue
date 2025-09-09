<script setup lang="ts">
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import SocialBadge from './ui/SocialBadge.vue';
import Splitter from './ui/Splitter.vue';

// import { Badge } from "shadcn-vue";
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
        <div class="relative">
            <div class="w-44 h-44">
                <img src="../assets/images/profile_pic.png" alt="Alonso Rapado" class="w-full h-full object-cover" />
            </div>
        </div>

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
    <Splitter/>
</template>