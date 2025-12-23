<template>
  <section class="article-detail-section">
    <div class="container">
      <button class="back-button" @click="goBack">
        <i class="fas fa-arrow-left"></i> 返回文章列表
      </button>
      
      <article v-if="article" class="article-detail">
        <div class="article-header">
          <div class="article-meta">
            <span class="article-date">{{ article.date }}</span>
            <span class="article-category">{{ article.category }}</span>
          </div>
          <h1 class="article-title">{{ article.title }}</h1>
        </div>
        
        <div class="article-image">
          <div class="image-placeholder"></div>
        </div>
        
        <div class="article-content">
          <div class="article-body">
            <p v-for="(paragraph, index) in article.content" :key="index">
              {{ paragraph }}
            </p>
          </div>
          
          <div class="article-footer">
            <div class="article-tags">
              <span v-for="(tag, index) in article.tags" :key="index" class="article-tag">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </article>
      
      <div v-else class="article-not-found">
        <h2>文章未找到</h2>
        <p>抱歉，您请求的文章不存在。</p>
        <button class="back-button" @click="goBack">返回文章列表</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const article = ref(null)

// 文章数据
const articlesData = [
  {
    id: 1,
    title: 'Vue 3 Composition API 入门指南',
    excerpt: '本文将带你深入了解 Vue 3 Composition API 的核心概念和使用方法，帮助你构建更灵活、更可维护的 Vue 应用。',
    content: [
      'Vue 3 的 Composition API 是 Vue 3 中引入的一个重要特性，它提供了一种更灵活的方式来组织组件逻辑。与传统的 Options API 相比，Composition API 允许我们根据逻辑功能而不是生命周期钩子来组织代码。',
      '在本文中，我们将学习如何使用 Composition API 来构建 Vue 组件，包括如何定义响应式数据、如何使用计算属性和方法、如何处理生命周期事件等。',
      '首先，让我们了解一下 Composition API 的基本概念。Composition API 主要包括以下几个核心函数：',
      'ref() - 用于创建响应式的基本类型数据',
      'reactive() - 用于创建响应式的对象或数组',
      'computed() - 用于创建计算属性',
      'watch() - 用于监听数据变化',
      'onMounted(), onUpdated(), onUnmounted() - 用于处理生命周期事件',
      '使用 Composition API 的最大好处是代码的可复用性和可维护性。我们可以将相关的逻辑组织在一起，形成可复用的组合函数，从而提高代码的质量和开发效率。',
      '在接下来的章节中，我们将通过实际的代码示例来详细介绍这些概念和用法。'
    ],
    date: '2024-01-15',
    category: '前端开发',
    tags: ['Vue 3', 'Composition API', '前端开发', 'JavaScript']
  },
  {
    id: 2,
    title: '现代前端性能优化最佳实践',
    excerpt: '探讨现代前端开发中的性能优化技巧，包括代码分割、懒加载、缓存策略等，提升用户体验和页面加载速度。',
    content: [
      '在现代前端开发中，性能优化是一个非常重要的话题。一个性能良好的网站不仅可以提供更好的用户体验，还可以提高用户留存率和转化率。',
      '本文将介绍一些现代前端性能优化的最佳实践，包括：',
      '1. 代码分割和懒加载 - 通过将代码分割成多个小块，并在需要时才加载，可以显著减少初始加载时间。',
      '2. 图片优化 - 使用适当的图片格式、压缩图片大小、使用响应式图片等方法来优化图片加载。',
      '3. 缓存策略 - 合理使用浏览器缓存、CDN缓存等技术来减少网络请求。',
      '4. 减少重排和重绘 - 通过合理的DOM操作和CSS样式来减少浏览器的重排和重绘。',
      '5. 使用现代构建工具 - 使用Webpack、Vite等现代构建工具来优化代码打包和编译。',
      '6. 监控和分析 - 使用Lighthouse、WebPageTest等工具来监控和分析网站性能，找出性能瓶颈。',
      '通过实施这些最佳实践，我们可以构建出性能优异的前端应用，为用户提供更好的体验。'
    ],
    date: '2024-01-10',
    category: '性能优化',
    tags: ['性能优化', '前端开发', '代码分割', '懒加载']
  },
  {
    id: 3,
    title: 'TypeScript 类型系统详解',
    excerpt: '深入理解 TypeScript 的类型系统，包括基本类型、高级类型、泛型等，编写更安全、更可靠的代码。',
    content: [
      'TypeScript 是 JavaScript 的一个超集，它添加了静态类型检查功能。TypeScript 的类型系统是其最强大的特性之一，它可以帮助我们在编译时发现错误，提高代码的质量和可维护性。',
      '本文将详细介绍 TypeScript 的类型系统，包括：',
      '1. 基本类型 - number、string、boolean、null、undefined、void、symbol、bigint',
      '2. 高级类型 - 联合类型、交叉类型、类型别名、接口等',
      '3. 泛型 - 如何使用泛型来创建可复用的组件和函数',
      '4. 类型断言和类型守卫 - 如何在运行时进行类型检查',
      '5. 模块和命名空间 - 如何组织和管理 TypeScript 代码',
      '6. 声明文件 - 如何为第三方 JavaScript 库提供类型定义',
      '通过学习 TypeScript 的类型系统，我们可以编写更安全、更可靠的代码，减少运行时错误，提高开发效率。',
      'TypeScript 的类型系统虽然强大，但也有一定的学习曲线。建议初学者从基本类型开始学习，逐步掌握更高级的特性。'
    ],
    date: '2024-01-05',
    category: 'TypeScript',
    tags: ['TypeScript', '类型系统', '前端开发', 'JavaScript']
  }
]

// 根据路由参数获取文章
const articleId = computed(() => parseInt(route.params.id))

onMounted(() => {
  article.value = articlesData.find(item => item.id === articleId.value)
})

// 返回文章列表
const goBack = () => {
  router.push('/article')
}
</script>

<style scoped>
.article-detail-section {
  padding: 100px 0 80px;
  background-color: #ffffff;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background-color: #f3f4f6;
  color: #374151;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 40px;
}

.back-button:hover {
  background-color: #e5e7eb;
  color: #1f2937;
}

.article-detail {
  max-width: 800px;
  margin: 0 auto;
}

.article-header {
  margin-bottom: 40px;
}

.article-meta {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  font-size: 16px;
  color: #9ca3af;
}

.article-date,
.article-category {
  display: flex;
  align-items: center;
  gap: 6px;
}

.article-title {
  font-size: 42px;
  font-weight: 700;
  color: #1f2937;
  line-height: 1.2;
  margin-bottom: 24px;
}

.article-image {
  height: 400px;
  overflow: hidden;
  margin-bottom: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background-color: #f3f4f6;
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
}

.article-content {
  font-size: 18px;
  line-height: 1.8;
  color: #374151;
}

.article-body p {
  margin-bottom: 24px;
}

.article-footer {
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid #e5e7eb;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.article-tag {
  padding: 8px 16px;
  background-color: #f3f4f6;
  color: #6b7280;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
}

.article-not-found {
  text-align: center;
  padding: 80px 0;
}

.article-not-found h2 {
  font-size: 32px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 16px;
}

.article-not-found p {
  font-size: 18px;
  color: #6b7280;
  margin-bottom: 32px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .article-detail-section {
    padding: 80px 0 60px;
  }
  
  .article-title {
    font-size: 32px;
  }
  
  .article-image {
    height: 300px;
  }
  
  .article-content {
    font-size: 16px;
  }
  
  .back-button {
    padding: 8px 16px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .article-title {
    font-size: 28px;
  }
  
  .article-image {
    height: 250px;
  }
  
  .article-meta {
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }
}
</style>