<template>
  <div id="home">
    <headers></headers>
    <payment></payment>
    <slider></slider>
    <gonggao></gonggao>
    <sliderNav1 v-if="pagenum==0"></sliderNav1>
    <sliderNav2 v-else></sliderNav2>
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
  import sliderNav1 from '@/components/商城首页/sliderNav1'
  import sliderNav2 from '@/components/商城首页/sliderNav2'
  import vipSort from '@/components/商城首页/vipSort'
  import nursing from '@/components/商城首页/nursing'
  import brand from '@/components/商城首页/brand'
  export default {
    data(){
      return{
        pagenum:0
      }
    },
    components:{
      headers,
      payment,
      slider,
      gonggao,
      sliderNav1,
      sliderNav2,
      vipSort,
      nursing,
      brand
    },
    created(){
      setTimeout(()=>{
        this.pagenum=this.$store.state.homeData['7'].style.pagenum
      },1000)

    }
  }
</script>
