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

  const emailAddress = 'info@freyja-healing.email'
  const emailSubject = 'Privacy'
  const emailBody = 'I would like to request a copy of my data.'
  const mailtoBody = emailBody.replaceAll(' ', '%20')

  const mailto = `mailto:${emailAddress}?&subject=${emailSubject}&body=${mailtoBody}`
</script>

<template>
  <div class="container mx-auto mt-24 mb-16 space-y-6 lg:max-w-4xl">
    <div class="information-card">
      <h1 class="text-3xl">Privacy policy</h1>
      <main>
        <p>
          Privacy Notice: Fréya healing respects your privacy and is committed
          to protecting your personal information. We do not sell user
          information to third parties. Information collected on our website is
          strictly used to keep reference to customer bookings. We keep records
          for up to two years. If you have made a booking with us and would like
          a copy of your data or would like to request deletion of your data you
          can contact us at
          <nuxt-link
            class="font-medium hover:underline"
            :to="mailto"
            >info@freyja-healing.email
          </nuxt-link>
        </p>
      </main>
    </div>
  </div>
</template>
