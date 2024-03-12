<script setup lang="ts">
const route = useRoute();
const params = route.params;
const slug = params.slug;
const lang = params.language;
const training = await queryContent(`/training/${lang}/${slug}`).findOne();
const categoryObject = await queryContent(`/category/${lang}/${training.category}`).findOne();

</script>
<template>
  <v-container>
    <ContentRenderer :value="training">
      <b>Titre formation : </b>{{ training.title }} {{ categoryObject.title }}<br/>
    </ContentRenderer>
  </v-container>
</template>
