import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './views/index.vue'

const AboutPage = resolve => {
  require.ensure(['./views/about.vue'], () => {
    resolve(require('./views/about.vue'))
  })
}
const ErrorPage = resolve => {
  require.ensure(['./views/error.vue'], () => {
    resolve(require('./views/error.vue'))
  })
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '*',
    name: 'error',
    component: ErrorPage
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router