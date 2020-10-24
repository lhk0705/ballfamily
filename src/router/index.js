import Vue from 'vue'
import Router from 'vue-router'
let home=()=>import('@/components/home')
let nba=()=>import('@/components/association/nba')
let cba=()=>import('@/components/association/cba')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/nba',
      name: 'nba',
      component: nba
    },
    {
      path: '/cba',
      name: 'cba',
      component: cba
    },
  ]
})
