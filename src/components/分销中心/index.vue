<template>
  <yd-layout title="分销中心" link="#" id="distribut">
    <div class="head">
      <yd-flexbox class="line1">
        <div class="left"><img src="http://static.ydcss.com/uploads/ydui/1.jpg"></div>
        <yd-flexbox-item>
          <h6>晴撄</h6>
          <i><免费等级></i>
          <span>推荐人:E卡系统</span>
          <span>本人ID:639312</span>
        </yd-flexbox-item>
        <div class="right"><img src="/static/img/set.png"></div>
      </yd-flexbox>
      <yd-flexbox class="line2">
        <yd-flexbox-item>
          <span>成功提现佣金(元)</span>
          <h5>0.00</h5>
        </yd-flexbox-item>
        <yd-flexbox-item>
          <span>代理佣金(元)</span>
          <h5>0.00</h5>
        </yd-flexbox-item>
      </yd-flexbox>
      <yd-flexbox class="line3">
        <yd-flexbox-item>
          <span>可提现佣金(元)</span>
          <h5>0.00</h5>
        </yd-flexbox-item>
        <yd-flexbox-item>
          <span class="btn">佣金提现</span>
        </yd-flexbox-item>
      </yd-flexbox>
    </div>
    <yd-flexbox class="body">
      <yd-flexbox-item>
        <router-link to="/distributIndex/price">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
          <p>分销佣金</p>
          <i>0.00</i> 元
        </router-link>
      </yd-flexbox-item>
      <yd-flexbox-item>
        <router-link to="/distributIndex/yongDetail">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
          <p>佣金明细</p>
          <i>0</i> 笔
        </router-link>
      </yd-flexbox-item>
      <yd-flexbox-item>
        <router-link to="/distributIndex/tixianDetail">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
          <p>提现明细</p>
          <i>0</i> 笔
        </router-link>
      </yd-flexbox-item>
      <yd-flexbox-item>
        <router-link to="/distributIndex/xiaxian">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
          <p>我的下线</p>
          <i>0</i> 人
        </router-link>
      </yd-flexbox-item>
      <yd-flexbox-item>
        <router-link to="/distributIndex/daili">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
          <p>区域代理中心</p>
        </router-link>
      </yd-flexbox-item>
      <yd-flexbox-item>
        <router-link to="/distributIndex/tuiguang">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
          <p>推广二维码</p>
        </router-link>
      </yd-flexbox-item>
      <yd-flexbox-item>
        <router-link to="/distributIndex/xiaodian">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
          <p>小店设置</p>
        </router-link>
      </yd-flexbox-item>
      <yd-flexbox-item>
        <router-link to="/distributIndex/zixuan">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
          <p>自选商品</p>
        </router-link>
      </yd-flexbox-item>
    </yd-flexbox>
    <footers></footers>
  </yd-layout>
</template>
<style>
  #distribut .head{
    background: orange;
    color:#fff;
    padding: 0.3125rem;
    font-size:0.375rem;
  }
  #distribut .head .line1 .left img{
    width:1.5625rem;
    height:1.5625rem;
    border-radius: 50%;
    border:2px solid #fff;
  }
  #distribut .head .line1 .right img{
    width:0.625rem;
    height:0.625rem;
  }
  #distribut .head .line1 .yd-flexbox-item-center{
    text-align: left;
    padding-left:0.3125rem;
  }
  #distribut .head .line1 .yd-flexbox-item-center i{
    color:gold;
  }
  #distribut .head .line1 .yd-flexbox-item-center span{
    display: block;
    font-size:0.3125rem;
  }
  #distribut .head .line2{
    margin:0.625rem 0;
  }
  #distribut .head .line2 h5{
    font-size:0.5625rem;
  }
  #distribut .head .line3{
    font-size:0.375rem;
  }
  #distribut .head .line3 .btn{
    border: 1px solid #eee;
    padding:2px 5px;
    border-radius:0.3125rem;
  }
  #distribut .body{
    font-size:0.375rem;
    background: #fff;
  }
  #distribut .body img{
    width:0.9375rem;
    height:0.9375rem;
  }
  #distribut .body i{
    color:orange;
  }
  .yd-flexbox{
    flex-wrap: wrap !important;
  }
  #distribut .body .yd-flexbox-item{
    height:2.6875rem;
  }
  #distribut .body .yd-flexbox-item:not(:nth-child(3n)){
    flex:0 0 33%;
    padding:0.3125rem;
    border-right:1px solid #eee;
    border-bottom:1px solid #eee
  }
  #distribut .body .yd-flexbox-item:nth-child(3n){
    flex:0 0 33%;
    padding:0.3125rem;
    border-bottom: 1px solid #eee;
  }
</style>
