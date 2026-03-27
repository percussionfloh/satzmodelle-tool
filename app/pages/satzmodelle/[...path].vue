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
        <MidiPlayer :url="page.midiPath" class="text-2xl"/>
        <VerovioCanvas :url="localScoreUrlGenerator(page.scorePath)" class="bg-white"/>
        <div class="flex gap-2">
            <div v-for="tag in page.tags" :key="tag">
                <UBadge size="lg">{{ $t(tag) }}</UBadge>
            </div>
        </div>
        <ContentRenderer v-if="page" :value="page" />
    </div>
    <div class="flex gap-2">
        <div v-for="sound in page.sounds" :key="sound.url">
        <UButton target="_blank" size="lg" :href="sound.url">{{ sound.label }}</UButton>
</div>
    </div>
</template>

                