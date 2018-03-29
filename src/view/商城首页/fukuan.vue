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
  import headers from '@/components/headers'
  export default {
    components:{headers},
    data(){
      return {

      }
    },
    computed:{
      fuKuanCode(){
        return this.$store.state.fuKuanCode
      }
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
