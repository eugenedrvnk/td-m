import Vue from 'vue'
import VueRouter from 'vue-router'
import ListPage from '../views/ListPage.vue'
import UserPage from '../views/UserPage'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: ListPage
  },
  {
    path: '/users/:id',
    component: UserPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
