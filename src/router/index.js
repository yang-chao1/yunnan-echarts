import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/screenPage2.vue')
  },
  // {
  //   path: '/page1',
  //   name: 'page1',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/screenPage2.vue')
  // },
  // {
  //   path: '/page2',
  //   name: 'page2',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/screenPage3.vue')
  // },
  // {
  //   path: '/liti',
  //   name: 'liti',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/liti.vue')
  // },
]

const router = new VueRouter({
  routes
})

export default router
