<script setup>
import Layout from '../components/Layout.vue';
import Welcome from '../sections/Welcome.vue';
import About from '../sections/About.vue';
import Research from '../sections/Research.vue';
import Experience from '../sections/Experience.vue';
import Education from '../sections/Education.vue';
import Contact from '../sections/Contact.vue';
import Parallax from '../components/Parallax.vue';

// The welcome component has the items data needed for parallax
import { ref } from 'vue';

const welcomeRef = ref(null);
const parallaxItems = {
  name: "welcome-banner",
  background: "var(--background-color)",
  backgrounddepth: "-0.3",
  layers: [
    {
      image: "/images/profile-3.png",
      ydepth: "-1.0",
      xdepth: "-0.75",
      name: "screen wlayer1",
    },
    {
      image: "/images/profile-2.png",
      ydepth: "-1.0",
      xdepth: "0.35",
      name: "screen wlayer2",
    },
    {
      image: "/images/profile-1.png",
      ydepth: "-1.0",
      xdepth: "0.85",
      name: "screen wlayer3",
    },
  ],
};
</script>

<template>
  <Layout home>
    <Parallax :items="parallaxItems" />
    <Welcome ref="welcomeRef" />
    <About />
    <Research />
    <Experience />
    <Education />
    <Contact />
  </Layout>
</template>
