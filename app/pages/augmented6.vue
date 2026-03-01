<script setup>
 const { t } = useI18n();
</script>

<template>
    <UContainer>
        <h1 class="text-3xl font-bold">Übermäßige Sextakkorde</h1>
            <div class="flex flex-col gap-8">
                <div>
                    <h2>Italienischer Übermäßiger Sextakkord</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/italian.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/kern/italian.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Französischer Übermäßiger Quartsextakkord</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/french.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/kern/french.krn" class="text-2xl"/> -->
                </div>
                <div class="flex flex-col gap-8">
                    <h2>Deutscher Übermäßiger Quintsextakkord</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/german.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/kern/german.krn" class="text-2xl"/> -->
                </div>
            </div>
    </UContainer>
</template>
