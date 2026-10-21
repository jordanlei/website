<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const metaParts = (item) => {
  const [period, location] = (item.period || '').split(' · ')
  return [period, location].filter(Boolean)
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
        <div class="record-heading">
          <p class="record-meta">
            <span
              v-for="part in metaParts(item)"
              :key="part"
            >{{ part }}</span>
          </p>
          <h3>{{ item.title }}</h3>
          <p class="record-org">
            {{ item.organization }}
          </p>
        </div>
      </div>
      <ul
        v-if="item.details?.length"
        class="record-details"
      >
        <li
          v-for="detail in item.details"
          :key="typeof detail === 'string' ? detail : detail.text"
        >
          <a
            v-if="detail.href"
            :href="detail.href"
          >{{ detail.text }}</a>
          <template v-else>
            {{ detail }}
          </template>
        </li>
      </ul>
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
        >{{ action.label }}</a>
      </div>
    </li>
  </ol>
</template>

<style scoped>
.record-list { margin: 0; padding: 0 clamp(1rem, 2vw, 1.5rem); list-style: none; border-top: 1px solid var(--rule); border-bottom: 1px solid var(--rule); background: rgba(247, 245, 239, .88); backdrop-filter: blur(12px); }
.record { padding: 1.65rem 0 1.75rem; border-bottom: 1px solid var(--rule); }
.record:last-child { border-bottom: 0; }
.record-head { display: grid; grid-template-columns: 4.5rem minmax(0, 1fr); gap: 1.3rem; align-items: start; }
.record-mark { width: 4.5rem; height: 4rem; padding-top: .15rem; }
.record-mark img { display: block !important; max-width: 100%; max-height: 100%; object-fit: contain; object-position: left top; }
.record-heading { min-width: 0; }
.record-meta { display: flex; flex-wrap: wrap; gap: .2rem .75rem; margin: 0 0 .3rem; color: var(--muted); font-family: var(--mono-font); font-size: .76rem; font-weight: 700; letter-spacing: .045em; line-height: 1.4; text-transform: uppercase; }
.record-meta span { color: inherit; }
.record-meta span + span::before { content: '/'; margin-right: .75rem; color: var(--signal-magenta); }
.record-heading h3 { margin: 0; font-size: clamp(1.45rem, 2.1vw, 1.85rem); line-height: 1.13; }
.record-org { margin: .35rem 0 0; color: var(--primary-blue); font-size: 1rem; font-weight: 600; line-height: 1.4; }
.record-details { margin: .9rem 0 0 5.8rem; padding: 0; list-style: none; font-size: 1rem; line-height: 1.55; }
.record-details li + li { margin-top: .38rem; }
.record-details a { color: var(--primary-blue); text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: .15em; }
.record-details a:hover { color: var(--signal-magenta); }
.record-actions { display: flex; flex-wrap: wrap; gap: .6rem; margin: 1rem 0 0 5.8rem; }
.record-action { display: inline-flex; min-height: 38px; align-items: center; border-bottom: 1px solid currentColor; color: var(--primary-blue); font-family: var(--mono-font); font-size: .76rem; font-weight: 700; letter-spacing: .045em; text-decoration: none; text-transform: uppercase; }
.record-action::after { content: '↗'; margin-left: .45rem; }
.record-action:hover { color: var(--signal-magenta); text-decoration: none; }
@media (max-width: 700px) {
  .record { padding: 1.35rem 0 1.45rem; }
  .record-head { grid-template-columns: 2.75rem minmax(0, 1fr); gap: .8rem; }
  .record-mark { width: 2.75rem; height: 2.75rem; }
  .record-meta { flex-direction: column; gap: 0; font-size: .68rem; }
  .record-meta span + span::before { content: none; }
  .record-heading h3 { font-size: 1.3rem; }
  .record-org { font-size: .9rem; }
  .record-details { margin: .85rem 0 0; font-size: .95rem; line-height: 1.55; }
  .record-details li + li { margin-top: .45rem; }
  .record-actions { margin: .7rem 0 0; }
  .record-action { min-height: 44px; font-size: .72rem; }
}
</style>
