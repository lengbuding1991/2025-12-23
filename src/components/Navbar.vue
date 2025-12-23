<template>
  <nav class="navbar" :class="{ 'shadow-lg bg-white/95': isScrolled, 'shadow-md bg-white': !isScrolled }">
    <div class="container nav-container">
      <a class="logo" href="javascript:void(0);"> DevPortfolio </a>
      <div class="mobile-menu-btn" @click="toggleMenu">
        <i class="fas" :class="isMenuOpen ? 'fa-times' : 'fa-bars'"></i>
      </div>
      <ul class="nav-links" :class="{ active: isMenuOpen }">
        <li v-for="item in navItems" :key="item.id">
          <a @click="handleNavClick(item)" href="javascript:void(0);">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isMenuOpen = ref(false);
const isScrolled = ref(false);
const navItems = [
  { id: 1, name: '首页', target: 'home', type: 'anchor' },
  { id: 2, name: '关于', target: '/about', type: 'route' },
  { id: 3, name: '技能', target: 'skills', type: 'anchor' },
  { id: 4, name: '项目', target: 'projects', type: 'anchor' },
  { id: 5, name: '文章', target: '/article', type: 'route' },
  { id: 6, name: '联系我', target: 'contact', type: 'anchor' }
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleNavClick = (item) => {
  // 关闭移动菜单
  isMenuOpen.value = false;
  
  if (item.type === 'route') {
    // 路由导航
    router.push(item.target);
  } else {
    // 平滑滚动到目标位置
    const targetElement = document.getElementById(item.target);
    if (targetElement) {
      const navbarHeight = 80;
      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    }
  }
};

// 监听滚动事件
onMounted(() => {
  const handleScroll = () => {
    const scrollThreshold = 50;
    isScrolled.value = window.scrollY > scrollThreshold;
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* 导航栏样式 */
.navbar {
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); /* 更柔和的阴影 */
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px; /* 略微增高 */
}

.logo {
  font-size: 28px;
  font-weight: 700;
  color: #10b981; /* 绿色系 Logo */
}

.nav-links {
  display: flex;
  gap: 35px;
}

.nav-links a {
  font-size: 17px;
  font-weight: 500;
  color: #4b5563; /* 中灰色 */
  transition: color 0.3s ease, border-bottom 0.3s ease;
  padding-bottom: 5px;
}

.nav-links a:hover {
  color: #10b981;
  border-bottom: 2px solid #10b981;
}

.mobile-menu-btn {
  display: none;
  font-size: 28px;
  cursor: pointer;
  color: #4b5563;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .nav-links {
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background-color: white;
    padding: 20px 0;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    gap: 0;
  }

  .nav-links.active {
    display: flex;
  }
  
  .nav-links li {
    padding: 10px 20px;
    text-align: center;
  }
  
  .nav-links a {
    display: block;
    border-bottom: none;
    padding-bottom: 0;
  }

  .mobile-menu-btn {
    display: block;
  }
}

@media (max-width: 480px) {
  .nav-container {
    height: 60px;
  }
  
  .logo {
    font-size: 24px;
  }
}
</style>