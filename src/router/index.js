import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home'
import HomeDwTj from '../pages/Home-Dw-Tj/Home-Dw-Tj'
import HomeJzLwFb from '../pages/Home-Jz-Lw-Fb/Home-Jz-Lw-Fb'
import HomeFlTj from '../pages/Home-Fl-Tj/Home-Fl-Tj'
import HomeQxLwFb from '../pages/Home-Qx-Lw-Fb/Home-Qx-Lw-Fb'
import HomeRate from '../pages/Home-Rate/Home-Rate'
import LianWang from '../pages/LianWang/LianWang'
import YunXing from '../pages/YunXing/YunXing'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'dwtj',
          component: HomeDwTj
        },
        {
          path: 'fltj',
          component: HomeFlTj
        },
        {
          path: 'jzlwfb',
          component: HomeJzLwFb
        },
        {
          path: 'qxlwfb',
          component: HomeQxLwFb
        },
        {
          path: 'rate',
          component: HomeRate
        }
      ]
    },
    {
      path: '/lianwang',
      component: LianWang
    },
    {
      path: '/yunxing',
      component: YunXing
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
