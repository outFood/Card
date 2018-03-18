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
        },
//          {
//          name: 'E聊',
//          ico: '/static/img/eChart.png',
//          path: '/eChart/'
//        },
          {
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
    computed:{
      lat(){
        this.$store.state.lat
      },
      lng(){
        this.$store.state.lng
      }
    },
    methods:{
      loadmap() {
        const map = new AMap.Map('allmap');
      },
      resData(path){
        var type='',
        path=path.replace('/','')//去掉前面的
        path=path.replace('/','')//去掉后面的
        if(path=='shopIndex'){//请求首页
          this.$store.dispatch({
            type:'resHomeData',
            params:{
              id:config.homeid,
              t:config.t,
              uniacid:config.uniacid
            }
          })
        }else if(path=='sortIndex'){//请求分类
          this.$store.dispatch({
            type:'resSortData',
            params:{
              i:config.i,
              t:config.t,
              uniacid:config.uniacid
            }
          })
        }else if(path=='eChart'){//请求E聊
        }else if(path=='fujin'){//请求附近
          this.$store.dispatch({
            type:'resFujinData',
            params:{
              page:1,
              pagesize:10,
              cateid:'',
              lat:this.$store.state.lat?this.$store.state.lat:'',
              lng:this.$store.state.lng?this.$store.state.lng:'',
              uniacid:config.t,
              t:config.t,
              i:config.i,
            },
          })
        }else if(path=='cart'){
          var openid=localStorage.getItem('openid')
          var mid=localStorage.getItem('userid')
          if(openid!=null&&openid!='undefined'&&mid!=null&&mid!='undefined'){
            this.$store.dispatch({
              type:'lookCart',
              params:{
                t:config.t,
                i:config.i,
                uniacid:config.uniacid,
                mid:localStorage.getItem('userid'),
                openid:localStorage.getItem('openid')
              }
            })
          }else{
            this.$dialog.confirm({
              title: '提示',
              mes: '请先登录！',
              opts: () => {
                router.push({path: '/vipIndex/login'})
              }
            });
          }
        }else{//请求个人中心
          this.$store.dispatch({
            type: 'resWode',
            params:{
              openid:localStorage.getItem('openid'),
              mid:localStorage.getItem('userid'),
              t:config.t,
              uniacid:config.uniacid,
              i:config.i
            }
          })
        }
      }
    },
  }
</script>
<style>
#footers{
  z-index: 100;
  position: fixed;
  bottom:-1px;
  left:0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding:0.25rem;
  width:100%;
  background: #fff;
  box-shadow:    0px -3px 0px 0px rgba(0,0,0,0.01)  /*设置上阴影*/
}
#footers>div{
  -webkit-box-flex: 0;
  -ms-flex: 0 0 14.2%;
  flex: 0 0 20%;
}
#footers a{
  color:#707070;
  font-size:0.45rem;
}
#footers a img{
  width:0.79rem;
  height:0.79rem;
}
#footers div:nth-child(3) img{
  width:1rem !important;
}
</style>

