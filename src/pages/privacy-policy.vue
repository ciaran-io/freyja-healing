<script setup>
  useHead({
    title: '- Privacy policy',
    meta: [
      {
        name: 'description',
        content: 'Fréyja healing privacy policy',
      },
    ],
  })
</script>

<template>
  <div
    class="container mx-auto mt-24 mb-16 h-full rounded-base bg-theme-base-100 px-8 shadow-primary lg:max-w-4xl"
  >
    <div class="space-y-6 p-6">
      <h1 class="text-3xl">Privacy policy</h1>
      <div>
        <p>
          Privacy Notice: Fréya healing respects your privacy and is committed
          to protecting your personal information. We do not sell user
          information to third parties. Information collected on our website is
          strictly used to keep reference to customer bookings. We keep records
          for up to two years. If you have made a booking with us and would like
          a copy of your data or would like to request deletion of your data you
          can contact us at
          <nuxt-link
            to="mailto:info@freyja-healing.email? &subject=Privacy
        &body=I would like to request a copy of my data"
            class="font-semibold"
            >info@freyja-healing.email
          </nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>
