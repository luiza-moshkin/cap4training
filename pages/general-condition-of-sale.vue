<template>
    <h3 style="text-align: center;">Our general condition of sale</h3>
    <main id="main" class="typography">
        <!-- Component for parsing Markdown content -->
        <MiscParseMarkdown :markdownString="generalCondition?.content" />
    </main>

</template>

<script setup lang="ts">
import { watch, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();

// Initialize general data
const { data: initialGeneralCondition } = await useAsyncData('generalCondition', () =>
    queryContent(`/generalcondition/${locale.value}/general-condition-of-sale-2`).findOne()
);

const generalCondition = reactive(initialGeneralCondition);

// Watch for language changes to refresh content
watch(locale, async () => {
    const { data } = await useAsyncData('generalCondition', async () =>
        queryContent(`/generalcondition/${locale.value}/general-condition-of-sale-2`).findOne()
    );
    Object.assign(generalCondition, data);
});
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
