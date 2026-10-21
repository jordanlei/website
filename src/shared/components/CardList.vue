<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const metaParts = (item) => {
  return [
    { label: item.organization, className: 'record-org' },
    { label: item.period, className: 'record-date' },
  ].filter((part) => part.label)
}
</script>

<template>
  <ol class="record-list">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="record"
    >
      <div class="record-head">
        <div
          v-if="item.image"
          class="record-mark"
        >
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
            :key="typeof detail === 'string' ? detail : detail.text"
          >
            <a
              v-if="detail.href"
              :href="detail.href"
            >
              {{ detail.text }}
            </a>
            <template v-else>
              {{ detail }}
            </template>
          </li>
        </ul>
      </div>
      <div
        v-if="item.actions?.length"
        class="record-actions"
      >
        <a
          v-for="action in item.actions"
          :key="action.label"
          class="record-action"
          :href="action.href"
          :download="action.download || null"
          :target="action.download ? null : '_blank'"
          :rel="action.download ? null : 'noopener noreferrer'"
        >
          {{ action.label }}
        </a>
      </div>
    </li>
  </ol>
</template>

<style scoped>
.record-list { margin: 0; padding: 0; list-style: none; }.record { display: grid; gap: 1rem; margin: 0 1.1rem var(--card-gap); padding: 1.55rem 1.35rem; background: var(--card-wash); box-shadow: var(--card-shadow-subtle); backdrop-filter: blur(var(--card-blur)); }.record-head { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 1rem; align-items: start; }.record-mark { display: flex; width: 5rem; height: 4.5rem; align-items: flex-start; justify-content: flex-start; }.record-mark img { display: block !important; max-width: 100%; max-height: 100%; object-fit: contain; object-position: left top; }.record-eyebrow { display: flex; flex-wrap: wrap; gap: .35rem .6rem; margin: 0 0 .45rem; font-family: var(--mono-font); font-size: .98rem; font-weight: 700; letter-spacing: .045em; line-height: 1.35; text-transform: uppercase; }.record-eyebrow span:not(:last-child)::after { content: "/"; margin-left: .6rem; color: var(--signal-magenta); }.record-date { color: var(--muted); }.record-org { color: var(--color); }.record-location { color: var(--muted); }.record-title h3 { margin-top: 0; margin-bottom: 0; font-size: clamp(1.45rem, 2.1vw, 1.95rem); line-height: 1.1; }.record-details { padding-top: .1rem; }.record-details ul { margin: 0; padding-left: 1.25rem; font-size: 1.14rem; }.record-details a { color: var(--color); text-decoration-thickness: 1px; text-underline-offset: .14em; }.record-details a:hover { color: var(--signal-magenta); }.record-actions { display: flex; flex-wrap: wrap; gap: .55rem; padding-top: .1rem; }.record-action { display: inline-flex; width: fit-content; align-items: center; justify-content: center; border: 1px solid color-mix(in srgb, var(--color) 22%, transparent); padding: .45rem .7rem; color: var(--color); font-family: var(--mono-font); font-size: .78rem; font-weight: 700; letter-spacing: .06em; line-height: 1; text-decoration: none; text-transform: uppercase; transition: border-color .18s ease, color .18s ease, background .18s ease; }.record-action:hover { border-color: color-mix(in srgb, var(--signal-magenta) 48%, transparent); background: color-mix(in srgb, var(--signal-magenta) 8%, transparent); color: var(--signal-magenta); } @media (max-width: 700px) { .record { gap: .85rem; margin-right: 0; margin-left: 0; padding: 1.2rem 1.1rem; border-radius: var(--m-radius); }.record-action { min-height: 44px; padding: 0 1rem; border-radius: 999px; }.record-head { grid-template-columns: auto minmax(0, 1fr); gap: .75rem; }.record-mark { width: 2.75rem; height: 2.75rem; }.record-title h3 { font-size: 1.25rem; line-height: 1.15; }.record-eyebrow { gap: .2rem .45rem; margin-bottom: .35rem; font-size: .7rem; letter-spacing: .04em; }.record-eyebrow span:not(:last-child)::after { margin-left: .45rem; }.record-details ul { padding-left: 1.1rem; font-size: 1rem; line-height: 1.5; }.record-details li + li { margin-top: .35rem; }.record-action { font-size: .74rem; } }
.record-details ul { padding-left: 0; list-style: none; }
.record-details li { position: relative; padding-left: 1.2rem; }
.record-details li::before { position: absolute; top: .78em; left: 0; width: .62rem; height: 1px; background: var(--signal-magenta); content: ''; }
.record-details li + li { margin-top: .45rem; }
.record-details a { color: var(--primary-blue); text-decoration: underline; }
</style>
