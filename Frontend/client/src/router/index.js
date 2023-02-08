import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreateProduct from '../views/CreateProduct.vue'
import Details from '../views/Details.vue'
import EditProduct from '../views/EditProduct.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createproduct',
    name: 'CreateProduct',
    component: CreateProduct
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/editproduct/:id',
    name: 'EditProduct',
    component: EditProduct,
    props: true
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
