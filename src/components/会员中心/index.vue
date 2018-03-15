<template>
  <div id="vip" v-if="wodeHeadData&&wodeBodyData">
    <yd-navbar title="会员中心">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon @click.native="back"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div id="head">
      <p>
        <router-link to="#"><img src="/static/img/msg.png" alt=""></router-link>
        <router-link to="/vipIndex/set"><img src="/static/img/set.png" alt=""></router-link>
        <router-link to="/vipIndex/vipInfo"><img src="/static/img/personInfo.png" alt=""></router-link>
        <span>1</span>
      </p>
      <div class="personInfo">
        <router-link to="/vipIndex/nickname" class="headPic" tag="div"><img
          :src="wodeHeadData.avatar"></router-link>
        <router-link to="/vipIndex/login"  v-if="openid==null||openid==''" class="toLogin">请点击登录</router-link>
        <div v-if="openid!=null&&openid!=''">
          <span>{{wodeHeadData.nickname==''?'未设置昵称':wodeHeadData.nickname}}</span>
          <span>【{{wodeHeadData.levelname?wodeHeadData.levelname:'普通会员'}}】</span>
          <span>ID:{{id}}</span>
        </div>
        <div v-if="openid!=null&&openid!=''">
          <span>余额</span>
          <span>{{wodeHeadData.credit2?wodeHeadData.credit2:0.00}}</span>
          <router-link to="/vipIndex/recharge" class="btn">充值</router-link>
        </div>
        <div v-if="openid!=null&&openid!=''">
          <span>积分</span>
          <span>{{wodeHeadData.credit1?wodeHeadData.credit1:0}}</span>
          <router-link to="#" class="btn" style="visibility: hidden">获取</router-link>
        </div>
      </div>
    </div>
    <div class="zijin">
      <div><span>我的资金:0.00</span></div>
      <div @click="resAddOrReduce"><span>资金来往</span></div>
      <div><span>授权登录</span></div>
      <div @click="resRecord"><span>返还记录</span></div>
    </div>
    <div class="dingdan">
      <router-link to="#" class="top" @click.native="lookOrder('全部')">
        <span>我的订单</span>
        <div>查看全部订单 <img src="/static/img/more.png" alt=""></div>
      </router-link>
      <div class="bottom">
        <router-link to="#" v-for="(item,key) in orderData" :key="key"  @click.native="lookOrder(item.text)"><img :src="item.iconSrc">{{item.text}}</router-link>
      </div>
    </div>
    <div class="other">
      <div class="other-head">
        其他
      </div>
      <div class="other-content">
        <router-link v-for="(item,key) in menuData" :key="key" to="#" @click.native="toOther(item.text)"><img :src="item.iconSrc">{{item.text}}
        </router-link>
      </div>
    </div>
    <footers></footers>
  </div>
</template>
<script>
  import config from '../../myConfig'
  import router from '@/router'
  export default {
    data(){
      return {
        openid:localStorage.getItem('openid'),
        id:localStorage.getItem('userid')
      }
    },
    computed: {
      wodeHeadData(){
        return this.$store.state.wodeHeadData
      },
      wodeBodyData(){
        return this.$store.state.wodeBodyData
      },
      menuData() {
        var menuData=this.$store.state.wodeBodyData.data.module.listmenu.data
        for(var i=0;i<menuData.length;i++){
          if(menuData[i].text=='全部订单'){
            menuData.splice(i,1)
          }else if(menuData[i].text=='我的关注'){
            menuData[i].iconSrc='/static/img/black-heart.png'
          }else if(menuData[i].text=='我的足迹'){
            menuData[i].iconSrc='/static/img/footmark.png'
          }else if(menuData[i].text=='我的地址'){
            menuData[i].iconSrc='/static/img/position.png'
          }else if(menuData[i].text=='领取优惠券'){
            menuData[i].iconSrc='/static/img/get.png'
          }else if(menuData[i].text=='我的优惠券'){
            menuData[i].iconSrc='/static/img/quan.png'
          }
        }
        return menuData
      },
      orderData(){
        var orderData=this.$store.state.wodeBodyData.data.module.menu.data
        for(var i=0;i<orderData.length;i++){
          if(i==0){
            orderData[0].iconSrc='/static/img/waitPay.png'
          }else if(i==1){
            orderData[1].iconSrc='/static/img/waitSend.png'
          }else if(i==2){
            orderData[2].iconSrc='/static/img/waitGet.png'
          }else if(i==3){
            orderData[3].iconSrc='/static/img/waitBack.png'
          }
        }
        return orderData
      },
    },
    mounted(){
    },
    methods: {
      lookOrder(text){
        this.$store.dispatch({
          type:'resMyOrder',
          text:text
        })
      },
      toOther(text){
        if(text=='我的关注'){
          router.push({path: '/vipIndex/myLike'})
        }else if(text=='我的足迹'){
          router.push({path: '/vipIndex/zuji'})
        }else if(text=='我的地址'){
          router.push({path: '/vipIndex/myAddress'})
        }else if(text=='领取优惠券'){
          router.push({path: '/vipIndex/getQuan'})
        }else if(text=='我的优惠券'){
          router.push({path: '/vipIndex/myQuan'})
        }
      },
      resAddOrReduce(){
        this.$store.dispatch({
          type:'resAddOrReduce',
          params:{
            page:1,
            pagesize:10,
            uniacid:config.uniacid,
            t:config.t,
            i:config.i,
            mid:config.mid,
            openid:localStorage.getItem('openid'),
          }
        })
      },
      resRecord(){
        this.$store.dispatch({
          type:'resRecord',
          params:{
            uniacid:config.uniacid,
            t:config.t,
            i:config.i,
            openid:localStorage.getItem('openid'),
            mid:localStorage.getItem('userid'),
            page:1,
            pagesize:10
          }
        })
      },
      back:function () {
        this.$router.go(-1)
      }
    },
    beforeCreate(){
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
    },
    mounted(){
    }
  }
</script>
<style>
  #vip .yd-navbar:after{
    border:none;
  }
  #vip header {
    height: 1.5rem !important;
    align-items: center;
  }
  #vip header .yd-navbar-center-title{
    font-size:.5rem !important;
  }
  #vip .yd-back-icon:before, .yd-next-icon:before {
    font-size: .6rem;
  }
  #vip #head {
    background: #00c2aa;
    padding: 0.3125rem;
  }
  #vip #head .toLogin{
    color:#fff;
  }
  #vip #head p {
    position: relative;
    height: 1rem;
  }
  #vip #head p img {
    width: 0.78125rem;
    height: 0.78125rem;
    float: right;
    margin-left: 0.3125rem;
  }
  #vip #head p span {
    display: inline-block;
    width: 0.46875rem;
    height: 0.46875rem;
    line-height: 0.46875rem;
    border-radius: 50%;
    background: red;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
  }
  #vip #head .personInfo {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    color: #fff
  }
  #vip #head .personInfo .headPic img {
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 50%;
    border:2px solid #fff;
  }
  #vip #head .personInfo > div {
    flex: 0 0 25%;
    text-align: center;
    line-height: 0.78125rem;
  }
  #vip #head .personInfo > div:nth-child(1) {
    flex: 0 0 20%;
  }
  #vip #head .personInfo > div:nth-child(2) {
    flex: 0 0 30%;
  }
  #vip #head .personInfo > div span {
    display: block;
  }
  #vip #head .personInfo > div .btn {
    display: block;
    color:#fff;
    border-radius: 0.3125rem;
    border: 1px solid #fff;
    width: 1.5625rem;
    height: 0.625rem;
    line-height: 0.625rem;
    margin: 0 auto;
    margin-top: 5px;
  }
  #vip .zijin {
    background: #fff;
    margin: 0.3125rem 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
  }
  #vip .zijin > div {
    flex: 0 0 50%;
    padding: 15px 0;
  }
  #vip .zijin > div:nth-child(1), .zijin > div:nth-child(2) {
    border-bottom: 1px solid #eee;
  }
  #vip .zijin > div span:nth-child(2n-1) {
    display: inline-block;
    width: 100%;
    border-right: 1px solid #eee
  }
  #vip .dingdan {
    background: #fff;
  }
  #vip .dingdan .top {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0.3125rem;
    border-bottom: 1px solid #eee;
  }
  #vip .dingdan .top img {
    width:0.625rem;
    height:0.625rem;
    vertical-align: middle;
  }
  #vip .dingdan .bottom {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    font-size:0.375rem;
  }
  #vip .dingdan .bottom > a {
    flex: 0 0 25%;
    padding: 0.3125rem 0;
  }
  #vip .dingdan .bottom > a:not(:last-child) {
    border-right: 1px solid #eee
  }
  #vip .dingdan .bottom > a img {
    width:1rem;
    height: 1rem;
    display: block;
    margin: 0 auto;
    margin-bottom: 5px;
  }
  #vip .other {
    margin: 0.3125rem 0 2.5rem 0;
    background: #fff;
  }
  #vip .other .other-head {
    padding: 0.3125rem;
    text-align: left;
    border-bottom: 1px solid #eee;
  }
  #vip .other .other-content {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    font-size:0.375rem;
  }
  #vip .other .other-content > a {
    flex: 0 0 25%;
    padding:0.3125rem 0;
  }
  #vip .other .other-content > a:not(:nth-child(4n)) {
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  #vip .other .other-content > a:nth-child(4n) {
    border-bottom: 1px solid #eee;
  }
  #vip .other .other-content > a img {
    width:0.8rem;
    height:0.8rem;
    display: block;
    margin: 0 auto;
    margin-bottom: 5px;
  }
</style>
