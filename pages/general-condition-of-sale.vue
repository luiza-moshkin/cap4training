<template>
    <h3 style="text-align: center;">Our general condition of sale</h3>
    <main id="main" class="typography">

        <MiscParseMarkdown :markdownString="generalCondition?.content" />
    </main>

</template>


<script setup lang="ts">

const { locale, setLocale } = useI18n(); // for the translation

const { data: generalCondition } = await reactive(await useAsyncData("generalCondition", () =>
    queryContent("/generalcondition/" + locale.value + "/general-condition-of-sale-2").findOne())
);


console.log(generalCondition);

</script>


<style lang="scss" scoped>
main {
    display: grid;
    justify-items: center;
    align-items: center;

    div {
        max-width: 500px;
    }
}
</style>