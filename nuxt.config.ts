// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  // Src directory
  srcDir: 'src/',

  // Nuxt modules
  modules: ['nuxt-icon', '@nuxtjs/tailwindcss'],
  
  // Tailwind module config
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    config: '~~/tailwind.config.js',
    exposeConfig: false,
    viewer: false,
  },
})
