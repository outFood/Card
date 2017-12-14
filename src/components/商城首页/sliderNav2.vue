<template>
  <div id="sliderNav2" v-if="sliderNavData" :style="{background:sliderNavData.style.background}">
    <yd-slider autoplay="3000">
      <yd-slider-item v-for="(item,key) in haha" :key="key">
          <router-link v-for="(chen,key) in item" :key="key" to="#" :class="['rownum'+sliderNavData.style.rownum]">
            <img :src="prefix+chen.imgurl" alt="" :class="[sliderNavData.style.navstyle]">
            {{chen.text}}
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
        itemNum:0,//页数
        haha:[]
      }
    },
    computed:{
      sliderNavData(){
        return this.$store.state.homeData['4']
      },
      prefix(){//图标附加前缀
        return this.$store.state.prefix
      }
    },
    created(){
      setTimeout(()=>{
        //算出页数
        this.itemNum=Math.ceil(this.sliderNavItem.length/this.$store.state.homeData['4'].style.pagenum)
//        console.log(this.itemNum)
        for(var key in this.$store.state.homeData['4'].data){
          this.sliderNavItem.push(this.$store.state.homeData['4'].data[key])
        }
//        console.log(this.sliderNavItem.length)
        var j=0
        for(var i=0;i<Math.ceil(this.sliderNavItem.length/this.$store.state.homeData['4'].style.pagenum);i++){
//          console.log(this.sliderNavItem.slice(j-this.$store.state.homeData['4'].style.pagenum,j))//删除的
          j+=parseInt(this.$store.state.homeData['4'].style.pagenum)
//          console.log(j)
          this.haha.push(this.sliderNavItem.slice(j-this.$store.state.homeData['4'].style.pagenum,j))
        }
//        console.log(this.haha)
      },2000)
    }
  }
</script>
<style>
  #sliderNav2{
    margin:10px 0;
    font-size:12px;
    padding-top:10px;
  }
  #sliderNav2 .yd-slider-item{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
  }
  #sliderNav2 .yd-slider-item a{
    margin-bottom:10px;
  }
  #sliderNav2 img{
    width:40px;
    height:40px;
    margin: 0 auto;
    margin-bottom:5px;
  }
  #sliderNav2 .radius{
    border-radius: 5px;
  }
  #sliderNav2 .circle{
    border-radius: 50%;
  }
  #sliderNav2 .rownum3{
    flex:0 0 33%;
  }
  #sliderNav2 .rownum4{
    flex:0 0 25%;
  }
  #sliderNav2 .rownum5{
    flex:0 0 20%;
  }
</style>
