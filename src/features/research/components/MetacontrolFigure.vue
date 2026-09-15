<script setup>
const rows = [
  { label: 'Fixed Stop', mean: 0.04747, sem: 0.00228 },
  { label: 'Tree Stats', mean: 0.03439, sem: 0.00187 },
  { label: 'Action Gap', mean: 0.0058, sem: 0.00158 },
]

function x(value) { return 180 + (value / 0.055) * 278 }
</script>

<template>
  <figure class="metacontrol-figure">
    <header>
      <p>Model comparison at λ = 0.005</p>
      <h3>The learned controller had lower regret</h3>
      <span>Each row compares the metacontroller with one stopping rule.</span>
    </header>
    <svg
      viewBox="0 0 500 250"
      role="img"
      aria-label="Paired regret difference at lambda 0.005, baseline minus ours"
    >
      <line
        class="axis"
        x1="180"
        x2="458"
        y1="205"
        y2="205"
      />
      <line
        class="zero"
        x1="180"
        x2="180"
        y1="34"
        y2="188"
      />
      <g
        v-for="(row, index) in rows"
        :key="row.label"
      >
        <text
          class="row-label"
          x="166"
          :y="64 + index * 55"
        >{{ row.label }}</text>
        <line
          class="grid"
          x1="180"
          x2="458"
          :y1="60 + index * 55"
          :y2="60 + index * 55"
        />
        <line
          class="error"
          :x1="x(row.mean - row.sem)"
          :x2="x(row.mean + row.sem)"
          :y1="60 + index * 55"
          :y2="60 + index * 55"
        />
        <circle
          :cx="x(row.mean)"
          :cy="60 + index * 55"
          r="5"
        />
      </g>
      <g
        v-for="tick in [0, .02, .04]"
        :key="tick"
      >
        <line
          class="axis"
          :x1="x(tick)"
          :x2="x(tick)"
          y1="205"
          y2="211"
        />
        <text
          class="tick"
          :x="x(tick)"
          y="227"
        >{{ tick.toFixed(2) }}</text>
      </g>
      <text
        class="axis-label"
        x="319"
        y="246"
      >Paired Δ regret (baseline − ours)</text>
    </svg>
    <figcaption>Mean paired regret difference with SEM.</figcaption>
  </figure>
</template>

<style scoped>
.metacontrol-figure {
  margin: 0;
  padding: var(--research-panel-pad, 1.1rem);
  background: var(--research-panel-bg, rgba(255, 253, 248, .54));
  box-shadow: var(--card-shadow-subtle);
  backdrop-filter: blur(6px);
}

header p {
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

header span {
  display: block;
  margin-top: .5rem;
  color: var(--subtitle);
  font-size: var(--research-panel-note, .94rem);
  line-height: 1.45;
}

svg {
  display: block;
  width: 100%;
  height: auto;
  margin-top: .55rem;
}

.axis {
  stroke: var(--color);
  stroke-width: 1.1;
}

.zero {
  stroke: var(--signal-magenta);
  stroke-width: 1.3;
  stroke-dasharray: 4 4;
}

.grid {
  stroke: var(--rule);
  stroke-width: 1;
}

.error {
  stroke: var(--color);
  stroke-width: 1.8;
  stroke-linecap: round;
}

circle {
  fill: var(--signal-magenta);
  stroke: #fffdf8;
  stroke-width: 2;
}

.row-label,
.tick,
.axis-label {
  fill: var(--subtitle);
  font-family: var(--mono-font);
  font-size: var(--research-axis, 13px);
  font-weight: 700;
  text-anchor: middle;
}

.row-label {
  fill: var(--color);
  font-size: var(--research-plot-label, 14px);
  text-anchor: end;
}

.axis-label {
  font-size: var(--research-axis, 13px);
}

figcaption {
  margin-top: .25rem;
  color: var(--subtitle);
  font-size: var(--research-caption, .86rem);
  line-height: 1.4;
}
</style>
