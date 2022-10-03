<script setup>
  defineProps({
    activeComponent: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <button class="button button-pill button-padding-sm bg-theme-base">
    {{ text }}
    <slot name="icon" />
  </button>
</template>
