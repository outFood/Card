<template>
  <div id="slider">
    <yd-slider autoplay="3000">
      <yd-slider-item v-for="(item,key) in imgData" :key="key">
        <router-link to="/fujinIndex/exclusiveShop">
          <img :src="prefix+item.imgurl">
        </router-link>
      </yd-slider-item>
    </yd-slider>

  </div>
</template>
<script>
  export default {
    data(){
      return {
        imgData:[],
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
      prefix(){//轮播图片附加前缀
        return this.$store.state.prefix
      }
    },
    created(){
      setTimeout(()=>{
        for(var key in this.slideData.data){
          this.imgData.push(this.slideData.data[key])
        }
        console.log(this.imgData)
      },1000)
    }
  }
</script>
<style scoped>
 #slider img{
   height:140px;
 }
  .yd-slider-pagination{
    bottom:1.1rem;
  }
</style>
