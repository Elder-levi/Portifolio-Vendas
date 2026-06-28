<script setup>
import SectionDuvidas from '@/components/Main/Duvidas/SectionDuvidas.vue';
import SectionForms from '@/components/Main/Duvidas/SectionForms.vue';
import SectionFaq from '@/components/Main/Duvidas/SectionFaq.vue';
import SectionEncaminha from '@/components/Main/Duvidas/SectionEncaminha.vue';
</script>
<template>
 <SectionDuvidas></SectionDuvidas>
 <SectionForms></SectionForms>
 <SectionFaq></SectionFaq>
 <SectionEncaminha></SectionEncaminha>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
