<script setup lang="ts">



const route = useRoute();
const params = route.params;
var category = params.category;

// const lang = params.language;
const lang = params.language;


const formations = await queryContent(`/training/fr/`).where({ category: category }).sort({ date: -1 }).find();
// .where({ category.upper(): category.upper() })



</script>
<template>
  Training list for category "{{ category }}"
  <div class="mb-2" v-for="formation of formations">
    <NuxtLink :to="formation._path">
      Title: {{ formation.title }}<br />
    </NuxtLink>
  </div>
</template>
