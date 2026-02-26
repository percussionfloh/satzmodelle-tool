 <script setup>
 const { t } = useI18n();
</script>

<template>
    <UContainer>
        <div class="flex flex-col gap-8">
            <h1 class="text-3xl font-bold">Satzmodelle</h1>
                <div>
                    <h2>French augmented Sixth</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/french.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/french.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>German augmented Sixth</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/german.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/german.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Italian augmented Sixth</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/italian.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/italian.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Fauxbourdon aufwärts, 5-6-Seitenbewegung</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/fobo-5-6seitenbewegung.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/fobo-5-6seitenbewegung.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Fauxbourdon abwärts, 7-6-Konsekutive</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/fobo-7-6consecutive-abwaerts.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/fobo-7-6consecutive-abwaerts.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Fauxbourdon aufwärts, 7-6-Konsekutive</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/fobo-7-6consecutive-aufwaerts.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/fobo-7-6consecutive-aufwaerts.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Fauxbourdon abwärts</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/fobo-abwaerts.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/fobo-abwaerts.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Fauxbourdon aufwärts</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/fobo-aufwaerts.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/fobo-aufwaerts.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Fonte mit Bassklauseln</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/fonte-5-1.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/fonte-5-1.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Fonte mit Sopranklauseln</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/fonte-7-1.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/fonte-7-1.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Romanesca (2-3-Konsekutive)</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/gym-romanesca-2-3consecutive.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/gym-romanesca-2-3consecutive.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Romanesca mit schrittweise absteigendem Bass</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/gym-romanesca-bass-schrittweise.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/gym-romanesca-bass-schrittweise.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Romanesca homophon</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/gym-romanesca-homophon.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/gym-romanesca-homophon.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Karussell</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/karussell.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/karussell.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>La folia</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/la-folia.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/la-folia.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Lamentobass, 7-6-Konsekutive</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/lam-7-6consecutive.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/lam-7-6consecutive.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Chromatischer Lamentobass, 7-6-Konsekutive</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/lam-chrom-7-6consecutive.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/lam-chrom-7-6consecutive.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Chromatischer Lamentobass</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/lam-chrom.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/lam-chrom.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Lamentobass, homophon</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/lam-homophon.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/lam-homophon.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Monte mit Bassklauseln</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/monte-5-1.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/monte-5-1.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Monte mit Sopranklauseln</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/monte-7-1.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/monte-7-1.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Diatonischer Quintfall mit Grundakkorden</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/quintfall-dia-3-5.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/quintfall-dia-3-5.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Diatonischer Quintfall, mit Gegenschrittmodell 3-6 in Außenstimmen</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/quintfall-dia-3-bass.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/quintfall-dia-3-bass.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Diatonischer Quintfall mit Septakkorden</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/quintfall-dia-7.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/quintfall-dia-7.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Realer Quintfall mit Grundakkorden</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/quintfall-real-3-5.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/quintfall-real-3-5.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Realer Quintfall mit Septakkorden</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/quintfall-real-7.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/quintfall-real-7.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Quintanstieg mit Durchgängen und Imitationen</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/quintstieg-durchgaenge-imitation.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/quintstieg-durchgaenge-imitation.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Quintanstieg mit Vorhalten und Imitationen</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/quintstieg-vorhalte-imitation.krn" :scale="35" :page-margin="20" />
                    <!-- <MidiPlayer url="/krn/quintstieg-vorhalte-imitation.krn" class="text-2xl"/> -->
                </div>
        </div>
    </UContainer>
</template>