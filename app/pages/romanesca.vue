<script setup>
 const { t } = useI18n();
</script>

<template>
    <UContainer>
        <h1 class="text-3xl font-bold">Romanesca</h1>
            <div class="flex flex-col gap-8">
                <div>
                    <h2>Romanesca homophon</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/gym-romanesca-homophon.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/kern/gym-romanesca-homophon.krn" class="text-2xl"/> -->
                </div>
                <div class="flex flex-col gap-8">
                    <h2>Romanesca mit schrittweise absteigendem Bass</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/gym-romanesca-bass-schrittweise.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/kern/gym-romanesca-bass-schrittweise.krn" class="text-2xl"/> -->
                </div>
                <div class="flex flex-col gap-8">
                    <h2>Romanesca (3-2-Konsekutive)</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/gym-romanesca-2-3consecutive.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/kern/gym-romanesca-2-3consecutive.krn" class="text-2xl"/> -->
                </div>
                <div class="flex flex-col gap-8">
                    <h1 class="text-3xl font-bold">La Folia</h1>
                    <VerovioCanvas view-mode="horizontal" url="/kern/la-folia.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/kern/la-folia.krn" class="text-2xl"/> -->
                </div>
            </div>
    </UContainer>
</template>
