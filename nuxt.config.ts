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

  generate: {
    routes: ["/category/test/**"], // one of routes getting 404
  },



  css: ["@/assets/scss/main.scss"],
  build: {
    transpile: ["vuetify"],
  },
  i18n: { // TRANSLATION PARAMETERS
    langDir: 'locales', // name of the translation directory
    lazy: true, // true : we load only the language that we need and, if its false we will load ALL language of the locales file
    defaultLocale: 'fr',
    strategy: 'prefix_except_default', // /en for example for the translation and not for the default locale
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

    // doc for this : https://i18n.nuxtjs.org/docs/guide/browser-language-detection
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected'
    }
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
  },

});
