<template>
  <section class="about" id="about">
    <div class="container">
      <h2 class="section-title">关于我</h2>
      <div class="about-content">
        <div class="about-img">
          <img
            alt="个人照片"
            src="https://design.gemcoder.com/staticResource/echoAiSystemImages/5c0babd6e0c3e8faca62d3f75493077f.png"
          />
        </div>
        <div class="about-text">
          <h3>[你的名字] - 前端架构师与实践者</h3>
          <p>
            我拥有超过5年的全栈开发经验，尤其擅长使用原生JavaScript、Tailwind
            CSS和现代构建工具来优化用户体验和性能。我坚信代码质量和可维护性是项目成功的基石。
          </p>
          <p>
            我的核心优势在于快速学习新技术并将其应用于实际场景。我热衷于解决复杂的界面交互问题，并对性能优化有着深入的理解。
          </p>
          <p>
            在业余时间，我喜欢研究最新的前端趋势，例如WebAssembly和Server
            Components，并参与开源项目贡献。
          </p>
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
  const animatedElements = document.querySelectorAll('.section-title, .about-img, .about-text');
  animatedElements.forEach(el => {
    if (el.classList.contains('section-title')) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
    } else {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
    }
    observer.value.observe(el);
  });

  return () => {
    if (observer.value) observer.value.disconnect();
  };
});
</script>

<style scoped>
/* 关于我区域样式 */
.about {
  padding: 120px 0;
  background-color: white;
}

.section-title {
  text-align: center;
  font-size: 40px; /* 2.5rem */
  margin-bottom: 70px;
  color: #1f2937;
  font-weight: 700;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.section-title::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -10px;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background-color: #10b981;
  border-radius: 2px;
}

.about-content {
  display: flex;
  gap: 60px;
  align-items: flex-start; /* 顶部对齐 */
}

.about-img {
  flex: 1;
  text-align: center;
  padding-top: 20px;
}

.about-img img {
  width: 320px;
  height: 320px;
  border-radius: 50%;
  object-fit: cover;
  border: 8px solid #e5e7eb; /* 浅灰边框 */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.about-text {
  flex: 2;
}

.about-text h3 {
  font-size: 32px; /* 2rem */
  margin-bottom: 25px;
  color: #10b981;
  font-weight: 600;
}

.about-text p {
  font-size: 18px; /* 1.125rem */
  margin-bottom: 25px;
  line-height: 1.8;
  color: #4b5563;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
    text-align: center;
  }

  .about-img {
    order: -1; /* 图片在上 */
    padding-top: 0;
  }
  
  .about-img img {
    width: 200px;
    height: 200px;
  }
  
  .about-text {
    padding-top: 30px;
  }

  .section-title {
    font-size: 36px; /* 2.25rem */
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2rem; /* 32px */
    margin-bottom: 50px;
  }
}
</style>