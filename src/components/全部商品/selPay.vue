<template>
  <div id="selPay">
    <yd-navbar title="收银台">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
      <router-link to="#" slot="right">
        订单
      </router-link>
    </yd-navbar>
    <div class="order">
      <p class="number">
        <span>订单编号</span>
        <span>FHJ4328907584J789</span>
      </p>
      <p class="price">
        <span>订单金额</span>
        <span>￥999.00</span>
      </p>
    </div>
  </div>
</template>
<style>
  #selPay{

  }
  #selPay .order{
    padding:0 10px;
    background: #fff;
  }
  #selPay .order p{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    padding:10px 0;
  }
  #selPay .order .number{
    border-bottom: 1px solid #f9f9f9;
  }
  #selPay .order .price span:nth-child(2){
    color:red
  }
</style>
