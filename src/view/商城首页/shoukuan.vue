<template>
  <div id="shoukuan">
    <h5>收钱</h5>
    <div class="shoukuanma">
      <p class="biaoshi"><img src="/static/img/phone-sky.png" alt="">普通会员</p>
      <h6>扫一扫 ，向我收钱</h6>
      <img :src="shouKuanCode.code" alt="">
      <div>长按图片可保存二维码</div>
    </div>
    <p class="errTip">如果付款失败，将尝试其他付款方式</p>
  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    computed:{
      shouKuanCode(){
        return this.$store.state.shouKuanCode
      }
    }
  }
</script>
<style>
  #shoukuan{
    background: #f1aa4e;
    padding:0.3125rem 0.625rem;
    position: fixed;
    top:0;
    right:0;
    bottom: 0;
    left:0;
  }
  #shoukuan h5{
    color:#fff;
  }
  #shoukuan .shoukuanma{
    background: #fff;
    margin:0.9375rem auto;
    padding-bottom:0.625rem;
  }
  #shoukuan .shoukuanma .biaoshi{
    background: #eee;
    text-align: left;
    padding-left:0.3125rem;
    margin-bottom:0.625rem;
  }
  #shoukuan .shoukuanma .biaoshi img{
    width:0.625rem;
    height:0.625rem;
    vertical-align: middle;
    margin-right:0.3125rem;
  }
  #shoukuan .shoukuanma img{
    margin:0.625rem auto;
  }
  #shoukuan .errTip{
    color:#fff8cb;
    font-size:0.375rem;
  }
</style>
