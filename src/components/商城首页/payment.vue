<template>
  <div id="payment">
    <router-link to="#" @click.native="resPayItem('tuijian')">
      <img src="/static/img/tuijianma.png" alt="">
      推荐码
    </router-link>
    <router-link to="#" @click.native="resPayItem('fukuan')">
      <img src="/static/img/fukuan.png" alt="">
      我要付款
    </router-link>
    <router-link to="#" @click.native="resPayItem('shoukuan')">
      <img src="/static/img/shoukuan.png" alt="">
      我要收款
    </router-link>
    <router-link to="#" @click.native="resPayItem('vipcard')">
      <img src="/static/img/vip_card2.png" alt="">
      会员卡
    </router-link>
  </div>
</template>
<script>
  import router from '@/router'
  import config from '../../myConfig'
  export default {
    computed:{
      shoukuanMsg(){
        return this.$store.state.shoukuanMsg
      },
      vipCardMsg(){
        return this.$store.state.vipCardMsg
      }
    },
    methods:{
      resPayItem(itemText){
        var openid=localStorage.getItem('openid')
        var mid=localStorage.getItem('userid')
        if(openid!=null&&openid!='undefined'&&mid!=null&&mid!='undefined'){
          if(itemText=='tuijian'){
            this.$store.dispatch({
              type:'resTuiGuang',
              params:{
                uniacid:config.uniacid,
                t:config.t,
                openid:localStorage.getItem('openid'),
                ispost:''
              }
            })
          }else if(itemText=='fukuan'){
            this.$store.dispatch({
              type:'resFuKuan',
              params:{
                uniacid:config.uniacid,
                t:config.t,
                openid:localStorage.getItem('openid'),
                money:''
              }
            })
          }else if(itemText=='shoukuan'){
            this.$store.dispatch({
              type:'resShouKuan',
              params:{
                uniacid:config.uniacid,
                t:config.t,
                openid:localStorage.getItem('openid'),
                amount:''
              }
            })
            setTimeout(()=>{
              if(this.shoukuanMsg){
                this.$dialog.toast({
                  mes:this.shoukuanMsg,
                  timeout: 1000,
                });
              }
            },500)
          }else{
            this.$store.dispatch({
              type:'resVipCard',
              params:{
                uniacid:config.uniacid,
                t:config.t,
                i:config.i,
                mid:localStorage.getItem('userid'),
                openid:localStorage.getItem('openid'),
              }
            })
            setTimeout(()=>{
              if(this.vipCardMsg){
                this.$dialog.toast({
                  mes:this.vipCardMsg,
                  timeout: 1000,
                });
              }
            },500)
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
      },
    }
  }
</script>
<style scoped>
  #payment{
    background: #efbe10;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding:0.3125rem 0;
  }
  #payment img{
    display: block;
    width:1.25rem;
    height:1.25rem;
    margin:0 auto;
    margin-bottom:5px;
  }
  #payment>a{
    flex: 0 0 25%;
    text-align: center;
    color:#fff;
  }
</style>
