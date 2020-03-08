import Vue from 'vue'
import VueRouter from 'vue-router'
import Customers from '../component/AppCustomers.vue'
import Products from '../component/AppProducts.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'customers'
  },
  {
    path: '/customers',
    name: 'customers',
    component: Customers
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
