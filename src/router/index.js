import Vue from 'vue'
import Router from 'vue-router'
let home=()=>import('@/components/home/home')
let nba=()=>import('@/components/association/nba/nba')
let cba=()=>import('@/components/association/cba/cba')
let nba_matches=()=>import('@/components/association/nba/nba_matches')
let nba_rates=()=>import('@/components/association/nba/nba_rates')
let nba_films=()=>import('@/components/association/nba/nba_films')
let cba_matches=()=>import('@/components/association/cba/cba_matches')
let cba_rates=()=>import('@/components/association/cba/cba_rates')
let cba_films=()=>import('@/components/association/cba/cba_films')
let bbs=()=>import ('@/components/community/bbs/bbs') ;
let bbsHome=()=>import('@/components/community/bbs/bbsHome') ;
let newBbs=()=>import ('@/components/community/bbs/newBbs');
let meeting=()=>import ('@/components/community/meeting/meeting');
let newMeet=()=>import ('@/components/community/meeting/newMeet');
let meetingHome=()=>import ('@/components/community/meeting/meetingHome');
let community=()=>import('@/components/community/community')
let login=()=>import('@/components/origin/login')
let register=()=>import('@/components/origin/register')
let myInfo=()=>import('@/components/origin/myInfo')
let business=()=>import('@/components/business/business')
let busHome=()=>import('@/components/business/busHome/busHome')
let items=()=>import('@/components/business/item/items')
let singleItem=()=>import('@/components/business/item/singleItem')
let singleStore=()=>import('@/components/business/store/singleStore')
let stores=()=>import('@/components/business/store/stores')
let itemTotal=()=>import('@/components/business/item/singleItem/itemTotal')
let itemComment=()=>import('@/components/business/item/singleItem/itemComment')
let mySite=()=>import('@/components/origin/myInfo/mySite')
let myMark=()=>import('@/components/origin/myInfo/myMark')
let myBall=()=>import('@/components/origin/myInfo/myBall')
let myOrder=()=>import('@/components/origin/myInfo/myOrder')
let myComment=()=>import('@/components/origin/myInfo/myComment')
let myStore=()=>import('@/components/origin/myInfo/myStore')
let myChart=()=>import('@/components/origin/myInfo/myChart')


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/business',
    name:'business',
    component:business,
    redirect:'/busHome',
    children:[
      {
        path:'/busHome',
        name:'busHome',
        component:busHome
      },
      {
        path:'/items',
        name:'items',
        component:items
      },
      {
        path:'/singleItem',
        name:'singleItem',
        component:singleItem,
        redirect:'/itemTotal',
        children:[{
        path:'/itemTotal',
        name:'itemTotal',
        component:itemTotal
        },{
          path:'/itemComment',
          name:'itemComment',
          component:itemComment
        }]
      },
      {
        path:'/singleStore',
        name:'singleStore',
        component:singleStore
      },
      {
        path:'/stores',
        name:'stores',
        component:stores
      },
    ]
    },
    {
      path:'/myInfo',
      name:'myInfo',
      component:myInfo,
      redirect:'/mySite',
      children:[
        {
          path:'/mySite',
        name:'mySite',
        component:mySite
        },
        {
          path:'/myChart',
        name:'myChart',
        component:myChart
        },
        {
          path:'/myMark',
        name:'myMark',
        component:myMark
        },
        {
          path:'/myBall',
        name:'myBall',
        component:myBall
        },
        {
          path:'/myOrder',
        name:'myOrder',
        component:myOrder
        },
        {
          path:'/myComment',
        name:'myComment',
        component:myComment
        },
        {
          path:'/myStore',
        name:'myStore',
        component:myStore
        },
      ]
      },
    {
    path:'/login',
    name:'login',
    component:login
    },
    {
      path:'/register',
      name:'register',
      component:register
      },
    {
      path: '/',
      name: 'home',
      component: home,
      meta:{
        keepAlive:true,
        cacheControl:{
          maxAge:1000*60
        }
      }
    },
    {
      path: '/nba',
      name: 'nba',
      component: nba,
      redirect:'/nba_matches',
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
      component: cba,
      redirect:'/cba_matches',
      children:[
        {
          path:'/cba_matches',
          name:'cba_matches',
          component:cba_matches
        },
        {
          path:'/cba_rates',
          name:'cba_rates',
          component:cba_rates
        },
        {
          path:'/cba_films',
          name:'cba_films',
          component:cba_films
        },
      ]
    },
    {
      path:'/community',
      name:'community',
      component:community,
      redirect:'/bbsHome',
      children:[
        {
          path:'/bbs',
          name:'bbs',
          component:bbs,
        },
        {
          path:'/newBbs',
          name:'newBbs',
          component:newBbs,
        },
        {
          path:'/bbsHome',
          name:'bbsHome',
          component:bbsHome,
        },
        {
          path:'/meeting',
          name:'meeting',
          component:meeting,
        },
        {
          path:'/newMeet',
          name:'newMeet',
          component:newMeet,
        },
        {
          path:'/meetingHome',
          name:'meetingHome',
          component:meetingHome,
        },
      ]
    }
  ]
})
