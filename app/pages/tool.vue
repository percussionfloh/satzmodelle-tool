<script setup>


const { t } = useI18n();
const { data: satzmodelle } = await useAsyncData(`satzmodelle/*`, () => queryCollection('satzmodelle').all());
const { data: tagsData } = await useAsyncData(`tags`, () => queryCollection('tags').first());

const tags = tagsData.value.tags;

const localePath = useLocalePath();

const directionTags = computed(() => tags.filter(t => t.type === 'direction'));
const mainTags = computed(() => tags.filter(t => t.type === 'main'));
const miscTags = computed(() => tags.filter(t => t.type === 'misc'));

const selectedTags = ref([]);

function toggleTag(tagId) {
    if (selectedTags.value.includes(tagId)) {
        selectedTags.value = selectedTags.value.filter(item => item !== tagId);
    } else {
        selectedTags.value.push(tagId);
    }
}

const visibleTags = computed(() => {
    if (selectedTags.value.length === 0) {
        return { stage1: directionTags.value, stage2: mainTags.value, stage3: miscTags.value };
    }
    
    // Find satzmodelle that have ALL selected tags
    const matchingSatzmodelle = satzmodelle.value.filter(item => 
        selectedTags.value.every(tagId => item.tags?.includes(tagId))
    );
    
    // Get all tags from those satzmodelle
    const tagsFromMatching = [...new Set(matchingSatzmodelle.flatMap(item => item.tags ?? []))];
    
    // Filter each stage to only include tags from matching satzmodelle
    return {
        stage1: directionTags.value.filter(tag => tagsFromMatching.includes(tag.id)),
        stage2: mainTags.value.filter(tag => tagsFromMatching.includes(tag.id)),
        stage3: miscTags.value.filter(tag => tagsFromMatching.includes(tag.id))
    };
});



</script>


<template>
    <UContainer>
        <div class="flex flex-col items-center gap-8">
            <div class="flex flex-wrap gap-3">
                <UButton size="xl" v-for="tag in visibleTags.stage1" :color="selectedTags.includes(tag.id) ? 'primary' : 'neutral'" @click="toggleTag(tag.id)" :label="$t(`tag.${tag.id}`)" />
            </div>
            <div class="flex flex-wrap gap-3">
                <UButton size="xl" v-for="tag in visibleTags.stage2" :color="selectedTags.includes(tag.id) ? 'primary' : 'neutral'" @click="toggleTag(tag.id)" :label="$t(`tag.${tag.id}`)" />
            </div>
            <div class="flex flex-wrap gap-3">
                <UButton size="xl" v-for="tag in visibleTags.stage3" :color="selectedTags.includes(tag.id) ? 'primary' : 'neutral'" @click="toggleTag(tag.id)" :label="$t(`tag.${tag.id}`)" />
            </div>
    
            <ul v-if="selectedTags.length > 0" class="flex flex-wrap gap-6 mt-6">
                <template v-for="satzmodell in satzmodelle" :key="satzmodell">
                    <li v-if="selectedTags.every(tagId => satzmodell.tags?.includes(tagId))">
                        <UButton target="_blank" :to="localePath(satzmodell.path)" color="primary" size="xl">{{ satzmodell.title }}</UButton>
                    </li>
                </template>
            </ul>
        </div>
    </UContainer>
</template>

