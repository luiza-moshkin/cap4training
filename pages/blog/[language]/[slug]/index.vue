<script setup lang="ts">
const route = useRoute();
const params = route.params;
const slug = params.slug;
const lang = params.language;
const post = await queryContent(`/blog/${lang}/${slug}`).findOne();
</script>
<template>
  <v-container>
    <ContentRenderer :value="post">
      <b>Titre : </b>{{ post.title }}<br/>
      <b>Creation date : </b>{{ post.created_at}}
    </ContentRenderer>
  </v-container>
</template>
