<script setup>


const { t } = useI18n();
const { data: satzmodelle } = await useAsyncData(`satzmodelle/*`, () => queryCollection('satzmodelle').all());
const localePath = useLocalePath();

const tags = [...new Set(satzmodelle.value.flatMap(item => item.tags ?? []))]

const stageOneTags = computed(() => tags.filter(tag => tag.toLowerCase().includes('wichtig')).sort((a, b) => t(a).localeCompare(t(b))));
const stageTwoTags = computed(() => tags.filter(tag => tag.toLowerCase().includes('mittel')).sort((a, b) => t(a).localeCompare(t(b))));
const stageThreeTags = computed(() => tags.filter(tag => tag.toLowerCase().includes('wenig')).sort((a, b) => t(a).localeCompare(t(b))));

const selectedTags = ref([]);

function toggleTag(tag) {
    if (selectedTags.value.includes(tag)) {
        selectedTags.value = selectedTags.value.filter(item => item !== tag);
    } else {
        selectedTags.value.push(tag);
    }
}

console.log(tags);

</script>


<template class="flex flex-wrap gap-6">
    <div class="flex flex-col items-center gap-8 mt-8 px-20">
        <div class="flex flex-wrap gap-6">
            <UButton v-for="tag in stageOneTags" :color="selectedTags.includes(tag) ? 'primary' : 'neutral'" @click="toggleTag(tag)" :label="$t(tag)" />
        </div>
        <div class="flex flex-wrap gap-6">
            <UButton v-for="tag in stageTwoTags" :color="selectedTags.includes(tag) ? 'primary' : 'neutral'" @click="toggleTag(tag)" :label="$t(tag)" />
        </div> 
        <div class="flex flex-wrap gap-6">
            <UButton v-for="tag in stageThreeTags" :color="selectedTags.includes(tag) ? 'primary' : 'neutral'" @click="toggleTag(tag)" :label="$t(tag)" />
        </div>
        <ul v-if="selectedTags.length > 0" class="flex flex-wrap gap-6 mt-6">
            <template v-for="satzmodell in satzmodelle" :key="satzmodell">
                <li v-if="selectedTags.every(tag => satzmodell.tags?.includes(tag))">
                    <UButton target="_blank" :to="localePath(satzmodell.path)" color="primary" size="xl">{{ satzmodell.title }}</UButton>
                </li>
            </template>
        </ul>
    </div>
</template>

