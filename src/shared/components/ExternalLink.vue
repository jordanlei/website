<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <a
    class="button"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
  >
    {{ label }}
    <img
      class="externallinkimage"
      src="/images/external-link.svg"
      width="15"
      height="15"
      alt=""
    >
  </a>
</template>
