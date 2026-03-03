<script setup>
const { data } = await useAsyncData('satzmodelle', () => queryCollection('satzmodelle').all())
const localePath = useLocalePath();

 const { t } = useI18n();
</script>

<template>
    <div class="flex flex-col items-center gap-8 mt-8">
        <div>
            <div class="flex flex-col">
                <h1 class="text-2xl font-bold" >Über das Projekt</h1>
                <p>Dieses Projekt hat das Ziel, Studierenden einen möglichst barrierefreien Einstieg in die wundervolle Welt der Satzmodelle zu ermöglichen.
                    Das soll vor allem durch die Bereitstellung von unterschiedlichen Kompliziertheitsgraden der Erklärung dieser Satzmodelle erreicht werden. 
                </p>
            </div>
        </div>
        <UButton to="/tool" trailing-icon="i-lucide-arrow-right" size="xl">Let's go!</UButton>
    </div>
    <div class="flex flex-col items-center gap-8 mt-8">
        <UButton :to="localePath('/satzmodelle')" size="xl" trailing-icon="i-lucide-arrow-right">Überblick über die Satzmodelle</UButton>
    </div>
</template>
