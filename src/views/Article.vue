<template>
  <div class="articles-container">
    <!-- 页面标题 -->
    <section class="page-header">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="page-title">技术博客</h1>
          <p class="page-description">分享前端技术、工程化实践和性能优化经验</p>
        </div>
      </div>
    </section>

    <!-- 文章内容区域 -->
    <section class="articles-content">
      <div class="container">
        <div class="content-wrapper">
          <!-- 文章列表 -->
          <div class="articles-list">
            <article v-for="article in articles" :key="article.id" class="article-item">
              <router-link :to="`/article/${article.id}`" class="article-link">
                <div class="article-image">
                  <img :src="article.image" :alt="article.title" class="article-featured-image" />
                </div>
                <div class="article-info">
                  <div class="article-meta">
                    <span class="article-category">{{ article.category }}</span>
                    <span class="article-date">
                      <i class="far fa-calendar-alt"></i>
                      {{ article.date }}
                    </span>
                    <span class="article-read-time">
                      <i class="far fa-clock"></i>
                      {{ article.readTime }}
                    </span>
                  </div>
                  <h2 class="article-title">{{ article.title }}</h2>
                  <p class="article-excerpt">{{ article.excerpt }}</p>
                  <div class="article-tags">
                    <span v-for="(tag, index) in article.tags" :key="index" class="article-tag">{{ tag }}</span>
                  </div>
                </div>
              </router-link>
            </article>
          </div>
          
          <!-- 侧边栏 -->
          <div class="sidebar">
            <!-- 搜索框 -->
            <div class="search-box">
              <div class="search-input-wrapper">
                <i class="fas fa-search search-icon"></i>
                <input 
                  type="text" 
                  placeholder="搜索文章..."
                  class="search-input"
                />
              </div>
            </div>
            
            <!-- 作者信息 -->
            <div class="author-sidebar">
              <div class="author-sidebar-header">
                <img 
                  src="https://design.gemcoder.com/staticResource/echoAiSystemImages/9845b17161a7a18614f82fb57a7b9688.png" 
                  alt="作者头像"
                  class="author-sidebar-avatar"
                />
                <h3 class="author-sidebar-name">张开发</h3>
                <p class="author-sidebar-title">资深前端架构师</p>
              </div>
              <p class="author-sidebar-bio">
                专注于前端工程化、性能优化和用户体验，分享实用的技术干货。
              </p>
              <div class="author-sidebar-social">
                <a href="javascript:void(0);" class="social-link-sidebar">
                  <i class="fab fa-github"></i>
                </a>
                <a href="javascript:void(0);" class="social-link-sidebar">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="javascript:void(0);" class="social-link-sidebar">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="javascript:void(0);" class="social-link-sidebar">
                  <i class="fab fa-medium"></i>
                </a>
              </div>
            </div>
            
            <!-- 文章分类 -->
            <div class="categories">
              <h3 class="sidebar-section-title">文章分类</h3>
              <ul class="category-list">
                <li>
                  <a href="javascript:void(0);" class="category-item">
                    <i class="fas fa-folder-open"></i>
                    <span>前端工程化</span>
                    <span class="category-count">15</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="category-item">
                    <i class="fas fa-folder-open"></i>
                    <span>框架应用</span>
                    <span class="category-count">20</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="category-item">
                    <i class="fas fa-folder-open"></i>
                    <span>性能优化</span>
                    <span class="category-count">12</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="category-item">
                    <i class="fas fa-folder-open"></i>
                    <span>设计模式</span>
                    <span class="category-count">8</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <!-- 热门标签 -->
            <div class="tags">
              <h3 class="sidebar-section-title">热门标签</h3>
              <div class="tag-list">
                <a href="javascript:void(0);" class="tag-item">#前端工程化</a>
                <a href="javascript:void(0);" class="tag-item">#Webpack</a>
                <a href="javascript:void(0);" class="tag-item">#Vite</a>
                <a href="javascript:void(0);" class="tag-item">#性能优化</a>
                <a href="javascript:void(0);" class="tag-item">#React</a>
                <a href="javascript:void(0);" class="tag-item">#Vue</a>
                <a href="javascript:void(0);" class="tag-item">#设计模式</a>
                <a href="javascript:void(0);" class="tag-item">#TypeScript</a>
              </div>
            </div>
            
            <!-- 最新文章 -->
            <div class="latest-articles">
              <h3 class="sidebar-section-title">最新文章</h3>
              <ul class="latest-articles-list">
                <li v-for="article in latestArticles" :key="article.id">
                  <router-link :to="`/article/${article.id}`" class="latest-article-item">
                    <img 
                      :src="article.image" 
                      :alt="article.title"
                      class="latest-article-image"
                    />
                    <div class="latest-article-info">
                      <h4 class="latest-article-title">{{ article.title }}</h4>
                      <p class="latest-article-date">
                        <i class="far fa-calendar-alt"></i>
                        {{ article.date }}
                      </p>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 模拟文章数据
const articles = [
  {
    id: 1,
    title: "现代前端工程化实践指南",
    image: "https://design.gemcoder.com/staticResource/echoAiSystemImages/07fea791d1050c61fc4841d58b9e709d.png",
    date: "2023年11月15日",
    category: "前端工程化",
    readTime: "12分钟阅读",
    tags: ["#前端工程化", "#Webpack", "#Vite", "#性能优化"],
    excerpt: "本文全面介绍了现代前端工程化的实践指南，包括构建工具、代码规范、测试策略和性能优化等方面，帮助开发者提升开发效率和代码质量。"
  },
  {
    id: 2,
    title: "前端性能优化指南：从加载到渲染",
    image: "https://design.gemcoder.com/staticResource/echoAiSystemImages/2a519e362183d2a08af1a4c96de1b92e.png",
    date: "2023年10月28日",
    category: "性能优化",
    readTime: "15分钟阅读",
    tags: ["#性能优化", "#加载优化", "#渲染性能"],
    excerpt: "深入探讨现代前端性能优化技术，包括资源加载优化、渲染性能提升和运行时优化等方面，帮助开发者构建更快、更流畅的用户体验。"
  },
  {
    id: 3,
    title: "React组件设计模式：从基础到高级",
    image: "https://design.gemcoder.com/staticResource/echoAiSystemImages/7add1cc981579a7f76ee50869a2f006e.png",
    date: "2023年7月18日",
    category: "框架应用",
    readTime: "18分钟阅读",
    tags: ["#React", "#组件设计", "#设计模式"],
    excerpt: "全面介绍React组件设计的各种模式，从基础的容器/展示组件分离到高级的复合组件和Hooks模式，帮助开发者编写更加可维护和可扩展的React应用。"
  },
  {
    id: 4,
    title: "TypeScript在大型项目中的实践与最佳实践",
    image: "https://design.gemcoder.com/staticResource/echoAiSystemImages/9eefac78f534423dd4355e80fc7b55bc.png",
    date: "2023年9月5日",
    category: "TypeScript",
    readTime: "10分钟阅读",
    tags: ["#TypeScript", "#类型系统", "#代码质量"],
    excerpt: "分享在大型项目中使用TypeScript的实践经验和最佳实践，包括类型定义、接口设计、错误处理等方面，帮助团队充分发挥TypeScript的优势。"
  }
]

// 最新文章（用于侧边栏）
const latestArticles = articles.slice(0, 3)
</script>

<style scoped lang="scss">
// 文章容器
.articles-container {
  min-height: 100vh;
  background-color: #f3f4f6;
  padding-bottom: 64px;
}

// 页面标题区域
.page-header {
  padding: 80px 0;
  background: linear-gradient(to right, #10b98190, #10b98180);
  color: white;
  text-align: center;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.page-description {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
}

// 文章内容区域
.articles-content {
  padding: 48px 0;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
}

// 文章列表
.articles-list {
  @media (min-width: 1024px) {
    width: 66.666%;
  }
}

.article-item {
  display: block;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 32px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
}

.article-link {
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.article-image {
  width: 100%;
  height: 240px;
  overflow: hidden;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 300px;
    height: 200px;
  }
}

.article-featured-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  .article-item:hover & {
    transform: scale(1.05);
  }
}

.article-info {
  padding: 24px;
  flex: 1;
}

.article-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
  font-size: 14px;
  color: #6b7280;
}

.article-category {
  padding: 4px 12px;
  background-color: #10b981;
  color: white;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
}

.article-date,
.article-read-time {
  display: flex;
  align-items: center;
  gap: 8px;
}

.article-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: #1f2937;
  transition: color 0.3s ease;

  .article-item:hover & {
    color: #10b981;
  }
}

.article-excerpt {
  font-size: 16px;
  line-height: 1.7;
  color: #4b5563;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.article-tag {
  padding: 4px 10px;
  background-color: #f3f4f6;
  color: #4b5563;
  font-size: 12px;
  border-radius: 9999px;
  transition: background-color 0.3s ease, color 0.3s ease;

  .article-item:hover & {
    background-color: #10b981;
    color: white;
  }
}

// 侧边栏
.sidebar {
  @media (min-width: 1024px) {
    width: 33.333%;
  }
}

.search-box {
  margin-bottom: 32px;
}

.search-input-wrapper {
  position: relative;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: #9ca3af;
}

.search-input {
  width: 100%;
  padding: 12px 12px 12px 44px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: #10b981;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }
}

// 侧边栏作者信息
.author-sidebar {
  margin-bottom: 32px;
  padding: 24px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.author-sidebar-header {
  margin-bottom: 16px;
}

.author-sidebar-avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 12px;
  border: 4px solid rgba(16, 185, 129, 0.2);
}

.author-sidebar-name {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 4px;
  color: #1f2937;
}

.author-sidebar-title {
  font-size: 16px;
  color: #6b7280;
  margin-bottom: 16px;
}

.author-sidebar-bio {
  font-size: 16px;
  line-height: 1.7;
  color: #4b5563;
  margin-bottom: 24px;
}

.author-sidebar-social {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.social-link-sidebar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #6b7280;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #10b981;
    color: white;
  }
}

// 侧边栏分类
.categories {
  margin-bottom: 32px;
  padding: 24px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.sidebar-section-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #1f2937;
  display: block;
}

.category-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.category-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: #4b5563;
  transition: color 0.3s ease;
  padding: 8px 0;
  width: 100%;

  &:hover {
    color: #10b981;
  }

  i {
    margin-right: 10px;
    color: #9ca3af;
    width: 18px;
    text-align: center;
  }
  
  span:first-of-type {
    flex: 1;
  }
}

.category-count {
  padding: 2px 10px;
  background-color: #f3f4f6;
  color: #1f2937;
  font-size: 14px;
  border-radius: 9999px;
  min-width: 20px;
  text-align: center;
}

// 侧边栏热门标签
.tags {
  margin-bottom: 32px;
  padding: 24px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag-item {
  padding: 6px 12px;
  background-color: #f3f4f6;
  color: #4b5563;
  font-size: 14px;
  border-radius: 9999px;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-right: 8px;
  margin-bottom: 8px;

  &:hover {
    background-color: #10b981;
    color: white;
  }
}

// 侧边栏最新文章
.latest-articles {
  padding: 24px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.latest-articles-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.latest-article-item {
  display: flex;
  gap: 12px;
  transition: color 0.3s ease;
  
  &:hover .latest-article-title {
    color: #10b981;
  }
}

.latest-article-image {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
}

.latest-article-info {
  flex: 1;
}

.latest-article-title {
  font-size: 14px;
  font-weight: 500;
  color: #1f2937;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.3s ease;
}

.latest-article-date {
  font-size: 12px;
  color: #9ca3af;
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>