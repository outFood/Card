<template>
  <div id="price">
    <headers title="代理佣金"></headers>
    <yd-flexbox class="head">
      <yd-flexbox-item>
        <p>累计佣金(元)</p>
        {{agentPriceData.commission_total}}
      </yd-flexbox-item>
    </yd-flexbox>
    <div class="body">
      <div class="listItem">
        <div class="left"><img :src="require('@/assets/price_block.png')">可提现佣金</div>
        <div class="right">{{agentPriceData.abonus_ok?agentPriceData.abonus_ok:0.00}} 元</div>
      </div>
      <div class="listItem">
        <div class="left"><img :src="require('@/assets/price_block.png')">已申佣金</div>
        <div class="right">{{agentPriceData.abonus_apply?agentPriceData.abonus_apply:0.00}} 元</div>
      </div>
      <div class="listItem">
        <div class="left"><img :src="require('@/assets/price_block.png')">待打款佣金</div>
        <div class="right">{{agentPriceData.abonus_check?agentPriceData.abonus_check:0.00}} 元</div>
      </div>
      <div class="listItem">
        <div class="left"><img :src="require('@/assets/price_block.png')">无效佣金</div>
        <div class="right">{{agentPriceData.abonus_fail?agentPriceData.abonus_fail:0.00}} 元</div>
      </div>
      <div class="listItem">
        <div class="left"><img :src="require('@/assets/price_block.png')">成功提现佣金</div>
        <div class="right">{{agentPriceData.abonus_pa?agentPriceData.abonus_pay:0.00}} 元</div>
      </div>
    </div>
    <yd-accordion>
      <yd-accordion-item title="用户须知">
        <div style="padding: .24rem;">
          <p>卖家确认收货后，立即获得分销佣金,注意：可用佣金满 <i>100元</i>后才能申请提现</p>
        </div>
      </yd-accordion-item>
    </yd-accordion>
    <yd-button size="large" type="disabled" class="woyao">请到分销中心统一提</yd-button>
  </div>
</template>
<script>
  import headers from '@/components/headers'
  export default {
    components:{headers},
    data(){
      return {

      }
    },
    computed:{
      agentPriceData(){
        return this.$store.state.agentPriceData
      },
    },
    methods:{
      back:function () {
        this.$router.go(-1)
      }
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
    font-size:0.44rem;
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
  #price .head>div:nth-child(2) span{
    padding: 2px 5px;
    border: 1px solid #fff;
    border-radius: 0.3125rem;
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
  #price .yd-accordion-title{
    font-size: .4rem;
  }
  #price .woyao{
    width:90%;
    margin:0 auto;
    color:red;
  }
</style>
