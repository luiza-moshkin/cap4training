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

    defaultLocale: 'fr',
    strategy: 'prefix_except_default', // no prefix for the url but we can have /en for example for the translation
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
      cookieKey: 'i18n_redirected',
      detectBrowserLanguage: true,
      redirectOn: 'root' // recommended
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
  }
});
