<script setup>
import Layout from '../../shared/components/Layout.vue'
import Parallax from '../../shared/components/Parallax.vue'
import { hero } from '../../content/profile'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import EducationSection from './components/EducationSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ResearchSection from './components/ResearchSection.vue'
import WelcomeSection from './components/WelcomeSection.vue'
</script>

<template>
  <Layout home>
    <Parallax :items="hero" />
    <WelcomeSection />
    <AboutSection />
    <ResearchSection />
    <ExperienceSection />
    <EducationSection />
    <ContactSection />
  </Layout>
</template>
