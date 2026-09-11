<script setup>
import { navigationItems } from '../../content/navigation'

const mobileLabel = (label) => ({
  Experience: 'Work',
  Education: 'Study',
  Contact: 'Hello',
}[label] || label)

const mobileNavigationItems = [
  { to: '/', label: 'Home' },
  ...navigationItems,
]
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
    <nav
      class="mobile-index"
      aria-label="Mobile navigation"
    >
      <router-link
        class="mobile-mark"
        to="/"
        aria-label="Home"
      >
        JL
      </router-link>
      <div class="mobile-index-track">
        <router-link
          v-for="(item, index) in mobileNavigationItems"
          :key="item.to"
          class="mobile-index-item"
          :to="item.to"
        >
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          {{ mobileLabel(item.label) }}
        </router-link>
      </div>
    </nav>
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

.mobile-index {
  display: none;
}

@media only screen and (max-width: 768px) {
  .menu {
    display: none;
  }

  .mobile-index {
    position: fixed;
    right: .7rem;
    bottom: max(.85rem, env(safe-area-inset-bottom));
    left: .7rem;
    z-index: 1000;
    display: grid;
    grid-template-columns: 2.6rem minmax(0, 1fr);
    gap: .35rem;
    align-items: center;
    padding: .45rem;
    background: rgba(247, 245, 239, .74);
    box-shadow: 0 8px 22px rgba(31, 47, 49, .09);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }

  .mobile-mark {
    display: grid;
    width: 2.6rem;
    height: 2.6rem;
    place-items: center;
    color: var(--color);
    background: rgba(255, 253, 248, .68);
    font-family: var(--mono-font);
    font-size: .82rem;
    font-weight: 800;
    letter-spacing: -.06em;
    text-decoration: none;
  }

  .mobile-index-track {
    display: grid;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    gap: .3rem;
    overflow-x: auto;
    scrollbar-width: none;
    scroll-padding-inline: .2rem;
    scroll-snap-type: x proximity;
  }

  .mobile-index-track::-webkit-scrollbar {
    display: none;
  }

  .mobile-index-item {
    display: inline-flex;
    min-height: 2.6rem;
    align-items: center;
    gap: .4rem;
    padding: 0 .64rem;
    color: var(--color);
    background: rgba(255, 253, 248, .34);
    font-family: var(--mono-font);
    font-size: .74rem;
    font-weight: 800;
    letter-spacing: .045em;
    text-decoration: none;
    text-transform: uppercase;
    scroll-snap-align: start;
  }

  .mobile-index-item span {
    color: var(--signal-magenta);
    font-size: .7rem;
  }

  .mobile-index-item.router-link-active,
  .mobile-index-item:hover,
  .mobile-mark.router-link-active {
    background: rgba(255, 253, 248, .78);
    text-decoration: none;
  }
}
</style>
