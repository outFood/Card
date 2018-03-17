<template>
  <div id="gonggao" v-if="gonggaoData&&gonggaoItem" :style="{background:gonggaoData.style.background,borderColor:gonggaoData.style.bordercolor}">
    <img :src="gonggaoData.params.iconurl" alt="">
    <yd-rollnotice :speed="gonggaoData.params.speed+'00'">
      <yd-rollnotice-item v-for="(item,key) in gonggaoItem" :key="key"><router-link to="#" :style="{color:gonggaoData.style.color,}" @click.native="toNoticePage(item.linkurl)"><img src="/static/img/tongzhi.png" alt="">{{item.title}}</router-link></yd-rollnotice-item>
    </yd-rollnotice>
  </div>
</template>
<script>
  import config from '../../myConfig'
  export default {
    data(){
      return{
        gonggaoItem:[],
      }
    },
    computed:{
      gonggaoData(){
        for(var key in this.$store.state.homeData){
          if(this.$store.state.homeData[key].id=="notice"){
            return this.$store.state.homeData[key]
          }
        }
      },
    },
    methods:{
      toNoticePage(linkurl){
        window.location.href=linkurl
      }
    },
    created(){
      setTimeout(()=>{
        for(var key in this.gonggaoData.data){
          this.gonggaoItem.push(this.gonggaoData.data[key])
        }
      },1000)
    },
  }
</script>
<style scoped>
  #gonggao{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    background: #fff;
    padding: 5px 0.3125rem;
    border:1px solid transparent;
   }
  #gonggao img{
    width:0.625rem;
    height:0.625rem;
    margin-right:0.3125rem;
    vertical-align: middle;
  }
  #gonggao .yd-rollnotice{
    border-left:1px solid #eee;
    background: transparent;
    text-align: left;
    padding-left:0.3125rem;
  }
  #gonggao .yd-rollnotice a{
    width:100%;
  }
</style>
