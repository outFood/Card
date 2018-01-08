<template>
  <yd-layout title="提现明細(0)" link="/distributIndex" id="tixianDetail">
    <p class="leiji"><span>预计佣金</span><span>+0.00元</span></p>
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
      <yd-tab-panel label="待审核">我需要三件东西：爱情友谊和图书。然而这三者之间何其相通！炽热的爱情可以充实图书的内容，图书又是人们最忠实的朋友。</yd-tab-panel>
      <yd-tab-panel label="待打款">时间是一切财富中最宝贵的财富。</yd-tab-panel>
      <yd-tab-panel label="已打款">
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
      <yd-tab-panel label="无效">
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
<script>
  export default {
    data(){
      return{

      }
    },
    beforeCreate(){
      this.$store.dispatch({
        type:'resTiXian'
      })
    }
  }
</script>
<style>
  #tixianDetail{

  }
  #tixianDetail .leiji{
    padding:15px;
    background: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
  }
  #tixianDetail .yd-tab-nav .yd-tab-active:before {
    width: 100%;
    margin-left: -50%;
  }
  #tixianDetail .yd-tab-nav-item:not(:last-child):after {
    display: none;
  }
  #tixianDetail .yd-tab-nav a{
    font-size:0.4375rem;
  }
  #tixianDetail .yd-tab-panel{
    padding-left:0.3125rem;
  }
  #tixianDetail .item{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    padding:0.46875rem 0.46875rem 0.46875rem 0;
    border-bottom:1px solid #eee;
    line-height:0.625rem;
  }
  #tixianDetail .item:last-child{
    border-bottom:none;
  }
  #tixianDetail .item .left{
    text-align: left;
  }
  #tixianDetail .item .left span{
    color:#aaa;
  }
  #tixianDetail .item .right{

  }
  #tixianDetail .item .right span{
    display: inline-block;
    width:1.5625rem;
  }
  #tixianDetail .item .right img{
    width:0.625rem;
    height:0.625rem;
  }
</style>
