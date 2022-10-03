<script setup>
  import { showHiddenContent } from '~/utils'

  defineProps({
    contactInformation: {
      type: Object,
      required: true,
    },
  })

  function toggleMenu(event) {
    showHiddenContent(event)
  }
</script>

<template>
  <div class="md:row-span-2 md:justify-self-center">
    <FooterHeading
      heading="contact us"
      @toggle-menu="toggleMenu"
    />

    <div class="hide-on-mobile">
      <template
        v-for="(information, value) in contactInformation"
        :key="information"
      >
        <div class="mt-3">
          <div v-if="value !== 'opening hours'">
            <h4>{{ value }}</h4>
            <p>{{ information }}</p>
          </div>

          <div v-else>
            <h4>{{ value }}</h4>
            <p>{{ information.day }} {{ information.hours }}</p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="postcss">
  h4 {
    @apply font-medium capitalize;
  }
</style>
