<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  items: Object
})

const offsetTop = ref(0)

const handleScroll = () => {
  const topDistance = window.scrollY
  const elementDistance = topDistance - offsetTop.value
  const parallaxLayers = document.querySelectorAll(
    `[data-type='parallax-${props.items.name}']`
  )
  
  for (const layer of parallaxLayers) {
    const ydepth = layer.getAttribute('ydepth')
    const xdepth = layer.getAttribute('xdepth')
    const ymovement = -1 * (topDistance + elementDistance * ydepth)
    const xmovement = elementDistance * xdepth
    layer.style.transform = `translate3d(${xmovement}px, ${ymovement}px, 0)`
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
  <div class="hero" style="position: absolute; width: 100%; pointer-events: none">
    <div :id="items.name" style="position: absolute; width: 100%; top: 0">
      <div
        class="layer layer-bg"
        :ydepth="items.backgrounddepth"
        :data-type="`parallax-${items.name}`"
        :style="{ background: items.background, zIndex: '-1' }"
      />
      <div
        v-for="(layer, index) in items.layers"
        :key="layer.image"
        class="layer"
        :class="layer.name"
        :xdepth="layer.xdepth"
        :ydepth="layer.ydepth"
        :data-type="`parallax-${items.name}`"
        style="zIndex: -1"
      >
        <img
          :src="layer.image"
          alt=""
          style="width: 100%; height: 100%; object-fit: cover; pointer-events: none"
        />
      </div>
    </div>
  </div>
</template>
