<template>
  <div id="detail" style="padding-bottom: 50px">
    <!--<detail-slider></detail-slider>-->
    <!--<titlePrice></titlePrice>-->
    <yd-tab>
      <yd-tab-panel label="商品">
        <detail-slider></detail-slider>
        <detailTitlePrice></detailTitlePrice>
      </yd-tab-panel>
      <yd-tab-panel label="详情"><detail-pic></detail-pic></yd-tab-panel>
      <yd-tab-panel label="参数"><detailParams></detailParams></yd-tab-panel>
      <yd-tab-panel label="评价">真理惟一可靠的标准就是永远自相符合。</yd-tab-panel>
    </yd-tab>
    <navbar></navbar>
  </div>
</template>
<script>
  import detailSlider from '@/components/全部商品/detailSlider'
  import navbar from '@/components/全部商品/navbar'
  import detailTitlePrice from '@/components/全部商品/detailTitlePrice'
  import detailParams from '@/components/全部商品/detailParams'
  import detailPic from '@/components/全部商品/detailPic'
  export default {
    data(){
      return {

      }
    },
    components:{detailSlider,detailTitlePrice,navbar,detailParams,detailPic}
  }
</script>
<style>
</style>
