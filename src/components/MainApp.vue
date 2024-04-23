<script>
import SectionHero from './SectionHero.vue';
import SectionServices from './SectionServices.vue';
import SectionNumbers from './SectionNumbers.vue';
import SectionProjects from './SectionProjects.vue';
import SectionValues from './SectionValues.vue';
import SectionOwnersQuotes from './SectionOwnersQuotes.vue';
import SectionNews from './SectionNews.vue';
import SectionPartners from './SectionPartners.vue';
import SectionFreeQuote from './SectionFreeQuote.vue';

  
export default {
    components: {
        SectionHero,
        SectionServices,
        SectionNumbers,
        SectionProjects,
        SectionValues,
        SectionOwnersQuotes,
        SectionNews,
        SectionPartners,
        SectionFreeQuote
    }
}
</script>

<template>
    <main>
        <SectionHero />
        <SectionServices />
        <SectionNumbers />
        <SectionProjects />
        <SectionValues />
        <SectionOwnersQuotes />
        <SectionNews />
        <SectionPartners />
        <SectionFreeQuote />
    </main>
    
</template>

<style lang="scss">
</style>
