<template>
  <div id="sliderNav">
    <yd-slider autoplay="3000">
      <yd-slider-item>
        <div>
          <router-link to="#">
            <img src="/static/img/cart.png" alt="">
          </router-link>
            入驻E陶
        </div>
        <div>
          <router-link to="#">
            <img src="/static/img/cart.png" alt="">
          </router-link>
          入驻E陶
        </div>
        <div>
          <router-link to="#">
            <img src="/static/img/cart.png" alt="">
          </router-link>
          入驻E陶
        </div>
        <div>
          <router-link to="#">
            <img src="/static/img/cart.png" alt="">
          </router-link>
          入驻E陶
        </div>
        <div>
          <router-link to="#">
            <img src="/static/img/cart.png" alt="">
          </router-link>
          入驻E陶
        </div>
        <div>
          <router-link to="#">
            <img src="/static/img/cart.png" alt="">
          </router-link>
          入驻E陶
        </div>
        <div>
          <router-link to="#">
            <img src="/static/img/cart.png" alt="">
          </router-link>
          入驻E陶
        </div>
        <div>
          <router-link to="#">
            <img src="/static/img/cart.png" alt="">
          </router-link>
          入驻E陶
        </div>
        <div>
          <router-link to="#">
            <img src="/static/img/cart.png" alt="">
          </router-link>
          入驻E陶
        </div>
        <div>
          <router-link to="#">
            <img src="/static/img/cart.png" alt="">
          </router-link>
          入驻E陶
        </div>
      </yd-slider-item>
      <yd-slider-item>
        2
      </yd-slider-item>
    </yd-slider>
  </div>
</template>
<style>
  #sliderNav{
    background: #fff;
    margin:10px 0;
  }
  #sliderNav .yd-slider-item{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  #sliderNav .yd-slider-item>div{
    -webkit-box-flex: 0;
    -ms-flex: 0 0 20%;
    flex:0 0 20%;
    margin-top:20px;
  }
  #sliderNav .yd-slider-item>div a{
    width:40px;
    height:40px;
    border-radius: 50%;
    background: #ff7942;
    margin:0 auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
  }
  #sliderNav img{
    width:25px;
    height:25px;
    margin: 0 auto;
  }
</style>
