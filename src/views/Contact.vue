<template>
  <section class="contact-page">
    <div class="container">
      <h1 class="page-title">联系我</h1>
      <p class="page-subtitle">有任何问题或合作意向，欢迎随时联系我</p>
      
      <div class="contact-content">
        <!-- 联系信息 -->
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="contact-details">
              <h3>邮箱</h3>
              <p>example@example.com</p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-phone"></i>
            </div>
            <div class="contact-details">
              <h3>电话</h3>
              <p>+86 123 4567 8901</p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="contact-details">
              <h3>地点</h3>
              <p>北京市海淀区中关村科技园区</p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-clock"></i>
            </div>
            <div class="contact-details">
              <h3>工作时间</h3>
              <p>周一至周五: 9:00 - 18:00</p>
            </div>
          </div>
        </div>
        
        <!-- 社交媒体 -->
        <div class="social-media">
          <h2 class="section-heading">社交媒体</h2>
          <div class="social-links">
            <a href="javascript:void(0);" class="social-link">
              <i class="fab fa-github"></i>
              <span>GitHub</span>
            </a>
            <a href="javascript:void(0);" class="social-link">
              <i class="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
            <a href="javascript:void(0);" class="social-link">
              <i class="fab fa-twitter"></i>
              <span>Twitter</span>
            </a>
            <a href="javascript:void(0);" class="social-link">
              <i class="fab fa-weixin"></i>
              <span>微信</span>
            </a>
            <a href="javascript:void(0);" class="social-link">
              <i class="fab fa-weibo"></i>
              <span>微博</span>
            </a>
            <a href="javascript:void(0);" class="social-link">
              <i class="fab fa-codepen"></i>
              <span>CodePen</span>
            </a>
          </div>
        </div>
        
        <!-- 联系表单 -->
        <div class="contact-form-section">
          <h2 class="section-heading">发送消息</h2>
          <form class="contact-form">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="您的姓名" required>
            </div>
            
            <div class="form-group">
              <input type="email" class="form-control" placeholder="您的邮箱" required>
            </div>
            
            <div class="form-group">
              <input type="text" class="form-control" placeholder="主题" required>
            </div>
            
            <div class="form-group">
              <textarea class="form-control" rows="6" placeholder="您的消息" required></textarea>
            </div>
            
            <button type="submit" class="btn-submit">发送消息</button>
          </form>
        </div>
        
        <!-- 联系统计 -->
        <div class="contact-stats">
          <div class="stat-item">
            <div class="stat-number">100+</div>
            <div class="stat-label">项目合作</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">50+</div>
            <div class="stat-label">技术咨询</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">24h</div>
            <div class="stat-label">响应时间</div>
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
    '.page-title, .page-subtitle, .contact-info > *, .social-media > *, .contact-form-section > *'
  );
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    observer.value.observe(el);
  });

  // 联系统计动画
  const stats = document.querySelectorAll('.contact-stats .stat-item');
  stats.forEach(stat => {
    stat.style.opacity = '0';
    stat.style.transform = 'translateY(30px)';
    observer.value.observe(stat);
  });

  return () => {
    if (observer.value) observer.value.disconnect();
  };
});
</script>

<style scoped>
.contact-page {
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

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

/* 联系信息样式 */
.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  transition: all 0.6s ease;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 32px;
  background-color: #f9fafb;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}

.contact-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #10b981;
  color: white;
  border-radius: 50%;
  font-size: 24px;
}

.contact-details h3 {
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 8px;
}

.contact-details p {
  font-size: 16px;
  color: #6b7280;
  line-height: 1.6;
}

/* 社交媒体样式 */
.social-media {
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

.social-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  background-color: #f9fafb;
  color: #1f2937;
  border-radius: 12px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
}

.social-link:hover {
  transform: translateY(-3px);
  background-color: #10b981;
  color: white;
}

.social-link i {
  font-size: 24px;
}

/* 联系表单样式 */
.contact-form-section {
  transition: all 0.6s ease;
}

.contact-form {
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px;
  background-color: #f9fafb;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-control {
  padding: 16px 20px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.form-control:focus {
  outline: none;
  border-color: #10b981;
}

.form-control::placeholder {
  color: #9ca3af;
}

textarea.form-control {
  resize: vertical;
  min-height: 150px;
}

.btn-submit {
  padding: 16px 40px;
  background-color: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  align-self: center;
}

.btn-submit:hover {
  background-color: #059669;
  transform: translateY(-2px);
}

/* 联系统计样式 */
.contact-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
  padding: 40px;
  background-color: #f9fafb;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.6s ease;
}

.contact-stats .stat-item {
  text-align: center;
}

.contact-stats .stat-number {
  font-size: 48px;
  font-weight: 700;
  color: #10b981;
  margin-bottom: 8px;
}

.contact-stats .stat-label {
  font-size: 16px;
  color: #6b7280;
  font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .contact-page {
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
  
  .contact-info {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .contact-item {
    padding: 24px;
    flex-direction: column;
    text-align: center;
  }
  
  .social-links {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  .social-link {
    padding: 16px;
    font-size: 16px;
  }
  
  .contact-form {
    padding: 30px 24px;
  }
  
  .contact-stats {
    grid-template-columns: repeat(3, 1fr);
    padding: 30px 20px;
    gap: 20px;
  }
  
  .contact-stats .stat-number {
    font-size: 32px;
  }
  
  .contact-stats .stat-label {
    font-size: 14px;
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
  
  .social-links {
    grid-template-columns: 1fr;
  }
  
  .contact-stats {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .btn-submit {
    width: 100%;
  }
}
</style>