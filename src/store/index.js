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
    resHomeData({commit,state},data){
      var url='https://xcx.xcwll.cn/app/index.php?c=wxapp&a=module&do=main&id=1328&uniacid=1041'
      axios.get(url).then(function (res) {
        console.log(res)
      }).catch(function (err) {console.log(err)})
    }
  },
  mutations:{
    changeTitle(state, msg) {
      //根据路由修改页面title console.log(msg.fullPath, msg);
      document.title = state.nowTitle[msg.fullPath]
    },
  }
}
