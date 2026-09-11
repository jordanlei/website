<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
})

const offsetTop = ref(0)

const handleScroll = () => {
  const topDistance = window.scrollY
  const elementDistance = topDistance - offsetTop.value
  const parallaxLayers = document.querySelectorAll(
    `[data-type='parallax-${props.items.name}']`
  )
  
  for (const layer of parallaxLayers) {
    const yDepth = Number(layer.dataset.yDepth)
    const xDepth = Number(layer.dataset.xDepth)
    const yMovement = -1 * (topDistance + elementDistance * yDepth)
    const xMovement = elementDistance * xDepth
    layer.style.transform = `translate3d(${xMovement}px, ${yMovement}px, 0)`
  }
}

onMounted(() => {
  const el = document.getElementById(props.items.name)
  if (el) {
    offsetTop.value = el.offsetTop
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll() // Initial positioning
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    class="hero"
    style="position: absolute; width: 100%; pointer-events: none"
  >
    <div
      :id="items.name"
      style="position: absolute; width: 100%; top: 0"
    >
      <div
        class="layer layer-bg"
        :data-y-depth="items.backgroundDepth"
        :data-type="`parallax-${items.name}`"
        :style="{ background: items.background, zIndex: '-1' }"
      />
      <div
        v-for="layer in items.layers"
        :key="layer.image"
        class="layer"
        :class="layer.className"
        :data-x-depth="layer.xDepth"
        :data-y-depth="layer.yDepth"
        :data-type="`parallax-${items.name}`"
        style="zIndex: -1"
      >
        <img
          :src="layer.image"
          alt=""
          style="width: 100%; height: 100%; object-fit: cover; pointer-events: none"
        >
      </div>
    </div>
  </div>
</template>
