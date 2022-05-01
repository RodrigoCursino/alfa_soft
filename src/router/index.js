import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "ContactsList" */ '@/views/ContactsList.vue')
  },
  {
    path: '/list',
    name: 'contacts-list',
    icon: 'icon-menu',
    menu: true,
    component: () => import(/* webpackChunkName: "ContactsList" */ '@/views/ContactsList.vue')
  },
  {
    path: '/register/:id?',
    name: 'contacts-register',
    icon: 'icon-user-add',
    menu: true,
    component: () => import(/* webpackChunkName: "ContactsRegister" */ '@/views/ContactsForm.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
