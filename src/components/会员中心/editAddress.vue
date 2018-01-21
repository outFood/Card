<template>
  <div id="editAddress">
    <form action="#">
      <div class="item">
        <span>收件人</span>
        <div><input placeholder="请填写收件人姓名" v-model="wantEditAddress.realname"></div>
      </div>
      <div class="item">
        <span>联系电话</span>
        <div><input placeholder="请填写联系电话" v-model="wantEditAddress.mobile"></div>
      </div>
      <div class="item">
        <span>所在地区</span>
        <div><input placeholder="请选择所在地区" v-model="wantEditAddress.province" @click.stop="show1 = true" readonly></div>
        <yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>
      </div>
      <div class="item">
        <span>详细地址</span>
        <div><input placeholder="街道、楼牌号等" v-model="wantEditAddress.address"></div>
      </div>
    </form>
    <yd-button size="large" type="primary" @click.native="updateAddress">保存地址</yd-button>
  </div>
</template>
<script>
  /* 前提是已经安装了 ydui-district */
  import District from 'ydui-district/dist/jd_province_city_area_id';
  import config from '../../myConfig'
  export default {
    data(){
      return{
        show1: false,
        areas: '',
        district: District
      }
    },
    computed:{
      wantEditAddress(){
        return this.$store.state.wantEditAddress
      }
    },
    methods:{
      updateAddress(){
        this.$store.dispatch({
          type:'saveAddress',
          params:{
            realname:this.wantEditAddress.realname,
            mobile:this.wantEditAddress.mobile,
            areas:this.wantEditAddress.province,
            address:this.wantEditAddress.address,
            id:this.wantEditAddress.id,
            mid:localStorage.getItem('userid'),
            t:config.t
          }
        })
      },
      result1(ret) {
        this.wantEditAddress.province= ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
      }
    }
  }
</script>
<style>
  #editAddress form{
    text-align: left;
    padding: 10px;
    background: #fff;
  }
  #editAddress form i{
    color:red;
  }
  #editAddress form .item{
    padding: 10px 0;
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
    font-size:12px;
  }
  #editAddress button {
    position: fixed !important;
    bottom: 0 !important;
    border-radius: 0 !important;
    height: 50px !important;
    font-size: 16px !important;
  }
</style>

