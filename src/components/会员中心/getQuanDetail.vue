<template>
  <div id="getQuanDetail">
    <headers title="优惠券详情"></headers>
    <div class="quanBody">
      <div class="top">
        <div class="borderDiv">
          <p>充值优惠券</p>
         <div class="main1" v-if="couponDetail.coupon.backtype=='2'">
           <div class="left">
             <p>{{couponDetail.coupon.title2}}</p>
             <span>立返</span>
           </div>
           <div class="right">
             <p v-if="couponDetail.coupon.backmoney&&couponDetail.coupon.backmoney>0">{{couponDetail.coupon.backmoney}}元余额</p>
             <p v-if="couponDetail.coupon.backcredit&&couponDetail.coupon.backcredit>0">{{couponDetail.coupon.backcredit}}积分</p>
             <p v-if="couponDetail.coupon.backredpack&&couponDetail.coupon.backredpack>0">{{couponDetail.coupon.backredpack}}元红包</p>
           </div>
         </div>
          <div class="main2" v-else>
            <p>{{couponDetail.coupon.title3}}</p>
            <p>{{couponDetail.coupon.title2}}</p>
          </div>
          <p>有效期：即兑换日内30天内有效</p>
        </div>
      </div>
      <div class="bottom">
        <span class="leftCircle"></span>
        <span class="rightCircle"></span>
        <div v-if="couponDetail.coupon.merchname">
          <h6>使用商铺</h6>
          <p>限购{{couponDetail.coupon.merchname}}店铺商品</p>
        </div>
        <div>
          <h6>所需金额与积分</h6>
          <p v-if="couponDetail.coupon.money>0">所需金额：{{couponDetail.coupon.money}}</p>
          <p v-if="couponDetail.coupon.credit>0">所需积分：{{couponDetail.coupon.credit}}</p>
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
            <div v-if="couponDetail.coupon.limitmemberlevels">
              会员等级：
              <p v-if="couponDetail.meblvname">{{couponDetail.meblvname}}</p>
              <p v-for="(item,key) in couponDetail.level1" :key="key">{{item.levelname}}</p>
            </div>
            <div v-if="couponDetail.coupon.limitagentlevels&&couponDetail.coupon.limitagentlevels.length>0&&couponDetail.hascommission">
              {{couponDetail.leveltitle2}}等级:
              <div v-for="(item,key) in couponDetail.limitagentlevels">
                <p v-if="item=='0'">{{couponDetail.commissionname}}</p>
              </div>
              <p v-for="(item,key) in couponDetail.level2" :key="key">{{item.levelname}}</p>
            </div>
            <div v-if="couponDetail.coupon.limitpartnerlevels&&couponDetail.hasglobonus">
              {{couponDetail.leveltitle3}}:{{couponDetail.globonuname}}
              <p v-for="(item,key) in couponDetail.level3" :key="key">{{item.levelname}}</p>
            </div>
            <div v-if="couponDetail.abonuname">
              {{couponDetail.leveltitle4}}等级:{{couponDetail.abonuname}}
              <p v-for="(item,key) in couponDetail.level4" :key="key">{{item.levelname}}</p>
            </div>
          </div>
          <div v-if="couponDetail.coupon.islimitlevel=='0'">
            <p>无</p>
          </div>
        </div>
        <div>
          <h6>有效期限</h6>
          <p v-if="couponDetail.coupon.timestr=='0'">永久有效</p>
          <p v-else-if="couponDetail.coupon.timestr=='1'">即{{couponDetail.coupon.gettypestr}}日内{{couponDetail.coupon.timedays}}天有效</p>
          <p v-else>有效期{{couponDetail.coupon.timestr}}</p>
          <p v-if="couponDetail.coupon.merchname">
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
  #getQuanDetail .quanBody {
    width: 100%;
    margin-bottom: 100px;
  }

  #getQuanDetail .quanBody .top {
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

  #getQuanDetail .quanBody .borderDiv {
    width: 100%;
    border: 1px solid #fff;
    position: relative;
    padding:.4rem 0 0.9rem 0
  }

  #getQuanDetail .quanBody .borderDiv > p:first-child {
    background: #52b6ff;
    padding: 0 5px;
    position: absolute;
    top: -0.3125rem;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  #getQuanDetail .quanBody .borderDiv > p:last-child {
    background: #52b6ff;
    padding: 0 5px;
    position: absolute;
    bottom: -0.3125rem;
    left: 50%;
    transform: translate(-50%, 20%);
  }

  #getQuanDetail .quanBody .borderDiv .main1 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    margin-top: 0.3125rem;
  }

  #getQuanDetail .quanBody .borderDiv .main1 .left {
    flex: 0 0 50%;
  }

  #getQuanDetail .quanBody .borderDiv .main1 .left span {
    font-size:0.9375rem;
  }

  #getQuanDetail .quanBody .borderDiv .main1 .right {
    flex: 0 0 50%;
  }

  #getQuanDetail .quanBody .borderDiv .main2 {
    margin-top: 0.5rem;
    font-size:.6rem;line-height: 1rem;
  }

  #getQuanDetail .quanBody .bottom {
    background: #fff;
    margin: 0px 0.5rem 0.5rem 0.5rem;
    text-align: left;
    padding: 0 0.3125rem;
    border-radius: 0 0 5px 5px;
    border-top: 4px dashed #52b6ff;
    position: relative;
  }

  #getQuanDetail .quanBody .bottom .leftCircle, .rightCircle {
    display: inline-block;
    width: 0.625rem;
    height: 0.625rem;
    background: #fafafa;
    border-radius: 50%;
    position: absolute;
  }

  #getQuanDetail .quanBody .bottom .leftCircle {
    top: -0.3125rem;
    left: -0.3125rem;
  }

  #getQuanDetail .quanBody .bottom .rightCircle {
    top: -0.3125rem;
    right: -0.3125rem;
  }

  #getQuanDetail .quanBody .bottom > div {
    padding: 0.625rem 0;
  }

  #getQuanDetail .quanBody .bottom > div:not(:last-child) {
    border-bottom: 1px dashed #d6d3d6;
  }

  #getQuanDetail .quanBody .bottom > div h6 {
    color: #9c9a9c;
    font-size: 0.5625rem;
  }

  #getQuanDetail .quanBody .bottom > div p:before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    background: #52b6ff;
    border-radius: 0.3125rem;
    margin-right: 0.3125rem;
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
  import config from '../../myConfig'
  import axios from 'axios'
  import headers from '@/components/headers'
  export default {
    components:{headers},
    computed:{
      couponDetail(){
        return this.$store.state.couponDetail
      },
      couponMessage(){
        return this.$store.state.couponMessage
      },
    },
    methods:{
      toGet(id,gettypestr){
        this.$dialog.confirm({
          title: '提示',
          mes: '确认要'+gettypestr+'吗？',
          opts: () => {
            var me=this,params={
              id:id,
              t:config.t,
              i:config.i,
              uniacid:config.uniacid,
              openid:localStorage.getItem('openid'),
              mid:localStorage.getItem('userid')
            }
            axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=sale.coupon.detail.pay', {params:params})
              .then(function (res) {
                if(res.data.status==1){
                  me.$dialog.toast({
                    mes:gettypestr+res.data.result.msg,
                    timeout: 1500
                  });
                  var resultPrams={
                    id:id,
                    logid:res.data.result.data.logid,
                    t:config.t,
                    mid:localStorage.getItem('userid'),
                    openid:localStorage.getItem('openid')
                  }
                  axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=sale.coupon.detail.payresult', {params:resultPrams})
                    .then(function (res) {

                    }).catch(function (err) {console.log(err)})
                }else{
                  me.$dialog.toast({
                    mes:res.data.result.msg,
                    timeout: 1500
                  });
                }
              }).catch(function (err) {
              console.log('领取或购买失败')
            })
          }
        });
      },
      back:function () {
        this.$router.go(-1)
      }
    },
  }
</script>
