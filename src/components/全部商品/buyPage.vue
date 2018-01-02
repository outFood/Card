<template>
  <yd-layout title="确认下单" link="/sortIndex/detail" id="buyPage">
    <div class="address">
      <img src="/static/img/position.png" alt="">
      <div>
        <h6>收货人：吴巧红&nbsp;&nbsp;&nbsp;&nbsp;13867104693</h6>
        <p>哈哈哈哈哈哈哈哈哈方法反反复复反复</p>
      </div>
      <img src="/static/img/more.png" alt="">
    </div>
    <div class="noAddress"><span>请选择收货地址</span><img src="/static/img/more.png" alt=""></div>
    <div class="list">
      <div class="item">
        <div class="top">
          <p><img src="/static/img/shop_black.png" alt=""> E卡系统</p>
          <div class="shopInfo">
            <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
            <h6>超级好吃的川辣味辣条100g</h6>
            <div><h6>￥11.9</h6><yd-spinner v-model="buyNumber"></yd-spinner></div>
          </div>
        </div>
        <div class="bottom">共 <span>1</span> 件商品，实付：<span>34.9元</span></div>
      </div>
    </div>
    <yd-cell-group title="买家留言" class="leaveWord">
      <yd-cell-item>
        <yd-textarea slot="right" placeholder="50字以内（选填）" maxlength="50"></yd-textarea>
      </yd-cell-item>
    </yd-cell-group>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">商品小计</span>
        <span slot="right">￥1.00</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">运费</span>
        <span slot="right">￥23.00</span>
      </yd-cell-item>
    </yd-cell-group>
    <div class="toPay">
      <div class="left">需付：<span>￥24</span></div>
      <div class="right">立即支付</div>
    </div>
  </yd-layout>
</template>
<style>
  #buyPage header{
    height:1.3rem !important;
    align-items: center;
  }
  #buyPage .address{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:10px;
    background:#fff;
    text-align: left;
    margin-bottom:10px;
  }
  #buyPage .address p{
    color:#5c5c5c;
  }
  #buyPage .address img{
    width:15px;
    height:15px;
  }
  #buyPage .noAddress{
    background: #fff;
    padding:10px;
  }
  #buyPage .noAddress{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #buyPage .noAddress img{
    width:15px;
    height:15px;
  }
  #buyPage .item{
    background: #fff;
    margin-top:10px;
    font-size:12px;
    padding:10px;
  }
  #buyPage .item .top>p{
    text-align: left;
    margin-bottom:10px;
  }
  #buyPage .item .top>p img{
    width:20px;
    height:20px;
    vertical-align: middle;
  }
  #buyPage .item .top .shopInfo img{
    width:100px;
    height:80px;
  }
  #buyPage .item .top .shopInfo span{
    display: block;
    font-size:12px;
    color:#aaa;
    margin-top:10px;
    text-align: right;
  }
  #buyPage .item .bottom{
    text-align: right;
    font-size: 12px;
  }
  #buyPage .item .bottom span{
    color:#e4393c;
  }
  #buyPage .leaveWord{
    margin-top:10px;
  }
  #buyPage .toPay{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    background:#fff;
    position: fixed;
    bottom: 0;
    left:0;
    height:50px;
    line-height: 50px;
  }
  #buyPage .toPay .left{
    flex:0 0 60%;
    height:100%;
    text-align: right;
    padding-right: 10px;
  }
  #buyPage .toPay .left span{
    color:#e4393c
  }
  #buyPage .toPay .right{
    flex:0 0 40%;
    background: #e4393c;
    color:#fff;
    height:100%;
  }
</style>
<script>
  export default {
    data(){
      return {
        buyNumber:'1'
      }
    }
  }
</script>
