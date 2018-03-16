<template>
  <yd-slider autoplay="3000" id="detailSlider">
    <yd-slider-item v-for="(item,key) in thumbs" :key="key">
      <a>
        <img :src="item">
      </a>
    </yd-slider-item>
  </yd-slider>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    computed:{
      thumbs(){
        return this.$store.state.commodityDetailData.result.goods.thumbs
      },
    },
  }
</script>
<style>
  #detailSlider .yd-slider-item img{
    height:350px;
  }
#detailSlider .yd-slider{
    height:300px !important;
  }

</style>
