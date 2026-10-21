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
    <div
      class="film-still"
    >
      <iframe
        :src="film.watch.embed"
        :title="film.title"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      />
    </div>
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
.film { position: relative; overflow: hidden; background: #111; box-shadow: var(--card-shadow-subtle); }
.film-still { position: relative; overflow: hidden; background: #111; aspect-ratio: 16 / 9; }
.film-still iframe { display: block; width: 100%; height: 100%; border: 0; }
.film-copy { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: clamp(1.25rem, 4vw, 3rem); color: #fff; background: linear-gradient(180deg, transparent 30%, rgba(0, 0, 0, .82)); transition: opacity .25s ease; }
.film:hover .film-copy, .film:focus-within .film-copy { opacity: 0; pointer-events: none; }
.film-copy p { margin: 0; }
.film-copy .film-eyebrow { color: var(--signal-magenta); font-family: var(--mono-font); font-size: .82rem; font-weight: 800; letter-spacing: .055em; text-transform: uppercase; }
.film-title { margin: .35rem 0 .6rem; color: #fff; font-family: 'Playfair Display', serif; font-size: clamp(1.5rem, 2.2vw, 1.85rem); font-weight: 700; line-height: 1.05; }
.film-copy .film-logline { font-family: 'Playfair Display', serif; font-size: 1.25rem; line-height: 1.3; }
.film-copy .film-credits { margin-top: .75rem; color: rgba(255, 255, 255, .75); font-size: .9rem; line-height: 1.45; }
.film-copy .film-context { margin-top: .6rem; color: rgba(255, 255, 255, .88); font-size: 1rem; line-height: 1.5; }
.film blockquote { margin: 1rem 0 0; padding-left: .9rem; border-left: 2px solid var(--signal-magenta); }
.film-copy blockquote p { font-family: 'Playfair Display', serif; font-size: 1.1rem; font-style: italic; line-height: 1.35; }
.film cite { display: block; margin-top: .3rem; color: rgba(255, 255, 255, .65); font-size: .85rem; font-style: normal; }
.film-more { display: flex; flex-wrap: wrap; gap: .4rem 1.1rem; margin-top: .85rem; padding-top: .75rem; border-top: 1px solid var(--rule); }
.film-more a { color: var(--primary-blue); font-family: var(--mono-font); font-size: .74rem; font-weight: 800; letter-spacing: .045em; text-transform: uppercase; }
.film-more a::after { content: "↗"; margin-left: .3em; }
.film-more a:hover { color: var(--signal-magenta); text-decoration: none; }
@media (max-width: 700px) {
  .film { border-radius: var(--m-radius); }
  .film-still { border-radius: calc(var(--m-radius) - 6px); }
  .film-copy { padding: 1rem; }
  .film-copy .film-eyebrow { font-size: .72rem; }
  .film-title { font-size: 1.3rem; }
  .film-copy .film-logline { font-size: 1.1rem; }
  .film-copy .film-credits { font-size: .85rem; }
  .film-copy .film-context { font-size: .92rem; }
  .film-copy blockquote p { font-size: 1rem; }
  .film-more { gap: .25rem 1rem; }
  .film-more a { display: inline-flex; align-items: center; min-height: 44px; font-size: .7rem; }
}
</style>
