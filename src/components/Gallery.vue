<script setup>
const props = defineProps({
  images: Array
})

const padding = 20;

const getRowItems = (row) => {
  const denom = row.reduce((a, b) => a + b.width / b.height, 0);
  return row.map((i) => {
    const src = i.large_file || i.file;
    const width = (i.width / i.height / denom) * (98 - padding);
    return {
      ...i,
      src,
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
    <div v-for="(row, rowIndex) in images" :key="rowIndex" class="gallery-row">
      <div
        v-for="(item, imgIndex) in getRowItems(row)"
        :key="imgIndex"
        class="image-container"
        :style="{ width: item.computedWidth, height: item.computedHeight }"
      >
        <img :src="item.file" :alt="item.caption" class="gallery-image" />
        <div class="image-overlay">
          <h3>{{ item.caption }}</h3>
          <h4>{{ item.subcaption }}</h4>
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
  width: 100%;
}

.image-container {
  position: relative;
  overflow: hidden;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
}

.image-overlay h3, .image-overlay h4 {
  color: white;
}

.image-container:hover .image-overlay {
  opacity: 1;
}
</style>
