<script setup>
import { artRows, mobileArtRows } from '../../content/art'
import FilmFeature from '../../shared/components/FilmFeature.vue'
import Gallery from '../../shared/components/Gallery.vue'
import Layout from '../../shared/components/Layout.vue'

const workCount = artRows.flat().length
</script>

<template>
  <Layout>
    <div class="art-view">
      <header class="art-intro">
        <p>Art archive / {{ workCount }} works + 1 film</p>
        <h1>Observations<br><em>in color.</em></h1>
        <div><span>Selected work</span><span>2022 to 2024</span><span>Oil / acrylic / digital / pen / film</span></div>
      </header>
      <nav
        class="art-sections"
        aria-label="Art sections"
      >
        <router-link to="/art#drawing">
          <span>01</span> Drawing &amp; Painting
        </router-link>
        <router-link to="/art#film">
          <span>02</span> Film
        </router-link>
      </nav>
      <section
        id="drawing"
        class="art-section"
        aria-labelledby="drawing-title"
      >
        <div class="art-section-head">
          <p>01 / {{ workCount }} works</p>
          <h2 id="drawing-title">
            Drawing &amp; Painting
          </h2>
        </div>
        <div class="mobilegallery">
          <Gallery
            :images="mobileArtRows"
            :padding="8"
          />
        </div>
        <div class="desktopgallery">
          <Gallery :images="artRows" />
        </div>
      </section>
      <section
        id="film"
        class="art-section"
        aria-labelledby="film-heading"
      >
        <div class="art-section-head">
          <p>02 / 1 short</p>
          <h2 id="film-heading">
            Film
          </h2>
        </div>
        <div class="art-film">
          <FilmFeature />
        </div>
      </section>
    </div>
  </Layout>
</template>

<style scoped>
.art-view { padding-top: 68px; }.art-intro { display: grid; grid-template-columns: 1fr 2fr; gap: 1.5rem; width: min(1120px, 100%); margin: 0 auto; padding: 6rem 2rem 3.5rem; }.art-intro p, .art-intro > div { font-family: var(--mono-font); font-size: 1rem; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; }.art-intro p { color: var(--signal-magenta); }.art-intro h1 { margin: 0; font-size: clamp(4rem, 10vw, 9rem); line-height: .78; letter-spacing: -.07em; }.art-intro h1 em { color: var(--signal-cyan); font-weight: 400; }.art-intro > div { display: flex; grid-column: 2; gap: 1rem; padding-top: 1rem; border-top: 1px solid var(--rule); color: var(--muted); }.art-intro > div span:not(:first-child)::before { content: '•'; margin-right: 1rem; color: var(--signal-yellow); }

.art-sections { display: flex; flex-wrap: wrap; gap: .6rem; width: min(1120px, 100%); margin: 0 auto; padding: 0 2rem 2.5rem; }
.art-sections a { display: inline-flex; align-items: center; gap: .55rem; min-height: 44px; padding: .55rem 1.1rem; border: 1px solid var(--card-border); border-radius: 999px; background: rgba(255, 253, 248, .72); color: var(--color); font-family: var(--mono-font); font-size: .85rem; font-weight: 800; letter-spacing: .05em; text-transform: uppercase; text-decoration: none; transition: background .2s, color .2s; }
.art-sections a span { color: var(--signal-magenta); }
.art-sections a:hover { color: var(--background-color); background: var(--color); text-decoration: none; }
.art-sections a:hover span { color: var(--signal-yellow); }
.art-section { padding-bottom: 3.5rem; }
.art-section-head { width: min(1120px, 100%); margin: 0 auto 1.25rem; padding: 0 2rem; }
.art-section-head p { margin: 0 0 .25rem; padding-top: .85rem; border-top: 2px solid var(--color); color: var(--signal-magenta); font-family: var(--mono-font); font-size: .85rem; font-weight: 800; letter-spacing: .055em; text-transform: uppercase; }
.art-section-head h2 { margin: 0; line-height: 1.05; }
.art-film { width: min(1120px, 100%); margin: 0 auto; padding: 0 2rem; }

.mobilegallery {
  display: none;
}

@media only screen and (max-width: 768px) {
  .art-sections { padding: 0 1.25rem 1.5rem; }
  .art-sections a { font-size: .74rem; }
  .art-section { padding-bottom: 2rem; }
  .art-section-head { padding: 0 1.25rem; margin-bottom: 1rem; }
  .art-section-head p { font-size: .72rem; }
  .art-film { padding: 0 1.25rem; }
  .art-view { padding-top: calc(var(--app-bar-h) + env(safe-area-inset-top)); }.art-intro { grid-template-columns: 1fr; padding: 1.75rem 1.25rem 2rem; }.art-intro h1 { font-size: clamp(2.8rem, 14vw, 3.6rem); }.art-intro p, .art-intro > div { font-size: .76rem; }.art-intro > div { gap: .35rem .75rem; }.art-intro > div span:not(:first-child)::before { margin-right: .75rem; }.art-intro > div { grid-column: 1; flex-wrap: wrap; }
  .mobilegallery {
    display: block;
  }
  .desktopgallery {
    display: none;
  }
}
</style>
