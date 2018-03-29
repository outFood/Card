import Vue from 'vue'
import Router from 'vue-router'
//首页路由
    const shopHome=()=>import('@/view/商城首页/home')
    //首页子路由
    const shopIndex=()=>import('@/view/商城首页/index')
    const fukuan=()=>import('@/view/商城首页/fukuan')
    const shoukuan=()=>import('@/view/商城首页/shoukuan')
    const vip=()=>import('@/view/商城首页/vip')
    const vipGrad=()=>import('@/view/商城首页/vipGrad')
    const useInstruct=()=>import('@/view/商城首页/useInstruct')
    const noticeList=()=>import('@/view/商城首页/noticeList')
    const noticePage=()=>import('@/view/商城首页/noticePage')
    const article=()=>import('@/view/商城首页/article')

//全部商品
    const sortHome=()=>import('@/view/全部商品/home')
    const sortIndex=()=>import('@/view/全部商品/index')
    const someSort=()=>import('@/view/全部商品/someSort')
    const detail=()=>import('@/view/全部商品/detail')
    const buyPage=()=>import('@/view/全部商品/buyPage')
    const selPay=()=>import('@/view/全部商品/selPay')
    const paySuccess=()=>import('@/view/全部商品/paySuccess')
//分销中心
    const distributHome=()=>import('@/view/分销中心/home')
    const distributIndex=()=>import('@/view/分销中心/index')
    const price=()=>import('@/view/分销中心/price')
    const tuiguang=()=>import('@/view/分销中心/tuiguang')
    const xiaodian=()=>import('@/view/分销中心/xiaodian')
    const zixuan=()=>import('@/view/分销中心/zixuan')
    const yongDetail=()=>import('@/view/分销中心/yongDetail')
    const xiaxian=()=>import('@/view/分销中心/xiaxian')
    const tixianDetail=()=>import('@/view/分销中心/tixianDetail')
    const wait=()=>import('@/view/分销中心/wait')
    const apply=()=>import('@/view/分销中心/apply')
    const tixian=()=>import('@/view/分销中心/tixian')
//代理中心
    const agentIndex=()=>import('@/view/代理中心/index')
    const agentPrice=()=>import('@/view/代理中心/agentPrice')
    const agentHome=()=>import('@/view/代理中心/home')
    const agentDetail=()=>import('@/view/代理中心/detail')
    const photo=()=>import('@/view/代理中心/photo')
    const agentRegist=()=>import('@/view/代理中心/agentRegist')
    const agentWait=()=>import('@/view/代理中心/agentWait')
    const goPay=()=>import('@/view/代理中心/goPay')
    const agentLine=()=>import('@/view/代理中心/agentLine')
//附近商家
    const fujinHome=()=>import('@/view/附近商家/home')
    const fujinIndex=()=>import('@/view/附近商家/index')
    const exclusiveShop=()=>import('@/view/附近商家/exclusiveShop')
    const map=()=>import('@/view/附近商家/map')
//购物车
    const cart=()=>import('@/view/购物车/index')
//会员中心
const vipHome=()=>import('@/view/会员中心/home')
const vipIndex=()=>import('@/view/会员中心/index')
const vipInfo=()=>import('@/view/会员中心/vipInfo')
const nickname=()=>import('@/view/会员中心/nickname')
const order=()=>import('@/view/会员中心/order')
const orderDetail=()=>import('@/view/会员中心/orderDetail')
const myAddress=()=>import('@/view/会员中心/myAddress')
const addAddress=()=>import('@/view/会员中心/addAddress')
const editAddress=()=>import('@/view/会员中心/editAddress')
const set=()=>import('@/view/会员中心/set')
const wodeRegist=()=>import('@/view/会员中心/wodeRegist')
const login=()=>import('@/view/会员中心/login')
const myLike=()=>import('@/view/会员中心/myLike')
const zuji=()=>import('@/view/会员中心/zuji')
const myQuan=()=>import('@/view/会员中心/myQuan')
const myQuanDetail=()=>import('@/view/会员中心/myQuanDetail')
const getQuan=()=>import('@/view/会员中心/getQuan')
const recharge=()=>import('@/view/会员中心/recharge')
const AddOrReduce=()=>import('@/view/会员中心/AddOrReduce')
const record=()=>import('@/view/会员中心/record')
const evaluate=()=>import('@/view/会员中心/evaluate')
const getQuanDetail=()=>import('@/view/会员中心/getQuanDetail')


Vue.use(Router)

export default new Router({
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
        },{
          path:'noticeList',
          component:noticeList
        },{
          path:'noticePage',
          component:noticePage
        },{
          path:'article',
          component:article
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
        },
        {
          path:'paySuccess',
          component:paySuccess
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
          path:'tixian',
          component:tixian
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
        },{
          path:'goPay',
          component:goPay
        },{
          path:'agentLine',
          component:agentLine
        },
      ]
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
          path:'orderDetail',
          component:orderDetail
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
          path:'myQuanDetail',
          component:myQuanDetail
        },{
          path:'getQuan',
          component:getQuan
        },{
          path:'recharge',
          component:recharge
        },{
          path:'AddOrReduce',
          component:AddOrReduce
        },{
          path:'record',
          component:record
        },{
          path:'evaluate',
          component:evaluate
        },{
          path:'getQuanDetail',
          component:getQuanDetail
        }
      ]
    }
  ]
})
