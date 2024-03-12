<template>
  <html :lang="locale">
    <head>
      <title>Cap4 Learning</title>
    </head>
    <body>
      <v-container>
        <v-list>
          <v-list-item class="mb-2" v-for="(item, key) in items" :key="key">
            <NuxtLink :to="item.to">
              {{ item.title }}
            </NuxtLink>
          </v-list-item>
        </v-list>
      </v-container>


      Category:

      <v-container>
        <v-list>
          <v-list-item class="mb-2" v-for="category of categorys">
              <NuxtLink :to="`${category._path}`">
              {{ category.title }}
            </NuxtLink>
          </v-list-item>
        </v-list>
      </v-container>





    </body>
  </html>
</template>

<script setup lang="ts">






const locale = process.client ? navigator.language : '';


const browserLanguage = locale.substr(0, 2).toLowerCase(); // en-US to en
const categorys = await queryContent("/category/" + browserLanguage + "/").sort({ date: -1 }).find(); // fetch category

const items = ref([
  {
    title: "Go to blog",
    to: "/blog"
  },
]);

useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});

</script>

<style scoped>
/* Styles CSS du composant */
</style>
