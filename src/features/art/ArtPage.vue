<script setup>
import { artRows, mobileArtRows } from '../../content/art'
import Gallery from '../../shared/components/Gallery.vue'
import Layout from '../../shared/components/Layout.vue'
</script>

<template>
  <Layout>
    <div class="art-view">
      <div class="mobilegallery">
        <Gallery :images="mobileArtRows" />
      </div>
      <div class="desktopgallery">
        <Gallery :images="artRows" />
      </div>
    </div>
  </Layout>
</template>

<style scoped>
.art-view {
  padding-top: 100px;
}

.mobilegallery {
  display: none;
}

@media only screen and (max-width: 768px) {
  .mobilegallery {
    display: block;
  }
  .desktopgallery {
    display: none;
  }
}
</style>
