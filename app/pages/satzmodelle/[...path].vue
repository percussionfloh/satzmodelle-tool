<script setup>
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

const { localScoreUrlGenerator } = useScoreUrlGenerator();
</script>

<template>
    <div>
        <h1>{{ page.title }}</h1>
        <VerovioCanvas :url="localScoreUrlGenerator(page.scorePath)" />
        <ContentRenderer v-if="page" :value="page" />
    </div>
</template>
