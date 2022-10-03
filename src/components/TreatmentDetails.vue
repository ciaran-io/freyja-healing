<script setup>
  defineProps({
    treatment: {
      type: Object,
      required: true,
    },
  })
</script>

<template>
  <div
    class="information-card space-y-8 rounded-md p-8 md:grid md:grid-cols-2 md:gap-x-16 md:space-y-0"
  >
    <div class="space-y-8 md:space-y-16">
      <div>
        <h3>Details</h3>
        <ul class="space-y-1">
          <li class="capitalize">Treatment: {{ treatment.name }}</li>
          <li>
            Duration:

            {{
              treatment.duration > 1
                ? treatment.duration + ' hours'
                : treatment.duration + ' hour'
            }}
          </li>

          <li>Price: €{{ treatment.price }}</li>
        </ul>
      </div>

      <div v-if="treatment.benefits">
        <h3>Benefits</h3>
        <ul>
          <li
            v-for="(benefit, index) in treatment.benefits"
            :key="index"
            class="list-inside list-disc capitalize"
          >
            {{ benefit }}
          </li>
        </ul>
      </div>
    </div>

    <div>
      <h3>Information</h3>

      <div class="max-w-[40ch]">
        {{ treatment.description }}
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  h3 {
    @apply mb-4 
    border-b border-theme-base-100 
    text-xl;
  }
</style>
