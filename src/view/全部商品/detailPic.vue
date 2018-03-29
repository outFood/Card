<template>
  <div id="detailPic" v-html="paramsList.content">
  </div>
</template>
<script>
  export default {
    computed:{
      paramsList(){
        return this.$store.state.commodityDetailData.result.goods
      }
    }
  }
</script>
<style>
  #detailPic img{
    width:100%;
  }
</style>
