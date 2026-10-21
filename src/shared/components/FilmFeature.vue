<script setup>
import Player from '@vimeo/player'
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { featuredFilm as film } from '../../content/film'

// h3 under the Art page's section h2; h4 when nested under a home subsection head.
defineProps({ titleTag: { type: String, default: 'h3' } })
const isPlaying = ref(false)
const playbackTime = ref(0)
const playerFrame = ref(null)
let player

watch(isPlaying, async (playing) => {
  if (!playing) return
  await nextTick()
  player = new Player(playerFrame.value)
  player.on('loaded', async () => {
    if (playbackTime.value > 0) await player.setCurrentTime(playbackTime.value)
  })
  player.on('pause', async () => {
    playbackTime.value = await player.getCurrentTime()
    isPlaying.value = false
  })
  player.on('ended', () => {
    playbackTime.value = 0
    isPlaying.value = false
  })
})

onBeforeUnmount(() => player?.destroy())
</script>

<template>
  <article
    class="film"
    :class="{ 'is-playing': isPlaying }"
    aria-labelledby="film-title"
  >
    <div
      class="film-still"
    >
      <iframe
        v-if="isPlaying"
        ref="playerFrame"
        :src="`${film.watch.embed}&autoplay=1`"
        :title="film.title"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      />
      <button
        v-else
        class="film-poster"
        type="button"
        :aria-label="`Play ${film.title}`"
        @click="isPlaying = true"
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
      </button>
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
.film-poster { position: absolute; inset: 0; width: 100%; height: 100%; padding: 0; border: 0; cursor: pointer; }
.film-poster img { display: block; width: 100%; height: 100%; object-fit: cover; transition: transform .4s ease, filter .25s ease; }
.film-poster:hover img, .film-poster:focus-visible img { transform: scale(1.02); filter: brightness(.8); }
.film-play { position: absolute; inset: 50% auto auto 50%; display: grid; width: 4rem; height: 4rem; place-items: center; padding-left: .2rem; border: 2px solid rgba(255, 255, 255, .9); border-radius: 50%; color: #111; background: rgba(255, 255, 255, .92); font-size: 1.1rem; transform: translate(-50%, -50%); }
.film-copy { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: clamp(1.25rem, 4vw, 3rem); color: #fff; background: linear-gradient(180deg, rgba(0, 0, 0, .08) 15%, rgba(0, 0, 0, .92) 100%); text-shadow: 0 1px 2px rgba(0, 0, 0, .75); transition: opacity .25s ease; pointer-events: none; }
.film.is-playing .film-copy { opacity: 0; }
.film-copy p { margin: 0; }
.film-copy .film-eyebrow { color: var(--signal-magenta); font-family: var(--mono-font); font-size: .82rem; font-weight: 800; letter-spacing: .055em; text-transform: uppercase; }
.film-title { margin: .35rem 0 .6rem; color: #fff; font-family: 'Playfair Display', serif; font-size: clamp(1.5rem, 2.2vw, 1.85rem); font-weight: 700; line-height: 1.05; }
.film-copy .film-logline { max-width: 42rem; color: #fff; font-family: 'Playfair Display', serif; font-size: clamp(1.1rem, 2vw, 1.45rem); line-height: 1.25; }
.film-copy .film-credits { margin-top: .75rem; color: rgba(255, 255, 255, .75); font-size: .9rem; line-height: 1.45; }
.film-more { display: flex; flex-wrap: wrap; gap: .4rem 1.1rem; margin-top: 1rem; padding-top: .75rem; border-top: 1px solid rgba(255, 255, 255, .35); }
.film-more a { color: #fff; font-family: var(--mono-font); font-size: .74rem; font-weight: 800; letter-spacing: .045em; text-transform: uppercase; }
.film-more a::after { content: "↗"; margin-left: .3em; }
.film-more a:hover { color: var(--signal-magenta); text-decoration: none; }
.film-more { pointer-events: auto; }
@media (max-width: 700px) {
  .film { border-radius: var(--m-radius); }
  .film-still { border-radius: calc(var(--m-radius) - 6px); }
  .film-copy { padding: 1rem; }
  .film-copy .film-eyebrow { font-size: .72rem; }
  .film-title { font-size: 1.3rem; }
  .film-copy .film-logline { font-size: 1.1rem; }
  .film-copy .film-credits { font-size: .85rem; }
  .film-more { gap: .25rem 1rem; }
  .film-more a { display: inline-flex; align-items: center; min-height: 44px; font-size: .7rem; }
}
</style>
