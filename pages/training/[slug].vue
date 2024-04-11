<script setup lang="ts">



const route = useRoute();
const params = route.params;
const category = params.slug || 'null'

const {locale} = useI18n();

//var formations = await queryContent('/training/' + locale.value + '/').where({ category: category }).sort({ date: -1 }).find();
// .where({ category.upper(): category.upper() })


var { data: formations } = await reactive(await useAsyncData(`training-${locale.value}/`, () =>
  queryContent('/training/' + locale.value + '/').where({ category: category }).sort({ date: -1 }).find())
);

</script>
<template>
  Training list for category "{{ category }}"
  <div class="mb-2" v-for="formation of formations">
    <NuxtLinkLocale :to="'/training/' + formation.category + '/' + $extractTitleFromPath(formation._path)">
      Title: {{ formation.title }}<br />
    </NuxtLinkLocale>  </div>
</template>
