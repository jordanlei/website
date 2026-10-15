<script setup>
import { artRows, mobileArtRows } from '../../content/art'
import Gallery from '../../shared/components/Gallery.vue'
import Layout from '../../shared/components/Layout.vue'
</script>

<template>
  <Layout>
    <div class="art-view">
      <header class="art-intro">
        <p>Art archive / 10 works</p>
        <h1>Observations<br><em>in color.</em></h1>
        <div><span>Selected work</span><span>2022 to 2024</span><span>Oil / acrylic / digital / pen</span></div>
      </header>
      <div class="mobilegallery">
        <Gallery
          :images="mobileArtRows"
          :padding="8"
        />
      </div>
      <div class="desktopgallery">
        <Gallery :images="artRows" />
      </div>
    </div>
  </Layout>
</template>

<style scoped>
.art-view { padding-top: 68px; }.art-intro { display: grid; grid-template-columns: 1fr 2fr; gap: 1.5rem; width: min(1120px, 100%); margin: 0 auto; padding: 6rem 2rem 3.5rem; }.art-intro p, .art-intro > div { font-family: var(--mono-font); font-size: 1rem; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; }.art-intro p { color: var(--signal-magenta); }.art-intro h1 { margin: 0; font-size: clamp(4rem, 10vw, 9rem); line-height: .78; letter-spacing: -.07em; }.art-intro h1 em { color: var(--signal-cyan); font-weight: 400; }.art-intro > div { display: flex; grid-column: 2; gap: 1rem; padding-top: 1rem; border-top: 1px solid var(--rule); color: var(--muted); }.art-intro > div span:not(:first-child)::before { content: '•'; margin-right: 1rem; color: var(--signal-yellow); }

.mobilegallery {
  display: none;
}

@media only screen and (max-width: 768px) {
  .art-view { padding-top: calc(var(--app-bar-h) + env(safe-area-inset-top)); }.art-intro { grid-template-columns: 1fr; padding: 1.75rem 1.25rem 2rem; }.art-intro h1 { font-size: clamp(2.8rem, 14vw, 3.6rem); }.art-intro p, .art-intro > div { font-size: .76rem; }.art-intro > div { gap: .35rem .75rem; }.art-intro > div span:not(:first-child)::before { margin-right: .75rem; }.art-intro > div { grid-column: 1; flex-wrap: wrap; }
  .mobilegallery {
    display: block;
  }
  .desktopgallery {
    display: none;
  }
}
</style>
