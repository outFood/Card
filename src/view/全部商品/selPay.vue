<template>
  <div id="selPay">
    <yd-navbar title="收银台">
      <div slot="left" @click="back">
        <yd-navbar-back-icon ></yd-navbar-back-icon>
      </div>
      <div  slot="right" @click="lookOrder('全部')">
        订单
      </div>
    </yd-navbar>
    <div class="order">
      <p class="number">
        <span>订单编号</span>
        <span>{{selPay.order.ordersn}}</span>
      </p>
      <p class="price">
        <span>订单金额</span>
        <span>￥{{selPay.order.oldprice}}</span>
      </p>
    </div>
    <p class="notes">
      由于微信支付限额,大额支付请线下转款到中国工商银行3602 1172 0910 0084 647(广州琶州支行) 单位:广州泛达九州网络科技有限公司
    </p>
    <div class="payMethods">
      <div @click="weixinPay">
        <img :src="require('@/assets/wechat.png')" alt="">
        <div>
          <p>微信支付</p>
          <span>微信安全支付</span>
        </div>
        <img :src="require('@/assets/more.png')" class="more">
      </div>
      <div>
        <img :src="require('@/assets/alipay.png')"alt="">
        <div>
          <p>支付宝支付</p>
          <span>使用支付宝进行支付</span>
        </div>
        <img :src="require('@/assets/more.png')" class="more">
      </div>
      <div @click="balancePay">
        <img :src="require('@/assets/balance.png')" alt="">
        <div>
          <p>余额支付</p>
          <span>当前约: <i>￥{{selPay.money}}</i></span>
        </div>
        <img :src="require('@/assets/more.png')" class="more">
      </div>
    </div>
  </div>
</template>
<script>
  var wx = require('weixin-js-sdk');
  import router from '@/router'
  import config from '../../myConfig'
  export default {
    data(){
      return{

      }
    },
    computed:{
      selPay(){
        return this.$store.state.selPay
      },
      payMessage(){
        return this.$store.state.payMessage
      }
    },
    methods:{
      weixinPay(){
        wx.config({
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: 'wx14d70d4823134eb6', // 必填，公众号的唯一标识
          timestamp:'' , // 必填，生成签名的时间戳
          nonceStr: '', // 必填，生成签名的随机串
          signature: '',// 必填，签名，见附录1
          jsApiList: [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        wx.ready(function(){

        });
        wx.error(function(res){

        });
      },
      balancePay(){
        this.$dialog.confirm({
          mes: '确认要支付吗？',
          opts: () => {
            this.$store.dispatch({
              type:'balancePay',
              params:{
                t:config.t,
                i:config.i,
                uniacid:config.uniacid,
                mid:localStorage.getItem('userid'),
                openid:localStorage.getItem('openid'),
                ordersn:this.selPay.order.ordersn
              }
            })
            setTimeout(()=>{
              if(this.payMessage.status==0){
                this.$dialog.confirm({
                  title: '提示',
                  mes: this.payMessage.result.msg,
                  opts: () => {
                    router.push({path: '/vipIndex/recharge'})
                  }
                });
              }
            },500)
          },
        });
      },
      lookOrder(text){
        this.$store.dispatch({
          type:'resMyOrder',
          text:text
        })
      },
      back:function () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style>
  #selPay header {
    height: 1.5rem !important;
    align-items: center;
  }
  #selPay header .yd-navbar-center-title{
    font-size:.5rem !important;
  }
  #selPay .yd-back-icon:before, .yd-next-icon:before {
    font-size: .6rem;
  }
  #selPay .order{
    padding:0 10px;
    background: #fff;
  }
  #selPay .order p{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    padding:15px 0;
  }
  #selPay .order .number{
    border-bottom: 1px solid #eaeaea;
  }
  #selPay .order .price span:nth-child(2){
    color:red
  }
  #selPay .notes{
    font-size:12px;
    text-align: left;
    padding:10px;
  }
  #selPay .payMethods{
    padding:0 10px;
    background: #fff;
  }
  #selPay .payMethods>div{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:10px 0;
    border-bottom: 1px solid #eaeaea;
  }
  #selPay .payMethods>div div{
    flex: 0 0 70%;
    text-align: left;
    border-left:1px solid #eaeaea;
    padding-left:10px;
  }
  #selPay .payMethods span{
    color:#d5d5d5;
    font-size: 12px;
  }
  #selPay .payMethods i{
    color:red;
  }
  #selPay .payMethods>div img:nth-child(1){
    width:40px;
    height:40px;
  }
  #selPay .payMethods>div .more{
    width:20px;
    height:20px;
  }
</style>
