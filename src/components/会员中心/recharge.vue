<template>
  <yd-layout title="账户充值" link="/vipIndex" id="recharge">
    <form action="#">
      <div class="item">
        <span>当前余额</span>
        <div><input v-model="curBalance" readonly></div>
      </div>
      <div class="item">
        <span>充值金额</span>
        <div><input placeholder="请填写充值金额"></div>
      </div>
    </form>
    <!--<yd-button size="large" type="primary" @click.native="saveAddress">下一步</yd-button>-->
    <yd-button size="large" type="primary" @click.native="">微信支付</yd-button>
    <yd-button size="large" type="warning" @click.native="">支付宝支付</yd-button>
  </yd-layout>
</template>
<script>
  export default {
    data(){
      return {
        curBalance:'￥'+0.0
      }
    }
  }
</script>
<style>
  #recharge header {
    height: 1.5rem !important;
    align-items: center;
  }
  #recharge header .yd-navbar-center-title{
    font-size:.5rem !important;
  }
  #recharge .yd-back-icon:before, .yd-next-icon:before {
    font-size: .6rem;
  }
  #recharge form{
    text-align: left;
    padding: 0.3125rem 0.3125rem 0 0.3125rem;
    background: #fff;
  }
  #recharge form i{
    color:red;
  }
  #recharge form .item{
    padding: 0.3125rem 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
  }
  #recharge form .item:not(:last-child){
    border-bottom: 1px solid #eee;
  }
  #recharge form .item span{
    flex:0 0 25% ;
  }
  #recharge form .item>div{
    flex:0 0 70%;
  }
  #recharge form .item input{
    border: none;
    padding-left: 5px;
    width:95%;
    font-size:.6rem
  }
  *::-webkit-input-placeholder {
    color: #b0b0b0;
    font-size:12px;
  }
  .yd-btn-block {
    width:90%;
    margin:0 auto;
    margin-top:20px;
    border-radius:5 !important;
    height: 50px !important;
    font-size: 16px !important;
  }
</style>

