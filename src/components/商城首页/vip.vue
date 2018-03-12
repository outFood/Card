<template>
  <yd-layout title="E卡会员" link="#" id="homeVip">
    <div class='vipInfo'>
      <div class="card">
          <img src="https://authorize.ylhhyk.com/Template/HongYi/new/images/membershipCard-logo.png" alt="">
          <img :src="vipCard.code" alt="">
          <p class="bottom"> 会员ID:{{vipCard.member.id}}</p>
      </div>
      <div class="vipOtherInfo">
        <div>
          积分 <span>获取</span>
        </div>
        <div>
          等级 <span>{{vipCard.level.levelname}}</span>
        </div>
        <div>
          商城余额 <span>{{vipCard.member.credit2}}</span>
        </div>
      </div>
      <span class="use">立即使用</span>
    </div>
    <yd-cell-group class="foot">
      <yd-cell-item arrow type="link" href="/shopIndex/vipGrad">
        <span slot="left">会员等级</span>
        <span slot="right"></span>
      </yd-cell-item>
      <yd-cell-item arrow type="link" href="/shopIndex/useInstruct">
        <span slot="left">使用说明</span>
        <span slot="right"></span>
      </yd-cell-item>
    </yd-cell-group>
  </yd-layout>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    computed:{
      vipCard(){
        return this.$store.state.vipCard
      }
    }
  }
</script>
<style>
  #homeVip{
    background:#fff;
    position: fixed;
    top:0;
    right:0;
    bottom: 0;
    left:0;
  }
  #homeVip .vipInfo{
    padding: 0.625rem;
  }
  #homeVip .vipInfo .card{
    width:100%;
    height:5.25rem;
    background: url(https://authorize.ylhhyk.com/Template/HongYi/new/images/membershipCard.png);
    background-size: 100% 100%;
    padding:0.3125rem 0.46875rem;
    position: relative;
  }
  #homeVip .vipInfo .card img:nth-child(1){
    width:4.5rem;
    height:1rem;
    float: left;
  }
  #homeVip .vipInfo .card img:nth-child(2){
     width:3rem;
     height:3rem;
    float: right;
    border-radius: 5px;
   }
  #homeVip .vipInfo .card p{
    position: absolute;
    bottom:0.3125rem;left:0.46875rem;
    color:#fff;
  }

  #homeVip .vipInfo .vipOtherInfo{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    margin:0.9375rem auto;
    font-size:0.375rem;
  }
  #homeVip .vipInfo .vipOtherInfo>div{
    flex: 0 0 33%;
    padding:0.3125rem 0;
  }
  #homeVip .vipInfo .vipOtherInfo>div:not(:last-child){
    border-right:2px solid #f1aa4e
  }
  #homeVip .vipInfo .vipOtherInfo>div span{
    display: block;
    color:#f1aa4e;
    font-size:0.4375rem;
    font-weight: bold;
  }
  #homeVip .vipInfo .use{
    padding:0.15625rem 0.46875rem;
    border:1px solid #f1aa4e;
    color:#f1aa4e;
    border-radius: 5px;
    font-size:0.4375rem;
  }
  #homeVip .foot .yd-cell:after {
    border-bottom: 0px solid #b2b2b2;
  }
  #homeVip .foot .yd-cell-item:after {
    margin-left: .24rem;
    content: "";
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid #d9d9d9;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    margin-left: 0rem;
  }
  #homeVip .foot .yd-cell-item:nth-child(1) {
    border-top: 1px solid #d9d9d9;
  }
</style>
