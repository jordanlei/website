<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <div class="dropdown">
    <button
      class="dropdowntoggle"
      :class="{ dropdownselected: isOpen }"
      @click="isOpen = !isOpen"
    >
      Menu
    </button>
    <div
      class="dropdowndiv"
      :style="{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  position: fixed;
  width: 35vw;
  left: 60vw;
  z-index: 1000;
}

.dropdowntoggle {
  transition: background-color 0.4s;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  padding: 10px 20px;
  margin: 20px 0 0 15vw;
  background-color: rgba(240, 240, 240, 0.8);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  width: 20vw;
  text-align: center;
}

.dropdowndiv {
  transition: opacity 0.5s;
  border-radius: 10%;
  border: none;
  width: 35vw;
  padding: 20px;
  background-color: rgba(250, 250, 250, 0.8);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}

.dropdownselected {
  background-color: rgba(200, 200, 200, 0.9) !important;
}

@media only screen and (max-width: 768px) {
  .dropdown {
    display: block;
  }
}
</style>
