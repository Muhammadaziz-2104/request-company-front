import { createRouter, createWebHistory } from 'vue-router'
import ViewHome from '../views/ViewHome.vue'
import store from '../store'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: ViewHome,
    meta: {
      layout: 'main',
      auth:true
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/AppHelp.vue'),
    meta: {
      layout: 'main',
      auth:true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/AppLogin.vue'),
    meta: {
      layout: 'auth',
      auth:false
    }
  },
  {
    path: '/requests/:id?',
    name: 'Request',
    component: () => import('../views/ViewRequest.vue'),
    meta: {
      layout: 'main',
      auth:true
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'active',
  linkActiveClass: 'active'
})
router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth
  if(requireAuth && store.getters['auth/isAuthtificated']) {
    next()
    // console.log(1)
  }
  else if(requireAuth && !store.getters['auth/isAuthtificated']){
    next('/login?message=auth')
    // console.log(2)
  }
  else {
    next()
    // console.log(3)

  }
})
export default router
