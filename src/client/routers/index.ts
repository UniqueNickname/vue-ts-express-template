import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './views/index.vue'

const AboutPage = resolve => {
  require.ensure(['./views/about.vue'], () => {
    resolve(require('./views/about.vue'))
  })
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      layout: 'test'
    },
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
    meta: {
      layout: 'default'
    },
  },
  {
    path: '*',
    name: 'error',
    meta: {
      layout: 'error'
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router