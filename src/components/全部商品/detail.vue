<template>
  <div id="detail" style="padding-bottom: 1.5625rem">
    <!--<detail-slider></detail-slider>-->
    <!--<titlePrice></titlePrice>-->
    <yd-tab>
      <yd-tab-panel label="商品">
        <detail-slider></detail-slider>
        <detailTitlePrice></detailTitlePrice>
        <quanAndActive></quanAndActive>
      </yd-tab-panel>
      <yd-tab-panel label="详情"><detail-pic></detail-pic></yd-tab-panel>
      <yd-tab-panel label="参数"><detailParams></detailParams></yd-tab-panel>
      <yd-tab-panel label="评价"><pingjia></pingjia></yd-tab-panel>
    </yd-tab>
    <navbar></navbar>
  </div>
</template>
<script>
  import detailSlider from '@/components/全部商品/detailSlider'
  import navbar from '@/components/全部商品/navbar'
  import detailTitlePrice from '@/components/全部商品/detailTitlePrice'
  import quanAndActive from '@/components/全部商品/quanAndActive'
  import detailParams from '@/components/全部商品/detailParams'
  import detailPic from '@/components/全部商品/detailPic'
  import pingjia from '@/components/全部商品/pingjia'
  export default {
    data(){
      return {

      }
    },
    components:{detailSlider,detailTitlePrice,quanAndActive,navbar,detailParams,detailPic,pingjia}
  }
</script>
<style>
  #detail .yd-tab-nav-item>a{
    padding:8px 0;
    font-size:.45rem;
  }
</style>
