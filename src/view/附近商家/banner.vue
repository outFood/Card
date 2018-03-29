<template>
  <yd-slider autoplay="3000" id="banner">
    <yd-slider-item v-for="(item,key) in getFujin_slideData" :key="key">
      <a href="#">
        <img :src="item.thumb">
      </a>
    </yd-slider-item>
  </yd-slider>
</template>
<style>
  #banner img{
    height:150px;
  }
</style>
<script>
  export default {
    computed:{
      getFujin_slideData(){
        return this.$store.state.getFujin_slideData
      }
    }
  }
</script>
