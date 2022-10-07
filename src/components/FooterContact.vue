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

    <div class="hide-on-mobile space-y-4">
      <template
        v-for="(information, value) in contactInformation"
        :key="information"
      >
        <div>
          <div class="font-medium capitalize">{{ value }}</div>
          <div v-if="value !== 'opening hours'">
            {{ information }}
          </div>

          <div v-else>{{ information.day }} {{ information.hours }}</div>
        </div>
      </template>
    </div>
  </div>
</template>
