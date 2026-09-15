<script setup>
import { researchAtlas } from '../../../content/researchAtlas'
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
        <router-link
          class="button"
          to="/research"
        >
          Enter Research Atlas
        </router-link>
      </div>
      <div class="research-intro">
        <p>How does the brain implement attention and planning?</p>
        <ExternalLink
          href="https://scholar.google.com/citations?user=GRnnNBYAAAAJ&hl=en"
          label="Google Scholar"
        />
      </div>
      <div
        class="portal-grid"
        aria-label="Research atlas chapters"
      >
        <article
          v-for="chapter in researchAtlas.chapters"
          :key="chapter.slug"
          class="portal-card"
        >
          <router-link
            class="portal-main-link"
            :to="`/research#${chapter.slug}`"
          >
            <img
              :src="chapter.backdrop"
              :alt="chapter.motif"
            >
          </router-link>
          <div>
            <div class="portal-card-copy">
              <p>{{ chapter.number }} / {{ chapter.theme }}</p>
              <h3>
                <router-link :to="`/research#${chapter.slug}`">
                  {{ chapter.question }}
                </router-link>
              </h3>
              <span>{{ chapter.subtitle }}</span>
            </div>
            <div
              v-if="chapter.resources.length"
              class="resource-links"
            >
              <a
                v-for="resource in chapter.resources"
                :key="resource.href"
                :href="resource.href"
              >
                {{ resource.label }}
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-heading-row { display: flex; align-items: flex-end; justify-content: space-between; gap: 2rem; margin-bottom: 1.5rem; border-top: 2px solid var(--color); padding-top: .85rem; }.section-heading-row :deep(.section-heading) { flex: 1; margin-bottom: 0; border-top: 0; padding-top: 0; }.section-heading-row .button { margin-bottom: .05rem; }.mobile-chapter { display: none; }.research-intro { display: flex; align-items: flex-end; justify-content: space-between; gap: 2rem; margin: 0 0 1.5rem; }.research-intro p { flex: 1 1 auto; max-width: none; margin: 0; font-family: 'Playfair Display', serif; font-size: 1.8rem; line-height: 1.22; white-space: nowrap; }.research-intro .button { flex: 0 0 auto; margin-bottom: .05rem; }.portal-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }.portal-card { display: grid; grid-template-rows: 12.5rem 1fr; min-height: 100%; background: rgba(255, 253, 248, .42); box-shadow: var(--card-shadow-subtle); backdrop-filter: blur(var(--card-blur)); transition: transform .2s ease, box-shadow .2s ease; }.portal-card:hover { box-shadow: 0 8px 20px rgba(31, 47, 49, .08); transform: translateY(-3px); }.portal-main-link { display: block; min-height: 0; overflow: hidden; background: rgba(255, 253, 248, .76); }.portal-card img { display: block !important; width: 100%; height: 100%; object-fit: contain; object-position: center; filter: saturate(.96); }.portal-card > div { display: flex; flex-direction: column; min-height: 14.5rem; padding: 1.05rem 1.05rem 1.15rem; }.portal-card-copy { padding: 0 !important; }.portal-card p { margin: 0 0 .5rem; color: var(--signal-magenta); font-family: var(--mono-font); font-size: .82rem; font-weight: 800; letter-spacing: .055em; line-height: 1.3; text-transform: uppercase; }.portal-card h3 { margin: 0; font-size: clamp(1.35rem, 2vw, 1.9rem); line-height: 1.02; }.portal-card h3 a { color: inherit; text-decoration: none; }.portal-card h3 a:hover { text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: .12em; }.portal-card span { display: block; margin-top: .7rem; color: var(--muted); font-family: var(--mono-font); font-size: .78rem; font-weight: 800; letter-spacing: .045em; line-height: 1.35; text-transform: uppercase; }.resource-links { display: flex; flex-wrap: wrap; gap: .55rem; margin-top: auto; padding: 1.25rem 0 0 !important; }.resource-links a { padding-bottom: .12rem; border-bottom: 1px solid currentColor; color: var(--color); font-family: var(--mono-font); font-size: .78rem; font-weight: 800; letter-spacing: .045em; text-transform: uppercase; text-decoration: none; }.resource-links a:hover { color: var(--signal-magenta); text-decoration: none; } @media (max-width: 900px) { .portal-grid { grid-template-columns: repeat(2, 1fr); } } @media (max-width: 700px) { .section-heading-row { display: block; margin-bottom: 1.5rem; }.section-heading-row :deep(.section-heading) { margin-bottom: .6rem; }.mobile-chapter { display: block; margin: 0 0 .45rem; color: var(--signal-magenta); font-family: var(--mono-font); font-size: .9rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; }.research-intro { display: block; }.research-intro p { margin-bottom: .35rem; font-size: 1.58rem; white-space: normal; }.portal-grid { display: grid; grid-auto-columns: minmax(250px, 84%); grid-auto-flow: column; gap: .8rem; overflow-x: auto; margin-right: -1.25rem; padding-right: 1.25rem; padding-bottom: 1rem; scroll-snap-type: x proximity; }.portal-card { grid-template-rows: 11rem 1fr; scroll-snap-align: start; }.portal-card > div { min-height: 14rem; }.portal-card h3 { font-size: 1.55rem; }.portal-card p { font-size: .84rem; }.portal-card span, .resource-links a { font-size: .8rem; } }
</style>
