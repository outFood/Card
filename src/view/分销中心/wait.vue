<template>
  <div id="apply">
    <yd-slider autoplay="3000">
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
        </a>
      </yd-slider-item>
    </yd-slider>
    <img :src="require('@/assets/clock_sky.png')" alt="" class="clock">
    <h5>谢谢您的支持,请等待审核！</h5>
    <router-link to="/shopIndex" class="toShop">去商城逛逛</router-link>
  </div>
</template>
<style>
  #apply{

  }
  #apply .clock{
    width:0.625rem;
    height:0.625rem;
    margin:0.46875rem 0;
  }
  #apply h5{
    font-size:0.625rem;
    color:#04ab02;
    font-weight: normal;
  }
  #apply .toShop{
    display: block;
    width:30%;
    margin:0 auto;
    background: #ef4f4f;
    color:#fff;
    padding:6px;
    border-radius: 3px;
    margin-top:0.3125rem;
  }
</style>
