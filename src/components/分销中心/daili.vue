<template>
  <div id="daili">
    <yd-slider autoplay="3000">
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
        </a>
      </yd-slider-item>
    </yd-slider>
    <form action="#">
      <p>欢迎加入 <i>E卡平台</i>，请填写申请信息</p>
      <div class="item">
        <span>姓名</span>
        <div><i>*</i><input placeholder="请填写姓名"></div>
      </div>
      <div class="item">
        <span>手机号</span>
        <div><i>*</i><input placeholder="请填写手机号"></div>
      </div>
      <div class="item">
        <span>邀请码</span>
        <div><i>*</i><input placeholder="请填写邀请码"></div>
      </div>
      <div class="item">
        <span>微信号</span>
        <div><input placeholder="请填写微信号"></div>
      </div>
      <div class="item">
        <span>代理类型</span>
        <div>
          <yd-radio-group v-model="sort" color="#F00">
            <yd-radio val="省级"></yd-radio>
            <yd-radio val="市级"></yd-radio>
            <yd-radio val="区级"></yd-radio>
            <yd-radio val="乡镇"></yd-radio>
          </yd-radio-group>
        </div>
      </div>
      <div class="item">
        <span>代理省份</span>
        <div><input placeholder="请选择代理省份"></div>
      </div>
      <yd-checkbox-group v-model="readed" size="30" class="xieyi">
        <yd-checkbox val="1"><span style="font-size: 24px;">我已经阅读并了解了</span><u>【区域代理申请协议】</u></yd-checkbox>
      </yd-checkbox-group>
      <yd-button size="large" type="warning">申请成为</yd-button>
      <div class="item">
        <span class="img"><img src="/static/img/tequan.png" alt=""></span>
        <div>特权</div>
      </div>
      <div class="item">
        <span class="img"><img src="/static/img/hebei.png" alt=""></span>
        <div>坐享分红 <br>成为后，您可以享受您代理的区域营业额的分红收益</div>
      </div>
    </form>
  </div>
</template>
<style>
#daili form{
  text-align: left;
  padding: 10px;
  background: #fff;
}
#daili form p{
  padding: 10px 0;
}
#daili form i{
  color:red;
}
#daili form .item{
  padding: 10px 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  padding:10px 0;
  border-bottom: 1px solid #eee;
}
#daili form .item span{
  flex:0 0 25% ;
}
#daili form .item input{
  border: none;
  padding-left: 10px;
}
#daili form .item img{
  width:20px;
  height:20px;
  vertical-align: middle;
}
#daili form .item .img{
  flex: 0 0 10%;
}
#daili form .yd-checkbox-icon {
  width: 15px !important;
  height: 15px !important;
}
#daili form .yd-checkbox-icon i{
  width:7px !important;
  height:9px !important;
}
#daili form .xieyi .yd-checkbox-text{
  font-size:14px !important;
}
#daili form .xieyi .yd-checkbox-text span{
  font-size:14px !important;
}
#daili form .xieyi u{
  color:#2e70a2;
  text-decoration: none;
  font-weight: bold;
}
</style>
<script>
  export default {
    data(){
      return{
        sort:'省级',
        readed: ['3']
      }
    },
    watch: {
      sort: {
        handler: function (val, oldVal) {
          console.log(val)
        },
        deep: true
      },
    }
  }
</script>
