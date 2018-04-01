<template>
  <div id="fukuan">
    <headers title="我要付款"></headers>
    <section>
      <h6>向商家付款</h6>
      <div class="fukuanma">
        <img :src="fuKuanCode.code" alt="">
        <div>长按图片可保存二维码</div>
      </div>
      <p class="errTip">如果付款失败，将尝试其他付款方式</p>
    </section>
  </div>
</template>
<script>
  import axios from 'axios'
  import config from '../../myConfig'
  import headers from '@/components/headers'
  export default {
    components:{headers},
    data(){
      return {
        fuKuanCode:{}
      }
    },
    beforeCreate(){
      var me=this,params={
          uniacid:config.uniacid,
          t:config.t,
          openid:localStorage.getItem('openid'),
          money:''
      }
      axios.get(config.baseUrl + '/app/index.php?from=wxapp&c=entry&m=ewei_shopv2&do=mobile&r=member.branch.get_payment', {params:params})
        .then(function (res) {
          me.fuKuanCode=res.data.result.data
        }).catch(function (err) {
        console.log('请求失败：' + err)
      })
    }
  }
</script>
<style>
  #fukuan section{
    background: #f1aa4e;
    padding:0.3125rem 0.625rem;
    position: fixed;
    top:0;
    right:0;
    bottom: 0;
    left:0;
  }
  #fukuan section h6{
    color:#fff;
  }
  #fukuan section .fukuanma{
    background: #fff;
    margin:0.9375rem auto;
    padding-bottom: 0.625rem;
  }
  #fukuan section .fukuanma img{
    margin:0.625rem auto;
  }
  #fukuan section .errTip{
  color:#fff8cb;
    font-size:0.375rem;
  }
</style>
