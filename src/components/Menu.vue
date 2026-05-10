<script setup>
import DropdownMenu from "./DropdownMenu.vue";

const NAV = [
  { href: "/#about", label: "About" },
  { href: "/#research", label: "Research" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/art", label: "Art" },
  { href: "/#contact", label: "Contact" },
];
</script>

<template>
  <div>
    <div class="menu">
      <span v-for="item in NAV" :key="item.href" class="menuitem">
        <router-link :to="item.href">{{ item.label }}</router-link>
      </span>
    </div>
    <div class="dropdown-wrapper">
      <DropdownMenu>
        <div v-for="item in NAV" :key="item.href" class="dropdownitem">
          <router-link :to="item.href">{{ item.label }}</router-link>
        </div>
      </DropdownMenu>
    </div>
  </div>
</template>

<style scoped>
.menu {
  padding: 2vw 15vw 1vw 3vw;
  position: fixed;
  width: 100%;
  height: 70px;
  z-index: 1000;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.menuitem {
  font-size: 20px;
  width: 150px;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.menuitem a {
  color: var(--color);
}

.menuitem a:hover {
  font-size: 24px;
  text-decoration: none;
}

.dropdown-wrapper {
  display: none;
}

.dropdownitem {
  padding: 10px 0;
}

.dropdownitem a {
  font-size: 16px;
  color: var(--color);
}

@media only screen and (max-width: 768px) {
  .menu {
    display: none;
  }

  .dropdown-wrapper {
    display: block;
  }
}
</style>
