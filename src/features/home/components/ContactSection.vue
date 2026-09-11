<script setup>
import { socialLinks } from '../../../content/profile'
</script>

<template>
  <section id="contact">
    <div class="banner">
      <h1>Contact</h1>
      <div class="frostedCard">
        <p>
          Let's get in touch! Email me at jordanlei dot work at gmail dot com.
          <br>
          <br>
        </p>
        <div class="flex-row">
          <div
            v-for="link in socialLinks"
            :key="link.href"
            class="contact-icon col-md-3"
          >
            <a
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                :src="link.image"
                width="80"
                height="80"
                class="defaultImage"
                :alt="link.label"
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-icon {
  text-align: center;
  padding: 10px;
}
</style>
