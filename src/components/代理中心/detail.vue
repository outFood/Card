<template>
  <yd-layout title="分红明细" link="/agentIndex" id="detail">
    <p class="leiji"><span>累计分红</span><span>+0.00元</span></p>
    <div class="detailNav">
      <span :class="{curText:curText=='累计分红'}" @click="resFenHong('累计分红')">全部</span>
      <span :class="{curText:curText=='待结算分红'}" @click="resFenHong('待结算分红')">待结算分红</span>
      <span :class="{curText:curText=='已结算分红'}"  @click="resFenHong('已结算分红')">已结算分红</span>
    </div>
    <div class="list" >
      <div class="item">
        <div class="left">
          <p>FSEGFDHTGFTHJY(一级)</p>
          <span>2017-12-25 10:45</span>
        </div>
        <div class="right">
          <span>+0.00已完成</span> <img src="/static/img/more.png" alt="">
        </div>
      </div>
    </div>
    <div class="noData">
      <img src="/static/img/Commission_sky.png" alt="">暂时没有任何数据
    </div>
    <footers></footers>
  </yd-layout>
</template>
<script>
  import config from '../../myConfig'
  export default {
    computed:{
      curText(){
        return this.$store.state.curText
      },
      fenHongData(){
        return this.$store.state.fenHongData
      }
    },
    methods:{
      resFenHong(curText){
        console.log(status)
        this.$store.dispatch({
          type:'resFenHong',
          params:{
            page:1,
            pagesize:10,
            uniacid:config.uniacid,
            t:config.t,
            openid:localStorage.getItem('openid'),
            status:curText=='累计分红'?'':(curText=='待结算分红'?2:1)
          },
          curText:curText
        })
      }
    }
  }
</script>
<style>
  #detail{

  }
  #detail .leiji{
    padding:0.46875rem;
    background: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
  }
  #detail .detailNav{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    background: #fff;
    height:1.5625rem;
    line-height:1.5625rem;
    border-bottom: 1px solid #eee;
  }
  #detail .detailNav .curText{
    color:red;
    border-bottom:2px solid red;
  }
  #detail .detailNav span{
    display: block;
    height:100%;
    flex:0 0 33.3%;
    text-align: center;
  }
  #detail .list .item{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    padding:0.46875rem;
    border-bottom:1px solid #eee;
    line-height:0.625rem;
    background: #fff;
  }
  #detail .list .item:last-child{
    border-bottom:none;
  }
  #detail .list .item .left{
    text-align: left;
  }
  #detail .list .item .left span{
    color:#aaa;
  }
  #detail .list .item .right{

  }
  #detail .list .item .right span{
    display: inline-block;
    width:1.5625rem;
  }
  #detail .list .item .right img{
    width:0.625rem;
    height:0.625rem;
  }
  #detail .noData{
    color:#bfbfbf
  }
  #detail .noData img{
    display: block;
    width:1.5625rem;
    height:1.5625rem;
    margin:0 auto;
    margin-top:3.125rem;
    margin-bottom:0.3125rem

   }

</style>
