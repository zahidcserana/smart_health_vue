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
    path: '/doctors',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/doctor'),
        name: 'Doctor',
        meta: { title: 'Doctor', icon: 'dashboard', affix: true }
      },
      {
        path: 'appointments',
        component: () => import('@/views/doctor/appointments'),
        name: 'Appointment',
        meta: { title: 'Appointment', icon: 'dashboard', affix: true }
      },
      {
        path: 'serials',
        component: () => import('@/views/doctor/serials'),
        name: 'Serial',
        meta: { title: 'Serial', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/bloods',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/blood'),
        name: 'BloodList',
        meta: {
          title: 'Blood List',
          icon: 'list'
        }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/blood/add')
      },
      {
        path: 'add',
        component: () => import('@/views/blood/add'),
        name: 'BloodAdd',
        meta: {
          title: 'Blood Add',
          icon: 'list'
        }
      }
    ]
  },
  {
    path: '/ambulance',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/ambulance'),
        name: 'AmbulanceList',
        meta: {
          title: 'Ambulance List',
          icon: 'list'
        }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/ambulance/add')
      },
      {
        path: 'add',
        component: () => import('@/views/ambulance/add'),
        name: 'BAmbulanceAdd',
        meta: {
          title: 'Ambulance Add',
          icon: 'list'
        }
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
