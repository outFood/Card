<template>
  <div id="quanAndActive">
    <div class="listItem" @click="show2 = true">
      <div class="left">领券</div>
      <div class="mid"><span>店铺优惠券</span></div>
      <img src="/static/img/more.png" alt="" class="more">
    </div>
    <div class="listItem">
      <div class="left">活动</div>
      <div class="mid"><span>包邮</span>本品满99包邮</div>
      <img src="/static/img/more.png" alt="" class="more">
    </div>
    <yd-popup v-model="show2" position="bottom" height="80%" class="sizePop" id="quanPop">
      <p class="close"><span @click="show2=false">X</span></p>
      <yd-flexbox v-if="false">
        <div class="left">
          <div>就放假放假</div>
          附件见附件
          <span></span>
        </div>
        <yd-flexbox-item>
          <div>附件见附件发</div>
          <p>剩余分积分积分</p>
          附近附近积分
        </yd-flexbox-item>
        <router-link to="#" class="right">
          见个面
          <span></span>
        </router-link>
      </yd-flexbox>

    </yd-popup>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        show2:false
      }
    }
  }
</script>
<style>
  #quanAndActive{
    background: #fff;margin:10px 0;
  }
  #quanAndActive:after{
    content: '';
    display: block;
    width:100%;height:100px;
  }
  #quanAndActive .listItem{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    padding: 10px 10px 20px 10px;
  }
  #quanAndActive .listItem .left{
    color:#6e6e6e;
  }
  #quanAndActive .listItem .mid{
    flex: 0 0 70%;
    text-align: left;
    font-size:12px;
  }
  #quanAndActive .listItem .mid span{
    color:orangered;
    background:blanchedalmond;padding:2px 6px;border-radius: 10px;
  }
  #quanAndActive .listItem .more{
    width:20px;height:20px;
  }
  #quanAndActive .yd-popup-content{
    background:#fafafa !important;
  }
  #quanAndActive #quanPop .close{
    padding:10px;
    margin-bottom: 10px;text-align: right;
  }
  #quanAndActive #quanPop .close span{
    padding:5px 8px;border:1px solid #000;border-radius:50%;
  }
  #quanAndActive #quanPop .yd-flexbox{
    font-size:14px;
    background: #fff;
    padding:0.625rem;
    margin:0.625rem;
    line-height: 0.625rem;
    position: relative;
  }
  #quanAndActive #quanPop .yd-flexbox .left{
    font-size:0.3125rem;
  }
  #quanAndActive #quanPop .yd-flexbox .left div{
    font-size:0.625rem;
    font-weight: bold;
    color:red;
  }
  #quanAndActive #quanPop .yd-flexbox .yd-flexbox-item{
    font-size:12px;
    color:#999;
  }
  #quanAndActive #quanPop .yd-flexbox .yd-flexbox-item div{
    color:#000;
    font-weight: bold;
    font-size: 14px;
  }
  #quanAndActive #quanPop .yd-flexbox .yd-flexbox-item p{
    color:#52b6ff
  }
  #quanAndActive #quanPop .yd-flexbox .right{
    color:red;
  }
  #quanAndActive #quanPop .yd-flexbox .right span{
    display: inline-block;
    width:0.625rem;
    height:0.625rem;
    background: #fafafa;
    border-radius: 50%;
  }
  #quanAndActive #quanPop .yd-flexbox .left span {
    display: inline-block;
    width: 0.625rem;
    height: 0.625rem;
    background: #fafafa;
    border-radius: 50%;
  }
  #quanAndActive #quanPop .right span {
    position: absolute;
    right: -0.3125rem;
    top: 40%;
  }
  #quanAndActive #quanPop .left span{
    position: absolute;
    left:-0.3125rem;
    top:45%;
  }
</style>
