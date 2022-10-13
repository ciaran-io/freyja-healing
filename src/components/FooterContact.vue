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
    <dl
      aria-label="contact information"
      class="hide-on-mobile [&_dt:not(:first-child)]:pt-2"
    >
      <template
        v-for="(information, value) in contactInformation"
        :key="information"
      >
        <dt class="font-medium capitalize">{{ value }}</dt>
        <dd v-if="value !== 'opening hours'">
          {{ information }}
        </dd>

        <dd v-else>{{ information.day }} {{ information.hours }}</dd>
      </template>
    </dl>
  </div>
</template>
