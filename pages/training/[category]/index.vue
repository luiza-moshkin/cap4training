<script setup lang="ts">

const route = useRoute();
const params = route.params;
var category = params.category;


const formations = await queryContent(`/training/fr/`).where({ category: category }).sort({ date: -1 }).find();
// .where({ category.upper(): category.upper() })



</script>
<template>
  Training list for category "{{ category }}"
</template>
