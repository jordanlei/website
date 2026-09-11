<script setup>
import SectionHeading from '../../../shared/components/SectionHeading.vue'
import { artRows } from '../../../content/art'

const previewArt = artRows.flat().slice(0, 7)
</script>

<template>
  <section id="art-preview">
    <div class="banner">
      <p class="mobile-chapter">
        06 / Art
      </p>
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
          :src="previewArt[8]?.displayFile || previewArt[8]?.file || previewArt[0].file"
          alt=""
        >
      </div>
      <div class="art-preview-head">
        <p>
          Sketches, paintings, and digital work from the archive.
        </p>
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
      <p class="mobile-carousel-note">
        Swipe to browse selected works / open the full archive.
      </p>
    </div>
  </section>
</template>

<style scoped>
.section-heading-row { display: flex; align-items: flex-end; justify-content: space-between; gap: 2rem; margin-bottom: 1.5rem; border-top: 2px solid var(--color); padding-top: .85rem; }.section-heading-row :deep(.section-heading) { flex: 1; margin-bottom: 0; border-top: 0; padding-top: 0; }.section-heading-row .button { margin-bottom: .05rem; }.mobile-chapter, .mobile-art-band, .mobile-carousel-note { display: none; }.art-preview-head { margin: 0 0 1.5rem; }.art-preview-head p { margin: 0; max-width: 34rem; font-family: 'Playfair Display', serif; font-size: 1.6rem; line-height: 1.25; }.art-carousel { display: grid; grid-auto-columns: minmax(215px, 27%); grid-auto-flow: column; gap: 1rem; overflow-x: auto; padding: .2rem 1.1rem 1.55rem; scrollbar-color: rgba(189, 84, 123, .34) transparent; scrollbar-width: none; scroll-padding-inline: 1.1rem; scroll-snap-type: x proximity; }.art-carousel::-webkit-scrollbar { height: 2px; }.art-carousel::-webkit-scrollbar-track { background: rgba(25, 45, 50, .04); }.art-carousel::-webkit-scrollbar-thumb { background: rgba(189, 84, 123, .28); border-radius: 999px; }.art-carousel:hover::-webkit-scrollbar-thumb { background: rgba(189, 84, 123, .42); }.art-card { display: block; min-height: 100%; padding: .75rem .75rem 1rem; background: rgba(255, 253, 248, .72); box-shadow: 0 5px 14px rgba(31, 47, 49, .07); backdrop-filter: blur(4px); scroll-snap-align: start; text-decoration: none; transition: transform .2s ease, box-shadow .2s ease; }.art-card:hover { box-shadow: 0 7px 18px rgba(31, 47, 49, .09); text-decoration: none; transform: translateY(-3px); }.art-card figure { display: grid; grid-template-rows: auto 1fr; height: 100%; margin: 0; }.art-card img { display: block !important; width: 100%; aspect-ratio: 4 / 5; object-fit: cover; margin-bottom: .85rem; background: var(--paper-deep); }.art-card figcaption { display: grid; align-content: start; min-height: 4.2rem; }.art-card span { font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 700; line-height: 1.1; }.art-card small { margin-top: .3rem; color: var(--muted); font-family: var(--mono-font); font-size: .78rem; font-weight: 700; letter-spacing: .045em; text-transform: uppercase; } @media (max-width: 700px) { .section-heading-row { display: block; margin-bottom: 1.5rem; }.section-heading-row :deep(.section-heading) { margin-bottom: .6rem; }.mobile-chapter { display: block; margin: 0 0 .45rem; color: var(--signal-magenta); font-family: var(--mono-font); font-size: .82rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; }.mobile-art-band { display: block; height: 7.5rem; margin: 0 0 1.1rem; overflow: hidden; background: var(--paper-deep); }.mobile-art-band img { display: block !important; width: 100%; height: 100%; object-fit: cover; object-position: center 36%; opacity: .86; }.art-preview-head { display: block; margin-top: 0; }.art-preview-head p { margin-bottom: .35rem; font-size: 1.35rem; }.art-carousel { grid-auto-columns: minmax(220px, 82%); gap: .8rem; margin-right: -1.25rem; padding-right: 1.25rem; padding-left: 0; padding-bottom: 1.35rem; scroll-padding-inline: 0; }.art-card { padding: .7rem .7rem .95rem; }.art-card:first-child { grid-column-end: span 1; }.art-card img { aspect-ratio: 1 / 1.08; }.mobile-carousel-note { display: block; margin: -.55rem 0 0; color: var(--muted); font-family: var(--mono-font); font-size: .78rem; font-weight: 700; letter-spacing: .045em; line-height: 1.35; text-transform: uppercase; } }
</style>
