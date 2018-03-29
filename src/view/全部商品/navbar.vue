<template>
  <div id="navbar" v-if="diynavbar">
    <div class="navbar1">
      <div class="icon" @click="clickIcon('关注')"><img src="/static/img/heart.png" alt="" v-if="isFavorite"><img
        src="/static/img/heart-kong.png" alt="" v-else>关注
      </div>
      <div class="icon" @click="clickIcon('店铺')"><img src="/static/img/shop_black.png" alt="" class="shop">店铺</div>
      <div class="icon" @click="clickIcon('购物车')"><img src="/static/img/cart_black.png" alt=""
                                                       style="position: relative !important;">购物车
      </div>
      <span class="cartcount">{{cartcount}}</span>
      <div class="addCart" @click="changePayStaus('加入购物车')">加入购物车</div>
      <div  class="pay" @click="changePayStaus('购买')">购买</div>
    </div>
    <yd-popup v-model="show2" position="bottom" height="80%" class="sizePop">
      <div class="pic">
        <img :src="commodity_goods.thumb" alt="">
        <div>
          <span>￥{{curPrice?curPrice:commodity_goods.minprice+'-'+commodity_goods.maxprice}}</span>
          <span>库存{{curStock?curStock:commodity_goods.total}}件</span>
          <span>已选：{{curTitle?curTitle:'请选择商品规格'}}</span>
        </div>
        <span @click="show2 = false">x</span>
      </div>
      <div class="spec" v-for="(item,key1) in specs" :key="key1">
        <p>{{item.title}}</p>
        <span @click="selSpec(key1,chen.id)" v-for="(chen,key2) in item.items" :key="key2" :class="{curBg:specArr[key1]===chen.id}">{{chen.title}}</span>
      </div>

      <div class="payNumber">
        <span>购买数量(限购{{commodity_goods.maxbuy}}件)</span>
        <div>
          <yd-spinner max="75" :min="commodity_goods.minbuy" width="100px" height="30px"
                      v-model="payNumber"></yd-spinner>
        </div>
      </div>
      <yd-button size="large" type="danger" position="bottom" @click.native="sure">确定</yd-button>
    </yd-popup>
  </div>
</template>
<script>
  import router from '@/router'
  import config from '../../myConfig'

  export default {
    data() {
      return {
        show2: false,
        payNumber: 1,//购买数量
        color: undefined,
        size: undefined,
        likeClick: 0,
        specArr:[],
        radio1: '啦啦啦',
        curSelId:0,
        curPrice:0,//当前选中的商品规格对应的价格
        curTitle:'',//当前选中的规格
        curStock:0//当前选中商品规格的库存
      }
    },
    computed: {
      diynavbar() {
        for (var i = 0; i < this.$store.state.commodityDetailData.diypage.diynavbar.length; i++) {
          if (this.$store.state.commodityDetailData.diypage.diynavbar[i].icontext == '关注') {
            this.$store.state.commodityDetailData.diypage.diynavbar[i].imgSrc_red = '../../static/img/heart.png'
            this.$store.state.commodityDetailData.diypage.diynavbar[i].imgSrc_white = '../../static/img/heart-kong.png'
          } else if (this.$store.state.commodityDetailData.diypage.diynavbar[i].icontext == '购物车') {
            this.$store.state.commodityDetailData.diypage.diynavbar[i].imgSrc = '../../static/img/cart_black.png'
          } else if (this.$store.state.commodityDetailData.diypage.diynavbar[i].icontext == '店铺') {
            this.$store.state.commodityDetailData.diypage.diynavbar[i].imgSrc = '../../static/img/shop_black.png'
          }
        }
        return this.$store.state.commodityDetailData.diypage.diynavbar
      },
      navbar() {
        return this.$store.state.commodityDetailData.diypage.navbar
      },
      commodity_goods() {
        return this.$store.state.commodityColorSizeData.goods
      },
      options() {
        return this.$store.state.commodityColorSizeData.options
      },
      specs:{
        get: function () {
          return this.$store.state.commodityColorSizeData.specs
        },
        // setter
        set: function (newValue) {
          this.$store.state.commodityColorSizeData.specs=newValue
        }
      },
      cartcount() {
        return this.$store.state.cartcount
      },
      isFavorite() {
        return this.$store.state.isFavorite
      }
    },
    methods: {
      changePayStaus(status) {//此方法用于在用户点击“加入购物车”或“购买”按钮的时候，去改变当前购买状态，从而在点击确认的时候，将商品加入购物车或者跳转到支付页面
        this.$store.dispatch({
          type: 'changePayStaus',
          payStatus: status
        })
        this.show2 = true
      },
      selSpec(key1, id) {
        this.specArr[key1] = id
        this.specArr = this.specArr.concat([])
        for(var i=0;i<this.options.length;i++){
          this.options[i].specs.split('_')
          if(this.options[i].specs.split('_').sort().join('')==this.specArr.sort().join('')){
            this.curPrice=this.options[i].marketprice
            this.curTitle=this.options[i].title
            this.curStock=this.options[i].stock
          }
        }
      },
      sure() {
        if(!this.specs){//商品没有规格，不传optionid
          this.$store.dispatch({
            type: 'cartOrPay',
            params: {
              total: this.payNumber,
              optionid: '',//规格id
              id: this.commodity_goods.id,
              t: config.t,
              mid: localStorage.getItem('userid'),
              openid: localStorage.getItem('openid'),
              uniacid: config.uniacid
            }
          })
          this.show2 = false
        }else{//商品有规格，传optionid
          if(this.specArr.length<this.specs.length){
            this.$dialog.toast({
              mes:'请选择规格！',
              timeout: 1000,
            });
          }else{
            for(var i=0;i<this.options.length;i++){
              this.options[i].specs.split('_')
              if(this.options[i].specs.split('_').sort().join('')==this.specArr.sort().join('')){
                this.$store.dispatch({
                  type: 'cartOrPay',
                  params: {
                    total: this.payNumber,
                    optionid: this.options[i].id,//规格id
                    id: this.commodity_goods.id,
                    t: config.t,
                    i: config.i,
                    uniacid: config.uniacid,
                    mid: localStorage.getItem('userid'),
                    openid: localStorage.getItem('openid'),
                  }
                })
                this.show2 = false
              }
            }
          }
        }

      },
      clickIcon(icontext) {
        if (icontext == '购物车') {
          this.$store.dispatch({
            type: 'lookCart',
            params: {
              t: config.t,
              uniacid: config.uniacid,
              mid: localStorage.getItem('userid'),
              openid: localStorage.getItem('openid')
            }
          })
        } else if (icontext == '关注') {
          this.likeClick++;
          if (this.isFavorite == false) {
            this.$store.dispatch({
              type: 'like',
              params: {
                t: config.t,
                i: config.i,
                uniacid: config.uniacid,
                openid: localStorage.getItem('openid'),
                mid: localStorage.getItem('userid'),
                id: this.commodity_goods.id,
                isfavorite: 1
              }
            })
          } else {
            this.$store.dispatch({
              type: 'like',
              params: {
                t: config.t,
                i: config.i,
                uniacid: config.uniacid,
                openid: localStorage.getItem('openid'),
                mid: localStorage.getItem('userid'),
                id: this.commodity_goods.id,
                isfavorite: 0
              }
            })
          }
        }

      }
    }
  }
</script>
<style>
  .curBg {
    background: red !important;
    color: #fff
  }
  #navbar{
    z-index: 100;
  }
  #navbar .cartcount {
    display: block;
    color: #fff;
    background: red;
    width: 15px;
    height: 15px;
    line-height: 16px;
    border-radius: 50%;
    font-size: 12px;
    position: absolute;
    top: 5px;
    right: 57%;
  }

  #navbar .sizePop .yd-popup-content {
  }

  #navbar .sizePop button {
    height: 40px;
    position: fixed;
    bottom: 0;
  }

  #navbar .sizePop .pic {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 10px;
  }

  #navbar .sizePop .pic {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 10px;
  }

  #navbar .sizePop .pic > img {
    width: 70px;
    height: 70px;
    border: 2px solid #eee;
  }

  #navbar .sizePop .pic > div {
    flex: 0 0 70%;
    line-height: 25px;
    text-align: left;
    padding-left: 10px;
    font-size: 10px;
  }

  #navbar .sizePop .pic > div span {
    display: block;
  }

  #navbar .sizePop .pic > div span:nth-child(1) {
    color: red;
    font-weight: bold;
    font-size: 16px;
  }

  #navbar .sizePop .pic > span {
    display: block;
    width: 20px;
    height: 20px;
    line-height: 18px;
    border: 1px solid #000;
    border-radius: 50%;
  }

  #navbar .sizePop .spec {
    text-align: left;
    line-height: 25px;
    padding: 10px;
    border-bottom: 1px solid #eee;
  }

  #navbar .sizePop .spec span {
    background: #eee;
    margin-right: 10px;
    padding: 3px 8px;
    border-radius: 5px;
    font-size: 12px;
  }

  #navbar .sizePop .payNumber {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    text-align: left;
    line-height: 25px;
    padding: 10px;
    border-bottom: 1px solid #eee;
    margin-bottom: 50px;
  }

  /**/
  #navbar {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #fff;
    position: fixed;
    bottom: 0;
  }

  #navbar > div {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
  }

  #navbar .addCart, .pay {
    color: #fff;
  }

  #navbar .icon img {
    display: block;
    width: 20px;
    height: 20px;
    margin: 0 auto;
  }

  #navbar .icon .shop {
    width: 25px;
    height: 25px;
    margin-bottom: -5px;
  }

  /*navbar1------五个按钮全都有*/
  #navbar .navbar1 .icon {
    flex: 0 0 15%;
    line-height: 25px;
    padding-top: 5px;
    font-size: 12px;
    /*position: relative;*/
  }

  #navbar .navbar1 .icon span {
    display: block;
    color: #fff;
    width: 15px;
    height: 15px;
    line-height: 15px;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    right: 5px
  }

  #navbar .navbar1 .addCart {
    flex: 0 0 30%;
    background: orange;
  }

  #navbar .navbar1 .pay {
    flex: 0 0 25%;
    background: orangered;
  }

  /*navbar2------没有加入购物车按钮*/
  #navbar .navbar2 .icon {
    flex: 0 0 25%;
    line-height: 25px;
    padding-top: 5px;
    font-size: 12px;
    /*position: relative;*/
  }

  #navbar .navbar2 .icon span {
    display: block;
    color: #fff;
    width: 15px;
    height: 15px;
    line-height: 15px;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    right: 20px
  }

  #navbar .navbar2 .addCart {
    flex: 0 0 30%;
    background: green;
  }

  #navbar .navbar2 .pay {
    flex: 0 0 25%;
    background: red;
  }

  /*navbar3------只有购买按钮*/
  #navbar .navbar3 .pay {
    width: 100%;
  }

  /*navbar4------只有加入购物车和购买按钮*/
  #navbar .navbar4 > div {
    flex: 0 0 50%;
  }

  /*navbar5------只有一个icon*/
  #navbar .navbar5 .icon {
    flex: 0 0 30%;
    line-height: 25px;
    padding-top: 5px;
    font-size: 12px;
    /*position: relative;*/
  }

  #navbar .navbar5 .icon span {
    display: block;
    color: #fff;
    width: 15px;
    height: 15px;
    line-height: 15px;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    right: 28px
  }

  #navbar .navbar5 .addCart {
    flex: 0 0 35%;
    background: green;
  }

  #navbar .navbar5 .pay {
    flex: 0 0 35%;
    background: red;
  }

  /*navbar6-----有两个icon*/
  #navbar .navbar6 .icon {
    flex: 0 0 20%;
    line-height: 25px;
    padding-top: 5px;
    font-size: 12px;
    /*position: relative;*/
  }

  #navbar .navbar6 .icon span {
    display: block;
    color: #fff;
    width: 15px;
    height: 15px;
    line-height: 15px;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    right: 15px
  }

  #navbar .navbar6 .addCart {
    flex: 0 0 30%;
    background: green;
  }

  #navbar .navbar6 .pay {
    flex: 0 0 30%;
    background: red;
  }

  /*navbar7-----只有一个icon和购买按钮*/
  #navbar .navbar7 .icon {
    flex: 0 0 50%;
    line-height: 25px;
    padding-top: 5px;
    font-size: 12px;
    /*position: relative;*/
  }

  #navbar .navbar7 .pay {
    flex: 0 0 50%;
    background: red;
  }

  #navbar .navbar7 .icon span {
    display: block;
    color: #fff;
    background: red;
    width: 15px;
    height: 15px;
    line-height: 15px;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    right: 60px
  }
</style>

