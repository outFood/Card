<template>
  <div id="buyPage">
    <yd-navbar title="确认订单">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon @click.native="back"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <router-link to="#" @click.native="changeAddress" class="address" v-if="curSelAddress.realname">
      <img src="/static/img/position.png" alt="">
      <div>
        <h6>收货人：{{curSelAddress.realname}}&nbsp;&nbsp;&nbsp;&nbsp;{{curSelAddress.mobile}}</h6>
        <p>{{curSelAddress.province}}  {{curSelAddress.city}} {{curSelAddress.area}} {{curSelAddress.address}}</p>
      </div>
      <img src="/static/img/more.png" alt="">
    </router-link>
    <router-link to="#" @click.native="changeAddress" class="noAddress" v-else><span>请选择收货地址</span><img src="/static/img/more.png" alt=""></router-link>
    <div class="list">
      <div class="item" v-for="(item,key) in buyPageData.result.goods_list">
        <div class="top">
          <p><img src="/static/img/shop_black.png" alt="">{{item.shopname?item.shopname:'官方演示'}}</p>
          <div class="shopInfo" v-for="(infoItem,key) in item.goods" :key="key">
            <img :src="infoItem.thumb">
            <h6>{{infoItem.title}} <p class="optiontitle">{{infoItem.optiontitle}}</p></h6>
            <div><h6>￥{{infoItem.marketprice}}</h6><p>X{{infoItem.total}}</p></div>
          </div>
        </div>
      </div>
    </div>
    <yd-cell-group title="买家留言" class="leaveWord">
      <yd-cell-item>
        <yd-textarea slot="right" placeholder="50字以内（选填）" maxlength="50" v-model="remark"></yd-textarea>
      </yd-cell-item>
    </yd-cell-group>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">商品小计</span>
        <span slot="right">￥{{buyPageData.result.other.goodsprice}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">运费</span>
        <span slot="right">￥{{buyPageData.result.other.dispatch_price}}</span>
      </yd-cell-item>
    </yd-cell-group>
    <div class="toPay">
      <div class="left">需付：<span>￥{{buyPageData.result.allprice}}</span></div>
      <router-link to="#" class="right" @click.native="createOrder">立即支付</router-link>
    </div>
  </div>
</template>
<style>
  #buyPage{
    margin-bottom:80px;
  }
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
    padding:10px 10px 0 10px;
  }
  #buyPage .item .top>p{
    text-align: left;
    border-bottom: 1px solid #eee;
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
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    padding:10px 0;
  }
  #buyPage .item .top .shopInfo img{
    width:70px;
    height:70px;
  }
  #buyPage .item .top .shopInfo h6{
    text-align: left;
    flex: 0 0 60%;
  }
  #buyPage .item .top .shopInfo  .optiontitle{
    font-weight: normal;
    margin-top:10px;
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
  import router from '@/router'
  import config from '../../myConfig'
  export default {
    data(){
      return {
        buyNumber:'1',
        remark:'',
        goodsIds:''
      }
    },
    computed:{
      buyPageData(){
        return this.$store.state.buyPageData
      },
      curSelAddress(){
        return this.$store.state.curSelAddress
      },
      prefix(){
        return this.$store.state.prefix
      }
    },
    mounted(){
      for(var i=0,myArr=[];i<this.buyPageData.result.list.length;i++){
        myArr.push(this.buyPageData.result.list[i].goodsid)
        myArr.push(this.buyPageData.result.list[i].optionid)
        myArr.push(this.buyPageData.result.list[i].total)
      }
      this.goodsIds=myArr.join(',')
    },
    methods:{
      createOrder(){
        console.log(this.buyPageData.result.address.id)
        this.$store.dispatch({
          type:'createOrder',
          params:{
            orderid:0,
            id:0,
            goods:this.goodsIds,
            giftid:'',//赠品id
            gdid:'',
            diydata:'',
            dispatchtype:0,
            fromcart:0,
            carrierid:0,
            addressid:this.curSelAddress.id,
            carriers:'',
            remark:this.remark,
            time:'',
            deduct:0,
            deduct2:0,
//            couponid:0,
            contype:2,
            invoicename:'',//发货单名字
            packageid:0,//套餐id
            app:1,
            t:config.t,
            mid:localStorage.getItem('userid'),
            openid:localStorage.getItem('openid')
          }
        })
      },
      changeAddress(){
        router.push({path: '/vipIndex/myAddress'})
        this.$store.dispatch({
          type:'changeAddress',
        })
      },
      back:function () {
        this.$router.go(-1)
      }
    }
  }
</script>
