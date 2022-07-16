import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
     head: {
      titleTemplate: '%s | Nuxtion',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'A boilerplate for creating new Nuxt 3 Ionic applications with some basic functionalities.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico', sizes: 'any' },
        { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon.png' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' }
      ],
    },
  },
  css: [
    '@/assets/css/main.css',
  ]
})
