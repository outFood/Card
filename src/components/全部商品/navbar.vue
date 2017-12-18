<template>
  <div id="navbar">
    <div class="navbar1" v-if="false">
      <div class="icon"><img src="/static/img/pingjia.png" alt="">关注</div>
      <div class="icon"><img src="/static/img/pingjia.png" alt="">关注</div>
      <div class="icon"><img src="/static/img/pingjia.png" alt=""><span>2</span>关注</div>
      <div class="addCart">加入购物车</div>
      <div class="pay">购买</div>
    </div>
    <div class="navbar2" v-if="false">
      <div class="icon"><img src="/static/img/pingjia.png" alt=""><span>2</span>关注</div>
      <div class="icon"><img src="/static/img/pingjia.png" alt=""><span>2</span>关注</div>
      <div class="icon"><img src="/static/img/pingjia.png" alt=""><span>2</span>关注</div>
      <div class="pay">购买</div>
    </div>
    <div class="navbar3">
      <div class="pay">购买</div>
    </div>
  </div>
</template>
<style>
  #navbar {
    width: 100%;
    height:50px;
    line-height: 50px;
    background: #fff;
    position: fixed;
    bottom: 0;
  }
  /*navbar1*/
 #navbar .navbar1{
      display: flex;
      height:100%;
    }
  #navbar .navbar1 .icon{
    flex: 0 0 15%;
    line-height:25px;
    padding-top:5px;
    font-size:12px;
    position: relative;
  }
  #navbar .navbar1 .icon img{
    display: block;
    width:20px;
    height:20px;
    margin: 0 auto;
  }
  #navbar .navbar1 .icon span{
    display: block;
    background: red;
    color:#fff;
    width:15px;
    height:15px;
    line-height: 15px;
    border-radius: 50%;
    position:absolute;
    top:0;
    right:5px
  }
  #navbar .navbar1 .addCart{
    flex:0 0 30%;
    background: green;
  }
  #navbar .navbar1 .pay{
    flex:0 0 25%;
    background: red;
  }
  /**/
  #navbar .navbar2{
    display: flex;
    height:100%;
  }
  #navbar .navbar2 .icon{
    flex: 0 0 25%;
    line-height:25px;
    padding-top:5px;
    font-size:12px;
    position: relative;
  }
  #navbar .navbar2 .icon img{
    display: block;
    width:20px;
    height:20px;
    margin: 0 auto;
  }
  #navbar .navbar2 .icon span{
    display: block;
    background: red;
    color:#fff;
    width:15px;
    height:15px;
    line-height: 15px;
    border-radius: 50%;
    position:absolute;
    top:0;
    right:20px
  }
  #navbar .navbar2 .addCart{
    flex:0 0 30%;
    background: green;
  }
  #navbar .navbar2 .pay{
    flex:0 0 25%;
    background: red;
  }
  /**/
  #navbar .navbar3{
    display: flex;
    height:100%;
  }
  #navbar .navbar3 .pay{
    flex:0 0 25%;
    background: red;
  }
  /**/
</style>

