import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', meta: { title: '刘伟博客' }, component: () => import('@/views/index.vue') },
  { path: '/article/:id', meta: { title: '刘伟博客-文章详情' }, component: () => import('@/views/article/detail.vue') },
  { path: '/about', meta: { title: '刘伟博客-关于' }, component: () => import('@/views/about/index.vue') },
  { path: '*', meta: { title: '刘伟博客' }, component: () => import('@/views/404.vue') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
