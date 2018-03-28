<template>
  <div id="buyPage">
    <yd-navbar title="确认订单">
      <router-link to="/sortIndex/detail" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
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
      <div class="item" v-for="(item,key) in buyPageData.goods_list">
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
        <span slot="right">￥{{buyPageData.other.goodsprice}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">运费</span>
        <span slot="right">
          <span v-if="buyPageData.exchangeOrder">{{buyPageData.other.exchangepostage}}</span>
          <span v-else-if="buyPageData.taskgoodsprice">{{buyPageData.other.taskgoodsprice}}</span>
          <span v-else>{{buyPageData.other.dispatch_price}}</span>
        </span>
      </yd-cell-item>
    </yd-cell-group>
    <div class="toPay">
      <div class="left">需付：<span>￥{{buyPageData.allprice}}</span></div>
      <router-link to="#" class="right" @click.native="createOrder">立即支付</router-link>
    </div>
  </div>
</template>
<script>
  import router from '@/router'
  import config from '../../myConfig'
  import headers from '@/components/headers'
  export default {
    components:{headers},
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
      payMessage(){
        return this.$store.state.payMessage
      }
    },
    mounted(){
      for(var i=0,myArr=[];i<this.buyPageData.list.length;i++){
        myArr.push(this.buyPageData.list[i].goodsid)
        myArr.push(this.buyPageData.list[i].optionid)
        myArr.push(this.buyPageData.list[i].total)
      }
      this.goodsIds=myArr.join(',')
    },
    methods:{
      createOrder(){
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
            fromcart:1,
            carrierid:0,
            addressid:this.curSelAddress.id,
            carriers:'',
            remark:this.remark,
            time:'',
            deduct:0,
            deduct2:0,
            couponid:0,
            contype:2,
            invoicename:'',//发货单名字
            packageid:0,//套餐id
            app:1,
            t:config.t,
            i:config.i,
            uniacid:config.uniacid,
            mid:localStorage.getItem('userid'),
            openid:localStorage.getItem('openid')
          }
        })
        setTimeout(()=>{
          if(this.payMessage!=''){
            this.$dialog.toast({
              mes: this.payMessage.result.msg,
              timeout: 1500
            });
          }
        },1000)
      },
      changeAddress(){
        router.push({path: '/vipIndex/myAddress'})
        this.$store.dispatch({
          type:'changeAddress',
        })
      },
    }
  }
</script>

<style>
  #buyPage{
    margin-bottom:2.5rem;
  }
  #buyPage header {
    height: 1.5rem !important;
    align-items: center;
  }
  #buyPage header .yd-navbar-center-title{
    font-size:.5rem !important;
  }
  #buyPage .yd-back-icon:before, .yd-next-icon:before {
    font-size: .6rem;
  }
  #buyPage .address{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:.3125rem;
    background:#fff;
    text-align: left;
    margin-bottom:.3125rem;
  }
  #buyPage .address p{
    color:#5c5c5c;
  }
  #buyPage .address img{
    width:.5rem;
    height:.5rem;
  }
  #buyPage .noAddress{
    background: #fff;
    padding:.3125rem;
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
    width:.5rem;
    height:.5rem;
  }
  #buyPage .item{
    background: #fff;
    margin-top:.3125rem;
    font-size:0.375rem;
    padding:.3125rem .3125rem 0 .3125rem;
  }
  #buyPage .item .top>p{
    text-align: left;
    border-bottom: 1px solid #eee;
  }
  #buyPage .item .top>p img{
    width:0.625rem;
    height:0.625rem;
    vertical-align: middle;
  }
  #buyPage .item .top .shopInfo{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:.3125rem 0;
  }
  #buyPage .item .top .shopInfo:not(:last-child){
    border-bottom: 1px solid #eee;
  }
  #buyPage .item .top .shopInfo img{
    width:1rem;
    height:1rem;
  }
  #buyPage .item .top .shopInfo h6{
    text-align: left;
    flex: 0 0 60%;
  }
  #buyPage .item .top .shopInfo  .optiontitle{
    font-weight: normal;
    margin-top:.3125rem;
  }
  #buyPage .leaveWord{
    margin-top:.3125rem;
  }
  .yd-cell-title{
    font-size:0.4rem
  }
  .yd-textarea>textarea{
    font-size:0.5rem
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
    height:1.5625rem;
    line-height: 1.5625rem;
    z-index: 20;
  }
  #buyPage .toPay .left{
    flex:0 0 60%;
    height:100%;
    text-align: right;
    padding-right: .3125rem;
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
