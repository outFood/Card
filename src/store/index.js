import axios from 'axios'
import Vue from 'Vue'
import router from '@/router'
const VueSet = Vue.set
export default {
  state : function () {
    return {
      nowTitle: {
        '/shopIndex/': '商城首页',
        '/sort/': '全部商品',
        '/eChart/': 'E聊',
        '/fujin/': '附近',
        '/vip/': '会员中心',
      },
      homeData:{},
      prefix:'https://xcx.xcwll.cn/attachment/',//附加前缀
      pageNum:0,
      //分类
      sortData:{},
      keywords:'',//请求商品列表的分类关键字
      commodityListData:{},
      commodityDetailData:{},
      commodityColorSizeData:{},
      payStaus:'购买',
      //附近商家
      Fujin_sortData:[],
      getFujin_slideData:[],
      Fujin_ListData:{},
      payStatus:'购买',
      //购物车
      cartData:{},
      cartcount:0,
      exclusiveShopData:{},
      //分销
      fenxiao_headData:{},
      fenxiao_bodyData:{},
      status:null,
      register:null,
      toWaitPage:false,
      //个人中心
      wodeHeadData:{},
      wodeBodyData:{},
      loginStatus:'',
      myAddressData:{},
      wantEditAddress:[]
    }
  },
  getters : {
    dingdanALLMsg(state) {
      return state
        .dingdan
        .filter(it => it.status == 1)
    }
  },
  actions:{
    //首页
    resHomeData({commit,state},data){
      var url='https://xcx.xcwll.cn/app/index.php?c=wxapp&a=module&do=main&id=1328&uniacid=1041'
      axios.get(url).then(function (res) {
        commit({
          type:'saveHomeData',
          data:res
        })
      }).catch(function (err) {console.log(err)})
    },
    //分类
    resSortData({commit,state},data){
      var url="https://xcx.xcwll.cn/bale/api.php?mod=category&uniacid=1041"
      axios.get(url).then(function (res) {
        commit({
          type:'saveSortData',
          res:res,
        })
      }).catch(function (err) {
        alert(err)
      })
    },
    resCommodityListData({commit,state},data){
      axios.get('https://xcx.xcwll.cn/app/index.php?t=1041&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=goods.index.get_list',{params:data.params})
        .then(function (res) {
          commit({
            type:'saveCommodityListData',
            res:res
          })
        }).catch(function (err) {alert(err)})

    },
    resFujinData({commit,state},data){
      var id=data.id?data.id:'';//如果点击分类的时候请求就有id,否则就是页面加载的时候请求
      function getFujin_sortData(){//分类
        return axios.get('https://xcx.xcwll.cn/app/index.php?t=1041&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.list.get_category&uniacid=1041');
      }
      function getFujin_slideData(){//轮播
        return axios.get('https://xcx.xcwll.cn/app/index.php?t=1041&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.list.get_category_swipe&uniacid=1041');
      }
      function getFujin_ListData(){//商户列表
        return axios.get('https://xcx.xcwll.cn/app/index.php?t=1041&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.list.ajaxmerchuser&uniacid=1041&id='+id);
      }
      axios.all([getFujin_sortData(),getFujin_slideData(),getFujin_ListData()])//一次性并发多个请求
        .then(axios.spread(function(Fujin_sortData,getFujin_slideData,Fujin_ListData){
          //当这三个个请求都完成的时候会触发这个函数，两个参数分别代表返回的结果
          commit({
            type:'saveFujinData',
            data:{
              Fujin_sortData:Fujin_sortData,
              getFujin_slideData:getFujin_slideData,
              Fujin_ListData:Fujin_ListData
            }
          })
        }))
    },
    resCommodityDetailData({commit,state},data){
      function commodityDetailData() {
        return axios.get('https://xcx.xcwll.cn/app/index.php?t=1041&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=goods.detailapp.get_detailapp&id='+data.id)
      }
      function commodityPingjiaData() {
        return axios.get('https://xcx.xcwll.cn/app/index.php?t=1041&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=goods.detail.get_comments&id='+data.id)
      }
      function commodityColorSizeData() {
        return axios.get('https://xcx.xcwll.cn/app/index.php?t=1041&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=goods.detailapp.picker&id='+data.id)
      }
      function commodityPingjiaSortData() {
        return axios.get('https://xcx.xcwll.cn/app/index.php?t=1041&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=goods.detail.get_comment_list&id='+data.id)
      }
      function submitCart() {
        return axios.get('https://xcx.xcwll.cn/app/index.php?t=1041&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.cart.submit&id='+data.id)
      }
      function like() {
        return axios.get('https://xcx.xcwll.cn/app/index.php?t=1041&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.favorite.toggle&id='+data.id)
      }
      axios.all([commodityDetailData(),commodityColorSizeData()]).then(axios.spread(function (commodityDetailData,commodityColorSizeData) {
        // console.log('commodityColorSizeData-----------------')
        // console.log(commodityColorSizeData)
        commit({
          type:'saveCommodityDetailData',
          data:{
            commodityDetailData:commodityDetailData,
            commodityColorSizeData:commodityColorSizeData
          }
        })
      }))
    },
    changePayStaus({commit,state},data){
      commit({
        type:'changePayStaus',
        payStatus:data.payStatus
      })
    },
    cartOrPay({commit,state},data){
      console.log(data)
      if(state.payStatus=='加入购物车'){
        axios.get('https://xcx.xcwll.cn/app/index.php?t=1041&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.cart.add&state=we7sid-989f479443e701453157a809d00e2e0f&sign=4ef7ee8a48b806ac9c01ab9bbeb27e7e',{params:data.params})
          .then(function (res) {
            console.log(res)
            commit({
              type:'saveCartcount',
              data:res
            })
          }).catch(function (err) {
          alert(err)
        })
      }else{
        console.log('购买')
      }
    },
    //查看购物车
    lookCart({commit,state},data){
      axios.get('https://xcx.xcwll.cn/app/index.php?t=1041&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.cart.get_list&state=we7sid-989f479443e701453157a809d00e2e0f&sign=3c2800e3c9cee95f07e12df42ee65441')
        .then(function (res) {
          commit({
            type:'saveCartData',
            res:res
          })
        }).catch(function (err) {alert(err)})
    },
    cartUpdate({commit,state},data){
     axios.get('https://xcx.xcwll.cn/app/index.php?t=1041&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.cart.update&state=we7sid-989f479443e701453157a809d00e2e0f&sign=0cba9601498c1bf800a5c9a5c57996a0',{params:data.params})
       .then(function (res) {
       }).catch(function (err) {alert(err)})
    },
    cartDelete({commit,state},data){
      console.log(data)
      axios.get('https://xcx.xcwll.cn/app/index.php?t=1041&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.cart.remove&&state=we7sid-989f479443e701453157a809d00e2e0f&sign=4ef7ee8a48b806ac9c01ab9bbeb27e7e&ids='+data.ids)
        .then(function (res) {
          commit({
            type:'saveCartcount',
            data:0
          })
        })
    },
    //附近商家
    resExclusiveShopData({commit,state},data){
      // var url='https://xcx.xcwll.cn/app'+(data.url).replace(/^./, "")+'&state=we7sid-989f479443e701453157a809d00e2e0f&sign=907857da4524149aacd027f26975f731'
      var url='https://xcx.xcwll.cn/app/index.php?t=1041&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.index.get_main&state=we7sid-989f479443e701453157a809d00e2e0f&sign=5fc39c4c2d8acbfb7c253e67cbecda05&mid=0&merchid='+data.id
      axios.get(url).then(function (res) {
        commit({
          type:'saveExclusiveShopData',
          res:res
        })
      }).catch(function (err) {alert(err)})
    },
    //分销中心
    resFenxiao({commit,state},data){
      function resHeadData() {
       return axios.get('https://xcx.xcwll.cn/app/index.php?t=1041&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=commission.index.get_main&&state=we7sid-794d7db19adf5357dd4aa60d3d4dfef8&sign=c78207aafe04e19076ec63ad8d6d903d')
      }
      function resBodyData() {
       return axios.get('https://xcx.xcwll.cn/app/index.php?c=wxapp&a=module&do=nav&uniacid=1041&type=4')
      }
      axios.all([resHeadData(),resBodyData()]).then(axios.spread(function (HeadData,BodyData) {
        commit({
          type:'saveFenxiao',
          HeadData:HeadData,
          BodyData:BodyData
        })
      }))
    },
    //注册分销商
    resRegist({commit,state},data){
      axios.get('https://xcx.xcwll.cn/app/index.php?t=1188&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=commission.register.get_main&i=1188&&state=we7sid-4f2d9a8d5e70055b534269913f0ef403&sign=23b2327d9a7d8822eea66b734afb29de',{params:data.params})
        .then(function (res) {
          console.log(res)
          router.push({path:'/distributIndex/apply'})
          commit({
            type:'setToWaitPage',
            res:res
          })
        }).catch(function (err) {alert(err)})
    },
    //个人中心
    resWode({commit,state},data){
      function wodeHeadData() {
        return axios.get('https://xcx.xcwll.cn/app/index.php?c=auth&a=session&do=userinfo&t=1044&key=undefined&secret=undefined&state=we7sid-989f479443e701453157a809d00e2e0f&sign=be9d1f67d8e71d25153fe04e33c251b4')
      }
      function wodeBodyData() {
        return axios.get('https://xcx.xcwll.cn/app/index.php?c=wxapp&a=module&do=nav&uniacid=1041&type=3')
      }
      axios.all([wodeHeadData(),wodeBodyData()]).then(axios.spread(function (wodeHeadData,wodeBodyData) {
        commit({
          type:'saveWodeData',
          wodeHeadData:wodeHeadData,
          wodeBodyData:wodeBodyData
        })
      }))
    },
    regist({commit,state},data){
      console.log(data)
      axios.get('https://xcx.xcwll.cn/app/index.php?t=1041&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.user.register',{params:data.params})
        .then(function (res) {
          console.log(res)
        }).catch(function (err) {alert(err)})
    },
    login({commit,state},data){
      axios.get('https://xcx.xcwll.cn/app/index.php?t=1041&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.user.pwdlogin',{params:data.params})
        .then(function (res) {
          commit({
            type:'saveLoginInfo',
            res:res
          })
        }).catch(function (err) {alert(err)})
    },
    resAddress({commit,state},data){
      axios.get('https://xcx.xcwll.cn/app/index.php?t=1041&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.address.indexapp&&state=we7sid-989f479443e701453157a809d00e2e0f&sign=5ec2bec56de4ed22e4149dbb3c82cc5c')
        .then(function (res) {
          commit({
            type:'saveAddress',
            res:res
          })
        }).catch(function (err) {alert(err)})
    },
    resDelAddress({commit,state},data){
      axios.get('https://xcx.xcwll.cn/app/index.php?t=1041&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.address.delete&&state=we7sid-989f479443e701453157a809d00e2e0f&sign=6d5a7951bdb85454d7713c93194c8d80',{params:data.params})
        .then(function (res) {
          //删除地址成功重新请求地址列表
          axios.get('https://xcx.xcwll.cn/app/index.php?t=1041&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.address.indexapp&&state=we7sid-989f479443e701453157a809d00e2e0f&sign=5ec2bec56de4ed22e4149dbb3c82cc5c')
            .then(function (res) {
              commit({
                type:'saveAddress',
                res:res
              })
            }).catch(function (err) {alert(err)})
        }).catch(function (err) {alert(err)})
    },
    saveWantEditAddress({commit,state},data){
      commit({
        type:'saveWantEditAddress',
        params:data.params
      })
    },
    updateAddress({commit,state},data){
      console.log(data)
      axios.get('https://xcx.xcwll.cn/app/index.php?t=1041&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.address.submitapp&&state=we7sid-989f479443e701453157a809d00e2e0f&sign=450e2402dfc06520cfa2dc4d156ce43f',{params:data.params})
        .then(function (res) {
          router.push({path:'/vipIndex/myAddress'})
        }).catch(function (err) {alert(err)})
    },
    saveAddress({commit,state},data){
      axios.get('https://xcx.xcwll.cn/app/index.php?t=1041&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.address.submitapp&&state=we7sid-989f479443e701453157a809d00e2e0f&sign=fbefddc57069d00b5bacd913e799fac6',{params:data.params})
        .then(function (res) {
          console.log('保存地址成功')
          router.push({path:'/vipIndex/myAddress'})
        }).catch(function (err) {alert(err)})
    }
  },
  mutations:{
    changeTitle(state, msg) {
      //根据路由修改页面title console.log(msg.fullPath, msg);
      document.title = state.nowTitle[msg.fullPath]
    },
    //首页
    saveHomeData(state, data){
      VueSet(state,'homeData',data.data.data.result)
      if(state.homeData!={}){
        router.push({path:'/shopIndex/'})
      }
    },
    //分类
    saveSortData(state, data){
      VueSet(state,'sortData',data.res.data)
      console.log(state.sortData)
      if(state.sortData!={}){
        router.push({path:'/sortIndex/'})
      }
    },
    saveCommodityListData(state, data){//商品列表
      VueSet(state,'commodityListData',data.res.data.result)
      console.log(state.commodityListData)
      if(state.commodityListData!={}){
        router.push({path:'/sortIndex/someSort'})
      }
    },
    saveFujinData(state, data){
      VueSet(state,'Fujin_sortData',data.data.Fujin_sortData.data)
      VueSet(state,'getFujin_slideData',data.data.getFujin_slideData.data)
      VueSet(state,'Fujin_ListData',data.data.Fujin_ListData.data)
      console.log(state.Fujin_ListData)
      if(state.Fujin_sortData&&state.getFujin_slideData&&state.Fujin_ListData){
        router.push({path: '/fujinIndex/'})
      }
    },
    saveCommodityDetailData(state,data){
      VueSet(state,'commodityDetailData',data.data.commodityDetailData.data)
      VueSet(state,'commodityColorSizeData',data.data.commodityColorSizeData.data.result)
      console.log('commodityColorSizeData-----------------------------------')
      console.log(state.commodityColorSizeData)
      if(state.commodityDetailData!={}){
        router.push({path: '/sortIndex/detail'})
      }
    },
    changePayStaus(state,data){
        VueSet(state,'payStatus',data.payStatus)
    },
  //  购物车
    saveCartData(state,data){
      VueSet(state,'cartData',data.res.data.result)
      console.log(state.cartData)
      if(state.cartData!={}){
        router.push({path:'/cart/'})
      }
    },
    saveCartcount(state,data){
      if(data.data==0){
        VueSet(state,'cartcount',0)
      }else{
        VueSet(state,'cartcount',data.data.data.result.cartcount)
      }
    },
    //附近商家
    saveExclusiveShopData(state,data){
      VueSet(state,'exclusiveShopData',data.res.data.result)
      if(state.exclusiveShopData!={}){
        router.push({path:'/fujinIndex/exclusiveShop'})
      }
      console.log('**************exclusiveShopData****************')
      console.log(state.exclusiveShopData)
    },
    //分销
    saveFenxiao(state,data){
      VueSet(state,'fenxiao_headData',data.HeadData.data)
      VueSet(state,'fenxiao_bodyData',data.BodyData.data)
      VueSet(state,'status',data.HeadData.data.status)
      VueSet(state,'register',data.HeadData.data.result.register)
    },
    setToWaitPage(state,data){
      // if(data.res.data.status==0&&data.res.data.result.register==1){
        VueSet(state,'toWaitPage',true)
      // }
      console.log(state.toWaitPage)
    },
    //个人中心
    saveWodeData(state,data){
      console.log(data)
      // VueSet(state,'wodeHeadData',data.res.data.module)
      VueSet(state,'wodeBodyData',data.wodeBodyData.data.module)
      if(state.wodeBodyData!={}){
        router.push({path:'/vipIndex'})
      }
    },
    saveLoginInfo(state,data){
      console.log(data)
      VueSet(state,'loginStatus',data.res.data.msg)
    },
    saveAddress(state,data){
      console.log(data.res.data.result)
      VueSet(state,'myAddressData',data.res.data.result.list)
    },
    saveWantEditAddress(state,data){
      VueSet(state,'wantEditAddress',data.params)
      console.log(state.wantEditAddress)
      if(state.wantEditAddress!={}){
        router.push({path:'/vipIndex/editAddress'})
      }
    }
  }
}
