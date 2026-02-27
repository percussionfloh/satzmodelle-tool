<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';
const localePath = useLocalePath();
const { t } = useI18n();
const {data: satzmodelle} = await useAsyncData(`satzmodelle`, () => queryCollection('satzmodelle').all());


const ascending             = ref(false);
const descending            = ref(false);
const without5              = ref(false);
const with4                 = ref(false);
const fiveSixMotion         = ref(false);        // 5‑6 motion
const fauxbourdon           = ref(false);
const secondStepsInBass     = ref(false);        // second steps in Bass
const sevenSixConsecutive   = ref(false);        // 7‑6 consecutive
const syncopationChain      = ref(false);
const fourJumpInCantus      = ref(false);        // 4Jump in cantus
const homophon              = ref(false);
const bassCadences          = ref(false);
const dominantTonika        = ref(false);        // dominant‑tonika
const endsOnI               = ref(false);        // ends on I
const endsOnV               = ref(false);        // ends on V
const descendingFifths      = ref(false);
const ascendingFourths      = ref(false);
const ascendingMinorSeconds = ref(false);
const m2InBass              = ref(false);        // -m2 in Bass
const endsInDominant        = ref(false);
const D7sound               = ref(false);
const romanesca             = ref(false);
const fourSuspensions       = ref(false);        // 4suspensions
const nineSuspensions       = ref(false);        // 9suspensions
const descending4Ascending2 = ref(false);        // descendig 4 and ascending 2
const gymel                 = ref(false);
const majorMinorParallelism = ref(false);        // MajorMinorParallelsim

const items: NavigationMenuItem[] = [

];

</script>

<template>
    <div class="max-w-7xl mx-auto">
        <div class="flex flex-wrap gap-6 px-4">
            <UButton :color="ascending ? 'primary' : 'neutral'" @click="ascending = !ascending">Ascending</UButton>
            <UButton :color="descending ? 'primary' : 'neutral'" @click="descending = !descending">Descending</UButton>
            <UButton :color="without5 ? 'primary' : 'neutral'" @click="without5 = !without5">Without 5</UButton>
            <UButton :color="with4 ? 'primary' : 'neutral'" @click="with4 = !with4">With 4</UButton>
            <UButton :color="fiveSixMotion ? 'primary' : 'neutral'" @click="fiveSixMotion = !fiveSixMotion">5-6 Motion</UButton>
            <UButton :color="fauxbourdon ? 'primary' : 'neutral'" @click="fauxbourdon = !fauxbourdon">Fauxbourdon</UButton>
            <UButton :color="secondStepsInBass ? 'primary' : 'neutral'" @click="secondStepsInBass = !secondStepsInBass">Second Steps in Bass</UButton>
            <UButton :color="sevenSixConsecutive ? 'primary' : 'neutral'" @click="sevenSixConsecutive = !sevenSixConsecutive">7-6 Consecutive</UButton>
            <UButton :color="syncopationChain ? 'primary' : 'neutral'" @click="syncopationChain = !syncopationChain">Syncopation Chain</UButton>
            <UButton :color="fourJumpInCantus ? 'primary' : 'neutral'" @click="fourJumpInCantus = !fourJumpInCantus">4 Jump in Cantus</UButton>
            <UButton :color="homophon ? 'primary' : 'neutral'" @click="homophon = !homophon">Homophon</UButton>
            <UButton :color="bassCadences ? 'primary' : 'neutral'" @click="bassCadences = !bassCadences">Bass Cadences</UButton>
            <UButton :color="dominantTonika ? 'primary' : 'neutral'" @click="dominantTonika = !dominantTonika">Dominant-Tonika</UButton>
            <UButton :color="endsOnI ? 'primary' : 'neutral'" @click="endsOnI = !endsOnI">Ends on I</UButton>
            <UButton :color="endsOnV ? 'primary' : 'neutral'" @click="endsOnV = !endsOnV">Ends on V</UButton>
            <UButton :color="descendingFifths ? 'primary' : 'neutral'" @click="descendingFifths = !descendingFifths">Descending Fifths</UButton>
            <UButton :color="ascendingFourths ? 'primary' : 'neutral'" @click="ascendingFourths = !ascendingFourths">Ascending Fourths</UButton>
            <UButton :color="ascendingMinorSeconds ? 'primary' : 'neutral'" @click="ascendingMinorSeconds = !ascendingMinorSeconds">Ascending Minor Seconds</UButton>
            <UButton :color="m2InBass ? 'primary' : 'neutral'" @click="m2InBass = !m2InBass">-m2 in Bass</UButton>
            <UButton :color="endsInDominant ? 'primary' : 'neutral'" @click="endsInDominant = !endsInDominant">Ends in Dominant</UButton>
            <UButton :color="D7sound ? 'primary' : 'neutral'" @click="D7sound = !D7sound">D7 Sound</UButton>
            <UButton :color="romanesca ? 'primary' : 'neutral'" @click="romanesca = !romanesca">Romanesca</UButton>
            <UButton :color="fourSuspensions ? 'primary' : 'neutral'" @click="fourSuspensions = !fourSuspensions">4 Suspensions</UButton>
            <UButton :color="nineSuspensions ? 'primary' : 'neutral'" @click="nineSuspensions = !nineSuspensions">9 Suspensions</UButton>
            <UButton :color="descending4Ascending2 ? 'primary' : 'neutral'" @click="descending4Ascending2 = !descending4Ascending2">Descending 4 and Ascending 2</UButton>
            <UButton :color="gymel ? 'primary' : 'neutral'" @click="gymel = !gymel">Gymel</UButton>
            <UButton :color="majorMinorParallelism ? 'primary' : 'neutral'" @click="majorMinorParallelism = !majorMinorParallelism">Major-Minor Parallelism</UButton>
        </div> 
    </div>
</template>