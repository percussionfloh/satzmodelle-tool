 <script setup>
</script>

<template>
    <UContainer>
        <div class="flex flex-col gap-8">
            <h1 class="text-3xl font-bold">Satzmodelle</h1>
            <h2>French augmented Sixth</h2>
            <VerovioCanvas view-mode="horizontal" url="/krn/french.krn" :scale="35" :page-margin="20" />
            <h2>German augmented Sixth</h2>
            <VerovioCanvas view-mode="horizontal" url="/krn/german.krn" :scale="35" :page-margin="20" />
            <VerovioCanvas view-mode="horizontal" url="/krn/italian.krn" :scale="35" :page-margin="20" />
            <VerovioCanvas view-mode="horizontal" url="/krn/fonte-5-1.krn" :scale="35" :page-margin="20" />
            <VerovioCanvas view-mode="horizontal" url="/krn/fonte-7-1.krn" :scale="35" :page-margin="20" />
        </div>
    </UContainer>
</template>