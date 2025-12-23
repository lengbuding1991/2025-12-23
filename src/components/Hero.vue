<template>
  <section class="hero" id="home">
    <div class="hero-content">
      <h1>构建未来，从代码开始</h1>
      <p>
        我是一名专注于前端工程化的开发者，致力于使用现代技术栈打造高性能、高可用的Web应用。
      </p>
      <a class="btn-primary" @click="scrollToContact" href="javascript:void(0);"> 开始合作 </a>
    </div>
  </section>
</template>

<script setup>
const scrollToContact = () => {
  const contactElement = document.getElementById('contact');
  if (contactElement) {
    const navbarHeight = 80;
    window.scrollTo({
      top: contactElement.offsetTop - navbarHeight,
      behavior: 'smooth'
    });
  }
};
</script>

<style scoped>
/* 英雄区域样式 */
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* 更改背景为更现代、更柔和的风格 */
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.8), rgba(34, 197, 94, 0.8)), url('https://design.gemcoder.com/staticResource/echoAiSystemImages/eaa036cff2f7df9634f1e2d022b381b1.png') no-repeat center center/cover;
  color: white;
  padding-top: 80px; /* 适配导航栏高度 */
}

.hero-content h1 {
  font-size: 56px; /* 3.5rem */
  margin-bottom: 24px; /* 1.5rem */
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-content p {
  font-size: 20px; /* 1.25rem */
  margin-bottom: 32px; /* 2rem */
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
}

.btn-primary {
  display: inline-block;
  padding: 12px 30px;
  background-color: #059669; /* 稍深的绿色 */
  color: white;
  border-radius: 9999px; /* pill shape */
  transition: background-color 0.3s ease, transform 0.2s ease;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(5, 150, 105, 0.4);
}

.btn-primary:hover {
  background-color: #047857;
  transform: translateY(-2px);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .hero-content h1 {
    font-size: 3rem; /* 48px */
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem; /* 40px */
  }

  .hero-content p {
    font-size: 1.125rem; /* 18px */
  }
}

@media (max-width: 480px) {
  .hero {
    padding-top: 60px;
  }
  
  .hero-content h1 {
    font-size: 2rem; /* 32px */
  }
  
  .hero-content p {
    font-size: 1rem; /* 16px */
  }
  
  .btn-primary {
    padding: 10px 25px;
    font-size: 16px;
  }
}
</style>