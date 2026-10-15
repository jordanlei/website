<script setup>
import { education } from '../../../content/education'
import CardList from '../../../shared/components/CardList.vue'
import ExternalLink from '../../../shared/components/ExternalLink.vue'
import SectionHeading from '../../../shared/components/SectionHeading.vue'
</script>

<template>
  <section id="education">
    <div class="banner">
      <div class="section-heading-row">
        <SectionHeading
          title="Education"
        />
        <ExternalLink
          href="/files/JordanLei_Thesis.pdf"
          label="Download Thesis"
          download="JordanLei_Thesis.pdf"
          :show-icon="false"
        />
      </div>
      <CardList :items="education" />
    </div>
  </section>
</template>

<style scoped>
.section-heading-row { display: flex; align-items: flex-end; justify-content: space-between; gap: 2rem; margin-bottom: 1.5rem; border-top: 2px solid var(--color); padding-top: .85rem; }.section-heading-row :deep(.section-heading) { flex: 1; margin-bottom: 0; border-top: 0; padding-top: 0; }.section-heading-row .button { margin-bottom: .05rem; } @media (max-width: 700px) { .section-heading-row { display: block; margin-bottom: 1.5rem; }.section-heading-row :deep(.section-heading) { margin-bottom: .6rem; } }
</style>
