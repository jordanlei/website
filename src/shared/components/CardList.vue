<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const metaParts = (item) => {
  const [period, location] = (item.period || '').split(' · ')
  return [
    { label: period, className: 'record-date' },
    { label: item.organization, className: 'record-org' },
    { label: location, className: 'record-location' },
  ].filter((part) => part.label)
}
</script>

<template>
  <ol class="record-list">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="record"
    >
      <div class="record-head">
        <div class="record-mark">
          <img
            :src="item.image"
            :alt="item.alt || ''"
          >
        </div>
        <div class="record-title">
          <h4
            class="record-eyebrow"
            :aria-label="metaParts(item).map((part) => part.label).join(', ')"
          >
            <span
              v-for="part in metaParts(item)"
              :key="part.className + part.label"
              :class="part.className"
            >
              {{ part.label }}
            </span>
          </h4>
          <h3>{{ item.title }}</h3>
        </div>
      </div>
      <div
        v-if="item.details?.length"
        class="record-details"
      >
        <ul>
          <li
            v-for="detail in item.details"
            :key="detail"
          >
            {{ detail }}
          </li>
        </ul>
      </div>
    </div>
  </ol>
</template>

<style scoped>
.record-list { margin: 0; padding: 0; list-style: none; }.record { display: grid; gap: 1rem; margin: 0 1.1rem var(--card-gap); padding: 1.55rem 1.35rem; background: var(--card-wash); box-shadow: var(--card-shadow-subtle); backdrop-filter: blur(var(--card-blur)); }.record-head { display: grid; grid-template-columns: 5.5rem minmax(0, 1fr); gap: 1rem; align-items: start; }.record-mark { display: flex; width: 5rem; height: 4.5rem; align-items: flex-start; justify-content: flex-start; }.record-mark img { display: block !important; max-width: 100%; max-height: 100%; object-fit: contain; object-position: left top; }.record-eyebrow { display: flex; flex-wrap: wrap; gap: .35rem .6rem; margin: 0 0 .45rem; font-family: var(--mono-font); font-size: .98rem; font-weight: 700; letter-spacing: .045em; line-height: 1.35; text-transform: uppercase; }.record-eyebrow span:not(:last-child)::after { content: "/"; margin-left: .6rem; color: var(--signal-magenta); }.record-date { color: var(--muted); }.record-org { color: var(--color); }.record-location { color: var(--muted); }.record-title h3 { margin-top: 0; margin-bottom: 0; font-size: clamp(1.45rem, 2.1vw, 1.95rem); line-height: 1.1; }.record-details { padding-top: .1rem; }.record-details ul { margin: 0; padding-left: 1.25rem; font-size: 1.14rem; } @media (max-width: 700px) { .record { gap: .85rem; margin-right: 0; margin-left: 0; padding: 1.2rem 1.05rem; }.record-head { grid-template-columns: 4.25rem minmax(0, 1fr); gap: .75rem; }.record-mark { width: 3.75rem; height: 3.5rem; }.record-title h3 { font-size: 1.45rem; }.record-eyebrow { font-size: .9rem; } }
</style>
