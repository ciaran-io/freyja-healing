<script setup>
  import { showHiddenContent } from '~/utils'

  const store = useStore()
  const { contactInformation } = store.value

  const navLinks = new Set(['treatments', 'the team', 'privacy policy'])

  const navLinkUrl = computed(
    () => new Set([...navLinks].map((link) => link.replace(/\s/g, '-')))
  )

  function toggleMenu(event) {
    showHiddenContent(event)
  }
</script>

<template>
  <footer
    class="container mx-auto mt-auto space-y-24 rounded-tr-md rounded-tl-md bg-theme-base-100 px-8 pt-12 pb-8"
  >
    <section
      class="space-y-6 md:grid md:grid-cols-2 md:gap-x-4 md:space-y-0 lg:grid-cols-3 [&_div]:w-full"
    >
      <!-- useful links -->
      <div class="md:row-span-2 lg:row-auto">
        <FooterHeading
          heading="Navigate"
          @toggle-menu="toggleMenu"
        />

        <nav
          aria-label="secondary navigation"
          class="hide-on-mobile"
        >
          <ul class="space-y-1">
            <li
              v-for="(link, key) in navLinks"
              :key="link"
            >
              <nuxt-link :to="`/${[...navLinkUrl][key]}`">
                {{ link }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Contact information -->
      <FooterContact :contact-information="contactInformation" />

      <!-- About us -->
      <div>
        <FooterHeading
          heading="about us"
          @toggle-menu="toggleMenu"
        />

        <div class="hide-on-mobile">
          <p class="md:max-w-[30ch]">
            We began our journey in 2015 with one goal in mind; to offer
            holistic treatments that improve our clients health & wellbeing.
            Over the years we have grown our team and community enabling us to
            help more people and over a wider range of holistic treatments.
          </p>
        </div>
      </div>
    </section>

    <!-- copyright text -->
    <div class="space-y-2 text-center">
      <TheSocialIconBlock class="space-x-4" />
      <div aria-label="copyright text">
        ©2022 Fréyja Healing All rights reserved
      </div>
    </div>
  </footer>
</template>

<style scoped lang="postcss">
  footer {
    :deep(.hide-on-mobile) {
      @apply h-0 overflow-hidden transition-[height] duration-150 ease-in;

      @screen md {
        @apply h-full;
      }
    }
  }
  section > div {
    @apply border-b;

    @screen md {
      @apply border-0 pb-0;
    }
  }

  li a {
    @apply capitalize md:hover:underline;
  }
</style>
