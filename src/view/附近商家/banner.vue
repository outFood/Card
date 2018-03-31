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
    height:130px;
  }

  #banner .yd-slider-pagination{
    bottom: 0.3rem;
  }
  .yd-slider-pagination .yd-slider-pagination-item{
    width: 13px;
    height: 13px;
    background: #FFF;
    opacity: 0.7;
    margin: 0.08rem
  }

  .yd-slider-pagination .yd-slider-pagination-item-active{
    background: #FFF;
    opacity: 1
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
