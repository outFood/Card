<template>
  <div id="home">
    <headers></headers>
    <payment></payment>
    <slider></slider>
    <gonggao></gonggao>
    <sliderNav></sliderNav>
    <vipSort></vipSort>
    <nursing></nursing>
    <brand></brand>
    <footers/>
  </div>
</template>
<style>
  #home{
    padding-top:50px;
    padding-bottom:65px;
    font-size:0.4375rem;
  }
</style>
<script>
  import headers from '@/components/商城首页/headers'
  import payment from '@/components/商城首页/payment'
  import slider from '@/components/商城首页/slider'
  import gonggao from '@/components/商城首页/gonggao'
  import sliderNav from '@/components/商城首页/sliderNav'
  import vipSort from '@/components/商城首页/vipSort'
  import nursing from '@/components/商城首页/nursing'
  import brand from '@/components/商城首页/brand'
  export default {
    components:{
      headers,
      payment,
      slider,
      gonggao,
      sliderNav,
      vipSort,
      nursing,
      brand
    },
  }
</script>
