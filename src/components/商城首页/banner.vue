<template>
  <div id="slider">
    <yd-slider autoplay="3000" style="height: 140px !important;">
      <yd-slider-item v-for="(item,key) in imgData" :key="key">
        <router-link to="#">
          <img :src="item.imgurl" @click="toSomewhere(item)">
        </router-link>
      </yd-slider-item>
    </yd-slider>

  </div>
</template>
<script>
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
      toSomewhere(item){
        if(item.type==5){
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
