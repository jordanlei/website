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
  download: {
    type: [Boolean, String],
    default: false,
  },
  showIcon: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <a
    class="button"
    :href="href"
    :download="download || null"
    :target="download ? null : '_blank'"
    :rel="download ? null : 'noopener noreferrer'"
  >
    {{ label }}
    <img
      v-if="showIcon"
      class="externallinkimage"
      src="/images/external-link.svg"
      width="15"
      height="15"
      alt=""
    >
  </a>
</template>
