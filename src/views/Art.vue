<script setup>
import Layout from '../components/Layout.vue';
import Gallery from '../components/Gallery.vue';

const IMAGES = [
  [
    { file: "/images/art/cascais.jpeg", caption: "Cascais, Portugal", subcaption: "Acrylic, 2024", width: 2078, height: 1512 },
    { file: "/images/art/johnsoanesmuseum.jpeg", caption: "Sir John Soane's Museum", subcaption: "Pen, 2023", width: 750, height: 1048 },
  ],
  [
    { file: "/images/art/niagarafalls.jpeg", caption: "Niagara Falls", subcaption: "Oil, 2023", width: 2048, height: 1536 },
    { file: "/images/art/oregoncoast.jpeg", caption: "Oregon Coast", subcaption: "Oil, 2023", width: 790, height: 995 },
  ],
  [
    { file: "/images/art/spacedout.jpeg", caption: "Spaced Out", subcaption: "Digital, 2023", width: 1920, height: 1280 },
    { file: "/images/art/peacocks.jpeg", caption: "Peacocks", subcaption: "Digital, 2024", width: 1772, height: 1772 },
  ],
  [
    { file: "/images/art/axolotlfisherman.jpeg", caption: "Axolotl Fisherman", subcaption: "Digital, 2023", width: 1008, height: 779 },
    { file: "/images/art/birdsofny.jpeg", caption: "Birds of NY", subcaption: "Digital, 2023", width: 2016, height: 1558 },
  ],
  [
    { file: "/images/art/cerebellum.JPG", caption: "Purkinje Cell", subcaption: "Oil, 2022", width: 3024, height: 3830 },
    { file: "/images/art/hippocampus.JPG", caption: "Hippocampus", subcaption: "Oil, 2022", width: 3023, height: 2225 },
  ],
];

const MOBILE_IMAGES = IMAGES.flatMap((row) => row.map((item) => [item]));
</script>

<template>
  <Layout>
    <div class="art-view">
      <div class="mobilegallery">
        <Gallery :images="MOBILE_IMAGES" />
      </div>
      <div class="desktopgallery">
        <Gallery :images="IMAGES" />
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
