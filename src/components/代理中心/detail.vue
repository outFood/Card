<template>
  <yd-layout title="分红明细" link="/agentIndex" id="detail">
    <p class="leiji"><span>累计分红</span><span>+0.00元</span></p>
    <yd-tab>
      <yd-tab-panel label="全部">
        <div class="item">
          <div class="left">
            <p>FSEGFDHTGFTHJY(一级)</p>
            <span>2017-12-25 10:45</span>
          </div>
          <div class="right">
            <span>+0.00已完成</span> <img src="/static/img/more.png" alt="">
          </div>
        </div>

        <div class="noData">
          <img src="/static/img/Commission_sky.png" alt="">暂时没有任何数据
        </div>
      </yd-tab-panel>
      <yd-tab-panel label="待结算">
        我需要三件东西：爱情友谊和图书。然而这三者之间何其相通！炽热的爱情可以充实图书的内容，图书又是人们最忠实的朋友。
        <div class="noData">
          <img src="/static/img/Commission_sky.png" alt="">暂时没有任何数据
        </div>
      </yd-tab-panel>
      <yd-tab-panel label="已结算">
        时间是一切财富中最宝贵的财富。
        <div class="noData">
          <img src="/static/img/Commission_sky.png" alt="">暂时没有任何数据
        </div>
      </yd-tab-panel>
    </yd-tab>
    <footers></footers>
  </yd-layout>
</template>
<style>
  #detail{

  }
  #detail .leiji{
    padding:15px;
    background: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
  }
  #detail .yd-tab-nav .yd-tab-active:before {
    width: 100%;
    margin-left: -50%;
  }
  #detail .yd-tab-nav-item:not(:last-child):after {
    display: none;
  }
  #detail .yd-tab-nav a{
    font-size:0.4375rem;
  }
  #detail .yd-tab-panel{
    background: transparent;
  }
  #detail .item{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    padding:0.46875rem;
    border-bottom:1px solid #eee;
    line-height:0.625rem;
    background: #fff;
  }
  #detail .item:last-child{
    border-bottom:none;
  }
  #detail .item .left{
    text-align: left;
  }
  #detail .item .left span{
    color:#aaa;
  }
  #detail .item .right{

  }
  #detail .item .right span{
    display: inline-block;
    width:1.5625rem;
  }
  #detail .item .right img{
    width:0.625rem;
    height:0.625rem;
  }
  #detail .noData{
    color:#bfbfbf
  }
  #detail .noData img{
    display: block;
    width:50px;
    height:50px;
    margin:0 auto;
    margin-top:100px;
    margin-bottom:10px;

   }

</style>
