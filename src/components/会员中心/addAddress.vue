<template>
  <div id="addAddress">
    <headers title="添加地址"></headers>
    <form action="#">
      <div class="item">
        <span>收件人</span>
        <div><input placeholder="请填写收件人姓名" v-model="realname" maxlength="4" minlength="2"></div>
      </div>
      <div class="item">
        <span>联系电话</span>
        <div><input placeholder="请填写联系电话" v-model="mobile" maxlength="11"></div>
      </div>
      <div class="item">
        <span>所在地区</span>
        <div><input placeholder="请选择所在地区" v-model="areas" @click.stop="show1 = true" readonly></div>
        <yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>
      </div>
      <div class="item">
        <span>详细地址</span>
        <div><input placeholder="街道、楼牌号等" v-model="address"></div>
      </div>
    </form>
    <yd-button size="large" type="primary" @click.native="addAddress">保存地址</yd-button>
  </div>
</template>
<script>
  import config from '../../myConfig'
  import axios from 'axios'
  import router from '@/router'
  /* 前提是已经安装了 ydui-district */
  import District from 'ydui-district/dist/jd_province_city_area_id'
  import headers from '@/components/headers'
  export default {
    components:{headers},
    data(){
      return{
        realname:'',
        mobile:'',
        address:'',
        show1: false,
        areas: '',
        district: District
      }
    },
    methods:{
      openAlert() {
        this.$dialog.alert({
          mes:this.tipMsg
        });
      },
      addAddress(){
        var regMobile =/^[1][3,4,5,7,8][0-9]{9}$/;
        if(this.realname==''){
          this.tipMsg='请填写姓名!'
          this.openAlert()
        }else if(this.mobile==''){
          this.tipMsg='请填写手机号!'
          this.openAlert()
        }else if(this.mobile.length!=11){
          this.tipMsg='请填写11位手机号!'
          this.openAlert()
        }else if(!regMobile.test(this.mobile)){
          this.tipMsg='手机号格式输入有误!'
          this.openAlert()
        }else if(this.areas==''){
          this.tipMsg='请选择所在地区!'
          this.openAlert()
        }else if(this.address==''){
          this.tipMsg='请填写收货地址!'
          this.openAlert()
        }else{
          var me=this;
          var params={
            realname:this.realname,
            mobile:this.mobile,
            areas:this.areas,
            address:this.address,
            mid:localStorage.getItem('userid'),
            openid:localStorage.getItem('openid'),
            uniacid:config.uniacid,
            t:config.t
          }
          axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.address.submitapp', {params:params})
            .then(function (res) {
              if(res.data.status==1){
                router.push({path: '/vipIndex/myAddress'})
              }else{
                me.$dialog.toast({
                  mes:res.data.result.msg,
                  timeout: 500
                });
              }
            }).catch(function (err) {alert(err)})
        }
      },
      result1(ret) {
        this.areas = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
      }
    }
  }
</script>
<style>
  #addAddress form{
    text-align: left;
    padding: 0.3125rem;
    background: #fff;
  }
  #addAddress form i{
    color:red;
  }
  #addAddress form .item{
    padding: 0.3125rem 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  #addAddress form .item span{
    flex:0 0 25% ;
  }
  #addAddress form .item>div{
    flex:0 0 70%;
  }
  #addAddress form .item input{
    border: none;
    padding-left: 5px;
    width:95%;
  }
  *::-webkit-input-placeholder {
    color: #b0b0b0;
    font-size:0.375rem;
  }
  #addAddress button{
    position: fixed !important;
    bottom: 0 !important;
    border-radius: 0 !important;
    height:1.5625rem !important;
    font-size:0.5rem !important;
  }
</style>

