<script setup>
  defineEmits(['toggleMenu'])
  defineProps({
    heading: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <!-- Mobile menu toggle button & icon -->
  <button
    class="w-full pb-2 text-left text-xl capitalize text-theme-slate md:hidden"
    aria-expanded="false"
    @click="$emit('toggleMenu', $event.target)"
  >
    {{ heading }}
    <!-- Toggle menu icon -->
    <Icon
      class="pointer-events-none float-right h-5 w-5 transition-transform duration-150 md:!hidden"
      aria-hidden="true"
      name="gridicons:chevron-down"
    />
  </button>
  <!-- Footer headings on larger screens -->
  <h2 class="hidden pb-3 text-xl capitalize md:block">
    {{ heading }}
  </h2>
</template>
