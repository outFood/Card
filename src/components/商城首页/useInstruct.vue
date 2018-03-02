<template>
  <yd-layout title="使用说明" link="/shopIndex/vip" id="useInstruct">
    <div class="content">
      <h6>一、会员管理系统</h6>
      <p>1.通过会员管理软件，可以实施各类会员制营销，吸引新顾客消费，防止老顾客流失，加强竞争力；</p>
      <p>2.各类服务计划和短信服务的利用，可以有效进行客户关怀，提高客户服务满意度，促进企业和顾客之间的沟通。</p>
      <p>3.支付及积分系统：</p>
      <p>3.1.整合微信、支付宝、积分、现金、储值等多种支付方式</p>
      <p>3.2.复合式积分运算机制，可完成多种形式积分统筹结算；</p>
      <p>4.积分即时结算，且不分行业地域业态，方便快捷。</p>
      <h6>二、会员推荐系统</h6>
      <p>1.多级会员推荐权限设置；</p>
      <p>2.灵活设置会员推荐奖励机制；</p>
      <p>3.多级联动推荐人返还、返现、返积分功能。</p>
      <h6>三、数据分析系统</h6>
      <p>系统提供会员资料、会员消费记录、会员积分、储值、计次、折扣管理、电子优惠币、服务计划、短信服务及各类综合统计报表。通过各类报表分析，有利于企业分析市场情况和了解顾客消费习惯，进而有针对性的对销售进行调整，甚至对顾客进行个性化服务。</p>
      <h6>四、即时聊天功能</h6>
      <p>解决了会员与会员，商家与会员，商家与商家之间的即时沟通，建群等问题。</p>
      <h6>五、客服功能</h6>
      <p>解决了消费者询单，咨询，物流查询等问题，提高成交率，促成交易。</p>
    </div>
  </yd-layout>
</template>
<script>
  export default {
    data(){
      return{
        curGrad:1
      }
    },
    methods:{
      changeCurGrade(txt){
        if(txt=='普通会员'){
          this.curGrad=1
        }else if(txt=='创业会员'){
          this.curGrad=2
        }else{
          this.curGrad=3
        }
      }
    }
  }
</script>
<style>
  #useInstruct{
    position: fixed;
    top:0;left:0;right:0;bottom:0;
    background: #fff;
    text-align: left;
  }
  #useInstruct .content{
    padding:0 0.46875rem 0.46875rem 0.46875rem;
  }
  #useInstruct .content h6{
    margin:0.46875rem 0 0.3125rem 0;
  }
  #useInstruct .content p{
    font-size:0.375rem;
    color:#737173;
    line-height:0.625rem;
  }
</style>
