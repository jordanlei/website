<script setup>
import { featuredFilm as film } from '../../content/film'

// h3 under the Art page's section h2; h4 when nested under a home subsection head.
defineProps({ titleTag: { type: String, default: 'h3' } })
</script>

<template>
  <article
    class="film"
    aria-labelledby="film-title"
  >
    <a
      class="film-still"
      :href="film.watch.href"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="`${film.watch.label}: ${film.title}`"
    >
      <img
        :src="film.still"
        :alt="film.stillAlt"
        loading="lazy"
      >
      <span
        class="film-play"
        aria-hidden="true"
      >▶</span>
    </a>
    <div class="film-copy">
      <p class="film-eyebrow">
        Symbiosis / {{ film.year }}
      </p>
      <component
        :is="titleTag"
        id="film-title"
        class="film-title"
      >
        {{ film.title }}
      </component>
      <p class="film-logline">
        {{ film.logline }}
      </p>
      <p class="film-credits">
        {{ film.credits }}<br>{{ film.cast }}
      </p>
      <p class="film-context">
        {{ film.context }}
      </p>
      <blockquote>
        <p>“{{ film.press.quote }}”</p>
        <cite>{{ film.press.source }}</cite>
      </blockquote>
      <div class="film-links">
        <a
          class="button"
          :href="film.watch.href"
          target="_blank"
          rel="noopener noreferrer"
        >{{ film.watch.label }}</a>
        <small class="film-note">{{ film.watch.note }}</small>
      </div>
      <nav
        class="film-more"
        aria-label="More about the film"
      >
        <a
          v-for="link in film.links"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
        >{{ link.label }}</a>
      </nav>
    </div>
  </article>
</template>

<style scoped>
.film { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr); gap: clamp(1.5rem, 4vw, 3rem); align-items: center; padding: 1.25rem; background: rgba(255, 253, 248, .72); box-shadow: var(--card-shadow-subtle); backdrop-filter: blur(var(--card-blur)); }
.film-still { position: relative; display: block; overflow: hidden; background: #111; }
.film-still img { display: block !important; width: 100%; aspect-ratio: 1600 / 837; object-fit: cover; transition: transform .4s ease; }
.film-still:hover img { transform: scale(1.02); }
.film-play { position: absolute; right: .9rem; bottom: .9rem; display: grid; width: 2.75rem; height: 2.75rem; place-items: center; padding-left: .15rem; border-radius: 50%; color: var(--color); background: rgba(255, 253, 248, .9); font-size: .9rem; }
.film-copy p { margin: 0; }
.film-copy .film-eyebrow { color: var(--signal-magenta); font-family: var(--mono-font); font-size: .82rem; font-weight: 800; letter-spacing: .055em; text-transform: uppercase; }
.film-title { margin: .35rem 0 .6rem; color: var(--color); font-family: 'Playfair Display', serif; font-size: clamp(1.5rem, 2.2vw, 1.85rem); font-weight: 700; line-height: 1.05; }
.film-copy .film-logline { font-family: 'Playfair Display', serif; font-size: 1.25rem; line-height: 1.3; }
.film-copy .film-credits { margin-top: .75rem; color: var(--muted); font-size: .9rem; line-height: 1.45; }
.film-copy .film-context { margin-top: .6rem; color: var(--subtitle); font-size: 1rem; line-height: 1.5; }
.film blockquote { margin: 1rem 0 0; padding-left: .9rem; border-left: 2px solid var(--signal-magenta); }
.film-copy blockquote p { font-family: 'Playfair Display', serif; font-size: 1.1rem; font-style: italic; line-height: 1.35; }
.film cite { display: block; margin-top: .3rem; color: var(--muted); font-size: .85rem; font-style: normal; }
.film-links { display: flex; flex-wrap: wrap; align-items: center; gap: .25rem 1rem; margin-top: .9rem; }
.film-note { color: var(--muted); font-size: .8rem; }
.film-more { display: flex; flex-wrap: wrap; gap: .4rem 1.1rem; margin-top: .85rem; padding-top: .75rem; border-top: 1px solid var(--rule); }
.film-more a { color: var(--primary-blue); font-family: var(--mono-font); font-size: .74rem; font-weight: 800; letter-spacing: .045em; text-transform: uppercase; }
.film-more a::after { content: "↗"; margin-left: .3em; }
.film-more a:hover { color: var(--signal-magenta); text-decoration: none; }
@media (max-width: 700px) {
  .film { grid-template-columns: 1fr; gap: 1rem; padding: .6rem .6rem 1rem; border-radius: var(--m-radius); }
  .film-still { border-radius: calc(var(--m-radius) - 6px); }
  .film-copy { padding: 0 .45rem; }
  .film-copy .film-eyebrow { font-size: .72rem; }
  .film-title { font-size: 1.3rem; }
  .film-copy .film-logline { font-size: 1.1rem; }
  .film-copy .film-credits { font-size: .85rem; }
  .film-copy .film-context { font-size: .92rem; }
  .film-copy blockquote p { font-size: 1rem; }
  .film-links { gap: 0 1rem; }
  .film-more { gap: .25rem 1rem; }
  .film-more a { display: inline-flex; align-items: center; min-height: 44px; font-size: .7rem; }
}
</style>
