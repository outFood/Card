<template>
  <div id="zixuan">
    <headers title="自选商品"></headers>
    <div class="switch">
      <div class="open"><span>开启自选</span><yd-switch v-model="openZixuan"></yd-switch></div>
      <p>开启自选后，您的小店里只显示您选择的产品</p>
    </div>
    <div class="switch" v-if="openZixuan">
      <div class="open"><span>开启分类</span><yd-switch v-model="openSort"></yd-switch></div>
      <p>如果您选择的商品较多，建议您开启与总店同步分类</p>
      <div class="open"><span>选择商品</span><i>+ 选择</i></div>
    </div>
    <yd-button size="large" type="danger" class="save">保存设置</yd-button>


    <footers></footers>
  </div>
</template>
<style>
  #zixuan .switch{
    padding:0 0.3125rem;
    background: #fff;
    margin:0.3125rem 0;
    text-align: left;
  }
  #zixuan .switch .open{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    padding:0.3125rem 0;
  }
  #zixuan .switch p{
    font-size:0.3125rem;
    border-top:1px solid #eee;
    padding:5px 0;
    color:#aaa;
  }
  #zixuan .switch i{
    padding:2px 0.3125rem;
    border:1px solid #000;
    border-radius: 5px;
  }
  #zixuan ,save{
    width:90%;
    margin:0.3125rem auto;
  }
</style>
<script>
  import headers from '@/components/headers'
  export default {
    components:{headers},
    data(){
      return {
        openZixuan:false,
        openSort:false
      }
    }
  }
</script>
