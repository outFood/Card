<template>
  <div id="regist">
    <form action="#">
      <div class="item">
        <span>收件人</span>
        <div><input placeholder="请填写收件人姓名" v-model="realname"></div>
      </div>
      <div class="item">
        <span>联系电话</span>
        <div><input placeholder="请填写联系电话" v-model="mobile"></div>
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
    <yd-button size="large" type="primary" @click.native="saveAddress">保存地址</yd-button>
  </div>
</template>
<script>
  /* 前提是已经安装了 ydui-district */
  import District from 'ydui-district/dist/jd_province_city_area_id';
  export default {
    data(){
      return{
        realname:'夏沫',
        mobile:'13469936720',
        address:'浦江镇',
        show1: false,
        areas: '',
        district: District
      }
    },
    methods:{
      saveAddress(){
        this.$store.dispatch({
          type:'saveAddress',
          params:{
            realname:this.realname,
            mobile:this.mobile,
            areas:this.areas,
            address:this.address
          }
        })
      },
      result1(ret) {
        this.areas = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
      }
    }
  }
</script>
<style>
  #regist form{
    text-align: left;
    padding: 10px;
    background: #fff;
  }
  #regist form i{
    color:red;
  }
  #regist form .item{
    padding: 10px 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  #regist form .item span{
    flex:0 0 25% ;
  }
  #regist form .item>div{
    flex:0 0 70%;
  }
  #regist form .item input{
    border: none;
    padding-left: 5px;
    width:95%;
  }
  *::-webkit-input-placeholder {
    color: #b0b0b0;
    font-size:12px;
  }
  button {
    position: fixed !important;
    bottom: 0 !important;
    border-radius: 0 !important;
    height: 50px !important;
    font-size: 16px !important;
  }
</style>

