<script setup lang="ts">



const route = useRoute();
const params = route.params;
var cat = params.category;

// const lang = params.language;


//const { data } = await useAsyncData('get-document', () => queryContent(`/training/fr/`).where({ category: category }).sort({ date: -1 }).find())
// .where({ category.upper(): category.upper() })


import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/training/fr' }

</script>
<template>
  Liste for {{ cat }}
  <ContentList :query="query" v-slot="{ list }">
    <div v-for="article in list" :key="article._path">
      <h3>{{ article.title }}</h3>
    </div>
  </ContentList>

</template>
