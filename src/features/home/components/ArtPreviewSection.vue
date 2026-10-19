<script setup>
import FilmFeature from '../../../shared/components/FilmFeature.vue'
import SectionHeading from '../../../shared/components/SectionHeading.vue'
import { artRows } from '../../../content/art'

const previewArt = artRows.flat().slice(0, 7)
const workCount = artRows.flat().length
// The phone band shows a work the carousel doesn't, so it never repeats the first card.
const bandArt = artRows.flat()[8]
</script>

<template>
  <section id="art-preview">
    <div class="banner">
      <div class="section-heading-row">
        <SectionHeading title="Art" />
        <a
          class="button"
          href="/art"
        >
          View Art Portfolio
        </a>
      </div>
      <div class="mobile-art-band">
        <img
          :src="bandArt.displayFile || bandArt.file"
          alt=""
        >
      </div>
      <div class="art-subhead">
        <h3>
          <router-link to="/art#drawing">
            Drawing &amp; Painting
          </router-link>
        </h3>
        <router-link
          class="art-subhead-more"
          to="/art#drawing"
        >
          {{ workCount }} works →
        </router-link>
      </div>
      <div
        class="art-carousel"
        aria-label="Selected art"
      >
        <a
          v-for="work in previewArt"
          :key="work.file"
          class="art-card"
          href="/art"
        >
          <figure>
            <img
              :src="work.displayFile || work.file"
              :alt="work.caption"
            >
            <figcaption>
              <span>{{ work.caption }}</span>
              <small>{{ work.subcaption }}</small>
            </figcaption>
          </figure>
        </a>
      </div>
      <div class="art-subhead">
        <h3>
          <router-link to="/art#film">
            Film
          </router-link>
        </h3>
        <router-link
          class="art-subhead-more"
          to="/art#film"
        >
          1 short →
        </router-link>
      </div>
      <div class="art-film">
        <FilmFeature title-tag="h4" />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Subsection heads sit between the Art h2 and the card titles: Playfair, a hairline rule, and a count link. */
.art-subhead { display: flex; align-items: baseline; justify-content: space-between; gap: 1rem; margin: 0 0 1rem; padding-top: .7rem; border-top: 1px solid var(--rule); }
.art-carousel + .art-subhead { margin-top: 2.25rem; }
.art-subhead h3 { margin: 0; font-size: 2rem; line-height: 1.1; }
.art-subhead h3 a { color: var(--color); }
.art-subhead h3 a:hover { color: var(--signal-magenta); text-decoration: none; }
.art-subhead-more { flex: 0 0 auto; color: var(--primary-blue); font-family: var(--mono-font); font-size: .78rem; font-weight: 800; letter-spacing: .045em; text-transform: uppercase; }
.art-subhead-more:hover { color: var(--signal-magenta); text-decoration: none; }
.section-heading-row { display: flex; align-items: flex-end; justify-content: space-between; gap: 2rem; margin-bottom: 1.5rem; border-top: 2px solid var(--color); padding-top: .85rem; }.section-heading-row :deep(.section-heading) { flex: 1; margin-bottom: 0; border-top: 0; padding-top: 0; }.section-heading-row .button { margin-bottom: .05rem; }.mobile-art-band { display: none; }.art-carousel { display: grid; grid-auto-columns: minmax(215px, 27%); grid-auto-flow: column; gap: 1rem; overflow-x: auto; padding: .2rem 1.1rem 1.55rem; scrollbar-color: rgba(189, 84, 123, .34) transparent; scrollbar-width: none; scroll-padding-inline: 1.1rem; scroll-snap-type: x proximity; }.art-carousel::-webkit-scrollbar { height: 2px; }.art-carousel::-webkit-scrollbar-track { background: rgba(25, 45, 50, .04); }.art-carousel::-webkit-scrollbar-thumb { background: rgba(189, 84, 123, .28); border-radius: 999px; }.art-carousel:hover::-webkit-scrollbar-thumb { background: rgba(189, 84, 123, .42); }.art-card { display: block; min-height: 100%; padding: .75rem .75rem 1rem; background: rgba(255, 253, 248, .72); box-shadow: 0 5px 14px rgba(31, 47, 49, .07); backdrop-filter: blur(4px); scroll-snap-align: start; text-decoration: none; transition: transform .2s ease, box-shadow .2s ease; }.art-card:hover { box-shadow: 0 7px 18px rgba(31, 47, 49, .09); text-decoration: none; transform: translateY(-3px); }.art-card figure { display: grid; grid-template-rows: auto 1fr; height: 100%; margin: 0; }.art-card img { display: block !important; width: 100%; aspect-ratio: 4 / 5; object-fit: cover; margin-bottom: .85rem; background: var(--paper-deep); }.art-card figcaption { display: grid; align-content: start; min-height: 4.2rem; }.art-card span { font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 700; line-height: 1.1; }.art-card small { margin-top: .3rem; color: var(--muted); font-family: var(--mono-font); font-size: .78rem; font-weight: 700; letter-spacing: .045em; text-transform: uppercase; } @media (max-width: 700px) { .section-heading-row { display: block; margin-bottom: 1.5rem; }.section-heading-row :deep(.section-heading) { margin-bottom: .6rem; }.mobile-art-band { display: block; height: 7.5rem; margin: 0 0 1.1rem; overflow: hidden; background: var(--paper-deep); }.mobile-art-band img { display: block !important; width: 100%; height: 100%; object-fit: cover; object-position: center 36%; opacity: .86; }.art-subhead h3 { font-size: 1.5rem; }.art-subhead-more { display: inline-flex; align-items: center; min-height: 44px; font-size: .7rem; }.art-subhead { padding-top: 0; }.art-card span { font-size: 1.15rem; }.art-card small { font-size: .7rem; }.art-carousel { grid-auto-columns: minmax(220px, 78%); gap: .75rem; margin: 0 -1.25rem; padding: .2rem 1.25rem 1.35rem; scroll-padding-inline: 1.25rem; scroll-snap-type: x mandatory; overscroll-behavior-x: contain; }.art-card { padding: .6rem .6rem .9rem; border-radius: var(--m-radius); transition: transform .15s ease; }.art-card:hover { transform: none; }.art-card:active { transform: scale(.98); }.art-card img { border-radius: calc(var(--m-radius) - 6px); }.mobile-art-band { border-radius: var(--m-radius); }.art-card:first-child { grid-column-end: span 1; }.art-card img { aspect-ratio: 1 / 1.08; } }
</style>
