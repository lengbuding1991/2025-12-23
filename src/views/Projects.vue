<template>
  <section class="projects-page">
    <div class="container">
      <h1 class="page-title">我的项目</h1>
      <p class="page-subtitle">探索我开发的精选项目，展示我的技术能力和创造力</p>
      
      <div class="projects-content">
        <!-- 项目统计 -->
        <div class="projects-stats">
          <div class="stat-item">
            <div class="stat-number">12+</div>
            <div class="stat-label">完成项目</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">5+</div>
            <div class="stat-label">技术栈</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">3+</div>
            <div class="stat-label">行业领域</div>
          </div>
        </div>
        
        <!-- 项目展示 -->
        <div class="projects-section">
          <h2 class="section-heading">精选项目</h2>
          <div class="projects-grid">
            <div class="project-card" v-for="project in projects" :key="project.id">
              <div class="project-img">
                <img :alt="project.alt" :src="project.image" />
              </div>
              <div class="project-info">
                <h3>{{ project.title }}</h3>
                <div class="project-tags">
                  <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
                </div>
                <p>{{ project.description }}</p>
                <div class="project-links">
                  <a href="javascript:void(0);" class="btn-demo">演示</a>
                  <a href="javascript:void(0);" class="btn-code">代码</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 项目分类 -->
        <div class="projects-section">
          <h2 class="section-heading">项目分类</h2>
          <div class="category-grid">
            <div class="category-card">
              <div class="category-icon">
                <i class="fas fa-chart-line"></i>
              </div>
              <h3>数据分析</h3>
              <p>基于数据驱动的可视化项目</p>
            </div>
            <div class="category-card">
              <div class="category-icon">
                <i class="fas fa-cms"></i>
              </div>
              <h3>内容管理</h3>
              <p>高效的内容发布和管理系统</p>
            </div>
            <div class="category-card">
              <div class="category-icon">
                <i class="fas fa-shopping-cart"></i>
              </div>
              <h3>电子商务</h3>
              <p>现代化的在线购物平台</p>
            </div>
            <div class="category-card">
              <div class="category-icon">
                <i class="fas fa-mobile-alt"></i>
              </div>
              <h3>移动端</h3>
              <p>响应式移动应用界面</p>
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
    description: '一个高性能的SaaS管理后台，使用原生JS和ECharts实现了动态数据加载和复杂图表渲染。支持实时数据更新、多维度数据分析和自定义仪表盘配置。',
    image: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/3e70bfbd8e56c28640f139f437fe4944.png',
    alt: '项目1图片 - 金融分析仪表盘',
    tags: ['JavaScript', 'ECharts', '数据可视化']
  },
  {
    id: 2,
    title: '内容管理系统 (CMS)',
    description: '基于纯HTML/JS构建的轻量级CMS前端，强调加载速度和SEO友好性。提供完整的内容编辑、分类管理和媒体库功能。',
    image: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/67955467a56ab2857ec9527ee66c22b1.png',
    alt: '项目2图片 - 现代博客平台',
    tags: ['HTML', 'CSS', 'JavaScript', 'CMS']
  },
  {
    id: 3,
    title: '交互式产品展示页',
    description: '一个高度优化的产品详情页，包含图片懒加载和基于滚动事件的3D模型切换效果。实现了流畅的动画过渡和响应式设计。',
    image: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/a23bda2c30a4968da305c5fb885525ec.png',
    alt: '项目3图片 - 交互式产品展示',
    tags: ['JavaScript', 'CSS3', '响应式设计']
  },
  {
    id: 4,
    title: '在线学习平台',
    description: '功能完整的在线教育平台，包含课程管理、视频播放、测验系统和学习进度跟踪功能。采用模块化设计，支持多角色访问控制。',
    image: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/3e70bfbd8e56c28640f139f437fe4944.png',
    alt: '项目4图片 - 在线学习平台',
    tags: ['Vue.js', 'Node.js', '视频播放']
  },
  {
    id: 5,
    title: '社交网络应用',
    description: '基于组件化设计的社交网络前端，实现了用户资料、动态发布、评论互动和消息通知等核心功能。',
    image: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/67955467a56ab2857ec9527ee66c22b1.png',
    alt: '项目5图片 - 社交网络应用',
    tags: ['React', 'Redux', 'WebSocket']
  },
  {
    id: 6,
    title: '电商购物平台',
    description: '现代化的电子商务网站，包含商品展示、购物车、订单管理和支付集成功能。采用响应式设计，适配各种设备。',
    image: 'https://design.gemcoder.com/staticResource/echoAiSystemImages/a23bda2c30a4968da305c5fb885525ec.png',
    alt: '项目6图片 - 电商购物平台',
    tags: ['Vue.js', '电子商务', '支付集成']
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
    '.page-title, .page-subtitle, .projects-stats, .projects-section > *'
  );
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    observer.value.observe(el);
  });

  // 项目卡片动画
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
.projects-page {
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

.projects-content {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

/* 项目统计样式 */
.projects-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
  background-color: #f9fafb;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.6s ease;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 48px;
  font-weight: 700;
  color: #10b981;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 16px;
  color: #6b7280;
  font-weight: 500;
}

/* 项目展示样式 */
.projects-section {
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
}

.project-card {
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.6s ease, transform 0.6s ease;
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
  font-size: 24px;
  margin-bottom: 12px;
  color: #1f2937;
  font-weight: 600;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.project-tag {
  padding: 4px 12px;
  background-color: rgba(16, 185, 129, 0.1);
  color: #10b981;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
}

.project-info p {
  font-size: 16px;
  color: #6b7280;
  margin-bottom: 20px;
  flex-grow: 1;
  line-height: 1.6;
}

.project-links {
  display: flex;
  gap: 15px;
  margin-top: auto;
}

.btn-demo, .btn-code {
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-align: center;
  flex: 1;
}

.btn-demo {
  background-color: #10b981;
  color: white;
}

.btn-demo:hover {
  background-color: #059669;
  transform: translateY(-1px);
}

.btn-code {
  background-color: #f3f4f6;
  color: #1f2937;
}

.btn-code:hover {
  background-color: #e5e7eb;
  transform: translateY(-1px);
}

/* 项目分类样式 */
.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
}

.category-card {
  background-color: #f9fafb;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}

.category-icon {
  font-size: 48px;
  color: #10b981;
  margin-bottom: 20px;
}

.category-card h3 {
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 12px;
}

.category-card p {
  font-size: 16px;
  color: #6b7280;
  line-height: 1.6;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .projects-page {
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
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .project-card {
    padding: 0;
  }
  
  .project-info {
    padding: 20px;
  }
  
  .projects-stats {
    grid-template-columns: repeat(3, 1fr);
    padding: 30px 20px;
    gap: 20px;
  }
  
  .stat-number {
    font-size: 32px;
  }
  
  .stat-label {
    font-size: 14px;
  }
  
  .category-grid {
    grid-template-columns: 1fr;
    gap: 24px;
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
  
  .projects-stats {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>