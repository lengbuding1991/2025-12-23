<template>
  <section class="skills-page">
    <div class="container">
      <h1 class="page-title">技能展示</h1>
      <p class="page-subtitle">探索我的技术栈和专业能力</p>
      
      <div class="skills-content">
        <!-- 核心技术栈 -->
        <div class="skills-section">
          <h2 class="section-heading">核心技术栈</h2>
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
        
        <!-- 技术熟练度 -->
        <div class="skills-section">
          <h2 class="section-heading">技术熟练度</h2>
          <div class="proficiency-grid">
            <div class="proficiency-item" v-for="proficiency in proficiencies" :key="proficiency.id">
              <div class="proficiency-header">
                <h3>{{ proficiency.title }}</h3>
                <span class="proficiency-level">{{ proficiency.level }}</span>
              </div>
              <div class="proficiency-bar">
                <div 
                  class="proficiency-progress" 
                  :style="{ width: proficiency.percentage }"
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 专业能力 -->
        <div class="skills-section">
          <h2 class="section-heading">专业能力</h2>
          <div class="capabilities-grid">
            <div class="capability-item" v-for="capability in capabilities" :key="capability.id">
              <div class="capability-icon">
                <i :class="capability.icon"></i>
              </div>
              <h3>{{ capability.title }}</h3>
              <ul class="capability-list">
                <li v-for="item in capability.items" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';

// 核心技能数据
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
    icon: 'fab fa-vuejs',
    title: 'Vue.js 3 & Composition API',
    description: '熟练使用Vue 3的组合式API，构建高性能、可维护的单页应用。'
  },
  {
    id: 4,
    icon: 'fab fa-node-js',
    title: 'Node.js & 构建工具',
    description: '熟悉构建工具链（Webpack/Vite），能进行简单的后端脚本和API集成。'
  },
  {
    id: 5,
    icon: 'fas fa-palette',
    title: '现代CSS & UI设计',
    description: '精通Flexbox/Grid布局，熟悉Sass/Less，并能处理复杂的CSS动画和过渡。'
  },
  {
    id: 6,
    icon: 'fas fa-chart-line',
    title: '数据可视化',
    description: '能够根据需求集成ECharts，展示复杂的数据分析和统计图表。'
  }
];

// 技术熟练度数据
const proficiencies = [
  { id: 1, title: 'JavaScript/TypeScript', level: '专家', percentage: '95%' },
  { id: 2, title: 'Vue.js 3', level: '专家', percentage: '90%' },
  { id: 3, title: 'HTML5 & CSS3', level: '专家', percentage: '90%' },
  { id: 4, title: 'Tailwind CSS', level: '熟练', percentage: '85%' },
  { id: 5, title: 'Node.js', level: '熟练', percentage: '75%' },
  { id: 6, title: '数据可视化', level: '熟练', percentage: '80%' },
  { id: 7, title: '性能优化', level: '熟练', percentage: '85%' },
  { id: 8, title: '响应式设计', level: '专家', percentage: '95%' }
];

// 专业能力数据
const capabilities = [
  {
    id: 1,
    icon: 'fas fa-code',
    title: '前端开发',
    items: [
      '单页应用开发',
      '组件化设计',
      '状态管理',
      'API集成',
      '表单处理'
    ]
  },
  {
    id: 2,
    icon: 'fas fa-paint-brush',
    title: 'UI/UX设计',
    items: [
      '响应式布局',
      '动画效果',
      '用户体验优化',
      '设计系统集成'
    ]
  },
  {
    id: 3,
    icon: 'fas fa-tachometer-alt',
    title: '性能优化',
    items: [
      '代码分割',
      '懒加载',
      '缓存策略',
      '渲染优化'
    ]
  },
  {
    id: 4,
    icon: 'fas fa-tools',
    title: '开发工具',
    items: [
      'Vite/Webpack',
      'Git版本控制',
      'VS Code',
      'Chrome DevTools'
    ]
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
  const animatedElements = document.querySelectorAll(
    '.page-title, .page-subtitle, .skills-section > *'
  );
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    observer.value.observe(el);
  });

  // 技能卡片动画
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
.skills-page {
  padding: 100px 0 80px;
  background-color: #ffffff;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.page-title {
  font-size: 48px;
  font-weight: 700;
  color: #1f2937;
  text-align: center;
  margin-bottom: 16px;
  transition: all 0.6s ease;
}

.page-subtitle {
  font-size: 20px;
  color: #6b7280;
  text-align: center;
  margin-bottom: 60px;
  transition: all 0.6s ease 0.1s;
}

.skills-content {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.skills-section {
  transition: all 0.6s ease;
}

.section-heading {
  font-size: 32px;
  font-weight: 600;
  color: #10b981;
  margin-bottom: 40px;
  line-height: 1.4;
  text-align: center;
}

/* 技能卡片样式 */
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
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.6s ease, transform 0.6s ease;
  border-top: 4px solid #10b981;
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
  font-size: 22px;
  margin-bottom: 15px;
  font-weight: 600;
  color: #1f2937;
}

.skill-card p {
  font-size: 16px;
  color: #6b7280;
}

/* 熟练度样式 */
.proficiency-grid {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.proficiency-item {
  background-color: #f9fafb;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.proficiency-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.proficiency-header h3 {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
}

.proficiency-level {
  font-size: 14px;
  font-weight: 600;
  color: #10b981;
  background-color: rgba(16, 185, 129, 0.1);
  padding: 4px 12px;
  border-radius: 20px;
}

.proficiency-bar {
  width: 100%;
  height: 8px;
  background-color: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
}

.proficiency-progress {
  height: 100%;
  background-color: #10b981;
  border-radius: 4px;
  transition: width 1s ease-in-out;
  animation: progressAnimation 1.5s ease-out forwards;
}

@keyframes progressAnimation {
  from {
    width: 0;
  }
}

/* 专业能力样式 */
.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

.capability-item {
  background-color: #f9fafb;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.capability-icon {
  font-size: 48px;
  color: #10b981;
  margin-bottom: 20px;
}

.capability-item h3 {
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 16px;
}

.capability-list {
  list-style: none;
}

.capability-list li {
  font-size: 16px;
  color: #6b7280;
  margin-bottom: 8px;
  position: relative;
  padding-left: 20px;
}

.capability-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: bold;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .skills-page {
    padding: 80px 0 60px;
  }
  
  .page-title {
    font-size: 36px;
  }
  
  .page-subtitle {
    font-size: 18px;
    margin-bottom: 40px;
  }
  
  .section-heading {
    font-size: 28px;
    text-align: center;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .skill-card {
    padding: 25px;
  }
  
  .capabilities-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .capability-item {
    padding: 24px;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 32px;
  }
  
  .page-subtitle {
    font-size: 16px;
  }
  
  .section-heading {
    font-size: 24px;
  }
  
  .proficiency-item {
    padding: 16px;
  }
  
  .proficiency-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>