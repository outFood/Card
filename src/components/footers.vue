<template>
  <div id="footers">
    <div v-for="(item,key) in footerMsg" :key="key">
      <router-link  to="#">
        <img :src="item.ico" alt="" @click="resData(item.path)">
        <div>
          {{item.name}}
        </div>
      </router-link>
    </div>
  </div>
</template>


<script>
  import router from '@/router'
  import config from '../myConfig'
  export default {
    data() {
      return {
        footerMsg: [{
          name: '商城首页',
          ico: '/static/img/shopIndex.png',
          path: '/shopIndex/'
        }, {
          name:'全部商品',
          path: '/sortIndex/',
          ico: '/static/img/sort.png'
        },{
          name: 'E聊',
          ico: '/static/img/eChart.png',
          path: '/eChart/'
        }, {
          name:'附近商家',
          ico: '/static/img/fujin.png',
          path: '/fujin/'
        }, {
          name:'购物车',
          ico: '/static/img/cart_black.png',
          path: '/cart/'
        }, {
          name: '会员中心',
          ico: '/static/img/vip.png',
          path: '/vipIndex/'
        }],
      tipBoxShow:false
      }
    },
    methods:{
      resData(path){
        var type='',
        path=path.replace('/','')//去掉前面的
        path=path.replace('/','')//去掉后面的
        if(path=='shopIndex'){//请求首页
          this.$store.dispatch({
            type:'resHomeData'
          })
        }else if(path=='sortIndex'){//请求分类
          this.$store.dispatch({
            type:'resSortData'
          })
        }else if(path=='eChart'){//请求E聊
          console.log('eChart')
        }else if(path=='fujin'){//请求附近
          this.$store.dispatch({
            type:'resFujinData'
          })
        }else if(path=='cart'){
          this.$store.dispatch({
            type:'lookCart',
            params:{
              t:config.t,
              uniacid:config.uniacid,
              mid:localStorage.getItem('userid'),
              openid:localStorage.getItem('openid')
            }
          })
        }else{//请求个人中心
          console.log('个人中心')
          this.$store.dispatch({
            type: 'resWode',
            params:{
              openid:localStorage.getItem('openid'),
              mid:localStorage.getItem('userid'),
              t:config.t
            }
          })
        }
      }
    },
  }
</script>
<style>
#footers{
  z-index: 1;
  position: fixed;
  bottom:-1px;
  left:0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 5px;
  width:100%;
  background: #fff;
  box-shadow:    0px -3px 0px 0px rgba(0,0,0,0.01)  /*设置上阴影*/
}
#footers>div{
  -webkit-box-flex: 0;
  -ms-flex: 0 0 14.2%;
  flex: 0 0 16.6%;
}
#footers a{
  color:#707070;
  font-size:12px;
}
#footers a img{
  width:25px;
  height:25px;
}
#footers div:nth-child(3) img{
  width:38px !important;
}
</style>

