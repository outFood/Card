<template>
  <div id="price">
    <yd-navbar title="分销佣金">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon @click.native="back"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
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
        <div class="left"><img src="/static/img/price_block.png">{{priceData.thisset.texts.commission_ok}}</div>
        <div class="right">{{priceData.member.commission_ok}} {{priceData.thisset.texts.yuan}}</div>
      </div>
      <div class="listItem">
        <div class="left"><img src="/static/img/clock_sky.png">{{priceData.thisset.texts.commission_apply}}</div>
        <div class="right">{{priceData.member.commission_apply}} {{priceData.thisset.texts.yuan}}</div>
      </div>
      <div class="listItem">
        <div class="left"><img src="/static/img/coffe.png">{{priceData.thisset.texts.commission_check}}</div>
        <div class="right">{{priceData.member.commission_check}} {{priceData.thisset.texts.yuan}}</div>
      </div>
      <div class="listItem">
        <div class="left"><img src="/static/img/coffe.png">{{priceData.thisset.texts.commission_fail}}</div>
        <div class="right">{{priceData.member.commission_fail}} {{priceData.thisset.texts.yuan}}</div>
      </div>
      <div class="listItem">
        <div class="left"><img src="/static/img/tixian.png">{{priceData.thisset.texts.commission_pay}}</div>
        <div class="right">{{priceData.member.commission_pay}} {{priceData.thisset.texts.yuan}}</div>
      </div>
      <div class="listItem">
        <div class="left"><img src="/static/img/shui.png">{{priceData.thisset.texts.commission_charge}}</div>
        <div class="right">{{priceData.member.commission_charge}} {{priceData.thisset.texts.yuan}}</div>
      </div>
      <div class="listItem">
        <div class="left"><img src="/static/img/daishouhuo.png">{{priceData.thisset.texts.commission_wait}}</div>
        <div class="right">{{priceData.member.commission_wait}} {{priceData.thisset.texts.yuan}}</div>
      </div>
      <div class="listItem">
        <div class="left"><img src="/static/img/suo.png">{{priceData.thisset.texts.commission_lock}}</div>
        <div class="right">{{priceData.member.commission_lock}} {{priceData.thisset.texts.yuan}}</div>
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
  export default {
    data(){
      return {

      }
    },
    computed:{
      priceData(){
        return this.$store.state.priceData
      }
    },
    methods:{
      back:function () {
        this.$router.go(-1)
      },
      tixian(){
        this.$store.dispatch({
          type:'tixian',
          params:{
            mid:config.mid,
            openid:localStorage.getItem('openid'),
            t:config.t,
          }
        })
      }
    },
    beforeCreate(){
      this.$store.dispatch({
        type:'resPrice',
      })
    }
  }
</script>
<style>
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
