<template>
  <div id="detailParams">
    <div v-for="(item,key) in paramsList" :key="key">
      <div class="left">{{item.title}}</div>
      <div class="right">{{item.value}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    computed:{
      paramsList(){
        return this.$store.state.commodityDetailData.params
      }
    }
  }
</script>
<style>
  #detailParams{
    background: #fff;
  }
  #detailParams>div{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 10px 0;
    border-bottom:1px solid #eee;
    font-size:12px;
  }
  #detailParams>div .left{
    flex: 0 0 30%;
    text-align: right;
    padding-right:10px;
  }
  #detailParams>div .right{
    flex: 0 0 70%;
    text-align: left;
    padding-left:10px;
    border-left:1px solid #eee
  }
</style>
