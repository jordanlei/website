<script setup>
import Menu from './Menu.vue'

defineProps({
  home: Boolean
})
</script>

<template>
  <div>
    <Menu />
    <div class="container">
      <main>
        <slot />
      </main>
      <div
        v-if="!home"
        class="backToHome"
      >
        <router-link to="/">
          ← Back to home
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
}

.backToHome {
  width: min(1120px, 100%);
  margin: 0 auto;
  padding: 1rem 2rem 4rem;
}

.backToHome a {
  font-family: var(--mono-font);
  font-size: .88rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--primary-blue);
  text-decoration: none;
}
</style>
