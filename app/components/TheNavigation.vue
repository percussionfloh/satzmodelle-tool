<script setup>
const { t } = useI18n();
const localePath = useLocalePath();

const items = [
    {
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
        label: t('augmentedSixthChords'),
        to: localePath({ name: 'augmented6' }),
    },
    {
        label: t('fauxbourdon'),
        to: localePath({ name: 'fauxbourdon' }),
    },
    {
        label: t('fonteMonte'),
        to: localePath({ name: 'fonteMonte' }),
    },
    {
        label: t('karussell'),
        to: localePath({ name: 'karussell' }),
    },
    {
        label: t('lamento'),
        to: localePath({ name: 'faq-lamento' }),
    },
    {
        label: t('quintfall'),
        to: localePath({ name: 'quintfall' }),
    },
    {
        label: t('quintstieg'),
        to: localePath({ name: 'quintstieg' }),
    },
    {
        label: t('about'),
        to: localePath({name: 'about'}),
    },
    {
        label: t('faq'),
        to: localePath({name: 'faq'}),
    },
];
</script>

<template>
    <UNavigationMenu :items="items" class="border-b border-gray-200 dark:border-gray-800 px-2"/>
</template>