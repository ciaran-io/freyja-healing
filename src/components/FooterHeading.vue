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
  <button
    class="md:hidden text-theme-slate w-full pb-2 text-xl text-left capitalize"
    aria-expanded="false"
    @click="$emit('toggleMenu', $event.target)"
  >
    {{ heading }}
    <Icon
      class="pointer-events-none float-right h-5 w-5 transition-transform duration-150 md:!hidden"
      aria-hidden="true"
      name="gridicons:chevron-down"
    />
  </button>
  <h2 class="md:block hidden pb-3 text-xl capitalize">
    {{ heading }}
  </h2>
</template>
