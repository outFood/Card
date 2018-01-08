<template>
  <div id="shoukuan">
    <h5>收钱</h5>
    <div class="shoukuanma">
      <p class="biaoshi"><img src="/static/img/phone-sky.png" alt="">普通会员</p>
      <h6>扫一扫 ，向我收钱</h6>
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
//         type:'resShouKuan'
//       })
//     }
  }
</script>
<style>
  #shoukuan{
    background: #f1aa4e;
    padding: 10px 20px;
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
    margin:30px auto;
    padding-bottom: 20px;
  }
  #shoukuan .shoukuanma .biaoshi{
    background: #eee;
    text-align: left;
    padding-left: 10px;
    margin-bottom:20px;
  }
  #shoukuan .shoukuanma .biaoshi img{
    width:20px;
    height:20px;
    vertical-align: middle;
    margin-right:10px;
  }
  #shoukuan .shoukuanma img{
    margin:20px auto;
  }
  #shoukuan .errTip{
    color:#fff8cb;
    font-size: 12px;
  }
</style>
