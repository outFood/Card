<template>
  <div id="exclusiveShop">
    <div v-html="exclusiveShopData.index_cache"></div>
  </div>
</template>
<script>
  export default {
    computed:{
      exclusiveShopData(){
        return this.$store.state.exclusiveShopData
      },
    }
  }
</script>
<style>
  #exclusiveShop{
    background: #fff;
  }
  #exclusiveShop img{
    width:100% !important;
  }
</style>
