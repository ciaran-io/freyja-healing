<template>
  <div>
    <header class="container mt-8 text-center mx-auto">
      <nav>
        <NuxtLink
          class="text-3xl"
          to="/"
        >
          <span> Fréyja healing </span>
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
