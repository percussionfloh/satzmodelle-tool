<script setup>
const localePath = useLocalePath();

const { t } = useI18n();

const columns = [
    {
        label: t('importantLinks'),
        children: [
            {
                label: t('start'),
                to: localePath('index'),
            },
            {
                label: t('faq'),
                to: localePath('faq'),
            },
        ],
    },
    {
        label: t('sitemap'),
        children: [
            {
                label: t('legalNotice'),
                to: localePath('legal-notice'),
            },
        ],
    },
];
</script>

<template>
    <UFooter class="bg-pattern">
        <template #top>
            <UContainer>
                <UFooterColumns :columns="columns" :ui="{
                    list: 'grid grid-cols-2 gap-x-2 space-y-0 mt-3',
                    link: 'text-white text-base',
                    label: 'text-white text-lg',
                }">
                <template #right>
                        <div>
                            <div class="flex justify-end">
                                <img src="../.." class="max-h-[130px]" alt="Lückenfüller" />
                            </div>
                        </div>
                    </template>
                </UFooterColumns>
            </UContainer>
        </template>
    </UFooter>
</template>