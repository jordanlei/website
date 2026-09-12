<script setup>
import Layout from '../../shared/components/Layout.vue'
import { researchAtlas } from '../../content/researchAtlas'
</script>

<template>
  <Layout>
    <article class="research-world">
      <header class="research-hero">
        <p class="research-eyebrow">
          {{ researchAtlas.eyebrow }}
        </p>
        <h1>{{ researchAtlas.title }}</h1>
        <p class="research-lede">
          {{ researchAtlas.lede }}
        </p>
        <p class="research-frame">
          {{ researchAtlas.frame }}
        </p>
      </header>

      <nav
        class="chapter-index"
        aria-label="Research chapters"
      >
        <a
          v-for="chapter in researchAtlas.chapters"
          :key="chapter.slug"
          :href="`#${chapter.slug}`"
        >
          <span>{{ chapter.number }}</span>
          {{ chapter.theme }}
        </a>
      </nav>

      <section
        v-for="chapter in researchAtlas.chapters"
        :id="chapter.slug"
        :key="chapter.slug"
        class="chapter"
      >
        <div class="chapter-heading">
          <p class="chapter-kicker">
            {{ chapter.number }} / {{ chapter.theme }}
          </p>
          <h2>{{ chapter.question }}</h2>
          <div
            v-if="chapter.resources.length"
            class="chapter-resources"
            aria-label="Research materials"
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

        <div class="chapter-body">
          <div class="chapter-copy">
            <p class="chapter-subtitle">
              {{ chapter.subtitle }}
            </p>
            <p class="chapter-prompt">
              {{ chapter.prompt }}
            </p>
            <p class="chapter-summary">
              {{ chapter.summary }}
            </p>
          </div>

          <div class="chapter-visual">
            <p class="visual-label">
              {{ chapter.motif }}
            </p>
            <div class="chapter-figure">
              <img
                class="chapter-backdrop"
                :src="chapter.backdrop"
                :alt="chapter.motif"
              >
              <div class="chapter-plate">
                <img
                  :src="chapter.artifact"
                  :alt="chapter.artifactAlt"
                >
              </div>
              <figure
                v-if="chapter.portrait"
                class="chapter-portrait"
              >
                <img
                  :src="chapter.portrait"
                  :alt="chapter.portraitAlt"
                >
              </figure>
            </div>
          </div>
        </div>

        <div class="chapter-takeaways">
          <article
            v-for="(takeaway, index) in chapter.takeaways"
            :key="takeaway.label"
          >
            <span>{{ String(index + 1).padStart(2, '0') }} / {{ takeaway.label }}</span>
            <p>{{ takeaway.text }}</p>
          </article>
        </div>

        <div class="chapter-footer">
          <div class="chapter-conclusion">
            <p class="detail-label">
              Key finding
            </p>
            <p>{{ chapter.finding }}</p>
          </div>
          <p class="chapter-summary">
            {{ chapter.interpretation }}
          </p>
        </div>
      </section>

      <section class="research-close">
        <p class="research-eyebrow">
          Research materials
        </p>
        <h2>Read the work and follow the thread.</h2>
        <div class="takeaways">
          <p>
            <span>Stochasticity</span>
            <a href="https://files.osf.io/v1/resources/bh56p_v1/providers/osfstorage/6813cdf8a74db1488d3cbf6a?action=download&direct&version=1">Preprint</a>
            <a href="/files/TreasureHuntPoster.pdf">Poster</a>
          </p>
          <p>
            <span>Four-in-a-Row</span>
            <a href="/files/NeuralPoster.pdf">Poster</a>
          </p>
          <p>
            <span>All Research</span>
            <a href="https://scholar.google.com/citations?user=GRnnNBYAAAAJ&hl=en">Google Scholar</a>
          </p>
        </div>
      </section>
    </article>
  </Layout>
</template>

<style scoped>
.research-world { padding-top: 68px; }
.research-hero { width: min(1120px, 100%); margin: 0 auto; padding: 6rem 2rem 3.5rem; }
.research-eyebrow, .chapter-kicker, .detail-label { margin: 0 0 .5rem; color: var(--signal-magenta); font-family: var(--mono-font); font-size: .92rem; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; }
.research-hero h1 { max-width: 46rem; margin: 0; font-size: clamp(3.5rem, 6.8vw, 6.2rem); line-height: .9; letter-spacing: -.065em; }
.research-lede { max-width: 50rem; margin: 1.35rem 0 0; font-family: 'Playfair Display', serif; font-size: clamp(1.55rem, 3vw, 2.25rem); line-height: 1.16; }
.research-frame { max-width: 48rem; margin: 1.2rem 0 0; color: var(--subtitle); font-size: 1.16rem; line-height: 1.55; }
.chapter-index { position: sticky; top: 68px; z-index: 5; display: flex; gap: .6rem; width: min(1120px, calc(100% - 4rem)); margin: 0 auto 4rem; padding: .65rem; overflow-x: auto; background: rgba(247, 245, 239, .76); box-shadow: 0 6px 18px rgba(31, 47, 49, .06); backdrop-filter: blur(12px); }
.chapter-index a { display: inline-flex; align-items: center; gap: .45rem; min-height: 2.5rem; padding: 0 .85rem; color: var(--color); background: rgba(255, 253, 248, .38); font-family: var(--mono-font); font-size: .82rem; font-weight: 800; letter-spacing: .045em; text-transform: uppercase; text-decoration: none; white-space: nowrap; }
.chapter-index span { color: var(--signal-magenta); }
.chapter { width: min(1120px, 100%); margin: 0 auto 6rem; padding: 0 2rem; scroll-margin-top: 9.5rem; }
.chapter-heading { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 1.25rem 2rem; align-items: end; padding-top: 1rem; border-top: 2px solid var(--color); }
.chapter-kicker { grid-column: 1 / -1; margin-bottom: -.45rem; }
.chapter-heading h2 { max-width: 48rem; margin: 0; font-size: clamp(2.5rem, 5vw, 4.8rem); line-height: .92; letter-spacing: -.055em; }
.chapter-resources { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: .65rem; padding-bottom: .25rem; }
.chapter-resources a, .takeaways a { padding-bottom: .12rem; border-bottom: 1px solid currentColor; color: var(--color); font-family: var(--mono-font); font-size: .9rem; font-weight: 800; letter-spacing: .045em; text-transform: uppercase; text-decoration: none; }
.chapter-resources a:hover, .takeaways a:hover { color: var(--signal-magenta); text-decoration: none; }
.chapter-body { display: grid; grid-template-columns: minmax(300px, .58fr) minmax(0, 1.42fr); gap: clamp(1.6rem, 4vw, 3.25rem); align-items: center; margin-top: 1.6rem; }
.chapter-copy { max-width: 30rem; }
.chapter-subtitle { margin: 0 0 .85rem; color: var(--subtitle); font-family: var(--mono-font); font-size: .96rem; font-weight: 800; letter-spacing: .045em; text-transform: uppercase; }
.chapter-prompt { margin: 0; font-family: 'Playfair Display', serif; font-size: clamp(1.55rem, 3vw, 2rem); line-height: 1.18; }
.chapter-summary { margin: 1rem 0 0; font-size: 1.12rem; line-height: 1.56; }
.chapter-visual { min-width: 0; }
.visual-label { margin: 0 0 .55rem; color: var(--muted); font-family: var(--mono-font); font-size: .88rem; font-weight: 800; letter-spacing: .055em; text-transform: uppercase; }
.chapter-figure { position: relative; padding: .9rem .9rem 1rem; background: rgba(255, 253, 248, .42); box-shadow: var(--card-shadow-subtle); backdrop-filter: blur(6px); }
.chapter-backdrop { display: block !important; width: 100%; min-height: 23rem; max-height: 33rem; object-fit: contain; background: rgba(255, 253, 248, .74); filter: saturate(.94); }
.chapter-plate { width: min(72%, 620px); margin: -4.25rem 1rem 0 auto; padding: .7rem; background: rgba(255, 253, 248, .86); box-shadow: 0 5px 14px rgba(31, 47, 49, .08); backdrop-filter: blur(4px); }
.chapter-plate img { display: block !important; width: 100%; max-height: 21rem; object-fit: contain; background: #fff; }
.chapter-portrait { position: absolute; left: 1.05rem; bottom: 1.2rem; width: 6.4rem; height: 6.4rem; margin: 0; border: .4rem solid #fffdf8; border-radius: 50%; overflow: hidden; background: var(--paper-deep); box-shadow: 0 6px 16px rgba(31, 47, 49, .1); }
.chapter-portrait img { display: block !important; width: 100%; height: 100%; object-fit: cover; }
.chapter-takeaways { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 1.1rem; }
.chapter-takeaways article { padding: .95rem 1rem 1.05rem; background: rgba(255, 253, 248, .36); box-shadow: var(--card-shadow-subtle); backdrop-filter: blur(4px); }
.chapter-takeaways span { color: var(--signal-magenta); font-family: var(--mono-font); font-size: .83rem; font-weight: 800; letter-spacing: .055em; text-transform: uppercase; }
.chapter-takeaways p { margin: .55rem 0 0; font-size: 1.03rem; line-height: 1.42; }
.chapter-footer { display: grid; grid-template-columns: minmax(0, .9fr) minmax(0, 1fr); gap: 1.25rem; align-items: start; margin-top: 1.25rem; padding-top: 1.05rem; border-top: 1px solid var(--rule); }
.chapter-conclusion { min-width: 0; }
.chapter-conclusion .detail-label { margin-bottom: .4rem; }
.chapter-conclusion p:last-child { margin: 0; font-family: 'Playfair Display', serif; font-size: 1.22rem; line-height: 1.35; }
.chapter-footer > .chapter-summary { margin: 0; color: var(--subtitle); font-size: 1.03rem; line-height: 1.5; }
.research-close { width: min(1120px, 100%); margin: 0 auto; padding: 2rem 2rem 7rem; }
.research-close h2 { max-width: 54rem; margin: 0; font-size: clamp(2.6rem, 6vw, 5.5rem); line-height: .9; letter-spacing: -.06em; }
.takeaways { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 2rem; }
.takeaways p { display: flex; flex-direction: column; align-items: flex-start; gap: .45rem; margin: 0; padding-top: 1rem; border-top: 1px solid var(--rule); font-size: 1.08rem; }
.takeaways span { display: block; margin-bottom: .1rem; color: var(--signal-magenta); font-family: var(--mono-font); font-size: .85rem; font-weight: 800; letter-spacing: .05em; text-transform: uppercase; }

@media (max-width: 900px) {
  .chapter-body { grid-template-columns: 1fr; }
  .chapter-copy { max-width: 42rem; }
  .chapter-takeaways, .chapter-footer { grid-template-columns: 1fr; }
  .chapter-heading { grid-template-columns: 1fr; }
  .chapter-resources { justify-content: flex-start; }
}

@media (max-width: 800px) {
  .research-hero { padding: 3.6rem 1.25rem 2.5rem; }
  .research-hero h1 { font-size: clamp(2.65rem, 12.5vw, 4rem); }
  .research-frame { font-size: 1.08rem; }
  .chapter-index { position: static; width: calc(100% - 2.5rem); margin: 0 auto 2.75rem; padding: .5rem; }
  .chapter-index a { min-height: 2.25rem; font-size: .75rem; }
  .chapter { margin-bottom: 4.5rem; padding: 0 1.25rem; scroll-margin-top: 1.5rem; }
  .chapter-heading h2 { font-size: clamp(2.2rem, 10vw, 3.35rem); }
  .chapter-figure { padding: .7rem; }
  .chapter-backdrop { min-height: 15rem; max-height: 20rem; }
  .chapter-plate { width: 92%; margin: -1.4rem auto 0; }
  .chapter-plate img { max-height: 15rem; }
  .chapter-portrait { width: 5.6rem; height: 5.6rem; }
  .chapter-prompt { font-size: 1.35rem; }
  .chapter-summary { font-size: 1.08rem; }
  .chapter-takeaways p { font-size: 1rem; }
  .chapter-conclusion p:last-child { font-size: 1.15rem; }
  .chapter-resources a, .takeaways a { font-size: .84rem; }
  .takeaways { grid-template-columns: 1fr; }
  .research-close { padding: 1rem 1.25rem 7rem; }
}
</style>
