<script setup>
import { ref } from 'vue'
import NeuralScatter from './NeuralScatter.vue'

const regions = ['DMPFC', 'DLPFC', 'Caudate']
const activeRegion = ref('DMPFC')
</script>

<template>
  <figure class="neural-figure">
    <header>
      <p>Neural recording session</p>
      <h3>Four-in-a-Row with simultaneous neural recording</h3>
    </header>
    <section class="recording">
      <video
        controls
        preload="metadata"
        playsinline
      >
        <source
          src="/videos/research/4IARwithneurons.mp4"
          type="video/mp4"
        >
        Your browser does not support embedded video.
      </video>
    </section>
    <div class="plot-head">
      <p>Neural model comparison</p>
      <h3>Tree search explains more neural variance</h3>
      <span>Each dot is one neuron; points above the diagonal favor Tree Search.</span>
    </div>
    <div
      class="region-tabs"
      aria-label="Brain area"
    >
      <button
        v-for="region in regions"
        :key="region"
        :class="{ active: activeRegion === region }"
        type="button"
        @click="activeRegion = region"
      >
        {{ region }}
      </button>
    </div>
    <NeuralScatter
      :region="activeRegion"
      :animate="false"
    />
    <figcaption>Per-neuron firing-rate fits after the computer’s move.</figcaption>
  </figure>
</template>

<style scoped>
.neural-figure {
  margin: 0;
  padding: var(--research-panel-pad, 1.1rem);
  background: var(--research-panel-bg, rgba(255, 253, 248, .54));
  box-shadow: var(--card-shadow-subtle);
  backdrop-filter: blur(6px);
}

header p,
.plot-head p {
  margin: 0 0 .25rem;
  color: var(--signal-magenta);
  font-family: var(--mono-font);
  font-size: var(--research-meta, .74rem);
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
}

header h3 {
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-size: var(--research-panel-title, 1.28rem);
  font-weight: 500;
  line-height: 1.16;
}

header span,
.plot-head span {
  display: block;
  margin-top: .5rem;
  color: var(--subtitle);
  font-size: var(--research-panel-note, .94rem);
  line-height: 1.45;
}

.plot-head {
  margin-top: 1rem;
  padding-top: .9rem;
  border-top: 1px solid var(--rule);
}

.plot-head h3 {
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-size: var(--research-panel-title, 1.28rem);
  font-weight: 500;
  line-height: 1.16;
}

.region-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: .35rem;
  margin: 1rem 0 .15rem;
}

button {
  padding: .38rem .56rem;
  border: 1px solid var(--rule);
  border-radius: 0;
  background: rgba(255, 253, 248, .82);
  color: var(--color);
  font-family: var(--mono-font);
  font-size: var(--research-meta, .74rem);
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
  cursor: pointer;
}

button.active {
  border-color: var(--signal-magenta);
  background: var(--signal-magenta);
  color: #fffdf8;
}

figcaption {
  margin-top: .35rem;
  color: var(--subtitle);
  font-size: var(--research-caption, .86rem);
  line-height: 1.4;
}

.recording {
  margin-top: .65rem;
}

.recording video {
  display: block;
  width: 100%;
  margin-top: .45rem;
  background: var(--color);
}
</style>
