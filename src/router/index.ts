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
  {
    path: '/layout',
    name: 'layout',
    meta: { title: 'layout' },
    component: () => import('../components/router/layout.vue'),
  },
  {
    path: '/grid',
    name: 'grid',
    meta: { title: 'grid' },
    component: () => import('../components/router/grid.vue'),
  },
  {
    path: '/list',
    name: 'list',
    meta: { title: 'list' },
    component: () => import('../components/router/list.vue'),
  },
  {
    path: '/table',
    name: 'table',
    meta: { title: 'table' },
    component: () => import('../components/router/table.vue'),
  },
  {
    path: '/avatar',
    name: 'avatar',
    meta: { title: 'avatar' },
    component: () => import('../components/router/avatar.vue'),
  },
  {
    path: '/progress',
    name: 'progress',
    meta: { title: 'progress' },
    component: () => import('../components/router/progress.vue'),
  },
  {
    path: '/icon',
    name: 'icon',
    meta: { title: 'icon' },
    component: () => import('../components/router/icon.vue'),
  },
  {
    path: '/breadcrumb',
    name: 'breadcrumb',
    meta: { title: 'breadcrumb' },
    component: () => import('../components/router/breadcrumb.vue'),
  },
  {
    path: '/dropdown',
    name: 'dropdown',
    meta: { title: 'dropdown' },
    component: () => import('../components/router/dropdown.vue'),
  },
  {
    path: '/menu',
    name: 'menu',
    meta: { title: 'menu' },
    component: () => import('../components/router/menu.vue')
  },
  {
    path: '/form',
    name: 'form',
    meta: { title: 'form' },
    component: () => import('../components/router/form.vue'),
  },
  {
    path: '/switch',
    name: 'switch',
    meta: { title: 'switch' },
    component: () => import('../components/router/switch.vue'),
  },
  {
    path: '/timepick',
    name: 'timepick',
    meta: { title: 'timepick' },
    component: () => import('../components/router/timepick.vue'),
  },
  {
    path: '/upload',
    name: 'upload',
    meta: { title: 'upload' },
    component: () => import('../components/router/upload.vue'),
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
