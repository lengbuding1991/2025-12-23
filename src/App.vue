<template>
  <div id="app">
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* 基础样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  line-height: 1.6;
  color: #1f2937; /* 深灰色文字 */
  background-color: #f3f4f6; /* 浅灰色背景 */
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

.container {
  max-width: 1280px; /* 略微放宽容器 */
  margin: 0 auto;
  padding: 0 24px; /* 对应 1.5rem */
}

/* 全局动画样式 */
.section-title,
.about-content > div,
.skill-card,
.project-card,
.contact-container {
  transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
              transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
</style>