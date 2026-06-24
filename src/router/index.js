import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('../views/ResumeView.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/ServicesView.vue')
  },
  {
    path: '/services/:id',
    name: 'ServiceDetails',
    component: () => import('../views/ServiceDetailsView.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/PortfolioView.vue')
  },
  {
    path: '/portfolio/:id',
    name: 'PortfolioDetails',
    component: () => import('../views/PortfolioDetailsView.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
