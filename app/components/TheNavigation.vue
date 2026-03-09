<script setup>
const { t } = useI18n();
const localePath = useLocalePath();

const items = [
    [{
        label: t('start'),
        to: localePath({name: 'index'}),
    },
    {
        label: t('tool'),
        to: localePath({name: 'tool'}),
    },
    {
        label: t('sequences'),
        to: localePath({name: 'satzmodelle'}),
    },
    {
        label: t('glossarLiteratur'),
        to: localePath({name: 'glossarLiteratur'}),
    }],
    [{
        label: t('about'),
        to: localePath({name: 'index'}),
    },
    {
        label: t('legalNotice'),
        to: localePath('legal-notice'),
    }],
];
</script>

<template>
    <UNavigationMenu :items="items" class="border-b border-gray-200 dark:border-gray-800 px-2"/>
</template>
