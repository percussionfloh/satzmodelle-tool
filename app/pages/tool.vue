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

const visibleTags = computed(() => {
    if (selectedTags.value.length === 0) {
        return { stage1: stageOneTags.value, stage2: stageTwoTags.value, stage3: stageThreeTags.value };
    }
    
    // Find satzmodelle that have ALL selected tags
    const matchingSatzmodelle = satzmodelle.value.filter(item => 
        selectedTags.value.every(tag => item.tags?.includes(tag))
    );
    
    // Get all tags from those satzmodelle
    const tagsFromMatching = [...new Set(matchingSatzmodelle.flatMap(item => item.tags ?? []))];
    
    // Filter each stage to only include tags from matching satzmodelle
    return {
        stage1: stageOneTags.value.filter(tag => tagsFromMatching.includes(tag)),
        stage2: stageTwoTags.value.filter(tag => tagsFromMatching.includes(tag)),
        stage3: stageThreeTags.value.filter(tag => tagsFromMatching.includes(tag))
    };
});



</script>


<template class="flex flex-wrap gap-6">
    <div class="flex flex-col items-center gap-8 mt-8 px-20">
        <div class="flex flex-wrap gap-6">
            <UButton v-for="tag in visibleTags.stage1" :color="selectedTags.includes(tag) ? 'primary' : 'neutral'" @click="toggleTag(tag)" :label="$t(tag)" />
        </div>
        <div class="flex flex-wrap gap-6">
            <UButton v-for="tag in visibleTags.stage2" :color="selectedTags.includes(tag) ? 'primary' : 'neutral'" @click="toggleTag(tag)" :label="$t(tag)" />
        </div>
        <div class="flex flex-wrap gap-6">
            <UButton v-for="tag in visibleTags.stage3" :color="selectedTags.includes(tag) ? 'primary' : 'neutral'" @click="toggleTag(tag)" :label="$t(tag)" />
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

