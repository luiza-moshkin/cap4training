// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content", // to acces to the content training / blog / category,...
    '@nuxtjs/i18n', // for translation

    '@vueuse/nuxt',
    'nuxt-icon'
  ],

  content: {
    markdown: {
      // stop the markdownParser from turning headings into anchor tags
      // Alternatively have a read on markdown render options via the Content module at https://content.nuxt.com/get-started/configuration#markdown
      anchorLinks: false
    }
  },



  css: ["@/assets/scss/main.scss"],
  build: {
    transpile: ["vuetify"],
  },
  i18n: { // TRANSLATION PARAMETERS
    langDir: 'locales', // name of the translation directory

    defaultLocale: 'en',
    strategy: "no_prefix", // the defaultLocale en will not have his /en 
    locales: [
      {
        code: "en",
        iso: "en",
        name: "English",
        file: "en.json"
      },
      {
        code: "fr",
        iso: "fr",
        name: "Français",
        file: "fr.json"
      }
    ],
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
