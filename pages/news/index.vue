<script setup lang="ts">


const posts = await queryContent("/blog/fr/").sort({ date: -1 }).find();
</script>
<template>
  <div class="mb-2" v-for="post of posts">
    <NuxtLink :to="'/news/' + $extractTitleFromPath(post._path)">
      {{ post.title }}
    </NuxtLink>
  </div>
</template>
