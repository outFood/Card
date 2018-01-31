<template>
  <yd-layout title="我的下线(1)" link="/distributIndex" id="agentLine">
    <p class="tip">成员信息 <img src="/static/img/star_hong.png" alt="">为已经成为代理商的下线</p>
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
    <footers></footers>
  </yd-layout>
</template>
<script>
  import config from '../../myConfig'
  export default {
    data(){
      return{

      }
    },
    beforeCreate(){
      this.$store.dispatch({
        type:'resXiaXian',
        params:{
          openid:localStorage.getItem('openid'),
          mid:config.mid,
          t:config.t
        }
      })
    }
  }
</script>
<style>
  #agentLine .tip{
    background: #f5f5f5;
    text-align: left;
    padding: 15px;
  }
  #agentLine .tip img{
    width:20px;
    height:20px;
    vertical-align: middle;
  }
  #agentLine .item{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    padding: 10px;
    background: #fff;
  }
  #agentLine .item:not(:last-child){
    border-bottom:1px solid #eee;
  }
  #agentLine .item>img{
    width:60px;
    height:60px;
  }
  #agentLine .item span{
    font-size:12px;
    color:#aaa;
  }
  #agentLine .item .middle{
    flex:0 0 60%;
    text-align: left;
    padding-left: 10px;
  }
  #agentLine .item .middle img{
    width:20px;
    heigth:20px;
    vertical-align: middle;
  }
  #agentLine .item .right{
    text-align: right;
    border-left:1px solid #eee;
    flex: 0 0 20%;
  }
  #agentLine .item .right span{
    display: block;
  }
</style>

