<template>
    <h3 style="text-align: center;"> {{ $t('welcome') }}
        Our general condition of sale</h3>
    <main id="main" class="typography">
        <MiscParseMarkdown :markdownString="markdown" />
    </main>

</template>


<script setup lang="ts">


const { locale, setLocale } = useI18n(); // for the translation

console.log("locale; " + locale.value)

var { data: generalCondition } = await reactive(await useAsyncData(`generalCondition-${locale.value}/`, () =>
    queryContent(`/generalcondition/${locale.value}/general-condition-of-sale-2`).findOne())
);


let markdown: string;
markdown = generalCondition?.content


// watcher when we change the language of the website we need to refresh also the content
// like that we dont need to refresh the page !
async function loadContent() { // not used
    var { data: generalCondition } = await reactive(await useAsyncData("generalCondition", () =>
        queryContent(`/generalcondition/${locale.value}/general-condition-of-sale-2`).findOne())
    );
    markdown = generalCondition?.content
}





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