<template>
  <div id="getQuanDetail">
    <yd-navbar title="优惠券详情">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon @click.native="back"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div class="quanBody">
      <div class="top">
        <div class="borderDiv">
          <p>充值优惠券</p>
         <div class="main">
           <div class="left">
             <p>充值满36789元可用</p>
             <span>立返</span>
           </div>
           <div class="right">
             <p>2元余额</p>
             <p>10积分</p>
             <p>1元红包</p>
           </div>
         </div>
          <p>有效期：即兑换日内30天内有效</p>
        </div>
      </div>
      <div class="bottom">
        <span class="leftCircle"></span>
        <span class="rightCircle"></span>
        <div>
          <h6>所需金额与积分</h6>
          <p>所需金额：{{couponDetail.coupon.money}}</p>
          <p>所需积分：{{couponDetail.coupon.credit}}</p>
        </div>
        <div>
          <h6>使用说明</h6>
          <div v-html="couponDetail.coupon.desc">
          </div>
        </div>
        <div>
          <h6>领取限制</h6>
          <div v-if="couponDetail.coupon.islimitlevel=='1'">
            用户必须达到以下条件之一:
            <div v-if="couponDetail.coupon.limitmemberlevels&&couponDetail.coupon.limitmemberlevels!=''">
              <p v-for="(item,key) in couponDetail.level1" :key="key">{{item.levelname}}</p>
            </div>
          </div>
          <div v-if="couponDetail.coupon.limitagentlevels&&couponDetail.coupon.limitagentlevels==='0'&&couponDetail.hascommission">
            {{couponDetail.leveltitle2}}:
            <div v-for="(item,key) in couponDetail.limitagentlevels">
              <p v-if="item=='0'">{{couponDetail.commissionname}}</p>
            </div>
            <p v-for="(item,key) in couponDetail.level2" :key="key">{{item.levelname}}</p>
          </div>
          <div v-if="couponDetail.coupon.limitpartnerlevels&&couponDetail.coupon.limitpartnerlevels==='0'&&couponDetail.hasglobonus">
            {{couponDetail.leveltitle3}}:{{couponDetail.globonuname}}
            <p v-for="(item,key) in couponDetail.level3" :key="key">{{item.levelname}}</p>
          </div>
          <div v-if="couponDetail.coupon.limitaagentlevels&&couponDetail.coupon.limitaagentlevels==='0'&&couponDetail.$hasabonus">
            {{couponDetail.leveltitle4}}:{{couponDetail.abonuname}}
            <p v-for="(item,key) in couponDetail.level4" :key="key">{{item.levelname}}</p>
          </div>
          <div v-if="couponDetail.coupon.islimitlevel=='0'">
            <p>无</p>
          </div>
        </div>
        <div>
          <h6>有效期限</h6>
          <p v-if="couponDetail.coupon.timestr=='0'">永久有效</p>
          <p v-else-if="couponDetail.coupon.timestr=='1'">即{{couponDetail.coupon.gettypestr}}日内{{couponDetail.coupon.timedays}}天有效</p>
          <p v-else>{{couponDetail.coupon.timestr}}</p>
          <p v-if="couponDetail.coupon.merchname=='0'">
            限购{{couponDetail.coupon.merchname}}店铺商品
          </p>

        </div>
        <div>
          <h6>使用限制</h6>
          <p v-if="couponDetail.coupon.coupontype=='2'">本优惠卷只能在收银台中使用</p>
          <p v-if="couponDetail.coupon.limitdiscounttype=='1'">不允许与促销优惠同时使用</p>
          <p v-else-if="couponDetail.coupon.limitdiscounttype=='2'">不允许与会员折扣同时使用</p>
          <p v-else="couponDetail.coupon.limitdiscounttype=='3'">不允许与促销优惠和会员折扣同时使用</p>
          <div v-if="couponDetail.coupon.limitgoodtype=='1'">
            允许以下商品使用：
            <p v-for="(item,key) in couponDetail.goods" :key="key">
              {{item.title}}
            </p>
          </div>
          <div v-if="couponDetail.coupon.limitgoodcatetype=='1'">
            允许以下商品分类使用：
            <p v-for="(item,key) in couponDetail.category" :key="key">
              {{item.name}}
            </p>
          </div>
          <div v-if="couponDetail.coupon.limitgoodtype=='0'&&couponDetail.coupon.limitgoodcatetype=='0'&&couponDetail.coupon.limitdiscounttype=='0'&&couponDetail.coupon.coupontype!='2'">
            <p>无</p>
          </div>
        </div>
      </div>
    </div>
    <yd-button size="large" type="primary" v-if="couponDetail.coupon.canget===false">已达到{{couponDetail.coupon.gettypestr}}上限</yd-button>
    <yd-button size="large" type="primary" v-else-if="couponDetail.pass" @click.native="toGet(couponDetail.coupon.id,couponDetail.coupon.gettypestr)">立即{{couponDetail.coupon.gettypestr}}</yd-button>
    <yd-button size="large" type="primary" v-else>未达到{{couponDetail.coupon.gettypestr}}权限</yd-button>
  </div>
</template>
<style scoped>
  #getQuanDetail .quanBody{
    width:100%;
    margin-bottom:100px;
  }
  #getQuanDetail .quanBody .top{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background: #52b6ff;
    margin:15px 15px 0 15px;
    border-radius: 5px 5px 0 0;
    color:#fff;
    padding:20px;
  }
  #getQuanDetail .quanBody .borderDiv{
    width:100%;
    border:1px solid #fff;
    position: relative;
    height:120px;
  }
  #getQuanDetail .quanBody .borderDiv>p:first-child{
    background: #52b6ff;
    padding:0 5px;
    position: absolute;
    top:-10px;
    left: 50%;
    transform: translate(-50%,-10%);
  }
  #getQuanDetail .quanBody .borderDiv>p:last-child{
    background: #52b6ff;
    padding:0 5px;
    position: absolute;
    bottom:-10px;
    left:50%;
    transform: translate(-50%,20%);
  }
  #getQuanDetail .quanBody .borderDiv  .main{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    margin-top:10px;
  }
  #getQuanDetail .quanBody .bottom{
    background:#fff;
    margin:0px 15px 15px 15px;
    text-align: left;
    padding:0 10px;
    border-radius:0 0 5px 5px;
    border-top: 4px dashed #52b6ff;
    position: relative;
  }
  #getQuanDetail .quanBody .bottom .leftCircle,.rightCircle{
    display: inline-block;
    width:20px;height:20px;background: #fafafa;border-radius: 50%;
    position: absolute;
  }
  #getQuanDetail .quanBody .bottom .leftCircle{
    top:-10px;left:-10px;
  }
  #getQuanDetail .quanBody .bottom .rightCircle{
    top:-10px;right:-10px;
  }
  #getQuanDetail .quanBody .bottom>div{
    padding:20px 0;
  }
  #getQuanDetail .quanBody .bottom>div:not(:last-child){
    border-bottom: 1px dashed #d6d3d6;
  }
  #getQuanDetail .quanBody .bottom>div h6{
    color:#9c9a9c;
    font-size: 18px;
  }
  #getQuanDetail .quanBody .bottom>div p:before{
    content:'';
    display: inline-block;
    width:6px;height:6px;background: #52b6ff;border-radius: 10px;
    margin-right:10px;
  }
  #getQuanDetail button {
    position: fixed !important;
    bottom: 0 !important;
    border-radius: 0 !important;
    height: 1.5625rem !important;
    font-size: 0.5rem !important;
    background: #52b6ff;
  }
</style>
<script>
  export default {
    data(){
      return{

      }
    },
    computed:{
      couponDetail(){
        return this.$store.state.couponDetail
      }
    },
    methods:{
      toGet(id,gettypestr){
        this.$dialog.confirm({
          title: '提示',
          mes: '确认要'+gettypestr+'吗？',
          opts: () => {
            if(gettypestr=='领取'){

            }else if(gettypestr=='购买'){
              this.$store.dispatch({
                type:'couponPay',
                params:{
                  id:id
                }
              })
            }
          }
        });
      },
      back:function () {
        this.$router.go(-1)
      }
    }
  }
</script>
