<script setup>
const { data: satzmodelle } = await useAsyncData(`satzmodelle/*`, () => queryCollection('satzmodelle').all());

const uselocalePath = useLocalePath

definePageMeta({
    layout: 'satzmodelle',
});

const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
    return queryCollection('satzmodelle').path(route.path).first()
});

if (!page.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page Not Found',
    });
}

function generateSatzmodellParentPath(satzmodell) {
    const path = satzmodell.path;
    // keep only 3 elements. e.g. ['', 'satzmodelle', 'romanesca']
    const parentPage = satzmodell.path.split('/').slice(0, 3);
    // convert array to path. e.g. /satzmodelle/romanesca
    const parentPagePath = parentPage.join('/');
    return localePath(parentPagePath);
}

const { localScoreUrlGenerator } = useScoreUrlGenerator();
</script>

<template>
    <div class="flex flex-col gap-8">
        <h1 class="font-bold text-3xl">{{page.title}}</h1>
        <VerovioCanvas :url="localScoreUrlGenerator(page.scorePath)" />
        <ContentRenderer v-if="page" :value="page" />
    </div>
</template>