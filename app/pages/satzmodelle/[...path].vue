<script setup>
const { data: satzmodelle } = await useAsyncData(`satzmodelle/*`, () => queryCollection('satzmodelle').all());


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
    <div class="flex flex-col gap-8">
        <h1 class="font-bold text-3xl">{{page.title}}</h1>
        <VerovioCanvas :url="localScoreUrlGenerator(page.scorePath)" />
        <div class="flex gap-2">
            <UBadge class="flex gap-4" size="lg" v-for="tag in page.tags" :key="tag">{{ $t(tag) }}</UBadge>
        </div>
        <ContentRenderer v-if="page" :value="page" />
    </div>
</template>