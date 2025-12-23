<template>
  <footer class="footer">
    <div class="container">
      <div class="social-links">
        <a v-for="link in socialLinks" :key="link.id" :title="link.title" href="javascript:void(0);">
          <i :class="link.icon"></i>
        </a>
      </div>
      <p>
        ©
        <span>{{ currentYear }}</span>
        [你的名字]. 设计与实现基于原生技术栈。
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentYear = ref('');
const socialLinks = [
  { id: 1, title: 'GitHub', icon: 'fab fa-github' },
  { id: 2, title: 'LinkedIn', icon: 'fab fa-linkedin' },
  { id: 3, title: 'Twitter', icon: 'fab fa-twitter' },
  { id: 4, title: 'Email', icon: 'fas fa-envelope' }
];

onMounted(() => {
  currentYear.value = new Date().getFullYear().toString();
});
</script>

<style scoped>
/* 页脚样式 */
.footer {
  background-color: #1f2937; /* 深蓝灰 */
  color: #d1d5db;
  padding: 50px 0;
  text-align: center;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 25px;
}

.social-links a {
  font-size: 28px;
  color: #d1d5db;
  transition: color 0.3s ease, transform 0.2s ease;
}

.social-links a:hover {
  color: #10b981;
  transform: scale(1.1);
}

.footer p {
  font-size: 16px; /* 1rem */
  color: #9ca3af;
}
</style>