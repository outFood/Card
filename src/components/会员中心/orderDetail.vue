<template>
  <div id="orderDetail">
    <yd-navbar title="订单详情">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon @click.native="back"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div class="alreadyPay">
      <p>
        <span v-if="orderDetail.order.status==2">买家已付款</span>
        <span v-if="orderDetail.order.status==0">待付款</span>
        <span v-if="orderDetail.order.status==3">交易完成</span>
      </p>
      <span>订单金额:￥{{orderDetail.order.price}}</span>
    </div>
    <div class="address">
      <img src="/static/img/position-o.png" alt="">
      <div class="right">
        <p>{{orderDetail.address.realname}} {{orderDetail.address.mobile}}</p>
        <span>{{orderDetail.address.province}} {{orderDetail.address.city}} {{orderDetail.address.area}} {{orderDetail.address.address}}</span>
      </div>
    </div>
    <div class="item">
        <div class="middle">
          <p><img src="/static/img/shop_black.png" alt="">E卡系统</p>
          <div class="shopInfo" v-for="(item,key) in orderDetail.goods" :key="key">
            <img :src="item.thumb">
            <div class="mid"><h6>{{item.title}}</h6><span>{{item.optiontitle}}</span></div>
            <div><h6>￥{{item.price}}</h6><span>X{{item.total}}</span></div>
          </div>
        </div>
      </div>
    <div class="orderInfo1">
      <p><span>商品小计</span>￥{{orderDetail.order.goodsprice}}</p>
      <p><span>运费</span>{{orderDetail.order.dispatchprice}}</p>
      <div v-if="!orderDetail.order.ispackage">
        <p v-if="orderDetail.order.deductenough > 0"><span>满额立减</span>-￥ {{orderDetail.order.deductenough}}</p>
        <p v-if="orderDetail.order.couponprice > 0"><span>优惠券优惠</span>-￥ {{orderDetail.order.couponprice}}</p>
        <p v-if="orderDetail.order.buyagainprice > 0"><span>重复购买优惠</span>-￥ {{orderDetail.order.buyagainprice}}</p>
        <p v-if="orderDetail.order.discountprice > 0"><span>会员优惠</span>-￥ {{orderDetail.order.discountprice}}</p>
        <p v-if="orderDetail.order.isdiscountprice > 0"><span>促销优惠</span>-￥ {{orderDetail.order.isdiscountprice}}</p>
        <p v-if="orderDetail.order.deductprice > 0"><span>{{orderDetail.shopset.trade.credittext}}抵扣</span>-￥ {{orderDetail.order.deductprice}}</p>
        <p v-if="orderDetail.order.deductcredit2 > 0"><span>{{orderDetail.shopset.trade.moneytext}}抵扣</span>-￥ {{orderDetail.order.deductcredit2}}</p>
        <p v-if="orderDetail.order.seckilldiscountprice > 0"><span>秒杀优惠</span>-￥ {{orderDetail.order.seckilldiscountprice}}</p>
      </div>
      <p><span>实付费(含运费)</span><i>{{orderDetail.order.price}}</i></p>
    </div>
    <div class="orderInfo2">
      <p>订单编号    {{orderDetail.order.ordersn}}</p>
      <p>创建时间    {{orderDetail.order.createtime}}</p>
      <p>支付时间    {{orderDetail.order.paytime}}</p>
    </div>
    <div class="foot">
      <div v-if="orderDetail.order.userdeleted == 0">
        <yd-actionsheet :items="myItems1" v-model="isCancelOrder" cancel="取消"></yd-actionsheet>
        <span v-if="orderDetail.order.status == 0" @click="cancelOrder(orderDetail.order.id)" size="large" class="cancelOrder">取消订单</span>
        <span v-if="orderDetail.order.status == 0&&orderDetail.order.paytype != 3" @click="nowPay(orderDetail.order.id)">支付订单</span>
        <span v-if="orderDetail.order.canverify && orderDetail.order.status != -1 && orderDetail.order.status != 0">{{orderDetail.order.dispatchtype == 1 ? '我要取货' : '我要使用'}}</span>
        <span v-if="orderDetail.order.status == 3 || orderDetail.order.status == -1" @click="delOrder(orderDetail.order.id)">删除订单</span>
        <span v-if="orderDetail.order.status == 3 && orderDetail.order.iscomment == 1">追加评价</span>
        <span v-if="orderDetail.order.status == 3 && orderDetail.order.iscomment == 0" @click="evaluate(orderDetail.order.id)">评价</span>
        <span v-if="orderDetail.order.status > 1 && orderDetail.order.addressid > 0" @click="logistics(orderDetail.order.expresscom,orderDetail.order.expresssn)">查看物流</span>
        <span v-if="orderDetail.order.status == 2"  @click="sureGet(orderDetail.order.id)">确认收货</span>
        <span v-if="orderDetail.order.canrefund">{{orderDetail.order.refundstate > 0 ? '查看' : ''}}{{orderDetail.order.status == 1 ? '申请退款' : '申请售后'}}{{orderDetail.order.refundstate > 0 ? '进度' : ''}}</span>
        <span v-if="orderDetail.order.refundstate > 0"  style="overflow:visible;">取消申请</span>
      </div>
      <div v-else>
        <span>彻底删除订单</span>
        <span>恢复订单</span>
      </div>
    </div>
  </div>
</template>
<style>
  #orderDetail .alreadyPay{
    background: orange;
    color:#fff;
    padding:20px;
  }
  #orderDetail .alreadyPay>span{
    font-size:12px;
  }
  #orderDetail .address{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:10px 0;
    background: #fff;
    padding:15px;
  }
  #orderDetail .address img{
    width:20px;height:20px;
  }
  #orderDetail .address .right{
    flex: 0 0 90%;
    text-align: left;
    margin-left:10px;
  }
  #orderDetail .address .right span{
    color:#8A8A8A;
    font-size:12px;
  }
  #orderDetail .item{
    background: #fff;
    margin-top:10px;
    padding:10px;
  }
  #orderDetail .item .shopInfo{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
  }
  #orderDetail .item .middle{
    margin-bottom: 0.3125rem;
  }
  #orderDetail .item .middle>p{
    text-align: left;
    margin-bottom:0.3125rem;
  }
  #orderDetail .item .middle>p img{
    width:20px;
    height:20px;
    vertical-align: middle;
  }
  #orderDetail .item .middle .shopInfo{
    margin:10px 0;
  }
  #orderDetail .item .middle .shopInfo img{
    width:70px;
    height:60px;
  }
  #orderDetail .item .middle .shopInfo span{
    display: block;
    font-size:12px;
    color:#aaa;
    margin-top:10px;
    text-align: right;
  }
  #orderDetail .item .middle .shopInfo .mid span{
    text-align: center !important;
  }
  #orderDetail .orderInfo1{
    padding:10px;
    background: #fff;
    margin:10px 0;
  }
  #orderDetail .orderInfo1 p{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #orderDetail .orderInfo1 p span{
    color:#646464
  }
  #orderDetail .orderInfo1 p i{
    color:red;
  }
  #orderDetail .orderInfo2{
    font-size: 12px;
    color:#989898;
    background: #fff;
    text-align: left;
    padding:0.3125rem;
    line-height: 20px;
  }
  #orderDetail .foot{
    background: #fff;
    padding:15px;
    position: fixed;
    bottom:0;left:0;right:0;
    text-align: right;
  }
  #orderDetail .foot span{
    border:1px solid #5f5f5f;
    padding:3px 5px;border-radius: 0.3125rem;
    margin-left:0.3125rem;
  }
</style>
<script>
  import config from '../../myConfig'
  export default {
    data(){
      return{
        isCancelOrder: false,
        curOrderId:'',
        myItems1: [
          {
            label: '我不想买了',
            callback: () => {
              this.$dialog.confirm({
                mes: '确定要取消该订单吗？',
                opts: () => {
                  this.$store.dispatch({
                    type:'cancelOrder',
                    params:{
                      t:config.t,
                      openid:localStorage.getItem('openid'),
                      id:this.curOrderId,
                      remark:'我不想买了'
                    }
                  })
                },
              });
            }
          },
          {
            label: '信息填写错误，重新拍',
            callback: () => {
              this.$dialog.confirm({
                mes: '确定要取消该订单吗？',
                opts: () => {
                  this.$store.dispatch({
                    type:'cancelOrder',
                    params:{
                      t:config.t,
                      openid:localStorage.getItem('openid'),
                      id:this.curOrderId,
                      remark:'信息填写错误，重新拍'
                    }
                  })
                },
              });
            }
          },
          {
            label: '其他原因',
            callback: () => {
              this.$dialog.confirm({
                mes: '确定要取消该订单吗？',
                opts: () => {
                  this.$store.dispatch({
                    type:'cancelOrder',
                    params:{
                      t:config.t,
                      openid:localStorage.getItem('openid'),
                      id:this.curOrderId,
                      remark:'其他原因'
                    }
                  })
                },
              });
            }
          }
        ]
      }
    },
    computed:{
      orderDetail(){
        return this.$store.state.orderDetail
      }
    },
    methods:{
      back() {
        this.$router.go(-1)
      },
      logistics(expresscom,expresssn){//查看物流
        this.$dialog.confirm({
          mes: '快递公司：'+expresscom+'<br/>快递单号：'+expresssn+'<br/>(可前往对应网站查看物流信息)',
          opts: () => {
          },
        });
      },
      evaluate(oderid){
        console.log(oderid)
        this.$store.dispatch({
          type:'evaluate',
          params:{
            t:config.t,
            openid:localStorage.getItem('openid'),
            i:config.i,
            id:oderid,
//            goodsid:goodsid
          }
        })
      },
      sureGet(id){//
        this.$dialog.confirm({
          mes: '确认已经收到货了吗?',
          opts: () => {
            this.$store.dispatch({
              type:'sureGet',
              params:{
                t:config.t,
                openid:localStorage.getItem('openid'),
                id:id,
              }
            })
          },
        });
      },
      delOrder(id){
        this.$dialog.confirm({
          mes: '确定要删除该订单吗？',
          opts: () => {
            this.$store.dispatch({
              type:'delOrder',
              params:{
                t:config.t,
                openid:localStorage.getItem('openid'),
                id:id,
                userdeleted:1
              }
            })
          },
        });
      },
      nowPay(id){
        this.$store.dispatch({
          type:'nowPay',
          params:{
            id:id,
            t: config.t,
            mid: localStorage.getItem('userid'),
            openid: localStorage.getItem('openid')
          }
        })
      },
      cancelOrder(id){
        console.log(id)
        this.isCancelOrder=true;
        this.curOrderId=id;
        console.log(this.curOrderId)
      },
    }
  }
</script>
