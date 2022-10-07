<script setup>
  defineProps({
    showMenu: {
      type: Boolean,
      required: true,
      default: false,
    },
    treatments: {
      type: Object,
      required: true,
    },
    treatmentUrl: {
      type: Object,
      required: true,
    },
  })
</script>

<template>
  <nav
    id="nav-global-menu"
    aria-label="primary navigation"
    class="absolute top-12 right-2 left-2 z-50 hidden w-auto space-y-8 rounded-md bg-theme-gray p-8 text-left md:h-auto md:min-h-[450px] md:grid-cols-3 md:gap-x-14 md:space-y-0 lg:shadow-primary"
    :class="{
      '!grid  ': showMenu,
    }"
  >
    <div>
      <!-- Treatment page links -->
      <h2 class="text-xl capitalize">treatments</h2>
      <ul class="space-y-1 capitalize">
        <li
          v-for="(treatment, index) in treatments"
          :key="index"
        >
          <nuxt-link
            :to="{
              path: '/treatments',
              query: { treatment: `${[...treatmentUrl][index]}` },
            }"
          >
            {{ treatment.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <!-- Contact page link -->
    <div>
      <h2 class="text-xl capitalize">contact</h2>
      <nuxt-link to="/contact">Contact us</nuxt-link>
    </div>
    
    <!-- About us page link -->
    <div>
      <h2 class="text-xl capitalize">about</h2>
      <nuxt-link to="/about-us">About us</nuxt-link>
    </div>
  </nav>
</template>

<style scoped lang="postcss">
  nav > div {
    @apply space-y-2;
  }

  nav a {
    @apply block 
    text-gray-600
     md:text-lg
     md:hover:underline;
  }
</style>
