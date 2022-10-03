<script setup>
  defineEmits(['update:selected'])
  defineProps({
    treatmentNames: {
      type: Object,
      required: true,
    },
    activeTreatment: {
      type: Number,
      required: true,
    },
  })
</script>

<template>
  <ul class="hidden flex-wrap justify-center gap-x-4 gap-y-6 md:flex">
    <li
      v-for="(name, index) in treatmentNames"
      :key="index"
      class="button button-padding-sm button-pill w-max bg-theme-base-200 font-medium transition-colors"
      :class="{
        '!bg-gray-100 !text-theme-slate': index === activeTreatment,
      }"
    >
      <button
        class="capitalize text-theme-slate"
        @click="$emit('update:selected', index)"
      >
        {{ name }}
      </button>
    </li>
  </ul>
</template>
