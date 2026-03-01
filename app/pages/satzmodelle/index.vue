 <script setup>
 const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
    <UContainer>
        <div class="flex flex-col gap-8">
            <h1 class="text-3xl font-bold">Satzmodelle</h1>
            <h1 class="text-xl font-bold">Übermäßige Sextakkorde</h1>
                <div>
                <div>
                    <h2>Italienischer Übermäßiger Sextakkord</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/italian.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/augmented6')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/italian.krn" class="text-2xl"/> -->
                </div>
                    <h2>Französischer Übermäßiger Quartsextakkord</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/french.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/augmented6')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/french.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Deutscher Übermäßiger Quintsextakkord</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/german.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/augmented6')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/german.krn" class="text-2xl"/> -->
                </div>
                <h1 class="text-xl font-bold">Fauxbourdon</h1>
                <div>
                    <h2>Fauxbourdon aufwärts, 5-6-Seitenbewegung</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/fobo-5-6seitenbewegung.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/fauxbourdon')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/fobo-5-6seitenbewegung.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Fauxbourdon abwärts, 7-6-Konsekutive</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/fobo-7-6consecutive-abwaerts.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/fauxbourdon')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/fobo-7-6consecutive-abwaerts.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Fauxbourdon aufwärts, 7-6-Konsekutive</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/fobo-7-6consecutive-aufwaerts.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/fauxbourdon')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/fobo-7-6consecutive-aufwaerts.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Fauxbourdon abwärts</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/fobo-abwaerts.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/fauxbourdon')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/fobo-abwaerts.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Fauxbourdon aufwärts</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/fobo-aufwaerts.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/fauxbourdon')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/fobo-aufwaerts.krn" class="text-2xl"/> -->
                </div>
                <h1 class="text-xl font-bold">Fonte</h1>
                <div>
                    <h2>Fonte mit Bassklauseln</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/fonte-5-1.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/fonte-monte')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/fonte-5-1.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Fonte mit Sopranklauseln</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/fonte-7-1.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/fonte-monte')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/fonte-7-1.krn" class="text-2xl"/> -->
                </div>
                <h1 class="text-xl font-bold">Monte</h1>
                <div>
                    <h2>Monte mit Bassklauseln</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/monte-5-1.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/fonte-monte')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/monte-5-1.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Monte mit Sopranklauseln</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/monte-7-1.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/fonte-monte')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/monte-7-1.krn" class="text-2xl"/> -->
                </div>
                <h1 class="text-xl font-bold">Romanesca</h1>
                <div>
                    <h2>Romanesca (3-2-Konsekutive)</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/gym-romanesca-2-3consecutive.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/romanesca')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/gym-romanesca-2-3consecutive.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Romanesca mit schrittweise absteigendem Bass</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/gym-romanesca-bass-schrittweise.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/romanesca')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/gym-romanesca-bass-schrittweise.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Romanesca homophon</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/gym-romanesca-homophon.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/romanesca')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/gym-romanesca-homophon.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>La folia</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/la-folia.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/romanesca')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/la-folia.krn" class="text-2xl"/> -->
                </div>
                <h1 class="text-xl font-bold">Karussell</h1>
                <div>
                    <h2>Karussell</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/karussell.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/karussell')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/karussell.krn" class="text-2xl"/> -->
                </div>
                <h1>Lamentobass</h1>
                <div>
                    <h2>Lamentobass, 7-6-Konsekutive</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/lam-7-6consecutive.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/lamento')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/lam-7-6consecutive.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Chromatischer Lamentobass, 7-6-Konsekutive</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/lam-chrom-7-6consecutive.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/lamento')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/lam-chrom-7-6consecutive.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Chromatischer Lamentobass</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/lam-chrom.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/lamento')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/lam-chrom.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Lamentobass, homophon</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/lam-homophon.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/lamento')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/lam-homophon.krn" class="text-2xl"/> -->
                </div>
                <h1 class="text-xl font-bold">Quintfall und Quintanstieg</h1>
                <div>
                    <h2>Diatonischer Quintfall mit Grundakkorden</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/quintfall-dia-3-5.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/quintfall')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/quintfall-dia-3-5.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Diatonischer Quintfall, mit Gegenschrittmodell 3-6 in Außenstimmen</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/quintfall-dia-3-bass.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/quintfall')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/quintfall-dia-3-bass.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Diatonischer Quintfall mit Septakkorden</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/quintfall-dia-7.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/quintfall')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/quintfall-dia-7.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Realer Quintfall mit Grundakkorden</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/quintfall-real-3-5.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/quintfall')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/quintfall-real-3-5.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Realer Quintfall mit Septakkorden</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/quintfall-real-7.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/quintfall')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/quintfall-real-7.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Quintanstieg mit Durchgängen und Imitationen</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/quintstieg-durchgaenge-imitation.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/quintfall')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/quintstieg-durchgaenge-imitation.krn" class="text-2xl"/> -->
                </div>
                <div>
                    <h2>Quintanstieg mit Vorhalten und Imitationen</h2>
                    <VerovioCanvas view-mode="horizontal" url="/kern/quintstieg-vorhalte-imitation.krn" :scale="35" :page-margin="20" />
                    <UButton :to="localePath('/quintfall')">Ansehen</UButton>
                    <!-- <MidiPlayer url="/kern/quintstieg-vorhalte-imitation.krn" class="text-2xl"/> -->
                </div>
        </div>
    </UContainer>
</template>
