<script setup>
const localePath = useLocalePath();
</script>

<template>
    <UContainer>
        <SectionContainer>
            <section>
                <Heading class="font-bold text-4xl">Glossar</Heading>
                <div class="flex flex-col gap-12 my-12">
                    <div class="flex flex-col gap-5">
                        <div>
                            <h2 class="font-bold text-2xl">Menuett</h2>
                                <p class="text-lg">Tanz, meist in 3/4, musikalische Form.</p>
                        </div>
                        <div>
                            <h2 class="font-bold text-2xl">Mozartquinten</h2>
                                <p class="text-lg">Wird der übermäßige Quintsextakkord direkt in den Dominantakkord aufgelöst, entstehen gezwungenermaßen Quintparallelen. Da aber Mozart diese auch verwendet hat, werden sie toleriert. (lol)</p>
                        </div>
                        <div>
                        <h2 class="font-bold text-2xl">Neapolitaner</h2>
                            <p class="text-lg">Auf der Subdominante klingt anstatt der Quinte eine kleine Sexte.</p>    
                        </div>
                        <div>  
                        <h2 class="font-bold text-2xl">Quintfallsequenz</h2>
                            <p class="text-lg">Sequenz, deren Fundamentbass in Quinten fällt.</p> 
                        </div>
                        <div>                     
                        <h2 class="font-bold text-2xl">passus duriusculus</h2>
                            <p class="text-lg">(lat. harter Gang), eine chromatische Linie in einer Stimme, aufwärts oder abwärts.</p>
                        </div>
                        <div>
                        <h2 class="font-bold text-2xl">Fundamentbass</h2>
                            <p class="text-lg">Der tiefste Ton eines Akkords, wenn man die vorliegende Umkehrung in Terzen schichtet. In manchen Fällen (verkürzter D7b9) muss er hinzugedacht werden.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Heading class="font-bold text-4xl">Literatur </Heading>
                <div class="flex flex-col gap-7 my-12">
                    <p class="text-lg">
                        Drescher, Wolfgang (2019): "Satzmodelle und Harmonische Wendungen"
                    </p>
                    <p class="text-lg">
                        Omnibus (Musik) (03/2026):  https://de.wikipedia.org/wiki/Omnibus_(Musik)
                    </p>
                    <p class="text-lg">
                        Dittrich, Marie-Agnes (2007), »›Teufelsmühle‹ und ›Omnibus‹«, Zeitschrift der Gesellschaft für Musiktheorie 4/1–2, 107–121. https://doi.org/10.31751/247
                    </p>
                    <p class="text-lg">
                        openmusic.academy, Artikel »Zirkelmodelle (1) - Das ›Wegweiser‹-Modell«, https://openmusic.academy/docs/o4GKsjbXs6UDD9vqmLPSLf/musikhochschule-satztechnik-zirkelmodelle-wegweiser, 24.03.2026, 17:10
                    </p>
                </div>
            </section>
        </SectionContainer>
    </UContainer>
</template>