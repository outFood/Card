<template>
  <div id="myLike">
    <div class="item">
      <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
      <div class="right">
        <h6>陈世力是个可爱的小猪猪就古古怪怪古古怪怪的反馈</h6>
        <span>￥1244</span><i>￥563</i>
      </div>
    </div>
    <div class="item">
      <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
      <div class="right">
        <h6>陈世力是个可爱的小猪猪就古古怪怪古古怪怪的反馈</h6>
        <span>￥1244</span><i>￥563</i>
      </div>
    </div>
  </div>
</template>
<style>
  #myLike{

  }
  #myLike .item{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    background: #fff;
    padding:10px;
    margin-bottom:10px;
    text-align: left;
  }
  #myLike .item>img{
    width:50px;
    height:50px;
    margin-right:10px;
  }
  #myLike .item .right h6{
    font-weight: bold;
  }
  #myLike .item .right span{
    color:red;
  }
  #myLike .item .right i{
    color:#999;
    text-decoration:line-through
  }
</style>
