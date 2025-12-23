<template>
  <section class="article-section">
    <div class="container">
      <h1 class="page-title">文章</h1>
      <p class="page-subtitle">分享我的技术见解和生活感悟</p>
      
      <div class="article-grid">
        <article v-for="article in articles" :key="article.id" class="article-card">
          <div class="article-image">
            <div class="image-placeholder"></div>
          </div>
          <div class="article-content">
            <div class="article-meta">
              <span class="article-date">{{ article.date }}</span>
              <span class="article-category">{{ article.category }}</span>
            </div>
            <h3 class="article-title">{{ article.title }}</h3>
            <p class="article-excerpt">{{ article.excerpt }}</p>
            <button @click="goToArticleDetail(article.id)" class="article-link">阅读更多</button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 文章数据
const articles = ref([
  {
    id: 1,
    title: 'Vue 3 Composition API 入门指南',
    excerpt: '本文将带你深入了解 Vue 3 Composition API 的核心概念和使用方法，帮助你构建更灵活、更可维护的 Vue 应用。',
    date: '2024-01-15',
    category: '前端开发',
    image: ''
  },
  {
    id: 2,
    title: '现代前端性能优化最佳实践',
    excerpt: '探讨现代前端开发中的性能优化技巧，包括代码分割、懒加载、缓存策略等，提升用户体验和页面加载速度。',
    date: '2024-01-10',
    category: '性能优化',
    image: ''
  },
  {
    id: 3,
    title: 'TypeScript 类型系统详解',
    excerpt: '深入理解 TypeScript 的类型系统，包括基本类型、高级类型、泛型等，编写更安全、更可靠的代码。',
    date: '2024-01-05',
    category: 'TypeScript',
    image: ''
  }
])

// 跳转到文章详情页
const goToArticleDetail = (id) => {
  router.push(`/article/${id}`)
}
</script>

<style scoped>
.article-section {
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

.article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 32px;
}

.article-card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.article-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.article-image {
  height: 220px;
  overflow: hidden;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background-color: #f3f4f6;
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
}

.article-content {
  padding: 24px;
}

.article-meta {
  display: flex;
  gap: 16px;
  margin-bottom: 12px;
  font-size: 14px;
  color: #9ca3af;
}

.article-date,
.article-category {
  display: flex;
  align-items: center;
  gap: 6px;
}

.article-title {
  font-size: 24px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 16px;
  line-height: 1.4;
}

.article-excerpt {
  font-size: 16px;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 20px;
}

.article-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #10b981;
  transition: color 0.3s ease;
}

.article-link:hover {
  color: #059669;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .article-section {
    padding: 80px 0 60px;
  }
  
  .page-title {
    font-size: 36px;
  }
  
  .page-subtitle {
    font-size: 18px;
    margin-bottom: 40px;
  }
  
  .article-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .article-title {
    font-size: 22px;
  }
}
</style>