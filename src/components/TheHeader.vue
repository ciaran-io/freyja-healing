<script setup>
  const store = useStore().value
  const { treatmentUrl, treatments } = store
  const showMenu = ref(false)
  const route = useRoute()

  // close menu on query change
  watch(
    () => route.query,
    () => {
      showMenu.value = false
    }
  )
</script>

<template>
  <header>
    <div
      class="container relative mx-auto mt-8"
      :class="{ 'flex justify-between': $route.path !== '/' }"
    >
      <!-- show home link (not on home page) -->
      <NuxtLink
        v-if="$route.path !== '/'"
        to="/"
      >
        <h1 class="text-4xl">
          Fréyja healing
          <Icon
            aria-hidden="true"
            class="h-6 w-6"
            name="ic:outline-spa"
          />
        </h1>
      </NuxtLink>

      <!-- show menu on click -->
      <div :class="{ 'w-full text-right': $route.path === '/' }">
        <button
          aria-label="open navigation menu"
          @click="showMenu = !showMenu"
        >
          <svg
            aria-hidden="true"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            :class="{ animate: showMenu }"
          >
            <g
              stroke="#7D7777"
              stroke-width="3.5"
              stroke-linecap="round"
            >
              <path
                id="line1"
                d="M2 2H30.8441"
              />
              <path
                id="line2"
                d="M8.15594 17H37"
              />
              <path
                id="line3"
                d="M2 32H30.8441"
              />
            </g>
          </svg>
        </button>
      </div>

      <!-- Nav menu -->
      <NavGlobalMenu
        :show-menu="showMenu"
        :treatments="treatments"
        :treatment-url="treatmentUrl"
      />
    </div>
  </header>
</template>

<style scoped lang="postcss">
  svg {
    & #line1,
    #line3 {
      transition: transform ease-in-out 0.2s;
    }

    &.animate {
      & #line1 {
        transform-origin: left 14px;
      }

      & #line3 {
        transform-origin: left center;
      }

      & #line1 {
        @apply rotate-45;
      }

      & #line2 {
        @apply hidden;
      }

      & #line3 {
        @apply -rotate-45;
      }
    }
  }
</style>
