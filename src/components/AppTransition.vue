<script setup>
  defineProps({
    isHidden: {
      type: Boolean,
      default: true,
    },
  })
</script>

<template>
  <Transition
    appear
    name="fade"
  >
    <span
      v-show="!isHidden"
      class="block"
    >
      <slot></slot>
    </span>
  </Transition>
</template>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s ease-in 1s;
  }

  .fade-enter-from,
  .fade-leave-to {
    transition-delay: 0s !important;
    opacity: 0;
  }
</style>
