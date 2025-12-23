<template>
  <section class="projects" id="projects">
    <div class="container">
      <h2 class="section-title">精选项目</h2>
      <div class="projects-grid">
        <div class="project-card" v-for="project in projects" :key="project.id">
          <div class="project-img">
            <img :alt="project.alt" :src="project.image" />
          </div>
          <div class="project-info">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-links">
              <a href="javascript:void(0);"> 演示 </a>
              <a href="javascript:void(0);"> 代码 </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const projects = [
  {
    id: 1,
    title: '实时数据仪表盘',
    description: '一个高性能的SaaS管理后台，使用原生JS和ECharts实现了动态数据加载和复杂图表渲染。',
    image: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/3e70bfbd8e56c28640f139f437fe4944.png',
    alt: '项目1图片 - 金融分析仪表盘'
  },
  {
    id: 2,
    title: '内容管理系统 (CMS)',
    description: '基于纯HTML/JS构建的轻量级CMS前端，强调加载速度和SEO友好性。',
    image: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/67955467a56ab2857ec9527ee66c22b1.png',
    alt: '项目2图片 - 现代博客平台'
  },
  {
    id: 3,
    title: '交互式产品展示页',
    description: '一个高度优化的产品详情页，包含图片懒加载和基于滚动事件的3D模型切换效果。',
    image: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/a23bda2c30a4968da305c5fb885525ec.png',
    alt: '项目3图片 - 交互式产品展示'
  }
];

const observer = ref(null);

onMounted(() => {
  // 初始化观察者
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.value.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // 观察元素
  const titleElement = document.querySelector('.section-title');
  titleElement.style.opacity = '0';
  titleElement.style.transform = 'translateY(20px)';
  observer.value.observe(titleElement);

  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    observer.value.observe(card);
  });

  return () => {
    if (observer.value) observer.value.disconnect();
  };
});
</script>

<style scoped>
/* 项目区域样式 */
.projects {
  padding: 120px 0;
  background-color: white;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
}

.project-card {
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.project-img {
  height: 220px;
  overflow: hidden;
}

.project-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-img img {
  transform: scale(1.05);
}

.project-info {
  padding: 25px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.project-info h3 {
  font-size: 24px; /* 1.5rem */
  margin-bottom: 12px;
  color: #1f2937;
  font-weight: 600;
}

.project-info p {
  font-size: 16px; /* 1rem */
  color: #6b7280;
  margin-bottom: 20px;
  flex-grow: 1;
}

.project-links {
  display: flex;
  gap: 15px;
  margin-top: auto; /* 确保按钮在底部 */
}

.project-links a {
  padding: 10px 20px;
  background-color: #10b981;
  color: white;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.project-links a:hover {
  background-color: #059669;
  transform: translateY(-1px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .section-title {
    font-size: 36px; /* 2.25rem */
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2rem; /* 32px */
    margin-bottom: 50px;
  }
  
  .project-card {
    padding: 25px;
  }
  
  .project-info {
    padding: 20px;
  }
}
</style>