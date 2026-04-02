import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Product from '../views/Product.vue'
import Checkout from '../views/Checkout.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
  },
  {
    path: '/checkout',
    component: Checkout,
  },
]

const router = createRouter({
  history: createWebHistory('/vue-Amazon/'),
  routes,
})

export default router
