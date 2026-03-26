<script setup>
const { data } = await useAsyncData('satzmodelle', () => queryCollection('satzmodelle').all())
const localePath = useLocalePath();

 const { t } = useI18n();
</script>

<template>
    <div class="flex flex-col items-start gap-8 mt-8 max-w-6xl mx-auto">        
        <div>
            <h1 class="text-2xl font-bold" >Über das Projekt</h1>
            <p>Dieses Projekt hat das Ziel, Studierenden einen möglichst barrierefreien Einstieg in die wundervolle Welt der Satzmodelle zu ermöglichen. <br>
                Das soll vor allem durch die Bereitstellung von unterschiedlichen Kompliziertheitsgraden der Erklärung dieser Satzmodelle erreicht werden. <br>
                Hinweis: Die Aufnahmen, die als Beispiele gehört werden können, sind meist ein wenig variiert, da die Vanilla-Versionen der Satzmodelle so gut wie nie vorkommen.
            </p>
        </div>
        <div class="flex flex-col items-start gap-8 mt-8 max-w-6xl mx-auto">
            <div>
                <UButton to="/tool" trailing-icon="i-lucide-arrow-right" size="xl">Let's go!</UButton>
            </div>
            <div>
                <UButton :to="localePath('/satzmodelle')" size="xl" trailing-icon="i-lucide-arrow-right">Überblick über die Satzmodelle</UButton>
            </div>
        </div>
        <div>
            <h1 class="text-2xl font-bold" >Wichtiger Hinweis</h1>
            <p>Noch gibt es bei einigen Satzmodell-Seiten nur Klangbeispiele, die von bereits lang gestorbenen Komponisten stammen.<br>
                Es ist leider sehr aufwendig, die Satzmodelle in anderen Stücken (als den etablierten) zu finden. <br>
                Jedoch verspreche ich, dass die Beispiele nach und nach um weitere Stücke ergänzt werden, mit dem Ziel, ein möglichst diverses Bild zu zeichnen.
                <br> Du hast bei einem coolen Stück ein Satzmodell entdeckt und das Beispiel steht hier noch nicht? Schreib mir gerne eine Mail an f.moldaschl@mh-freiburg.de! 
            </p>
        </div>
    </div>
</template>
