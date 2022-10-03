<script setup>
  defineProps({
    heading: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <section class="information-card">
    <h3 class="mb-12 text-lg font-medium text-center">
      {{ heading }}
    </h3>
    <slot> </slot>
  </section>
</template>
