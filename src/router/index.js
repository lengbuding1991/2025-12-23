import { createRouter, createWebHistory } from 'vue-router'

// 定义路由
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: () => import('../views/About.vue')
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import('../views/Article.vue')
  },
  {
    path: '/article/:id',
    name: 'ArticleDetail',
    component: () => import('../views/ArticleDetail.vue'),
    props: true
  },
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router