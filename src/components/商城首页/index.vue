<template>
  <div id="home">
    <fixedsearch></fixedsearch>
    <payment></payment>
    <banner></banner>
    <!--<titles></titles>-->
    <notice></notice>
    <!--<picwindow></picwindow>-->
    <!--<searchinput></searchinput>-->
    <menu1 v-if="pagenum==len"></menu1>
    <menu2 v-else></menu2>
    <goods></goods>
    <!--<nursing></nursing>-->
    <!--<brand></brand>-->
    <!--<pics></pics>-->
    <qqqqqq />
    <listnavigation />
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
  import fixedsearch from '@/components/商城首页/fixedsearch'
  import payment from '@/components/商城首页/payment'
  import searchinput from '@/components/商城首页/searchinput'
  import banner from '@/components/商城首页/banner'
  import notice from '@/components/商城首页/notice'
  import menu1 from '@/components/商城首页/menu1'
  import menu2 from '@/components/商城首页/menu2'
  import goods from '@/components/商城首页/goods'
  import nursing from '@/components/商城首页/nursing'
  import brand from '@/components/商城首页/brand'
  import pics from '@/components/商城首页/pics'
  import titles from '@/components/商城首页/titles'
  import picwindow from '@/components/商城首页/picwindow'
  import qqqqqq from '@/components/商城首页/qqqqqq'
  import shopList from '@/components/附近商家/shopList'
  import listnavigation from '@/components/商城首页/listnavigation'
  export default {
    data(){
      return{
        pagenum:0,
        len:0,
      }
    },
    components:{
      fixedsearch,
      payment,
      banner,
      notice,
      menu1,
      menu2,
      searchinput,
      goods,
      nursing,
      brand,
      pics,
      picwindow,
      shopList,
      listnavigation,
      titles,
      qqqqqq
    },
   computed:{
     sliderNavData(){
       for(var key in this.$store.state.homeData){
         if(this.$store.state.homeData[key].id=="menu"){
           return this.$store.state.homeData[key]
         }
       }
     },
   },
    created(){
      setTimeout(()=>{
        this.pagenum=this.sliderNavData.style.pagenum
        for(var key in this.sliderNavData.data){
          this.len++
        }
      },1000)
    },
  }
</script>
