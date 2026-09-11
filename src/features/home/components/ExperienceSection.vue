<script setup>
import { experience } from '../../../content/experience'
import CardList from '../../../shared/components/CardList.vue'
import ExternalLink from '../../../shared/components/ExternalLink.vue'
</script>

<template>
  <section id="experience">
    <div class="banner">
      <h1>Experience</h1>
      <ExternalLink
        href="/files/Resume_JordanLei.pdf"
        label="View Resume"
      />
      <CardList :items="experience" />
    </div>
  </section>
</template>
