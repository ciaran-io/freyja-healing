<script setup>
  definePageMeta({
    layout: 'dynamic',
  })
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
  <div class="container mx-auto mt-24 space-y-8">
    <h1 class="text-center text-6xl">Our Story</h1>
    <img
      src="/images/about.jpg"
      alt="Picture of woman gazing into the sunset sitting on bench"
      class="h-96 w-full rounded-base object-cover"
      width="1980"
      height="1280"
    />
    <div class="information-card container mx-auto space-y-4 lg:max-w-3xl">
      <h2>
        Hi, I'm Laura I began Fréjya health more than 3 years ago with a dream
        to help as many people that needed my help and knowledge in reflexology
        & naturopathic treatments.
      </h2>

      <p>
        We have grown over the years adding two more naturopaths, Alex & Sarah;
        both with years of experience in their fields. We each have a passion
        for helping people to live happy healthier lifestyles.
      </p>

      <p>
        If you curious and would like to know more feel free to call or send a
        message and we will get back to you as soon as possible
      </p>
    </div>
  </div>
</template>
