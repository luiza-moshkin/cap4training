<script setup lang="ts">



const route = useRoute();
const params = route.params;
var cate = params.categoryy;

// const lang = params.language;


const formations = await queryContent('/training/fr/').find();
// .where({ category.upper(): category.upper() })



</script>
<template>
  Training list for category "{{ categoryy }}"
  <div class="mb-2" v-for="formation of formations">
    <NuxtLink :to="formation._path">
      Title: {{ formation.title }}<br />
    </NuxtLink>
  </div>
</template>
