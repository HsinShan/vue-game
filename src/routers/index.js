import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      redirect: { name: 'Home' }
    },
    {
      name: 'Home',
      path: '/home',
      component: require('@/components/home.vue').default
    },
    {
      name: 'Turnable',
      path: '/turnable',
      component: require('@/components/turnable').default
    },
    {
      name: 'Scratchcard',
      path: '/scratchcard',
      component: require('@/components/scratchcard').default
    }
  ]
})

export default router
