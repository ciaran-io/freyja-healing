<script setup>
  defineProps({
    contactInformation: {
      type: Object,
      required: true,
    },
  })

  const contactIcons = [
    'ic:baseline-local-phone',
    'material-symbols:mail',
    'ion:ios-location',
  ]
</script>

<template>
  <ContactContainer
    class="contact-card absolute z-10 w-full"
    heading="Contact information"
  >
    <div class="flex justify-center">
      <!-- Contact information -->
      <ul class="space-y-12">
        <template
          v-for="(information, value, index) in contactInformation"
          :key="information"
        >
          <li
            v-if="value !== 'opening hours'"
            class="relative flex w-[inherit] items-center gap-x-4"
          >
            <!-- Contact information icon -->
            <Icon
              aria-hidden="true"
              class="!block h-6 w-6"
              :name="contactIcons[index]"
            />

            <span>
              {{ information }}
            </span>
          </li>
        </template>
      </ul>
    </div>
    <!-- Social media icons -->
    <div class="relative z-10 mt-8 text-right">
      <TheSocialIconBlock />
    </div>
  </ContactContainer>
</template>
