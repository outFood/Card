<template>
  <yd-layout title="分销佣金" link="/distributIndex" id="price">
    <yd-flexbox class="head">
      <yd-flexbox-item>
        <p>累计佣金(元)</p>
        0.00
      </yd-flexbox-item>
      <yd-flexbox-item>
        <span>提现明细</span>
      </yd-flexbox-item>
    </yd-flexbox>
    <div class="body">
      <div class="listItem">
        <div class="left"><img src="http://static.ydcss.com/uploads/ydui/1.jpg">可提现佣金</div>
        <div class="right">0.00元</div>
      </div>
      <div class="listItem">
        <div class="left"><img src="http://static.ydcss.com/uploads/ydui/1.jpg">可提现佣金</div>
        <div class="right">0.00元</div>
      </div>
      <div class="listItem">
        <div class="left"><img src="http://static.ydcss.com/uploads/ydui/1.jpg">可提现佣金</div>
        <div class="right">0.00元</div>
      </div>
    </div>
    <yd-accordion>
      <yd-accordion-item title="用户须知">
        <div style="padding: .24rem;">
          <p>卖家确认收货后，立即获得分销佣金,注意：可用佣金满 <i>100元</i>后才能申请提现</p>
        </div>
      </yd-accordion-item>
    </yd-accordion>
    <yd-button size="large" type="primary" class="woyao">我要提现</yd-button>
  </yd-layout>
</template>
<style>
  #price{
    font-size: 12px;
  }
  #price .head{
    background:#e4393c;
    color:#fff;
    padding: 10px;
  }
  #price .head>div:nth-child(1){
    text-align: left;
  }
  #price .head>div:nth-child(2){
    text-align: right;
  }
  #price .head>div:nth-child(2) span{
    padding: 2px 5px;
    border: 1px solid #fff;
    border-radius: 10px;
  }
  #price .body{
    padding: 0 10px;
    background: #fff;
  }
  #price .body .listItem{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 10px 0;
  }
  #price .body .listItem:not(:last-child){
    border-bottom:1px solid #eee
  }
  #price .body .left{

  }
  #price .body .left img{
    width:20px;
    height:20px;
    vertical-align: middle;
    margin-right:10px;
  }
  #price .yd-accordion{
    margin:10px 0;
    text-align: left;
  }
  #price .yd-accordion i{
    color:red;
  }
  #price .woyao{
    width:90%;
    margin:0 auto;
  }
</style>
