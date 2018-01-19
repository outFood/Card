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
    <section>
      <div class="listItem">
        <div class="top">
          <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
          <div class="center">
            <h6>橘子姐</h6>
            <p>地址:浙江省杭州市滨江区长河街道江南豪园</p>
            <p>电话:13867104693</p>
          </div>
          <div class="right">
            <span>进店</span>
            1389394m
          </div>
        </div>
        <div class="bottom">
          <div>打开地图</div>
          <div>联系商家</div>
        </div>
      </div>
    </section>
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
  #shopList section{
    position: absolute;
    top:52px;
    bottom:0;
    left:0;
    right:0;
  }
  #shopList section .listItem{
    background: #fff;
    margin-top:10px;
  }
  #shopList section .listItem .top{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding:10px;
    align-items: center;
  }
  #shopList section .listItem .top img{
    width:90px;
    height:60px;
  }
  #shopList section .listItem .top .center{
    text-align: left;
    flex: 0 0 60%;
    padding-left:5px;
  }
  #shopList section .listItem .top .center p{
    font-size:12px;
  }
  #shopList section .listItem .top .right{
    flex: 0 0 10%;
    color:red;
    font-size:12px;
  }
  #shopList section .listItem .top .right span{
    display: block;
    padding:2px 6px;
    border:1px solid red;
    border-radius: 3px;
    margin-bottom:10px
  }
  #shopList section .listItem .bottom{
    border-top:1px solid #000;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  #shopList section .listItem .bottom>div{
    flex:0 0 50%;
    text-align: center;
    padding:10px 0;
  }
  #shopList section .listItem .bottom>div:nth-child(1){
    border-right:1px solid #000;
  }
</style>
