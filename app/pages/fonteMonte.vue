<script setup>
 const { t } = useI18n();
</script>
<template>    
    <UContainer>
        <div class="flex flex-col gap-8">
            <div>
                <h1 class="text-xl font-bold">Fonte</h1>
                <UButton target="_blank" to="https://www.youtube.com/watch?v=r6Llu_uGY2U">Unter Fonte versteht Riepel eine VI-ii-V-I-Quintfallsequenz </UButton>
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
                <h1 class="text-xl font-bold">Monte</h1>
                <UButton target="_blank" to="https://www.youtube.com/watch?v=1kZx35yG9UU">(italienisch monte ‚Berg‘) bezeichnet in der Musiktheorie eine zweigliedrige Sequenz, deren erstes Glied in der Tonart der IV. Stufe einer Dur- oder Molltonart schließt und deren zweites Glied eine Sekunde höher mit einem Halbschluss in dieser Haupttonart endet. Insbesondere in der europäischen Musik des 18. Jahrhunderts ist dieses Satzmodell von Bedeutung.[1]</UButton>
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
        </div>
    </UContainer>  
</template>

