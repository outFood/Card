import axios from 'axios'
import $ from 'jquery';
import Vue from 'Vue'
import router from '@/router'
import config from '../myConfig'

const VueSet = Vue.set

export default {
  state: function () {
    return {
      nowTitle: {
        '/shopIndex/': '商城首页',
        '/sort/': '全部商品',
        '/eChart/': 'E聊',
        '/fujin/': '附近',
        '/vip/': '会员中心',
      },
      homeData: {},
      prefix: 'http://cscs.ylhhyk.com/attachment/',//附加前缀
      pageNum: 0,
      fuKuanCode: {},
      shouKuanCode: {},
      vipCard: {},
      //分类
      sortData: {},
      keywords: '',//请求商品列表的分类关键字
      commodityListData: [],
      newCommodityListData: [],
      commodityDetailData: {},
      commodityColorSizeData:{},
      commodityPingjiaData:{},
      commodityPingjiaSortData:{},
      evaluteTotal:0,
      isFavorite:false,
      payStaus: '购买',
      buyPageData: {},
      payMessage:'',
      sortid: '',
      someSortPage: 2,
      selPay: {},
      changeAddress:false,
      curEvalutePage:1,
      curLevel:'all',
      //附近商家
      Fujin_sortData: [],
      getFujin_slideData: [],
      Fujin_ListData: [],
      payStatus: '购买',
      curSelShop: {},
      curCateid:'',
      shopListPage:1,
      positionInfo:{},
      //购物车
      cartData: {},
      cartcount: 0,
      exclusiveShopData: {},
      addCartStatus: '',
      isCheckAll: false,
      checkedArr: [],
      //分销
      fenxiao_headData: {},
      fenxiao_bodyData: {},
      okTiXian:{},
      priceData: {},
      yongDetail: {},
      xiaXian: {},
      tixianData: {},
      tuiguangData: {},
      qrcodeText: {},
      qrcodeImg: {},
      //代理中心
      agentData: {},
      agentPriceData: {},
      agentLineData: {},
      curText: '累计分红',
      fenHongData: {},
      //个人中心
      wodeHeadData: {},
      wodeBodyData: {},
      loginStatus: '',
      vipInfoData: {},
      myAddressData: {},
      wantEditAddress: [],
      curSelAddress: {},
      myOrder: [],
      orderDetail:{},
      orderStatus:6,
      curOrderStausPage:1,
      myLikeData: {},
      zuJiData: {},
      getQuan:{},
      addOrOrder: {},
      recordData: {},
      evaluatPage:{}
    }
  },
  getters: {
    dingdanALLMsg(state) {
      return state
        .dingdan
        .filter(it => it.status == 1)
    }
  },
  actions: {
    //首页
    resHomeData({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?c=wxapp&a=module&do=main&id=12&uniacid=' + config.uniacid)
        .then(function (res) {
          commit({
            type: 'saveHomeData',
            data: res
          })
        }).catch(function (err) {
        console.log('请求失败：' + err)
      })
    },
    resFuKuan({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.branch.get_payment', {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveFuKuanCode',
            data: res
          })
        }).catch(function (err) {
        console.log('请求失败：' + err)
      })
    },
    resShouKuan({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.branch.get_receivables', {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveShouKuanCode',
            data: res
          })
        }).catch(function (err) {
        alert(err)
      })
    },
    resVipCard({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.branch.get_main', {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveVipCard',
            data: res
          })
        }).catch(function (err) {
        alert(err)
      })
    },
    resNoticePage({commit, state}, data){
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=article.index.get_main', {params: data.params})
        .then(function (res) {

        }).catch(function (err) {console.log('请求失败：' + err)})
    },
    //分类
    resSortData({commit, state}, data) {
      axios.get(config.baseUrl + '/bale/api.php?mod=category&uniacid=' + config.uniacid + '&t=' + config.t)
        .then(function (res) {
          commit({
            type: 'saveSortData',
            res: res,
          })
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    resCommodityListData({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=goods.index.get_list', {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveCommodityListData',
            res: res,
            sortid: data.params.cate,
            myText: data.myText
          })
        }).catch(function (err) {
        alert(err)
      })

    },
    resCommodityDetailData({commit, state}, data) {
      var cartPrams={t:config.t,uniacid:config.uniacid,mid:localStorage.getItem('userid'),openid:localStorage.getItem('openid')}
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.cart.get_list', {params:cartPrams})
        .then(function (res) {
          for(var i=0,sum=0;i<res.data.result.list.length;i++){
            sum+=parseInt(res.data.result.list[i].total)
          }
          commit({
            type:'saveCartcount2',
            data:sum
          })
        }).catch(function (err) {console.log('购物车列表请求失败：' + err)})
      function commodityDetailData() {
        return axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=goods.detailapp.get_detailapp', {params: data.params})
      }
      function commodityColorSizeData() {
        return axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=goods.detailapp.picker', {params: data.params})
      }
      function commodityPingjiaData() {
        return axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=goods.detail.get_comments&level=&page=1&pagesize=10', {params: data.params})
      }
      function commodityPingjiaSortData() {
        return axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=goods.detail.get_comment_list&level=&page=1&pagesize=10', {params: data.params})
      }
      axios.all([commodityDetailData(), commodityColorSizeData(),commodityPingjiaData(),commodityPingjiaSortData()]).then(axios.spread(function (commodityDetailData, commodityColorSizeData,commodityPingjiaData,commodityPingjiaSortData) {
        // console.log('commodityColorSizeData-----------------')
        // console.log(commodityColorSizeData)
        commit({
          type: 'saveCommodityDetailData',
          data: {
            commodityDetailData: commodityDetailData,
            commodityColorSizeData: commodityColorSizeData,
            commodityPingjiaData:commodityPingjiaData,
            commodityPingjiaSortData:commodityPingjiaSortData,
            page:2
          }
        })
      }))
    },
    evaluteFilter({commit, state}, data){
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=goods.detail.get_comment_list', {params: data.params})
        .then(function (res) {
          commit({
            type:'saveEvaluteFilter',
            data:res,
            level:data.params.level,
            page:state.curEvalutePage+1
          })
        }).catch(function (err) {console.log('请求失败:' + err)})
    },
    loadMoreEvalute({commit, state}, data){
      var params={
        id:data.id,
        t:config.t,
        page:state.curEvalutePage,
        pagesize:10,
        level:state.curLevel
      }
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=goods.detail.get_comment_list', {params:params})
        .then(function (res) {
          commit({
            type:'saveMoreEvalute',
            data:res,
          })
        }).catch(function (err) {console.log('请求失败:' + err)})
    },
    like({commit, state}, data){
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.favorite.toggle', {params: data.params})
        .then(function (res) {
          commit({
            type:'saveLike',
            data:res
          })
        }).catch(function (err) {
        alert(err)
      })
    },
    changePayStaus({commit, state}, data) {
      commit({
        type: 'changePayStaus',
        payStatus: data.payStatus
      })
    },
    cartOrPay({commit, state}, data) {
      if (state.payStatus == '加入购物车') {
        axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.cart.add', {params: data.params})
          .then(function (res) {
            if (res.data.result.message != undefined) {
              commit({
                type: 'saveAddCartStatus',
                data: res.data.result.message
              })
            } else {
              commit({
                type: 'saveCartcount',
                data: res
              })
            }
          }).catch(function (err) {
          alert(err)
        })
      } else {
        axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.create.get_main', {params: data.params})
          .then(function (res) {
            commit({
              type: 'saveBuyPageData',
              res: res
            })
          }).catch(function (err) {
          alert(err)
        })
      }
    },
    createOrder({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.create.submit', {params: data.params})
        .then(function (res) {
          axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.pay.get_order', {
            params: {
              id: res.data.result.orderid,
              t: config.t,
              mid: localStorage.getItem('userid'),
              openid: localStorage.getItem('openid')
            }
          })
            .then(function (res2) {
              if(res.data.status==0){
                commit({
                  type:'savePayMessage',
                  data:res
                })
                // alert(res.data.result.message)
              }else{
                commit({
                  type: 'saveSelPay',
                  data: res2
                })
              }
            }).catch(function (err) {
            console.log('请求失败:' + err)
          })
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    nowPay({commit, state}, data){
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.pay.get_order',{params:data.params})
        .then(function (res) {
          commit({
            type: 'saveSelPay',
            data: res
          })
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    balancePay({commit, state}, data) {
      axios.post(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=creditshop.buy.payment', data.params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(function (res) {
          // if(res.data.suc=='购买成功'){
          //   router.push({path: '/sortIndex/paySuccess'})
          // }
          router.push({path: '/sortIndex/paySuccess'})
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    changeAddress({commit, state}, data){
      commit({
        type:'changeAddress'
      })
    },
    //查看购物车
    lookCart({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.cart.get_list', {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveCartData',
            res: res
          })
        }).catch(function (err) {
        console.log('请求失败：' + err)
      })
    },
    cartUpdate({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.cart.update', {params: data.params})
        .then(function (res) {
          axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.cart.get_list', {params: data.params})
            .then(function (res) {
              commit({
                type: 'saveCartData',
                res: res
              })
            }).catch(function (err) {
            console.log('请求失败：' + err)
          })
        }).catch(function (err) {
        alert(err)
      })
    },
    cartDelete({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.cart.remove', {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveCartcount',
            data: 0
          })
          axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.cart.get_list', {params: data.params})
            .then(function (res) {
              commit({
                type: 'saveCartData',
                res: res
              })
            }).catch(function (err) {
            console.log('请求失败：' + err)
          })
        })
    },
    selOrNo({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.cart.select', {params: data.params})
        .then(function (res) {
          axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.cart.get_list', {params: data.params})
            .then(function (res) {
              commit({
                type: 'saveCartData',
                res: res
              })
            }).catch(function (err) {
            console.log('请求失败：' + err)
          })
        }).catch(function (err) {
        console.log('请求失败：' + err)
      })
    },
    subMitCart({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.cart.submit', {params: data.params})
        .then(function (res) {
          var myPrams = {
            t: config.t,
            openid: localStorage.getItem('openid'),
            mid: localStorage.getItem('userid')
          }
          axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.create.get_main', {params: myPrams})
            .then(function (res) {
              commit({
                type: 'saveBuyPageData',
                res: res
              })
            }).catch(function (err) {
            alert(err)
          })
        }).catch(function (err) {
        alert(err)
      })
    },
    //附近商家
    resFujinData({commit, state}, data) {
      var id = data.id ? data.id : '';//如果点击分类的时候请求就有id,否则就是页面加载的时候请求
      function getFujin_sortData() {//分类
        return axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.list.get_category&uniacid=2&t=' + config.t);
      }
      function getFujin_slideData() {//轮播
        return axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.list.get_category_swipe&uniacid=2&t=' + config.t);
      }
      function getFujin_ListData() {//商户列表
        return axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.list.ajaxmerchuser', {params: data.params});
      }
      axios.all([getFujin_sortData(), getFujin_slideData(), getFujin_ListData()])//一次性并发多个请求
        .then(axios.spread(function (Fujin_sortData, getFujin_slideData, Fujin_ListData) {
          commit({
            type: 'saveFujinData',
            data: {
              Fujin_sortData: Fujin_sortData,
              getFujin_slideData: getFujin_slideData,
              Fujin_ListData: Fujin_ListData,
              positionInfo:data.positionInfo
            }
          })
          commit({
            type:'changeShopListPage',
            shopListPage:2
          })
        }))
    },
    resExclusiveShopData({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.index.get_main', {params: data.params})
        .then(function (res) {
        commit({
          type: 'saveExclusiveShopData',
          res: res
        })
      }).catch(function (err) {
        alert(err)
      })
    },
    saveCurSelShop({commit, state}, data) {
      commit({
        type: 'saveCurSelShop',
        data: data
      })
    },
    loadMoreShop({commit, state}, data){
      var params={
        page:state.shopListPage,
        pagesize:10,
        cateid:state.curCateid,
        t:config.t,
        uniacid:config.t,
        i:config.i,
      }
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.list.ajaxmerchuser', {params: params})
        .then(function (res) {
          commit({
            type:'loadMoreShop',
            data:res
          })
      }).catch(function (err) {alert(err)})
    },
    changeCateid({commit, state}, data){
      commit({
        type:'changeCateid',
        data:data
      })
      var params={
        page:1,
        pagesize:10,
        cateid:data.cateid,
        t:config.t,
        uniacid:config.t,
        i:config.i,
      }
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.list.ajaxmerchuser', {params: params})
        .then(function (res) {
          commit({
            type:'saveShopList',
            data:res
          })
        }).catch(function (err) {alert(err)})
    },
    //分销中心
    resApply({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=commission.register.get_main', {params: data.params})
        .then(function (res) {
          router.push({path: '/distributIndex/wait'})
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    resFenxiao({commit, state}, data) {
      var headPrams = {
        t: config.t,
        uniacid: config.uniacid,
        openid: localStorage.getItem('openid'),
        mid: localStorage.getItem('userid'),
        i: 2
      }
      //请求HeadData
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=commission.index.get_main', {params: headPrams})
        .then(function (res) {
          commit({
            type: 'saveFenxiaoHead',
            data: res
          })
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
      //请求BodyData
      axios.get(config.baseUrl + '/app/index.php?c=wxapp&a=module&do=nav&type=4&uniacid=' + config.uniacid + '&t=' + config.t)
        .then(function (res) {
          commit({
            type: 'saveFenxiaoBody',
            data: res
          })
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    resPrice({commit, state}, data) {
      var myParams = {
        mid: config.mid,
        openid: localStorage.getItem('openid'),
        t: config.t
      }
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=commission.withdraw.get_main&i=2', {params:myParams})
        .then(function (res) {
          commit({
            type: 'savePriceData',
            res: res
          })
        }).catch(function (res) {
        alert(err)
      })
    },
    resYongDetail({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=commission.order.get_list', {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveYongDetail',
            data: res
          })
        }).catch(function (err) {
        alert(err)
      })
    },
    resTiXian({commit, state}, data) {
      axios.get(config.baseUrl + "/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=commission.log.get_list&i=2", {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveTixianData',
            data: res
          })
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })

    },
    tixian({commit, state}, data){
       axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=commission.apply.get_main',{params:data.params})
         .then(function (res) {
           commit({
             type:'saveOkTiXian',
             data:res
           })
         }).catch(function (err) {console.log('请求失败:' + err)})
    },
    next({commit, state}, data){
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=commission.apply.get_main',{params:data.params})
        .then(function (res) {
          if(res.data.result.message=="需要您完善资料才能继续操作"){
            router.push({path: '/vipIndex/vipInfo'})
          }
        }).catch(function (err) {console.log('请求失败:' + err)})
    },
    resXiaXian({commit, state}, data) {
      axios.get(config.baseUrl + "/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=commission.down.get_list&page=1&level=1", {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveXiaXian',
            data: res
          })
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    resTuiGuang({commit, state}, data) {
      axios.get(config.baseUrl + "/app/index.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=commission.qrcode.get_main", {params: data.params})
        .then(function (restext) {
          data.params.ispost = '1'
          axios.get(config.baseUrl + "/app/index.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=commission.qrcode.get_main", {params: data.params})
            .then(function (resimg) {
              commit({
                type: 'saveTuiGuangData',
                data: [restext, resimg]
              })
            }).catch(function (err) {
            console.log('请求失败：' + err)
          })
        }).catch(function (err) {
        console.log('请求失败：' + err)
      })
    },
    resXiaoDianData({commit, state}, data) {
      var params = {
        t: config.t,
        mid: config.mid,
        openid: localStorage.getItem('openid')
      }
      axios.get(config.baseUrl + "/app/index.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=commission.myshop.set.get_main", params)
        .then(function (res) {
          console.log(res)
        }).catch(function (err) {
        console.log('请求失败：' + err)
      })
    },
    //代理中心
    resAgent({commit, state}, data) {
      var agentParams = {
        t: config.t,
        openid: localStorage.getItem('openid'),
        mid: localStorage.getItem('userid'),
        uniacid: config.uniacid
      }
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=abonus.index.get_main', {params: agentParams})
        .then(function (res) {
          if (res.data.member.isagent == 0) {//没有申请分销商
            console.log('没有申请分销商')
            router.push({path: '/distributIndex/apply'})
          } else if (res.data.member.isagent == 1 && res.data.member.status == 0) {//分销商申请了，审核中
            console.log('分销商申请了，审核中')
            router.push({path: '/distributIndex/wait'})
          } else if (res.data.member.isagent == 1 && res.data.member.status == 1) {//已经是分销商了
            console.log('已经是分销商了')
            if (res.data.member.isaagent == 0) {//没注册代理
              console.log('没注册代理')
              router.push({path: '/agentIndex/agentRegist'})
            } else if (res.data.member.isaagent == 1 && res.data.member.aagentstatus == 0) {//注册了代理，审核中
              console.log('注册了代理，审核中')
              router.push({path: '/agentIndex/agentWait'})
            }
            // else if(res.data.member.aagentstatus==0||res.data.member.aagentstatus==1&&res.data.member.isaagent==1){
            //   router.push({path: '/agentIndex/goPay'})
            // }
            else {//已经是代理商了
              console.log('已经是代理商了')
              commit({
                type: 'saveAgentData',
                data: res
              })
            }
          }
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    registAgent({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=abonus.register.get_main', {params: data.params}).then(function (res) {
        router.push({path: '/agentIndex/agentWait'})
      }).catch(function (err) {
        console.log('请求失败：' + err)
      })
    },
    resAgentPrice({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=abonus.withdraw.get_main', {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveAgentPriceData',
            data: res
          })
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    resAgentLine({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=abonus.down.get_main', {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveAgentLineData',
            data: res
          })
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    resFenHong({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=abonus.bonus.get_list', {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveFenHongData',
            data: res,
            curText: data.curText
          })
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    //个人中心
    resWode({commit, state}, data) {
      //请求wodeHeadData
      function resWodeHeadData() {
        return axios.get(config.baseUrl + "/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.xcxl", {params: data.params})
      }

      function resWodeBodyData() {
        return axios.get(config.baseUrl + "/app/index.php?c=wxapp&a=module&do=nav&type=3&uniacid=" + config.uniacid)
      }

      axios.all([resWodeHeadData(), resWodeBodyData()])//一次性并发多个请求
        .then(axios.spread(function (wodeHeadData, wodeBodyData) {
          //当这三个个请求都完成的时候会触发这个函数，两个参数分别代表返回的结果
          commit({
            type: 'saveWodeData',
            data: {
              wodeHeadData: wodeHeadData,
              wodeBodyData: wodeBodyData
            }
          })
        }))
    },
    regist({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.user.register', {params: data.params})
        .then(function (res) {
          if (res.msg == '注册成功') {
            router.push({path: '/vipIndex/login'})
          }
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    login({commit, state}, data) {
      axios.get(config.baseUrl + "/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.user.passwordlogin", {params: data.params})
        .then(function (res) {
          if (res.data.data != {}) {
            localStorage.setItem('openid', res.data.data.openid)
            localStorage.setItem('userid', res.data.data.mid)
          }
          commit({
            type: 'saveLoginInfo',
            res: res
          })
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    resVipInfo({commit, state}, data) {
      axios.get(config.baseUrl + "/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.info.get_main", {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveVipInfoData',
            data: res
          })
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    updatePersonInfo({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.info.submitapp', {params: data.params})
        .then(function (res) {
          // router.push({path: '/vipIndex'})
        }).catch(function (err) {
        alert(err)
      })
    },
    updateNickName({commit, state}, data) {
      axios.post(config.baseUrl + "/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.xcxl.alteravatar", data.params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function (res) {
          console.log(res)
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    resAddress({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.address.indexapp', {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveAddressList',
            res: res
          })
        }).catch(function (err) {
        alert(err)
      })
    },
    resDelAddress({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.address.delete', {params: data.params})
        .then(function (res) {
          //删除地址成功重新请求地址列表
          axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.address.indexapp&mid=' + localStorage.getItem('userid') + '&t=' + config.t)
            .then(function (res) {
              commit({
                type: 'saveAddressList',
                res: res
              })
            }).catch(function (err) {
            alert(err)
          })
        }).catch(function (err) {
        alert(err)
      })
    },
    saveWantEditAddress({commit, state}, data) {
      commit({
        type: 'saveWantEditAddress',
        params: data.params
      })
    },
    addOrUpdateAddress({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.address.submitapp', {params: data.params})
        .then(function (res) {
          console.log(res)
          router.push({path: '/vipIndex/myAddress'})
        }).catch(function (err) {
        alert(err)
      })
    },
    defaultAddress({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.address.setdefault&&state=we7sid-989f479443e701453157a809d00e2e0f&sign=56270194a41701253e0ca556eb6c9312', {params: data.params})
        .then(function (res) {
          //设置默认地址成功重新请求地址列表
          axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.address.indexapp&mid=' + localStorage.getItem('userid') + '&t=' + config.t)
            .then(function (res) {
              commit({
                type: 'saveAddressList',
                res: res
              })
            }).catch(function (err) {
            alert(err)
          })
        }).catch(function (err) {
        alert(err)
      })
    },
    saveSelAddress({commit, state}, data) {
      commit({
        type: 'saveSelAddress',
        data: data
      })
    },
    resMyOrder({commit, state}, data) {
      var status = 6;
      if (data.text == '全部') {
        status = 6
      } else if (data.text == '待付款') {
        status = 0
      } else if (data.text == '待发货') {
        status = 1
      } else if (data.text == '待收货') {
        status = 2
      } else if (data.text == '退换货') {
        status = 4
      }
      commit({
        type:'saveOrderStatus',
        data:{status:status,curOrderStausPage:1,myOrder:[]}
      })
      var params = {
        status: status,
        mid: localStorage.getItem('userid'),
        openid: localStorage.getItem('openid'),
        page: 1,
        t: config.t
      }
      axios.get(config.baseUrl + "/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.index.get_list", {params: params})
        .then(function (res) {
          commit({
            type: 'saveMyOrder',
            res: res,
            orderStatus: status,
            curOrderStausPage:1
          })
        }).catch(function (err) {
        alert(err)
      })
    },
    loadMoreList({commit, state}, data){
      var params = {
        status: state.orderStatus,
        mid: localStorage.getItem('userid'),
        openid: localStorage.getItem('openid'),
        page: state.curOrderStausPage+1,
        t: config.t
      }
      axios.get(config.baseUrl + "/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.index.get_list", {params: params})
        .then(function (res) {
          commit({
            type: 'saveMyOrder',
            res: res,
            orderStatus: state.orderStatus,
            curOrderStausPage:state.curOrderStausPage+1
          })
        }).catch(function (err) {
        alert(err)
      })
    },
    resOrderDetail({commit, state}, data){
      axios.get(config.baseUrl +'/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.index.get_detail',{params:data.params})
        .then(function (res) {
          commit({
            type:'saveOrderDetail',
            data:res
          })
        }).catch(function (err) {alert(err)})
    },
    cancelOrder({commit, state}, data){
      axios.get(config.baseUrl+'/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.op.cancel',{params:data.params})
        .then(function (res) {
          var params = {
            status: state.orderStatus,
            mid: localStorage.getItem('userid'),
            openid: localStorage.getItem('openid'),
            page: 1,
            t: config.t
          }
          axios.get(config.baseUrl + "/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.index.get_list", {params: params})
            .then(function (res) {
              commit({
                type: 'saveMyOrder',
                res: res,
                orderStatus:state.orderStatus,
                curOrderStausPage:state.curOrderStausPage
              })
            }).catch(function (err) {
            alert(err)
          })
        }).catch(function (err) {
        alert(err)
      })
    },
    delOrder({commit, state}, data){
      axios.get(config.baseUrl+'/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.op.delete',{params:data.params})
        .then(function (res) {
          var params = {
            status: state.orderStatus,
            mid: localStorage.getItem('userid'),
            openid: localStorage.getItem('openid'),
            page: 1,
            t: config.t
          }
          axios.get(config.baseUrl + "/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.index.get_list", {params: params})
            .then(function (res) {
              commit({
                type: 'saveMyOrder',
                res: res,
                orderStatus:state.orderStatus,
                curOrderStausPage:state.curOrderStausPage
              })
            }).catch(function (err) {
            alert(err)
          })
        }).catch(function (err) {alert(err)})
    },
    sureGet({commit, state}, data){
      axios.get(config.baseUrl + '/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.op.finish',{params:data.params})
        .then(function (res) {
          var params = {
            status: state.orderStatus,
            mid: localStorage.getItem('userid'),
            openid: localStorage.getItem('openid'),
            page: 1,
            t: config.t
          }
          axios.get(config.baseUrl + "/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.index.get_list", {params: params})
            .then(function (res) {
              commit({
                type: 'saveMyOrder',
                res: res,
                orderStatus:state.orderStatus,
                curOrderStausPage:state.curOrderStausPage
              })
            }).catch(function (err) {
            alert(err)
          })
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    evaluate({commit, state}, data){
      axios.get(config.baseUrl + '/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.comment.get_main',{params:data.params})
        .then(function (res) {
          commit({
            type:'saveEvalutePage',
            data:res
          })
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    submitEvaluate({commit, state}, data){
      axios.post(config.baseUrl +'/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.comment.submit',data.params,{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(function (res) {

        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    resMyLike({commit, state}, data) {
      console.log(data.params)
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.favorite.get_list', {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveMyLikeData',
            res: res
          })
        }).catch(function (err) {
        console.log('请求失败')
      })
    },
    resZuji({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.history.get_list', {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveZujiData',
            res: res
          })
        }).catch(function (err) {
        console.log('请求失败')
      })
    },
    resGetQuan({commit, state}, data){
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=sale.coupon.index.getlist',{params:data.params})
        .then(function (res) {
          console.log(res)
          commit({
            type:'saveGetQuan',
            data:res
          })
        }).catch(function (err) {
        console.log('请求失败')
      })
    },
    getCoupon({commit, state}, data){
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=sale.coupon.detail.pay',{params:data.params})
        .then(function (res) {

        }).catch(function (err) {
        console.log('请求失败')
      })
    },
    resMyQuan({commit, state}, data){
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=sale.coupon.my.getlist',{params:data.params})
        .then(function (res) {

        }).catch(function (err) {
        console.log('请求失败')
      })
    },
    resAddOrReduce({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.capital.get_contactsMoney', {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveAddOrReduce',
            data: res
          })
        }).catch(function (err) {
        console.log('请求失败：' + err)
      })
    },
    resRecord({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.capital.get_main', {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveRecord',
            data: res
          })
        }).catch(function (err) {
        console.log('请求失败：' + err)
      })
    }
  },
  mutations: {
    changeTitle(state, msg) {
      //根据路由修改页面title console.log(msg.fullPath, msg);
      document.title = state.nowTitle[msg.fullPath]
    },
    //首页
    saveHomeData(state, data) {
      VueSet(state, 'homeData', data.data.data.result)
      if (state.homeData != {}) {
        router.push({path: '/shopIndex/'})
      }
    },
    saveFuKuanCode(state, data) {
      VueSet(state, 'fuKuanCode', data.data.data.result)
      if (state.fuKuanCode != {}) {
        router.push({path: '/shopIndex/fukuan'})
      }
    },
    saveShouKuanCode(state, data) {
      VueSet(state, 'shouKuanCode', data.data.data.result)
      if (state.shouKuanCode != {}) {
        router.push({path: '/shopIndex/shoukuan'})
      }
    },
    saveVipCard(state, data) {
      VueSet(state, 'vipCard', data.data.data.result)
      if (state.vipCard != {}) {
        router.push({path: '/shopIndex/vip'})
      }
    },
    //分类
    saveSortData(state, data) {
      VueSet(state, 'sortData', data.res.data)
      if (state.sortData != {}) {
        router.push({path: '/sortIndex/'})
      }
    },
    saveCommodityListData(state, data) {//商品列表
      console.log(data.res.data.result.list)
      if (data.myText == '滚动加载') {
        VueSet(state, 'commodityListData', [...state.commodityListData, ...data.res.data.result.list])
        VueSet(state, 'someSortPage', state.someSortPage + 1)
      } else {
        VueSet(state, 'commodityListData', data.res.data.result.list)
      }
      //保存下来用于判断数据是否全部加载完毕
      VueSet(state, 'newCommodityListData', data.res.data.result.list)
      VueSet(state, 'sortid', data.sortid)
      if (state.commodityListData != {}) {
        router.push({path: '/sortIndex/someSort'})
      }
    },
    saveCommodityDetailData(state, data) {
      VueSet(state, 'commodityDetailData', data.data.commodityDetailData.data)
      VueSet(state, 'commodityColorSizeData', data.data.commodityColorSizeData.data.result)
      VueSet(state, 'commodityPingjiaData', data.data.commodityPingjiaData.data.result)
      VueSet(state, 'commodityPingjiaSortData', data.data.commodityPingjiaSortData.data.result.list)
      VueSet(state,'evaluteTotal',data.data.commodityPingjiaSortData.data.result.total)
      VueSet(state, 'curEvalutePage', data.data.page)
      VueSet(state, 'isFavorite', data.data.commodityDetailData.data.result.goods_other.isFavorite)
      if (state.commodityDetailData != {}) {
        router.push({path: '/sortIndex/detail'})
      }
    },
    saveEvaluteFilter(state, data){
      VueSet(state, 'commodityPingjiaSortData', data.data.data.result.list)
      VueSet(state, 'curEvalutePage', data.page)
      VueSet(state, 'curLevel', data.level)
    },
    saveMoreEvalute(state, data){
      VueSet(state, 'commodityPingjiaSortData',[...state.commodityPingjiaSortData,...data.data.data.result.list])
      VueSet(state, 'curEvalutePage',state.curEvalutePage+1)
      console.log(state.commodityPingjiaSortData)
      console.log(state.curEvalutePage)
    },
    saveLike(state, data){
      VueSet(state,'isFavorite',data.data.data.result.isfavorite)
    },
    changePayStaus(state, data) {
      VueSet(state, 'payStatus', data.payStatus)
    },
    saveBuyPageData(state, data) {
      VueSet(state, 'buyPageData', data.res.data)
      VueSet(state, 'curSelAddress', data.res.data.result.address)
      if (state.buyPageData != {}) {
        router.push({path: '/sortIndex/buyPage'})
      }

    },
    savePayMessage(state, data){
      VueSet(state,'payMessage',data.data.data.result.message)
    },
    saveSelPay(state, data) {
      VueSet(state, 'selPay', data.data.data.result)
      VueSet(state,'payMessage','')
      if (state.selPay != {}) {
        router.push({path: '/sortIndex/selPay'})
      }
    },
    changeAddress(state, data){
      VueSet(state,'changeAddress',true)
    },
    //  购物车
    saveCartData(state, data) {
      VueSet(state, 'cartData', data.res.data.result)
      var selArr = []
      for (var i = 0; i < data.res.data.result.list.length; i++) {
        if (data.res.data.result.list[i].selected == 1) {
          selArr.push(data.res.data.result.list[i].id)
        }
      }
      VueSet(state, 'checkedArr', selArr)
      if (selArr.length == data.res.data.result.list.length) {
        VueSet(state, 'isCheckAll', true)
      } else {
        VueSet(state, 'isCheckAll', false)
      }
      if (state.cartData != {}) {
        router.push({path: '/cart/'})
      }
    },
    saveAddCartStatus(state, data) {
      VueSet(state, 'addCartStatus', data.data)
    },
    saveCartcount(state, data) {
      if (data.data == 0) {
        VueSet(state, 'cartcount', 0)
      } else {
        VueSet(state, 'cartcount', data.data.data.result.cartcount)
      }
    },
    saveCartcount2(state, data){
      VueSet(state, 'cartcount',data.data)
    },
    //附近商家
    saveFujinData(state, data) {
      VueSet(state, 'positionInfo', data.data.positionInfo)
      VueSet(state, 'Fujin_sortData', data.data.Fujin_sortData.data)
      VueSet(state, 'getFujin_slideData', data.data.getFujin_slideData.data)
      VueSet(state, 'Fujin_ListData', data.data.Fujin_ListData.data.result.list)
      if (state.Fujin_sortData && state.getFujin_slideData && state.Fujin_ListData) {
        router.push({path: '/fujin/'})
      }
    },
    saveExclusiveShopData(state, data) {
      VueSet(state, 'exclusiveShopData', data.res.data.result)
      if (state.exclusiveShopData != {}) {
        router.push({path: '/fujin/exclusiveShop'})
      }
    },
    saveCurSelShop(state, data) {
      VueSet(state, 'curSelShop', data.data.params)
      console.log(state.curSelShop)
      if (state.curSelShop != {}) {
        router.push({path: '/fujin/map'})
      }
    },
    changeCateid(state, data){
      VueSet(state,'curCateid',data.data.cateid)
      VueSet(state,'shopListPage',1)
    },
    changeShopListPage(state, data){
      VueSet(state,'shopListPage',data.shopListPage)
    },
    saveShopList(state, data){
      VueSet(state,'Fujin_ListData',data.data.data.result.list)
    },
    loadMoreShop(state, data){
      VueSet(state,'Fujin_ListData',[...state.Fujin_ListData,...data.data.data.result.list])
      VueSet(state,'shopListPage',state.shopListPage+1)
    },
    //分销
    saveFenxiaoHead(state, data) {
      VueSet(state, 'fenxiao_headData', data.data.data)
      //在分销中心里,status为0表示未审核，1代表审核通过；register为0代表没注册过，1注册过
      if (state.fenxiao_headData.result.register == 0) {//没注册过
        router.push({path: '/distributIndex/apply'})
      } else if (state.fenxiao_headData.result.register == 1 && state.fenxiao_headData.status == 0) {//注册过待审核
        router.push({path: '/distributIndex/wait'})
      } else {
        router.push({path: '/distributIndex'})
      }
    },
    saveFenxiaoBody(state, data) {
      VueSet(state, 'fenxiao_bodyData', data.data.data)
    },
    savePriceData(state, data) {
      VueSet(state, 'priceData', data.res.data.result)
    },
    saveYongDetail(state, data) {
      VueSet(state, 'yongDetail', data.data.data.result)
    },
    saveXiaXian(state, data) {
      VueSet(state, 'xiaXian', data.data.data.result)
    },
    saveTixianData(state, data) {
      VueSet(state, 'tixianData', data.data.data.result)
      console.log(state.tixianData)
    },
    saveOkTiXian(state, data){
      VueSet(state,'okTiXian',data.data.data.result)
    },
    saveTuiGuangData(state, data) {
      VueSet(state, 'qrcodeText', data.data[0].data.result)
      VueSet(state, 'qrcodeImg', data.data[1].data.result)
      console.log(state.qrcodeText)
      console.log(state.qrcodeImg)
      if (state.qrcodeText != {} && state.qrcodeImg != {}) {
        router.push({path: '/distributIndex/tuiguang'})
      }
    },
    //代理中心
    saveAgentData(state, data) {
      VueSet(state, 'agentData', data.data.data)
      if (state.agentData != {}) {
        router.push({path: '/agentIndex/'})
      }
    },
    saveAgentPriceData(state, data) {
      VueSet(state, 'agentPriceData', data.data.data)
      if (state.agentPriceData != {}) {
        router.push({path: '/agentIndex/agentPrice'})
      }
    },
    saveAgentLineData(state, data) {
      VueSet(state, 'agentLineData', data.data.data.result)
      if (state.agentLineData != {}) {
        router.push({path: '/agentIndex/agentLine'})
      }
    },
    saveFenHongData(state, data) {
      VueSet(state, 'fenHongData', data.data.data.result)
      VueSet(state, 'curText', data.curText)
      if (state.curText != '' && state.fenHongData != {}) {
        router.push({path: '/agentIndex/agentDetail'})
      }
    },
    //个人中心
    saveWodeData(state, data) {
      VueSet(state, 'wodeHeadData', data.data.wodeHeadData.data)
      VueSet(state, 'wodeBodyData', data.data.wodeBodyData.data.module)
      if (state.wodeHeadData != {} && state.wodeBodyData != {}) {
        router.push({path: '/vipIndex'})
      }
    },
    saveLoginInfo(state, data) {
      VueSet(state, 'loginStatus', data.res.data.msg)
    },
    saveVipInfoData(state, data) {
      console.log(data)
      VueSet(state, 'vipInfoData', data.data.data.result.member)
      console.log(state.vipInfoData)
    },
    saveAddressList(state, data) {
      console.log(data.res.data.result)
      VueSet(state, 'myAddressData', data.res.data.result.list)
    },
    saveWantEditAddress(state, data) {
      VueSet(state, 'wantEditAddress', data.params)
      if (state.wantEditAddress != {}) {
        router.push({path: '/vipIndex/editAddress'})
      }
    },
    saveSelAddress(state, data) {
      VueSet(state, 'curSelAddress', data.data.item)
      console.log(state.curSelAddress)
      if (state.curSelAddress != {}&&state.changeAddress!=false) {
        router.push({path: '/sortIndex/buyPage'})
      }
      VueSet(state, 'changeAddress',false)
    },
    saveMyOrder(state, data) {
      VueSet(state, 'myOrder',[...state.myOrder,...data.res.data.result.list])
      VueSet(state, 'orderStatus', data.orderStatus)
      VueSet(state, 'curOrderStausPage', data.curOrderStausPage)
      if (state.myOrder != [] && state.orderStatus != null) {
        router.push({path: '/vipIndex/order'})
      }
    },
    saveOrderDetail(state, data){
      VueSet(state,'orderDetail',data.data.data.result)
      if(state.orderDetail!={}){
       router.push({path: '/vipIndex/orderDetail'})
      }
    },
    saveOrderStatus(state, data){
      VueSet(state,'orderStatus',data.data.status)
      VueSet(state,'curOrderStausPage',data.data.curOrderStausPage)
      VueSet(state,'myOrder',data.data.myOrder)
    },
    saveEvalutePage(state, data){
      VueSet(state,'evaluatPage',data.data.data)
      if(state.evaluatPage!={}){
        router.push({path: '/vipIndex/evaluate'})
      }
    },
    saveMyLikeData(state, data) {
      VueSet(state, 'myLikeData', data.res.data.result)
      console.log(state.myLikeData)
    },
    saveZujiData(state, data) {
      VueSet(state, 'zuJiData', data.res.data.result)
      console.log(state.zuJiData)
    },
    saveGetQuan(state, data){
      VueSet(state,'getQuan',data.data.data.result)
    },
    saveAddOrReduce(state, data) {
      VueSet(state, 'addOrOrder', data.data.data.result)
      if (state.addOrOrder != {}) {
        router.push({path: '/vipIndex/AddOrReduce'})
      }
    },
    saveRecord(state, data) {
      VueSet(state, 'recordData', data.data.data.result)
      if (state.recordData != 0) {
        router.push({path: '/vipIndex/record'})
      }
    }
  }
}
