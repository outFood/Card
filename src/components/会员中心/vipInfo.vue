<template>
  <yd-layout title="会员资料" link="/vipIndex" id="vipInfo">
    <router-link to="/vipIndex/nickname" class="updatePic">
      <i v-if="vipInfoData.avatar==''&&vipInfoData.nickname==''">点击设置头像和昵称</i>
      <div v-else>
        <img :src="vipInfoData.avatar" alt="">
        <span>{{vipInfoData.nickname}}</span>
      </div>
      <img src="/static/img/more.png" alt="" class="more">
    </router-link>
    <div class="detailInfo">
      <div>姓名 <span>*</span><input :placeholder="vipInfoData.realname==''?'请输入姓名':vipInfoData.realname" v-model="realname"></div>
      <div>手机号 <span>*</span><input :placeholder="vipInfoData.mobile==''?'请输入手机号':vipInfoData.mobile" v-model="mobile"></div>
      <div>微信号 <span>*</span><input :placeholder="vipInfoData.weixin==''?'请输入微信号':vipInfoData.weixin" v-model="weixin"></div>
    </div>
    <yd-cell-group>
      <!--<yd-cell-item arrow>-->
        <!--<span slot="left">出生日期：</span>-->
        <!--<yd-datetime type="date" v-model="birthday" slot="right"></yd-datetime>-->
      <!--</yd-cell-item>-->
      <yd-cell-item arrow>
        <span slot="left">所在地区：</span>
        <input slot="right" type="text" @click.stop="show1 = true" v-model="areas" readonly :placeholder="(vipInfoData.province==''&&vipInfoData.city==''&&vipInfoData.area=='')?'请选择所在地区':(vipInfoData.province&&vipInfoData.city&&vipInfoData.area)">
      </yd-cell-item>
    </yd-cell-group>
    <yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>
    <yd-button size="large" type="primary" class="sureUpdate" @click.native="sureUpdate">确认修改</yd-button>
  </yd-layout>
</template>
<script>
  /* 前提是已经安装了 ydui-district */
  import District from 'ydui-district/dist/jd_province_city_area_id';
  export default {
    data(){
      return {
        mobile:'13867104693',
        realname:'',
        weixin:'',
        birthday: '',
        areas: '',
        show1: false,
        district: District
      }
    },
    computed:{
      vipInfoData(){
        return this.$store.state.vipInfoData
      }
    },
    methods: {
      result1(ret) {
        this.areas = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
      },
      sureUpdate(){
        this.$store.dispatch({
          type:'updatePersonInfo',
          params:{
            mid:localStorage.getItem('userid'),
            realname:this.realname,
            mobile:this.mobile,
            weixin:this.weixin,
            areas:this.areas,
          }
        })
      },
    },
    beforeCreate(){
      this.$store.dispatch({
        type:'resVipInfo',
        params:{
          mid:localStorage.getItem('userid'),
          openid:localStorage.getItem('openid')
        },
      })
    }
  }
</script>
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
    padding:15px 10px;
    text-align: left;
    border-bottom:1px solid #d9d9d9;
  }
  #vipInfo .detailInfo>div span{
    color:red;
    margin:0 10px;
  }
  #vipInfo .detailInfo>div input{
    border:none;
  }
  #vipInfo .detailInfo input::-webkit-input-placeholder{color: #bababa}    /* 使用webkit内核的浏览器 */
  #vipInfo .detailInfo input:-moz-placeholder{color: #bababa}                  /* Firefox版本4-18 */
  #vipInfo .detailInfo input::-moz-placeholder{color: #bababa}                  /* Firefox版本19+ */
  #vipInfo .detailInfo input:-ms-input-placeholder{color: #bababa}           /* IE浏览器 */
  #vipInfo .sureUpdate{
    width:90%;
    margin:0 auto;
  }
  #vipInfo .yd-cell-item:not(:last-child):after{
    margin-left:0;
  }
  #vipInfo .yd-cell-box .yd-cell-left{
    font-size:15px !important;
    color:#000;
  }
  #vipInfo .yd-cell-right .yd-datetime-input{
    font-size:15px;
    color:#000
  }
  #vipInfo .yd-cell-right input[type=text]{
    font-size:15px;
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
    padding: 7px;
  }
</style>
