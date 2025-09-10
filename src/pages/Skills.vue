<template>
    <section>
        <div class="flex flex-col gap-6">
            <div v-for="skillGroup in skillList" :key="skillGroup.name"
                class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1">
                <h3 class="text-xl font-semibold text-center mb-4">{{ skillGroup.name }}</h3>

                <div class="flex flex-wrap justify-center gap-4">
                    <TechIcon v-for="skill in skillGroup.skills" :key="skill.label" :label="skill.label"
                        :icon="skill.icon" :color="skill.color" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import TechIcon from "../components/ui/TechIcon.vue";
import skillList from "../components/utils/skillList.ts"
</script>
