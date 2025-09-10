<template>
  <section class="px-4 md:px-8 lg:px-16 py-12" :style="{ backgroundColor: 'var(--color-bg)' }">
    <!-- Título de la sección -->
    <h2 class="text-3xl md:text-4xl font-medium mb-10 flex items-center justify-center gap-3"
      :style="{ color: 'var(--color-accent)' }">
      {{ $t('skills.title') }}
    </h2>

    <!-- Lista de grupos de skills -->
    <div class="flex flex-col gap-8">
      <div v-for="skillGroup in skillList" :key="skillGroup.name"
        class="rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
        :style="{ backgroundColor: 'var(--color-bg-alt)' }">
        <h3 class="text-xl md:text-2xl font-semibold text-center mb-6" :style="{ color: 'var(--color-heading)' }">
          {{ skillGroup.name }}
        </h3>

        <div class="flex flex-wrap justify-center gap-6">
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
