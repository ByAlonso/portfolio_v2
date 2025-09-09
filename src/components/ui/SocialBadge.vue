<script setup lang="ts">
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps<{
  url: string;
  text: string;
  icon: IconProp; // accepts the Font Awesome icon
}>();
</script>

<template>
  <a :href="props.url" target="_blank" rel="noreferrer"
    class="flex items-center gap-2 px-4 py-2 rounded-xl shadow hover:shadow-md transition-shadow text-gray-800 dark:text-gray-100">
    <font-awesome-icon :icon="props.icon" class="text-xl" />
    {{ props.text }}
  </a>
</template>
