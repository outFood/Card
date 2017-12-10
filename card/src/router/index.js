import Vue from 'vue'
import Router from 'vue-router'
//首页路由
import shopIndex from '@/components/商城首页/index'
//全部商品
import sort from '@/components/全部商品/index'
//E聊
import eChart from '@/components/E聊/index'
//附近商家
import fujin from '@/components/附近商家/index'
//会员中心
import vip from '@/components/会员中心/index'

Vue.use(Router)

export default new Router({
  mode: "history",
  exact:false,
  routes: [
    {
      path: '/',
      component: shopIndex
    },
    {
      path: '/shopIndex',
      name: 'shopIndex',
      component: shopIndex
    },
    {
      path: '/sort',
      name: 'sort',
      component: sort
    },
    {
      path: '/eChart',
      name: 'eChart',
      component: eChart
    },
    {
      path: '/fujin',
      name: 'fujin',
      component: fujin
    },
    {
      path: '/vip',
      name: 'vip',
      component: vip
    }
  ]
})
