<script setup>
import { computed, nextTick, onUnmounted, ref, watch } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  padding: {
    type: Number,
    default: 20,
  },
})

const getRowItems = (row) => {
  const denom = row.reduce((a, b) => a + b.width / b.height, 0);
  return row.map((i) => {
    const width = (i.width / i.height / denom) * (98 - props.padding);
    return {
      ...i,
      computedWidth: `${width}vw`,
      computedHeight: `${(width / i.width) * i.height}vw`
    }
  })
}

// Full-screen viewer: a horizontal snap track, so swiping between works is native scrolling.
const allImages = computed(() => props.images.flat())
const viewerIndex = ref(null)
const track = ref(null)

const openViewer = async (item) => {
  viewerIndex.value = allImages.value.findIndex((i) => i.file === item.file)
  await nextTick()
  track.value.scrollLeft = viewerIndex.value * track.value.clientWidth
  track.value.focus()
}

const closeViewer = () => { viewerIndex.value = null }

const onTrackScroll = () => {
  viewerIndex.value = Math.round(track.value.scrollLeft / track.value.clientWidth)
}

const step = (delta) => {
  const next = Math.min(allImages.value.length - 1, Math.max(0, viewerIndex.value + delta))
  track.value.scrollTo({ left: next * track.value.clientWidth, behavior: 'smooth' })
}

const onKey = (event) => {
  if (event.key === 'Escape') closeViewer()
  if (event.key === 'ArrowRight') step(1)
  if (event.key === 'ArrowLeft') step(-1)
}

watch(viewerIndex, (index) => {
  document.documentElement.classList.toggle('sheet-open', index !== null)
})

onUnmounted(() => document.documentElement.classList.remove('sheet-open'))
</script>

<template>
  <div
    class="gallery"
    :style="{
      paddingLeft: `${padding / 2}vw`,
      paddingRight: `${padding / 2}vw`,
    }"
  >
    <div
      v-for="(row, rowIndex) in images"
      :key="rowIndex"
      class="gallery-row"
    >
      <div
        v-for="item in getRowItems(row)"
        :key="item.file"
        class="image-container"
        :style="{ width: item.computedWidth, height: item.computedHeight }"
      >
        <button
          type="button"
          class="image-frame"
          :aria-label="`View ${item.caption}`"
          @click="openViewer(item)"
        >
          <img
            :src="item.file"
            :alt="item.caption"
            class="gallery-image"
            loading="lazy"
          >
        </button>
        <div class="image-caption">
          <h3>{{ item.caption }}</h3>
          <p>{{ item.subcaption }}</p>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="viewer">
        <div
          v-if="viewerIndex !== null"
          class="viewer"
          role="dialog"
          aria-modal="true"
          :aria-label="allImages[viewerIndex]?.caption"
        >
          <div class="viewer-bar">
            <span>{{ viewerIndex + 1 }} / {{ allImages.length }}</span>
            <button
              type="button"
              aria-label="Close"
              @click="closeViewer"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              ><path d="M6 6l12 12M18 6 6 18" /></svg>
            </button>
          </div>
          <div
            ref="track"
            class="viewer-track"
            tabindex="-1"
            @scroll.passive="onTrackScroll"
            @keydown="onKey"
          >
            <figure
              v-for="item in allImages"
              :key="item.file"
              class="viewer-slide"
              @click.self="closeViewer"
            >
              <img
                :src="item.file"
                :alt="item.caption"
              >
              <figcaption>
                <strong>{{ item.caption }}</strong>
                <span>{{ item.subcaption }}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.gallery {
  display: flex;
  flex-direction: column;
}

.gallery-row {
  display: flex;
  gap: 1.1rem;
  width: 100%;
  margin-bottom: 3.5rem;
}

.image-container {
  position: relative;
  overflow: visible;
}

.image-frame { display: block; width: 100%; height: calc(100% - 3.8rem); padding: 0; overflow: hidden; border: 0; background: var(--paper-deep); cursor: zoom-in; }

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform .3s ease;
}

.image-caption { display: flex; justify-content: space-between; align-items: baseline; gap: .5rem; padding-top: .7rem; border-top: 1px solid var(--rule); }.image-caption h3, .image-caption p { margin: 0; font-family: var(--mono-font); font-size: .94rem; font-weight: 600; letter-spacing: .05em; text-transform: uppercase; }.image-caption p { color: var(--muted); white-space: nowrap; }.image-container:hover .gallery-image { transform: scale(1.035); }

.viewer { position: fixed; inset: 0; z-index: 1200; display: flex; flex-direction: column; background: rgba(18, 26, 28, .985); }
.viewer-bar { display: flex; align-items: center; justify-content: space-between; padding: calc(env(safe-area-inset-top) + .5rem) 1rem .5rem 1.25rem; }
.viewer-bar span { color: rgba(247, 245, 239, .7); font-family: var(--mono-font); font-size: .82rem; font-weight: 700; letter-spacing: .06em; }
.viewer-bar button { display: grid; width: 2.75rem; height: 2.75rem; place-items: center; padding: 0; border: 0; border-radius: 50%; background: rgba(247, 245, 239, .12); cursor: pointer; }
.viewer-bar svg { width: 1.2rem; height: 1.2rem; fill: none; stroke: #f7f5ef; stroke-width: 2; stroke-linecap: round; }
.viewer-track { display: flex; flex: 1; min-height: 0; overflow-x: auto; overscroll-behavior: contain; scroll-snap-type: x mandatory; scrollbar-width: none; outline: none; }
.viewer-track::-webkit-scrollbar { display: none; }
.viewer-slide { display: flex; flex: 0 0 100%; flex-direction: column; align-items: center; justify-content: center; gap: 1rem; margin: 0; padding: 0 1rem calc(env(safe-area-inset-bottom) + 1.5rem); scroll-snap-align: center; scroll-snap-stop: always; }
.viewer-slide img { display: block !important; max-width: 100%; max-height: calc(100% - 4rem); object-fit: contain; }
.viewer-slide figcaption { display: grid; justify-items: center; gap: .2rem; text-align: center; }
.viewer-slide strong { color: #f7f5ef; font-family: 'Playfair Display', serif; font-size: 1.25rem; }
.viewer-slide span { color: rgba(247, 245, 239, .6); font-family: var(--mono-font); font-size: .78rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; }
.viewer-enter-active, .viewer-leave-active { transition: opacity .25s ease; }
.viewer-enter-from, .viewer-leave-to { opacity: 0; }

@media (max-width: 768px) { .gallery-row { margin-bottom: 2.25rem; }.image-caption { display: block; }.image-caption h3, .image-caption p { font-size: .76rem; }.image-caption p { margin-top: .25rem; }.image-frame { height: calc(100% - 4.5rem); border-radius: var(--m-radius); }.image-container:hover .gallery-image { transform: none; }.image-frame:active .gallery-image { transform: scale(.98); } }
</style>
