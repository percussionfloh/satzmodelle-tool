<script setup>
definePageMeta({
    layout: 'satzmodelle',
});

const { data: satzmodelle } = await useAsyncData('satzmodelle', () => queryCollection('satzmodelle').all());
const { localScoreUrlGenerator } = useScoreUrlGenerator();
</script>

<template>
    <UContainer>
        <h1>Satzmodelle</h1>
        <div v-for="satzmodell in satzmodelle">
            <h2>{{ satzmodell.title }}</h2>
            <VerovioCanvas :url="localScoreUrlGenerator(satzmodell.scorePath)" />
        </div>
    </UContainer>
</template>
