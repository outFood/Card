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
      commodityListData:{}
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
      axios.get('https://xcx.xcwll.cn/app/index.php?t=1041&from=wxapp&c=entry&m=ewei_shopv2' +
        '&do=mobile&r=goods.index.get_list',{params:data.params})
        .then(function (res) {
          console.log(res)
          commit({
            type:'saveCommodityListData',
            res:res
          })
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
      console.log(state.homeData)
      if(state.homeData!={}){
        router.push({path:'/shopIndex/'})
      }
    },
    //分类
    saveSortData(state, data){
      VueSet(state,'sortData',data.res.data)
      if(state.sortData!={}){
        router.push({path:'/sortIndex/'})
      }
    },
    saveCommodityListData(state, data){
      VueSet(state,'commodityListData',data.res.data.result)
      console.log(state.commodityListData)
      if(state.commodityListData!={}){
        router.push({path:'/sortIndex/someSort'})
      }
    }
  }
}
