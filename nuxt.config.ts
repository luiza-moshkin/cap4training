// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    '@vueuse/nuxt',
    'nuxt-icon'
  ],
  css: ["@/assets/scss/main.scss"],
  build: {
    transpile: ["vuetify"],
  },
  app: {
    buildAssetsDir: '/public/',
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: "/public/ressource/favicon/favicon-32x32.png" }],
      script: [
        {
          src: '/public/build/runtime.js',
        },
        {
          src: '/public/build/vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_jquery_dist_jquery_js-no-5e286e.js',
        },
        {
          src: '/public/build/app.js',
        }
      ]
    },
  },
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  }
});
