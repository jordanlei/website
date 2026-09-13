<script setup>
// Per-neuron scatter: Tree Search R² (y) vs Shallow R² (x), one dot per neuron,
// colored by region, with a dashed y=x identity line. Points above the line are
// better explained by Tree Search. Native rebuild of fig_r2_window_scatter from
// monkey_4iar. Aesthetic + reveal grammar follow PLOT_STANDARDS.md.
//
// Click build:  1 → axes + grid + titles · 2 → y=x line + "Tree Search better"
//               upper-triangle shade + label · 3 → the point cloud
import { computed, ref, onMounted } from 'vue'
import DATA from '../data/fig_r2_window_scatter.json'

const props = defineProps({
  clicks: { type: Number, default: 0 },
  animate: { type: Boolean, default: true },
  heightVh: { type: Number, default: 42 },
  // restrict to one region (drops the legend); null → all three with legend.
  region: { type: String, default: null },
  // autoplay: play the staged reveal (axes → points) on mount, ignoring clicks.
  autoplay: { type: Boolean, default: false },
  // dimmed: gray the point cloud (used when another region column is the active
  // one). The region color cross-fades to neutral gray.
  dimmed: { type: Boolean, default: false },
})

// all regions render in the house teal (per-region hues retired) — the region
// is conveyed by the header/column, not point color.
const HOUSE_TEAL = '#04A2B3'
const REGION_COLOR = { DMPFC: HOUSE_TEAL, DLPFC: HOUSE_TEAL, Caudate: HOUSE_TEAL }
const GRAY = '#94a3b8'
const LEGEND = ['DMPFC', 'DLPFC', 'Caudate']

// autoplay staging: axes → triangle → points, each after the previous finishes.
const autoStage = ref(0)
onMounted(() => {
  if (props.autoplay) {
    autoStage.value = 1
    setTimeout(() => { autoStage.value = 2 }, 700)
    setTimeout(() => { autoStage.value = 3 }, 1300)
  }
})

const showAxes     = computed(() => !props.animate || (props.autoplay ? autoStage.value >= 1 : props.clicks >= 1))
// the y=x line + upper-triangle shade + "Tree Search better" label
const showTriangle = computed(() => !props.animate || (props.autoplay ? autoStage.value >= 2 : props.clicks >= 2))
const showCloud    = computed(() => !props.animate || (props.autoplay ? autoStage.value >= 3 : props.clicks >= 3))

// ── geometry (square plot area). Compact margins leave room for one consistent
//    readable axis system without making labels compete with the data. ──
const S = 1
const W = 700 * S, H = 620 * S
const M = { top: 28 * S, right: 28 * S, bottom: 118 * S, left: 142 * S }
const iw = W - M.left - M.right
const ih = H - M.top - M.bottom

const AX = { min: -0.01, max: 0.42, ticks: [0, 0.2, 0.4] }
const sx = (v) => M.left + ((v - AX.min) / (AX.max - AX.min)) * iw
const sy = (v) => M.top + ih - ((v - AX.min) / (AX.max - AX.min)) * ih

const points = computed(() =>
  DATA.points
    .filter((p) => !props.region || p.region === props.region)
    .map((p) => ({
      cx: sx(p.r2_myopic),
      cy: sy(p.r2_treesearch),
      color: REGION_COLOR[p.region] ?? '#888',
    })))

const tickSlots = computed(() => AX.ticks.map((v) => ({ v, x: sx(v), y: sy(v) })))
const fmtTick = (v) => v.toFixed(1)

// y=x identity across the visible range
const diag = computed(() => ({
  x1: sx(0), y1: sy(0),
  x2: sx(AX.max), y2: sy(AX.max),
}))

// upper triangle (above y=x) — the region where Tree Search R² beats Shallow R².
// vertices: (min,min) → (min,max) → (max,max) in data coords.
const triPts = computed(() => {
  const lo = AX.min, hi = AX.max
  return [
    `${sx(lo)},${sy(lo)}`,
    `${sx(lo)},${sy(hi)}`,
    `${sx(hi)},${sy(hi)}`,
  ].join(' ')
})
// Concise label seated inside the region where Tree Search outperforms the
// matched shallow model.
const triLabel = computed(() => ({
  x: sx(AX.min) + iw * 0.06,
  y: sy(AX.max) + ih * 0.30 - 40,
}))

const dotR = 2.6 * S
const LABEL_LEAD = 0.35
</script>

<template>
  <div class="r2s-wrap">
    <svg
      :viewBox="`0 0 ${W} ${H}`"
      class="r2s-plot"
      :class="{ 'r2s-dim': dimmed }"
      font-family="var(--mono-font)"
    >
      <!-- ══ axes + grid + y=x (click 1) ══ -->
      <g
        v-if="showAxes"
        :class="{ 'r2s-static': !animate }"
      >
        <!-- grid at ticks (both axes) -->
        <g
          v-for="s in tickSlots"
          :key="'gx' + s.v"
        >
          <line
            :x1="s.x"
            :x2="s.x"
            :y1="M.top"
            :y2="M.top + ih"
            class="r2s-grid"
          />
          <line
            :x1="M.left"
            :x2="M.left + iw"
            :y1="s.y"
            :y2="s.y"
            class="r2s-grid"
          />
        </g>

        <!-- spines -->
        <!-- draw from the origin (bottom) upward, matching the horizontal spine -->
        <line
          :x1="M.left"
          :x2="M.left"
          :y1="M.top + ih"
          :y2="M.top"
          class="r2s-spine draw-v"
          :style="{ '--len': ih, 'animation-delay': LABEL_LEAD + 's' }"
        />
        <line
          :x1="M.left"
          :x2="M.left + iw"
          :y1="M.top + ih"
          :y2="M.top + ih"
          class="r2s-spine draw-h"
          :style="{ '--len': iw, 'animation-delay': LABEL_LEAD + 's' }"
        />

        <!-- x ticks -->
        <g
          v-for="s in tickSlots"
          :key="'tx' + s.v"
          class="r2s-pop"
        >
          <line
            :x1="s.x"
            :x2="s.x"
            :y1="M.top + ih"
            :y2="M.top + ih + 12 * S"
            class="r2s-spine"
          />
          <text
            :x="s.x"
            :y="M.top + ih + 38 * S"
            text-anchor="middle"
            class="r2s-tick"
          >{{ fmtTick(s.v) }}</text>
        </g>
        <!-- y ticks -->
        <g
          v-for="s in tickSlots"
          :key="'ty' + s.v"
          class="r2s-pop"
        >
          <line
            :x1="M.left - 12 * S"
            :x2="M.left"
            :y1="s.y"
            :y2="s.y"
            class="r2s-spine"
          />
          <text
            :x="M.left - 26 * S"
            :y="s.y"
            text-anchor="end"
            dominant-baseline="central"
            class="r2s-tick"
          >{{ fmtTick(s.v) }}</text>
        </g>

        <!-- axis titles -->
        <text
          :x="M.left + iw / 2"
          :y="M.top + ih + 84 * S"
          text-anchor="middle"
          class="r2s-axis-title"
        >Shallow R²</text>
        <text
          :x="36 * S"
          :y="M.top + ih / 2"
          text-anchor="middle"
          class="r2s-axis-title"
          :transform="`rotate(-90 ${36 * S} ${M.top + ih / 2})`"
        >Tree Search R²</text>
      </g>

      <!-- ══ upper triangle: "Tree Search better" (click 2) ══ -->
      <g
        v-if="showTriangle"
        class="r2s-tri"
        :class="{ 'r2s-static': !animate }"
      >
        <polygon
          :points="triPts"
          class="r2s-tri-fill"
        />
        <!-- y = x identity along the triangle's hypotenuse -->
        <line
          :x1="diag.x1"
          :y1="diag.y1"
          :x2="diag.x2"
          :y2="diag.y2"
          class="r2s-ref"
        />
        <text
          :x="triLabel.x"
          :y="triLabel.y"
          class="r2s-tri-label"
        >
          Tree Search better
        </text>
      </g>

      <!-- ══ point cloud (click 3) ══ -->
      <g
        v-if="showCloud"
        class="r2s-cloud"
        :class="{ 'r2s-static': !animate }"
      >
        <circle
          v-for="(p, i) in points"
          :key="i"
          :cx="p.cx"
          :cy="p.cy"
          :r="dotR"
          :fill="dimmed ? GRAY : p.color"
          fill-opacity="0.55"
          class="r2s-pt"
        />
      </g>
    </svg>

    <!-- legend below -->
    <div
      v-if="showAxes && !region"
      class="r2s-legend"
    >
      <span
        v-for="r in LEGEND"
        :key="r"
        class="r2s-legend-item"
      >
        <span
          class="r2s-dot"
          :style="{ background: REGION_COLOR[r] }"
        />{{ r }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.r2s-wrap { display: flex; flex-direction: column; align-items: center; }
/* size by HEIGHT only (square, aspect-locked). No max-width clamp: the scatter
   is a fixed size and simply centers in its column — the fixed height is small
   enough that its square width fits even a 1/3-width column. */
.r2s-plot { display: block; width: 100%; height: auto; overflow: visible; }

.r2s-spine { stroke: var(--color); stroke-width: 1.5; }
.r2s-grid  { stroke: var(--rule); stroke-width: 1; }
.r2s-ref   { stroke: var(--subtitle); stroke-width: 1.5; stroke-dasharray: 6 6; }
.r2s-tick  {
  font-size: var(--research-scatter-tick, 24px); fill: var(--subtitle);
  font-family: var(--mono-font);
  font-variant-numeric: tabular-nums;
}
.r2s-axis-title { font-size: var(--research-scatter-axis, 29px); fill: var(--color); }

/* upper triangle "Tree Search better" */
.r2s-tri { animation: r2s-fade 0.5s ease both; }
.r2s-tri-fill { fill: var(--accent-teal, #04A2B3); fill-opacity: 0.07; }
.r2s-tri-label {
  font-size: var(--research-scatter-label, 21px); font-weight: 700; fill: var(--accent-teal, #04A2B3);
  letter-spacing: 0;
}

.r2s-cloud { animation: r2s-fade 0.5s ease both; }
.r2s-pt { transition: fill 0.5s ease; }

/* dimmed (a sibling region column is active): axes gray, whole plot recedes */
.r2s-plot { transition: opacity 0.5s ease; }
.r2s-dim { opacity: 0.28; }
.r2s-dim .r2s-spine { stroke: #94a3b8; }
.r2s-dim .r2s-tick,
.r2s-dim .r2s-axis-title { fill: #94a3b8; }
.r2s-spine, .r2s-tick, .r2s-axis-title { transition: stroke 0.5s ease, fill 0.5s ease; }
@keyframes r2s-fade { from { opacity: 0; } to { opacity: 1; } }
.r2s-pop { animation: r2s-fade 0.25s ease both; }

.draw-h, .draw-v {
  stroke-dasharray: var(--len);
  stroke-dashoffset: var(--len);
  animation: r2s-draw 0.7s ease forwards;
}
@keyframes r2s-draw { to { stroke-dashoffset: 0; } }
/* the diagonal spans √2·range; a generous dash length covers it */
.draw-diag {
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  animation: r2s-draw-diag 0.7s ease forwards;
}
@keyframes r2s-draw-diag { to { stroke-dashoffset: 0; } }

.r2s-static .r2s-cloud, .r2s-static .r2s-pop { animation: none; opacity: 1; }
.r2s-static .draw-h, .r2s-static .draw-v, .r2s-static .draw-diag {
  stroke-dasharray: none; stroke-dashoffset: 0; animation: none;
}

.r2s-legend {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  margin-top: .5rem;
  font-family: var(--mono-font);
  font-size: .82rem;
  color: var(--color);
}
.r2s-legend-item { display: inline-flex; align-items: center; gap: 0.45em; }
.r2s-dot { width: 0.75em; height: 0.75em; border-radius: 50%; display: inline-block; }
</style>
