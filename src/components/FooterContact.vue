<script setup>
  import { showHiddenContent } from '~/utils'

  defineProps({
    contactInformation: {
      type: Object,
      required: true,
    },
  })
  // Toggle menu on mobile devices
  function toggleMenu(event) {
    showHiddenContent(event)
  }
</script>

<template>
  <div class="md:row-span-2 md:justify-self-center">
    <!-- Footer heading & toggle menu on mobile -->
    <FooterHeading
      heading="contact us"
      @toggle-menu="toggleMenu"
    />
    <!--  contact us information (email, number, opening hours) -->
    <div class="hide-on-mobile space-y-4">
      <div
        v-for="(information, value) in contactInformation"
        :key="information"
      >
        <div class="font-medium capitalize">{{ value }}</div>
        <div v-if="value !== 'opening hours'">
          {{ information }}
        </div>

        <div v-else>{{ information.day }} {{ information.hours }}</div>
      </div>
    </div>
  </div>
</template>
