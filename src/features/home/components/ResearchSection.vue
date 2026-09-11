<script setup>
import { researchProjects } from '../../../content/research'
import ExternalLink from '../../../shared/components/ExternalLink.vue'
</script>

<template>
  <section id="research">
    <div class="banner">
      <h1>Research</h1>
      <div style="margin-bottom: 20px">
        <ExternalLink
          href="https://scholar.google.com/citations?user=GRnnNBYAAAAJ&hl=en"
          label="Google Scholar"
        />
      </div>

      <article
        v-for="project in researchProjects"
        :key="project.title"
        class="frostedCard research-card"
      >
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <ExternalLink
          v-for="link in project.links"
          :key="link.href"
          :href="link.href"
          :label="link.label"
        />
      </article>
    </div>
  </section>
</template>

<style scoped>
.research-card { margin-bottom: 20px; }
</style>
