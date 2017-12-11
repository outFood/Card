<template>
  <div id="exclusiveShop">
    <yd-slider autoplay="3000">
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
        </a>
      </yd-slider-item>
    </yd-slider>
    <div class="search"><yd-search></yd-search>搜索</div>
    <div class="picSort">
      <router-link to="#">
        <div><img src="/static/img/hot-sale.png" alt=""></div>
        新品
      </router-link>
      <router-link to="#">
        <div><img src="/static/img/hot-sale.png" alt=""></div>
        新品
      </router-link>
      <router-link to="#">
        <div><img src="/static/img/hot-sale.png" alt=""></div>
        新品
      </router-link>
      <router-link to="#">
        <div><img src="/static/img/hot-sale.png" alt=""></div>
        新品
      </router-link>
    </div>
    <div class="textSort">
      <yd-slider>
        <yd-slider-item>
          <a href="http://www.ydcss.com">
            爆款品牌
          </a>
        </yd-slider-item>
        <yd-slider-item>
          <a href="http://www.ydcss.com">
            国际大促
          </a>
        </yd-slider-item>
        <yd-slider-item>
          <a href="http://www.ydcss.com">
            萝莉爆款
          </a>
        </yd-slider-item>
      </yd-slider>
    </div>
    <div class="discountItem">
      <div><img src="http://static.ydcss.com/uploads/ydui/1.jpg">活动价 ￥25</div>
      <div><img src="http://static.ydcss.com/uploads/ydui/1.jpg">活动价 ￥25</div>
      <div><img src="http://static.ydcss.com/uploads/ydui/1.jpg">活动价 ￥25</div>
    </div>
    <h2>大牌推荐</h2>
    <div class="tuijian">
      <div>
        <img src="http://img1.3lian.com/2015/a1/95/d/105.jpg" alt="">
        <div>
          <p>普通会员</p>
          <span>￥18</span><span class="goPay">购买</span>
        </div>
      </div>
      <div>
        <img src="http://img1.3lian.com/2015/a1/95/d/105.jpg" alt="">
        <div>
          <p>普通会员</p>
          <span>￥18</span><span class="goPay">购买</span>
        </div>
      </div>
      <div>
        <img src="http://img1.3lian.com/2015/a1/95/d/105.jpg" alt="">
        <div>
          <p>普通会员</p>
          <span>￥18</span><span class="goPay">购买</span>
        </div>
      </div>
      <div>
        <img src="http://img1.3lian.com/2015/a1/95/d/105.jpg" alt="">
        <div>
          <p>普通会员</p>
          <span>￥18</span><span class="goPay">购买</span>
        </div>
      </div>
    </div>
    <div class="Shopowner">
      <span>店长推荐</span>
      <img src="/static/img/more.png" alt="">
    </div>
  </div>
</template>
<style>
  #exclusiveShop .search{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
  }
  #exclusiveShop .search>div{
    flex: 0 0 85%;
  }
  #exclusiveShop .picSort{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background:#fff;
    padding: 10px 0;
  }
  #exclusiveShop .picSort a{
    flex: 0 0 25%;
    color:#606060
  }
  #exclusiveShop .picSort a div{
    width:50px;
    height:50px;
    border-radius: 50%;
    margin:0 auto;
    background: lightseagreen;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    margin-bottom:5px;
  }
  #exclusiveShop .picSort a img{
    width:40px;
    height:40px;
    margin:0 auto;
  }
  #exclusiveShop .textSort{
    background: #fff;
    margin:10px auto;
    padding: 10px;
  }
  #exclusiveShop .textSort .yd-slider-item{
    width:33%;
  }
  #exclusiveShop .textSort .yd-slider-pagination{
    display: none;
  }
  #exclusiveShop .discountItem{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background: #fff;
    padding: 10px;
    margin-bottom: 10px;
  }
  #exclusiveShop .discountItem>div{
    -webkit-box-flex: 0;
    -ms-flex: 0 0 30%;
    flex:0 0 31.5%;
    text-align: left;
    color:#ff9a9c
  }
  #exclusiveShop .discountItem>div:nth-child(2){
    margin:0 2.5%;
  }
  #exclusiveShop .discountItem>div img{
    width:100%;
    margin-bottom: 10px;
  }
  #exclusiveShop h2{
    font-size:18px;
    padding:10px 0;
    background: #fff;
  }
  /**/
  #exclusiveShop .tuijian{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    padding:10px
  }
  #exclusiveShop .tuijian>div{
    -webkit-box-flex: 0;
    -ms-flex: 0 0 39%;
    flex:0 0 48%;
    background: #fff;
    margin-bottom: 10px;
    padding: 10px;
  }
  #exclusiveShop .tuijian>div img{
    width:100%;
  }
  #exclusiveShop .tuijian>div div{
    padding-left:10px;
    text-align: left;
  }
  #exclusiveShop .tuijian>div:nth-child(2n){
    margin-left:4%;
  }
  #exclusiveShop .tuijian p{
    margin-bottom: 10px;
  }
  #exclusiveShop .tuijian span{
    color:#ff5552
  }
  #exclusiveShop .tuijian .goPay{
    display:inline-block;
    padding:0 6px;
    border:1px solid #ff5552;
    float: right;
    border-radius: 3px;
  }
  #exclusiveShop .Shopowner{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding:10px;
    font-size: 16px;
    font-weight: bold;
    color:#8c4931;
    border-left: 5px solid #8c4931;
  }
  #exclusiveShop .Shopowner img{
    width:20px;
    height:20px;
  }
</style>
