<template>
  <div id="home">
    <fixedsearch></fixedsearch>
    <payment></payment>
    <banner></banner>
    <notice></notice>
    <!--<searchinput></searchinput>-->
    <menu1></menu1>
    <menu2></menu2>
    <goods></goods>
    <picturew></picturew>
    <listmenu></listmenu>
    <get-coupon></get-coupon>
    <footers/>
  </div>
</template>
<style>
  #home{
    padding-top:1.5625rem;
    padding-bottom:2rem;
    font-size:0.4375rem;
  }
</style>
<script>
  import config from '../../myConfig'
  import router from '@/router'
  import fixedsearch from '@/view/商城首页/fixedsearch'
  import payment from '@/view/商城首页/payment'
  import banner from '@/view/商城首页/banner'
  import notice from '@/view/商城首页/notice'
  import searchinput from '@/view/商城首页/searchinput'
  import menu1 from '@/view/商城首页/menu1'
  import menu2 from '@/view/商城首页/menu2'
  import getCoupon from '@/view/商城首页/getCoupon'
  import goods from '@/view/商城首页/goods'
  import picturew from '@/view/商城首页/picturew'
  import shopList from '@/view/附近商家/shopList'
  import listmenu from '@/view/商城首页/listmenu'
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
      searchinput,
      menu1,
      menu2,
      goods,
      picturew,
      shopList,
      listmenu,
      getCoupon
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
    beforeCreate(){
      this.$store.dispatch({
        type:'resHomeData',
        params:{
          id:config.homeid,
          t:config.t,
          i:config.i,
          uniacid:config.uniacid
        }
      })
    }
  }
</script>
