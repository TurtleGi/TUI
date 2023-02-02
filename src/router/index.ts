// 1. 导入创建路由对象 和 创建hash对象
import { createRouter, createWebHashHistory } from 'vue-router'

// 2. 导入组件
import HelloWorldVue from '../components/HelloWorld.vue'

// 3. 配置路由映射关系表
const routes = [
  // 路径和组件映射起来
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/HelloWorld.vue'),
  },
  {
    path: '/button',
    name: 'button',
    meta: { title: 'button' },
    component: () => import('../components/router/button.vue'),
  },
]
export const allRoutes = [...routes]

// 4. 创建路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes: allRoutes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    }
  },
})

// 5. 导出
export default router
