<template>
  <div id="selPay">
    <yd-navbar title="收银台">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon @click.native="back"></yd-navbar-back-icon>
      </router-link>
      <router-link to="#" slot="right">
        订单
      </router-link>
    </yd-navbar>
    <div class="order">
      <p class="number">
        <span>订单编号</span>
        <span>{{selPay.order.ordersn}}</span>
      </p>
      <p class="price">
        <span>订单金额</span>
        <span>￥{{selPay.order.price}}</span>
      </p>
    </div>
    <p class="notes">
      由于微信支付限额,大额支付请线下转款到中国工商银行3602 1172 0910 0084 647(广州琶州支行) 单位:广州泛达九州网络科技有限公司
    </p>
    <div class="payMethods">
      <div>
        <img src="/static/img/wechat.png" alt="">
        <div>
          <p>微信支付</p>
          <span>微信安全支付</span>
        </div>
        <img src="/static/img/more.png" class="more">
      </div>
      <div>
        <img src="/static/img/alipay.png" alt="">
        <div>
          <p>支付宝支付</p>
          <span>使用支付宝进行支付</span>
        </div>
        <img src="/static/img/more.png" class="more">
      </div>
      <div @click="balancePay">
        <img src="/static/img/balance.png" alt="">
        <div>
          <p>余额支付</p>
          <span>当前约: <i>￥{{selPay.money}}</i></span>
        </div>
        <img src="/static/img/more.png" class="more">
      </div>
    </div>
  </div>
</template>
<script>
  import config from '../../myConfig'
  export default {
    data(){
      return{

      }
    },
    computed:{
      selPay(){
        return this.$store.state.selPay
      }
    },
    methods:{
      balancePay(){
        this.$dialog.confirm({
          mes: '确认要支付吗？',
          opts: () => {
            this.$store.dispatch({
              type:'balancePay',
              params:{
                t:config.t,
                openid:localStorage.getItem('openid'),
                ordersn:this.selPay.order.ordersn
              }
            })
          },
        });

      },
      back:function () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style>
  #selPay{

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
