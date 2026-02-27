<script setup>
const { t } = useI18n();
const { data: satzmodelle } = await useAsyncData(`satzmodelle/*`, () => queryCollection('satzmodelle').all());

const tags = [...new Set(satzmodelle.value.flatMap(item => item.tags ?? []))]
const selectedTags = ref([]);

function toggleTag(tag) {
    if (selectedTags.value.includes(tag)) {
        selectedTags.value = selectedTags.value.filter(item => item !== tag);
    } else {
        selectedTags.value.push(tag);
    }
}
</script>

<template class="flex flex-wrap gap-6">
    <div class="max-w-7xl mx-auto">
        <div class="flex flex-wrap gap-6">
            <UButton v-for="tag in tags" :color="selectedTags.includes(tag) ? 'primary' : 'neutral'" @click="toggleTag(tag)" :label="$t(tag)" />
        </div>
        <ul v-if="selectedTags.length > 0" class="flex flex-wrap gap-6 mt-6">
            <template v-for="satzmodell in satzmodelle" :key="satzmodell">
                <li v-if="selectedTags.every(tag => satzmodell.tags?.includes(tag))">
                        <UBadge color="primary" size="xl">{{ satzmodell.title }}</UBadge>
                </li>
            </template>
        </ul>
    </div>
</template>