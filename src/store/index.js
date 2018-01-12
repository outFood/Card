import axios from 'axios'
import $ from 'jquery';
import Vue from 'Vue'
import router from '@/router'

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
      prefix: 'https://xcx.xcwll.cn/attachment/',//附加前缀
      pageNum: 0,
      //分类
      sortData: {},
      keywords: '',//请求商品列表的分类关键字
      commodityListData: {},
      commodityDetailData: {},
      commodityColorSizeData: {},
      payStaus: '购买',
      buyPageData: {},
      //附近商家
      Fujin_sortData: [],
      getFujin_slideData: [],
      Fujin_ListData: {},
      payStatus: '购买',
      //购物车
      cartData: {},
      cartcount: 0,
      exclusiveShopData: {},
      //分销
      fenxiao_headData: {},
      fenxiao_bodyData: {},
      priceData:{},
      tixianData:{},
      tuiguangData:{},
      //个人中心
      wodeHeadData: {},
      wodeBodyData: {},
      loginStatus: '',
      vipInfoData:{},
      myAddressData: {},
      wantEditAddress: [],
      curSelAddress: {},
      myOrder:{},
      orderStatus:null,
      myLikeData:{},
      zuJiData:{}
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
      $.ajax({
        type:"get",
        url:'http://cscs.ylhhyk.com/app/index.php?c=wxapp&a=module&do=main&id=12&uniacid=2',
        dataType:"jsonp",    //跨域json请求一定是jsonp
        jsonp: "jsonpcallback",    //跨域请求的参数名，默认是callback
        success: function(res) {
          commit({
            type: 'saveHomeData',
            data: res
          })
        },
        error: function(err) {console.log('请求失败!')},
      });
    },
    // resFuKuan({commit, state}, data){
    //   axios.get('https://xcx.xcwll.cn/app/index.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member.branch.payment&mid='+localStorage.getItem('userid'))
    //     .then(function (res) {
    //     console.log(res)
    //   }).catch(function (err) {alert(err)})
    // },
    // resShouKuan({commit, state}, data){
    //   axios.get('https://xcx.xcwll.cn/app/index.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member.branch.receivables&mid='+localStorage.getItem('userid'))
    //     .then(function (res) {
    //     console.log(res)
    //   }).catch(function (err) {alert(err)})
    // },
    // resVip({commit, state}, data){
    //   axios.get('https://xcx.xcwll.cn/app/index.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member.branch&mid='+localStorage.getItem('userid'))
    //     .then(function (res) {
    //     console.log(res)
    //   }).catch(function (err) {alert(err)})
    // },
    //分类
    resSortData({commit, state}, data) {
      $.ajax({
        type:"get",
        url:'http://cscs.ylhhyk.com/bale/api.php?mod=category&uniacid=1691',
        dataType:"jsonp",    //跨域json请求一定是jsonp
        jsonp: "jsonpcallback",    //跨域请求的参数名，默认是callback
        success: function(res) {
          console.log(res)
          // commit({
          //   type: 'saveSortData',
          //   res: res,
          // })
        },
        error: function(err) {console.log('请求失败!')},
      });
    },
    resCommodityListData({commit, state}, data) {
      axios.get('http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=goods.index.get_list', {params: data.params})
        .then(function (res) {
          commit({
            type: 'saveCommodityListData',
            res: res
          })
        }).catch(function (err) {
        alert(err)
      })

    },
    resFujinData({commit, state}, data) {
      var id = data.id ? data.id : '';//如果点击分类的时候请求就有id,否则就是页面加载的时候请求
      function getFujin_sortData() {//分类
        return axios.get('http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.list.get_category&uniacid=1691');
      }

      function getFujin_slideData() {//轮播
        return axios.get('http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.list.get_category_swipe&uniacid=1691');
      }

      function getFujin_ListData() {//商户列表
        return axios.get('http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.list.ajaxmerchuser&uniacid=1691&id=' + id);
      }

      axios.all([getFujin_sortData(), getFujin_slideData(), getFujin_ListData()])//一次性并发多个请求
        .then(axios.spread(function (Fujin_sortData, getFujin_slideData, Fujin_ListData) {
          //当这三个个请求都完成的时候会触发这个函数，两个参数分别代表返回的结果
          commit({
            type: 'saveFujinData',
            data: {
              Fujin_sortData: Fujin_sortData,
              getFujin_slideData: getFujin_slideData,
              Fujin_ListData: Fujin_ListData
            }
          })
        }))
    },
    resCommodityDetailData({commit, state}, data) {
      function commodityDetailData() {
        return axios.get('http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=goods.detailapp.get_detailapp&id=' + data.id)
      }

      function commodityPingjiaData() {
        return axios.get('http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=goods.detail.get_comments&id=' + data.id)
      }

      function commodityColorSizeData() {
        return axios.get('http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=goods.detailapp.picker&id=' + data.id)
      }

      function commodityPingjiaSortData() {
        return axios.get('http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=goods.detail.get_comment_list&id=' + data.id)
      }

      function submitCart() {
        return axios.get('http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.cart.submit&id=' + data.id)
      }

      function like() {
        return axios.get('http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.favorite.toggle&id=' + data.id)
      }

      axios.all([commodityDetailData(), commodityColorSizeData()]).then(axios.spread(function (commodityDetailData, commodityColorSizeData) {
        // console.log('commodityColorSizeData-----------------')
        // console.log(commodityColorSizeData)
        commit({
          type: 'saveCommodityDetailData',
          data: {
            commodityDetailData: commodityDetailData,
            commodityColorSizeData: commodityColorSizeData
          }
        })
      }))
    },
    changePayStaus({commit, state}, data) {
      commit({
        type: 'changePayStaus',
        payStatus: data.payStatus
      })
    },
    cartOrPay({commit, state}, data) {
      console.log(data)
      if (state.payStatus == '加入购物车') {
        axios.get('http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.cart.add&&state=we7sid-7f5e1067218e32fb9cd327acaabf9430&sign=917611cadf9681e6108cf5a8176f702e', {params: data.params})
          .then(function (res) {
            console.log(res)
            commit({
              type: 'saveCartcount',
              data: res
            })
          }).catch(function (err) {
          alert(err)
        })
      } else {
        axios.get('http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.create.get_main&id=4795&optionid=0&total=1&&state=we7sid-43d297d3dcac31741967a93cb40a96c6&sign=e5454538661e164fbca833d729d3d7fb', {params: data.params})
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
    //查看购物车
    lookCart({commit, state}, data) {
      $.ajax({
        type:"get",
        url:'http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.cart.get_list&&state=we7sid-7f5e1067218e32fb9cd327acaabf9430&sign=769697d94b1f3465b87d8785ab118612',
        dataType:"jsonp",    //跨域json请求一定是jsonp
        jsonp: "jsonpcallback",    //跨域请求的参数名，默认是callback
        success: function(res) {
          commit({
            type: 'saveCartData',
            res: res
          })
        },
        error: function(err) {
          //请求出错处理
          console.log(err)
        },
      });
    },
    cartUpdate({commit, state}, data) {
      axios.get('http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.cart.update&state=we7sid-989f479443e701453157a809d00e2e0f&sign=0cba9601498c1bf800a5c9a5c57996a0', {params: data.params})
        .then(function (res) {
        }).catch(function (err) {
        alert(err)
      })
    },
    cartDelete({commit, state}, data) {
      console.log(data)
      axios.get('http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.cart.remove&&state=we7sid-989f479443e701453157a809d00e2e0f&sign=4ef7ee8a48b806ac9c01ab9bbeb27e7e&ids=' + data.ids)
        .then(function (res) {
          commit({
            type: 'saveCartcount',
            data: 0
          })
        })
    },
    //附近商家
    resExclusiveShopData({commit, state}, data) {
      // var url='https://xcx.xcwll.cn/app'+(data.url).replace(/^./, "")+'&state=we7sid-989f479443e701453157a809d00e2e0f&sign=907857da4524149aacd027f26975f731'
      var url = 'http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.index.get_main&state=we7sid-989f479443e701453157a809d00e2e0f&sign=5fc39c4c2d8acbfb7c253e67cbecda05&mid=0&merchid=' + data.id
      axios.get(url).then(function (res) {
        commit({
          type: 'saveExclusiveShopData',
          res: res
        })
      }).catch(function (err) {
        alert(err)
      })
    },
    //分销中心
    resApply({commit, state}, data) {
      axios.get('http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=commission.register.get_main&t=1691&&state=we7sid-4f2d9a8d5e70055b534269913f0ef403&sign=23b2327d9a7d8822eea66b734afb29de', {params: data.params})
        .then(function (res) {
          localStorage.setItem('status',res.data.status)//用来标识是否是分销商
          localStorage.setItem('isRegistAgent',true)//用来标识是否已经注册分销商
          if(res.data.status=='1'){
            router.push({path:'/distributIndex'})
          }
        }).catch(function (err) {alert(err)})
    },
    resFenxiao({commit, state}, data) {
      function resHeadData() {
        return axios.get('http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=commission.index.get_main&&state=we7sid-794d7db19adf5357dd4aa60d3d4dfef8&sign=c78207aafe04e19076ec63ad8d6d903d&openid='+localStorage.getItem('openid')+'&cc='+'ooo')
      }
      function resBodyData() {
        return axios.get('http://cscs.ylhhyk.com/app/index.php?c=wxapp&a=module&do=nav&uniacid=1691&type=4')
      }
      axios.all([resHeadData(), resBodyData()]).then(axios.spread(function (HeadData, BodyData) {
        commit({
          type: 'saveFenxiao',
          HeadData: HeadData,
          BodyData: BodyData
        })
      }))
    },
    resPrice({commit, state}, data){
      axios.get('http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=commission.withdraw.get_main&i=1691')
        .then(function (res) {
          commit({
            type:'savePriceData',
            res:res
          })
        }).catch(function (res) {alert(err)})
    },
    resTiXian({commit, state}, data){
      $.ajax({
        type:"get",
        url:"http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=commission.log.get_list&i=1691",
        dataType:"jsonp",    //跨域json请求一定是jsonp
        jsonp: "jsonpcallback",    //跨域请求的参数名，默认是callback
        success: function(res) {
          commit({
            type:'saveTixianData',
            res:res
          })
        },
        error: function(err) {
          //请求出错处理
          alert(err)
        },
      });
    },
    resXiaXian({commit, state}, data){
      $.ajax({
        type:"get",
        url:"http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=commission.down.get_list&page=1&level=1&openid="+localStorage.getItem('openid'),
        dataType:"jsonp",    //跨域json请求一定是jsonp
        jsonp: "jsonpcallback",    //跨域请求的参数名，默认是callback
        success: function(res) {
          console.log(res)
        },
        error: function(err) {
          //请求出错处理
          console.log('请求失败:'+err)
        },
      });
    },
    resTuiGuang({commit, state}, data){
      $.ajax({
        type:"get",
        url:"http://cscs.ylhhyk.com/app/index.php?i=1691&c=entry&m=ewei_shopv2&do=mobile&r=commission.qrcode.get_main&mid="+localStorage.getItem("userid"),
        dataType:"jsonp",    //跨域json请求一定是jsonp
        jsonp: "jsonpcallback",    //跨域请求的参数名，默认是callback
        success: function(res) {
          console.log(res)
          // commit({
          //   type:'saveTuiGuangData',
          //   res:res
          // })
        },
        error: function(err) {
          //请求出错处理
          alert(err)
        },
      });
    },
    resXiaoDianData({commit, state}, data){
      $.ajax({
        type:"get",
        url:"http://cscs.ylhhyk.com/app/index.php?i=1691&c=entry&m=ewei_shopv2&do=mobile&r=commission.myshop.set.get_main&t=1691&openid="+localStorage.getItem('openid'),
        dataType:"jsonp",    //跨域json请求一定是jsonp
        jsonp: "jsonpcallback",    //跨域请求的参数名，默认是callback
        success: function(res) {
          console.log(res)
        },
        error: function(err) {
          //请求出错处理
          console.log(err)
        },
      });
    },
    //个人中心
    resWode({commit, state}, data) {
      //请求wodeHeadData
      $.ajax({
        type:"get",
        url:"http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.xcxl",
        dataType:"jsonp",    //跨域json请求一定是jsonp
        jsonp: "jsonpcallback",    //跨域请求的参数名，默认是callback
        data:{
          id:localStorage.getItem('userid'),
          openid:localStorage.getItem('openid')
        },
        success: function(data) {
          commit({
            type:'saveWodeHeadData',
            data:data
          })
        },
        error: function(err) {
          //请求出错处理
          console.log('请求失败')
        },
      });
      //请求wodeBodyData
      $.ajax({
        type:"get",
        url:"http://cscs.ylhhyk.com/app/index.php?c=wxapp&a=module&do=nav&uniacid=1691&type=3",
        dataType:"jsonp",    //跨域json请求一定是jsonp
        jsonp: "jsonpcallback",    //跨域请求的参数名，默认是callback
        data:{tip:'我是jsonp方式请求'},
        success: function(data) {
          commit({
            type:'saveWodeBodyData',
            data:data
          })
        },
        error: function(err) {
          //请求出错处理
          console.log('请求失败')
        },
      });
    },
    regist({commit, state}, data) {
      $.ajax({
        type:"get",
        url:'http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.user.register',
        dataType:"jsonp",    //跨域json请求一定是jsonp
        jsonp: "jsonpcallback",    //跨域请求的参数名，默认是callback
        data:data.params,
        success: function(res) {
         if(res.msg=='注册成功'){
           router.push({path: '/vipIndex/login'})
         }
        },
        error: function(err) {
          //请求出错处理
          console.log(err)
        },
      });
    },
    login({commit, state}, data) {
      $.ajax({
        type:"get",
        url:"http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.user.passwordlogin",
        dataType:"jsonp",    //跨域json请求一定是jsonp
        jsonp: "jsonpcallback",    //跨域请求的参数名，默认是callback
        data:data.params,
        success: function(res) {
          console.log(res)
          if(res['0']){
            localStorage.setItem('openid',res[0].openid)
            localStorage.setItem('userid',res[0].id)
          }
          commit({
            type:'saveLoginInfo',
            res:res
          })
        },
        error: function(err) {alert(err)},
      });
    },
    resVipInfo({commit, state}, data){
      $.ajax({
        type:"get",
        url:"http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=merch.xcxl",
        dataType:"jsonp",    //跨域json请求一定是jsonp
        jsonp: "jsonpcallback",    //跨域请求的参数名，默认是callback
        data:{
          id:localStorage.getItem('userid'),
          openid:localStorage.getItem('openid')
        },
        success: function(data) {
          commit({
            type:'saveVipInfoData',
            data:data
          })
        },
        error: function(err) {
          //请求出错处理
          console.log('请求失败')
        },
      });
    },
    resAddress({commit, state}, data) {
      axios.get('http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.address.indexapp&&state=we7sid-989f479443e701453157a809d00e2e0f&sign=5ec2bec56de4ed22e4149dbb3c82cc5c')
        .then(function (res) {
          commit({
            type: 'saveAddress',
            res: res
          })
        }).catch(function (err) {
        alert(err)
      })
    },
    resDelAddress({commit, state}, data) {
      axios.get('http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.address.delete&&state=we7sid-989f479443e701453157a809d00e2e0f&sign=6502bf75e1e422f28b1116a00b6e74c9', {params: data.params})
        .then(function (res) {
          //删除地址成功重新请求地址列表
          axios.get('http://cscs.ylhhyk.com/app/index.php?t=16911&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.address.indexapp&&state=we7sid-989f479443e701453157a809d00e2e0f&sign=5ec2bec56de4ed22e4149dbb3c82cc5c')
            .then(function (res) {
              commit({
                type: 'saveAddress',
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
    updateAddress({commit, state}, data) {
      console.log(data)
      axios.get('http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.address.submitapp&&state=we7sid-989f479443e701453157a809d00e2e0f&sign=65f61bce1d5fe1c97a40ddf0edb449d0', {params: data.params})
        .then(function (res) {
          router.push({path: '/vipIndex/myAddress'})
        }).catch(function (err) {
        alert(err)
      })
    },
    saveAddress({commit, state}, data) {
      axios.get('http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.address.submitapp&&state=we7sid-989f479443e701453157a809d00e2e0f&sign=65f61bce1d5fe1c97a40ddf0edb449d0', {params: data.params})
        .then(function (res) {
          console.log('保存地址成功')
          router.push({path: '/vipIndex/myAddress'})
        }).catch(function (err) {
        alert(err)
      })
    },
    defaultAddress({commit, state}, data) {
      axios.get('http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.address.setdefault&&state=we7sid-989f479443e701453157a809d00e2e0f&sign=56270194a41701253e0ca556eb6c9312', {params: data.params})
        .then(function (res) {
          //设置默认地址成功重新请求地址列表
          axios.get('http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.address.indexapp&&state=we7sid-989f479443e701453157a809d00e2e0f&sign=5ec2bec56de4ed22e4149dbb3c82cc5c')
            .then(function (res) {
              commit({
                type: 'saveAddress',
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
    updatePersonInfo({commit, state}, data) {
      axios.get('http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.info.submitapp&&state=we7sid-1fa768373e19fb6cacea1690c9cf9b04&sign=812f860da7c14dc7079e64b07b6242aa', {params: data.params})
        .then(function (res) {
          router.push({path: '/vipIndex'})
        }).catch(function (err) {
        alert(err)
      })
    },
    resMyOrder({commit, state}, data){
      var status=6;
      if(data.text=='全部'){status=6}else if(data.text=='待付款'){status=0}else if(data.text=='待发货'){status=1}else if(data.text=='待收货'){status=2}else if(data.text=='退换货'){status=4}
      $.ajax({
        type:"get",
        url:"http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=order.index.get_list&sign=118b061a710a82fc1762d4af90412993&page=1&openid="+localStorage.getItem('openid')+"&status="+status,
        dataType:"jsonp",    //跨域json请求一定是jsonp
        jsonp: "jsonpcallback",    //跨域请求的参数名，默认是callback
        success: function(res) {
          commit({
            type:'saveMyOrder',
            res:res,
            orderStatus:status
          })
        },
        error: function(err) {console.log('请求失败')},
      });
    },
    resMyLike({commit, state}, data){
      axios.get('http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.favorite.get_list&state=we7sid-975167fc755bee24014a907c543d470a&sign=53dc9be5eeb273014547a514c8efd073&page=1')
        .then(function (res) {
          commit({
            type:'saveMyLikeData',
            res:res
          })
        }).catch(function (err) {console.log('请求失败')})
    },
    resZuji({commit, state}, data){
      axios.get('http://cscs.ylhhyk.com/app/index.php?t=1691&from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.history.get_list&state=we7sid-975167fc755bee24014a907c543d470a&sign=feed173bdcf9295b285677c86c060149&page=1')
        .then(function (res) {
          commit({
            type:'saveZujiData',
            res:res
          })
        }).catch(function (err) {console.log('请求失败')})
    }
  },
  mutations: {
    changeTitle(state, msg) {
      //根据路由修改页面title console.log(msg.fullPath, msg);
      document.title = state.nowTitle[msg.fullPath]
    },
    //首页
    saveHomeData(state, data) {
      VueSet(state, 'homeData', data.data.result)
      console.log(state.homeData)
      if (state.homeData != {}) {
        router.push({path: '/shopIndex/'})
      }
    },
    //分类
    saveSortData(state, data) {
      VueSet(state, 'sortData', data.res.data)
      console.log(state.sortData)
      if (state.sortData != {}) {
        router.push({path: '/sortIndex/'})
      }
    },
    saveCommodityListData(state, data) {//商品列表
      VueSet(state, 'commodityListData', data.res.data.result)
      console.log(state.commodityListData)
      if (state.commodityListData != {}) {
        router.push({path: '/sortIndex/someSort'})
      }
    },
    saveFujinData(state, data) {
      VueSet(state, 'Fujin_sortData', data.data.Fujin_sortData.data)
      VueSet(state, 'getFujin_slideData', data.data.getFujin_slideData.data)
      VueSet(state, 'Fujin_ListData', data.data.Fujin_ListData.data)
      console.log(state.Fujin_ListData)
      if (state.Fujin_sortData && state.getFujin_slideData && state.Fujin_ListData) {
        router.push({path: '/fujinIndex/'})
      }
    },
    saveCommodityDetailData(state, data) {
      VueSet(state, 'commodityDetailData', data.data.commodityDetailData.data)
      VueSet(state, 'commodityColorSizeData', data.data.commodityColorSizeData.data.result)
      console.log('commodityColorSizeData-----------------------------------')
      console.log(state.commodityColorSizeData)
      if (state.commodityDetailData != {}) {
        router.push({path: '/sortIndex/detail'})
      }
    },
    changePayStaus(state, data) {
      VueSet(state, 'payStatus', data.payStatus)
    },
    saveBuyPageData(state, data) {
      VueSet(state, 'buyPageData', data.res.data)
      console.log(state.buyPageData)
      if (state.buyPageData != {}) {
        router.push({path: '/sortIndex/buyPage'})
      }

    },
    //  购物车
    saveCartData(state, data) {
      VueSet(state, 'cartData', data.res)
      console.log(state.cartData)
      if (state.cartData != {}) {
        router.push({path: '/cart/'})
      }
    },
    saveCartcount(state, data) {
      if (data.data == 0) {
        VueSet(state, 'cartcount', 0)
      } else {
        VueSet(state, 'cartcount', data.data.data.result.cartcount)
      }
    },
    //附近商家
    saveExclusiveShopData(state, data) {
      VueSet(state, 'exclusiveShopData', data.res.data.result)
      if (state.exclusiveShopData != {}) {
        router.push({path: '/fujinIndex/exclusiveShop'})
      }
      console.log('**************exclusiveShopData****************')
      console.log(state.exclusiveShopData)
    },
    //分销
    saveFenxiao(state, data) {
      VueSet(state, 'fenxiao_headData', data.HeadData.data)
      VueSet(state, 'fenxiao_bodyData', data.BodyData.data)
    },
    savePriceData(state, data){
      VueSet(state,'priceData',data.res.data.result)
      console.log(state.priceData)
    },
    saveTixianData(state, data){
      VueSet(state,'tixianData',data.res)
      console.log(state.tixianData)
    },
    //个人中心
    saveWodeHeadData(state, data){
      VueSet(state,'wodeHeadData',data.data)
    },
    saveWodeBodyData(state, data) {
      VueSet(state, 'wodeBodyData', data.data.module)
      if (state.wodeBodyData != {}) {
        router.push({path: '/vipIndex'})
      }
    },
    saveLoginInfo(state, data) {
      VueSet(state, 'loginStatus', data.res.msg)
    },
    saveVipInfoData(state, data){
      VueSet(state,'vipInfoData',data.data)
      console.log(state.vipInfoData)
    },
    saveAddress(state, data) {
      console.log(data.res.data.result)
      VueSet(state, 'myAddressData', data.res.data.result.list)
    },
    saveWantEditAddress(state, data) {
      VueSet(state, 'wantEditAddress', data.params)
      console.log(state.wantEditAddress)
      if (state.wantEditAddress != {}) {
        router.push({path: '/vipIndex/editAddress'})
      }
    },
    saveSelAddress(state, data) {
      VueSet(state, 'curSelAddress', data.data.item)
      console.log(state.curSelAddress)
      if (state.curSelAddress != {}) {
        router.push({path: '/sortIndex/buyPage'})
      }
    },
    saveMyOrder(state, data){
      VueSet(state,'myOrder',data.res)
      VueSet(state,'orderStatus',data.orderStatus)
      console.log(state.myOrder)
      if(state.myOrder!={}&&state.orderStatus!=null){
        router.push({path: '/vipIndex/order'})
      }
    },
    saveMyLikeData(state, data){
      VueSet(state,'myLikeData',data.res.data.result)
      console.log(state.myLikeData)
    },
    saveZujiData(state, data){
      VueSet(state,'zuJiData',data.res.data.result)
      console.log(state.zuJiData)
    }
  }
}
