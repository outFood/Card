<template>
  <div id="searchShopList">
    <input type="text" placeholder="请输入商家名称" v-model="keyword">
    <span @click="searchShop"><img src="/static/img/search-white.png" alt=""></span>
  </div>
</template>
<script>
  import config from '../../myConfig'
  export default {
    data(){
      return{
        keyword:''
      }
    },
    computed:{
      positionInfo(){
        return this.$store.state.positionInfo
      }
    },
    methods:{
      searchShop(){
        console.log(this.positionInfo)
        this.$store.dispatch({
          type:'resFujinData',
          params:{
            keyword:this.keyword,
            page:1,
            pagesize:10,
            cateid:'',
            t:config.t,
            uniacid:config.t,
            i:config.i,
            lat:this.positionInfo.position.lat,
            lng:this.positionInfo.position.lng
          }
        })
      }
    }
  }
</script>
<style>
  #searchShopList{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    background: #fff;
    padding:10px 5px;
  }
  #searchShopList input{
    border:1px solid blue;
    flex:0 0 80%;
    height:40px;
    padding-left: 10px;
  }
  #searchShopList img{
    width:30px;height:30px;
  }
  #searchShopList span{
    background: blue;
    flex: 0 0 20%;
    height:40px;
    line-height: 60px;
  }
</style>
