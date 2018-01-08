<template>
  <yd-layout title="E卡会员" link="#" id="vip">
    <div class='vipInfo'>
      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2977994388,1327444185&fm=27&gp=0.jpg" alt="" class="vipCard">
      <div class="vipOtherInfo">
        <div>
          积分 <span>获取</span>
        </div>
        <div>
          等级 <span>普通会员</span>
        </div>
        <div>
          优惠券 <span>查看</span>
        </div>
      </div>
      <span class="use">立即使用</span>
    </div>
    <yd-cell-group class="foot">
      <yd-cell-item arrow type="link" href="/shopIndex/vipGrad">
        <span slot="left">会员等级</span>
        <span slot="right"></span>
      </yd-cell-item>
      <yd-cell-item arrow type="link" href="/shopIndex/useInstruct">
        <span slot="left">使用说明</span>
        <span slot="right"></span>
      </yd-cell-item>
    </yd-cell-group>
  </yd-layout>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
//     beforeCreate(){
//       this.$store.dispatch({
//         type:'resVip'
//       })
//     }
  }
</script>
<style>
  #vip{
    background:#fff;
    position: fixed;
    top:0;
    right:0;
    bottom: 0;
    left:0;
  }
  #vip .vipInfo{
    padding: 20px;
  }
  #vip .vipInfo img{
    width:100%;
  }
  #vip .vipInfo .vipOtherInfo{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    margin:30px auto;
    font-size: 12px;
  }
  #vip .vipInfo .vipOtherInfo>div{
    flex: 0 0 33%;
    padding:10px 0;
  }
  #vip .vipInfo .vipOtherInfo>div:not(:last-child){
    border-right:2px solid #f1aa4e
  }
  #vip .vipInfo .vipOtherInfo>div span{
    display: block;
    color:#f1aa4e;
    font-size: 14px;
    font-weight: bold;
  }
  #vip .vipInfo .use{
    padding:5px 15px;
    border:1px solid #f1aa4e;
    color:#f1aa4e;
    border-radius: 5px;
    font-size:14px;
  }
  #vip .foot .yd-cell:after {
    border-bottom: 0px solid #b2b2b2;
  }
  #vip .foot .yd-cell-item:after {
    margin-left: .24rem;
    content: "";
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid #d9d9d9;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    margin-left: 0rem;
  }
  #vip .foot .yd-cell-item:nth-child(1) {
    border-top: 1px solid #d9d9d9;
  }
</style>
