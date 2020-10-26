import Vue from 'vue'
import Router from 'vue-router'
let home=()=>import('@/components/home/home')
let nba=()=>import('@/components/association/nba/nba')
let cba=()=>import('@/components/association/cba/cba')
let nba_matches=()=>import('@/components/association/nba/nba_matches')
let nba_rates=()=>import('@/components/association/nba/nba_rates')
let nba_films=()=>import('@/components/association/nba/nba_films')
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
      component: nba,
      children:[
        {
          path:'/nba_matches',
          name:'nba_matches',
          component:nba_matches
        },
        {
          path:'/nba_rates',
          name:'nba_rates',
          component:nba_rates
        },
        {
          path:'/nba_films',
          name:'nba_films',
          component:nba_films
        },
      ]
    },
    {
      path: '/cba',
      name: 'cba',
      component: cba
    },
  ]
})
