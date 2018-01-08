<template>
  <yd-layout title="使用说明" link="/shopIndex/vip" id="useInstruct">
    <div class="content">
      <h6>一、咕咕咕咕过过过过过过</h6>
      <p>1.通过会员管理软件</p>
      <p>2.可以实施各类会员制营销</p>
      <p>3.额鹅鹅鹅鹅鹅鹅鹅鹅鹅</p>
      <h6>一、咕咕咕咕过过过过过过</h6>
      <p>1.通过会员管理软件</p>
      <p>2.可以实施各类会员制营销</p>
      <p>3.额鹅鹅鹅鹅鹅鹅鹅鹅鹅</p>
      <h6>一、咕咕咕咕过过过过过过</h6>
      <p>1.通过会员管理软件</p>
      <p>2.可以实施各类会员制营销</p>
      <p>3.额鹅鹅鹅鹅鹅鹅鹅鹅鹅</p>
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
    padding:0 15px 15px 15px;
  }
  #useInstruct .content h6{
    margin:15px 0 10px 0;
  }
  #useInstruct .content p{
    font-size:12px;
    color:#737173;
    line-height: 20px;
  }
</style>
