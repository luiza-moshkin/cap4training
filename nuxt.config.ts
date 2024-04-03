// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content", // to acces to the content training / blog / category,...
    '@nuxtjs/i18n', // for translation

    '@vueuse/nuxt',
    'nuxt-icon'
  ],

  css: ["@/assets/scss/main.scss"],
  build: {
    transpile: ["vuetify"],
  },
  i18n: {
    vueI18n: '@/plugins/translate/i18n.config.ts' // if you are using custom path, default
  },
  app: {
    buildAssetsDir: '/public/',
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: "/public/ressource/favicon/favicon-32x32.png" }]

    },
  },
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  }
});
