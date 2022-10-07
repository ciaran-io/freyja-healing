<script setup>
  const pageLinks = [
    {
      label: 'facebook',
      url: 'https://www.facebook.com/',
      icon: 'entypo-social:facebook',
    },
    {
      label: 'instagram',
      url: 'https://www.instagram.com/',
      icon: 'ph:instagram-logo-fill',
    },
    {
      label: 'twitter',
      url: 'https://www.twitter.com/',
      icon: 'entypo-social:twitter',
    },
  ]
</script>

<template>
  <div class="space-x-4">
    <nuxt-link
      v-for="link in pageLinks"
      :key="link.label"
      :aria-label="`navigate to ${link.label}`"
      :to="link.url"
      target="_blank"
    >
      <Icon
        :data-label="link.label"
        :name="link.icon"
    /></nuxt-link>
  </div>
</template>

<style lang="postcss" scoped>
  svg {
    @apply h-9 w-9 text-theme-slate transition-colors duration-300;
    /* Instagram svg */
    &[data-label='instagram'] {
      @apply hover:text-theme-instagram;
    }
    /* twitter svg */
    &[data-label='twitter'] {
      @apply hover:text-theme-twitter;
    }
    /* facebook svg */
    &[data-label='facebook'] {
      @apply h-8 w-8 hover:text-theme-facebook;
    }
  }
</style>
