<template>
    <h3 style="text-align: center;">Our general condition of sale</h3>
    <main id="main" class="typography">

        <MiscParseMarkdown :markdownString="generalCondition?.content" />
    </main>

</template>


<script setup lang="ts">

const { locale, setLocale } = useI18n();


// -------- -  load content 
var { data: generalCondition } = await reactive(await useAsyncData("generalCondition", () =>
    queryContent("/generalcondition/" + locale.value + "/general-condition-of-sale-2").findOne())
);


// watcher when we change the language of the website we need to refresh also the content
// like that we dont need to refresh the page !
watch(locale, async () => {
    var { data: generalCondition } = await reactive(await useAsyncData("generalCondition", async () =>
        await queryContent("/generalcondition/" + locale.value + "/general-condition-of-sale-2").findOne()
    ));
});



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