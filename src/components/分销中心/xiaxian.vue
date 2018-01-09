<template>
  <yd-layout title="我的下线(1)" link="/distributIndex" id="xiaxian">
    <yd-tab>
      <yd-tab-panel label="一级(1)">
        <p class="tip">成员信息 <img src="/static/img/star_hong.png" alt="">为已经成为分销商的下线</p>
        <div class="item">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
          <div class="middle">
            <h6><img src="/static/img/star_hong.png" alt="">晴愔</h6>
            <span>成为分销商时间;2017.12.25 10:43</span>
          </div>
          <div class="right">
            <span>+0</span>
            <span>0个成员</span>
          </div>
        </div>
        <div class="item">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
          <div class="middle">
            <h6><img src="/static/img/star_hong.png" alt="">晴愔</h6>
            <span>成为分销商时间;2017.12.25 10:43</span>
          </div>
          <div class="right">
            <span>+0</span>
            <span>0个成员</span>
          </div>
        </div>
        <div class="item">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
          <div class="middle">
            <h6><img src="/static/img/star_hong.png" alt="">晴愔</h6>
            <span>成为分销商时间;2017.12.25 10:43</span>
          </div>
          <div class="right">
            <span>+0</span>
            <span>0个成员</span>
          </div>
        </div>
      </yd-tab-panel>
      <yd-tab-panel label="二级(0)">
      </yd-tab-panel>
    </yd-tab>
    <footers></footers>
  </yd-layout>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    beforeCreate(){
      this.$store.dispatch({
        type:'resXiaXian'
      })
    }
  }
</script>
<style>
  #xiaxian{

  }
  #xiaxian .yd-tab-nav .yd-tab-active:before {
    width: 100%;
    margin-left: -50%;
  }
  #xiaxian .yd-tab-nav-item:not(:last-child):after {
    display: none;
  }
  #xiaxian .yd-tab-nav a{
    font-size:0.4375rem;
    padding: 8px 0;
  }
  #xiaxian .tip{
    background: #f5f5f5;
    text-align: left;
    padding: 15px;
  }
  #xiaxian .tip img{
    width:20px;
    height:20px;
    vertical-align: middle;
  }
  #xiaxian .item{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    padding: 10px;
  }
  #xiaxian .item:not(:last-child){
    border-bottom:1px solid #eee;
  }
  #xiaxian .item>img{
    width:60px;
    height:60px;
  }
  #xiaxian .item span{
    font-size:12px;
    color:#aaa;
  }
  #xiaxian .item .middle{
    flex:0 0 60%;
    text-align: left;
    padding-left: 10px;
  }
  #xiaxian .item .middle img{
    width:20px;
    heigth:20px;
    vertical-align: middle;
  }
  #xiaxian .item .right{
    text-align: right;
    border-left:1px solid #eee;
    flex: 0 0 20%;
  }
  #xiaxian .item .right span{
    display: block;
  }
</style>
