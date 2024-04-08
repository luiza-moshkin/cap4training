<script setup>
import markdownParser from "@nuxt/content/transformers/markdown"

// this file is use to display Markdown content
// example of use on a page vue :
/*
    <MiscParseMarkdown :markdownString="generalCondition?.content" />


    You should not need that if the markdown content is under the second --- in a md file

*/
const props = defineProps({
    markdownString: {
        type: String,
        required: true,
    }
});

const record = ref("");

watchEffect(async () => {
    await markdownParser.parse("custom.md", props.markdownString).then((md) => record.value = md);
});
</script>

<template>
    <ContentRendererMarkdown :value="record" v-if="record" />
</template>