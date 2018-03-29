<template>
  <div id="quanAndActive">
    <div class="listItem" @click="show2 = true">
      <div class="left">领券</div>
      <div class="mid"><span>店铺优惠券</span></div>
      <img src="/static/img/more.png" alt="" class="more">
    </div>
    <div class="listItem" @click="show3 = true">
      <div class="left">活动</div>
      <div class="mid"><span>包邮</span>本品满99包邮</div>
      <img src="/static/img/more.png" alt="" class="more">
    </div>
    <yd-popup v-model="show2" position="bottom" height="60%" class="sizePop" id="quanPop">
      <yd-flexbox>
        <div class="left">
          <div>￥78</div>
          满198可用
          <span></span>
        </div>
        <yd-flexbox-item>
          <div>附件见附件发</div>
          <p>剩余分积分积分</p>
          附近附近积分
        </yd-flexbox-item>
        <router-link to="#" class="right">
          见个面
          <span></span>
        </router-link>
      </yd-flexbox>
      <yd-button size="large" type="primary" class="close" @click.native="show2=false">关闭</yd-button>
    </yd-popup>
    <yd-popup v-model="show3" position="bottom" height="60%" class="sizePop" id="activePop">
      <div class="content">
        <h6>活动</h6>
        <div class="activeItem">
          <div class="left"><span>包邮</span></div>
          <div class="right">
            <p>本商品包邮</p>
            <p>单品满 <span>￥100</span> 包邮</p>
          </div>
        </div>
        <div class="activeItem">
          <div class="left"><span>包邮</span></div>
          <div class="right">
            <p>本商品包邮</p>
            <p>单品满 <span>￥100</span> 包邮</p>
          </div>
        </div>
      </div>
      <yd-button size="large" type="danger" class="close" @click.native="show3=false">确定</yd-button>
    </yd-popup>
    <div class="goodsProperty">
      <div v-if="commodityDetailData.result.goods.ishot==1">
        <img src="/static/img/have.png" alt="">热卖
      </div>
      <div v-if="commodityDetailData.result.goods.isnew==1">
        <img src="/static/img/have.png" alt="">新品
      </div>
      <div v-if="commodityDetailData.result.goods.isrecommand==1">
        <img src="/static/img/have.png" alt="">推荐
      </div>
      <div v-if="commodityDetailData.result.goods.issendfree==1">
        <img src="/static/img/have.png" alt="">包邮
      </div>
      <div v-if="commodityDetailData.result.goods.isnodiscount==1">
        <img src="/static/img/have.png" alt="">不参与会员折扣
      </div>
      <div v-if="commodityDetailData.result.goods.quality==1">
        <img src="/static/img/have.png" alt="">正品保证
      </div>
      <div v-if="commodityDetailData.result.goods.repair==1">
        <img src="/static/img/have.png" alt="">保修
      </div>
      <div v-if="commodityDetailData.result.goods.isverify==1">
        <img src="/static/img/have.png" alt="">七天退换
      </div>
    </div>
    <div class="noSend" @click="show4=true">
      <span>不配送区域：广东、广西、海南、深圳、四川、香港、澳门、钓鱼岛</span><img src="/static/img/more.png" alt="">
    </div>
    <yd-popup v-model="show4" position="bottom" height="60%" class="sizePop" id="noSendPop">
      <h6>不配送区域</h6>
      <div class="city">
        <span>高雄市</span>
        <span>台北市</span>
        <span>圣安多尼堂区</span>
        <span>香港岛</span>
        <span>望德堂区</span>
        <span>新界西</span>
        <span>新竹市</span>
        <span>花地玛堂区</span>
      </div>
      <yd-button size="large" type="danger" class="close" @click.native="show4=false">确定</yd-button>
    </yd-popup>
    <div class="toShop">
      <div class="left"><img src="/static/img/LOGO.png" alt="">哈哈哈哈哈哈哈哈</div>
      <span>进店逛逛</span>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        show2:false,
        show3:false,
        show4:false
      }
    },
    computed:{
      commodityDetailData(){
        return this.$store.state.commodityDetailData
      }
    },
  }
</script>
<style>
  #quanAndActive .goodsProperty{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding:0 10px;
  }
  #quanAndActive .goodsProperty>div{
    flex: 0 0 25%;
    margin-top: 20px;
    text-align: left;
  }
  #quanAndActive .goodsProperty>div img{
    width:20px;height:20px;vertical-align: middle;margin-right: 5px;
  }
  #quanAndActive .noSend{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    background: #fff;
    margin-top: 20px;padding:15px  10px;
  }
  #quanAndActive .noSend span{
    flex: 0 0 95%;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  #quanAndActive .noSend img{
    width:20px;height:20px;
  }
  #quanAndActive #noSendPop .city{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  #quanAndActive #noSendPop .city span{
    border:1px solid #eee;padding: 4px 15px;margin:0 0 10px 10px;border-radius: 3px;
  }
  #quanAndActive .toShop{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    background:#fff;
    margin-top: 10px;
    padding:10px;
  }
  #quanAndActive .toShop .left{
    flex:0 0 75%;text-align: left;
  }
  #quanAndActive .toShop .left img{
    width:60px;height:60px;vertical-align: middle;
  }
  #quanAndActive .toShop span{
    padding: 5px 15px;border:1px solid #b2b2b2;border-radius: 20px;
  }

  #quanAndActive{
    margin:10px 0;
  }
  #quanAndActive .listItem{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    padding: 10px 10px 20px 10px;
    background: #fff;
  }
  #quanAndActive .listItem .left{
    color:#6e6e6e;
  }
  #quanAndActive .listItem .mid{
    flex: 0 0 70%;
    text-align: left;
    font-size:12px;
  }
  #quanAndActive .listItem .mid span{
    color:orangered;
    background:blanchedalmond;padding:2px 6px;border-radius: 10px;
  }
  #quanAndActive .listItem .more{
    width:20px;height:20px;
  }
  #quanAndActive #quanPop .yd-popup-content{
    background:#fafafa !important;
  }
  #quanAndActive #quanPop .yd-flexbox{
    font-size:14px;
    background: #fff;
    padding:0.625rem;
    margin:0.625rem;
    line-height: 0.625rem;
    position: relative;
  }
  #quanAndActive #quanPop .yd-flexbox .left{
    font-size:0.3125rem;
  }
  #quanAndActive #quanPop .yd-flexbox .left div{
    font-size:0.625rem;
    font-weight: bold;
    color:red;
  }
  #quanAndActive #quanPop .yd-flexbox .yd-flexbox-item{
    font-size:12px;
    color:#999;
  }
  #quanAndActive #quanPop .yd-flexbox .yd-flexbox-item div{
    color:#000;
    font-weight: bold;
    font-size: 14px;
  }
  #quanAndActive #quanPop .yd-flexbox .yd-flexbox-item p{
    color:#52b6ff
  }
  #quanAndActive #quanPop .yd-flexbox .right{
    color:red;
  }
  #quanAndActive #quanPop .yd-flexbox .right span{
    display: inline-block;
    width:0.625rem;
    height:0.625rem;
    background: #fafafa;
    border-radius: 50%;
  }
  #quanAndActive #quanPop .yd-flexbox .left span {
    display: inline-block;
    width: 0.625rem;
    height: 0.625rem;
    background: #fafafa;
    border-radius: 50%;
  }
  #quanAndActive #quanPop .right span {
    position: absolute;
    right: -0.3125rem;
    top: 40%;
  }
  #quanAndActive #quanPop .left span{
    position: absolute;
    left:-0.3125rem;
    top:45%;
  }
  #quanAndActive .close{
    border-radius: 0;
    position: fixed;bottom: 0;left:0;right:0;height:50px;line-height: 50px;
  }
  #quanAndActive #activePop{

  }
  #quanAndActive .content{
    padding:10px 0;
  }
  #quanAndActive h6{
    font-size:18px;
    margin:15px 0;
  }
  #quanAndActive #activePop .content .activeItem{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    margin-bottom:10px;
  }
  #quanAndActive #activePop .content .activeItem .left{
    flex: 0 0 15%;
  }
  #quanAndActive #activePop .content .activeItem .left span{
    padding:2px 5px;border: 1px solid red;
    color:red;border-radius: 3px;
    font-size:12px;
  }
  #quanAndActive #activePop .content .activeItem .right{
    text-align: left;
  }
  #quanAndActive #activePop .content .activeItem .right span{
    color:red;
  }
</style>
