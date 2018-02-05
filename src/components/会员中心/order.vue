<template>
  <yd-layout title="我的订单" link="#" id="order">
    <div class="orderNav">
      <span  :class="{curOrderNav:orderStatus==6}"  @click="lookOrder('全部')">全部</span>
      <span  :class="{curOrderNav:orderStatus==0}"  @click="lookOrder('待付款')">待付款</span>
      <span  :class="{curOrderNav:orderStatus==1}"  @click="lookOrder('待发货')">待发货</span>
      <span  :class="{curOrderNav:orderStatus==2}"  @click="lookOrder('待收货')">待收货</span>
      <span  :class="{curOrderNav:orderStatus==4}"  @click="lookOrder('退换货')">退换货</span>
    </div>
    <no-order v-if="myOrder.list.length==0"></no-order>
    <div class="list" v-else>
      <div class="item" v-for="(item,key) in myOrder.list" :key="key">
        <div class="top" @click="resOrderDetail(item.id)">
          <span>订单号：{{item.ordersn}}</span>
          <div>{{item.statusstr}} <img src="/static/img/more.png" alt=""></div>
        </div>
        <div class="middle" v-for="(goods,key) in item.goods" :key="key">
          <p v-if="goods.shopname"><img src="/static/img/shop_black.png" alt="">{{goods.shopname}}</p>
          <div class="shopInfo" v-for="(goodsItem,key) in goods.goods">
            <img :src="goodsItem.thumb">
            <div class="mid"><h6>{{goodsItem.title}}</h6><span v-if="goodsItem.optionid!='0'">{{goodsItem.optiontitle}}</span></div>
            <div><h6>￥{{goodsItem.price}}</h6><span>X{{goodsItem.total}}</span></div>
          </div>
          <div class="bot">共{{goods.goods.length}}件商品，实付：<span>{{item.price}}元</span></div>
        </div>
        <div class="bottom">
          <p v-if="item.userdeleted == 1">
            <span v-if="item.status == 3 || item.status == -1">彻底删除</span>
            <span v-if="item.status == 3">恢复订单</span>
          </p>
          <p v-if="item.userdeleted == 0&&item.status == 0">
            <span v-if="item.paytype != 3" class="nowPay" @click="nowPay(item.id)">支付订单</span>
            <span @click="cancelOrder(item.id)" size="large" class="cancelOrder">取消订单</span>
            <yd-actionsheet :items="myItems1" v-model="isCancelOrder" cancel="取消"></yd-actionsheet>
          </p>
          <p v-if="item.canverify && item.status != -1 && item.status != 0">
            <span>{{item.dispatchtype == 1 ? '我要取货' : '我要使用'}}</span>
          </p>
          <p v-if="item.status == 3 || item.status == -1">
            <span @click="delOrder(item.id)">删除订单</span>
          </p>
          <p v-if="item.status == 3|| item.status != -1">
            <span v-if="item.status == 3 && item.iscomment == 1">追加评价</span>
            <span v-if="item.status == 3 && item.iscomment == 0" @click="evaluate(item.id)">评价</span>
          </p>
          <p v-if="item.status > 1 && item.addressid > 0">
            <span>查看物流</span>
          </p>
          <p v-if="item.status == 2">
            <span @click="sureGet(item.id)">确认收货</span>
          </p>
          <!--<p v-if="item.canrefund">-->
            <!--<span>{{item.status == 1 ? '申请退款' : '申请售后'}}{{item.refundstate > 0 ? '中' : ''}}</span>-->
          <!--</p>-->
          <p>
            <span @click="refound(item.id)">申请退款</span>
            <!--<span>申请退款中</span>-->
            <span>申请售后</span>
            <!--<span>申请售后中</span>-->
          </p>
        </div>
      </div>
    </div>
  </yd-layout>
</template>
<script>
  import router from '@/router'
  import config from '../../myConfig'
  import noOrder from '@/components/会员中心/noOrder'
  export default {
    data() {
      return {
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
      orderStatus(){
        return this.$store.state.orderStatus
      },
      myOrder(){
        return this.$store.state.myOrder
      }
    },
    methods:{
      lookOrder(text){
        this.$store.dispatch({
          type:'resMyOrder',
          text:text,
        })
      },
      cancelOrder(id){
        this.isCancelOrder=true;
        this.curOrderId=id;
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
      resOrderDetail(id){
        router.push({path: '/vipIndex/orderDetail'})
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
      evaluate(id){
        this.$store.dispatch({
          type:'evaluate',
          params:{
            t:config.t,
            openid:localStorage.getItem('openid'),
            i:config.i,
            id:id,
          }
        })
      },
      refound(){

      }
    },
    components:{noOrder}
  }
</script>
<style>
  #order .orderNav{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    background: #fff;
    height:50px;
    line-height: 50px;
  }
  #order .curOrderNav{
    color:red;
    border-bottom:2px solid red;
  }
  #order .orderNav span{
    display: block;
    height:100%;
    flex:0 0 20%;
    text-align: center;
  }
  #order .item{
    background: #fff;
    margin-top:10px;
    font-size:12px;
    padding:10px;
   }
  #order .item .top,.shopInfo{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
  }
  #order .item .top img{
    width:15px;
    height:15px;
    vertical-align: middle;
  }
  #order .item .top div{
    color:orange;
  }
  #order .item .middle{
    border-top:1px solid #eee;
    margin:10px 0;
  }
  #order .item .middle>p{
    text-align: left;
    margin-bottom:10px;
  }
  #order .item .middle>p img{
    width:20px;
    height:20px;
    vertical-align: middle;
  }
  #order .item .middle .shopInfo{
    margin:10px 0;
  }
  #order .item .middle .shopInfo img{
    width:70px;
    height:60px;
  }
  #order .item .middle .shopInfo span{
    display: block;
    font-size:12px;
    color:#aaa;
    margin-top:10px;
    text-align: right;
  }
  #order .item .middle .shopInfo .mid span{
    text-align: center !important;
  }
  #order .item .middle .bot{
    text-align: right;
    font-size: 12px;
    border-top:1px solid #eee;
    border-bottom:1px solid #eee;
    padding:10px 0;
  }
  #order .item .middle .bot span{
    color:red;
  }
  #order .item .bottom{
    text-align: right;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
  }
  #order .item .bottom span{
    border:1px solid #777;
    padding:3px 5px;
    color:#333;
    border-radius: 3px;
    margin-left: 5px;
  }
  #order .item .bottom .nowPay{
    background: #ef4f4f;
    color:#fff;
    border: none;
  }
  /**/
  #order .item .bottom .cancelOrder{

  }
</style>
