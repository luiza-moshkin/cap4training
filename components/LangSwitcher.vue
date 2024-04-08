<script setup lang="ts">
const { locales, locale, setLocale } = useI18n();

const language = computed({
    get: () => locale.value,
    set: (value) => {
        setLocale(value);

        /* we can add a a path with path variable, default is the same path as here
            doccumentation of the function :
            https://nuxt.com/docs/api/utils/reload-nuxt-app
        */


        reloadNuxtApp({

            ttl: 100, // optional limit of request (1 request per second for this)
        });
    },
});
</script>

<template>
    <select v-model="language">

        <!-- for each language in the nuxt config file -->
        <option v-for="item in locales" :key="typeof item === 'object' ? item.code : item"
            :value="typeof item === 'object' ? item.code : item">
            {{ typeof item === "object" ? item.name : item }}
        </option>
    </select>
</template>