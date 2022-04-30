import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'contacts-list',
    component: Home
  },
  {
    path: '/list',
    name: 'contacts-list',
    component: () => import(/* webpackChunkName: "ContactsList" */ '@/views/ContactsList.vue')
  },
  {
    path: '/register',
    name: 'contacts-register',
    component: () => import(/* webpackChunkName: "ContactsRegister" */ '@/views/ContactsForm.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
