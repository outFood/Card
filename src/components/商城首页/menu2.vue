<template>
  <div id="sliderNav2" :style="{background:sliderNavData.style.background}">
    <yd-slider autoplay="3000">
      <yd-slider-item v-for="(item,key) in haha" :key="key">
          <router-link v-for="(chen,key) in item" :key="key" to="#" :class="['rownum'+sliderNavData.style.rownum]"  @click.native="clickMenu(chen.text)">
            <img :src="prefix+chen.imgurl" alt="" :class="[sliderNavData.style.navstyle]">
            {{chen.text}}
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
        sliderNavItem:[],
        haha:[]
      }
    },
    computed:{
      sliderNavData(){
        for(var key in this.$store.state.homeData){
          if(this.$store.state.homeData[key].id=='menu'){
            return this.$store.state.homeData[key]
          }
        }
      },
      prefix(){//图标附加前缀
        return this.$store.state.prefix
      },
    },
    methods:{
      clickMenu(text){
        if(text=='分销中心'){
//          var isRegistAgent=localStorage.getItem('isRegistAgent')
//          var status=localStorage.getItem('status')
//          console.log(isRegistAgent)
//          console.log(status)
//          if(isRegistAgent==null&&status==null){//点击分销中心的时候，判断用户有没有注册过和是不是代理商
//            router.push({path:'/distributIndex/apply'})
//          }else if(isRegistAgent==true&&status!=1){
//            router.push({path:'/distributIndex/wait'})
//          }else{
//            router.push({path:'/distributIndex'})
//          }
          router.push({path:'/distributIndex'})
        }else if(text=='代理中心'){
          router.push({path:'/agentIndex/daili'})
        }
      }
    },
    created(){
      for(var key in this.sliderNavData.data){//将对象列表转成数组
        this.sliderNavItem.push(this.sliderNavData.data[key])
      }
      //计算页数:Math.ceil(this.sliderNavItem.length/this.$store.state.homeData['4'].style.pagenum)
      for(var i=0,j=0;i<Math.ceil(this.sliderNavItem.length/this.sliderNavData.style.pagenum);i++){
        //计算一页显示的个数j，并根据j对数组删除指定个数，添加到haha数组中
        j+=parseInt(this.sliderNavData.style.pagenum)
        this.haha.push(this.sliderNavItem.slice(j-this.sliderNavData.style.pagenum,j))
      }
//      console.log(this.haha)
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
