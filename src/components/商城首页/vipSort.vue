<template>
  <div id="vipSort">
    <div>
      <img src="http://img1.3lian.com/2015/a1/95/d/105.jpg" alt="">
      <div>
        <p>普通会员</p>
        <span>￥18</span>
      </div>
    </div>
    <div>
      <img src="http://img1.3lian.com/2015/a1/95/d/105.jpg" alt="">
      <div>
        <p>普通会员</p>
        <span>￥18</span>
      </div>
    </div>
    <div>
      <img src="http://img1.3lian.com/2015/a1/95/d/105.jpg" alt="">
      <div>
        <p>普通会员</p>
        <span>￥18</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
  #vipSort{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding:10px
  }
  #vipSort .yd-slider{
    padding-bottom:20px;
  }
  #vipSort>div{
    -webkit-box-flex: 0;
    -ms-flex: 0 0 31.5%;
    flex:0 0 31.5%;
    background: #fff;
  }
  #vipSort>div:nth-child(2){
    margin:0 2.5%;
  }
  #vipSort>div img{
    width:100%;
  }
  #vipSort>div div{
    padding-left:10px;
    text-align: left;
  }
  #vipSort>div p{
    margin-bottom: 10px;
  }
  #vipSort>div span{
    color:#ff5552
  }
</style>
