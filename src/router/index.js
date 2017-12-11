import Vue from 'vue'
import Router from 'vue-router'
//首页路由
    import shopHome from '@/components/商城首页/home'
    //首页子路由
    import shopIndex from '@/components/商城首页/index'
    import exclusiveShop from '@/components/商城首页/exclusiveShop'
//全部商品
import sortHome from '@/components/全部商品/home'
import sortIndex from '@/components/全部商品/index'
import someSort from '@/components/全部商品/someSort'
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
      path:'',
      component:shopIndex
    },
    {
      path: '/shopIndex',
      component: shopHome,
      children:[
        {
          path:'',
          component:shopIndex
        },
        {
          path:'exclusiveShop',
          component:exclusiveShop
        }
      ]
    },
    {
      path: '/shopIndex',
      name: 'shopIndex',
      component: shopIndex
    },
    {
      path: '/sortIndex',
      component: sortHome,
      children:[
        {
          path:'',
          component:sortIndex
        },
        {
          path:'someSort',
          component:someSort
        }
      ]
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
