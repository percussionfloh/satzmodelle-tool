<script setup>
const { data } = await useAsyncData('satzmodelle', () => queryCollection('satzmodelle').all())
const localePath = useLocalePath();

 const { t } = useI18n();
</script>

<template>
    <UCard v-for="piece in data">
        <div class="flex flex-col gap-8">
            <h1 class="text-3xl font-bold">Satzmodelle</h1>
            <h2>French augmented Sixth</h2>
        <div class="ml-auto">
            <NuxtLink :to="localePath('/satzmodelle')" class="flex flex-col gap-4">
                    {{ piece.title }}
                    <VerovioCanvas  view-mode="horizontal" :url="piece.scorePath" :scale="35" :page-margin="20" />
            </NuxtLink>
        </div>
        </div>
    </UCard>
</template>