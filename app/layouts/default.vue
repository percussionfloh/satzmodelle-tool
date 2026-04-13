<script setup>
import { de } from '@nuxt/ui/locale';

useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} | Satzmodelle Projekt` : 'Satzmodelle Projekt';
    },
});
</script>

<template>
        <UApp :locale="de">
            <div class="flex flex-col min-h-screen">
                <TheHeader />
                <TheNavigation />
                <main class="py-8">
                    <slot></slot>
                </main>
                <TheFooter class="mt-auto" />
            </div>
        </UApp>
</template>

<style>
html {
    font-size: 20px;
}


</style>