<template>
  <div>
    <nuxt-link
      aria-label="link to facebook"
      to="https://www.facebook.com/"
      target="_blank"
    >
      <Icon
        class="h-8 w-8"
        name="entypo-social:facebook"
    /></nuxt-link>
    <nuxt-link
      aria-label="link to instagram"
      to="https://www.instagram.com/"
      target="_blank"
    >
      <Icon
        class="h-9 w-9"
        name="ph:instagram-logo-fill"
    /></nuxt-link>

    <nuxt-link
      aria-label="link to instagram"
      to="https://www.twitter.com/"
      target="_blank"
    >
      <Icon
        class="h-9 w-9"
        name="entypo-social:twitter"
    /></nuxt-link>
  </div>
</template>

<style lang="postcss" scoped>
  svg {
    @apply text-theme-slate;
  }
</style>
