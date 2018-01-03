<template>
  <yd-layout title="代理中心" link="/shopIndex" id="agent">
    <div class='header'>
      <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
      <div class="headInfo">
        <h6>晴愔</h6>
        <p>浙江省杭州市滨江区</p>
      </div>
      <div class="grade">【钻石级别】</div>
    </div>
    <div class="mid">
      <div class="left">
        <img src="/static/img/people_white.png" alt="">
        <p>我的下线</p>
        0人
      </div>
      <div class="middle">
        本月预计分红
        <h5>0</h5>
        区级：0.00 乡镇：0.00
      </div>
      <div class="right">
        <img src="/static/img/Commission.png" alt="">
        <p>我的下线</p>
        0人
        <p class="withdrawals">佣金提现</p>
      </div>
    </div>
    <div class="bot">
      <router-link to="/agentIndex/photo" class="head">
        <div>累计分红：<span>0.00</span></div>
        <img src="/static/img/more.png" alt="">
      </router-link>
      <div class="main main1" v-if="len==4||len==2">
        <div>
          <img src="/static/img/money.png" alt="">
          <p>省级</p>
          <span>0.00</span>
        </div>
        <div>
          <img src="/static/img/money.png" alt="">
          <p>市级</p>
          <span>0.00</span>
        </div>
        <div>
          <img src="/static/img/money.png" alt="">
          <p>区级</p>
          <span>0.00</span>
        </div>
        <div>
          <img src="/static/img/money.png" alt="">
          <p>乡镇级</p>
          <span>0.00</span>
        </div>
      </div>
      <div class="main main2"  v-if="len==3">
        <div>
          <img src="/static/img/money.png" alt="">
          <p>省级</p>
          <span>0.00</span>
        </div>
        <div>
          <img src="/static/img/money.png" alt="">
          <p>市级</p>
          <span>0.00</span>
        </div>
        <div>
          <img src="/static/img/money.png" alt="">
          <p>区级</p>
          <span>0.00</span>
        </div>
      </div>
      <div class="main main3"  v-if="len==1">
        <div>
          <img src="/static/img/money.png" alt="">
          <p>省级</p>
          <span>0.00</span>
        </div>
      </div>
    </div>
  </yd-layout>
</template>
<script>
  export default {
    data(){
      return{
        len:2
      }
    }
  }
</script>
<style>
  #agent .header,.mid{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    padding:15px 10px;
    background: #fff;
  }
  #agent .header img{
    width:40px;
    height:40px;
    border-radius: 50%;
  }
  #agent .header .headInfo{
    flex:0 0 55%;
    text-align: left;
    margin-left:10px;
    font-size:12px;
  }
  #agent .header .headInfo h6{
    font-weight: bold;
    font-size: 14px;
  }
  #agent .header .grade{
  color:#ff5552;
   font-weight: bold;
 }
  #agent .mid{
    background: #ff9a00;
    color:#fff;
    justify-content: space-between;
    font-size:12px;
  }
  #agent .mid img{
    width:25px;
    height:25px;
  }
  #agent .mid .middle h5{
    font-size: 30px;
  }
  #agent .mid .withdrawals{
    padding:0 5px;
    border:1px solid #eee;
    border-radius: 10px;
  }
  #agent .bot{
    background: #fff;
    margin:10px 0;
  }
  #agent .bot .head{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:10px;
    text-align: left;
    border-bottom: 1px solid #eee;
  }
  #agent .bot .head img{
    width:20px;
    height:20px;
    vertical-align: middle;
  }
  #agent .bot .main{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  #agent .bot .main img{
    width:30px;
    height:30px;
    vertical-align: middle;
  }
  #agent .bot .main p{
    margin:5px 0;
  }
  #agent .bot span{
    color:#ff9a00
  }
  #agent .bot .main1>div{
    flex:0 0 50%;
    padding:10px;
  }
  #agent .bot .main1>div:nth-child(2n-1){
    border-right:1px solid #eee;
    border-bottom:1px solid #eee;
  }
  #agent .bot .main1>div:nth-child(2n){
    border-bottom:1px solid #eee;
  }
  #agent .bot .main2>div{
    flex:0 0 33%;
    padding:10px;
  }
  #agent .bot .main2>div:not(:nth-child(3n)){
    border-right:1px solid #eee;
    border-bottom:1px solid #eee;
  }
  #agent .bot .main2>div:nth-child(3n){
    border-bottom:1px solid #eee
  }
  #agent .bot .main3>div{
    flex:0 0 100%;
    padding:10px 0;
  }
</style>
