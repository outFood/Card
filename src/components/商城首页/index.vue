<template>
  <div id="home">
    <headers></headers>
    <payment></payment>
    <slider></slider>
    <!--<titles></titles>-->
    <!--<gonggao></gonggao>-->
    <!--<picwindow></picwindow>-->
    <!--<searchinput></searchinput>-->
    <!--<sliderNav1 v-if="pagenum==0"></sliderNav1>-->
    <!--<sliderNav2 v-else></sliderNav2>-->
    <!--<vipSort></vipSort>-->
    <!--<nursing></nursing>-->
    <!--<brand></brand>-->
    <!--<pics></pics>-->
    <!--<goods />-->
    <!--<merchgroup />-->
    <!--<listnavigation />-->
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
  import searchinput from '@/components/商城首页/searchinput'
  import slider from '@/components/商城首页/slider'
  import gonggao from '@/components/商城首页/gonggao'
  import sliderNav1 from '@/components/商城首页/sliderNav1'
  import sliderNav2 from '@/components/商城首页/sliderNav2'
  import vipSort from '@/components/商城首页/vipSort'
  import nursing from '@/components/商城首页/nursing'
  import brand from '@/components/商城首页/brand'
  import pics from '@/components/商城首页/pics'
  import titles from '@/components/商城首页/titles'
  import picwindow from '@/components/商城首页/picwindow'
  import goods from '@/components/商城首页/goods'
  import merchgroup from '@/components/商城首页/merchgroup'
  import listnavigation from '@/components/商城首页/listnavigation'
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
      searchinput,
      vipSort,
      nursing,
      brand,
      pics,
      picwindow,
      merchgroup,
      listnavigation,
      titles,
      goods
    },
//    created(){
//      setTimeout(()=>{
//        this.pagenum=this.$store.state.homeData['1'].style.pagenum
//      },1000)
//
//    }
  }
</script>
