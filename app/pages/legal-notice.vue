<script setup>
const { t } = useI18n();

useHead({
    title: t('legalNotice'),
});
</script>

<template>
    <UContainer>
        <SectionContainer>
            <section>
                <Heading>{{ $t('legalNotice') }}</Heading>
                <div class="flex flex-col gap-12 my-12">
                    <div>
                        <Subheading>Haftung für Inhalte</Subheading>
                        <p>
                            Im Sinne von § 7 Absatz 1 TMG sind wir für die eigenen Inhalte auf dieser Webseite
                            verantwortlich. Durch §§ 8 bis einschließlich 10 TMG sind wir aber nicht verpflichtet,
                            gespeicherte oder übermittelte fremde Inhalte zu überwachen oder diese auf Rechtswidrigkeit zu
                            prüfen. Das befreit uns jedoch nicht von der Pflicht, der Sperrung und Entfernung von
                            Informationen nach geltenden Gesetzen nachzukommen.
                        </p>
                    </div>
                </div>
                    <div class="flex gap-12 my-12">
                        <img height="400px" width="400px" src="../assets/meme.jpg" alt="Lückenfüller" />
                    </div>
            </section>
        </SectionContainer>
    </UContainer>
</template>