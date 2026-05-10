<script setup>
const parallaxLayers = [
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
];

const items = {
  name: "welcome-banner",
  background: "var(--background-color)",
  backgrounddepth: "-0.3",
  layers: parallaxLayers,
};

defineExpose({ items });
</script>

<template>
  <section id="welcome" style="height: 100vh">
    <div class="header">
      <h1 class="headerTitle">Jordan Lei</h1>
      <h2 class="headerSubtitle">
        Neuroscience • Machine Learning • Art
      </h2>
    </div>
  </section>
</template>

<style scoped>
.header {
  position: absolute;
  top: 52%; /* 2em down from center */
  left: 10%; /* 2em from left */
  transform: translateY(-50%);
  text-align: left; /* Left justified */
  z-index: 10;
  width: auto;
}

.headerTitle {
  font-family: 'Playfair Display', serif;
  font-size: 8rem;
  margin: 0;
  color: var(--color);
  line-height: 1.0;
}

.headerSubtitle {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; /* Sans-serif */
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--subtitle);
  margin-left: 50px;
  margin-top: -8px;
  letter-spacing: 0.05em;
}

@media only screen and (max-width: 768px) {
  .header {
    left: 8%;
  }
  .headerTitle {
    font-size: 4rem;
  }
  .headerSubtitle {
    font-size: 1.4rem;
  }
}
</style>
