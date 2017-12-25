<template>
  <yd-layout title="佣金明细" link="/distributIndex" id="yongDetail">
    <p class="leiji"><span>累计佣金</span><span>+0.00元</span></p>
    <yd-tab>
      <yd-tab-panel label="所有">
        <div class="item">
          <div class="left">
            <p>FSEGFDHTGFTHJY(一级)</p>
            <span>2017-12-25 10:45</span>
          </div>
          <div class="right">
            <span>+0.00已完成</span> <img src="/static/img/more.png" alt="">
          </div>
        </div>
        <div class="item">
          <div class="left">
            <p>FSEGFDHTGFTHJY(一级)</p>
            <span>2017-12-25 10:45</span>
          </div>
          <div class="right">
            <span>+0.00已完成</span> <img src="/static/img/more.png" alt="">
          </div>
        </div>
        <div class="item">
          <div class="left">
            <p>FSEGFDHTGFTHJY(一级)</p>
            <span>2017-12-25 10:45</span>
          </div>
          <div class="right">
            <span>+0.00已完成</span> <img src="/static/img/more.png" alt="">
          </div>
        </div>
      </yd-tab-panel>
      <yd-tab-panel label="待付款">我需要三件东西：爱情友谊和图书。然而这三者之间何其相通！炽热的爱情可以充实图书的内容，图书又是人们最忠实的朋友。</yd-tab-panel>
      <yd-tab-panel label="已付款">时间是一切财富中最宝贵的财富。</yd-tab-panel>
      <yd-tab-panel label="已完成">
        <div class="item">
        <div class="left">
          <p>FSEGFDHTGFTHJY(一级)</p>
          <span>2017-12-25 10:45</span>
        </div>
        <div class="right">
          <span>+0.00已完成</span> <img src="/static/img/more.png" alt="">
        </div>
      </div>
        <div class="item">
          <div class="left">
            <p>FSEGFDHTGFTHJY(一级)</p>
            <span>2017-12-25 10:45</span>
          </div>
          <div class="right">
            <span>+0.00已完成</span> <img src="/static/img/more.png" alt="">
          </div>
        </div>
        <div class="item">
          <div class="left">
            <p>FSEGFDHTGFTHJY(一级)</p>
            <span>2017-12-25 10:45</span>
          </div>
          <div class="right">
            <span>+0.00已完成</span> <img src="/static/img/more.png" alt="">
          </div>
        </div>
      </yd-tab-panel>
    </yd-tab>
    <footers></footers>
  </yd-layout>
</template>
<style>
  #yongDetail{

  }
  #yongDetail .leiji{
    padding:15px;
    background: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
  }
  #yongDetail .yd-tab-nav .yd-tab-active:before {
    width: 100%;
    margin-left: -50%;
  }
  #yongDetail .yd-tab-nav-item:not(:last-child):after {
    display: none;
  }
  #yongDetail .yd-tab-nav a{
    font-size:0.4375rem;
  }
  #yongDetail .yd-tab-panel{
    padding-left:0.3125rem;
  }
  #yongDetail .item{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    padding:0.46875rem 0.46875rem 0.46875rem 0;
    border-bottom:1px solid #eee;
    line-height:0.625rem;
  }
  #yongDetail .item:last-child{
    border-bottom:none;
  }
  #yongDetail .item .left{
    text-align: left;
  }
  #yongDetail .item .left span{
    color:#aaa;
  }
  #yongDetail .item .right{

  }
  #yongDetail .item .right span{
    display: inline-block;
    width:1.5625rem;
  }
  #yongDetail .item .right img{
    width:0.625rem;
    height:0.625rem;
  }
</style>
