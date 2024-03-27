<script setup lang="ts">
const locale = process.client ? navigator.language : '';
const browserLanguage = locale.substr(0, 2).toLowerCase(); // en-US to en
const posts = await queryContent("/training/" + browserLanguage + "/").sort({ date: -1 }).find();
</script>
<template>
  All formation
  <div class="mb-2" v-for="post of posts">
    <NuxtLink :to="post._path">
      {{ post.title }}
    </NuxtLink>
  </div>
</template>
