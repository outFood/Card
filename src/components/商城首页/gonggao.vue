<template>
  <div id="gonggao" v-if="gonggaoData&&gonggaoItem" :style="{background:gonggaoData.style.background,borderColor:gonggaoData.style.bordercolor}">
    <img :src="prefix+gonggaoData.params.iconurl" alt="">
    <yd-rollnotice :speed="gonggaoData.params.speed+'00'">
      <yd-rollnotice-item v-for="(item,key) in gonggaoItem" :key="key"><router-link to="item.linkUrl" :style="{color:gonggaoData.style.color,}"><img src="/static/img/tongzhi.png" alt="">{{item.title}}</router-link></yd-rollnotice-item>
    </yd-rollnotice>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        gonggaoItem:[],
      }
    },
    computed:{
      gonggaoData(){
        return this.$store.state.homeData['2']
      },
      prefix(){//图标附加前缀
        return this.$store.state.prefix
      }

    },
    created(){
      setTimeout(()=>{
        for(var key in this.$store.state.homeData['2'].data){
          this.gonggaoItem.push(this.$store.state.homeData['2'].data[key])
        }
      },2000)
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
    padding: 5px 10px;
    border:1px solid transparent;
   }
  #gonggao img{
    width:20px;
    height:20px;
    margin-right:10px;
    vertical-align: middle;
  }
  #gonggao .yd-rollnotice{
    border-left:1px solid #eee;
    background: transparent;
  }
  #gonggao .yd-rollnotice a{
    width:100%;
  }
</style>
