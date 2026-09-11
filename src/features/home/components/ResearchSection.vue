<script setup>
import { researchProjects } from '../../../content/research'
import ExternalLink from '../../../shared/components/ExternalLink.vue'
import SectionHeading from '../../../shared/components/SectionHeading.vue'
</script>

<template>
  <section id="research">
    <div class="banner">
      <p class="mobile-chapter">
        03 / Research
      </p>
      <div class="section-heading-row">
        <SectionHeading
          title="Research"
        />
        <ExternalLink
          href="https://scholar.google.com/citations?user=GRnnNBYAAAAJ&hl=en"
          label="Google Scholar"
        />
      </div>
      <div class="research-intro">
        <p>How do people and animals think ahead?</p>
      </div>
      <article
        v-for="project in researchProjects"
        :key="project.title"
        class="research-card"
      >
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="project-links">
            <ExternalLink
              v-for="link in project.links"
              :key="link.href"
              :href="link.href"
              :label="link.label"
            />
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.section-heading-row { display: flex; align-items: flex-end; justify-content: space-between; gap: 2rem; margin-bottom: 1.5rem; border-top: 2px solid var(--color); padding-top: .85rem; }.section-heading-row :deep(.section-heading) { flex: 1; margin-bottom: 0; border-top: 0; padding-top: 0; }.section-heading-row .button { margin-bottom: .05rem; }.mobile-chapter { display: none; }.research-intro { margin: 0 0 1.5rem; }.research-intro p { max-width: 36rem; margin: 0; font-family: 'Playfair Display', serif; font-size: 1.65rem; line-height: 1.25; }.research-card { margin: 0 0 var(--card-gap); padding: .95rem 1.5rem 1.4rem; background: var(--card-wash); box-shadow: var(--card-shadow-subtle); backdrop-filter: blur(var(--card-blur)); }.project-content h3 { margin-top: 0; font-size: clamp(1.9rem, 3vw, 2.7rem); line-height: 1; }.project-content > p { max-width: 45rem; font-size: 1.16rem; }.project-links { display: flex; gap: 1.25rem; flex-wrap: wrap; } @media (max-width: 700px) { .section-heading-row { display: block; margin-bottom: 1.5rem; }.section-heading-row :deep(.section-heading) { margin-bottom: .6rem; }.mobile-chapter { display: block; margin: 0 0 .45rem; color: var(--signal-magenta); font-family: var(--mono-font); font-size: .82rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; }.research-intro { margin-left: 0; display: block; }.research-intro p { font-size: 1.45rem; }.research-card { margin-bottom: 1rem; padding: 1rem 1.05rem 1.15rem; }.project-content h3 { font-size: 1.62rem; line-height: 1.05; }.project-content > p { font-size: 1.02rem; line-height: 1.56; }.project-links { gap: .7rem; } }
</style>
