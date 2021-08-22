import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入登录页面
import Login from '@/views/login'
import Layout from '@/views/layout'
import Home from '@/views/home'
import Article from '@/views/article'
import Publish from '@/views/publish'
import Image from '@/views/image'
import Comment from '@/views/comment'
import Setting from '@/views/setting'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/layout',
    name: 'layout',
    component: Layout,
    redirect: '/layout/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home
      },
      {
        path: 'article',
        name: 'article',
        component: Article
      },
      {
        path: 'publish',
        name: 'publish',
        component: Publish
      },
      {
        path: 'image',
        name: 'image',
        component: Image
      },
      {
        path: 'comment',
        name: 'comment',
        component: Comment
      },
      {
        path: 'setting',
        name: 'setting',
        component: Setting
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 全局前置守卫：初始化时执行、每次路由切换前执行
router.beforeEach((to, from, next) => {
  const user = JSON.parse(window.localStorage.getItem('user'))
  if (to.path !== '/') { // 判断非登录页面的登录状态
    if (user) { // 权限控制的具体规则
      next() // 放行
    } else {
      next('/')
    }
  } else {
    next() // 放行
  }
})

export default router
