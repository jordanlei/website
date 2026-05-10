<script setup>
defineProps({
  href: String,
  label: String,
  customStyle: Object
})
</script>

<template>
  <a
    class="button"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :style="customStyle"
  >
    {{ label }}
    <img
      class="externallinkimage"
      src="/images/external-link.svg"
      width="15"
      height="15"
      alt=""
    />
  </a>
</template>
