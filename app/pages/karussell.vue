<script setup>
 const { t } = useI18n();
</script>

<template>
    <UContainer>
        <div class="flex flex-col gap-8">
            <h1 class="text-3xl font-bold">Karussell</h1>
        <VerovioCanvas view-mode="horizontal" url="/kern/karussell.krn" :scale="35" :page-margin="20" />
        <!-- <MidiPlayer url="/kern/karussell.krn" class="text-2xl"/> -->
        </div>
    </UContainer>
</template>
