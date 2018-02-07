<template>
  <div id="goPay">
    <yd-slider autoplay="3000">
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
        </a>
      </yd-slider-item>
    </yd-slider>
    <form action="#">
      <div class="item">
        <span>姓名</span>
        <div><input placeholder="简历"></div>
      </div>
      <div class="item">
        <span>手机号</span>
        <div><input placeholder="请填写邀请人ID"></div>
      </div>
      <div class="item">
        <span>代理区域</span>
        <div><input placeholder="请填写邀请人ID"></div>
      </div>
      <div class="item">
        <span>状态1</span>
        <div><i>*</i><input placeholder="请填写真实姓名，用于结算"></div>
      </div>
      <div class="item">
        <span>代理费用</span>
        <div><i>*</i><input placeholder="请填写手机号，方便联系"></div>
      </div>
      <yd-button size="large" type="danger">申请成为会员</yd-button>
    </form>
  </div>
</template>
<script>
  import config from '../../myConfig'
  export default {
    data(){
      return{

      }
    },
    methods:{
    }
  }
</script>
<style>
  #goPay form{
    text-align: left;
    padding:0.3125rem;
    background: #fff;
  }
  #goPay form .item{
    padding: 0.3125rem 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    padding:0.3125rem 0;
    border-bottom: 1px solid #eee;
  }
  #goPay form .item i{
    color:#e4393c;
  }
  #goPay form .item span{
    flex:0 0 25% ;
  }
  #goPay form .item>div{
    flex:0 0 70%;
  }
  #goPay form .item input{
    border: none;
    padding-left: 5px;
    width:95%;
  }
  #goPay *::-webkit-input-placeholder {
    color: #b0b0b0;
    font-size:0.375rem;
  }
</style>

