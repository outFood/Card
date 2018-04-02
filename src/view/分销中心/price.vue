<template>
  <div id="price">
    <headers title="分销佣金"></headers>
    <yd-flexbox class="head">
      <yd-flexbox-item>
        <p>{{priceData.thisset.texts.commission_total}}({{priceData.thisset.texts.yuan}})</p>
        {{priceData.member.commission_total}}
      </yd-flexbox-item>
      <yd-flexbox-item>
        <router-link to="/distributIndex/tixianDetail">提现明细</router-link>
      </yd-flexbox-item>
    </yd-flexbox>
    <div class="body">
      <div class="listItem">
        <div class="left"><img :src="require('@/assets/price_block.png')">{{priceData.thisset.texts.commission_ok}}</div>
        <div class="right">{{priceData.member.commission_ok?priceData.member.commission_ok:0.00}} {{priceData.thisset.texts.yuan}}</div>
      </div>
      <div class="listItem">
        <div class="left"><img :src="require('@/assets/clock_sky.png')">{{priceData.thisset.texts.commission_apply}}</div>
        <div class="right">{{priceData.member.commission_apply?priceData.member.commission_apply:0.00}} {{priceData.thisset.texts.yuan}}</div>
      </div>
      <div class="listItem">
        <div class="left"><img :src="require('@/assets/coffe.png')">{{priceData.thisset.texts.commission_check}}</div>
        <div class="right">{{priceData.member.commission_check?priceData.member.commission_check:0.00}} {{priceData.thisset.texts.yuan}}</div>
      </div>
      <div class="listItem">
        <div class="left"><img :src="require('@/assets/coffe.png')">{{priceData.thisset.texts.commission_fail}}</div>
        <div class="right">{{priceData.member.commission_fail?priceData.member.commission_fail:0.00}} {{priceData.thisset.texts.yuan}}</div>
      </div>
      <div class="listItem">
        <div class="left"><img :src="require('@/assets/tixian.png')">{{priceData.thisset.texts.commission_pay}}</div>
        <div class="right">{{priceData.member.commission_pay?priceData.member.commission_pay:0.00}} {{priceData.thisset.texts.yuan}}</div>
      </div>
      <div class="listItem">
        <div class="left"><img :src="require('@/assets/shui.png')">{{priceData.thisset.texts.commission_charge}}</div>
        <div class="right">{{priceData.member.commission_charge?priceData.member.commission_charge:0.00}} {{priceData.thisset.texts.yuan}}</div>
      </div>
      <div class="listItem">
        <div class="left"><img :src="require('@/assets/daishouhuo.png')">{{priceData.thisset.texts.commission_wait}}</div>
        <div class="right">{{priceData.member.commission_wait?priceData.member.commission_wait:0.00}} {{priceData.thisset.texts.yuan}}</div>
      </div>
      <div class="listItem">
        <div class="left"><img :src="require('@/assets/suo.png')">{{priceData.thisset.texts.commission_lock}}</div>
        <div class="right">{{priceData.member.commission_lock?priceData.member.commission_lock:0.00}} {{priceData.thisset.texts.yuan}}</div>
      </div>
    </div>
    <yd-accordion>
      <yd-accordion-item title="用户须知">
        <div style="padding: .24rem;">
          <p>卖家确认收货后，立即获得分销佣金,注意：可用佣金满 <i>100元</i>后才能申请提现</p>
        </div>
      </yd-accordion-item>
    </yd-accordion>
    <yd-button size="large" type="primary" class="woyao" @click.native="tixian">我要提现</yd-button>
  </div>
</template>
<script>
  import config from '../../myConfig'
  import axios from 'axios'
  import router from '@/router'
  import headers from '@/components/headers'
  export default {
    components:{headers},
    data(){
      return {
        priceData:{}
      }
    },
    methods:{
      tixian(){
        router.push({path: '/distributIndex/tixian'})
      }
    },
    beforeCreate(){
      var me=this,myParams = {
        mid: config.mid,
        openid: localStorage.getItem('openid'),
        t: config.t,
        i: config.i,
        uniacid: config.uniacid
      }
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=commission.withdraw.get_main', {params: myParams})
        .then(function (res) {
          me.priceData=res.data.result.data.result
        }).catch(function (res) {
        // alert(err)
      })
    }
  }
</script>
<style>
  #price header {
    height: 1.5rem !important;
    align-items: center;
  }
  #price header .yd-navbar-center-title{
    font-size:.5rem !important;
  }
  #price .yd-back-icon:before, .yd-next-icon:before {
    font-size: .6rem;
  }
  #price{
    font-size:0.375rem;
  }
  #price .head{
    background:#e4393c;
    color:#fff;
    padding:0.3125rem;
  }
  #price .head>div:nth-child(1){
    text-align: left;
  }
  #price .head>div:nth-child(2){
    text-align: right;
  }
  #price .head>div:nth-child(2) a{
    padding: 2px 5px;
    border: 1px solid #fff;
    border-radius: 0.3125rem;
    color:#fff;
  }
  #price .body{
    padding: 0 0.3125rem;
    background: #fff;
  }
  #price .body .listItem{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 0.3125rem 0;
  }
  #price .body .listItem:not(:last-child){
    border-bottom:1px solid #eee
  }
  #price .body .left{

  }
  #price .body .left img{
    width:0.625rem;
    height:0.625rem;
    vertical-align: middle;
    margin-right:0.3125rem;
  }
  #price .yd-accordion{
    margin:0.3125rem 0;
    text-align: left;
  }
  #price .yd-accordion i{
    color:red;
  }
  #price .woyao{
    width:90%;
    margin:0 auto;
  }
</style>
