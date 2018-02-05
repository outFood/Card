<template>
  <div id="orderDetail">
    <yd-navbar title="订单详情">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon @click.native="back"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div class="alreadyPay">
      <p>买家已付款</p>
      <span>订单金额:￥78.00</span>
    </div>
    <div class="address">
      <img src="/static/img/position-o.png" alt="">
      <div class="right">
        <p>吴巧红 183789994</p>
        <span>回家考虑</span>
      </div>
    </div>
    <div class="item">
        <div class="middle">
          <p><img src="/static/img/shop_black.png" alt="">旗舰店</p>
          <div class="shopInfo">
            <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
            <div class="mid"><h6>毛衣</h6><span>S</span></div>
            <div><h6>￥789.00</h6><span>X2</span></div>
          </div>
        </div>
      </div>
    <div class="orderInfo1">
      <p><span>商品小计</span>￥57.00</p>
      <p><span>运费</span>8.00</p>
      <p><span>实付费(含运费)</span><i>65.00</i></p>
    </div>
    <div class="orderInfo2">
      <p>订单编号    HJK678904345678</p>
      <p>创建时间    3456</p>
    </div>
    <div class="foot">
      <span>申请退款</span>
      <span>删除订单</span>
    </div>
  </div>
</template>
<style>
  #orderDetail .alreadyPay{
    background: orange;
    color:#fff;
    padding:20px;
  }
  #orderDetail .alreadyPay span{
    font-size:12px;
  }
  #orderDetail .address{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:10px 0;
    background: #fff;
    padding:15px;
  }
  #orderDetail .address img{
    width:20px;height:20px;
  }
  #orderDetail .address .right{
    flex: 0 0 90%;
    text-align: left;
    margin-left:10px;
  }
  #orderDetail .address .right span{
    color:#8A8A8A;
    font-size:12px;
  }
  #orderDetail .item{
    background: #fff;
    margin-top:10px;
    padding:10px;
  }
  #orderDetail .item .shopInfo{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
  }
  #orderDetail .item .middle{
    margin-bottom: 10px;
  }
  #orderDetail .item .middle>p{
    text-align: left;
    margin-bottom:10px;
  }
  #orderDetail .item .middle>p img{
    width:20px;
    height:20px;
    vertical-align: middle;
  }
  #orderDetail .item .middle .shopInfo{
    margin:10px 0;
    background: #f8f8f8;
  }
  #orderDetail .item .middle .shopInfo img{
    width:70px;
    height:60px;
  }
  #orderDetail .item .middle .shopInfo span{
    display: block;
    font-size:12px;
    color:#aaa;
    margin-top:10px;
    text-align: right;
  }
  #orderDetail .item .middle .shopInfo .mid span{
    text-align: center !important;
  }
  #orderDetail .orderInfo1{
    padding:10px;
    background: #fff;
    margin:10px 0;
  }
  #orderDetail .orderInfo1 p{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #orderDetail .orderInfo1 p span{
    color:#646464
  }
  #orderDetail .orderInfo1 p i{
    color:red;
  }
  #orderDetail .orderInfo2{
    font-size: 12px;
    color:#989898;
    background: #fff;
    text-align: left;
    padding: 10px;
    line-height: 20px;
  }
  #orderDetail .foot{
    background: #fff;
    padding:15px;
    position: fixed;
    bottom:0;left:0;right:0;
    text-align: right;
  }
  #orderDetail .foot span{
    border:1px solid #5f5f5f;
    padding:3px 5px;border-radius: 10px;
  }
</style>
<script>
  export default {
    methods:{
      back:function () {
        this.$router.go(-1)
      }
    }
  }
</script>
