<template>
  <div id="shopList">
    <nav>
      <yd-accordion>
        <yd-accordion-item title="商家分类">
          <div>
            <p>得得得多</p>
          </div>
        </yd-accordion-item>
        <yd-accordion-item title="智能排序">
          <div>
            <p>分为冯绍峰</p>
          </div>
        </yd-accordion-item>
        <yd-accordion-item title="优惠活动">
          <div>
            <p>二维若的无</p>
          </div>
        </yd-accordion-item>
      </yd-accordion>
    </nav>
    <!--<section>-->
      <!--<div class="list">-->
        <!--<div class="top">-->
          <!--<img src="http://static.ydcss.com/uploads/ydui/1.jpg">-->
          <!--<div class="right">-->
            <!--<div class="line1">-->
              <!--<span>去的反复</span><span>付</span>-->
            <!--</div>-->
            <!--<div class="line2">已售3份</div>-->
            <!--<div class="line3">-->
              <!--起送 <span>￥5</span>配送 <span>￥6</span> 约<span>7分钟</span><img src="/static/img/position.png" alt="">3km-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="middle">-->
          <!--<yd-accordion>-->
            <!--&lt;!&ndash;<img src="/static/img/hot-sale.png" alt="" class="topimg">&ndash;&gt;-->
            <!--<yd-accordion-item title="店铺有优惠活动（点击可查看）">-->
              <!--<div style="padding: .24rem;">-->
                <!--<p><img src="/static/img/hot-sale.png" alt=""> 以后哈哈</p>-->
              <!--</div>-->
            <!--</yd-accordion-item>-->
          <!--</yd-accordion>-->
        <!--</div>-->
        <!--<div class="bottom"><img src="/static/img/hot-sale.png" alt="">热销：5555</div>-->

      <!--</div>-->
    <!--</section>-->
  </div>
</template>
<style>
  #shopList{
    font-size:0.4375rem;
    position: relative;
  }
  #shopList nav .yd-accordion .yd-accordion-head{
    width:33%;
    float:left;
    padding:0.1875rem 0.625rem;
    background: #fff;
  }
  #shopList nav .yd-accordion-content{
    background: #fff;
    z-index: 1000;
    width:100%;
    position: absolute;
    top:52px;
  }
  #shopList nav .yd-accordion-head-content .yd-accordion-title{
    font-size:0.43rem;
  }
  #shopList nav .yd-accordion .yd-accordion-content p{
    padding: 0.3125rem 0;
    padding-right:8px;
    height:50px;
  }
  #shopList nav .yd-accordion .yd-accordion-content p:not(:last-child){
    border-bottom: 1px solid #eee;
  }
</style>
