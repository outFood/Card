<template>
  <div id="addAddress">
    <headers title="添加地址"></headers>
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
    <yd-button size="large" type="primary" @click.native="addAddress">保存地址</yd-button>
  </div>
</template>
<script>
  import config from '../../myConfig'
  /* 前提是已经安装了 ydui-district */
  import District from 'ydui-district/dist/jd_province_city_area_id'
  import headers from '@/components/headers'
  export default {
    components:{headers},
    data(){
      return{
        realname:'哈哈',
        mobile:'13469936720',
        address:'浦江镇',
        show1: false,
        areas: '',
        district: District
      }
    },
    methods:{
      addAddress(){
        this.$store.dispatch({
          type:'addOrUpdateAddress',
          params:{
            realname:this.realname,
            mobile:this.mobile,
            areas:this.areas,
            address:this.address,
            mid:localStorage.getItem('userid'),
            openid:localStorage.getItem('openid'),
            uniacid:config.uniacid,
            t:config.t
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

