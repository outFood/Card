<template>
  <div id="order">
    <yd-tab>
      <yd-tab-panel label="全部">
        <div class="list">
          <div class="item">
            <div class="top">
              <span>订单号：HGGGLLGHM09I934NJJNHF</span>
              <div>待发货 <img src="/static/img/more.png" alt=""></div>
            </div>
            <div class="middle">
              <p><img src="/static/img/shop_black.png" alt=""> E卡系统</p>
              <div class="shopInfo">
                <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
                <h6>超级好吃的川辣味辣条100g</h6>
                <div><h6>￥11.9</h6><span>X1</span></div>
              </div>
            </div>
            <div class="bottom">共1件商品，实付：<span>34.9元</span></div>
          </div>
        </div>
        <no-order></no-order>
      </yd-tab-panel>
      <yd-tab-panel label="待付款">

        <no-order></no-order>
      </yd-tab-panel>
      <yd-tab-panel label="待发货">

        <no-order></no-order>
      </yd-tab-panel>
      <yd-tab-panel label="待收货">

        <no-order></no-order>
      </yd-tab-panel>
      <yd-tab-panel label="退换货">

        <no-order></no-order>
      </yd-tab-panel>
    </yd-tab>
  </div>
</template>
<style>
  #order .yd-tab-panel{
    background: transparent;
  }
  #order .item{
    background: #fff;
    margin-top:10px;
    font-size:12px;
    padding:10px;
   }
  #order .item .top,.shopInfo{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
  }
  #order .item .top img{
    width:15px;
    height:15px;
    vertical-align: middle;
  }
  #order .item .top div{
    color:orange;
  }
  #order .item .middle{
    border-top:1px solid #eee;
    border-bottom:1px solid #eee;
    padding:10px 0;
    margin:10px 0;
  }
  #order .item .middle>p{
    text-align: left;
    margin-bottom:10px;
  }
  #order .item .middle>p img{
    width:20px;
    height:20px;
    vertical-align: middle;
  }
  #order .item .middle .shopInfo img{
    width:100px;
    height:80px;
  }
  #order .item .middle .shopInfo span{
    display: block;
    font-size:12px;
    color:#aaa;
    margin-top:10px;
    text-align: right;
  }
  #order .item .bottom{
    text-align: right;
    font-size: 12px;
  }
  #order .item .bottom span{
    color:red;
  }
</style>
<script>
  import noOrder from '@/components/会员中心/noOrder'
  export default {
    data(){
      return{

      }
    },
    components:{noOrder}
  }
</script>
