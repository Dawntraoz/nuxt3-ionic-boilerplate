import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  app: {
     head: {
      titleTemplate: '%s | Nuxtion',
      meta: [
        { charset: 'utf-8' },
        { name: 'theme-color', content: '#040B19' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'color-scheme', content: 'dark' },
        {
          hid: 'description',
          name: 'description',
          content:
            'A boilerplate for creating new Nuxt 3 Ionic applications with some basic functionalities.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ],
    },
  },
  css: [
    '@/assets/css/main.css',
  ],
  modules: ['nuxt-ionic']
})
