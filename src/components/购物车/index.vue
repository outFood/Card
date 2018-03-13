<template>
  <div id="cart" v-if="cartData">
    <yd-navbar title="我的购物车">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon @click.native="back"></yd-navbar-back-icon>
      </router-link>
      <router-link to="#" slot="right" @click.native="delShow=!delShow">
        <span v-if="delShow==false">编辑</span><span v-else>完成</span>
      </router-link>
    </yd-navbar>
    <div class="shop" v-if="cartData.list.length>0">
      <div class="shop-item"v-for="(item,key) in cartData.list" :key="key">
        <div class="check">
          <img src="/static/img/check.png" alt="" v-if="item.selected==1" @click='selOrNo(item.id,0)'>
          <img src="/static/img/no-check.png" alt="" v-else @click='selOrNo(item.id,1)'>
        </div>
        <img :src="item.thumb" class="shopImg">
        <div class="right" @click="resCommodityDetailData(item.goodsid)">
          <h6>{{item.title}}</h6>
          <p>{{item.optiontitle}}</p>
          <span class="price">￥{{item.marketprice}}</span>
        </div>
        <span class="yd-spinner" style="height: 0.6rem; width: 2rem;">
          <a href="#" @click="addOrReduceOrDel(['减',item.total,item.id,item.optionid,item.minbuy])"></a>
          <input type="number" pattern="[0-9]*" v-model="item.total" class="yd-spinner-input">
          <a href="#" @click="addOrReduceOrDel(['加',item.total,item.id,item.optionid])"></a>
         </span>
      </div>
      <!--选择购买-->
      <div class="checkAll" v-if="delShow==false">
        <div class="left">
          <div class="check">
            <img src="/static/img/check.png" alt="" v-if="isCheckAll" @click='selOrNo("",0)'>
            <img src="/static/img/no-check.png" alt="" v-else @click='selOrNo("",1)'>
          </div>
          <div class="rit">合计：<span>￥{{cartData.totalprice}}</span> <p>不含运费</p></div>
        </div>
        <div class="right" @click="subMitCart">结算({{cartNum}})</div>
      </div>
      <!--编辑删除-->
      <div class="edit" v-else>
        <div class="check">
          <img src="/static/img/check.png" alt="" v-if="isCheckAll" @click='selOrNo("",0)'>
          <img src="/static/img/no-check.png" alt="" v-else @click='selOrNo("",1)'>
        </div>
        <div class="delete" :class="{redDelete:checkedArr.length}" @click="addOrReduceOrDel(['删除'])">删除</div>
      </div>
    </div>
    <no-data v-else></no-data>
    <footers></footers>
  </div>
</template>
<script type="text/babel">
  import config from '../../myConfig'
  import noData from '@/components/购物车/noData'
  export default {
    components:{noData},
    data() {
      return {
        cartList: [],
        delShow:false,
        select:0,
        goodsId:''
      }
    },
    computed:{
      cartData(){
         return this.$store.state.cartData
      },
      cartNum(){
        var cartNum=0;
        for(var i=0;i<this.$store.state.cartData.list.length;i++){
          if(this.$store.state.cartData.list[i].selected=='1'){
            cartNum+=parseInt(this.$store.state.cartData.list[i].total)
          }
        }
        return cartNum
      },
      priceNum(){
        var priceNum=0;
        for(var i=0;i<this.$store.state.cartData.list.length;i++){
          if(this.$store.state.cartData.list[i].selected=='1'){
            priceNum+=parseInt(this.$store.state.cartData.list[i].marketprice)
          }
        }
        return marketprice
      },
      isCheckAll(){
        return this.$store.state.isCheckAll
      },
      checkedArr(){
        return this.$store.state.checkedArr
      }
    },
    methods: {
      addOrReduceOrDel(arr){//---------------------------------------
        console.log(arr)
        if(arr[0]=='加'){
          this.$store.dispatch({
            type:'cartUpdate',
            params:{
              total:parseInt(arr[1])+1,
              optionid:arr[3],
              id:arr[2],
              t:config.t,
              mid:localStorage.getItem('userid'),
              openid:localStorage.getItem('openid')
            }
          })
        }else if(arr[0]=='减'){
          if(arr[1]>arr[4]){
            this.$store.dispatch({
              type:'cartUpdate',
              params:{
                total:parseInt(arr[1])-1,
                optionid:arr[3],
                id:arr[2],
                t:config.t,
                mid:localStorage.getItem('userid'),
                openid:localStorage.getItem('openid')
              }
            })
          }else{
            this.$dialog.toast({
              mes:'受不了了，宝贝不能再减少了哦',
              timeout: 1500
            });
          }
        }else if(arr[0]=='删除'){
          if(this.checkedArr){
            this.$store.dispatch({
              type:'cartDelete',
              params:{
                mid:localStorage.getItem('userid'),
                openid:localStorage.getItem('openid'),
                ids:this.checkedArr.join(','),
                t:config.t,
              }
            })
          }
        }
      },
      resCommodityDetailData(id){
        this.$store.dispatch({
          type:'resCommodityDetailData',
          params:{
            id:id,
            t:config.t,
            mid:localStorage.getItem('userid'),
            openid:localStorage.getItem('openid')
          }
        })
      },
      selOrNo(id,selected){
        this.$store.dispatch({
          type:'selOrNo',
          params:{
            t:config.t,
            mid:localStorage.getItem('userid'),
            openid:localStorage.getItem('openid'),
            id:id,
            select:selected
          }
        })
      },
      subMitCart(){
        this.$store.dispatch({
          type:'subMitCart',
          params:{
            t:config.t,
            openid:localStorage.getItem('openid'),
          }
        })
      },
      back:function () {
        this.$router.go(-1)
      }
    },
  }
</script>
<style>
  #cart header{
    height:1.5rem !important;
    align-items: center;
  }
  .yd-navbar-center-title{
    font-size:.5rem !important;
  }
  .yd-back-icon:before, .yd-next-icon:before {
    font-size: .6rem;
  }
  .yd-navbar-item>a{
    font-size: .45rem;
  }
  #cart .shop{
    margin-bottom:3.44rem;
    background: #fff;
  }
  #cart .shop  .shop-item{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding:0.3125rem  0.3125rem 0.3125rem 0.3125rem;
    align-items: center;
    border-bottom: 1px solid #cdcdcd;
  }
  #cart .shop .check img{
    width:0.625rem;height:0.625rem;
  }
  #cart .shop  .shop-item .shopImg{
    width:2rem;
    height:2rem;
    margin-left:0.3125rem;
  }
  #cart .shop  .shop-item .right{
    margin-left:0.3125rem;
    text-align: left;
    flex: 0 0 45%;
  }
  .yd-spinner{
    height: 1rem !important;
    width: 3rem !important;
  }
  .yd-spinner>input{
    width:30%;
    font-size:0.5rem
  }
  .yd-spinner>a{
    width:35%
  }
  #cart .shop  .shop-item .right h6{
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size:0.5rem;

  }
  #cart .shop  .shop-item .right p{
    margin:0.3125rem 0;
  }
  #cart .shop  .shop-item .right .price{
    color:red;
  }
  #cart .shop .checkAll{
    position: fixed;
    bottom:1.875rem;
    width:100%;
    height:1.5625rem;
    background: #fff;
    z-index: 1;

    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  #cart .shop .checkAll .left{
    flex: 0 0 70%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 0.3125rem;
  }
  #cart .shop .checkAll .left .rit{
    text-align: right;
  }
  #cart .shop .checkAll .left .rit span{
    font-size:0.57rem;
    color:#ff5555;
    font-weight: bold;
  }
  #cart .shop .checkAll .left .rit p{
    font-size:0.44rem;
    color:#969696
  }
  #cart .shop .checkAll .right{
    flex: 0 0 30%;
    background: #ff5555;
    color:#fff;
    line-height: 1.72rem;
  }
  #cart .shop .edit{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    z-index: 1;

    width:100%;
    height:1.5625rem;
    background: #fff;
    position: fixed;
    bottom:1.875rem;

  }
  #cart .shop .edit .check{
    flex: 0 0 70%;
    text-align: left;
    padding-left:3.125rem;
  }
  #cart .shop .edit>div:not(:nth-child(1)){
    flex:0 0 30%;
    background: #ccc;
    height:100%;
    color:#fff;
    line-height: 1.5625rem;
  }
  #cart .shop .edit .delete{
    margin-right:5px;
  }
  #cart .redDelete{
    background: #ff5555 !important;
    color:#fff !important;
  }
</style>
