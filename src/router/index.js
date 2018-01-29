import Vue from 'vue'
import Router from 'vue-router'
//首页路由
    import shopHome from '@/components/商城首页/home'
    //首页子路由
    import shopIndex from '@/components/商城首页/index'
    import fukuan from '@/components/商城首页/fukuan'
    import shoukuan from '@/components/商城首页/shoukuan'
    import vip from '@/components/商城首页/vip'
    import vipGrad from '@/components/商城首页/vipGrad'
    import useInstruct from '@/components/商城首页/useInstruct'

//全部商品
import sortHome from '@/components/全部商品/home'
import sortIndex from '@/components/全部商品/index'
import someSort from '@/components/全部商品/someSort'
import detail from '@/components/全部商品/detail'
import buyPage from '@/components/全部商品/buyPage'
import selPay from '@/components/全部商品/selPay'
//分销中心
import distributHome from '@/components/分销中心/home'
import distributIndex from '@/components/分销中心/index'
import price from '@/components/分销中心/price'
import tuiguang from '@/components/分销中心/tuiguang'
import xiaodian from '@/components/分销中心/xiaodian'
import zixuan from '@/components/分销中心/zixuan'
import yongDetail from '@/components/分销中心/yongDetail'
import xiaxian from '@/components/分销中心/xiaxian'
import tixianDetail from '@/components/分销中心/tixianDetail'
import wait from '@/components/分销中心/wait'
import apply from '@/components/分销中心/apply'
//代理中心
import agentIndex from '@/components/代理中心/index'
import agentPrice from '@/components/代理中心/agentPrice'
import agentHome from '@/components/代理中心/home'
import agentDetail from '@/components/代理中心/detail'
import photo from '@/components/代理中心/photo'
import agentRegist from '@/components/代理中心/agentRegist'
import agentWait from '@/components/代理中心/agentWait'

//E聊
import eChart from '@/components/E聊/index'
//附近商家
import fujinHome from '@/components/附近商家/home'
import fujinIndex from '@/components/附近商家/index'
import exclusiveShop from '@/components/附近商家/exclusiveShop'
import map from '@/components/附近商家/map'
//购物车
import cart from '@/components/购物车/index'
//会员中心
import vipHome from '@/components/会员中心/home'
import vipIndex from '@/components/会员中心/index'
import vipInfo from '@/components/会员中心/vipInfo'
import nickname from '@/components/会员中心/nickname'
import order from '@/components/会员中心/order'
import myAddress from '@/components/会员中心/myAddress'
import addAddress from '@/components/会员中心/addAddress'
import editAddress from '@/components/会员中心/editAddress'
import set from '@/components/会员中心/set'
import wodeRegist from '@/components/会员中心/wodeRegist'
import login from '@/components/会员中心/login'
import myLike from '@/components/会员中心/myLike'
import zuji from '@/components/会员中心/zuji'
import myQuan from '@/components/会员中心/myQuan'
import getQuan from '@/components/会员中心/getQuan'
import recharge from '@/components/会员中心/recharge'


Vue.use(Router)

export default new Router({
  mode: "history",
  exact:false,
  routes: [
    {
      path: '/shopIndex',
      component: shopHome,
      children:[
        {
          path:'',
          component:shopIndex
        },{
          path:'fukuan',
          component:fukuan
        },{
          path:'shoukuan',
          component:shoukuan
        },{
          path:'vip',
          component:vip
        },{
          path:'vipGrad',
          component:vipGrad
        },{
          path:'useInstruct',
          component:useInstruct
        },
      ]
    },
    {
      path: '/shopIndex',
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
        },
        {
          path:'detail',
          component:detail
        },
        {
          path:'buyPage',
          component:buyPage
        },
        {
          path:'selPay',
          component:selPay
        }
      ]
    },
    {
      path: '/distributIndex',
      component: distributHome,
      children:[
        {
          path:'',
          component:distributIndex
        },
        {
          path:'price',
          component:price
        },{
          path:'tuiguang',
          component:tuiguang
        },{
          path:'xiaodian',
          component:xiaodian
        },{
          path:'zixuan',
          component:zixuan
        },{
          path:'yongDetail',
          component:yongDetail
        },{
          path:'xiaxian',
          component:xiaxian
        },{
          path:'tixianDetail',
          component:tixianDetail
        },{
          path:'wait',
          component:wait
        },{
          path:'apply',
          component:apply
        }
      ]
    },
    {
      path:'/agentIndex',
      component:agentHome,
      children:[
        {
          path:'',
          component:agentIndex,
        },
        {
          path:'agentDetail',
          component:agentDetail,
        },
        {
          path:'photo',
          component:photo,
        },{
          path:'agentRegist',
          component:agentRegist
        },{
          path:'agentWait',
          component:agentWait
        },{
          path:'agentPrice',
          component:agentPrice
        },
      ]
    },
    {
      path: '/eChart',
      component: eChart
    },
    {
      path: '/fujin',
      component: fujinHome,
      children:[
        {
          path:'',
          component:fujinIndex
        },
        {
          path:'exclusiveShop',
          component:exclusiveShop
        },
        {
          path:'map',
          component:map
        }
      ]
    },
    {
      path:'/cart',
      component:cart
    },
    {
      path: '/vipIndex',
      component: vipHome,
      children:[
        {
          path:'',
          component:vipIndex
        },
        {
          path:'vipInfo',
          component:vipInfo
        },{
          path:'nickname',
          component:nickname
        },{
          path:'order',
          component:order
        },{
          path:'myAddress',
          component:myAddress
        },{
          path:'addAddress',
          component:addAddress
        },{
          path:'editAddress',
          component:editAddress
        },{
          path:'set',
          component:set
        },{
          path:'login',
          component:login
        },{
          path:'wodeRegist',
          component:wodeRegist
        },{
          path:'myLike',
          component:myLike
        },{
          path:'zuji',
          component:zuji
        },{
          path:'myQuan',
          component:myQuan
        },{
          path:'getQuan',
          component:getQuan
        },{
          path:'recharge',
          component:recharge
        }
      ]
    }
  ]
})
