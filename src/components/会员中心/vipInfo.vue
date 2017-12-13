<template>
  <div id="vipInfo">
    <yd-navbar title="会员资料">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <router-link to="/vipIndex/nickname" class="updatePic">
      <img src="http://static.ydcss.com/uploads/ydui/1.jpg" alt="">
      <span>晴愔</span>
      <img src="/static/img/more.png" alt="" class="more">
    </router-link>
    <div class="detailInfo">
      <div><span class="name">手机号</span><span class="star">*</span><input type="text" v-model="phone" disabled>更换绑定 <img src="/static/img/more.png" alt="" class="more"></div>
      <div><span class="name">姓名</span><span class="star">*</span><input type="text" placeholder="请输入您的姓名"></div>
      <div><span class="name">微信号</span><span class="star hidden">*</span><input type="text" placeholder="请输入您的微信号"></div>
    </div>
    <yd-cell-group>
      <yd-cell-item arrow>
        <span slot="left">出生日期：</span>
        <yd-datetime type="date" v-model="birthDay" slot="right"></yd-datetime>
      </yd-cell-item>
      <yd-cell-item arrow>
        <span slot="left">所在地区：</span>
        <input slot="right" type="text" @click.stop="show1 = true" v-model="address" readonly placeholder="请选择收货地址">
      </yd-cell-item>
    </yd-cell-group>
    <yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>
    <yd-button size="large" type="primary" class="sureUpdate">确认修改</yd-button>
  </div>
</template>
<style>
  #vipInfo header{
    height:1.5rem !important;
    align-items: center;
  }
  #vipInfo .updatePic{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    margin: 10px 0;
    padding: 10px;
  }
  #vipInfo .updatePic img:nth-child(1){
    width:50px;
    height:50px;
  }
  #vipInfo .updatePic span{
    flex: 0 0 70%;
    text-align: left;
    font-weight: bold;
  }
  #vipInfo .more{
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
  #vipInfo .detailInfo>div{
    background: #fff;
    padding: 10px 0 10px 10px;
    color:#9c9c9c;
    text-align: left;
  }
  #vipInfo .detailInfo>div:not(:first-child){
    border-bottom: 1px solid #eee;
  }
  #vipInfo .detailInfo>div:first-child{
    margin-bottom: 10px;
  }
  #vipInfo .detailInfo>div input{
    background-color: #fff;
    border: none;
    width:50%
  }
  #vipInfo .detailInfo>div .star{
    color:red;
    margin:0 10px;
    vertical-align: middle;
  }
  #vipInfo .detailInfo>div .name{
    color:#282828;
  }
  .hidden{
    visibility: hidden;
  }
  #vipInfo .detailInfo input::-webkit-input-placeholder{color: #bababa}    /* 使用webkit内核的浏览器 */
  #vipInfo .detailInfo input:-moz-placeholder{color: #bababa}                  /* Firefox版本4-18 */
  #vipInfo .detailInfo input::-moz-placeholder{color: #bababa}                  /* Firefox版本19+ */
  #vipInfo .detailInfo input:-ms-input-placeholder{color: #bababa}           /* IE浏览器 */
  #vipInfo .sureUpdate{
    width:90%;
    margin:10px auto;
  }
  #vipInfo .yd-cell-item:not(:last-child):after{
    margin-left:0;
  }
  #vipInfo .yd-cell-box .yd-cell-left{
    font-size:14px !important;
  }
  #vipInfo .yd-cell-right .yd-datetime-input{
    font-size:14px;
  }
  #vipInfo .yd-cell-right input[type=text]{
    font-size:14px;
  }
  /*修改所在地区的placeholder样式*/
  #vipInfo .yd-cell-right input[type=text]::-webkit-input-placeholder{
    color:#bababa
  }
  #vipInfo .yd-cell-right input[type=text]:-moz-placeholder{
    color:#bababa
  }
  #vipInfo .yd-cell-right input[type=text]::-moz-placeholder{
    color:#bababa
  }
  #vipInfo .yd-cell-right input[type=text]:-ms-input-placeholder{
    color:#bababa
  }
  #vipInfo .yd-cell-item{
    padding: 4px;
  }
</style>
<script>
  /* 前提是已经安装了 ydui-district */
  import District from 'ydui-district/dist/jd_province_city_area_id';
  export default {
    data(){
      return {
        phone:'13867104693',
        birthDay: '2017-05-11',
        show1: false,
        address: '',
        district: District
      }
    },
    methods: {
      result1(ret) {
        this.address = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
      }
    }
  }
</script>
