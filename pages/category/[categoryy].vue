<script setup lang="ts">



const route = useRoute();
const params = route.params;



</script>
<template>
  <TrainingList :category="params.categoryy"></TrainingList>
</template>
