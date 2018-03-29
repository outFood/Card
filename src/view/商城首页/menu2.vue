<template>
  <div id="sliderNav2" :style="{background:sliderNavData.style.background}">
    <yd-slider autoplay="5000">
      <yd-slider-item v-for="(item,key) in haha" :key="key">
          <router-link v-for="(chen,key) in item" :key="key" to="#" :class="['rownum'+sliderNavData.style.rownum]"  @click.native="clickMenu(chen.type)">
            <img :src="chen.imgurl" alt="" :class="[sliderNavData.style.navstyle]">
            {{chen.text}}
          </router-link>
      </yd-slider-item>
    </yd-slider>
  </div>
</template>
<script>
  import config from '../../myConfig'
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
    },
    methods:{
      clickMenu(type){
        var openid=localStorage.getItem('openid')
        var mid=localStorage.getItem('userid')
        if(openid!=null&&openid!='undefined'&&mid!=null&&mid!='undefined'){
          if(type==29){
            this.$store.dispatch({
              type:'resFenxiao'
            })
          }else if(type==63){
            this.$store.dispatch({
              type:'resAgent'
            })
          }
          else if(type==3){
            this.$store.dispatch({
              type:'resSortData',
              params:{
                i:config.i,
                t:config.t,
                uniacid:config.uniacid
              }
            })
          }
        }else{
          this.$dialog.confirm({
            title: '提示',
            mes: '请先登录！',
            opts: () => {
              router.push({path: '/vipIndex/login'})
            }
          });
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
    margin:0.3125rem 0;
    font-size:0.375rem;
    padding-top:0.3125rem;
  }
  #sliderNav2 .yd-slider-item{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
  }
  #sliderNav2 .yd-slider-item a{
    margin-bottom:0.3125rem;
  }
  #sliderNav2 img{
    width:1.5rem;
    height:1.5rem;
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
