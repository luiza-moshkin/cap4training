<script setup lang="ts">
const route = useRoute();
const params = route.params;
const blog = params.blog;

const {locale} = useI18n();
const post = await queryContent(`/blog/${locale.value}/${blog}`).findOne();
</script>
<template>
  <ContentRenderer :value="post">
    <b>Titre blog : </b>{{ post.title }}<br />
  </ContentRenderer>
</template>
