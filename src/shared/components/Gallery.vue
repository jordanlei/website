<script setup>
defineProps({
  images: {
    type: Array,
    required: true,
  },
})

const padding = 20;

const getRowItems = (row) => {
  const denom = row.reduce((a, b) => a + b.width / b.height, 0);
  return row.map((i) => {
    const width = (i.width / i.height / denom) * (98 - padding);
    return {
      ...i,
      computedWidth: `${width}vw`,
      computedHeight: `${(width / i.width) * i.height}vw`
    }
  })
}
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
        <div class="image-frame">
          <img
            :src="item.file"
            :alt="item.caption"
            class="gallery-image"
          >
        </div>
        <div class="image-caption">
          <h3>{{ item.caption }}</h3>
          <p>{{ item.subcaption }}</p>
        </div>
      </div>
    </div>
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

.image-frame { height: calc(100% - 3.8rem); overflow: hidden; background: var(--paper-deep); }

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.image-caption { display: flex; justify-content: space-between; align-items: baseline; gap: .5rem; padding-top: .7rem; border-top: 1px solid var(--rule); }.image-caption h3, .image-caption p { margin: 0; font-family: var(--mono-font); font-size: .94rem; font-weight: 600; letter-spacing: .05em; text-transform: uppercase; }.image-caption p { color: var(--muted); white-space: nowrap; }.image-container:hover .gallery-image { transform: scale(1.035); }
@media (max-width: 768px) { .gallery-row { margin-bottom: 2.25rem; }.image-caption { display: block; }.image-caption p { margin-top: .25rem; }.image-frame { height: calc(100% - 4.5rem); } }
</style>
