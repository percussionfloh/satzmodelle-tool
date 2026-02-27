<script setup>
 const { t } = useI18n();
</script>

<template>
    <UContainer>
        <h1 class="text-3xl font-bold">Fauxbourdon</h1>
            <div class="flex flex-col gap-8">
                    <div>
                    <h2>Fauxbourdon aufwärts, 5-6-Seitenbewegung</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/fobo-5-6seitenbewegung.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/fobo-5-6seitenbewegung.krn" class="text-2xl"/> -->
                </div>
                <div class="flex flex-col gap-8">
                    <h2>Fauxbourdon abwärts, 7-6-Konsekutive</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/fobo-7-6consecutive-abwaerts.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/fobo-7-6consecutive-abwaerts.krn" class="text-2xl"/> -->
                </div>
                <div class="flex flex-col gap-8">
                    <h2>Fauxbourdon aufwärts, 7-6-Konsekutive</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/fobo-7-6consecutive-aufwaerts.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/fobo-7-6consecutive-aufwaerts.krn" class="text-2xl"/> -->
                </div>
                <div class="flex flex-col gap-8">
                    <h2>Fauxbourdon abwärts</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/fobo-abwaerts.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/fobo-abwaerts.krn" class="text-2xl"/> -->
                </div>
                <div class="flex flex-col gap-8">
                    <h2>Fauxbourdon aufwärts</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/fobo-aufwaerts.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/fobo-aufwaerts.krn" class="text-2xl"/> -->
                </div>
            </div>
    </UContainer>
</template>