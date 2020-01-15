import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import index from '../components/index.vue'
import home from '../components/home.vue'
import card from '../components/card.vue'
import login from '../components/login.vue'
import review from '../components/review.vue'
import detail from '../components/detail.vue'
import res from '../components/res.vue'
import list from '../components/list.vue'
import pdf from '../components/pdf.vue'
import video from '../components/video.vue'



import index2 from '../components/index2.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/index/home'
  }, {
    path: '/pdf',
    name: 'pdf',
    component: pdf
  }, {
    path: '/video',
    name: 'video',
    component: video
  }, {
    path: '/index',

    name: 'index',
    redirect: '/index/home',
    component: index,
    meta: {
      title: '首页'
    },
    children: [{
      path: 'home',
      name: 'home',
      component: home
    }, {
      path: 'card',
      component: card
    }, {
      path: 'review',
      name: '知识聚拢',
      component: review,
      meta: {
        title: '知识聚拢'
      }
    }, {
      path: 'detail',
      name: 'detail',
      component: detail,
      meta: {
        title: '详情'
      }
    }, {
      path: 'res',
      name: 'res',
      component: res,
      meta: {
        title: '资源'
      }
    }, {
      path: 'list',
      name: 'list',
      component: list,
      meta: {
        title: 'ppt'
      }
    }]
  },
  {
    path: '/index2',
    name: 'index2',
    component: index2
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

export default router