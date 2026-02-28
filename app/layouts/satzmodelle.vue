<script setup>
const { data: satzmodelleNavigation } = await useAsyncData('satzmodelleNavigation', () => {
    return queryCollectionNavigation('satzmodelle');
});

function convertContentNavigationToNavigationMenu(items) {
    return items.map(item => ({
        label: item.title,
        to: item.page === false ? undefined : item.path,
        children: item.children ? convertContentNavigationToNavigationMenu(item.children) : undefined,
    }));
}

const items = convertContentNavigationToNavigationMenu(satzmodelleNavigation.value[0]?.children ?? []);
</script>

<template>
    <NuxtLayout name="default">
        <UContainer>
            <div class="flex flex-col gap-6 lg:flex-row">
                <aside class="border-gray-200 dark:border-gray-800 lg:w-60 lg:shrink-0 lg:border-r lg:pr-6">
                    <UNavigationMenu orientation="vertical" :items="items" class="data-[orientation=vertical]:w-full" />
                </aside>
                <section class="flex-1">
                    <slot />
                </section>
            </div>
        </UContainer>
    </NuxtLayout>
</template>
