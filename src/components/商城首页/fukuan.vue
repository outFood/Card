<template>
  <div id="fukuan">
    <h6>向商家付款</h6>
    <div class="fukuanma">
      <img src="/static/img/timg.jpg" alt="">
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
//     beforeCreate(){
//       this.$store.dispatch({
//         type:'resFuKuan'
//       })
//     }
  }
</script>
<style>
  #fukuan{
    background: #f1aa4e;
    padding: 10px 20px;
    position: fixed;
    top:0;
    right:0;
    bottom: 0;
    left:0;
  }
  #fukuan h6{
    color:#fff;
  }
  #fukuan .fukuanma{
    background: #fff;
    margin:30px auto;
    padding-bottom: 20px;
  }
  #fukuan .fukuanma img{
    margin:20px auto;
  }
  #fukuan .errTip{
  color:#fff8cb;
    font-size: 12px;
  }
</style>
