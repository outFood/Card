<template>
  <yd-layout title="领取优惠券" link="/vipIndex"  id="getQuan">
    <yd-flexbox v-for="(item,key) in getQuan.list" :key="key">
      <div class="left">
        <div>{{item.title3}}</div>
        {{item.title2}}
        <span></span>
      </div>
      <yd-flexbox-item>
        <div>{{item.tagtitle}}</div>
        {{item.title4}}
      </yd-flexbox-item>
      <div class="right" @click="getCoupon(item.id)">
        立即领取
        <span></span>
      </div>
    </yd-flexbox>
  </yd-layout>
</template>
<script>
  import config from '../../myConfig'
  export default {
    data(){
      return{

      }
    },
    computed:{
      getQuan(){
        return this.$store.state.getQuan
      }
    },
    methods:{
      getCoupon(id){
        this.$dialog.confirm({
          title: '选填标题',
          mes: '我有一个小毛驴我从来也不骑！',
          opts: () => {
            this.$store.dispatch({
              type:'getCoupon',
              params:{
                id:id,
                t:config.t,
                uniacid:config.uniacid,
                mid:localStorage.getItem('userid'),
                openid:localStorage.getItem('openid'),
              }
            })
          }
        });
      }
    },
    beforeCreate(){
      this.$store.dispatch({
        type:'resGetQuan',
        params:{
          page:1,
          cateid:0,
          t:config.t
        }
      })
    }
  }
</script>
<style scoped>
  #getQuan .yd-flexbox{
    font-size:14px;
    background: #fff;
    padding:0.625rem;
    margin:0.625rem;
    line-height: 0.625rem;
    position: relative;
  }
  #getQuan .yd-flexbox .left{
    font-size:0.3125rem;
  }
  #getQuan .yd-flexbox .left div{
    font-size:0.625rem;
    font-weight: bold;
    color:red;
  }
  #getQuan .yd-flexbox .yd-flexbox-item{
    font-size:12px;
    color:#999;
  }
  #getQuan .yd-flexbox .yd-flexbox-item div{
    color:#000;
    font-weight: bold;
    font-size: 14px;
  }
  #getQuan .yd-flexbox .right{
    color:red;
  }
  #getQuan .yd-flexbox .right span{
    display: inline-block;
    width:0.625rem;
    height:0.625rem;
    background: #fafafa;
    border-radius: 50%;
  }
  #getQuan .yd-flexbox .left span {
    display: inline-block;
    width: 0.625rem;
    height: 0.625rem;
    background: #fafafa;
    border-radius: 50%;
  }
  #getQuan .right span {
    position: absolute;
    right: -0.3125rem;
    top: 45%;
  }
  #getQuan .left span{
    position: absolute;
    left:-0.3125rem;
    top:45%;
  }
</style>
