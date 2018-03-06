// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import config from './myConfig'

import Vuex from 'vuex'
//挂在数据中心组件
Vue.use(Vuex)
//数据中心对象引入
import storeArg from '@/store/index.js';
const store = new Vuex.Store(storeArg)
window.store = store

Vue.config.productionTip = false

//手机端布局自适应
import ('amfe-flexible')
//定义全局组件
import footers from '@/components/footers'
Vue.component("footers", footers)

//使用 更换为YDUI全部引入,打包时候自动去掉
import YDUI from 'vue-ydui';
Vue.use(YDUI);
//引入rem单位
import 'vue-ydui/dist/ydui.rem.css';
// import 'vue-ydui/dist/ydui.base.css'; 定义全局指令
let Base64 = require('js-base64').Base64;

//高德地图
import AMap from 'vue-amap';
Vue.use(AMap);
// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德的key
  key: '2512eefcc0febc6925d1f8f5f06a1a3f',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

window.app = new Vue({
  el: '#app',
  router,
  store,
  template: `<App/>`,
  components: {
    App
  },
  watch: {
    // 对路由变化作出响应...
    '$route' (to, from) {
      this.$store.commit('changeTitle', to)
    }
  },
  data: {
  },
  created(){
    this.$store.dispatch({
      type:'resHomeData',
      params:{
        id:12,
        t:2,
        uniacid:config.uniacid
      }
    })
  }
})
