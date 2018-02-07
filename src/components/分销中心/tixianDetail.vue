<template>
  <yd-layout title="提现明細(0)" link="/distributIndex" id="tixianDetail">
    <p class="leiji"><span>预计佣金</span><span>+{{tixianData.commissioncount}}元</span></p>
    <div class="orderNav">
      <span  :class="{curOrderNav:curSel==''}" @click="lookTiXian('所有')">所有</span>
      <span  :class="{curOrderNav:curSel==1}" @click="lookTiXian('待审核')">待审核</span>
      <span  :class="{curOrderNav:curSel==2}" @click="lookTiXian('待打款')">待打款</span>
      <span  :class="{curOrderNav:curSel==3}" @click="lookTiXian('已打款')">已打款</span>
      <span  :class="{curOrderNav:curSel==-1}" @click="lookTiXian('无效')">无效</span>
      <span  :class="{curOrderNav:curSel==-2}" @click="lookTiXian('驳回')">驳回</span>
    </div>
    <div class="item">
      <div class="left">
        <p>FSEGFDHTGFTHJY(一级)</p>
        <span>2017-12-25 10:45</span>
      </div>
      <div class="right">
        <span>+0.00已完成</span> <img src="/static/img/more.png" alt="">
      </div>
    </div>
    <footers></footers>
  </yd-layout>
</template>
<script>
  import config from '../../myConfig'
  export default {
    data(){
      return{
        curSel:''
      }
    },
    computed:{
      tixianData(){
        return this.$store.state.tixianData
      }
    },
    methods:{
      lookTiXian(curSelText){
        if(curSelText=='所有'){
          this.curSel='';
        }else if(curSelText=='待审核'){
          this.curSel=1;
        }else if(curSelText=='待打款'){
          this.curSel=2;
        }else if(curSelText=='已打款'){
          this.curSel=3;
        }else if(curSelText=='无效'){
          this.curSel=-1;
        }else{
          this.curSel=-2;
        }
        this.$store.dispatch({
          type:'resTiXian',
          params:{
            mid:config.mid,
            openid:localStorage.getItem('openid'),
            t:config.t,
            status:this.curSel
          }
        })
      }
    },
    mounted(){
      console.log(this.tixianData)
    },
    beforeCreate(){
      this.$store.dispatch({
        type:'resTiXian',
        params:{
          mid:config.mid,
          openid:localStorage.getItem('openid'),
          t:config.t,
          status:''
        }
      })
    }
  }
</script>
<style>
  #tixianDetail .orderNav{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    background: #fff;
    height:1.5625rem;
    line-height:1.5625rem;
  }
  #tixianDetail .curOrderNav{
    color:red;
    border-bottom:2px solid red;
  }
  #tixianDetail .orderNav span{
    display: block;
    height:100%;
    flex:0 0 16.66%;
    text-align: center;
  }
  #tixianDetail .leiji{
    padding:0.47rem;
    background: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
  }
  #tixianDetail .yd-tab-nav .yd-tab-active:before {
    width: 100%;
    margin-left: -50%;
  }
  #tixianDetail .yd-tab-nav-item:not(:last-child):after {
    display: none;
  }
  #tixianDetail .yd-tab-nav a{
    font-size:0.4375rem;
  }
  #tixianDetail .yd-tab-panel{
    padding-left:0.3125rem;
  }
  #tixianDetail .item{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    padding:0.46875rem 0.46875rem 0.46875rem 0;
    border-bottom:1px solid #eee;
    line-height:0.625rem;
  }
  #tixianDetail .item:last-child{
    border-bottom:none;
  }
  #tixianDetail .item .left{
    text-align: left;
  }
  #tixianDetail .item .left span{
    color:#aaa;
  }
  #tixianDetail .item .right{

  }
  #tixianDetail .item .right span{
    display: inline-block;
    width:1.5625rem;
  }
  #tixianDetail .item .right img{
    width:0.625rem;
    height:0.625rem;
  }
</style>
