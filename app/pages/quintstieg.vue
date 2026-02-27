<script setup>
 const { t } = useI18n();
</script>

<template>
    <UContainer>
        <h1 class="text-3xl font-bold">Quintanstieg</h1>
            <div class="flex flex-col gap-8">
                <h2>Quintanstieg mit Vorhalten und Imitationen</h2>
                <VerovioCanvas view-mode="horizontal" url="/krn/quintstieg-vorhalte-imitation.krn" :scale="35" :page-margin="20" />
                <!-- <MidiPlayer url="/krn/quintstieg-vorhalte-imitation.krn" class="text-2xl"/> -->
            </div>
            <div>
                <h2>Quintanstieg mit Durchgängen und Imitationen</h2>
                <VerovioCanvas view-mode="horizontal" url="/krn/quintstieg-durchgaenge-imitation.krn" :scale="35" :page-margin="20" />
                <!-- <MidiPlayer url="/krn/quintstieg-durchgaenge-imitation.krn" class="text-2xl"/> -->
            </div>
</UContainer>
</template>