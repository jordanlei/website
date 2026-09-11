<script setup>
defineProps({
  title: { type: String, required: true },
})
</script>

<template>
  <header class="section-heading">
    <h2>{{ title }}</h2>
  </header>
</template>

<style scoped>
.section-heading { margin-bottom: 2rem; border-top: 2px solid var(--color); padding-top: .85rem; }
h2 { margin: 0; font-size: clamp(2.5rem, 4.5vw, 4.6rem); line-height: .95; letter-spacing: -.05em; }
</style>
