<template>
  <div id="sliderNav1" v-if="sliderNavData" :style="{background:sliderNavData.style.background}">
    <yd-slider autoplay="3000">
      <yd-slider-item>
          <router-link  v-for="(item,key) in sliderNavItem" :key="key" :to="item.linkurl" :class="['rownum'+sliderNavData.style.rownum]">
            <img :src="prefix+item.imgurl" alt="" :class="[sliderNavData.style.navstyle]">
            {{item.text}}
          </router-link>
      </yd-slider-item>
    </yd-slider>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        sliderNavItem:[],
      }
    },
    computed:{
      sliderNavData(){
        for(var key in this.$store.state.homeData){
          if(this.$store.state.homeData[key].id=="menu"){
            return this.$store.state.homeData[key]
          }
        }
      },
      prefix(){//图标附加前缀
        return this.$store.state.prefix
      }
    },
    created(){
      setTimeout(()=>{
        for(var key in this.sliderNavData.data){
          this.sliderNavItem.push(this.sliderNavData.data[key])
        }
      },1000)
    }
  }
</script>
<style>
  #sliderNav1{
    margin:10px 0;
    font-size:12px;
    padding-top:10px;
  }
  #sliderNav1 .yd-slider-item{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  #sliderNav1 .yd-slider-item a{
    margin-bottom:10px;
  }
  #sliderNav1 img{
    width:40px;
    height:40px;
    margin: 0 auto;
    margin-bottom:5px;
  }
  #sliderNav1 .radius{
    border-radius: 5px;
  }
  #sliderNav1 .circle{
    border-radius: 50%;
  }
  #sliderNav1 .rownum3{
    flex:0 0 33%;
  }
  #sliderNav1 .rownum4{
    flex:0 0 25%;
  }
  #sliderNav1 .rownum5{
    flex:0 0 20%;
  }
</style>
