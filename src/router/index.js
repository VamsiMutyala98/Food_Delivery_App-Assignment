import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../components/Login.vue'
import home from '../components/Home.vue'
import cart from '../components/Cart.vue'
import bill from '../components/Bill.vue'
import signup from '../components/SignUp.vue'
import finalMessage from '../components/finalMessage.vue'
import forgetPassword from '../components/ForgetPassword.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path:'/bill',
    name:'bill',
    component:bill
  },
  {
    path:'/signup',
    name:'signup',
    component:signup,
  },
  {
    path:'/finalMessage',
    name:'finalMessage',
    component:finalMessage
  },
  {
    path:'/forgetPassword',
    name:'forgetPassword',
    component:forgetPassword
  }
]

const router = new VueRouter({
  routes
})

export default router
