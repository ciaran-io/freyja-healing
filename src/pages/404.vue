<script setup>
  definePageMeta({
    layout: false,
  })

  useHead({
    title: 'Not found',
  })

  const pageLinks = [
    {
      label: 'Home',
      url: '/',
      icon: 'material-symbols:android-google-home',
      content: 'Everything starts here',
    },
    {
      label: 'Treatments',
      url: '/treatments',
      icon: 'material-symbols:spa',
      content: 'View all our treatments',
    },
    {
      label: 'Contact',
      url: '/contact',
      icon: 'material-symbols:alternate-email',
      content: 'Contact us for more information',
    },
  ]
</script>

<template>
  <div
    class="mt-12 w-full px-3 pb-12 lg:grid lg:h-screen lg:place-items-center lg:px-0 lg:pb-0"
  >
    <main class="space-y-8 lg:w-8/12 lg:max-w-screen-xl">
      <!-- page not found message -->
      <section class="relative h-48 rounded-xl bg-theme-gray p-6 shadow-md">
        <div
          aria-label="hidden"
          class="absolute top-1 right-1 rounded-xl bg-theme-base px-3 font-medium text-theme-slate shadow-md"
        >
          404
        </div>
        <h1 class="mt-2 text-4xl md:mt-0">Looks like your lost friend</h1>
        <p class="text-xl">The page your looking for could not be found.</p>
      </section>
      <!-- Navigation for pageLinks -->
      <section class="information-card">
        <h2 class="text-center text-2xl">Continue your journey</h2>

        <div class="divide-y">
          <!-- page links -->
          <nuxt-link
            v-for="link in pageLinks"
            :key="link.label"
            :to="link.url"
            class="group flex items-center gap-x-4 py-10"
          >
            <!-- page link icon -->
            <div class="rounded-xl bg-theme-gray px-2 py-4">
              <Icon
                class="h-8 w-8"
                :name="link.icon"
              />
            </div>

            <div>
              <!-- page link & text -->
              <h3
                class="max-w-min border-b border-b-transparent text-2xl font-medium transition-[border] duration-300 group-hover:border-b-theme-slate"
              >
                {{ link.label }}
              </h3>
              <p>
                {{ link.content }}
              </p>
            </div>
            <Icon
              class="ml-auto transition-all duration-150 group-hover:h-7 group-hover:w-7 group-hover:text-theme-base-200"
              name="material-symbols:arrow-forward-ios"
            />
          </nuxt-link>
        </div>
      </section>
    </main>
  </div>
</template>
