<script setup>
 const { t } = useI18n();
</script>

<template>
    <UContainer>
        <h1 class="text-3xl font-bold">Übermäßige Sextakkorde</h1>
            <div class="flex flex-col gap-8">
                <div>
                    <h2>Italienischer Übermäßiger Sextakkord</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/italian.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/italian.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Französischer Übermäßiger Sextakkord</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/french.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/french.krn" class="text-2xl"/> -->
                </div>
                <div class="flex flex-col gap-8">
                    <h2>Deutscher Übermäßiger Sextakkord</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/german.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/german.krn" class="text-2xl"/> -->
                </div>
            </div>
    </UContainer>
</template>