<template>
  <div id="myCouponDetail">
    <headers title="详情"></headers>
    <div class="quanBody">
      <div class="top">
        <div class="borderDiv">
          <p>{{myCouponDetail.coupon.couponname}}</p>
          <div class="main1" v-if="myCouponDetail.coupon.backtype==2">
            <div class="left">
              <p>{{myCouponDetail.coupon.title2}}</p>
              <span>立返</span>
            </div>
            <div class="right">
              <p v-if="myCouponDetail.coupon.backmoney&&myCouponDetail.coupon.backmoney>0">{{myCouponDetail.coupon.backmoney}}元余额</p>
              <p v-if="myCouponDetail.coupon.backcredit&&myCouponDetail.coupon.backcredit>0">{{myCouponDetail.coupon.backcredit}}积分</p>
              <p v-if="myCouponDetail.coupon.backredpack&&myCouponDetail.coupon.backredpack>0">{{myCouponDetail.coupon.backredpack}}元红包</p>
            </div>
          </div>
          <div class="main2" v-else>
            <p>{{myCouponDetail.coupon.title3}}</p>
            <p>{{myCouponDetail.coupon.title2}}</p>
          </div>
          <p>有效期：
            <span v-if="myCouponDetail.coupon.timestr==0">永久有效</span>
            <span v-else>
              <span v-if="myCouponDetail.coupon.timestr==1">即{{myCouponDetail.coupon.gettypestr}}日内{{myCouponDetail.coupon.timedays}}天有效</span>
              <span v-else>有效期{{myCouponDetail.coupon.timestr}}</span>
            </span>
          </p>
        </div>
      </div>
      <div class="bottom">
        <span class="leftCircle"></span>
        <span class="rightCircle"></span>
        <div v-if="myCouponDetail.coupon.money>0||myCouponDetail.coupon.credit>0">
          <h6>所需金额与积分</h6>
          <p v-if="myCouponDetail.coupon.money>0">所需金额:{{myCouponDetail.coupon.money}}</p>
          <p v-if="myCouponDetail.coupon.credit>0">所需积分：{{myCouponDetail.coupon.credit}}</p>
        </div>
        <div v-if="myCouponDetail.coupon.merchname">
          <h6>使用商铺</h6>
          <p>限购{{myCouponDetail.coupon.merchname}}店铺商品</p>
        </div>
        <div>
          <h6>使用说明</h6>
          <div v-if="myCouponDetail.coupon.descnoset==0">
            <p v-if="myCouponDetail.coupon.coupontype" v-html="myCouponDetail.coupon.consumedesc"></p>
            <p v-else v-html="myCouponDetail.coupon.rechargedesc"></p>
          </div>
          <div v-else>
            <span v-html="myCouponDetail.coupon.desc"></span>
          </div>
        </div>
        <div>
          <h6>有效期限</h6>
          <p v-if="myCouponDetail.coupon.timestr==''">永久有效</p>
          <div v-else>
            <p v-if="myCouponDetail.coupon.timestr=='1'">即{{myCouponDetail.coupon.gettypestr}}日内{{myCouponDetail.coupon.timedays}}天有效</p>
            <p v-else>有效期：{{myCouponDetail.coupon.timestr}}</p>
          </div>
          <p v-if="myCouponDetail.coupon.merchname">
            限购{{myCouponDetail.coupon.merchname}}店铺商品
          </p>

        </div>
        <div>
          <h6>使用限制</h6>
          <p v-if="myCouponDetail.coupon.coupontype=='2'">本优惠卷只能在收银台中使用</p>
          <p v-else-if="myCouponDetail.coupon.limitdiscounttype=='1'">不允许与促销优惠同时使用</p>
          <p v-else-if="myCouponDetail.coupon.limitdiscounttype=='2'">不允许与会员折扣同时使用</p>
          <p v-else="myCouponDetail.coupon.limitdiscounttype=='3'">不允许与促销优惠和会员折扣同时使用</p>
          <div v-if="myCouponDetail.coupon.limitgoodtype=='1'">
            允许以下商品使用：
            <p v-for="(item,key) in myCouponDetail.goods" :key="key">
              {{item.title}}
            </p>
          </div>
          <div v-if="myCouponDetail.coupon.limitgoodcatetype=='1'">
            允许以下商品分类使用：
            <p v-for="(item,key) in myCouponDetail.category" :key="key">
              {{item.name}}
            </p>
          </div>
          <div v-if="myCouponDetail.coupon.limitgoodtype=='0'&&myCouponDetail.coupon.limitgoodcatetype=='0'&&myCouponDetail.coupon.limitdiscounttype=='0'&&myCouponDetail.coupon.coupontype!='2'">
            <p>无</p>
          </div>
        </div>
      </div>
    </div>
    <yd-button size="large" type="primary" v-if="myCouponDetail.coupon.used==1">已使用</yd-button>
    <yd-button size="large" type="primary" v-else-if="myCouponDetail.coupon.past==1">已过期</yd-button>
    <div v-else>
      <yd-button size="large" type="primary" v-if="myCouponDetail.coupon.coupontype">立即去选商品使用</yd-button>
      <yd-button size="large" type="primary" v-else-if="myCouponDetail.coupon.coupontype==1">立即去充值</yd-button>
      <yd-button size="large" type="primary" v-else>返回我的优惠券</yd-button>
    </div>
  </div>
</template>
<style scoped>
  #myCouponDetail .quanBody {
    width: 100%;
    margin-bottom: 100px;
  }

  #myCouponDetail .quanBody .top {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background: #52b6ff;
    margin: 0.5rem 0.5rem 0 0.5rem;
    border-radius: 5px 5px 0 0;
    color: #fff;
    padding: 0.625rem;
  }

  #myCouponDetail .quanBody .borderDiv {
    width: 100%;
    border: 1px solid #fff;
    position: relative;
    padding:.4rem 0 0.9rem 0
  }

  #myCouponDetail .quanBody .borderDiv > p:first-child {
    background: #52b6ff;
    padding: 0 5px;
    position: absolute;
    top: -0.3125rem;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  #myCouponDetail .quanBody .borderDiv > p:last-child {
    background: #52b6ff;
    padding: 0 5px;
    position: absolute;
    bottom: -0.3125rem;
    left: 50%;
    transform: translate(-50%, 20%);
  }

  #myCouponDetail .quanBody .borderDiv .main1 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    margin-top: 0.3125rem;
  }

  #myCouponDetail .quanBody .borderDiv .main1 .left {
    flex: 0 0 50%;
  }

  #myCouponDetail .quanBody .borderDiv .main1 .left span {
    font-size:0.9375rem;
  }

  #myCouponDetail .quanBody .borderDiv .main1 .right {
    flex: 0 0 50%;
  }

  #myCouponDetail .quanBody .borderDiv .main2 {
    margin-top: 0.5rem;
    font-size:.6rem;line-height: 1rem;
  }

  #myCouponDetail .quanBody .bottom {
    background: #fff;
    margin: 0px 0.5rem 0.5rem 0.5rem;
    text-align: left;
    padding: 0 0.3125rem;
    border-radius: 0 0 5px 5px;
    border-top: 4px dashed #52b6ff;
    position: relative;
  }

  #myCouponDetail .quanBody .bottom .leftCircle, .rightCircle {
    display: inline-block;
    width: 0.625rem;
    height: 0.625rem;
    background: #fafafa;
    border-radius: 50%;
    position: absolute;
  }

  #myCouponDetail .quanBody .bottom .leftCircle {
    top: -0.3125rem;
    left: -0.3125rem;
  }

  #myCouponDetail .quanBody .bottom .rightCircle {
    top: -0.3125rem;
    right: -0.3125rem;
  }

  #myCouponDetail .quanBody .bottom > div {
    padding: 0.625rem 0;
  }

  #myCouponDetail .quanBody .bottom > div:not(:last-child) {
    border-bottom: 1px dashed #d6d3d6;
  }

  #myCouponDetail .quanBody .bottom > div h6 {
    color: #9c9a9c;
    font-size: 0.5625rem;
  }

  #myCouponDetail .quanBody .bottom > div p:before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    background: #52b6ff;
    border-radius: 0.3125rem;
    margin-right: 0.3125rem;
  }

  #myCouponDetail button {
    position: fixed !important;
    bottom: 0 !important;
    border-radius: 0 !important;
    height: 1.5625rem !important;
    font-size: 0.5rem !important;
    background: #52b6ff;
  }
</style>
<script>
  import config from '../../myConfig'
  import axios from 'axios'
  import headers from '@/components/headers'

  export default {
    components: {headers},
    computed: {
      myCouponDetail() {
        return this.$store.state.myCouponDetail
      },
    },
    methods: {},
  }
</script>
