<template>
  <div id="detail" style="padding-bottom: 1.5625rem">
    <headers title="商品详情"></headers>
    <detail-slider></detail-slider>
    <detailTitlePrice></detailTitlePrice>
    <quanAndActive></quanAndActive>
    <yd-tab>
      <yd-tab-panel label="详情"><detail-pic></detail-pic></yd-tab-panel>
      <yd-tab-panel label="参数"><detailParams></detailParams></yd-tab-panel>
      <yd-tab-panel label="评价"><pingjia></pingjia></yd-tab-panel>
    </yd-tab>
    <navbar></navbar>
  </div>
</template>
<script>
  import detailSlider from '@/view/全部商品/detailSlider'
  import navbar from '@/view/全部商品/navbar'
  import detailTitlePrice from '@/view/全部商品/detailTitlePrice'
  import quanAndActive from '@/view/全部商品/quanAndActive'
  import detailParams from '@/view/全部商品/detailParams'
  import detailPic from '@/view/全部商品/detailPic'
  import pingjia from '@/view/全部商品/pingjia'
  import headers from '@/components/headers'
  import config from '../../myConfig'
  export default {
    data(){
      return {

      }
    },
    components:{detailSlider,detailTitlePrice,quanAndActive,navbar,detailParams,detailPic,pingjia,headers},
  }
</script>
<style>
  #detail header{
    position: fixed !important;top:0;left:0;right:0;
  }
  #detail{
    padding-top:42px;
  }
  #detail .yd-tab{
    margin-bottom: 30px;
  }
  #detail .yd-tab-nav-item>a{
    padding:8px 0;
    font-size:.45rem;
  }
</style>
