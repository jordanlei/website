<script setup>
import { education } from '../../../content/education'
import CardList from '../../../shared/components/CardList.vue'
</script>

<template>
  <section id="education">
    <div class="banner">
      <h1>Education</h1>
      <CardList :items="education" />
    </div>
  </section>
</template>
