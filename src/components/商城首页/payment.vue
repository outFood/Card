<template>
  <div id="payment">
    <router-link to="#" @click.native="resTuiGuang">
      <img src="/static/img/tuijianma.png" alt="">
      推荐码
    </router-link>
    <router-link to="#" @click.native="resFuKuan">
      <img src="/static/img/fukuan.png" alt="">
      我要付款
    </router-link>
    <router-link to="#" @click.native="resShouKuan">
      <img src="/static/img/shoukuan.png" alt="">
      我要收款
    </router-link>
    <router-link to="#" @click.native="resVipCard">
      <img src="/static/img/vip_card2.png" alt="">
      会员卡
    </router-link>
  </div>
</template>
<script>
  import config from '../../myConfig'
  export default {
    computed:{
      shoukuanMsg(){
        return this.$store.state.shoukuanMsg
      }
    },
    methods:{
      resTuiGuang(){
        this.$store.dispatch({
          type:'resTuiGuang',
          params:{
            uniacid:config.uniacid,
            t:config.t,
            openid:localStorage.getItem('openid'),
            ispost:''
          }
        })
      },
      resFuKuan(){
        this.$store.dispatch({
          type:'resFuKuan',
          params:{
            uniacid:config.uniacid,
            t:config.t,
            openid:localStorage.getItem('openid'),
            money:''
          }
        })
      },
      resShouKuan(){
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
          this.$dialog.toast({
            mes:this.shoukuanMsg,
            timeout: 1000,
          });
        },500)
      },
      resVipCard(){
        this.$store.dispatch({
          type:'resVipCard',
          params:{
            uniacid:config.uniacid,
            t:config.t,
            openid:localStorage.getItem('openid'),
          }
        })
      }
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
