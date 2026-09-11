<script setup>
import { socialLinks } from '../../../content/profile'
import SectionHeading from '../../../shared/components/SectionHeading.vue'
</script>

<template>
  <section id="contact">
    <div class="banner">
      <p class="mobile-chapter">
        07 / Hello
      </p>
      <SectionHeading
        title="Say Hello"
      />
      <div class="contact-layout">
        <p>
          Have a question, a paper, or a good exhibition to recommend?<br>
          <a href="mailto:jordanlei.work@gmail.com">jordanlei.work@gmail.com</a>
        </p>
        <div class="contact-links">
          <div
            v-for="link in socialLinks"
            :key="link.href"
            class="contact-icon"
          >
            <a
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                :src="link.image"
                width="80"
                height="80"
                class="defaultImage"
                :alt="link.label"
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mobile-chapter { display: none; }.contact-layout { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 2rem; align-items: center; padding: 2rem 1.35rem; background: var(--card-wash); box-shadow: var(--card-shadow-subtle); backdrop-filter: blur(var(--card-blur)); }.contact-layout p { margin: 0; font-family: 'Playfair Display', serif; font-size: clamp(1.4rem, 3vw, 2.2rem); line-height: 1.25; }.contact-layout a { color: var(--signal-magenta); }.contact-links { display: flex; gap: .6rem; }.contact-icon a { display: grid; width: 3rem; height: 3rem; place-items: center; border: 1px solid var(--rule); border-radius: 50%; transition: transform .2s, background .2s; }.contact-icon a:hover { transform: translateY(-4px); background: var(--signal-cyan); }.contact-icon img { width: 1.3rem; height: 1.3rem; object-fit: contain; } @media (max-width: 700px) { .mobile-chapter { display: block; margin: 0 0 .45rem; color: var(--signal-magenta); font-family: var(--mono-font); font-size: .88rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; }.contact-layout { grid-template-columns: 1fr; padding: 1.5rem 1.05rem; }.contact-links { justify-content: flex-start; }.contact-icon a { width: 3.25rem; height: 3.25rem; } }
</style>
