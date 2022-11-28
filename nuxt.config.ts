// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  // Src directory
  srcDir: 'src/',

  // Nuxt modules
  modules: ['nuxt-icon', '@nuxtjs/tailwindcss','@nuxt/image-edge'],

  // Tailwind module config
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    config: '~~/tailwind.config.js',
    exposeConfig: false,
    viewer: false,
  },
  // Meta information
  app: {
    head: {
      titleTemplate: 'Fréyja healing %s',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      meta: [
        { name: 'msapplication-config', content: '/browserconfig.xml' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'author', content: 'Laura Collins' },
      ],
    },
  },
  // Nuxt image config
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/c-io/image/upload/v1669659136/ci-project-1/',
    }
  }
})
