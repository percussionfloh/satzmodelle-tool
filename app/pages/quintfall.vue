<script setup>
 const { t } = useI18n();
</script>

<template>
    <UContainer>
        <div class="flex flex-col gap-8">
            <h1 class="text-3xl font-bold">Quintfall</h1>
        </div>
        <div class="flex flex-col gap-8">
            <h2>Diatonischer Quintfall, mit Gegenschrittmodell 3-6 in Außenstimmen</h2>
            <VerovioCanvas view-mode="horizontal" url="/kern/quintfall-dia-3-bass.krn" :scale="35" :page-margin="20" />
            <!-- <MidiPlayer url="/kern/quintfall-dia-3-bass.krn" class="text-2xl"/> -->
        </div>
        <div class="flex flex-col gap-8">
            <h2>Diatonischer Quintfall mit Grundakkorden</h2>
            <VerovioCanvas view-mode="horizontal" url="/kern/quintfall-dia-3-5.krn" :scale="35" :page-margin="20" />
            <!-- <MidiPlayer url="/kern/quintfall-dia-3-5.krn" class="text-2xl"/> -->
        </div>
            <div class="flex flex-col gap-8">
            <h2>Diatonischer Quintfall mit Septakkorden</h2>
            <VerovioCanvas view-mode="horizontal" url="/kern/quintfall-dia-7.krn" :scale="35" :page-margin="20" />
            <!-- <MidiPlayer url="/kern/quintfall-dia-7.krn" class="text-2xl"/> -->
        </div>
        <div class="flex flex-col gap-8">
            <h2>Realer Quintfall mit Grundakkorden</h2>
            <VerovioCanvas view-mode="horizontal" url="/kern/quintfall-real-3-5.krn" :scale="35" :page-margin="20" />
            <!-- <MidiPlayer url="/kern/quintfall-real-3-5.krn" class="text-2xl"/> -->
        </div>
            <div class="flex flex-col gap-8">
            <h2>Realer Quintfall mit Septakkorden</h2>
            <VerovioCanvas view-mode="horizontal" url="/kern/quintfall-real-7.krn" :scale="35" :page-margin="20" />
            <!-- <MidiPlayer url="/kern/quintfall-real-7.krn" class="text-2xl"/> -->
        </div>
    </UContainer>
</template>
