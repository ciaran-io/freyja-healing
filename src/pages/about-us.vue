<script setup>
  useHead({
    title: '- About us',
    meta: [
      {
        name: 'description',
        content:
          'Find out more about Fréyja healing. Our journey, mission & more!.',
      },
    ],
  })
</script>

<template>
  <div class="container mx-auto mt-24 mb-32 space-y-16 lg:max-w-screen-lg">
    <h1 class="text-center text-6xl">Our Story</h1>

    <nuxt-img
      provider="cloudinary"
      src="/about.jpg"
      alt="Picture of woman gazing into the sunset sitting on bench"
      class="w-full h-[400px] rounded-base object-cover"
      width="976"
      height="400"
      :modifiers="{ f: 'auto', q: '85' }"
    />

    <main class="information-card mx-auto space-y-4 lg:max-w-4xl">
      <p class="text-lg">
        Hi, I'm Laura I began Fréjya health more than 3 years ago with a dream
        to help as many people that needed my help and knowledge in reflexology
        & naturopathic treatments.<br /><br />
        In the last few years we have grown adding two more naturopaths, Alex &
        Sarah; both with years of experience in their fields. We each have a
        passion for helping people to live happy healthier lifestyles. If you
        curious and would like to know more feel free to call or send a message
        and we will get back to you as soon as possible.
      </p>
    </main>
  </div>
</template>
