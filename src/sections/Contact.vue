<script setup>
const LINKS = [
  {
    src: "/images/experience/linkedin.png",
    href: "https://www.linkedin.com/in/jordan-lei-782890130/",
  },
  {
    src: "/images/experience/instagram.png",
    href: "https://www.instagram.com/leijordanart/",
  },
  { src: "/images/experience/twitter.png", href: "https://twitter.com/NeuroLei" },
  { src: "/images/experience/medium.png", href: "https://jordanlei.medium.com/" },
];
</script>

<template>
  <section id="contact">
    <div class="banner">
      <h1>Contact</h1>
      <div class="frostedCard">
        <p>
          Let's get in touch! Email me at jordanlei dot work at gmail dot com.
          <br />
          <br />
        </p>
        <div class="flex-row">
          <div v-for="link in LINKS" :key="link.href" class="contact-icon col-md-3">
            <a :href="link.href" target="_blank" rel="noopener noreferrer">
              <img
                :src="link.src"
                width="80"
                height="80"
                class="defaultImage"
                alt=""
              />
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
