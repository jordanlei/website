<script setup>
import Menu from './Menu.vue';

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
      <div v-if="!home" class="backToHome">
        <router-link to="/">← Back to home</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
}

.backToHome {
  margin: 3rem 0 0;
  padding: 0 15vw;
}

.backToHome a {
  color: var(--primary-blue);
  text-decoration: none;
}
</style>
