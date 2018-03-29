<template>
  <yd-layout title="会员等级" link="/shopIndex/vip" id="vipGrad">
    <div class="tab">
      <div @click="changeCurGrade('普通会员')">
        <img src="https://authorize.ylhhyk.com/Template/HongYi/new/images/member-normal.png" alt="" />普通会员
      </div>
      <div @click="changeCurGrade('创业会员')">
        <img src="https://authorize.ylhhyk.com/Template/HongYi/new/images/member-gold.png" alt="" />创业会员
      </div>
      <div @click="changeCurGrade('创业商家/企业')">
        <img src="https://authorize.ylhhyk.com/Template/HongYi/new/images/member-platinum.png" alt="" />创业商家/企业
      </div>
    </div>
    <div class="triangle">
      <div><span v-if="curGrad==1"></span></div>
      <div><span v-if="curGrad==2"></span></div>
      <div><span v-if="curGrad==3"></span></div>
    </div>
    <div class="tabPage"  v-if="curGrad==1">
      <h6>普通会员权益</h6>
      <p>普通会员年费￥18（返还等额积分）</p>
      <p>可推荐本等级会员</p>
      <p>有E卡使用权限</p>
      <p>有云联惠收益，没有E卡收益</p>
      <p>奖励（无）</p>
      <p>可升级为创业会员/创业商家/企业和各级别合伙人</p>
      <p>升级后，可享受相应级别的奖励</p>
    </div>
    <div class="tabPage" v-if="curGrad==2">
      <h6>创业会员权益</h6>
      <p>创业会员年费￥999.00（返还等额积分）</p>
      <p>有推荐所有会员的权利，可以推荐各级合伙人，同时可以升级为合伙人</p>
      <p>有E卡使用权限，享受消费积分返还</p>
      <h6>奖励</h6>
      <p>被推荐人会员费利润的30%(一级推荐奖励20%，二级推荐奖励10%)</p>
      <p>创业会员可以参加培训学习，可以申请加入合伙人团队</p>
      <p>续费收入等于推荐奖</p>
      <p>业务提成8%</p>
      <div class="shengji">立即升级</div>
    </div>
    <div class="tabPage" v-if="curGrad==3">
      <h6>联盟商家/企业权益</h6>
      <p>创业商家/企业年费￥1999.00（返还等额积分）</p>
      <p>有推荐所有会员的权利,与创业会员权益一样,但可以升级成为合伙人</p>
      <p>有E卡使用权限，享受消费积分返还</p>
      <h6>奖励</h6>
      <p> 被推荐人会员费利润的30%(一级推荐奖励20%，二级推荐奖励10%)</p>
      <p>创业会员可以参加培训学习，可以申请加入合伙人团队</p>
      <p>推荐各级合伙人奖励10%</p>
      <p>续费收入等于推荐奖</p>
      <p>业务提成8%</p>
      <p>有E淘功能（网店功能）</p>
      <p>有外卖板块功能使用权，增值服务（可选）</p>
      <div class="shengji">立即升级</div>
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
  #vipGrad{
    position: fixed;
    top:0;left:0;right:0;bottom:0;
    background: #fff;
  }
  #vipGrad .tab{
    background: #f5f5f5;
  }
  #vipGrad .tab,.triangle{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    padding:0.625rem 0;
    color:orange;
    font-size:0.375rem;
  }
  #vipGrad .tab>div,.triangle>div{
    flex: 0 0 33%;
  }
  #vipGrad .tab img{
    width:1.25rem;
    height:1.25rem;
    display: block;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 5px;
  }
  #vipGrad .triangle{
    padding-bottom:0px;
  }
  #vipGrad .triangle>div{
    position: relative;
  }
  #vipGrad .triangle span{
    border:0.3125rem solid transparent;
    border-top:0.41rem solid #f5f5f5;
    position: absolute;
    top: -0.625rem;
    left: 42%;
  }
  #vipGrad .tabPage{
    text-align: left;
    padding-left:0.9375rem;
    line-height:0.78rem;
    padding-bottom: 0.625rem;
  }
  #vipGrad .tabPage h6{
    margin-left:-20px;
    margin-top:10px;
  }
  #vipGrad .tabPage p{
    font-size:0.375rem;
  }
  #vipGrad .tabPage p:before{
    display: block;
    content:'';
    width:0.3125rem;
    height:0.3125rem;
    background:rgba(0,0,0,0.5);
    border-radius: 50%;
    position: absolute;
    left:0.3125rem;
    margin-top:5px;
  }
  #vipGrad .tabPage .shengji{
    width:2.5rem;
    height:0.9375rem;
    line-height:0.9375rem;
    text-align: center;
    border-radius: 5px;
    background: orange;
    color:#fff;
    margin:0 auto;
    margin-top:0.9375rem;

    color:#fff;
    font-size:0.41rem;
  }
</style>
