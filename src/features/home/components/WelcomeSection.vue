<template>
  <section id="welcome">
    <div
      class="header"
      data-reveal
    >
      <p class="mobileHeroIndex">
        01 / Home
      </p>
      <h1 class="headerTitle">
        Jordan Lei
      </h1>
      <h2 class="headerSubtitle">
        <span class="is-strong">Neuroscience</span>
        <span class="is-muted">Machine Learning</span>
        <span class="is-strong">Art</span>
      </h2>
      <p class="mobileHeroNote">
        I study planning, decision making, and how minds think ahead.
      </p>
    </div>
    <a
      class="scroll-cue"
      href="#about"
      aria-label="Scroll to About"
    >
      <span aria-hidden="true">↓</span>
    </a>
  </section>
</template>

<style scoped>
.header {
  position: absolute;
  top: 61%;
  left: max(6vw, calc((100vw - 1120px) / 2));
  transform: translateY(-50%);
  text-align: left; /* Left justified */
  z-index: 0;
  width: min(760px, 88vw);
}

.headerTitle {
  font-size: clamp(4.2rem, 8.5vw, 7.8rem);
  margin: 0;
  color: var(--color);
  line-height: 1.0;
}

.headerSubtitle {
  display: flex;
  flex-wrap: wrap;
  gap: .35rem .6rem;
  font-family: var(--mono-font);
  font-size: clamp(1rem, 1.35vw, 1.22rem);
  font-weight: 700;
  margin: .75rem 0 0 clamp(.35rem, 3.5vw, 2.5rem);
  letter-spacing: .045em;
  line-height: 1.35;
  text-transform: uppercase;
}
.headerSubtitle span:not(:last-child)::after { content: "/"; margin-left: .6rem; color: var(--signal-magenta); }.headerSubtitle .is-strong { color: var(--color); }.headerSubtitle .is-muted { color: var(--muted); }
.scroll-cue { position: absolute; z-index: 2; bottom: 1.2rem; left: 50%; display: grid; width: 3.25rem; height: 3.25rem; place-items: center; transform: translateX(-50%); color: var(--color); background: rgba(247,245,239,.42); border: 1px solid rgba(255,255,255,.5); border-radius: 50%; box-shadow: 0 5px 16px rgba(31,47,49,.06); backdrop-filter: blur(12px); font-family: var(--mono-font); font-size: 1.7rem; font-weight: 400; text-decoration: none; transition: transform .2s, background .2s; }.scroll-cue:hover { transform: translate(-50%, 4px); color: var(--color); background: var(--signal-yellow); text-decoration: none; }

@media only screen and (max-width: 768px) {
  #welcome::after {
    position: absolute;
    inset: auto 0 0;
    height: 46svh;
    content: "";
    pointer-events: none;
    background: linear-gradient(to bottom, rgba(247, 245, 239, 0), rgba(247, 245, 239, .52) 58%, rgba(247, 245, 239, .88));
    z-index: 0;
  }
  .header {
    top: auto;
    bottom: 5.9rem;
    left: 1.15rem;
    z-index: 1;
    width: min(18.5rem, calc(100vw - 2.3rem));
    transform: none;
  }
  .headerTitle {
    font-size: clamp(2.65rem, 12.8vw, 3.45rem);
    line-height: .92;
  }
  .headerSubtitle {
    max-width: 16.75rem;
    gap: .25rem .5rem;
    margin-top: .65rem;
    margin-left: .15rem;
    font-size: .74rem;
    line-height: 1.45;
  }
  .headerSubtitle span:not(:last-child)::after {
    margin-left: .5rem;
  }
  .mobileHeroNote {
    display: block;
    max-width: 16.5rem;
    margin: .75rem 0 0 .15rem;
    color: var(--subtitle);
    font-size: .92rem;
    line-height: 1.45;
  }
  .mobileHeroIndex {
    display: block;
    margin: 0 0 .65rem .15rem;
    color: var(--muted);
    font-family: var(--mono-font);
    font-size: .78rem;
    font-weight: 700;
    letter-spacing: .06em;
    line-height: 1;
    text-transform: uppercase;
  }
  .scroll-cue {
    bottom: 5rem;
    width: 2.55rem;
    height: 2.55rem;
    font-size: 1.25rem;
    background: rgba(247,245,239,.58);
  }
}

@media (min-width: 769px) {
  .mobileHeroNote, .mobileHeroIndex {
    display: none;
  }
}
</style>
