<script setup lang="ts">

const route = useRoute();
const params = route.params;
var category = params.category;


// .where({ category.upper(): category.upper() })



</script>
<template>
  Training list for category "{{ category }}"
</template>
