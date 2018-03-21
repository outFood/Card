<template>
    <yd-cell-group title="" v-if="listMenuData" id="listmenu"  :style="{background:listMenuData.style.background,marginTop:listMenuData.style.margintop}">
      <yd-cell-item arrow href="#" type="link" v-for="(item,key) in listMenuArr" :key="key" @click.native="toSomewhere(item.type)">
        <yd-icon slot="icon" name="order" size=".42rem"></yd-icon>
        <span slot="left" :style="{color:listMenuData.style.textcolor}">{{item.text}}</span>
        <span slot="right" :style="{color:listMenuData.style.remarkcolor}">{{item.remark}}</span>
      </yd-cell-item>
    </yd-cell-group>
</template>
<script>
  import router from '@/router'
  import config from '../../myConfig'
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
    },
    methods:{
      toSomewhere(type){
        console.log(type)
        if(type==5){
          this.$store.dispatch({
            type:'lookCart',
            params:{
              t:config.t,
              i:config.i,
              uniacid:config.uniacid,
              mid:localStorage.getItem('userid'),
              openid:localStorage.getItem('openid')
            }
          })
        }else if(type==2){
          this.$store.dispatch({
            type:'resSortData',
            params:{
              i:config.i,
              t:config.t,
              uniacid:config.uniacid
            }
          })
        }else if(type==3){
          router.push({path: '/sortIndex/someSort'})
        }else if(type==1){
          this.$store.dispatch({
            type:'resHomeData',
            params:{
              id:config.homeid,
              t:config.t,
              i:config.i,
              uniacid:config.uniacid
            }
          })
        }else if(type==12){
          this.$store.dispatch({
            type: 'resWode',
            params:{
              openid:localStorage.getItem('openid'),
              mid:localStorage.getItem('userid'),
              t:config.t,
              uniacid:config.uniacid,
              i:config.i
            }
          })
        }else if(type==13){
          this.$store.dispatch({
            type:'resMyOrder',
            text:'全部订单'
          })
        }else if(type==19){
          router.push({path: '/vipIndex/myLike'})
        }else if(type==20){
          router.push({path: '/vipIndex/zuji'})
        }else if(type==20){
          router.push({path: '/vipIndex/recharge'})
        }
      }
    },
  }
</script>
<style>
  #listmenu .yd-cell-item {
    padding:.2rem 0 .2rem .24rem
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
