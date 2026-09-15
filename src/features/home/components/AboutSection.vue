<script setup>
import ExternalLink from '../../../shared/components/ExternalLink.vue'
import SectionHeading from '../../../shared/components/SectionHeading.vue'
import { featuredArt } from '../../../content/art'
</script>

<template>
  <section id="about">
    <div class="banner">
      <p class="mobile-chapter">
        02 / About
      </p>
      <div class="section-heading-row">
        <SectionHeading
          title="About"
        />
        <ExternalLink
          href="/files/Resume_JordanLei.pdf"
          label="View CV"
        />
      </div>
      <div class="about-layout">
        <div class="about-copy">
          <p>
            Hi, I'm Jordan! Starting October 2026, I will be a postdoctoral
            researcher in the <b>Stachenfeld and Wolpert Labs</b> at the
            <b>Zuckerman Institute at Columbia University</b>. I study how the 
            <b> how the brain makes sense of a complex world</b>, with a special focus on 
            <b> attention, planning, and action</b>.
            <br><br>
            I'm passionate about <b>bridging the gap between biological and artificial intelligence.</b>
            Here are some questions I'm thinking about: how do people respond to
            uncertainty when planning? Do people think differently than machines
            when playing chess, and why? How might an agent learn what actions are available in a given situation?
            Answers to these questions will help us better understand ourselves and build more human-like intelligent systems.
            <br><br>
            Outside work, you'll catch me sketching in the
            city (probably at the Met), running on the West Side Highway, 
            making music with my keyboard or guitar,
            or snuggling up with a good book.
          </p>
        </div>
        <figure class="about-plate">
          <img
            :src="featuredArt.displayFile || featuredArt.file"
            :alt="featuredArt.caption"
          >
          <figcaption>{{ featuredArt.caption }} / {{ featuredArt.subcaption }}</figcaption>
          <a
            class="button art-link"
            href="/art"
          >
            View Art Portfolio
          </a>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mobile-chapter { display: none; }.section-heading-row { display: flex; align-items: flex-end; justify-content: space-between; gap: 2rem; margin-bottom: 1.5rem; border-top: 2px solid var(--color); padding-top: .85rem; }.section-heading-row :deep(.section-heading) { flex: 1; margin-bottom: 0; border-top: 0; padding-top: 0; }.section-heading-row .button { margin-bottom: .05rem; }.about-layout { display: grid; grid-template-columns: minmax(0, 1.35fr) minmax(220px, .65fr); gap: clamp(2rem, 5vw, 4rem); align-items: start; }.about-copy { padding: 1.6rem 1.35rem; font-size: 1.1rem; background: var(--card-wash); box-shadow: var(--card-shadow-subtle); backdrop-filter: blur(var(--card-blur)); }.about-copy p { margin: 0; }.about-plate { margin: 1rem 0 0; }.about-plate img { display: block !important; width: 100%; aspect-ratio: .9; object-fit: cover; border: 8px solid #fffdf8; transform: rotate(2.5deg); transform-origin: center; }.about-plate figcaption { margin-top: 1rem; font-family: var(--mono-font); font-size: .82rem; letter-spacing: .06em; text-transform: uppercase; }.art-link { margin-top: .55rem; } @media (max-width: 700px) { .mobile-chapter { display: block; margin: 0 0 .45rem; color: var(--signal-magenta); font-family: var(--mono-font); font-size: .82rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; }.section-heading-row { display: block; margin-bottom: 1.5rem; }.section-heading-row :deep(.section-heading) { margin-bottom: .6rem; }.about-layout { grid-template-columns: 1fr; }.about-copy { padding: 1.3rem 1.05rem; }.about-plate { width: min(72%, 280px); margin: 1rem auto; } }
</style>
