<template>
  <div id="xiaxian">
    <yd-navbar title="我的下线">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon @click.native="back"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div class="orderNav">
      <span :class="{curOrderNav:curSel==1}" @click="lookXiaXian('一级')">一级({{xiaXian.list.length}})</span>
      <span :class="{curOrderNav:curSel==2}" @click="lookXiaXian('二级')">二级({{xiaXian.list.length}})</span>
    </div>
    <p class="tip">成员信息 <img src="/static/img/star_hong.png" alt="">为已经成为分销商的下线</p>
    <div class="item" v-for="(item,key) in xiaXian.list" :key="key">
      <img :src="item.avatar">
      <div class="middle">
        <h6><img src="/static/img/star_hong.png" alt="">{{item.realname}}</h6>
        <span>成为分销商时间:{{item.agenttime}}</span>
      </div>
      <div class="right">
        <span>+0</span>
        <span>0个成员</span>
      </div>
    </div>
    <footers></footers>
  </div>
</template>
<script>
  import config from '../../myConfig'
  export default {
    data(){
      return{
        curSel:1
      }
    },
    computed:{
      xiaXian(){
        return this.$store.state.xiaXian
      }
    },
    methods:{
      lookXiaXian(curSelText){
        curSelText=='一级'?this.curSel=1:(curSelText=='二级'?this.curSel=2:1)
        this.$store.dispatch({
          type:'resXiaXian',
          params:{
            openid:localStorage.getItem('openid'),
            mid:config.mid,
            t:config.t,
            status:this.curSel
          }
        })
      },
      back:function () {
        this.$router.go(-1)
      }
    },
    beforeCreate(){
      this.$store.dispatch({
        type:'resXiaXian',
        params:{
          openid:localStorage.getItem('openid'),
          mid:config.mid,
          t:config.t,
          status:1
        }
      })
    }
  }
</script>
<style>
  #xiaxian .orderNav{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    background: #fff;
    height:1.5625rem;
    line-height:1.5625rem;
  }
  #xiaxian .curOrderNav{
    color:red;
    border-bottom:2px solid red;
  }
  #xiaxian .orderNav span{
    display: block;
    height:100%;
    flex:0 0 50%;
    text-align: center;
  }
  #xiaxian .yd-tab-nav .yd-tab-active:before {
    width: 100%;
    margin-left: -50%;
  }
  #xiaxian .yd-tab-nav-item:not(:last-child):after {
    display: none;
  }
  #xiaxian .yd-tab-nav a{
    font-size:0.4375rem;
    padding:0.25rem 0;
  }
  #xiaxian .tip{
    background: #f5f5f5;
    text-align: left;
    padding:0.46875rem;
  }
  #xiaxian .tip img{
    width:0.625rem;
    height:0.625rem;
    vertical-align: middle;
  }
  #xiaxian .item{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    padding:0.3125rem;
  }
  #xiaxian .item:not(:last-child){
    border-bottom:1px solid #eee;
  }
  #xiaxian .item>img{
    width:1.875rem;
    height:1.875rem;
  }
  #xiaxian .item span{
    font-size:0.375rem;
    color:#aaa;
  }
  #xiaxian .item .middle{
    flex:0 0 60%;
    text-align: left;
    padding-left:0.3125rem;
  }
  #xiaxian .item .middle img{
    width:0.625rem;
    heigth:0.625rem;
    vertical-align: middle;
  }
  #xiaxian .item .right{
    text-align: right;
    border-left:1px solid #eee;
    flex: 0 0 20%;
  }
  #xiaxian .item .right span{
    display: block;
  }
</style>
