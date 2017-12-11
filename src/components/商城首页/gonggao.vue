<template>
  <div id="gonggao">
    <img src="/static/img/hot.png" alt="">
    <yd-rollnotice autoplay="2000">
      <yd-rollnotice-item><img src="/static/img/tongzhi.png" alt=""> 荣耀V9 3月超级钜惠！</yd-rollnotice-item>
      <yd-rollnotice-item><img src="/static/img/tongzhi.png" alt=""> 3.23京东超级品牌日格力盛典</yd-rollnotice-item>
      <yd-rollnotice-item><img src="/static/img/tongzhi.png" alt=""> 京东服饰 早春新品低至7折</yd-rollnotice-item>
    </yd-rollnotice>
  </div>
</template>
<style scoped>
  #gonggao{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    background: #fff;
    padding: 5px 10px;
   }
  #gonggao img{
    width:20px;
    height:20px;
    margin-right:10px;
  }
  #gonggao .yd-rollnotice{
    border-left:1px solid #eee;
    padding-left:10px;
  }
</style>
