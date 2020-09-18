import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

import Page1 from '../views/Page1'
import Page2 from '../views/Page2'
import Page3 from '../views/Page3'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home,
    components: {
      default: Home,
      slot1: Page1,
      slot2: Page2,
      slot3: Page3
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
