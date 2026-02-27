<script setup>
 const { t } = useI18n();
</script>
<template>    
    <UContainer>
        <div class="flex flex-col gap-8">
            <h1 class="text-xl font-bold">Fonte</h1>
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
            <h1 class="text-xl font-bold">Monte</h1>
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

