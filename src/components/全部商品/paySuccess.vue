<template>
  <div id="paySuccess">
    <yd-navbar title="支付成功">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon @click.native="back"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div class="car">
      <img src="/static/img/car.png" alt="">
      <div>
        <h3>订单支付成功</h3>
        <span>您的包裹整装待发</span>
      </div>
    </div>
    <div class="address">
      <img src="/static/img/position-o.png" alt="">
      <div class="right">
        <p>联系人：{{curSelAddress.realname}}</p>
        <p>联系电话：{{curSelAddress.mobile}}</p>
        <span>{{curSelAddress.province}} {{curSelAddress.city}} {{curSelAddress.area}} {{curSelAddress.address}}</span>
      </div>
    </div>
    <div class="price">
      <span>实付金额</span>
      <span>16.00</span>
    </div>
    <div class="btn-two">
      <router-link to="#" @click.native="resOrderDetail()">订单详情</router-link>
      <router-link to="/shopIndex">返回首页</router-link>
    </div>
  </div>
</template>
<style>
  #paySuccess{

  }
  #paySuccess>div{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding:10px;
  }
  #paySuccess .car{
    padding: 20px;
    background: orange;
  }
  #paySuccess .car img{
    width:60px;height:60px;
  }
  #paySuccess .car div{
    flex: 0 0 80%;
    text-align: left;
    padding-left:10px;
    color:#fff;
  }
  #paySuccess .car div h3{
    font-size:20px;
  }
  #paySuccess .address{
    margin:10px 0;
  }
  #paySuccess .address img{
    width:20px;height:20px;
  }
  #paySuccess .address .right{
    flex: 0 0 90%;
    text-align: left;
    margin-left:10px;
  }
  #paySuccess .address .right span{
    color:#8A8A8A;
    font-size:12px;
  }
  #paySuccess .price span:nth-child(2){
    color:red
  }
  #paySuccess .btn-two{
    margin:10px 0;
    background: #fafafa;
  }
  #paySuccess .btn-two a{
    border:1px solid #8a8a8a;
    background: #fff;
    flex: 0 0 40%;
    padding:8px 0;
    border-radius: 5px;
  }
</style>
<script>
  import config from '../../myConfig'
  export default {
    methods:{
      back:function () {
        this.$router.go(-1)
      },
      resOrderDetail(){
        this.$store.dispatch({
          type:'resOrderDetail',
          params:{
            t:config.t,
            i:config.i,
            uniacid:config.uniacid,
            mid:localStorage.getItem('userid'),
            openid:localStorage.getItem('openid'),
            id:this.$store.state.selPay.order.id
          }
        })
      },
    },
    computed:{
      curSelAddress(){
        return this.$store.state.curSelAddress
      },
    }
  }
</script>
