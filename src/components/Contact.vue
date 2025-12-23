<template>
  <section class="contact" id="contact">
    <div class="container">
      <h2 class="section-title">联系我</h2>
      <div class="contact-container">
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name"> 您的姓名 </label>
            <input
              id="name"
              v-model="formData.name"
              name="name"
              placeholder="例如：张三"
              required
              type="text"
            />
          </div>
          <div class="form-group">
            <label for="email"> 您的邮箱 </label>
            <input
              id="email"
              v-model="formData.email"
              name="email"
              placeholder="example@domain.com"
              required
              type="email"
            />
          </div>
          <div class="form-group">
            <label for="subject"> 主题 (可选) </label>
            <input
              id="subject"
              v-model="formData.subject"
              name="subject"
              placeholder="例如：合作咨询或技术交流"
              type="text"
            />
          </div>
          <div class="form-group">
            <label for="message"> 您的消息 </label>
            <textarea
              id="message"
              v-model="formData.message"
              name="message"
              placeholder="请详细描述您的需求或问题..."
              required
              rows="6"
            ></textarea>
          </div>
          <button class="btn-primary" type="submit">发送消息</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const observer = ref(null);

const handleSubmit = () => {
  console.log('表单数据:', formData.value);
  // 模拟表单提交成功
  alert('✅ 留言发送成功！感谢您的联系，我会在24小时内回复您。');
  // 重置表单
  formData.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
};

onMounted(() => {
  // 初始化观察者
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = entry.target.classList.contains('contact-container') 
          ? 'scale(1)' 
          : 'translateY(0)';
        observer.value.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // 观察元素
  const titleElement = document.querySelector('.section-title');
  titleElement.style.opacity = '0';
  titleElement.style.transform = 'translateY(20px)';
  observer.value.observe(titleElement);

  const contactContainer = document.querySelector('.contact-container');
  contactContainer.style.opacity = '0';
  contactContainer.style.transform = 'scale(0.98)';
  observer.value.observe(contactContainer);

  return () => {
    if (observer.value) observer.value.disconnect();
  };
});
</script>

<style scoped>
/* 联系区域样式 */
.contact {
  padding: 120px 0;
  background-color: #f3f4f6;
}

.contact-container {
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.contact-form {
  display: grid;
  gap: 25px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 16px; /* 1rem */
  margin-bottom: 8px;
  color: #374151;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  padding: 14px;
  font-size: 16px; /* 1rem */
  border: 1px solid #d1d5db;
  border-radius: 6px;
  resize: vertical;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.3);
}

.contact-form button {
  padding: 14px 25px;
  background-color: #10b981;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 17px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-weight: 600;
}

.contact-form button:hover {
  background-color: #059669;
  transform: translateY(-1px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .section-title {
    font-size: 36px; /* 2.25rem */
  }
  
  .contact-container {
    padding: 30px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2rem; /* 32px */
    margin-bottom: 50px;
  }
}
</style>