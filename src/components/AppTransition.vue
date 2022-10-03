<script setup>
  const props = defineProps({
    isHidden: {
      type: Boolean,
      default: true,
    },
    transitionDuration: {
      type: Number,
      default: 0.5,
      // required: true,
    },
    transitionDelay: {
      type: Number,
      default: 0,
      // required: true,
    },
  })
  const duration = ref(0)
  const durationTime = () =>
    computed(
      () =>
        (duration.value = Math.round(
          props.transitionDelay + props.transitionDelay * 1000
        ))
    )

  onMounted(() => durationTime())
</script>

<template>
  <Transition
    appear
    name="fade"
    :duration="duration"
  >
    <span
      v-show="!isHidden"
      class="trans-delay block"
    >
      <slot></slot>
    </span>
  </Transition>
</template>

<style>
  .trans-delay {
    transition-delay: v-bind(transitionDelay + 's') !important;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity v-bind(transitionDuration + 's') ease-in;
  }

  .fade-enter-from,
  .fade-leave-to {
    transition-delay: 0s !important;
    opacity: 0;
  }
</style>
