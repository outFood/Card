<template>
  <div id="vip">
    <yd-navbar title="会员中心">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div id="head">
      <p>
        <router-link to="#"><img src="/static/img/msg.png" alt=""></router-link>
        <router-link to="#"><img src="/static/img/set.png" alt=""></router-link>
        <router-link to="/vipIndex/vipInfo"><img src="/static/img/personInfo.png" alt=""></router-link>
        <span>1</span>
      </p>
      <div class="personInfo">
        <router-link to="/vipIndex/nickname" class="headPic" tag="div"><img
          src="#"></router-link>
        <router-link to="/vipIndex/login"  v-if="loginStatus!='登录成功'" class="toLogin">请点击登录</router-link>
        <div v-if="loginStatus=='登录成功'">
          <span>【普通会员】</span>
          <span>ID:6532</span>
        </div>
        <div v-if="loginStatus=='登录成功'">
          <span>余额</span>
          <span>0.00000</span>
          <span class="btn">充值</span>
        </div>
        <div v-if="loginStatus=='登录成功'">
          <span>积分</span>
          <span>0.00000</span>
          <span class="btn">获取</span>
        </div>
      </div>
    </div>
    <div class="zijin">
      <div><span>我的资金:0.00</span></div>
      <div><span>资金来往</span></div>
      <div><span>授权登录</span></div>
      <div><span>返还记录</span></div>
    </div>
    <div class="dingdan">
      <router-link to="/vipIndex/order" class="top">
        <span>我的订单</span>
        <div>查看全部订单 <img src="/static/img/more.png" alt=""></div>
      </router-link>
      <div class="bottom">
        <router-link to="#" v-for="(item,key) in orderData" :key="key"><img src="http://static.ydcss.com/uploads/ydui/1.jpg">{{item.text}}</router-link>
      </div>
    </div>
    <div class="other" v-if="menuData!=[]">
      <div class="other-head">
        其他
      </div>
      <div class="other-content">
        <router-link :to="item.link" v-for="(item,key) in menuData" :key="key"><img src="http://static.ydcss.com/uploads/ydui/1.jpg">{{item.text}}
        </router-link>
      </div>
    </div>
    <footers></footers>
  </div>
</template>
<style>
  #vip {

  }

  #vip header {
    height: 1.5rem !important;
    align-items: center;
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
    width: 1.5625rem;
    height: 1.5625rem;
    border-radius: 50%;
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
    margin: 10px 0;
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
    padding: 10px;
    border-bottom: 1px solid #eee;
  }

  #vip .dingdan .top img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }

  #vip .dingdan .bottom {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    font-size: 12px;
  }

  #vip .dingdan .bottom > a {
    flex: 0 0 25%;
    padding: 10px 0;
  }

  #vip .dingdan .bottom > a:not(:last-child) {
    border-right: 1px solid #eee
  }

  #vip .dingdan .bottom > a img {
    width: 40px;
    height: 40px;
    display: block;
    margin: 0 auto;
    margin-bottom: 5px;
  }

  #vip .other {
    margin: 10px 0 80px 0;
    background: #fff;
  }

  #vip .other .other-head {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #eee;
  }

  #vip .other .other-content {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
  }

  #vip .other .other-content > a {
    flex: 0 0 25%;
    padding: 10px 0;
  }

  #vip .other .other-content > a:not(:nth-child(4n)) {
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }

  #vip .other .other-content > a:nth-child(4n) {
    border-bottom: 1px solid #eee;
  }

  #vip .other .other-content > a img {
    width: 40px;
    height: 40px;
    display: block;
    margin: 0 auto;
    margin-bottom: 5px;
  }
</style>
<script>
  export default {
    methods: {},
    computed: {
      menuData() {
        var menuData=[]
        menuData = this.$store.state.wodeBodyData.listmenu.data
        for (var i = 0; i < menuData.length; i++) {//请求回来的数据列表项里没有跳转地址，所有循环列表为每项添加link这一项，好用来
          if(menuData[i].text=='我的关注'){
            menuData[i].link='#'
          }else if(menuData[i].text=='我的足迹'){
            menuData[i].link='#'
          }else if(menuData[i].text=='我的地址'){
            menuData[i].link='/vipIndex/myAddress'
          }else if(menuData[i].text=='领取优惠券'){
            menuData[i].link='#'
          }else if(menuData[i].text=='我的优惠券'){
            menuData[i].link='#'
          }
        }
        return menuData
      },
      orderData(){
        return this.$store.state.wodeBodyData.menu.data
      },
      loginStatus(){
        return this.$store.state.loginStatus
      }
    },
  }
</script>
