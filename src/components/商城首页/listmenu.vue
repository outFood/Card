<template>
    <yd-cell-group title="" v-if="listMenuData" id="listmenu"  :style="{background:listMenuData.style.background,marginTop:listMenuData.style.margintop}">
      <yd-cell-item arrow href="#" type="link" v-for="(item,key) in listMenuArr" :key="key">
        <yd-icon slot="icon" name="order" size=".42rem"></yd-icon>
        <span slot="left" :style="{color:listMenuData.style.textcolor}">{{item.text}}</span>
        <span slot="right" :style="{color:listMenuData.style.remarkcolor}">{{item.remark}}</span>
      </yd-cell-item>
    </yd-cell-group>
</template>
<script>
  export default {
    computed:{
      listMenuData(){
        for(var key in this.$store.state.homeData){
          if(this.$store.state.homeData[key].id=="listmenu"){
            return this.$store.state.homeData[key]
          }
        }
      },
      listMenuArr(){
        var listMenuArr=[];
        for(var key in this.$store.state.homeData){
          if(this.$store.state.homeData[key].id=="listmenu"){
            for(var oo in this.$store.state.homeData[key].data){
              listMenuArr.push(this.$store.state.homeData[key].data[oo])
            }
          }
        }
        return listMenuArr
      }
    }
  }
</script>
<style>
  #listmenu .yd-cell-item {
    padding:.3rem 0 .3rem .24rem
  }
  #listmenu span{
    font-size: 0.5rem !important;
  }
  #listmenu i{
    font-size:0.8rem !important;
  }
  #listmenu .yd-cell-arrow:after {
    font-size: .6rem;
  }
</style>
