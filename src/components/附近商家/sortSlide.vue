<template>
  <div id="sortSlide">
    <yd-slider autoplay="5000">
      <yd-slider-item v-for="(item,key) in haha" :key="key">
        <router-link v-for="(chen,key) in item" :key="key" to="#">
          <img :src="chen.thumb" alt="">
          {{chen.catename}}
        </router-link>
      </yd-slider-item>
    </yd-slider>
  </div>
</template>
<script>
  import router from '@/router'
  export default {
    data(){
      return {
        haha:[]
      }
    },
    computed:{
      Fujin_sortData(){
        return this.$store.state.Fujin_sortData
      },
      prefix(){//图标附加前缀
        return this.$store.state.prefix
      },
    },
    methods:{

    },
    created(){
      var len=this.Fujin_sortData.length
      for(var i=0;i<Math.ceil(this.Fujin_sortData.length/8);i++){
        if(len<8){
          this.haha.push(this.Fujin_sortData.slice(i*8))
        }else if(len>8){
          this.haha.push(this.Fujin_sortData.slice(i*8,8))
        }
        len=Math.abs(len-8)
      }
    }
  }
</script>
<style>
  #sortSlide{
    margin:0.3125rem 0;
    font-size:0.375rem;
    padding-top:0.3125rem;
  }
  #sortSlide .yd-slider-item{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
  }
  #sortSlide .yd-slider-item a{
    margin-bottom:0.3125rem;
    flex:0 0 25%;
  }
  #sortSlide img{
    width:1.25rem;
    height:1.25rem;
    margin: 0 auto;
    margin-bottom:5px;
    border-radius: 50%;
  }
</style>
