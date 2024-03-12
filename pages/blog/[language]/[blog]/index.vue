<script setup lang="ts">
const route = useRoute();
const params = route.params;
const blog = params.blog;
const lang = params.language;
const post = await queryContent(`/blog/${lang}/${blog}`).findOne();
</script>
<template>
  <v-container>
    <ContentRenderer :value="post">
      <b>Titre blog : </b>{{ post.title }}<br/>
    </ContentRenderer>
  </v-container>
</template>

