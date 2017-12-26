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
        return this.$store.state.homeData['1']
      },
      prefix(){//轮播图片附加前缀
        return this.$store.state.prefix
      }
    },
    created(){
      setTimeout(()=>{
        for(var key in this.$store.state.homeData['1'].data){
          this.imgData.push(this.$store.state.homeData['1'].data[key])
        }
      },2000)
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
