<template>
  <yd-layout title="我的优惠券" link="/vipIndex"  id="myQuan">
    <yd-flexbox>
      <div class="left">
        <div>1.8</div>
        满29元可用
        <span></span>
      </div>
      <yd-flexbox-item>
        <div>一只蟹蟹煲饭</div>
        2017.10.30 至<br> 2017.11.1可用
      </yd-flexbox-item>
      <div class="right">
        平台发放代金券
        <span></span>
      </div>
    </yd-flexbox>
  </yd-layout>
</template>
<style scoped>
 #myQuan .yd-flexbox{
    font-size:14px;
    background: #fff;
    padding:0.625rem;
    margin:0.625rem;
    line-height: 0.625rem;
    position: relative;
  }
 #myQuan .yd-flexbox .left{
    font-size: 10px;
  }
 #myQuan .yd-flexbox .left div{
    font-size: 20px;
    font-weight: bold;
    color:red;
  }
 #myQuan .yd-flexbox .yd-flexbox-item{
    font-size:12px;
    color:#999;
  }
 #myQuan .yd-flexbox .yd-flexbox-item div{
    color:#000;
    font-weight: bold;
    font-size: 14px;
  }
 #myQuan .yd-flexbox .right{
    color:red;
  }
 #myQuan .yd-flexbox .right span{
    display: inline-block;
    width:0.625rem;
    height:0.625rem;
    background: #f5f5f5;
    border-radius: 50%;
  }
 #myQuan .yd-flexbox .left span {
    display: inline-block;
    width: 0.625rem;
    height: 0.625rem;
    background: #f5f5f5;
    border-radius: 50%;
  }
 #myQuan .right span {
    position: absolute;
    right: -0.3125rem;
    top: 45%;
  }
#myQuan .left span{
    position: absolute;
    left:-0.3125rem;
    top:45%;
  }
</style>
