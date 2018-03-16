<template>
  <div id="yongDetail">
    <yd-navbar title="佣金明细">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon @click.native="back"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <p class="leiji"><span>累计佣金</span><span>+ {{yongDetail.member.commission_total?yongDetail.member.commission_total:0}} 元</span></p>
    <div class="orderNav">
      <span :class="{curOrderNav:curSel==''}" @click="lookYongDetail('所有')">所有</span>
      <span :class="{curOrderNav:curSel=='0'}" @click="lookYongDetail('待付款')">待付款</span>
      <span :class="{curOrderNav:curSel=='1'}"  @click="lookYongDetail('已付款')">已付款</span>
      <span :class="{curOrderNav:curSel=='3'}" @click="lookYongDetail('已完成')">已完成</span>
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
  </div>
</template>
<script>
  import config from '../../myConfig'
  export default {
    data(){
      return {
        curSel:''
      }
    },
    computed:{
      yongDetail(){
        return this.$store.state.yongDetail
      }
    },
    methods:{
      lookYongDetail(curSelText){
        curSelText=='所有'?this.curSel='':(curSelText=='待付款'?this.curSel='0':(curSelText=='已付款'?this.curSel='1':(curSelText=='已完成'?this.curSel='3':'')))
        this.$store.dispatch({
          type:'resYongDetail',
          params:{
            mid:config.mid,
            openid:localStorage.getItem('openid'),
            t:config.t,
            i:config.i,
            uniacid:config.uniacid,
            status:this.curSel
          }
        })
      },
      back:function () {
        this.$router.go(-1)
      }
    },
    beforeCreate(){
      this.$store.dispatch({
        type:'resYongDetail',
        params:{
          mid:config.mid,
          openid:localStorage.getItem('openid'),
          t:config.t,
          i:config.i,
          status:''
        }
      })
    }
  }
</script>
<style>
  #yongDetail .orderNav{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    background: #fff;
    height:1.5625rem;
    line-height:1.5625rem;
  }
  #yongDetail .curOrderNav{
    color:red;
    border-bottom:2px solid red;
  }
  #yongDetail .orderNav span{
    display: block;
    height:100%;
    flex:0 0 25%;
    text-align: center;
  }
  #yongDetail .leiji{
    padding:0.47rem;
    background: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
  }
  #yongDetail .yd-tab-nav .yd-tab-active:before {
    width: 100%;
    margin-left: -50%;
  }
  #yongDetail .yd-tab-nav-item:not(:last-child):after {
    display: none;
  }
  #yongDetail .yd-tab-nav a{
    font-size:0.4375rem;
  }
  #yongDetail .yd-tab-panel{
    padding-left:0.3125rem;
  }
  #yongDetail .item{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    padding:0.46875rem;
    border-bottom:1px solid #eee;
    line-height:0.625rem;
  }
  #yongDetail .item:last-child{
    border-bottom:none;
  }
  #yongDetail .item .left{
    text-align: left;
  }
  #yongDetail .item .left span{
    color:#aaa;
  }
  #yongDetail .item .right{

  }
  #yongDetail .item .right span{
    display: inline-block;
    width:1.5625rem;
  }
  #yongDetail .item .right img{
    width:0.625rem;
    height:0.625rem;
  }
</style>
