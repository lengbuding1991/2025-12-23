<template>
  <div class="article-container">
    <!-- 文章头部区域 -->
  <section class="article-header">
    <div class="container">
      <div class="max-w-3xl mx-auto text-center">
        <div class="category-tag">{{ articleDetail.category }}</div>
        <h1 class="article-title">{{ articleDetail.title }}</h1>
        <div class="article-meta">
          <div class="author-info">
            <img 
              :src="author.avatar" 
              :alt="author.name" 
              class="author-avatar"
            />
            <span>{{ author.name }}</span>
          </div>
          <span class="divider">•</span>
          <span class="publish-date">
            <i class="far fa-calendar-alt"></i>
            {{ articleDetail.date }}
          </span>
          <span class="divider">•</span>
          <span class="read-time">
            <i class="far fa-clock"></i>
            {{ articleDetail.readTime }}
          </span>
        </div>
        <div class="article-tags">
          <span class="tag" v-for="tag in articleDetail.tags" :key="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </section>

    <!-- 文章内容区域 -->
    <section class="article-content">
      <div class="container">
        <div class="content-wrapper">
          <!-- 文章主体 -->
          <div class="main-content">
            <!-- 特色图片 -->
            <div class="featured-image">
              <img 
                :src="articleDetail.featuredImage" 
                :alt="articleDetail.title"
                class="image"
              />
            </div>
            
            <!-- 文章内容动态渲染 -->
            <div class="content-body">
              <!-- 支持富文本HTML内容 -->
              <div v-if="typeof articleDetail.content === 'string'" v-html="articleDetail.content"></div>
              <!-- 兼容旧的结构化内容格式 -->
              <template v-else>
                <template v-for="(item, index) in articleDetail.content" :key="index">
                  <!-- 代码块特殊处理 -->
                  <div v-if="item.type === 'code'" class="code-block">
                    <pre><code>{{ item.text }}</code></pre>
                  </div>
                  <!-- 其他内容类型 -->
                  <component 
                    v-else
                    :is="item.type"
                    :class="getClassByType(item.type)"
                    v-html="item.text"
                  ></component>
                </template>
              </template>
            </div>
            
            <!-- 文章作者信息 -->
            <div class="author-section">
              <div class="author-card">
                <img 
                  src="https://design.gemcoder.com/staticResource/echoAiSystemImages/6963a53409cbf8c8e4a49e41e65e5812.png" 
                  alt="作者头像" 
                  class="author-large-avatar"
                />
                <div class="author-details">
                  <h3 class="author-name">张开发</h3>
                  <p class="author-title">资深前端架构师 | 技术作家 | 开源贡献者</p>
                  <p class="author-bio">
                    拥有8年前端开发经验，专注于前端工程化和性能优化，曾主导多个大型Web应用的架构设计和技术选型。
                  </p>
                  <div class="author-social">
                    <a href="javascript:void(0);" class="social-link">
                      <i class="fab fa-github"></i>
                    </a>
                    <a href="javascript:void(0);" class="social-link">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="javascript:void(0);" class="social-link">
                      <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="javascript:void(0);" class="social-link">
                      <i class="fab fa-medium"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- 相关文章推荐 -->
            <div class="related-articles">
              <h3 class="related-title">相关推荐</h3>
              <div class="articles-grid">
                <router-link 
                  :to="`/article/${article.id}`" 
                  class="article-card"
                  v-for="article in relatedArticles" 
                  :key="article.id"
                >
                  <img 
                    :src="article.image" 
                    :alt="article.title"
                    class="card-image"
                  />
                  <div class="card-content">
                    <div class="card-date">{{ article.date }}</div>
                    <h4 class="card-title">{{ article.title }}</h4>
                    <p class="card-excerpt">{{ article.excerpt }}</p>
                  </div>
                </router-link>
              </div>
            </div>
            
            <!-- 评论区 -->
            <div class="comments-section">
              <h3 class="comments-title">评论区</h3>
              <div class="comments-container">
                <!-- 发表评论 -->
                <div class="comment-form-section">
                  <h4 class="form-title">发表评论</h4>
                  <form class="comment-form">
                    <textarea 
                      class="comment-textarea"
                      rows="4"
                      placeholder="分享你的想法..."
                    ></textarea>
                    <div class="form-actions">
                      <button type="submit" class="submit-button">提交评论</button>
                    </div>
                  </form>
                </div>
                
                <!-- 最新评论 -->
                <div class="latest-comments">
                  <h4 class="comments-subtitle">最新评论 ({{ totalComments }})</h4>
                  <div class="comments-list">
                    <div class="comment-item" v-for="comment in comments" :key="comment.id">
                      <img 
                        :src="comment.avatar" 
                        :alt="comment.author"
                        class="comment-avatar"
                      />
                      <div class="comment-content">
                        <div class="comment-header">
                          <h5 class="comment-author">{{ comment.author }}</h5>
                          <span class="comment-date">{{ comment.date }}</span>
                        </div>
                        <p class="comment-text">{{ comment.content }}</p>
                        <button class="like-button">
                          <i class="far fa-thumbs-up"></i>
                          赞同 ({{ comment.likeCount }})
                        </button>
                      </div>
                    </div>
                  </div>
                  <button class="load-more-button">查看更多评论</button>
                </div>
              </div>
            </div>
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
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="category-item">
                    <i class="fas fa-folder-open"></i>
                    <span>框架应用</span>
                    <span class="category-count">20</span>
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
// 从路由参数获取文章ID
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const articleId = route.params.id

// 模拟所有文章的详细信息数据
const allArticles = [
  {
    id: 1,
    title: "现代前端工程化实践指南",
    category: "前端工程化",
    date: "2023年11月15日",
    readTime: "12分钟阅读",
    tags: ["#前端工程化", "#Webpack", "#Vite", "#性能优化"],
    featuredImage: "https://design.gemcoder.com/staticResource/echoAiSystemImages/07fea791d1050c61fc4841d58b9e709d.png",
    content: [
      {
        type: "h3",
        text: "1.2 Vite：极速的开发体验"
      },
      {
        type: "p",
        text: "Vite基于浏览器原生ES模块，提供了极速的开发启动和热更新体验，越来越受到开发者青睐："
      },
      {
        type: "code",
        text: "// vite.config.js 示例"
      },
      {
        type: "h2",
        text: "结语：工程化是持续演进的过程"
      },
      {
        type: "p",
        text: "前端工程化不是一成不变的标准，而是随着技术发展不断演进的过程。作为开发者，我们需要持续学习和实践新的工具和方法，不断优化我们的开发流程。"
      },
      {
        type: "p",
        text: "希望本文能够帮助你建立对前端工程化的系统认识，在实际项目中应用这些最佳实践，提升开发效率和代码质量。"
      }
    ]
  },
  {
    id: 2,
    title: "前端性能优化指南：从加载到渲染",
    category: "性能优化",
    date: "2023年10月28日",
    readTime: "15分钟阅读",
    tags: ["#性能优化", "#加载优化", "#渲染性能"],
    featuredImage: "https://design.gemcoder.com/staticResource/echoAiSystemImages/2a519e362183d2a08af1a4c96de1b92e.png",
    content: [
      {
        type: "h2",
        text: "前端性能优化的重要性"
      },
      {
        type: "p",
        text: "性能是影响用户体验的关键因素，一个快速响应的网站能够显著提升用户满意度和转化率。"
      },
      {
        type: "h3",
        text: "1. 资源加载优化"
      },
      {
        type: "p",
        text: "通过合理的资源加载策略，可以有效减少页面加载时间："
      }
    ]
  },
  {
    id: 3,
    title: "React组件设计模式：从基础到高级",
    category: "框架应用",
    date: "2023年7月18日",
    readTime: "18分钟阅读",
    tags: ["#React", "#组件设计", "#设计模式"],
    featuredImage: "https://design.gemcoder.com/staticResource/echoAiSystemImages/7add1cc981579a7f76ee50869a2f006e.png",
    content: [
      {
        type: "h2",
        text: "React组件设计的基本原则"
      },
      {
        type: "p",
        text: "设计高质量的React组件需要遵循一些基本原则，包括单一职责、可复用性和可测试性。"
      }
    ]
  },
  {
    id: 4,
    title: "TypeScript在大型项目中的实践与最佳实践",
    category: "TypeScript",
    date: "2023年9月5日",
    readTime: "10分钟阅读",
    tags: ["#TypeScript", "#类型系统", "#代码质量"],
    featuredImage: "https://design.gemcoder.com/staticResource/echoAiSystemImages/9eefac78f534423dd4355e80fc7b55bc.png",
    content: [
      {
        type: "h2",
        text: "TypeScript的核心优势"
      },
      {
        type: "p",
        text: "TypeScript通过静态类型检查，显著提高了代码的可维护性和可靠性，特别适合大型项目开发。"
      }
    ]
  }
]

// 根据路由参数获取对应文章的详细信息
const articleDetail = allArticles.find(article => article.id === Number(articleId)) || allArticles[0]

// 模拟作者信息
const author = {
  id: 1,
  name: "张开发",
  title: "资深前端架构师 | 技术作家 | 开源贡献者",
  bio: "拥有8年前端开发经验，专注于前端工程化和性能优化，曾主导多个大型Web应用的架构设计和技术选型。",
  avatar: "https://design.gemcoder.com/staticResource/echoAiSystemImages/7054904f2e1ff6a86735e5618d9f935e.png",
  socialLinks: [
    { name: "github", icon: "fab fa-github" },
    { name: "twitter", icon: "fab fa-twitter" },
    { name: "linkedin", icon: "fab fa-linkedin" },
    { name: "medium", icon: "fab fa-medium" }
  ]
}

// 模拟相关文章数据
const relatedArticles = [
  {
    id: 2,
    title: "前端性能优化指南：从加载到渲染",
    image: "https://design.gemcoder.com/staticResource/echoAiSystemImages/2a519e362183d2a08af1a4c96de1b92e.png",
    date: "2023年10月28日",
    excerpt: "深入探讨现代前端性能优化技术，包括资源加载优化、渲染性能提升和运行时优化等方面..."
  },
  {
    id: 3,
    title: "React组件设计模式：从基础到高级",
    image: "https://design.gemcoder.com/staticResource/echoAiSystemImages/7add1cc981579a7f76ee50869a2f006e.png",
    date: "2023年7月18日",
    excerpt: "全面介绍React组件设计的各种模式，从基础的容器/展示组件分离到高级的复合组件和Hooks模式..."
  }
]

// 模拟评论数据
const comments = [
  {
    id: 1,
    author: "李工程师",
    avatar: "https://design.gemcoder.com/staticResource/echoAiSystemImages/a62614d776776aaaa52562ece25bada9.png",
    date: "3天前",
    content: "非常全面的前端工程化指南！特别是关于Webpack和Vite的对比分析很有帮助，解决了我一直以来的困惑。",
    likeCount: 12
  },
  {
    id: 2,
    author: "王开发",
    avatar: "https://design.gemcoder.com/staticResource/echoAiSystemImages/9845b17161a7a18614f82fb57a7b9688.png",
    date: "5天前",
    content: "文章写得很详细，对我这种刚接触工程化的新手很友好，感谢分享！",
    likeCount: 8
  }
]

// 评论总数
const totalComments = comments.length

// 文章分类
const categories = [
  { id: 1, name: "前端工程化", count: 15 },
  { id: 2, name: "框架应用", count: 20 }
]

// 热门标签
const hotTags = [
  { id: 1, name: "#前端工程化" },
  { id: 2, name: "#Webpack" },
  { id: 3, name: "#Vite" },
  { id: 4, name: "#性能优化" }
]

// 最新文章（用于侧边栏）
const latestArticles = [
  {
    id: 2,
    title: "前端性能优化指南：从加载到渲染",
    image: "https://design.gemcoder.com/staticResource/echoAiSystemImages/9eefac78f534423dd4355e80fc7b55bc.png",
    date: "2023年10月28日"
  },
  {
    id: 3,
    title: "React组件设计模式：从基础到高级",
    image: "https://design.gemcoder.com/staticResource/echoAiSystemImages/7add1cc981579a7f76ee50869a2f006e.png",
    date: "2023年7月18日"
  }
]

// 根据内容类型获取对应的CSS类名
const getClassByType = (type) => {
  switch(type) {
    case 'h2':
      return 'conclusion-title';
    case 'h3':
      return 'section-title';
    case 'p':
      return 'paragraph';
    case 'code':
      return 'code-block';
    default:
      return '';
  }
}
</script>

<style scoped lang="scss">
// 文章容器
.article-container {
  min-height: 100vh;
  background-color: #f3f4f6;
}

// 文章头部区域
.article-header {
  padding: 112px 0 64px;
  background: linear-gradient(to right, #10b98190, #10b98180);
  color: white;
  text-align: center;
}

.category-tag {
  display: inline-block;
  padding: 4px 16px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 24px;
}

.article-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 24px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.article-meta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
  font-size: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
}

.author-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.divider {
  display: none;
  @media (min-width: 768px) {
    display: inline-block;
  }
}

.publish-date,
.read-time {
  display: flex;
  align-items: center;
  gap: 8px;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.tag {
  padding: 4px 12px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  font-size: 14px;
}

// 文章内容区域
.article-content {
  padding: 64px 0;
  background-color: white;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
}

.main-content {
  @media (min-width: 1024px) {
    width: 66.666%;
  }
}

.featured-image {
  margin-bottom: 48px;
}

.image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.code-block {
  margin-bottom: 32px;
  padding: 24px;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.code-block pre {
  margin: 0;
  font-size: 14px;
  overflow-x: auto;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #10b981;
}

.paragraph {
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 24px;
  color: #4b5563;
}

.conclusion-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 48px 0 24px;
  color: #1f2937;
}

// 作者信息
.author-section {
  margin: 64px 0;
  padding: 32px 0;
  border-top: 1px solid #e5e7eb;
}

.author-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
}

.author-large-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

.author-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.author-title {
  font-size: 16px;
  color: #6b7280;
  margin-bottom: 16px;
}

.author-bio {
  font-size: 16px;
  line-height: 1.7;
  color: #4b5563;
  max-width: 768px;
  margin-bottom: 24px;
}

.author-social {
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
}

.social-link {
  font-size: 24px;
  color: #6b7280;
  transition: color 0.3s ease;

  &:hover {
    color: #10b981;
  }
}

// 相关文章推荐
.related-articles {
  margin: 64px 0;
}

.related-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 32px;
  color: #1f2937;
}

.articles-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.article-card {
  display: block;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
}

.card-image {
  width: 100%;
  height: 192px;
  object-fit: cover;
  transition: transform 0.5s ease;

  .article-card:hover & {
    transform: scale(1.05);
  }
}

.card-content {
  padding: 20px;
}

.card-date {
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 8px;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #1f2937;
  transition: color 0.3s ease;

  .article-card:hover & {
    color: #10b981;
  }
}

.card-excerpt {
  font-size: 16px;
  color: #6b7280;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

// 评论区
.comments-section {
  margin: 64px 0;
}

.comments-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 32px;
  color: #1f2937;
}

.comments-container {
  background-color: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.comment-form-section {
  margin-bottom: 32px;
}

.form-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1f2937;
}

.comment-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.comment-textarea {
  width: 100%;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  resize: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: #10b981;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }
}

.form-actions {
  display: flex;
  justify-content: flex-end;
}

.submit-button {
  padding: 12px 24px;
  background-color: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #059669;
  }
}

.latest-comments {
  border-top: 1px solid #e5e7eb;
  padding-top: 32px;
}

.comments-subtitle {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 24px;
  color: #1f2937;
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
}

.comment-item {
  display: flex;
  gap: 16px;
}

.comment-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.comment-content {
  flex: 1;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.comment-author {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
}

.comment-date {
  font-size: 14px;
  color: #6b7280;
}

.comment-text {
  font-size: 16px;
  line-height: 1.7;
  color: #4b5563;
  margin-bottom: 12px;
}

.like-button {
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  font-size: 14px;
  color: #10b981;
  cursor: pointer;
  transition: text-decoration 0.3s ease;

  &:hover {
    text-decoration: underline;
  }
}

.load-more-button {
  width: 100%;
  padding: 12px;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  color: #4b5563;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f9fafb;
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
  gap: 4px;
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