<template>
  <div class="home">
    <!-- Hero section -->
    <Hero />
    
    <!-- About section -->
    <About />
    
    <!-- Skills section -->
    <Skills />
    
    <!-- Projects section -->
    <Projects />
    
    <!-- Contact section -->
    <Contact />
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'
</script>

<style scoped>
.home {
  padding-top: 80px; /* 为固定导航栏留出空间 */
}
</style>