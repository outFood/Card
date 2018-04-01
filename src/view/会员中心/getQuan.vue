<template>
  <div id="getQuan">
    <headers title="领取优惠券"></headers>
    <yd-flexbox v-for="(item,key) in list" :key="key"  @click.native="resCouponDetail(item.id)">
      <div class="left">
        <div>{{item.title3}}</div>
        {{item.title2}}
        <span></span>
      </div>
      <yd-flexbox-item>
        <div>{{item.tagtitle}}</div>
        <p v-if="item.t>'0'">剩余{{item.t}}/{{item.last}}</p>
        {{item.title4}}
      </yd-flexbox-item>
      <router-link to="#" class="right">
        {{item.gettypestr}}
        <span></span>
      </router-link>
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
    methods:{
      resCouponDetail(id){
        this.$router.push({
          path: '/vipIndex/getQuanDetail',
          query: {
            id:id
          }
        })
      },
    },
    beforeCreate(){
      var me=this,params={
        page:1,
        pagesize:10,
        t:config.t,
        i:config.i,
        uniacid:config.uniacid,
        cateid:0,
      }
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=sale.coupon.index.getlist', {params:params})
        .then(function (res) {
          me.list=res.data.result.data.list
        }).catch(function (err) {
        console.log('请求失败')
      })
    }
  }
</script>
<style scoped>
  #getQuan .yd-flexbox{
    font-size:14px;
    background: #fff;
    padding:0.625rem;
    margin:0.625rem;
    line-height: 0.625rem;
    position: relative;
  }
  #getQuan .yd-flexbox .left{
    font-size:0.3125rem;
  }
  #getQuan .yd-flexbox .left div{
    font-size:0.625rem;
    font-weight: bold;
    color:red;
  }
  #getQuan .yd-flexbox .yd-flexbox-item{
    font-size:12px;
    color:#999;
  }
  #getQuan .yd-flexbox .yd-flexbox-item div{
    color:#000;
    font-weight: bold;
    font-size: 14px;
  }
  #getQuan .yd-flexbox .yd-flexbox-item p{
    color:#52b6ff
  }
  #getQuan .yd-flexbox .right{
    color:red;
  }
  #getQuan .yd-flexbox .right span{
    display: inline-block;
    width:0.625rem;
    height:0.625rem;
    background: #fafafa;
    border-radius: 50%;
  }
  #getQuan .yd-flexbox .left span {
    display: inline-block;
    width: 0.625rem;
    height: 0.625rem;
    background: #fafafa;
    border-radius: 50%;
  }
  #getQuan .right span {
    position: absolute;
    right: -0.3125rem;
    top: 40%;
  }
  #getQuan .left span{
    position: absolute;
    left:-0.3125rem;
    top:45%;
  }
</style>
