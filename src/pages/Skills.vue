<template>
  <section class="px-4 md:px-8 lg:px-16 py-16" :style="{ backgroundColor: 'var(--color-bg)' }">
    <!-- Enhanced title -->
    <h2 class="text-4xl md:text-5xl font-black text-gradient-lime mb-16 flex items-center justify-center gap-4 pb-4">
      {{ $t('skills.title') }}
    </h2>

    <!-- Enhanced skill groups -->
    <div class="flex flex-col gap-12 max-w-6xl mx-auto">
      <div v-for="skillGroup in skillList" :key="skillGroup.name"
        class="card-hover card-glow rounded-3xl p-8 md:p-12 group">

        <h3
          class="text-2xl md:text-3xl font-bold text-center mb-10 text-[var(--color-heading)] group-hover:text-gradient transition-all duration-300">
          {{ $t(`skills.${skillGroup.name}`) }}
        </h3>

        <div class="flex flex-wrap justify-center gap-8 md:gap-10">
          <TechIcon v-for="skill in skillGroup.skills" :key="skill.label" :label="skill.label" :icon="skill.icon"
            :color="skill.color" />
        </div>
      </div>
    </div>
  </section>

  <Splitter />
</template>

<script setup lang="ts">
import TechIcon from "../components/ui/TechIcon.vue";
import Splitter from "../components/ui/Splitter.vue";
import skillList from "../components/utils/skillList.ts"
</script>
