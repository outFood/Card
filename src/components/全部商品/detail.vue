<template>
  <div id="detail">

    <detail-slider></detail-slider>
    <navbar></navbar>
  </div>
</template>
<script>
  import detailSlider from '@/components/全部商品/detailSlider'
  import navbar from '@/components/全部商品/navbar'
  export default {
    data(){
      return {

      }
    },
    components:{detailSlider,navbar}
  }
</script>
