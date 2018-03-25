<template>
  <div id="myQuan">
    <headers title="我的优惠券"></headers>
    <div class="orderNav">
      <span>未使用</span>
      <span>已使用</span>
      <span>已过期</span>
    </div>
    <yd-flexbox v-for="(item,key) in list" :key="key">
      <div class="left">
        <div>￥{{item.deduct}}</div>
        {{item.title2}}
        <span></span>
      </div>
      <yd-flexbox-item>
        <div>{{item.tagtitle}}</div>
        <p v-if="item.t>'0'">剩余{{item.t}}/{{item.last}}</p>
        {{item.title4}}
      </yd-flexbox-item>
      <div class="right">
        立即使用
        <span></span>
      </div>
    </yd-flexbox>
  </div>
</template>
<script>
  import config from '../../myConfig'
  import axios from 'axios'
  import headers from '@/components/headers'
  export default {
    components:{headers},
    data(){
      return{
        list:[]
      }
    },
    beforeCreate(){
      var me=this,params={
        t:config.t,
        uniacid:config.uniacid,
        i:config.i,
        mid:localStorage.getItem('userid'),
        openid:localStorage.getItem('openid'),
        page:1,
        pagesize:10,
        cateid:0,
      }
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=sale.coupon.my.getlist', {params:params})
        .then(function (res) {
          me.list=res.data.result.data.list;
        }).catch(function (err) { console.log('请求失败')})
    }
  }
</script>
<style scoped>
  #myQuan .orderNav{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    background: #fff;
    height:1.5625rem;
    line-height:1.5625rem;
  }
  #myQuan .curOrderNav{
    color:red;
    border-bottom:2px solid red;
  }
  #myQuan .orderNav span{
    display: block;
    height:100%;
    flex:0 0 33.33%;
    text-align: center;
  }
 #myQuan .yd-flexbox{
    font-size:14px;
    background: #fff;
    padding:0.625rem;
    margin:0.625rem;
    line-height: 0.625rem;
    position: relative;
  }
 #myQuan .yd-flexbox .left{
    font-size:0.3125rem;
  }
 #myQuan .yd-flexbox .left div{
    font-size:0.625rem;
    font-weight: bold;
    color:red;
  }
 #myQuan .yd-flexbox .yd-flexbox-item{
    font-size:12px;
    color:#999;
  }
 #myQuan .yd-flexbox .yd-flexbox-item div{
    color:#000;
    font-weight: bold;
    font-size: 14px;
  }
 #myQuan .yd-flexbox .right{
    color:red;
  }
 #myQuan .yd-flexbox .right span{
    display: inline-block;
    width:0.625rem;
    height:0.625rem;
    background: #fafafa;
    border-radius: 50%;
  }
 #myQuan .yd-flexbox .left span {
    display: inline-block;
    width: 0.625rem;
    height: 0.625rem;
    background: #fafafa;
    border-radius: 50%;
  }
 #myQuan .right span {
    position: absolute;
    right: -0.3125rem;
    top: 45%;
  }
#myQuan .left span{
    position: absolute;
    left:-0.3125rem;
    top:45%;
  }
</style>
