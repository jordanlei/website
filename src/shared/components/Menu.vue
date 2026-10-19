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
  { id: 'contact', title: 'Say Hello', tab: 'home' },
]

const pageTitles = { research: 'Research Atlas', art: 'Art' }

const circle = (cx, cy, r) => `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`

const icons = {
  home: ['M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z'],
  about: [circle(12, 8.5, 3.6), 'M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5'],
  research: [circle(12, 12, 2.2), circle(5, 6, 1.8), circle(19, 6, 1.8), circle(6, 19, 1.8), circle(18.5, 18, 1.8), 'M6.4 7.2 10.3 10.6M17.6 7.2l-3.9 3.4M7.4 17.8l3-4.2M17.2 16.8l-3.4-3.2'],
  work: ['M5.5 7h13a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z', 'M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3.5 12.5h17'],
  education: ['M2.5 9 12 4.5 21.5 9 12 13.5z', 'M6.5 11.2v4.3c1.5 1.5 3.4 2.2 5.5 2.2s4-.7 5.5-2.2v-4.3M21.5 9v5'],
  art: ['M12 3.5a8.5 8.5 0 1 0 0 17c1.2 0 1.7-.8 1.7-1.6 0-1.3-1-1.6-1-2.6 0-.9.7-1.5 1.7-1.5h2.1a3.9 3.9 0 0 0 4-4C20.5 6.9 16.7 3.5 12 3.5z', circle(7.6, 11, 1), circle(10, 7.4, 1), circle(14.6, 7.4, 1)],
  hello: ['M4 5.5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-4.5 3.5v-3.5H4a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1z', 'M8 11.5h.01M12 11.5h.01M16 11.5h.01'],
  menu: ['M4 7h16M4 12h16M4 17h16'],
  mail: ['M5.5 5h13A2.5 2.5 0 0 1 21 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5v-9A2.5 2.5 0 0 1 5.5 5z', 'm4 7 8 6 8-6'],
  chevron: ['m9 5 7 7-7 7'],
  close: ['M6 6l12 12M18 6 6 18'],
}

const tabs = [
  { key: 'home', label: 'Home', to: '/' },
  { key: 'research', label: 'Research', to: '/research' },
  { key: 'work', label: 'Work', to: '/#experience' },
  { key: 'art', label: 'Art', to: '/art' },
]

const menuLinks = [
  { to: '/', label: 'Home', icon: 'home', match: ['welcome'] },
  { to: '/#about', label: 'About', icon: 'about', match: ['about'] },
  { to: '/research', label: 'Research Atlas', icon: 'research', match: ['research', 'page:research'] },
  { to: '/#experience', label: 'Experience', icon: 'work', match: ['experience'] },
  { to: '/#education', label: 'Education', icon: 'education', match: ['education'] },
  { to: '/art', label: 'Art Archive', icon: 'art', match: ['art-preview', 'page:art'] },
  { to: '/#contact', label: 'Say Hello', icon: 'hello', match: ['contact'] },
]

const menuActions = [
  { href: '/files/Resume_JordanLei.pdf', label: 'CV', external: true },
  { href: 'https://scholar.google.com/citations?user=GRnnNBYAAAAJ&hl=en', label: 'Scholar', external: true },
  { href: 'mailto:jordanlei.work@gmail.com', label: 'Email' },
]

const currentSection = ref('welcome')
const scrolled = ref(false)
const sheetOpen = ref(false)
const sheetDrag = ref(0)

const isHome = computed(() => route.name === 'home')
const here = computed(() => (isHome.value ? currentSection.value : `page:${route.name}`))

const activeTab = computed(() => {
  if (sheetOpen.value) return 'menu'
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
        ><path
          v-for="d in icons.mail"
          :key="d"
          :d="d"
        /></svg>
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
        ><path
          v-for="d in icons[tab.key]"
          :key="d"
          :d="d"
        /></svg>
        <span>{{ tab.label }}</span>
      </router-link>
      <button
        type="button"
        class="tab"
        :class="{ 'is-active': activeTab === 'menu' }"
        aria-haspopup="dialog"
        :aria-expanded="sheetOpen"
        @click="sheetOpen = !sheetOpen"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
        ><path
          v-for="d in icons.menu"
          :key="d"
          :d="d"
        /></svg>
        <span>Menu</span>
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
          aria-labelledby="sheet-title"
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
            <h2 id="sheet-title">
              Menu
            </h2>
            <button
              type="button"
              class="sheet-close"
              aria-label="Close menu"
              @click="sheetOpen = false"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              ><path
                v-for="d in icons.close"
                :key="d"
                :d="d"
              /></svg>
            </button>
          </div>
          <ul class="sheet-list">
            <li
              v-for="link in menuLinks"
              :key="link.to"
            >
              <router-link
                :to="link.to"
                :class="{ 'is-here': link.match.includes(here) }"
                :aria-current="link.match.includes(here) ? 'location' : null"
                @click="sheetOpen = false"
              >
                <span class="sheet-icon">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  ><path
                    v-for="d in icons[link.icon]"
                    :key="d"
                    :d="d"
                  /></svg>
                </span>
                <span class="sheet-label">{{ link.label }}</span>
                <small v-if="link.match.includes(here)">You're here</small>
                <svg
                  class="sheet-chevron"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                ><path
                  v-for="d in icons.chevron"
                  :key="d"
                  :d="d"
                /></svg>
              </router-link>
            </li>
          </ul>
          <div class="sheet-actions">
            <a
              v-for="action in menuActions"
              :key="action.label"
              :href="action.href"
              :target="action.external ? '_blank' : null"
              :rel="action.external ? 'noopener noreferrer' : null"
            >
              {{ action.label }}
            </a>
          </div>
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
/* The global `* { color }` rule would otherwise pin icons to ink; follow the parent instead. */
svg, svg path { color: inherit; }

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

  /* Floating tab bar: a light frosted capsule in the page's own palette, lifted
     off the page by a hairline and shadow. The active tab carries an ink pill. */
  .tab-bar {
    position: fixed;
    right: max(.75rem, env(safe-area-inset-right));
    bottom: max(.75rem, env(safe-area-inset-bottom));
    left: max(.75rem, env(safe-area-inset-left));
    z-index: 1000;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: .2rem;
    height: var(--tab-bar-h);
    padding: .35rem;
    border-radius: 1.6rem;
    border: 1px solid color-mix(in srgb, var(--color), transparent 84%);
    background: rgba(255, 253, 248, .9);
    box-shadow: 0 10px 28px rgba(25, 45, 50, .16), 0 2px 6px rgba(25, 45, 50, .08);
    backdrop-filter: saturate(1.6) blur(20px);
    -webkit-backdrop-filter: saturate(1.6) blur(20px);
  }
  .tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .12rem;
    min-width: 0;
    padding: 0;
    border: 0;
    border-radius: 1.25rem;
    color: var(--subtitle);
    background: none;
    font: inherit;
    text-decoration: none;
    cursor: pointer;
    transition: background .2s ease, color .2s ease;
  }
  .tab svg { width: 1.4rem; height: 1.4rem; stroke-width: 1.9; transition: transform .2s ease; }
  .tab span {
    font-size: .72rem;
    font-weight: 600;
    letter-spacing: .01em;
    color: inherit;
  }
  .tab.is-active { color: var(--background-color); background: var(--color); }
  .tab.is-active svg { stroke-width: 2.1; }
  .tab:active svg { transform: scale(.86); }
  .tab:hover { text-decoration: none; }

  /* Menu sheet: every destination as a grouped list, then quick actions. */
  .sheet-scrim {
    position: fixed;
    inset: 0;
    z-index: 1100;
    display: flex;
    align-items: flex-end;
    background: rgba(25, 45, 50, .42);
  }
  .sheet {
    width: 100%;
    max-height: 92svh;
    overflow-y: auto;
    overscroll-behavior: contain;
    padding: 0 1rem calc(1rem + env(safe-area-inset-bottom));
    border-radius: 1.5rem 1.5rem 0 0;
    background: var(--paper-deep);
    box-shadow: 0 -10px 40px rgba(25, 45, 50, .2);
    transition: transform .3s cubic-bezier(.32, .72, 0, 1);
  }
  .sheet-grabber { display: grid; place-items: center; height: 1.4rem; touch-action: none; }
  .sheet-grabber span { width: 2.4rem; height: .3rem; border-radius: 99px; background: rgba(25, 45, 50, .25); }
  .sheet-header { display: flex; align-items: center; justify-content: space-between; padding: 0 .15rem .75rem; }
  .sheet-header h2 { margin: 0; font-size: 1.9rem; line-height: 1; letter-spacing: -.02em; }
  .sheet-close { display: grid; width: 2.25rem; height: 2.25rem; place-items: center; padding: 0; border: 0; border-radius: 50%; color: var(--color); background: rgba(25, 45, 50, .08); cursor: pointer; }
  .sheet-close svg { width: 1.05rem; height: 1.05rem; stroke-width: 2.2; }
  .sheet-list { margin: 0 0 .9rem; padding: 0; overflow: hidden; border-radius: 1rem; background: #fffdf8; list-style: none; }
  .sheet-list li + li a::before { position: absolute; top: 0; right: 0; left: 3.6rem; border-top: .5px solid var(--card-border); content: ""; }
  .sheet-list a {
    position: relative;
    display: grid;
    grid-template-columns: 2.1rem 1fr auto 1rem;
    align-items: center;
    gap: .75rem;
    min-height: 3.2rem;
    padding: 0 .95rem 0 .75rem;
    color: var(--color);
    text-decoration: none;
  }
  .sheet-list a:active { background: var(--hover-bg); }
  .sheet-icon { display: grid; width: 2.1rem; height: 2.1rem; place-items: center; border-radius: .6rem; color: var(--color); background: rgba(25, 45, 50, .07); }
  .sheet-icon svg { width: 1.2rem; height: 1.2rem; }
  .sheet-label { font-size: 1.02rem; font-weight: 500; }
  .sheet-list small { color: var(--signal-magenta); font-size: .78rem; font-weight: 600; }
  .sheet-chevron { width: 1rem; height: 1rem; color: var(--muted); }
  .sheet-list a.is-here .sheet-icon { color: #fffdf8; background: var(--signal-magenta); }
  .sheet-list a.is-here .sheet-label { font-weight: 700; }
  .sheet-actions { display: grid; grid-template-columns: repeat(3, 1fr); gap: .5rem; margin-bottom: .9rem; }
  .sheet-actions a {
    display: grid;
    min-height: 2.9rem;
    place-items: center;
    border-radius: .9rem;
    color: #f7f5ef;
    background: var(--color);
    font-size: .92rem;
    font-weight: 600;
    text-decoration: none;
  }
  .sheet-actions a:active { opacity: .8; }
  .sheet-socials { display: flex; justify-content: center; gap: .75rem; }
  .sheet-socials a { display: grid; width: 2.75rem; height: 2.75rem; place-items: center; border-radius: 50%; background: #fffdf8; }
  .sheet-socials a:active { background: var(--hover-bg); }
  .sheet-socials img { width: 1.1rem; height: 1.1rem; object-fit: contain; }

  .sheet-enter-active, .sheet-leave-active { transition: background .3s ease; }
  .sheet-enter-active .sheet, .sheet-leave-active .sheet { transition: transform .32s cubic-bezier(.32, .72, 0, 1); }
  .sheet-enter-from, .sheet-leave-to { background: rgba(25, 45, 50, 0); }
  .sheet-enter-from .sheet, .sheet-leave-to .sheet { transform: translateY(100%); }
}
</style>
