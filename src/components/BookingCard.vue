<script setup>
  defineProps({
    treatments: {
      type: Object,
      required: true,
    },
    treatmentUrl: {
      type: Object,
      required: true,
    },
  })
</script>

<template>
  <div
    class="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-8 lg:grid-cols-2"
  >
    <div
      v-for="(treatment, index) in treatments"
      :key="index"
      class="space-y-6"
    >
      <div class="relative h-64 rounded-2xl">
        <div
          class="relative grid h-full w-full rounded-base bg-[url('/images/services.webp')] bg-cover bg-no-repeat p-2 before:backdrop-blur-sm"
        >
          <p
            class="absolute w-full max-w-[30ch] place-self-center rounded-base bg-white/70 p-5 text-center font-medium capitalize"
          >
            {{ treatment.name }}
          </p>
        </div>
      </div>
      <nuxt-link
        :aria-label="`book appointment for ${treatment.name}`"
        class="button button-padding-sm button-rounded-base button-primary block text-lg"
        :to="{
          path: `/booking`,
          query: { booking: `${[...treatmentUrl][index]}` },
        }"
      >
        Book now
        <Icon
          aria-hidden="true"
          class="float-right h-7 w-7"
          name="ic:outline-arrow-circle-right"
        />
      </nuxt-link>
    </div>
  </div>
</template>
