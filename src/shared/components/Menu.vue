<script setup>
import { computed, onMounted, onUnmounted, ref, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { navigationItems } from '../../content/navigation'
import { socialLinks } from '../../content/profile'

const route = useRoute()

// Home sections, in page order, with the app-bar title and the tab each one lights up.
const homeSections = [
  { id: 'welcome', title: '', tab: 'home' },
  { id: 'about', title: 'About', tab: 'home' },
  { id: 'research', title: 'Research', tab: 'research' },
  { id: 'experience', title: 'Experience', tab: 'work' },
  { id: 'education', title: 'Education', tab: 'work' },
  { id: 'art-preview', title: 'Art', tab: 'art' },
  { id: 'contact', title: 'Say Hello', tab: 'more' },
]

const pageTitles = { research: 'Research Atlas', art: 'Art' }

const tabs = [
  { key: 'home', label: 'Home', to: '/' },
  { key: 'research', label: 'Research', to: '/research' },
  { key: 'work', label: 'Work', to: '/#experience' },
  { key: 'art', label: 'Art', to: '/art' },
]

const sheetLinks = [
  { to: '/#about', label: 'About', note: 'Who I am' },
  { to: '/#education', label: 'Education', note: 'NYU, Penn' },
  { to: '/#contact', label: 'Say Hello', note: 'Email and socials' },
]

const sheetActions = [
  { href: '/files/Resume_JordanLei.pdf', label: 'CV', external: true },
  { href: 'https://scholar.google.com/citations?user=GRnnNBYAAAAJ&hl=en', label: 'Scholar', external: true },
  { href: 'mailto:jordanlei.work@gmail.com', label: 'Email' },
]

const currentSection = ref('welcome')
const scrolled = ref(false)
const sheetOpen = ref(false)
const sheetDrag = ref(0)

const isHome = computed(() => route.name === 'home')

const activeTab = computed(() => {
  if (sheetOpen.value) return 'more'
  if (!isHome.value) return route.name
  return homeSections.find((s) => s.id === currentSection.value)?.tab || 'home'
})

const barTitle = computed(() => {
  if (!isHome.value) return scrolled.value ? pageTitles[route.name] || '' : ''
  return homeSections.find((s) => s.id === currentSection.value)?.title || ''
})

let observer
const observeSections = () => {
  observer?.disconnect()
  if (!isHome.value) return
  // A thin band just under the app bar decides which section is "current".
  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) currentSection.value = entry.target.id
    }
  }, { rootMargin: '-56px 0px -88% 0px' })
  for (const { id } of homeSections) {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  }
}

const onScroll = () => { scrolled.value = window.scrollY > 120 }

const onKey = (event) => { if (event.key === 'Escape') sheetOpen.value = false }

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKey)
  onScroll()
  observeSections()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKey)
  observer?.disconnect()
  document.documentElement.classList.remove('sheet-open')
})

watch(() => route.fullPath, async () => {
  sheetOpen.value = false
  currentSection.value = 'welcome'
  await nextTick()
  observeSections()
})

watch(sheetOpen, (open) => {
  document.documentElement.classList.toggle('sheet-open', open)
  sheetDrag.value = 0
})

// Drag the sheet's grabber down to dismiss, like a native sheet.
let dragStart = null
const onDragStart = (event) => { dragStart = event.touches[0].clientY }
const onDragMove = (event) => {
  if (dragStart === null) return
  sheetDrag.value = Math.max(0, event.touches[0].clientY - dragStart)
}
const onDragEnd = () => {
  if (sheetDrag.value > 80) sheetOpen.value = false
  sheetDrag.value = 0
  dragStart = null
}
</script>

<template>
  <div>
    <div class="menu">
      <router-link
        class="wordmark"
        to="/"
      >
        <span>JL</span>
        <small>Jordan Lei</small>
      </router-link>
      <nav aria-label="Primary navigation">
        <span
          v-for="item in navigationItems"
          :key="item.to"
          class="menuitem"
        >
          <router-link :to="item.to">{{ item.label }}</router-link>
        </span>
      </nav>
    </div>

    <header
      class="app-bar"
      :class="{ 'is-solid': barTitle }"
    >
      <router-link
        class="app-mark"
        to="/"
        aria-label="Home"
      >
        JL
      </router-link>
      <Transition name="title">
        <p
          :key="barTitle"
          class="app-title"
        >
          {{ barTitle }}
        </p>
      </Transition>
      <a
        class="app-action"
        href="mailto:jordanlei.work@gmail.com"
        aria-label="Email Jordan"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
        ><rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2.5"
        /><path d="m4 7 8 6 8-6" /></svg>
      </a>
    </header>

    <nav
      class="tab-bar"
      aria-label="Mobile navigation"
    >
      <router-link
        v-for="tab in tabs"
        :key="tab.key"
        class="tab"
        :class="{ 'is-active': activeTab === tab.key }"
        :to="tab.to"
        :aria-current="activeTab === tab.key ? 'page' : null"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <template v-if="tab.key === 'home'"><path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z" /></template>
          <template v-else-if="tab.key === 'research'"><circle
            cx="12"
            cy="12"
            r="2.2"
          /><circle
            cx="5"
            cy="6"
            r="1.8"
          /><circle
            cx="19"
            cy="6"
            r="1.8"
          /><circle
            cx="6"
            cy="19"
            r="1.8"
          /><circle
            cx="18.5"
            cy="18"
            r="1.8"
          /><path d="M6.4 7.2 10.3 10.6M17.6 7.2l-3.9 3.4M7.4 17.8l3-4.2M17.2 16.8l-3.4-3.2" /></template>
          <template v-else-if="tab.key === 'work'"><rect
            x="3.5"
            y="7"
            width="17"
            height="12.5"
            rx="2"
          /><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3.5 12.5h17" /></template>
          <template v-else><path d="M12 3.5a8.5 8.5 0 1 0 0 17c1.2 0 1.7-.8 1.7-1.6 0-1.3-1-1.6-1-2.6 0-.9.7-1.5 1.7-1.5h2.1a3.9 3.9 0 0 0 4-4C20.5 6.9 16.7 3.5 12 3.5z" /><circle
            cx="7.6"
            cy="11"
            r="1"
          /><circle
            cx="10"
            cy="7.4"
            r="1"
          /><circle
            cx="14.6"
            cy="7.4"
            r="1"
          /></template>
        </svg>
        <span>{{ tab.label }}</span>
      </router-link>
      <button
        type="button"
        class="tab"
        :class="{ 'is-active': activeTab === 'more' }"
        aria-haspopup="dialog"
        :aria-expanded="sheetOpen"
        @click="sheetOpen = !sheetOpen"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
        ><circle
          cx="5.5"
          cy="12"
          r="1.4"
        /><circle
          cx="12"
          cy="12"
          r="1.4"
        /><circle
          cx="18.5"
          cy="12"
          r="1.4"
        /></svg>
        <span>More</span>
      </button>
    </nav>

    <Transition name="sheet">
      <div
        v-if="sheetOpen"
        class="sheet-scrim"
        @click.self="sheetOpen = false"
      >
        <div
          class="sheet"
          role="dialog"
          aria-modal="true"
          aria-label="More"
          :style="sheetDrag ? { transform: `translateY(${sheetDrag}px)`, transition: 'none' } : null"
        >
          <div
            class="sheet-grabber"
            @touchstart.passive="onDragStart"
            @touchmove.passive="onDragMove"
            @touchend="onDragEnd"
          >
            <span />
          </div>
          <div class="sheet-header">
            <div class="sheet-avatar">
              JL
            </div>
            <div>
              <p class="sheet-name">
                Jordan Lei
              </p>
              <p class="sheet-role">
                Postdoc · Columbia Zuckerman Institute
              </p>
            </div>
          </div>
          <div class="sheet-actions">
            <a
              v-for="action in sheetActions"
              :key="action.label"
              :href="action.href"
              :target="action.external ? '_blank' : null"
              :rel="action.external ? 'noopener noreferrer' : null"
            >
              {{ action.label }}
            </a>
          </div>
          <ul class="sheet-list">
            <li
              v-for="link in sheetLinks"
              :key="link.to"
            >
              <router-link
                :to="link.to"
                @click="sheetOpen = false"
              >
                <span>{{ link.label }}</span>
                <small>{{ link.note }}</small>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                ><path d="m9 5 7 7-7 7" /></svg>
              </router-link>
            </li>
          </ul>
          <div class="sheet-socials">
            <a
              v-for="link in socialLinks"
              :key="link.href"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="link.label"
            >
              <img
                :src="link.image"
                alt=""
              >
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1rem 3vw;
  position: fixed;
  width: 100%;
  height: 68px;
  z-index: 1000;
  border-bottom: 1px solid color-mix(in srgb, var(--color), transparent 88%);
  background: color-mix(in srgb, var(--background-color), transparent 12%);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(10px);
}

.wordmark { display: flex; align-items: center; gap: .7rem; color: var(--color); text-decoration: none; }
.wordmark span { display: grid; width: 2rem; height: 2rem; place-items: center; border: 1px solid var(--color); border-radius: 50%; font-family: var(--mono-font); font-size: .7rem; font-weight: 700; letter-spacing: -.08em; }
.wordmark small { font-family: var(--mono-font); font-size: 1rem; font-weight: 600; letter-spacing: .05em; text-transform: uppercase; }
.menu nav { display: flex; gap: clamp(.6rem, 2vw, 2rem); }
.menuitem {
  font-family: var(--mono-font);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;
  text-decoration: none;
}

.menuitem a {
  color: var(--color);
}

.menuitem a:hover { color: var(--signal-magenta); text-decoration: none; }

.app-bar, .tab-bar, .sheet-scrim { display: none; }

svg { fill: none; stroke: currentColor; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }

@media only screen and (max-width: 768px) {
  .menu { display: none; }

  /* Top app bar: transparent over the hero, then a frosted bar whose title
     follows the section under it (the collapsed "large title" pattern). */
  .app-bar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1000;
    display: grid;
    grid-template-columns: 2.75rem minmax(0, 1fr) 2.75rem;
    align-items: center;
    height: calc(var(--app-bar-h) + env(safe-area-inset-top));
    padding: env(safe-area-inset-top) max(.75rem, env(safe-area-inset-right)) 0 max(.75rem, env(safe-area-inset-left));
    border-bottom: .5px solid transparent;
    transition: background .25s ease, border-color .25s ease;
  }
  .app-bar.is-solid {
    border-bottom-color: color-mix(in srgb, var(--color), transparent 86%);
    background: color-mix(in srgb, var(--background-color), transparent 18%);
    backdrop-filter: saturate(1.4) blur(18px);
    -webkit-backdrop-filter: saturate(1.4) blur(18px);
  }
  .app-mark, .app-action {
    display: grid;
    width: 2.75rem;
    height: 2.75rem;
    place-items: center;
    color: var(--color);
    text-decoration: none;
  }
  .app-mark {
    position: relative;
    font-family: var(--mono-font);
    font-size: .74rem;
    font-weight: 800;
    letter-spacing: -.06em;
  }
  .app-mark::before {
    position: absolute;
    width: 2rem;
    height: 2rem;
    border: 1px solid var(--color);
    border-radius: 50%;
    content: "";
  }
  .app-action svg { width: 1.35rem; height: 1.35rem; }
  .app-title {
    grid-column: 2;
    grid-row: 1;
    margin: 0;
    overflow: hidden;
    font-size: 1.02rem;
    font-weight: 600;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .title-enter-active, .title-leave-active { transition: opacity .2s ease, transform .2s ease; }
  .title-enter-from { opacity: 0; transform: translateY(6px); }
  .title-leave-to { opacity: 0; transform: translateY(-6px); }

  /* Bottom tab bar: icon + label, thumb-reachable, respects the home indicator. */
  .tab-bar {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    height: calc(var(--tab-bar-h) + env(safe-area-inset-bottom));
    padding: 0 env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
    border-top: .5px solid color-mix(in srgb, var(--color), transparent 86%);
    background: color-mix(in srgb, var(--background-color), transparent 14%);
    backdrop-filter: saturate(1.4) blur(18px);
    -webkit-backdrop-filter: saturate(1.4) blur(18px);
  }
  .tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .18rem;
    min-width: 0;
    padding: 0;
    border: 0;
    color: var(--muted);
    background: none;
    font: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  .tab svg { width: 1.5rem; height: 1.5rem; transition: transform .2s ease; }
  .tab span {
    font-size: .66rem;
    font-weight: 600;
    letter-spacing: .01em;
    color: inherit;
  }
  .tab.is-active { color: var(--signal-magenta); }
  .tab.is-active svg { stroke-width: 2.1; }
  .tab:active svg { transform: scale(.88); }
  .tab:hover { text-decoration: none; }

  /* Bottom sheet for the less-used destinations. */
  .sheet-scrim {
    position: fixed;
    inset: 0;
    z-index: 1100;
    display: flex;
    align-items: flex-end;
    background: rgba(25, 45, 50, .32);
  }
  .sheet {
    width: 100%;
    padding: 0 1rem calc(1.25rem + env(safe-area-inset-bottom));
    border-radius: 1.25rem 1.25rem 0 0;
    background: var(--background-color);
    box-shadow: 0 -10px 40px rgba(25, 45, 50, .16);
    transition: transform .3s cubic-bezier(.32, .72, 0, 1);
  }
  .sheet-grabber { display: grid; place-items: center; height: 1.6rem; touch-action: none; }
  .sheet-grabber span { width: 2.4rem; height: .3rem; border-radius: 99px; background: var(--rule); }
  .sheet-header { display: flex; align-items: center; gap: .85rem; padding: .25rem .25rem 1rem; }
  .sheet-avatar {
    display: grid;
    flex: none;
    width: 3rem;
    height: 3rem;
    place-items: center;
    border: 1px solid var(--color);
    border-radius: 50%;
    font-family: var(--mono-font);
    font-size: .85rem;
    font-weight: 800;
    letter-spacing: -.06em;
  }
  .sheet-name { margin: 0; font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 700; line-height: 1.1; }
  .sheet-role { margin: .2rem 0 0; color: var(--muted); font-size: .85rem; line-height: 1.3; }
  .sheet-actions { display: grid; grid-template-columns: repeat(3, 1fr); gap: .5rem; margin-bottom: 1rem; }
  .sheet-actions a {
    display: grid;
    min-height: 2.9rem;
    place-items: center;
    border-radius: .8rem;
    color: var(--color);
    background: rgba(255, 253, 248, .9);
    box-shadow: inset 0 0 0 .5px var(--card-border);
    font-size: .9rem;
    font-weight: 600;
    text-decoration: none;
  }
  .sheet-actions a:active { background: var(--hover-bg); }
  .sheet-list { margin: 0 0 1rem; padding: 0; overflow: hidden; border-radius: .9rem; background: rgba(255, 253, 248, .9); box-shadow: inset 0 0 0 .5px var(--card-border); list-style: none; }
  .sheet-list li + li { border-top: .5px solid var(--card-border); }
  .sheet-list a {
    display: grid;
    grid-template-columns: 1fr auto 1rem;
    align-items: center;
    gap: .6rem;
    min-height: 3.1rem;
    padding: 0 .95rem;
    color: var(--color);
    text-decoration: none;
  }
  .sheet-list a:active { background: var(--hover-bg); }
  .sheet-list span { font-size: 1rem; font-weight: 500; }
  .sheet-list small { color: var(--muted); font-size: .85rem; }
  .sheet-list svg { width: 1rem; height: 1rem; color: var(--muted); }
  .sheet-socials { display: flex; justify-content: center; gap: .75rem; }
  .sheet-socials a { display: grid; width: 2.9rem; height: 2.9rem; place-items: center; border-radius: 50%; box-shadow: inset 0 0 0 1px var(--rule); }
  .sheet-socials a:active { background: var(--hover-bg); }
  .sheet-socials img { width: 1.15rem; height: 1.15rem; object-fit: contain; }

  .sheet-enter-active, .sheet-leave-active { transition: background .3s ease; }
  .sheet-enter-active .sheet, .sheet-leave-active .sheet { transition: transform .32s cubic-bezier(.32, .72, 0, 1); }
  .sheet-enter-from, .sheet-leave-to { background: rgba(25, 45, 50, 0); }
  .sheet-enter-from .sheet, .sheet-leave-to .sheet { transform: translateY(100%); }
}
</style>
