<template>
  <div id="getQuan">
    <yd-navbar title="领取优惠券">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon @click.native="back"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <yd-flexbox v-for="(item,key) in getQuan.list" :key="key"  @click.native="resCouponDetail(item.id)">
      <div class="left">
        <div>{{item.title3}}</div>
        {{item.title2}}
        <span></span>
      </div>
      <yd-flexbox-item>
        <div>{{item.tagtitle}}</div>
        <p v-if="item.t>'0'">剩余{{item.t}}/{{item.last}}</p>
        {{item.title4}}
      </yd-flexbox-item>
      <router-link to="#" class="right">
        {{item.gettypestr}}
        <span></span>
      </router-link>
    </yd-flexbox>
  </div>
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
      },
    },
    methods:{
      resCouponDetail(id){
        this.$store.dispatch({
          type:'resCouponDetail',
          params:{
            id:id,
            t:config.t,
            i:config.i,
            uniacid:config.uniacid
          }
        })
      },
      back:function () {
        this.$router.go(-1)
      }
    },
    beforeCreate(){
      this.$store.dispatch({
        type:'resGetQuan',
        params:{
          page:1,
          pagesize:10,
          t:config.t,
          i:config.i,
          uniacid:config.uniacid,
          cateid:0,
        }
      })
    }
  }
</script>
<style scoped>
  #getQuan header {
    height: 1.5rem !important;
    align-items: center;
  }
  #getQuan header .yd-navbar-center-title{
    font-size:.5rem !important;
  }
.yd-back-icon:before, .yd-next-icon:before {
    font-size: .6rem;
  }
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
  #getQuan .yd-flexbox .yd-flexbox-item p{
    color:#52b6ff
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
    top: 40%;
  }
  #getQuan .left span{
    position: absolute;
    left:-0.3125rem;
    top:45%;
  }
</style>
