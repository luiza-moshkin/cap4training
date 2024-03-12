<script setup lang="ts">
const route = useRoute();
const params = route.params;
const slug = params.slug;
const lang = params.language;
const training = await queryContent(`/training/${lang}/${slug}`).findOne();
</script>
<template>
  <v-container>
    <ContentRenderer :value="training">
      <b>Titre formation : </b>{{ training.title }}<br/>
    </ContentRenderer>
  </v-container>
</template>
