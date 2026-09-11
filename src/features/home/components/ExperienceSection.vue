<script setup>
import { experience } from '../../../content/experience'
import CardList from '../../../shared/components/CardList.vue'
import ExternalLink from '../../../shared/components/ExternalLink.vue'
import SectionHeading from '../../../shared/components/SectionHeading.vue'
</script>

<template>
  <section id="experience">
    <div class="banner">
      <p class="mobile-chapter">
        04 / Work
      </p>
      <div class="section-heading-row">
        <SectionHeading
          title="Experience"
        />
        <ExternalLink
          href="/files/Resume_JordanLei.pdf"
          label="Download CV"
        />
      </div>
      <CardList :items="experience" />
    </div>
  </section>
</template>

<style scoped>.mobile-chapter { display: none; }.section-heading-row { display: flex; align-items: flex-end; justify-content: space-between; gap: 2rem; margin-bottom: 1.5rem; border-top: 2px solid var(--color); padding-top: .85rem; }.section-heading-row :deep(.section-heading) { flex: 1; margin-bottom: 0; border-top: 0; padding-top: 0; }.section-heading-row .button { margin-bottom: .05rem; } @media (max-width: 700px) { .mobile-chapter { display: block; margin: 0 0 .45rem; color: var(--signal-magenta); font-family: var(--mono-font); font-size: .82rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; }.section-heading-row { display: block; margin-bottom: 1.5rem; }.section-heading-row :deep(.section-heading) { margin-bottom: .6rem; } }</style>
