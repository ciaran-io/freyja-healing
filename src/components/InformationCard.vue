<script setup>
  defineProps({
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    // eslint-disable-next-line vue/require-default-prop
    icon: {
      type: String,
      required: false,
    },
    isReview: {
      type: Boolean,
      required: false,
      default: false,
    },
  })
</script>

<template>
  <div class="information-card">
    <div class="flex h-full flex-col items-center space-y-8">
      <h3 class="max-w-[20ch] text-center text-lg font-medium capitalize">
        {{ heading }}
      </h3>

      <div v-if="!isReview">
        <Icon
          class="h-8 w-8 text-slate-600"
          aria-hidden="true"
          :name="`${icon}`"
        />
      </div>

      <div
        v-if="isReview"
        class="text-center"
      >
        <slot name="reviewName">
          <div>client</div>
        </slot>

        <Icon
          class="h-6 w-6 text-slate-600"
          aria-hidden="true"
          :name="`${icon}`"
        />

        <div>
          <Icon
            v-for="(n, index) in 5"
            :key="index"
            class="text-gray-500/70"
            name="material-symbols:star"
          />
        </div>
      </div>

      <p
        class="relative max-w-[30ch] whitespace-pre-line pt-1 text-lg"
        :class="{ quote: isReview }"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="postcss">
  .quote {
    &::before {
      @apply absolute
      -top-1
      -left-5
      text-gray-600
      content-['\301D'];
    }
  }
</style>
