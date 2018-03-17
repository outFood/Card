<template>
  <div v-if="headData" id="headers" :style="{background:headData.style.background,opacity:headData.style.opacity}">
    <img src="/static/img/shop-white.png" alt="" @click="toSort">
    <input type="text" :placeholder="headData.params.placeholder" v-bind:class="[headData.params.searchstyle]" :style="{background:headData.style.searchbackground,color:headData.style.searchtextcolor,opacity:headData.style.opacityinput}" @click="toSearch">
    <img src="/static/img/cart.png" alt="" @click="toCart">
  </div>
</template>
<style>
  #headers{
    z-index: 2;
    position: fixed;
    top:0;
    left:0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding:0.3125rem;
    width:100%;
    background: #efbe10;
  }
  #headers img{
    width:0.78rem;
    height:0.78rem;
  }
  #headers .round{
    border-radius: 5px;
  }
  #headers .circle{
    border-radius:1.5625rem;
  }
  #headers input{
    background: rgb(255, 255, 255);
    color: rgb(102, 102, 102);
    opacity: 1;
    flex: 0 0 70%;
    height:0.9375rem;
    padding-left:0.3125rem;
    border:none
  }
</style>
<script>
  import router from '@/router'
  import config from '../../myConfig'
  export default {
    data(){
      return {

      }
    },
    computed:{
      headData(){
        for(var key in this.$store.state.homeData){
          if(this.$store.state.homeData[key].id=="fixedsearch"){
            return this.$store.state.homeData[key]
          }
        }
      }
    },
    methods:{
      toSearch(){
        router.push({path: '/sortIndex/someSort'})
      },
      toSort(){
        this.$store.dispatch({
          type:'resSortData',
          params:{
            i:config.i,
            t:config.t,
            uniacid:config.uniacid
          }
        })
      },
      toCart(){
        var openid=localStorage.getItem('openid')
        var mid=localStorage.getItem('userid')
        if(openid!=null&&openid!='undefined'&&mid!=null&&mid!='undefined'){
          this.$store.dispatch({
            type:'lookCart',
            params:{
              t:config.t,
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
      }
    }
  }
</script>
