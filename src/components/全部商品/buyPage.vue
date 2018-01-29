<template>
  <yd-layout title="确认下单" link="/sortIndex/detail" id="buyPage">
    <router-link to="/vipIndex/myAddress"  class="address" v-if="buyPageData.result.address!=false&!curSelAddress.realname">
      <img src="/static/img/position.png" alt="">
      <div>
        <h6>收货人：{{buyPageData.result.address.realname}}&nbsp;&nbsp;&nbsp;&nbsp;{{buyPageData.result.address.mobile}}</h6>
        <p>{{buyPageData.result.address.province}}  {{buyPageData.result.address.city}} {{buyPageData.result.address.area}} {{buyPageData.result.address.address}}</p>
      </div>
      <img src="/static/img/more.png" alt="">
    </router-link>
    <router-link to="/vipIndex/myAddress"  class="address" v-else-if="curSelAddress.realname">
      <img src="/static/img/position.png" alt="">
      <div>
        <h6>收货人：{{curSelAddress.realname}}&nbsp;&nbsp;&nbsp;&nbsp;{{curSelAddress.mobile}}</h6>
        <p>{{curSelAddress.province}}  {{curSelAddress.city}} {{curSelAddress.area}} {{curSelAddress.address}}</p>
      </div>
      <img src="/static/img/more.png" alt="">
    </router-link>
    <router-link to="/vipIndex/myAddress" class="noAddress" v-else><span>请选择收货地址</span><img src="/static/img/more.png" alt=""></router-link>
    <div class="list">
      <div class="item">
        <div class="top">
          <p><img src="/static/img/shop_black.png" alt=""> {{buyPageData.result.goods_list[0].shopname == null ? '官方演示' : buyPageData.result.goods_list[0].shopname }}</p>
          <div class="shopInfo">
            <img :src="prefix+buyPageData.result.thumb">
            <h6>{{buyPageData.result.title}} <p class="optiontitle">{{buyPageData.result.optiontitle}}</p></h6>
            <div><h6>￥{{buyPageData.result.marketprice}}</h6><yd-spinner v-model="total"></yd-spinner></div>
          </div>
        </div>
        <div class="bottom">共 <span>{{total}}</span> 件商品，共计：<span>{{buyPageData.result.marketprice*total}}元</span></div>
      </div>
    </div>
    <yd-cell-group title="买家留言" class="leaveWord">
      <yd-cell-item>
        <yd-textarea slot="right" placeholder="50字以内（选填）" maxlength="50" v-model="leavWord"></yd-textarea>
      </yd-cell-item>
    </yd-cell-group>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">商品小计</span>
        <span slot="right">￥{{buyPageData.result.marketprice}}</span>
      </yd-cell-item>
      <!--<yd-cell-item>-->
        <!--<span slot="left">重复购买优惠</span>-->
        <!--<span slot="right">￥{{buyPageData.result.marketprice}}</span>-->
      <!--</yd-cell-item>-->
      <!--<yd-cell-item>-->
        <!--<span slot="left">任务活动优惠</span>-->
        <!--<span slot="right">￥{{buyPageData.result.marketprice}}</span>-->
      <!--</yd-cell-item>-->
      <!--<yd-cell-item>-->
        <!--<span slot="left">会员优惠</span>-->
        <!--<span slot="right">￥{{buyPageData.result.marketprice}}</span>-->
      <!--</yd-cell-item>-->
      <!--<yd-cell-item>-->
        <!--<span slot="left">促销优惠</span>-->
        <!--<span slot="right">￥{{buyPageData.result.marketprice}}</span>-->
      <!--</yd-cell-item>-->
      <!--<yd-cell-item>-->
        <!--<span slot="left">商城单笔满0元立减</span>-->
        <!--<span slot="right">￥{{buyPageData.result.marketprice}}</span>-->
      <!--</yd-cell-item>-->
      <!--<yd-cell-item>-->
        <!--<span slot="left">商户单笔满0元立减</span>-->
        <!--<span slot="right">￥{{buyPageData.result.marketprice}}</span>-->
      <!--</yd-cell-item>-->
      <!--<yd-cell-item>-->
        <!--<span slot="left">秒杀优惠</span>-->
        <!--<span slot="right">￥{{buyPageData.result.marketprice}}</span>-->
      <!--</yd-cell-item>-->
      <yd-cell-item>
        <span slot="left">运费</span>
        <span slot="right">￥{{buyPageData.result.dispatchprice}}</span>
      </yd-cell-item>
    </yd-cell-group>
    <div class="toPay">
      <div class="left">需付：<span>￥{{buyPageData.result.marketprice*total+parseInt(buyPageData.result.dispatchprice)}}</span></div>
      <router-link to="#" class="right" @click.native="createOrder">立即支付</router-link>
    </div>
  </yd-layout>
</template>
<style>
  #buyPage header{
    height:1.3rem !important;
    align-items: center;
  }
  #buyPage .address{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:10px;
    background:#fff;
    text-align: left;
    margin-bottom:10px;
  }
  #buyPage .address p{
    color:#5c5c5c;
  }
  #buyPage .address img{
    width:15px;
    height:15px;
  }
  #buyPage .noAddress{
    background: #fff;
    padding:10px;
  }
  #buyPage .noAddress{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #buyPage .noAddress img{
    width:15px;
    height:15px;
  }
  #buyPage .item{
    background: #fff;
    margin-top:10px;
    font-size:12px;
    padding:10px;
  }
  #buyPage .item .top>p{
    text-align: left;
    margin-bottom:10px;
  }
  #buyPage .item .top>p img{
    width:20px;
    height:20px;
    vertical-align: middle;
  }
  #buyPage .item .top .shopInfo{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
  }
  #buyPage .item .top .shopInfo img{
    width:100px;
    height:80px;
  }
  #buyPage .item .top .shopInfo h6{
    text-align: left !important;
    margin-left:10px;
  }
  #buyPage .item .top .shopInfo  .optiontitle{
    font-weight: normal;
  }
  #buyPage .item .top .shopInfo span{
    display: block;
    font-size:12px;
    color:#aaa;
    margin-top:10px;
    text-align: right;
  }
  #buyPage .item .bottom{
    text-align: right;
    font-size: 12px;
  }
  #buyPage .item .bottom span{
    color:#e4393c;
  }
  #buyPage .leaveWord{
    margin-top:10px;
  }
  #buyPage .toPay{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    background:#fff;
    position: fixed;
    bottom: 0;
    left:0;
    height:50px;
    line-height: 50px;
    z-index: 20;
  }
  #buyPage .toPay .left{
    flex:0 0 60%;
    height:100%;
    text-align: right;
    padding-right: 10px;
  }
  #buyPage .toPay .left span{
    color:#e4393c
  }
  #buyPage .toPay .right{
    flex:0 0 40%;
    background: #e4393c;
    color:#fff;
    height:100%;
  }
</style>
<script>
  export default {
    data(){
      return {
        buyNumber:'1',
        leavWord:''
      }
    },
    computed:{
      buyPageData(){
        return this.$store.state.buyPageData
      },
      curSelAddress(){
        return this.$store.state.curSelAddress
      },
      total:{
        get(){
          return this.$store.state.buyPageData.result.total
        },
        set(newValue){
          this.$store.state.buyPageData.result.total=newValue
        }
      },
      prefix(){
        return this.$store.state.prefix
      }
    },
    methods:{
      createOrder(){
        this.$store.dispatch({
          type:'createOrder',
          params:{

          }
        })
      }
    }
  }
</script>
