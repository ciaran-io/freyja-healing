<template>
  <div class="container mx-auto mt-8">
    <header class="text-center">
      <nav>
        <NuxtLink
          class="text-3xl"
          to="/"
        >
          Fréyja healing
          <Icon
            aria-hidden="true"
            class="h-6 w-6"
            name="ic:outline-spa"
          />
        </NuxtLink>
      </nav>
    </header>

    <slot />
  </div>
</template>
