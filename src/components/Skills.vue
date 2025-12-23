<template>
  <section class="skills" id="skills">
    <div class="container">
      <h2 class="section-title">核心技术栈</h2>
      <div class="skills-grid">
        <div class="skill-card" v-for="skill in skills" :key="skill.id">
          <div class="skill-icon">
            <i :class="skill.icon"></i>
          </div>
          <h3>{{ skill.title }}</h3>
          <p>{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const skills = [
  {
    id: 1,
    icon: 'fab fa-html5',
    title: 'HTML5 & CSS3',
    description: '语义化结构、BEM/原子化CSS实践，熟练使用Tailwind CSS进行快速响应式布局。'
  },
  {
    id: 2,
    icon: 'fab fa-js',
    title: '原生 JavaScript (ES6+)',
    description: '深入理解DOM API、异步编程（Promise/Async/Await）和模块化开发。'
  },
  {
    id: 3,
    icon: 'fas fa-palette',
    title: '现代CSS/预处理器',
    description: '精通Flexbox/Grid布局，熟悉Sass/Less，并能处理复杂的CSS动画和过渡。'
  },
  {
    id: 4,
    icon: 'fab fa-node-js',
    title: 'Node.js & NPM/Yarn',
    description: '熟悉构建工具链（Webpack/Vite），能进行简单的后端脚本和API集成。'
  },
  {
    id: 5,
    icon: 'fas fa-chart-line',
    title: '数据可视化 (ECharts)',
    description: '能够根据需求集成ECharts，展示复杂的数据分析和统计图表。'
  },
  {
    id: 6,
    icon: 'fas fa-mobile-alt',
    title: '响应式设计',
    description: '确保所有界面在桌面、平板和移动设备上都能提供一致且优化的体验。'
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

  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach(card => {
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
/* 技能区域样式 */
.skills {
  padding: 120px 0;
  background-color: #f3f4f6; /* 保持背景色 */
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.skill-card {
  background-color: white;
  padding: 35px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-top: 4px solid #10b981; /* 强调色 */
}

.skill-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.skill-icon {
  font-size: 56px;
  color: #10b981;
  margin-bottom: 20px;
}

.skill-card h3 {
  font-size: 22px; /* 1.375rem */
  margin-bottom: 15px;
  font-weight: 600;
  color: #1f2937;
}

.skill-card p {
  font-size: 16px; /* 1rem */
  color: #6b7280;
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
  
  .skill-card {
    padding: 25px;
  }
}
</style>