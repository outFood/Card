<template>
  <div id="detailPic" v-html="paramsList.content+paramsList.content_text">
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
