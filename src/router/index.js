import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/user/login'),
    hidden: true
  },
  {
    path: '/login/mobile',
    component: () => import('@/views/user/mobile'),
    hidden: true
  },
  {
    path: '/login/mobile/otp',
    name: 'mobile_otp',
    component: () => import('@/views/user/mobile_otp'),
    hidden: true
  },
  {
    path: '/register',
    component: () => import('@/views/register/index'),
    hidden: true
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      },
      {
        path: 'product',
        component: () => import('@/views/product/index'),
        name: 'Product',
        meta: { title: 'Product', icon: 'dashboard', affix: true }
      },
      {
        path: 'profile',
        component: () => import('@/views/user/profile'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/doctor',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/doctor'),
        name: 'Doctor',
        meta: { title: 'Doctor', icon: 'dashboard', affix: true }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
