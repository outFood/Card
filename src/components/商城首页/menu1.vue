<template>
  <div id="sliderNav1" v-if="sliderNavData" :style="{background:sliderNavData.style.background}">
    <yd-slider autoplay="3000">
      <yd-slider-item>
          <router-link  v-for="(item,key) in sliderNavItem" :key="key" :to="item.linkurl" :class="['rownum'+sliderNavData.style.rownum]"  @click.native="clickMenu(item.text)">
            <img :src="item.imgurl" alt="" :class="[sliderNavData.style.navstyle]">
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
    },
    created(){
      setTimeout(()=>{
        for(var key in this.sliderNavData.data){
          this.sliderNavItem.push(this.sliderNavData.data[key])
        }
      },1000)
    },
    methods:{
      clickMenu(text){
        if(text=='分销中心'){
          this.$store.dispatch({
            type:'resFenxiao'
          })
        }else if(text=='代理中心'){
          router.push({path:'/agentIndex'})
        }
      }
    },
  }
</script>
<style>
  #sliderNav1{
    margin:0.3125rem 0;
    font-size:0.375rem;
    padding-top:0.3125rem;
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
    margin-bottom:0.3125rem;
  }
  #sliderNav1 img{
    width:1.5rem;
    height:1.5rem;
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
