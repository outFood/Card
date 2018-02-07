<template>
  <yd-layout title="会员等级" link="/shopIndex/vip" id="vipGrad">
    <div class="tab">
      <div @click="changeCurGrade('普通会员')">
        <img src="http://static.ydcss.com/uploads/ydui/1.jpg">普通会员
      </div>
      <div @click="changeCurGrade('创业会员')">
        <img src="http://static.ydcss.com/uploads/ydui/1.jpg">创业会员
      </div>
      <div @click="changeCurGrade('创业商家/企业')">
        <img src="http://static.ydcss.com/uploads/ydui/1.jpg">创业商家/企业
      </div>
    </div>
    <div class="triangle">
      <div><span v-if="curGrad==1"></span></div>
      <div><span v-if="curGrad==2"></span></div>
      <div><span v-if="curGrad==3"></span></div>
    </div>
    <div class="tabPage"  v-if="curGrad==1">
      <h6>普通会员权益</h6>
      <p>刚刚灌灌灌灌灌</p>
      <p>嘎嘎嘎嘎嘎嘎嘎嘎嘎灌灌灌灌灌</p>
    </div>
    <div class="tabPage" v-if="curGrad==2">
      <h6>创业会员权益</h6>
      <p>刚刚灌灌灌灌灌</p>
      <p>嘎嘎嘎嘎嘎嘎嘎嘎嘎灌灌灌灌灌</p>
      <div class="shengji">立即升级</div>
    </div>
    <div class="tabPage" v-if="curGrad==3">
      <h6>联盟商家/企业权益</h6>
      <p>刚刚灌灌灌灌灌</p>
      <p>嘎嘎嘎嘎嘎嘎嘎嘎嘎灌灌灌灌灌</p>
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
    left: 40%;
  }
  #vipGrad .tabPage{
    text-align: left;
    padding-left:0.9375rem;
    line-height:0.78rem;
    padding-bottom: 0.625rem;
  }
  #vipGrad .tabPage p{
    font-size:0.375rem;
  }
  #vipGrad .tabPage p:before{
    display: block;
    content:'';
    width:0.3125rem;
    height:0.3125rem;
    background: #f5f5f5;
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
