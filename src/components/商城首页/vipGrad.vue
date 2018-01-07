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
  #vipGrad .tab,.triangle{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    padding:20px 0;
    color:orange;
    font-size: 12px;
  }
  #vipGrad .tab>div,.triangle>div{
    flex: 0 0 33%;
  }
  #vipGrad .tab img{
    width:40px;
    height:40px;
    display: block;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 5px;
  }
  #vipGrad .triangle{
    background: #fff;
    padding-bottom:0px;
  }
  #vipGrad .triangle>div{
    position: relative;
  }
  #vipGrad .triangle span{
    border:10px solid transparent;
    border-top:13px solid #f5f5f5;
    position: absolute;
    top: -20px;
    left: 40%;
  }
  #vipGrad .tabPage{
    background: #fff;
    text-align: left;
    padding-left:30px;
    line-height: 25px;
    padding-bottom: 20px;
  }
  #vipGrad .tabPage p{
    font-size: 12px;
  }
  #vipGrad .tabPage p:before{
    display: block;
    content:'';
    width:10px;
    height:10px;
    background: #f5f5f5;
    border-radius: 50%;
    position: absolute;
    left:10px;
    margin-top:5px;
  }
  #vipGrad .tabPage .shengji{
    width:80px;
    height:30px;
    line-height: 30px;
    text-align: center;
    border-radius: 5px;
    background: orange;
    color:#fff;
    margin:20px auto;
    
    color:#fff;
    font-size:13px;
  }
</style>
