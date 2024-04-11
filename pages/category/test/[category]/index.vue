<script setup lang="ts">



const route = useRoute();
const params = route.params;
var category = params.category;

// const lang = params.language;


//const formations = await queryContent(`/training/fr/`).where({ category: category }).sort({ date: -1 }).find();


const { data } = await useAsyncData('get-document', () => queryContent(`/training/fr/`).where({ category: category }).sort({ date: -1 }).find())
// .where({ category.upper(): category.upper() })



</script>
<template>
  Liste formation
  <div class="mb-2" v-for="formation of data">
    <NuxtLink :to="formation._path">
      Title: {{ formation.title }}<br />
    </NuxtLink>

  </div>
</template>
