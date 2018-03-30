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
        '/sortIndex/': '全部商品',
        '/sortIndex/detail': '商品详情',
        '/fujin/': '附近商家',
        '/cart/': '购物车',
        '/vipIndex': '会员中心',
        '/vipIndex/vipInfo': '个人资料',
        '/vipIndex/set': '设置',
        '/vipIndex/nickname': '修改头像和昵称',
        '/vipIndex/AddOrReduce': '资金往来',
        '/vipIndex/record': '积分返还记录',
        '/vipIndex/order': '我的订单',
        '/vipIndex/orderDetail': '订单详情',
        '/vipIndex/evaluate': '评价',
        '/vipIndex/myLike': '我的关注',
        '/vipIndex/zuji': '我的关注',
        '/vipIndex/myAddress': '我的地址',
        '/vipIndex/editAddress': '编辑地址',
        '/vipIndex/addAddress': '添加地址',
        '/vipIndex/getQuan': '领取优惠券',
        '/vipIndex/myQuan': '我的优惠券',
        '/vipIndex/login': '登录',
        '/vipIndex/wodeRegist': '注册'
      },
      formattedAddress: '',
      lat: '',
      lng: '',
      homeData: {},
      prefix: 'http://cscs.ylhhyk.com/attachment/',//附加前缀
      pageNum: 0,
      fuKuanCode: {},
      shouKuanCode: {},
      shoukuanMsg: '',
      vipCard: {},
      vipCardMsg: '',
      noticeList: [],
      selNotice: {},
      article: {},
      //分类
      sortData: {},
      keywords: '',//请求商品列表的分类关键字
      commodityListData: [],
      newCommodityListData: [],
      commodityDetailData: {},
      commodityColorSizeData: {},
      commodityPingjiaData: {},
      commodityPingjiaSortData: {},
      evaluteTotal: 0,
      isFavorite: false,
      payStaus: '购买',
      buyPageData: {},
      payMessage: '',
      sortid: '',
      someSortPage: 2,
      selPay: {},
      changeAddress: false,
      curEvalutePage: 1,
      curLevel: 'all',
      //附近商家
      Fujin_sortData: [],
      getFujin_slideData: [],
      Fujin_ListData: [],
      payStatus: '购买',
      curSelShop: {},
      curCateid: '',
      shopListPage: 1,
      //购物车
      cartData: {},
      cartcount: 0,
      exclusiveShopData: '',
      addCartStatus: '',
      isCheckAll: false,
      checkedArr: [],
      //分销
      fenxiao_headData: {},
      fenxiao_bodyData: {},
      okTiXian: {},
      priceData: {},
      yongDetail: {},
      xiaXian: {},
      tixianData: {},
      tixianMsg: '',
      tuiguangData: {},
      qrcodeText: {},
      qrcodeImg: {},
      //代理中心
      agentPage: {},
      registAgentMsg: '',
      agentData: {},
      agentPriceData: {},
      agentLineData: {},
      curText: '累计分红',
      fenHongData: {},
      //个人中心
      wodeHeadData: {},
      wodeBodyData: {},
      updateNickNameResult: {},
      loginStatus: {},
      registStatus: {},
      vipInfoData: {},
      myAddressData: {},
      wantEditAddress: [],
      curSelAddress: {},
      myOrder: [],
      orderDetail: {},
      orderStatus: 6,
      curOrderStausPage: 1,
      myLikeData: {},
      zuJiData: {},
      getQuan: {},//领券列表
      couponDetail: {},
      myCouponDetail:{},
      getCoupon: {},//领券结果
      addOrOrder: {},
      recordData: {},
      evaluatPage: {}
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
    savePositionInfo({commit, state}, data) {
      commit({
        type: 'savePositionInfo',
        data: data.params
      })
    },
    resHomeData({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?c=wxapp&a=module&do=main', {params: data.params})
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
          if (res.data.status == 1) {
            commit({
              type: 'saveVipCard',
              data: res
            })
          } else {
            commit({
              type: 'saveVipCardMsg',
              data: res
            })
          }
        }).catch(function (err) {
        alert(err)
      })
    },
    resArticle({commit, state}, data) {
      axios.get(config.baseUrl + data.url, {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveArticle',
            data: res
          })
        }).catch(function (err) {
        alert(err)
      })
    },
    resNoticeList({commit, state}, data) {
      axios.get(config.baseUrl + data.url, {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveNoticeList',
            data: res
          })
        }).catch(function (err) {
        alert(err)
      })
    },
    saveSelNotice({commit, state}, data) {
      commit({
        type: 'saveSelNotice',
        data: data
      })
    },
    //分类
    resSortData({commit, state}, data) {
      axios.get(config.baseUrl + '/bale/api.php?mod=category', {params: data.params})
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
      var cartPrams = {t: config.t, uniacid: config.uniacid, mid: config.mid, openid: config.openid}
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.cart.get_list', {params: cartPrams})
        .then(function (res) {
          for (var i = 0, sum = 0; i < res.data.result.data.list.length; i++) {
            sum += parseInt(res.data.result.data.list[i].total)
          }
          commit({
            type: 'saveCartcount2',
            data: sum
          })
        }).catch(function (err) {
        console.log('购物车列表请求失败：' + err)
      })

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

      axios.all([commodityDetailData(), commodityColorSizeData(), commodityPingjiaData(), commodityPingjiaSortData()]).then(axios.spread(function (commodityDetailData, commodityColorSizeData, commodityPingjiaData, commodityPingjiaSortData) {
        commit({
          type: 'saveCommodityDetailData',
          data: {
            commodityDetailData: commodityDetailData,
            commodityColorSizeData: commodityColorSizeData,
            commodityPingjiaData: commodityPingjiaData,
            commodityPingjiaSortData: commodityPingjiaSortData,
            page: 2
          }
        })
      }))
    },
    evaluteFilter({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=goods.detail.get_comment_list', {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveEvaluteFilter',
            data: res,
            level: data.params.level,
            page: state.curEvalutePage + 1
          })
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    loadMoreEvalute({commit, state}, data) {
      var params = {
        id: data.id,
        t: config.t,
        page: state.curEvalutePage,
        pagesize: 10,
        level: state.curLevel
      }
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=goods.detail.get_comment_list', {params: params})
        .then(function (res) {
          commit({
            type: 'saveMoreEvalute',
            data: res,
          })
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    like({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.favorite.toggle', {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveLike',
            data: res
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
          axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.pay.get_main',{params:{
            t:config.t,
            openid:config.openid,
            id: res.data.result.data.orderid,
            peerpaymessage:'',
            peerprice:'',
            jie:''
          }}).then(function (res2) {
            if (res.data.status == 0) {
              commit({
                type: 'savePayMessage',
                data: res
              })
            } else {
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
    nowPay({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.pay.get_main',{params:data.params}).then(function (res) {
        if (res.data.status == 0) {
          commit({
            type: 'savePayMessage',
            data: res
          })
        } else {
          commit({
            type: 'saveSelPay',
            data: res
          })
        }
      }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    balancePay({commit, state}, data) {
      axios.post(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=creditshop.buy.payment', data.params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function (res) {
        if (res.data.status == 1) {
          router.push({path: '/sortIndex/paySuccess'})
        } else {
          commit({
            type: 'savePayMessage',
            data: res
          })
        }
      }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    changeAddress({commit, state}, data) {
      commit({
        type: 'changeAddress'
      })
    },
    //查看购物车
    lookCart({commit, state}, data) {
      let source=data.params.source;
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.cart.get_list', {params: data.params})
        .then(function (res) {
          res.source=source
          // console.log(res,'source')
          commit({
            type: 'saveCartData',
            res: res,
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
        .then(function (res1) {
          var myPrams = {
            t: config.t,
            i: config.i,
            uniacid: config.uniacid,
            openid: localStorage.getItem('openid'),
            mid: localStorage.getItem('userid')
          }
          axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.create.get_main', {params: myPrams})
            .then(function (res2) {
              commit({
                type: 'saveBuyPageData',
                res: res2
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
      function getFujin_sortData() {//分类
        return axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.list.get_category&t=' + config.t + '&uniacid=' + config.uniacid + '&i=' + config.i);
      }

      function getFujin_slideData() {//轮播
        return axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.list.get_category_swipe&t=' + config.t + '&uniacid=' + config.uniacid + '&i=' + config.i);
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
            }
          })
          commit({
            type: 'changeShopListPage',
            shopListPage: 2
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
    loadMoreShop({commit, state}, data) {
      var params = {
        page: state.shopListPage,
        pagesize: 10,
        cateid: state.curCateid,
        t: config.t,
        uniacid: config.uniacid,
        i: config.i,
      }
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.list.ajaxmerchuser', {params: params})
        .then(function (res) {
          commit({
            type: 'loadMoreShop',
            data: res
          })
        }).catch(function (err) {
        alert(err)
      })
    },
    changeCateid({commit, state}, data) {
      commit({
        type: 'changeCateid',
        data: data
      })
      var params = {
        page: 1,
        pagesize: 10,
        cateid: data.cateid,
        t: config.t,
        uniacid: config.uniacid,
        i: config.i,
      }
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.list.ajaxmerchuser', {params: params})
        .then(function (res) {
          commit({
            type: 'saveShopList',
            data: res
          })
        }).catch(function (err) {
        alert(err)
      })
    },
    //分销中心
    resApply({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=commission.register.get_main', {params: data.params})
        .then(function (res) {
          if (res.data.status == 1) {
            router.push({path: '/distributIndex/wait'})
          }
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    resFenxiao({commit, state}, data) {
      var headPrams = {
        t: config.t,
        uniacid: config.uniacid,
        i: config.i,
        openid: localStorage.getItem('openid'),
        mid: localStorage.getItem('userid'),
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
      axios.get(config.baseUrl + '/app/index.php?c=wxapp&a=module&do=nav&type=4', {params: headPrams})
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
        t: config.t,
        i: config.i,
        uniacid: config.uniacid
      }
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=commission.withdraw.get_main', {params: myParams})
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
      axios.get(config.baseUrl + "/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=commission.log.get_list", {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveTixianData',
            data: res
          })
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })

    },
    tixian({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=commission.apply.get_main', {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveOkTiXian',
            data: res
          })
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    next({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=commission.apply.get_main', {params: data.params})
        .then(function (res) {
          if (res.data.result.message == "需要您完善资料才能继续操作") {
            router.push({path: '/vipIndex/vipInfo'})
          }
          if (res.data.status == 0) {
            commit({
              type: 'savetixianMsg',
              data: res.data.result.msg
            })
          }
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
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
      axios.get(config.baseUrl + "/app/index.php?c=entry&m=ewei_shopv2&do=mobile&r=commission.qrcode.get_main", {params: data.params})
        .then(function (restext) {
          data.params.ispost = '1'
          axios.get(config.baseUrl + "/app/index.php?c=entry&m=ewei_shopv2&do=mobile&r=commission.qrcode.get_main", {params: data.params})
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
        i: config.i,
        mid: config.mid,
        openid: localStorage.getItem('openid')
      }
      axios.get(config.baseUrl + "/app/index.php?c=entry&m=ewei_shopv2&do=mobile&r=commission.myshop.set.get_main", params)
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
        i: config.i,
        uniacid: config.uniacid,
        openid: localStorage.getItem('openid'),
        mid: localStorage.getItem('userid'),
      }
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=abonus.index.get_main', {params: agentParams})
        .then(function (res) {
          if (res.data.result.data.member.isagent == 0) {//没有申请分销商
            console.log('没有申请分销商')
            router.push({path: '/distributIndex/apply'})
          } else if (res.data.result.data.member.isagent == 1 && res.data.result.data.member.status == 0) {//分销商申请了，审核中
            console.log('分销商申请了，审核中')
            router.push({path: '/distributIndex/wait'})
          } else if (res.data.result.data.member.isagent == 1 && res.data.result.data.member.status == 1) {//已经是分销商了
            console.log('已经是分销商了')
            if (res.data.result.data.member.isaagent == 0) {//没注册代理
              console.log('没注册代理')
              router.push({path: '/agentIndex/agentRegist'})
            } else if (res.data.result.data.member.isaagent == 1 && res.data.result.data.member.aagentstatus == 0) {//注册了代理，审核中
              console.log('注册了代理，审核中')
              router.push({path: '/agentIndex/agentWait'})
            }
            // else if(res.data.result.data.member.aagentstatus==0||res.data.result.data.member.aagentstatus==1&&res.data.result.data.member.isaagent==1){
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
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=abonus.register.get_main', {params: data.params})
        .then(function (res) {
          if (data.qufen == 'yes') {//注册请求
            if (res.data.status == 1) {
              router.push({path: '/agentIndex/agentWait'})
            } else {
              commit({
                type: 'saveRegistAgentMsg',
                data: res
              })
            }
          } else {//加载注册页面请求
            commit({
              type: 'saveAgentPage',
              data: res.data.result.data
            })
          }
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
        return axios.get(config.baseUrl + "/app/index.php?c=wxapp&a=module&do=nav&type=3", {params: data.params})
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
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=account.index.get_register', {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveRegistStatus',
            data: res.data
          })
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    login({commit, state}, data) {
      axios.get(config.baseUrl + "/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=account.index.get_login", {params: data.params})
        .then(function (res) {
          if (res.data.status == 1) {
            localStorage.setItem('openid', res.data.result.data.member.openid)
            localStorage.setItem('userid', res.data.result.data.member.id)
          }
          commit({
            type: 'saveLoginInfo',
            res: res
          })
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    recharge({commit, state}, data) {
      axios.get(config.baseUrl + "/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=r=member.recharge.get_main", {params: data.params})
        .then(function (res) {
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
    updateNickName({commit, state}, data) {
      axios.post(config.baseUrl + "/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.xcxl.alteravatar", data.params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function (res) {
        commit({
          type: 'saveUpdateNickNameResult',
          data: res
        })
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
    defaultAddress({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.address.setdefault', {params: data.params})
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
      } else if (data.text == '已完成') {
        status = 3
      }
      commit({
        type: 'saveOrderStatus',
        data: {status: status, curOrderStausPage: 1, myOrder: []}
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
            curOrderStausPage: 1,
            start:'yes'
          })
        }).catch(function (err) {
        alert(err)
      })
    },
    loadMoreList({commit, state}, data) {
      var params = {
        status: state.orderStatus,
        mid: localStorage.getItem('userid'),
        openid: localStorage.getItem('openid'),
        page: state.curOrderStausPage + 1,
        t: config.t
      }
      axios.get(config.baseUrl + "/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.index.get_list", {params: params})
        .then(function (res) {
          commit({
            type: 'saveMyOrder',
            res: res,
            orderStatus: state.orderStatus,
            curOrderStausPage: state.curOrderStausPage + 1,
            start:'no'
          })
        }).catch(function (err) {
        alert(err)
      })
    },
    resOrderDetail({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.index.get_detail', {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveOrderDetail',
            data: res
          })
        }).catch(function (err) {
        alert(err)
      })
    },
    cancelOrder({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.op.cancel', {params: data.params})
        .then(function (res) {
          var params = {
            status: state.orderStatus,
            mid: localStorage.getItem('userid'),
            openid: localStorage.getItem('openid'),
            page: 1,
            t: config.t,
          }
          axios.get(config.baseUrl + "/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.index.get_list", {params: params})
            .then(function (res) {
              commit({
                type: 'saveMyOrder',
                res: res,
                orderStatus: state.orderStatus,
                curOrderStausPage: state.curOrderStausPage,
                start:'yes'
              })
            }).catch(function (err) {
            alert(err)
          })
        }).catch(function (err) {
        alert(err)
      })
    },
    delOrder({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.op.delete', {params: data.params})
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
                orderStatus: state.orderStatus,
                curOrderStausPage: state.curOrderStausPage,
                start:'yes'
              })
            }).catch(function (err) {
            alert(err)
          })
        }).catch(function (err) {
        alert(err)
      })
    },
    sureGet({commit, state}, data) {
      commit({
        type: 'saveOrderStatus',
        data: {status: state.orderStatus, curOrderStausPage: 1, myOrder: []}
      })
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.op.finish', {params: data.params})
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
                orderStatus: state.orderStatus,
                curOrderStausPage: state.curOrderStausPage,
                start:'yes'
              })
            }).catch(function (err) {
            alert(err)
          })
        }).catch(function (err) {
        console.log('请求失败:' + err)
      })
    },
    evaluate({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.comment.get_main', {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveEvalutePage',
            data: res
          })
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
    resGetQuan({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=sale.coupon.index.getlist', {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveGetQuan',
            data: res
          })
        }).catch(function (err) {
        console.log('请求失败')
      })
    },
    resCouponDetail({commit, state}, data) {
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=sale.coupon.detail.get_main', {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveCouponDetail',
            data: res,
          })
        }).catch(function (err) {
        console.log('请求失败')
      })
    },
    myCouponDetail({commit, state}, data){
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=sale.coupon.my.get_detail', {params: data.params})
        .then(function (res) {
          if(res.data.status==1){
            commit({
              type:'myCouponDetail',
              data:res
            })
          }
        }).catch(function (err) {console.log(err)})
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
    savePositionInfo(state, data) {//
      VueSet(state, 'formattedAddress', data.data.formattedAddress)
      VueSet(state, 'lat', data.data.position.lat)
      VueSet(state, 'lng', data.data.position.lng)
    },
    saveHomeData(state, data) {
      VueSet(state, 'homeData', data.data.data.result.data.result)
      if (state.homeData != {}) {
        router.push({path: '/shopIndex/'})
      }
    },
    saveFuKuanCode(state, data) {
      VueSet(state, 'fuKuanCode', data.data.data.result.data)
      if (state.fuKuanCode != {}) {
        router.push({path: '/shopIndex/fukuan'})
      }
    },
    saveShouKuanCode(state, data) {
      if (data.data.data.status == 0) {
        VueSet(state, 'shoukuanMsg', data.data.data.result.msg)
      } else {
        VueSet(state, 'shouKuanCode', data.data.data.result)
        if (state.shouKuanCode != {}) {
          router.push({path: '/shopIndex/shoukuan'})
        }
      }

    },
    saveVipCardMsg(state, data) {
      VueSet(state, 'vipCardMsg', data.data.data.result.msg)
    },
    saveVipCard(state, data) {
      VueSet(state, 'vipCard', data.data.data.result)
      if (state.vipCard != {}) {
        router.push({path: '/shopIndex/vip'})
      }
    },
    saveNoticeList(state, data) {
      VueSet(state, 'noticeList', data.data.data.result.data.list)
      router.push({path: '/shopIndex/noticeList'})
    },
    saveSelNotice(state, data) {//selNotice
      VueSet(state, 'selNotice', data.data.params)
      if (state.selNotice) {
        router.push({path: '/shopIndex/noticePage'})
      }
    },
    saveArticle(state, data) {
      VueSet(state, 'article', data.data.data.result.data)
    },
    //分类
    saveSortData(state, data) {
      VueSet(state, 'sortData', data.res.data.result.data)
      if (state.sortData != {}) {
        console.log('走了')
        router.push({path: '/sortIndex/'})
      }
    },
    saveCommodityListData(state, data) {//商品列表
      if (data.myText == '滚动加载') {
        VueSet(state, 'commodityListData', [...state.commodityListData, ...data.res.data.result.data.list])
        VueSet(state, 'someSortPage', state.someSortPage + 1)
      } else {
        VueSet(state, 'commodityListData', data.res.data.result.data.list)
      }
      //保存下来用于判断数据是否全部加载完毕
      VueSet(state, 'newCommodityListData', data.res.data.result.data.list)
      VueSet(state, 'sortid', data.sortid)
      if (state.commodityListData != {}) {
        router.push({path: '/sortIndex/someSort'})
      }
    },
    saveCommodityDetailData(state, data) {
      VueSet(state, 'commodityDetailData', data.data.commodityDetailData.data.result.data)
      VueSet(state, 'commodityColorSizeData', data.data.commodityColorSizeData.data.result.data)
      VueSet(state, 'commodityPingjiaData', data.data.commodityPingjiaData.data.result.data)
      VueSet(state, 'commodityPingjiaSortData', data.data.commodityPingjiaSortData.data.result.data.list)
      VueSet(state, 'evaluteTotal', data.data.commodityPingjiaSortData.data.result.data.total)
      VueSet(state, 'curEvalutePage', data.data.page)
      VueSet(state, 'isFavorite', data.data.commodityDetailData.data.result.data.result.goods_other.isFavorite)
      if (state.commodityDetailData != {}) {
        router.push({path: '/sortIndex/detail'})
      }
    },
    saveEvaluteFilter(state, data) {
      VueSet(state, 'commodityPingjiaSortData', data.data.data.result.data.list)
      VueSet(state, 'curEvalutePage', data.page)
      VueSet(state, 'curLevel', data.level)
    },
    saveMoreEvalute(state, data) {
      VueSet(state, 'commodityPingjiaSortData', [...state.commodityPingjiaSortData, ...data.data.data.result.list])
      VueSet(state, 'curEvalutePage', state.curEvalutePage + 1)
    },
    saveLike(state, data) {
      VueSet(state, 'isFavorite', data.data.data.result.data.isfavorite)
    },
    changePayStaus(state, data) {
      VueSet(state, 'payStatus', data.payStatus)
    },
    saveBuyPageData(state, data) {
      VueSet(state, 'buyPageData', data.res.data.result.data)
      VueSet(state, 'curSelAddress', data.res.data.result.data.address)
      if (state.buyPageData != {}) {
        router.push({path: '/sortIndex/buyPage'})
      }

    },
    savePayMessage(state, data) {
      VueSet(state, 'payMessage', data.data.data)
    },
    saveSelPay(state, data) {
      VueSet(state, 'selPay', data.data.data.result.data)
      VueSet(state, 'payMessage', '')
      if (state.selPay != {}) {
        router.push({path: '/sortIndex/selPay'})
      }
    },
    changeAddress(state, data) {
      VueSet(state, 'changeAddress', true)
    },
    //  购物车
    saveCartData(state, data) {
      console.log(data,'dsadas')
      let source=data.res.source
      VueSet(state, 'cartData', data.res.data.result.data)
      var selArr = []
      for (var i = 0; i < data.res.data.result.data.list.length; i++) {
        if (data.res.data.result.data.list[i].selected == 1) {
          selArr.push(data.res.data.result.data.list[i].id)
        }
      }
      VueSet(state, 'checkedArr', selArr)
      if (selArr.length == data.res.data.result.data.list.length) {
        VueSet(state, 'isCheckAll', true)
      } else {
        VueSet(state, 'isCheckAll', false)
      }
      if (state.cartData != {}) {
        if(source==1){
          //详情页跳转去购物车时的返回按钮
          router.push({path: '/cart/',query:{source:1}});
        }else{
          router.push({path: '/cart/'});
        }

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
    saveCartcount2(state, data) {
      VueSet(state, 'cartcount', data.data)
    },
    //附近商家
    saveFujinData(state, data) {
      VueSet(state, 'Fujin_sortData', data.data.Fujin_sortData.data.result.data)
      VueSet(state, 'getFujin_slideData', data.data.getFujin_slideData.data.result.data)
      VueSet(state, 'Fujin_ListData', data.data.Fujin_ListData.data.result.data.list)
      if (state.Fujin_ListData != []) {
        router.push({path: '/fujin/'})
      }
    },
    saveExclusiveShopData(state, data) {
      VueSet(state, 'exclusiveShopData', data.res.data.result.data.shopsharelink)
      console.log(state.exclusiveShopData)
    },
    saveCurSelShop(state, data) {
      VueSet(state, 'curSelShop', data.data.params)
      if (state.curSelShop != {}) {
        router.push({path: '/fujin/map'})
      }
    },
    changeCateid(state, data) {
      VueSet(state, 'curCateid', data.data.cateid)
      VueSet(state, 'shopListPage', 1)
    },
    changeShopListPage(state, data) {
      VueSet(state, 'shopListPage', data.shopListPage)
    },
    saveShopList(state, data) {
      VueSet(state, 'Fujin_ListData', data.data.data.result.data.list)
    },
    loadMoreShop(state, data) {
      VueSet(state, 'Fujin_ListData', [...state.Fujin_ListData, ...data.data.data.result.list])
      VueSet(state, 'shopListPage', state.shopListPage + 1)
    },
    //分销
    saveFenxiaoHead(state, data) {
      VueSet(state, 'fenxiao_headData', data.data.data.result.data)
      //在分销中心里,status为0表示未审核，1代表审核通过；register为0代表没注册过，1注册过
      if (state.fenxiao_headData.register == 0) {//没注册过
        router.push({path: '/distributIndex/apply'})
        console.log('没注册过')
      } else if (state.fenxiao_headData.register == 1 && state.fenxiao_headData.status == 0) {//注册过待审核
        router.push({path: '/distributIndex/wait'})
        console.log('注册过，待审核')
      } else if (state.fenxiao_headData.status == 1 && state.fenxiao_headData.register == 1) {
        console.log('已经是分销商')
        router.push({path: '/distributIndex'})
      }
    },
    saveFenxiaoBody(state, data) {
      VueSet(state, 'fenxiao_bodyData', data.data.data.result.data)
    },
    savePriceData(state, data) {
      VueSet(state, 'priceData', data.res.data.result.data.result)
      console.log(state.priceData)
    },
    saveYongDetail(state, data) {
      VueSet(state, 'yongDetail', data.data.data.result.data)
      console.log(state.yongDetail)
    },
    saveXiaXian(state, data) {
      VueSet(state, 'xiaXian', data.data.data.result.data)
      console.log(state.xiaXian)
    },
    saveTixianData(state, data) {
      VueSet(state, 'tixianData', data.data.data.result.data)
    },
    saveOkTiXian(state, data) {
      VueSet(state, 'okTiXian', data.data.data.result)
    },
    savetixianMsg(state, data) {
      VueSet(state, 'tixianMsg', data.data)
    },
    saveTuiGuangData(state, data) {
      VueSet(state, 'qrcodeText', data.data[0].data.result)
      VueSet(state, 'qrcodeImg', data.data[1].data.result.data)
      if (state.qrcodeText != {} && state.qrcodeImg != {}) {
        router.push({path: '/distributIndex/tuiguang'})
      }
    },
    //代理中心
    saveAgentPage(state, data) {
      VueSet(state, 'agentPage', data.data)
      console.log(state.agentPage)
    },
    saveRegistAgentMsg(state, data) {
      VueSet(state, 'registAgentMsg', data.data.data.result.msg)
    },
    saveAgentData(state, data) {
      VueSet(state, 'agentData', data.data.data.result.data)
      if (state.agentData != {}) {
        router.push({path: '/agentIndex/'})
      }
      console.log(state.agentData)
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
      VueSet(state, 'wodeHeadData', data.data.wodeHeadData.data.result.data.user)
      VueSet(state, 'wodeBodyData', data.data.wodeBodyData.data.result)
      if (state.wodeHeadData != {} && state.wodeBodyData != {}) {
        router.push({path: '/vipIndex'})
      }
    },
    saveUpdateNickNameResult(state, data) {
      VueSet(state, 'updateNickNameResult', data.data.data)
    },
    saveLoginInfo(state, data) {
      VueSet(state, 'loginStatus', data.res.data)
      console.log(state.loginStatus)
    },
    saveRegistStatus(state, data) {
      VueSet(state, 'registStatus', data.data)
      console.log(state.registStatus)
    },
    saveVipInfoData(state, data) {
      VueSet(state, 'vipInfoData', data.data.data.result.data.member)
    },
    saveAddressList(state, data) {
      VueSet(state, 'myAddressData', data.res.data.result.data.result.list)
    },
    saveWantEditAddress(state, data) {
      VueSet(state, 'wantEditAddress', data.params)
      if (state.wantEditAddress != {}) {
        router.push({path: '/vipIndex/editAddress'})
      }
    },
    saveSelAddress(state, data) {
      VueSet(state, 'curSelAddress', data.data.item)
      if (state.curSelAddress != {} && state.changeAddress != false) {
        // router.replace('/sortIndex/buyPage')
        router.go(-1)
      }
      VueSet(state, 'changeAddress', false)
    },
    saveMyOrder(state, data) {
      if(data.start=='yes'){//start用来决定数组是否要进行拼接
        VueSet(state, 'myOrder',data.res.data.result.data.list)
      }else{
        VueSet(state, 'myOrder', [...state.myOrder, ...data.res.data.result.data.list])
      }
      VueSet(state, 'orderStatus', data.orderStatus)
      VueSet(state, 'curOrderStausPage', data.curOrderStausPage)
      if (state.myOrder != [] && state.orderStatus != null) {
        router.push({path: '/vipIndex/order'})
      }
    },
    saveOrderDetail(state, data) {
      VueSet(state, 'orderDetail', data.data.data.result.data)
      console.log(state.orderDetail)
      if (state.orderDetail != {}) {
        router.push({path: '/vipIndex/orderDetail'})
      }
    },
    saveOrderStatus(state, data) {
      VueSet(state, 'orderStatus', data.data.status)
      VueSet(state, 'curOrderStausPage', data.data.curOrderStausPage)
      VueSet(state, 'myOrder', data.data.myOrder)
    },
    saveEvalutePage(state, data) {
      VueSet(state, 'evaluatPage', data.data.data.result)
      if (state.evaluatPage != {}) {
        router.push({path: '/vipIndex/evaluate'})
      }
    },
    saveMyLikeData(state, data) {
      VueSet(state, 'myLikeData', data.res.data.result)
    },
    saveZujiData(state, data) {
      VueSet(state, 'zuJiData', data.res.data.result.data)
    },
    saveGetQuan(state, data) {
      VueSet(state, 'getQuan', data.data.data.result.data)
    },
    saveCouponDetail(state, data) {
      VueSet(state, 'couponDetail', data.data.data.result.data.result)
      if (state.couponDetail != {}) {
        router.push({path: '/vipIndex/getQuanDetail'})
      }
    },
    myCouponDetail(state, data){
      VueSet(state,'myCouponDetail',data.data.data.result.data)
      if(state.myCouponDetail!={}){
        router.push({path: '/vipIndex/myQuanDetail'})
      }
    },
    saveAddOrReduce(state, data) {
      VueSet(state, 'addOrOrder', data.data.data.result)
    },
    saveRecord(state, data) {
      VueSet(state, 'recordData', data.data.data.result)
    }
  }
}
