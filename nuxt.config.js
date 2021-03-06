import { Integrations } from "@sentry/tracing";


export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Stunicons',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Burgeoning pack with 100+ highly customizable icons for your outstanding UI. Easily tweak your icon in a few seconds.' },
      { hid: 'description', name: 'keywords', content: 'stunnity, stun, stunicon, light, icons, simple'},
      { hid: 'og:image', property: 'og:image', content: 'https://res.cloudinary.com/dawr8i20o/image/upload/v1620153858/stunnity/stunicons/cdn/post_1_av24tt.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Code&display=swap' }
      ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'stunicons/fonts/style.css',
    'highlight.js/styles/atom-one-light.css',
    '@simonwep/pickr/dist/themes/classic.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/highlight.js',
    '~/plugins/eventBus.js',
    { src: '~/plugins/ga.client.js', mode:'client'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    // '@nuxtjs/color-mode',
    '@nuxtjs/style-resources',
    // '@nuxtjs/google-analytics'
    '@nuxtjs/dotenv',
    "@nuxtjs/svg"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/sentry'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true
  },

  styleResources: {
    scss: '@/assets/scss/main.scss'
  },
  sentry: {
    dsn: process.env.SENTRY_DNS, // Enter your project's DSN here
    // Additional Module Options go here
    // https://sentry.nuxtjs.org/sentry/options
    config: {
      // Add native Sentry config here
      // https://docs.sentry.io/platforms/javascript/guides/vue/configuration/options/
    },
    tracesSampleRate: 1.0,
    integrations: [new Integrations.BrowserTracing()],
    vueOptions: {
      tracing: true,
      tracingOptions: {
        hooks: [ 'mount', 'update' ],
        timeout: 2000,
        trackComponents: true
      }
    },
  }
  ,
  // googleAnalytics: {
  //   id: process.env.GA_ID
  // }
}
