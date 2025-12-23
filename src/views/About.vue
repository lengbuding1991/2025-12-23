<template>
  <section class="about-page">
    <div class="container">
      <h1 class="page-title">关于我</h1>
      <p class="page-subtitle">了解我的背景、经历和专业技能</p>
      
      <div class="about-content">
        <div class="about-img">
          <img
            alt="个人照片"
            src="https://design.gemcoder.com/staticResource/echoAiSystemImages/5c0babd6e0c3e8faca62d3f75493077f.png"
          />
        </div>
        
        <div class="about-details">
          <h2 class="section-heading">[你的名字] - 前端架构师与技术领导者</h2>
          
          <div class="about-section">
            <h3 class="section-subheading">专业背景</h3>
            <p>
              我是一位拥有超过5年经验的前端架构师，专注于构建高性能、可扩展的Web应用程序。
              我的技术栈涵盖原生JavaScript、Vue.js、React、Tailwind CSS以及现代构建工具。
            </p>
            <p>
              我在前端性能优化、组件设计模式和团队协作方面有着深厚的经验，曾主导多个大型项目的架构设计和技术选型。
            </p>
          </div>
          
          <div class="about-section">
            <h3 class="section-subheading">核心技能</h3>
            <div class="skills-grid">
              <div class="skill-category">
                <h4>前端技术</h4>
                <ul class="skill-list">
                  <li>JavaScript/TypeScript</li>
                  <li>Vue.js 3 & Composition API</li>
                  <li>React & Hooks</li>
                  <li>HTML5 & CSS3</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div class="skill-category">
                <h4>构建工具</h4>
                <ul class="skill-list">
                  <li>Vite</li>
                  <li>Webpack</li>
                  <li>Rollup</li>
                  <li>Babel</li>
                </ul>
              </div>
              <div class="skill-category">
                <h4>架构与方法论</h4>
                <ul class="skill-list">
                  <li>组件化设计</li>
                  <li>状态管理</li>
                  <li>性能优化</li>
                  <li>敏捷开发</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="about-section">
            <h3 class="section-subheading">教育经历</h3>
            <div class="education-item">
              <h4>计算机科学硕士</h4>
              <p class="education-institution">[大学名称]</p>
              <p class="education-period">2016 - 2018</p>
            </div>
            <div class="education-item">
              <h4>计算机科学学士</h4>
              <p class="education-institution">[大学名称]</p>
              <p class="education-period">2012 - 2016</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="contact-info">
        <h3 class="section-heading">联系方式</h3>
        <div class="contact-details">
          <div class="contact-item">
            <span class="contact-label">邮箱：</span>
            <span class="contact-value">your.email@example.com</span>
          </div>
          <div class="contact-item">
            <span class="contact-label">电话：</span>
            <span class="contact-value">+86 138-0013-8000</span>
          </div>
          <div class="contact-item">
            <span class="contact-label">GitHub：</span>
            <span class="contact-value">
              <a href="#" class="contact-link">github.com/yourusername</a>
            </span>
          </div>
          <div class="contact-item">
            <span class="contact-label">LinkedIn：</span>
            <span class="contact-value">
              <a href="#" class="contact-link">linkedin.com/in/yourusername</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';

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
    '.page-title, .page-subtitle, .about-img, .about-details > *, .contact-info > *'
  );
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    observer.value.observe(el);
  });

  return () => {
    if (observer.value) observer.value.disconnect();
  };
});
</script>

<style scoped>
.about-page {
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
}

.page-subtitle {
  font-size: 20px;
  color: #6b7280;
  text-align: center;
  margin-bottom: 60px;
}

.about-content {
  display: flex;
  gap: 80px;
  margin-bottom: 80px;
  align-items: flex-start;
}

.about-img {
  flex: 0 0 320px;
  text-align: center;
}

.about-img img {
  width: 320px;
  height: 320px;
  border-radius: 50%;
  object-fit: cover;
  border: 8px solid #e5e7eb;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.about-details {
  flex: 1;
}

.section-heading {
  font-size: 32px;
  font-weight: 600;
  color: #10b981;
  margin-bottom: 32px;
  line-height: 1.4;
}

.section-subheading {
  font-size: 24px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 20px;
}

.about-section {
  margin-bottom: 40px;
}

.about-section p {
  font-size: 16px;
  color: #4b5563;
  line-height: 1.8;
  margin-bottom: 16px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
  margin-top: 24px;
}

.skill-category h4 {
  font-size: 18px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 16px;
}

.skill-list {
  list-style: none;
}

.skill-list li {
  font-size: 16px;
  color: #6b7280;
  margin-bottom: 8px;
  position: relative;
  padding-left: 20px;
}

.skill-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: bold;
}

.education-item {
  margin-bottom: 24px;
}

.education-item h4 {
  font-size: 18px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 4px;
}

.education-institution {
  font-size: 16px;
  color: #6b7280;
  margin-bottom: 2px;
}

.education-period {
  font-size: 14px;
  color: #9ca3af;
}

.contact-info {
  background-color: #f9fafb;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.contact-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.contact-item {
  display: flex;
  flex-direction: column;
}

.contact-label {
  font-size: 14px;
  font-weight: 600;
  color: #6b7280;
  margin-bottom: 4px;
}

.contact-value {
  font-size: 16px;
  color: #1f2937;
}

.contact-link {
  color: #10b981;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #059669;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .about-page {
    padding: 80px 0 60px;
  }
  
  .page-title {
    font-size: 36px;
  }
  
  .page-subtitle {
    font-size: 18px;
    margin-bottom: 40px;
  }
  
  .about-content {
    flex-direction: column;
    gap: 40px;
    margin-bottom: 60px;
  }
  
  .about-img {
    flex: 0 0 auto;
  }
  
  .about-img img {
    width: 200px;
    height: 200px;
  }
  
  .section-heading {
    font-size: 28px;
    text-align: center;
  }
  
  .section-subheading {
    font-size: 22px;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .contact-info {
    padding: 30px 20px;
  }
  
  .contact-details {
    grid-template-columns: 1fr;
    gap: 16px;
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
  
  .section-subheading {
    font-size: 20px;
  }
}
</style>