<template>
  <div id="footers">
    <div v-for="(item,key) in footerMsg" :key="key">
      <div  class="nav-bar-item"  @click="resData(item.path)">
        <img :src="item.ico" alt="">
        <div>
          {{item.name}}
        </div>
      </div>
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
          ico:require('@/assets/shopIndex.png'),
          path: '/shopIndex'
        }, {
          name:'全部商品',
          ico:require('@/assets/sort.png'),
          path: '/sortIndex/',
        },{
          name:'附近商家',
          ico:require('@/assets/fujin.png'),
          path: '/fujin/'
        }, {
          name:'购物车',
          ico:require('@/assets/cart_black.png'),
          path: '/cart/'
        }, {
          name: '会员中心',
          ico:require('@/assets/vip.png'),
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
        console.log(path)
        if(path=='shopIndex'){//请求首页
          this.$store.dispatch({
            type:'resHomeData',
            params:{
              id:config.homeid,
              t:config.t,
              i:config.i,
              uniacid:config.uniacid,
              goIndex:0
            }
          })
        }else if(path=='sortIndex'){//请求分类
          this.$store.dispatch({
            type:'resSortData',
            params:{
              i:config.i,
              t:config.t,
              uniacid:config.uniacid,
              goIndex:0
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
              goIndex:0
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
                openid:localStorage.getItem('openid'),
                goIndex:0
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
          this.$router.push({path: '/vipIndex'})
          this.$store.dispatch({
            type: 'resWode',
            params:{
              openid:localStorage.getItem('openid'),
              mid:localStorage.getItem('userid'),
              t:config.t,
              uniacid:config.uniacid,
              i:config.i,
              goIndex:0
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
  padding: 0.1rem 0.20rem 0.20rem;
  width:100%;
  background: #fff;
  box-shadow:    0px -3px 0px 0px rgba(0,0,0,0.01)  /*设置上阴影*/
}
#footers>div{
  -webkit-box-flex: 0;
  -ms-flex: 0 0 14.2%;
  flex: 0 0 20%;
}
#footers .nav-bar-item{
  color:#707070;
  font-size:0.4rem;
}
#footers .nav-bar-item img{
  width:0.72rem;
  height:0.72rem;
  display: block;
  margin: 0 auto 2px;
}
#footers div:nth-child(3) img{
  width:0.9rem !important;
}
</style>

