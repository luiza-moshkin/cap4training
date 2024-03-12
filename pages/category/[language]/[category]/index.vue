<script setup lang="ts">



const route = useRoute();
const params = route.params;
var category = params.category;
const lang = params.language;

console.log(category);

const formations = await queryContent(`/training/${lang}/`).where({ category : category}).sort({ date: -1 }).find();
// .where({ category.upper(): category.upper() })



</script>
<template>
    All formation
  <v-container>
    <v-list>
      <v-list-item class="mb-2" v-for="formation of formations">
        <NuxtLink :to="formation._path">
          Titre: {{ formation.title }}, category : {{ formation.category }}
        </NuxtLink>
      </v-list-item>
    </v-list>
  </v-container>
</template>
