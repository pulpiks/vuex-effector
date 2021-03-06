import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Example1 from '../components/FormVuex/FormVuex.vue'
import Example2 from '../components/FormEffector/FormEffector.vue'
import Example3 from '../components/FormEffector/FormEffector1.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/example1',
    name: 'example1',
    component: Example1
  },
  {
    path: '/example2',
    name: 'example2',
    component: Example2
  },
  {
    path: '/example3',
    name: 'example3',
    component: Example3
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
