<script setup>
import { education } from '../../../content/education'
import CardList from '../../../shared/components/CardList.vue'
import SectionHeading from '../../../shared/components/SectionHeading.vue'
</script>

<template>
  <section id="education">
    <div class="banner">
      <p class="mobile-chapter">
        05 / Study
      </p>
      <SectionHeading
        title="Education"
      />
      <CardList :items="education" />
    </div>
  </section>
</template>

<style scoped>
.mobile-chapter { display: none; } @media (max-width: 700px) { .mobile-chapter { display: block; margin: 0 0 .45rem; color: var(--signal-magenta); font-family: var(--mono-font); font-size: .82rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; } }
</style>
