<template>
  <div id="editAddress">
    <headers title="编辑地址"></headers>
    <form action="#">
      <div class="item">
        <span>收件人</span>
        <div><input :placeholder="wantEditAddress.realname?wantEditAddress.realname:'请填写收件人姓名'" v-model="realname" :class="{sky:!wantEditAddress.realname}"></div>
      </div>
      <div class="item">
        <span>联系电话</span>
        <div><input :placeholder="wantEditAddress.mobile?wantEditAddress.mobile:'请填写联系电话'" v-model="mobile" :class="{sky:!wantEditAddress.mobile}"></div>
      </div>
      <div class="item">
        <span>所在地区</span>
        <div><input :placeholder="wantEditAddress.province+wantEditAddress.city+wantEditAddress.area?wantEditAddress.province+' '+wantEditAddress.city+' '+wantEditAddress.area:'请选择所在地区'" v-model="myAreas" @click.stop="show1 = true" readonly></div>
        <yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>
      </div>
      <div class="item">
        <span>详细地址</span>
        <div><input :placeholder="wantEditAddress.address?wantEditAddress.address:'请填写详细地址'" v-model="address" :class="{sky:!wantEditAddress.address}"></div>
      </div>
    </form>
    <yd-button size="large" type="primary" @click.native="updateAddress">保存地址</yd-button>
  </div>
</template>
<script>
  /* 前提是已经安装了 ydui-district */
  import District from 'ydui-district/dist/jd_province_city_area_id';
  import config from '../../myConfig'
  import axios from 'axios'
  import router from '@/router'
  import headers from '@/components/headers'
  export default {
    components:{headers},
    data(){
      return{
        show1: false,
        district: District,
        realname:'',
        mobile:'',
        myAreas:'',
        address:'',
        wantEditAddress:JSON.parse(this.$route.query.item)
      }
    },
    methods:{
      openAlert() {
        this.$dialog.alert({
          mes:this.tipMsg
        });
      },
      updateAddress(){
        var regMobile =/^[1][3,4,5,7,8][0-9]{9}$/;
        if(this.realname==''&&this.wantEditAddress.realname==''){
          this.tipMsg='请填写姓名!'
          this.openAlert()
        }else if(this.mobile==''&&this.wantEditAddress.mobile==''){
          this.tipMsg='请填写手机号!'
          this.openAlert()
        }else if(this.mobile!=''&&this.mobile.length!=11){
          this.tipMsg='请填写11位手机号!'
          this.openAlert()
        }else if(this.mobile!=''&&!regMobile.test(this.mobile)){
          this.tipMsg='手机号格式输入有误!'
          this.openAlert()
        }else if(this.wantEditAddress.province==''&&this.wantEditAddress.city==''&&this.wantEditAddress.area==''&&this.myAreas==''){
          this.tipMsg='请选择所在地区!'
          this.openAlert()
        }else if(this.wantEditAddress.address==''&&this.address==''){
          this.tipMsg='请填写收货地址!'
          this.openAlert()
        }else{
          var me=this;
          var params={
            realname:this.realname?this.realname:this.wantEditAddress.realname,
            mobile:this.mobile?this.mobile:this.wantEditAddress.mobile,
            areas:this.myAreas?this.myAreas:this.wantEditAddress.province+' '+this.wantEditAddress.city+' '+this.wantEditAddress.area,
            address:this.address?this.address:this.wantEditAddress.address,
            id:this.wantEditAddress.id,
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
        this.myAreas= ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
      }
    }
  }
</script>
<style>

  #editAddress ::-webkit-input-placeholder {
    color: #000 !important;
    font-size:0.45rem !important;
  }
  #editAddress .sky::-webkit-input-placeholder {
    color: silver !important;
  }
  #editAddress form{
    text-align: left;
    padding: 0.3125rem;
    background: #fff;
  }
  #editAddress form i{
    color:red;
  }
  #editAddress form .item{
    padding: 0.3125rem 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  #editAddress form .item span{
    flex:0 0 25% ;
  }
  #editAddress form .item>div{
    flex:0 0 70%;
  }
  #editAddress form .item input{
    border: none;
    padding-left: 5px;
    width:95%;
  }
  *::-webkit-input-placeholder {
    color: #b0b0b0;
    font-size:0.375rem;
  }
  #editAddress button {
    position: fixed !important;
    bottom: 0 !important;
    border-radius: 0 !important;
    height:1.5625rem !important;
    font-size: 0.5rem !important;
  }
</style>

