<template>
  <div id="vipInfo">
    <headers title="会员资料"></headers>
    <router-link to="/vipIndex/nickname" class="updatePic">
      <i v-if="vipInfoData.avatar==''&&vipInfoData.nickname==''">点击设置头像和昵称</i>
      <div v-else>
        <img :src="vipInfoData.avatar" alt="">
        <span>{{vipInfoData.nickname}}</span>
      </div>
      <img :src="require('@/assets/more.png')" alt="" class="more">
    </router-link>
    <div class="detailInfo">
      <div>姓名 <span>*</span><input :placeholder="vipInfoData.realname?vipInfoData.realname:'请输入姓名'" v-model="realname" :class="{sky:!vipInfoData.realname}"></div>
      <div>手机号 <span>*</span><input readonly :placeholder="vipInfoData.mobile?vipInfoData.mobile:'请输入手机号'" v-model="mobile" :class="{sky:!vipInfoData.mobile}" maxlength="11"></div>
      <div>微信号 <span style="visibility: hidden">*</span><input :placeholder="vipInfoData.weixin?vipInfoData.weixin:'请输入微信号'" v-model="weixin" :class="{sky:!vipInfoData.weixin}"></div>
    </div>
    <yd-cell-group>
      <yd-cell-item arrow>
        <span slot="left">所在地区：</span>
        <input slot="right" type="text" @click.stop="show1 = true" v-model="areas!=''?areas:vipInfoData.province+' '+vipInfoData.city+' '+vipInfoData.area" readonly placeholder="请选择所在地区">
      </yd-cell-item>
    </yd-cell-group>
    <yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>
    <yd-button size="large" type="primary" class="sureUpdate" @click.native="sureUpdate">确认修改</yd-button>
  </div>
</template>
<script>
  /* 前提是已经安装了 ydui-district */
  import District from 'ydui-district/dist/jd_province_city_area_id';
  import config from '../../myConfig'
  import headers from '@/components/headers'
  import axios from 'axios'
  export default {
    components:{headers},
    data(){
      return {
        mobile:'',
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
        var regMobile =/^[1][3,4,5,7,8][0-9]{9}$/;
        var regRealname = /^[\u4E00-\u9FA5]{2,4}$/;
        var regWeixin=/^[a-z_\d]+$/;
        if(this.vipInfoData.realname==''&&this.realname==''){
          this.$dialog.toast({
            mes:'请输入姓名!',
            timeout: 500
          });
        }else if(this.realname!=''&&!regRealname.test(this.realname)){
          this.$dialog.toast({
            mes:'用户名只能是汉子并且在2-4位之间!',
            timeout: 500
          });
        }else if(this.vipInfoData.mobile==''&&this.mobile==''){
          this.$dialog.toast({
            mes:'请输入手机号!',
            timeout: 500
          });
        }else if(this.mobile!=''&&!regMobile.test(this.mobile)){
          this.$dialog.toast({
            mes:'手机号格式输入有误!',
            timeout: 500
          });
        }else if(this.vipInfoData.weixin==''&&this.weixin==''){
          this.$dialog.toast({
            mes:'请输入微信号!',
            timeout: 500
          });
        }else if(this.weixin!=''&&!regWeixin.test(this.weixin)){
          this.$dialog.toast({
            mes:'微信号格式有误!',
            timeout: 500
          });
        }else if(this.vipInfoData.province==''&&this.vipInfoData.city==''&&this.vipInfoData.area==''&&this.areas==''){
          this.$dialog.toast({
            mes:'请选择所在地区!',
            timeout: 500
          });
        }else {
          var me=this;
          var params={
            mid:localStorage.getItem('userid'),
            openid:localStorage.getItem('openid'),
            realname:this.realname!=''?this.realname:this.vipInfoData.realname,
            mobile:this.mobile!=''?this.mobile:this.vipInfoData.mobile,
            weixin:this.weixin!=''?this.weixin:this.vipInfoData.weixin,
            areas:this.areas!=''?this.areas:this.vipInfoData.province+' '+this.vipInfoData.city+' '+this.vipInfoData.area,
            t:config.t
          }
          axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.info.submitapp', {params:params})
            .then(function (res) {
              me.$dialog.toast({
                mes:res.data.result.msg,
                timeout: 1500,
              });
              if(res.data.status==1){
                me.$router.go(-1)
              }
            }).catch(function (err) {console.log(err)})
        }
      },
    },
    beforeCreate(){
      this.$store.dispatch({
        type:'resVipInfo',
        params:{
          mid:localStorage.getItem('userid'),
          openid:localStorage.getItem('openid'),
          t:config.t
        },
      })
    }
  }
</script>
<style>
  #vipInfo ::-webkit-input-placeholder {
    color: #000 !important;
    font-size:0.45rem !important;
  }
  #vipInfo .sky::-webkit-input-placeholder {
    color: silver !important;
  }
  #vipInfo .updatePic{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    margin:0.3125rem 0;
    padding:0.3125rem;
  }
  #vipInfo .updatePic img:nth-child(1){
    margin-right:1rem;
    width:50px;
    height:50px;
    vertical-align: middle;
  }
  #vipInfo .updatePic div{
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
    padding:15px 0.3125rem;
    text-align: left;
    border-bottom:1px solid #d9d9d9;
  }
  #vipInfo .detailInfo>div span{
    color:red;
    margin:0 0.3125rem;
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
