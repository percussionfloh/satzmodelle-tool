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
                    <MidiPlayer url="/krn/french.krn" class="text-2xl"/>
                </div>
                <div>
                <h2>German augmented Sixth</h2>
                <VerovioCanvas view-mode="horizontal" url="/krn/german.krn" :scale="35" :page-margin="20" />
                </div>
                <div>
                    <h2>Italian augmented Sixth</h2>
                    <VerovioCanvas view-mode="horizontal" url="/krn/italian.krn" :scale="35" :page-margin="20" />
                    <MidiPlayer url="/krn/italian.krn" class="text-2xl"/>
                </div>

                <VerovioCanvas view-mode="horizontal" url="/krn/fonte-5-1.krn" :scale="35" :page-margin="20" />
                <VerovioCanvas view-mode="horizontal" url="/krn/fonte-7-1.krn" :scale="35" :page-margin="20" />
        </div>
    </UContainer>
</template>