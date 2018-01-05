<template>
  <div id="payment">
    <router-link to="/distributIndex/tuiguang">
      <img src="/static/img/tuijianma.png" alt="">
      推荐码
    </router-link>
    <router-link to="/shopIndex/fukuan">
      <img src="/static/img/fukuan.png" alt="">
      我要付款
    </router-link>
    <router-link to="/shopIndex/shoukuan">
      <img src="/static/img/shoukuan.png" alt="">
      我要收款
    </router-link>
    <router-link to="/shopIndex/vip">
      <img src="/static/img/vip_card2.png" alt="">
      会员卡
    </router-link>
  </div>
</template>
<style scoped>
  #payment{
    background: #efbe10;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding:0.3125rem 0;
  }
  #payment img{
    display: block;
    width:1.25rem;
    height:1.25rem;
    margin:0 auto;
    margin-bottom:5px;
  }
  #payment>a{
    flex: 0 0 25%;
    text-align: center;
    color:#fff;
  }
</style>
