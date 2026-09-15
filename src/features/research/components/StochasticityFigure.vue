<script setup>
import { computed, ref } from 'vue'
import TreasureGameCanvas from './TreasureGameCanvas.vue'

const conditions = [
  {
    name: 'Reliability',
    description: 'Some chests are mystery chests: the number shown may not be the reward received.',
    taskHeader: '1 in 4 (25%) chance a chest is a mystery chest',
    taskInstruction: 'Look for the blue mystery chest: it may pay a different reward from the number written on it.',
    taskProps: { pUnreliable: 0.25 },
    x: [0, 25, 50, 75, 100],
    mean: [0.13472953584268846, -0.1841493426040466, -0.42697261601505815, -0.7817117005991102, -1.8871668500042278],
    sem: [0.12872564629952418, 0.12142138469860704, 0.13511088229953888, 0.13024120504682396, 0.14403206300719623],
  },
  {
    name: 'Volatility',
    description: 'Rewards beyond the current step can change before a participant reaches them.',
    taskHeader: '1 in 4 (25%) chance future rewards change',
    taskInstruction: 'Watch unopened chests farther down the tree: their displayed rewards can change before they are reached.',
    taskProps: { pVolatile: 0.25 },
    x: [0, 25, 50, 75, 100],
    mean: [0.3495697530364229, -0.1610480375278568, -0.5625715320759096, -1.1041067953910941, -1.3805648419645982],
    sem: [0.13287910828051364, 0.1351157446551857, 0.15420967503121613, 0.1519884998736038, 0.1924995179510751],
  },
  {
    name: 'Controllability',
    description: 'A move can occasionally lead to a different branch than the participant intended.',
    taskHeader: '1 in 4 (25%) chance a move changes branch',
    taskInstruction: 'Watch the route after each move: an intended left or right choice can carry the player to the other branch.',
    taskProps: { pTransition: 0.25 },
    x: [0, 12.5, 25, 37.5, 50],
    mean: [0.4668898334620245, -0.10318316513247013, -0.47908635112629805, -0.8730422385871652, -1.6217984611325869],
    sem: [0.11955699549309902, 0.13726497927389847, 0.14953120134655232, 0.16253545771983152, 0.14818191206869835],
  },
]

const activeIndex = ref(0)
const active = computed(() => conditions[activeIndex.value])
const yDomain = [-2.5, 1]
const yTicks = [-2, -1, 0, 1]
const plot = { left: 112, right: 388, top: 42, bottom: 252 }
const plotWidth = plot.right - plot.left
const plotHeight = plot.bottom - plot.top
const linePath = computed(() => active.value.mean.map((value, index) => `${index ? 'L' : 'M'}${x(index)} ${y(value)}`).join(' '))
const x = (index) => plot.left + (index / (active.value.mean.length - 1)) * plotWidth
const y = (value) => plot.top + ((yDomain[1] - value) / (yDomain[1] - yDomain[0])) * plotHeight
</script>

<template>
  <div class="stochasticity-figure">
    <section class="task-demo">
      <div class="task-head">
        <div>
          <p>Watch the task</p>
          <h3>Changing treasure tree</h3>
        </div>
        <span>Autoplay demo</span>
      </div>
      <div
        class="condition-tabs"
        aria-label="Stochasticity condition"
      >
        <button
          v-for="(condition, index) in conditions"
          :key="condition.name"
          :class="{ active: activeIndex === index }"
          type="button"
          @click="activeIndex = index"
        >
          {{ condition.name }}
        </button>
      </div>
      <p class="task-instruction">
        {{ active.taskInstruction }}
      </p>
      <div class="game-frame">
        <TreasureGameCanvas
          :key="active.name"
          v-bind="active.taskProps"
          :header="active.taskHeader"
          :show-controls="false"
        />
      </div>
    </section>

    <figure class="result-figure">
      <header>
        <p>Policy compression</p>
        <h3>Value sensitivity (log β) declined with stochasticity</h3>
      </header>
      <p class="condition-description">
        {{ active.description }}
      </p>
      <svg
        viewBox="0 0 500 330"
        role="img"
        :aria-label="`${active.name}: fitted log beta by stochasticity level`"
      >
        <g class="grid"><line
          v-for="tick in yTicks"
          :key="tick"
          :x1="plot.left"
          :x2="plot.right"
          :y1="y(tick)"
          :y2="y(tick)"
        /></g>
        <line
          class="axis"
          :x1="plot.left"
          :x2="plot.right"
          :y1="plot.bottom"
          :y2="plot.bottom"
        /><line
          class="axis"
          :x1="plot.left"
          :x2="plot.left"
          :y1="plot.top"
          :y2="plot.bottom"
        />
        <text
          v-for="tick in yTicks"
          :key="`tick-${tick}`"
          class="tick"
          :x="plot.left - 10"
          :y="y(tick) + 3"
        >{{ tick }}</text>
        <g
          v-for="(value, index) in active.mean"
          :key="index"
        ><line
          class="error"
          :x1="x(index)"
          :x2="x(index)"
          :y1="y(value - active.sem[index])"
          :y2="y(value + active.sem[index])"
        /><circle
          :cx="x(index)"
          :cy="y(value)"
          r="4.4"
        /></g>
        <path
          :d="linePath"
          class="series"
        />
        <text
          class="x-tick x-tick--start"
          :x="plot.left"
          :y="plot.bottom + 18"
        >0</text><text
          class="x-tick x-tick--end"
          :x="plot.right"
          :y="plot.bottom + 18"
        >{{ active.x.at(-1) }}</text>
        <text
          class="axis-label"
          x="250"
          y="308"
        >Stochasticity (%)</text><text
          class="axis-label"
          transform="translate(55 147) rotate(-90)"
        >Log β</text>
      </svg>
      <figcaption>Policy-compression fit: group means with SEM.</figcaption>
    </figure>
  </div>
</template>

<style scoped>
.stochasticity-figure {
  display: grid;
  gap: 1rem;
  margin: 0;
  padding: var(--research-panel-pad, 1.1rem);
  background: var(--research-panel-bg, rgba(255, 253, 248, .54));
  box-shadow: var(--card-shadow-subtle);
  backdrop-filter: blur(6px);
}

.task-demo,
.result-figure {
  margin: 0;
}

.result-figure {
  padding-top: 1rem;
  border-top: 1px solid var(--rule);
}

.task-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: .8rem;
}

.task-head p,
header p {
  margin: 0 0 .25rem;
  color: var(--signal-magenta);
  font-family: var(--mono-font);
  font-size: var(--research-meta, .74rem);
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
}

.task-head h3,
header h3 {
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-size: var(--research-panel-title, 1.28rem);
  font-weight: 500;
  line-height: 1.16;
}

.task-head > span {
  flex: 0 0 auto;
  color: var(--subtitle);
  font-family: var(--mono-font);
  font-size: var(--research-meta, .74rem);
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
}

.task-instruction,
.condition-description {
  margin: .55rem 0 .85rem;
  color: var(--subtitle);
  font-size: var(--research-panel-note, .94rem);
  line-height: 1.45;
}

.game-frame {
  height: 30rem;
}

.condition-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: .35rem;
  margin-top: .75rem;
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

svg {
  display: block;
  width: 100%;
  height: auto;
  margin-top: .15rem;
  overflow: visible;
}

.grid line {
  stroke: var(--rule);
  stroke-width: 1;
}

.axis {
  stroke: var(--color);
  stroke-width: 1.1;
}

.error {
  stroke: var(--signal-magenta);
  stroke-width: 1.6;
  stroke-linecap: round;
}

.series {
  fill: none;
  stroke: var(--signal-magenta);
  stroke-width: 2.3;
  stroke-linecap: round;
  stroke-linejoin: round;
}

circle {
  fill: var(--signal-magenta);
  stroke: #fffdf8;
  stroke-width: 1.7;
}

.tick,
.axis-label,
.x-tick {
  fill: var(--subtitle);
  font-family: var(--mono-font);
  font-size: var(--research-axis, 13px);
  font-weight: 700;
  text-anchor: end;
}

.axis-label {
  font-size: var(--research-axis-title, 14px);
  text-anchor: middle;
}

.x-tick {
  text-anchor: middle;
}

.x-tick--start {
  text-anchor: start;
}

.x-tick--end {
  text-anchor: end;
}

figcaption {
  margin-top: .2rem;
  color: var(--subtitle);
  font-size: var(--research-caption, .86rem);
  line-height: 1.4;
}

@media (max-width: 520px) {
  .game-frame {
    height: 21rem;
  }

  .task-head {
    align-items: flex-start;
  }
}
</style>
