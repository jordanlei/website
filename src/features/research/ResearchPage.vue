<script setup>
import Layout from '../../shared/components/Layout.vue'
import { researchAtlas } from '../../content/researchAtlas'
import MetacontrolFigure from './components/MetacontrolFigure.vue'
import StochasticityFigure from './components/StochasticityFigure.vue'
import NeuralEncodingFigure from './components/NeuralEncodingFigure.vue'
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
            <span class="resource-label">Assets</span>
            <a
              v-for="resource in chapter.resources"
              :key="resource.href"
              :href="resource.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ resource.label }}
              <img
                src="/images/external-link.svg"
                width="13"
                height="13"
                alt=""
              >
            </a>
          </div>
        </div>

        <div class="chapter-body">
          <div class="chapter-copy">
            <p class="detail-label">
              Main Question
            </p>
            <p class="chapter-prompt">
              {{ chapter.prompt }}
            </p>
            <div class="chapter-takeaways">
              <article
                v-for="(takeaway, index) in chapter.takeaways"
                :key="takeaway.label"
              >
                <span>{{ String(index + 1).padStart(2, '0') }} / {{ takeaway.label }}</span>
                <p>{{ takeaway.text }}</p>
              </article>
            </div>
            <div class="chapter-conclusion">
              <p class="detail-label">
                Key finding
              </p>
              <p>{{ chapter.finding }}</p>
            </div>
          </div>

          <div class="chapter-visual">
            <div
              v-if="chapter.dynamicFigure"
              class="chapter-data-panel"
            >
              <StochasticityFigure v-if="chapter.dynamicFigure === 'stochasticity'" />
              <NeuralEncodingFigure v-else-if="chapter.dynamicFigure === 'monkey'" />
              <MetacontrolFigure v-else />
            </div>
            <div
              v-else
              class="chapter-figure"
            >
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
      </section>

      <section class="research-close">
        <p class="research-eyebrow">
          Research materials
        </p>
        <h2>Read the work and follow the thread.</h2>
        <div class="takeaways">
          <p>
            <span>Attention</span>
            <a href="https://www.nature.com/articles/s41467-026-72146-9">Nature Communications</a>
          </p>
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
.research-world {
  --research-panel-bg: rgba(255, 253, 248, .54);
  --research-panel-pad: clamp(1rem, 2.5vw, 1.25rem);
  --research-panel-title: 1.36rem;
  --research-panel-note: 1rem;
  --research-caption: .92rem;
  --research-meta: .84rem;
  --research-axis: 15px;
  --research-axis-title: 16px;
  --research-plot-label: 16px;
  --research-scatter-tick: 27px;
  --research-scatter-axis: 32px;
  --research-scatter-label: 23px;
  padding-top: 68px;
}
.research-hero { width: min(1120px, 100%); margin: 0 auto; padding: 6rem clamp(2rem, 5vw, 4rem) 3.5rem; }
.research-eyebrow, .chapter-kicker, .detail-label { margin: 0 0 .5rem; color: var(--signal-magenta); font-family: var(--mono-font); font-size: .92rem; font-weight: 800; letter-spacing: 0; text-transform: uppercase; }
.research-hero h1 { max-width: 46rem; margin: 0; font-size: clamp(3.5rem, 6.8vw, 6.2rem); line-height: .9; letter-spacing: 0; }
.research-lede { max-width: 50rem; margin: 1.35rem 0 0; font-family: 'Playfair Display', serif; font-size: clamp(1.55rem, 3vw, 2.25rem); line-height: 1.16; }
.research-frame { max-width: 48rem; margin: 1.2rem 0 0; color: var(--subtitle); font-size: 1.16rem; line-height: 1.55; }
.chapter-index { position: sticky; top: 68px; z-index: 5; display: flex; gap: .6rem; width: min(1040px, calc(100% - clamp(4rem, 10vw, 8rem))); margin: 0 auto 4rem; padding: .65rem; overflow-x: auto; background: rgba(247, 245, 239, .76); box-shadow: 0 6px 18px rgba(31, 47, 49, .06); backdrop-filter: blur(12px); }
.chapter-index a { display: inline-flex; align-items: center; gap: .45rem; min-height: 2.5rem; padding: 0 .85rem; color: var(--color); background: rgba(255, 253, 248, .38); font-family: var(--mono-font); font-size: .82rem; font-weight: 800; letter-spacing: 0; text-transform: uppercase; text-decoration: none; white-space: nowrap; }
.chapter-index span { color: var(--signal-magenta); }
.chapter { width: min(1040px, 100%); margin: 0 auto 6rem; padding: 0 clamp(2rem, 5vw, 4rem); scroll-margin-top: 13rem; }
.chapter-heading { display: grid; gap: .9rem; align-items: end; padding-top: 1rem; border-top: 2px solid var(--color); }
.chapter-kicker { grid-column: 1 / -1; margin-bottom: -.45rem; }
.chapter-heading h2 { max-width: 100%; margin: 0; font-size: clamp(2.5rem, 5vw, 4.8rem); line-height: .92; letter-spacing: 0; }
.chapter-resources { display: flex; flex-wrap: wrap; align-items: center; gap: .55rem .75rem; margin-top: .05rem; }
.resource-label { color: var(--muted); font-family: var(--mono-font); font-size: .82rem; font-weight: 800; letter-spacing: 0; text-transform: uppercase; }
.chapter-resources a, .takeaways a { display: inline-flex; align-items: center; gap: .3rem; padding-bottom: .12rem; border-bottom: 1px solid currentColor; color: var(--color); font-family: var(--mono-font); font-size: .9rem; font-weight: 800; letter-spacing: 0; text-transform: uppercase; text-decoration: none; }
.chapter-resources a img, .takeaways a img { width: .82rem; height: .82rem; }
.chapter-resources a:hover, .takeaways a:hover { color: var(--signal-magenta); text-decoration: none; }
.chapter-body { display: grid; grid-template-columns: minmax(300px, .88fr) minmax(0, 1.12fr); gap: clamp(1.75rem, 4vw, 3.25rem); align-items: start; margin-top: 1.6rem; }
.chapter-copy { max-width: 30rem; }
.chapter-copy .detail-label { margin-bottom: .4rem; }
.chapter-prompt { margin: 0; font-family: 'Playfair Display', serif; font-size: clamp(1.65rem, 3vw, 2.2rem); line-height: 1.18; }
.chapter-summary { max-width: 34rem; margin: 1rem 0 0; font-size: 1.1rem; line-height: 1.58; }
.chapter-visual { min-width: 0; }
.chapter-figure { position: relative; padding: var(--research-panel-pad); background: var(--research-panel-bg); box-shadow: var(--card-shadow-subtle); backdrop-filter: blur(6px); }
.chapter-data-panel { position: relative; }
.chapter-backdrop { display: block !important; width: 100%; min-height: 20rem; max-height: 29rem; object-fit: contain; background: rgba(255, 253, 248, .74); filter: saturate(.94); }
.chapter-plate { width: min(66%, 540px); margin: -3.4rem 1rem 0 auto; padding: .65rem; background: rgba(255, 253, 248, .86); box-shadow: 0 5px 14px rgba(31, 47, 49, .06); backdrop-filter: blur(4px); }
.chapter-plate img { display: block !important; width: 100%; max-height: 18rem; object-fit: contain; background: #fff; }
.chapter-portrait { position: absolute; left: 1.05rem; bottom: 1.2rem; width: 6.4rem; height: 6.4rem; margin: 0; border: .4rem solid #fffdf8; border-radius: 50%; overflow: hidden; background: var(--paper-deep); box-shadow: 0 6px 16px rgba(31, 47, 49, .1); }
.chapter-portrait img { display: block !important; width: 100%; height: 100%; object-fit: cover; }
.chapter-takeaways { display: grid; gap: 0; margin-top: 1.25rem; border-top: 1px solid var(--rule); }
.chapter-takeaways article { padding: .78rem 0 .82rem .9rem; border-left: 2px solid color-mix(in srgb, var(--signal-magenta), transparent 45%); }
.chapter-takeaways article + article { border-top: 1px solid var(--rule); }
.chapter-takeaways span { color: var(--signal-magenta); font-family: var(--mono-font); font-size: .83rem; font-weight: 800; letter-spacing: 0; text-transform: uppercase; }
.chapter-takeaways p { margin: .55rem 0 0; font-size: 1.08rem; line-height: 1.45; }
.chapter-conclusion { min-width: 0; margin-top: 1.25rem; padding-top: 1.05rem; border-top: 1px solid var(--rule); }
.chapter-conclusion .detail-label { margin-bottom: .4rem; }
.chapter-conclusion p:last-child { margin: 0; font-family: 'Playfair Display', serif; font-size: 1.12rem; line-height: 1.35; }
.research-close { width: min(1040px, 100%); margin: 0 auto; padding: 2rem clamp(2rem, 5vw, 4rem) 7rem; }
.research-close h2 { max-width: 54rem; margin: 0; font-size: clamp(2.6rem, 6vw, 5.5rem); line-height: .9; letter-spacing: 0; }
.takeaways { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-top: 2rem; }
.takeaways p { display: flex; flex-direction: column; align-items: flex-start; gap: .45rem; margin: 0; padding-top: 1rem; border-top: 1px solid var(--rule); font-size: 1.08rem; }
.takeaways span { display: block; margin-bottom: .1rem; color: var(--signal-magenta); font-family: var(--mono-font); font-size: .85rem; font-weight: 800; letter-spacing: 0; text-transform: uppercase; }

@media (max-width: 900px) {
  .chapter-body { display: block; }
  .chapter-copy { max-width: 42rem; }
  .chapter-visual { margin-top: 1.35rem; }
  .chapter-heading { grid-template-columns: 1fr; }
}

@media (max-width: 800px) {
  .research-hero { padding: 3.6rem 1.25rem 2.5rem; }
  .research-hero h1 { font-size: clamp(2.65rem, 12.5vw, 4rem); }
  .research-frame { font-size: 1.08rem; }
  .chapter-index { position: static; width: calc(100% - 2.5rem); margin: 0 auto 2.75rem; padding: .5rem; }
  .chapter-index a { min-height: 2.25rem; font-size: .75rem; }
  .chapter { margin-bottom: 4.5rem; padding: 0 1.25rem; scroll-margin-top: 2.5rem; }
  .chapter-heading h2 { font-size: clamp(2.2rem, 10vw, 3.35rem); }
  .research-world {
    --research-panel-note: 1.04rem;
    --research-caption: .96rem;
    --research-meta: .9rem;
  }
  .chapter-figure { padding: .7rem; }
  .chapter-backdrop { min-height: 0; max-height: 13rem; }
  .chapter-plate { width: 100%; margin: .7rem auto 0; }
  .chapter-plate img { max-height: 12rem; }
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
