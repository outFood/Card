<template>
  <div id="slider">
    <yd-slider autoplay="3000" style="height: 140px !important;">
      <yd-slider-item v-for="(item,key) in imgData" :key="key">
        <router-link to="#">
          <img :src="item.imgurl" @click="toSomewhere(item.type)">
        </router-link>
      </yd-slider-item>
    </yd-slider>

  </div>
</template>
<script>
  import router from '@/router'
  import config from '../../myConfig'
  export default {
    data(){
      return {
        imgData:[],
        tipMsg:''
      }
    },
    computed:{
      slideData(){
        for(var key in this.$store.state.homeData){
          if(this.$store.state.homeData[key].id=="banner"){
            return this.$store.state.homeData[key]
          }
        }
      },
    },
    created(){
      setTimeout(()=>{
        for(var key in this.slideData.data){
          this.imgData.push(this.slideData.data[key])
        }
      },1000)
    },
    methods:{
      toSomewhere(type){
        console.log(type)
        if(type==5){
          this.$store.dispatch({
            type:'lookCart',
            params:{
              t:config.t,
              i:config.i,
              uniacid:config.uniacid,
              mid:localStorage.getItem('userid'),
              openid:localStorage.getItem('openid')
            }
          })
        }else if(type==2){
          this.$store.dispatch({
            type:'resSortData',
            params:{
              i:config.i,
              t:config.t,
              uniacid:config.uniacid
            }
          })
        }else if(type==3){
          router.push({path: '/sortIndex/someSort'})
        }else if(type==1){
          this.$store.dispatch({
            type:'resHomeData',
            params:{
              id:config.homeid,
              t:config.t,
              i:config.i,
              uniacid:config.uniacid
            }
          })
        }else if(type==12){
          this.$store.dispatch({
            type: 'resWode',
            params:{
              openid:localStorage.getItem('openid'),
              mid:localStorage.getItem('userid'),
              t:config.t,
              uniacid:config.uniacid,
              i:config.i
            }
          })
        }else if(type==13){
          this.$store.dispatch({
            type:'resMyOrder',
            text:'全部订单'
          })
        }else if(type==19){
          console.log('ffffffffff')
          router.push({path: '/vipIndex/myLike'})
        }else if(type==20){
          router.push({path: '/vipIndex/zuji'})
        }else if(type==20){
          router.push({path: '/vipIndex/recharge'})
        }
      }
    }
  }
</script>
<style scoped>
 #slider img{
   height:140px;
 }
 #slider .yd-slider-pagination{
    bottom:1.1rem;
  }
</style>
