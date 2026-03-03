<script setup>
const { data: satzmodelle } = await useAsyncData(`content/satzmodelle/*`, () => queryCollection('satzmodelle').all());
const { t } = useI18n();


const localePath = useLocalePath();

definePageMeta({
    layout: 'satzmodelle',
});

const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
    return queryCollection('satzmodelle').path(route.path).first()
});

console.log(page);


const { localScoreUrlGenerator } = useScoreUrlGenerator();

</script>

<template>
    <UContainer>
        <h1 class="text-2xl font-bold" >{{ page }}</h1>
    </UContainer>
</template>
