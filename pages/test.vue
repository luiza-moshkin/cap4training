<template>
    <v-container>
        <v-list>
          <v-list-item class="mb-2" v-for="(item, key) in items" :key="key">
            <NuxtLink :to="item.to">
              {{ item.title }}
            </NuxtLink>
          </v-list-item>
        </v-list>
      </v-container>
</template>

<script setup lang="ts">

  const locale = process.client ? navigator.language : '';

  // browserLanguage qui fonctionne que en local mais pas sur netlify j'ai 
  // du coup je peux pas remplacer le /fr/ par la langue du navigateur snif
  // const browserLanguage = locale.substr(0, 2).toLowerCase(); // en-US to en
  const categorys = await queryContent("/category/fr/").sort({ date: -1 }).find(); // fetch category

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